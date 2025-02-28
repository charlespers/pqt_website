"use client"; // This marks the component as client-side only

import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [centerX, setCenterX] = useState(0); // Center of the fractal in X direction
  const [centerY, setCenterY] = useState(0); // Center of the fractal in Y direction
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Throttle scroll events to avoid excessive zoom updates
  const [isScrolling, setIsScrolling] = useState(false);
  const throttleScroll = (event: WheelEvent) => {
    if (isScrolling) return;

    setIsScrolling(true);
    const newZoom = Math.max(1, zoom + event.deltaY * -0.005);
    setZoom(newZoom);

    // Delay state update to allow for smoother zoom behavior
    setTimeout(() => setIsScrolling(false), 100);
  };

  // Update canvas size on window resize
  const handleResize = () => {
    if (typeof window !== "undefined") {
      setCanvasDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    // Set initial canvas dimensions after component mounts (client-side)
    if (typeof window !== "undefined") {
      setCanvasDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Add scroll event listener
      window.addEventListener("wheel", throttleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("wheel", throttleScroll);
      };
    }
  }, []);

  // Julia Set fractal render function (colorful, rainbow gradient)
  const renderJuliaSet = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    zoom: number,
    centerX: number,
    centerY: number
  ) => {
    const maxIterations = 500;
    const scale = zoom;
    const cRe = -0.7; // Real part of the constant for Julia set
    const cIm = 0.27015; // Imaginary part of the constant for Julia set

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const real = (x - width / 2 + centerX) / (0.5 * scale * width);
        const imaginary = (y - height / 2 + centerY) / (0.5 * scale * height);

        let zr = real;
        let zi = imaginary;
        let iteration = 0;

        // Julia set iteration
        while (zr * zr + zi * zi <= 4 && iteration < maxIterations) {
          const temp = zr * zr - zi * zi + cRe;
          zi = 2 * zr * zi + cIm;
          zr = temp;
          iteration++;
        }

        // Color based on iteration count (Rainbow)
        const color = iteration === maxIterations ? 0 : Math.floor(255 * (iteration / maxIterations));
        const r = Math.floor((color * 0.7) % 255);
        const g = Math.floor((color * 0.5) % 255);
        const b = Math.floor((color * 0.3) % 255);

        const index = (x + y * width) * 4;
        data[index] = r;   // Red
        data[index + 1] = g; // Green
        data[index + 2] = b; // Blue
        data[index + 3] = 255;  // Alpha (fully opaque)
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvasDimensions.width && canvasDimensions.height) {
      const ctx = canvas.getContext("2d");
      const { width, height } = canvasDimensions;

      const render = () => {
        if (ctx) {
          ctx.clearRect(0, 0, width, height); // Clear previous frame
          renderJuliaSet(ctx, width, height, zoom, centerX, centerY);
        }
      };

      render();

      // Use requestAnimationFrame for smoother rendering
      const animationId = requestAnimationFrame(render);

      return () => cancelAnimationFrame(animationId);
    }
  }, [zoom, centerX, centerY, canvasDimensions]);

  // Handle mouse drag to move the fractal center
  const handleMouseMove = (event: MouseEvent) => {
    if (event.buttons === 1) { // Check if left mouse button is pressed
      setCenterX(centerX + event.movementX * 0.002); // Pan in the X direction
      setCenterY(centerY + event.movementY * 0.002); // Pan in the Y direction
    }
  };

  // Make sure we render only after canvas dimensions are set
  if (!canvasDimensions.width || !canvasDimensions.height) {
    return null;
  }

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-[-1]"
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Make sure the fractal does not block any interactions
      }}
    >
      <canvas
        ref={canvasRef}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        onMouseMove={handleMouseMove} // Enable panning with mouse drag
      ></canvas>
    </div>
  );
};

export default FractalBackground;
