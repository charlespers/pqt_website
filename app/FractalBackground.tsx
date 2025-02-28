"use client"; // Marks the component as client-side only

import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Throttle scroll events to avoid excessive zoom updates
  const [isScrolling, setIsScrolling] = useState(false);
  const throttleScroll = (event: WheelEvent) => {
    if (isScrolling) return;

    setIsScrolling(true);
    setZoom((prevZoom) => Math.max(1, prevZoom + event.deltaY * -0.005));

    setTimeout(() => setIsScrolling(false), 100);
  };

  // Update canvas size on window resize
  const handleResize = () => {
    setCanvasDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    setCanvasDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", throttleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", throttleScroll);
    };
  }, []);

  // Render the Julia Set fractal
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
    const cRe = -0.7;
    const cIm = 0.27015;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const real = (x - width / 2 + centerX) / (0.5 * scale * width);
        const imaginary = (y - height / 2 + centerY) / (0.5 * scale * height);

        let zr = real;
        let zi = imaginary;
        let iteration = 0;

        while (zr * zr + zi * zi <= 4 && iteration < maxIterations) {
          const temp = zr * zr - zi * zi + cRe;
          zi = 2 * zr * zi + cIm;
          zr = temp;
          iteration++;
        }

        const color = iteration === maxIterations ? 0 : Math.floor(255 * (iteration / maxIterations));
        const r = Math.floor((color * 0.7) % 255);
        const g = Math.floor((color * 0.5) % 255);
        const b = Math.floor((color * 0.3) % 255);

        const index = (x + y * width) * 4;
        data[index] = r;
        data[index + 1] = g;
        data[index + 2] = b;
        data[index + 3] = 255;
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
          ctx.clearRect(0, 0, width, height);
          renderJuliaSet(ctx, width, height, zoom, centerX, centerY);
        }
      };

      render();

      const animationId = requestAnimationFrame(render);
      return () => cancelAnimationFrame(animationId);
    }
  }, [zoom, centerX, centerY, canvasDimensions]);

  // Handle mouse drag to move the fractal center
  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (event.buttons === 1) {
      setCenterX((prevX) => prevX + event.movementX * 0.002);
      setCenterY((prevY) => prevY + event.movementY * 0.002);
    }
  };

  if (!canvasDimensions.width || !canvasDimensions.height) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <canvas
        ref={canvasRef}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        onMouseMove={handleMouseMove}
        style={{ width: "100%", height: "100%", cursor: "grab" }}
      ></canvas>
    </div>
  );
};

export default FractalBackground;
