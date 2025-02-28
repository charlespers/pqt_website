"use client"; // This marks the component as client-side only

import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [offsetX, setOffsetX] = useState(0); // Offset for keeping the fractal centered on scroll
  const [offsetY, setOffsetY] = useState(0);

  // Throttle scroll events to avoid excessive zoom updates
  const [isScrolling, setIsScrolling] = useState(false);
  const throttleScroll = (event: WheelEvent) => {
    if (isScrolling) return; // Prevent rapid zoom updates

    setIsScrolling(true);

    // Update zoom based on scroll direction
    const newZoom = Math.max(1, zoom + event.deltaY * -0.005);
    setZoom(newZoom);

    // Delay state update to allow for smooth scrolling
    setTimeout(() => setIsScrolling(false), 100); // Adjust this delay for smoother scrolling
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

  // Spiraling fractal render function (based on a modified Julia set or spiral fractal)
  const renderSpiralFractal = (ctx: CanvasRenderingContext2D, width: number, height: number, zoom: number, offsetX: number, offsetY: number) => {
    const maxIterations = 500; // Lowered iterations to improve performance
    const scale = zoom;
    const centerX = 0; // Keep it centered
    const centerY = 0;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        // Calculate coordinates based on the center and zoom
        const real = (x - width / 2 + offsetX) / (0.5 * scale * width) + centerX;
        const imaginary = (y - height / 2 + offsetY) / (0.5 * scale * height) + centerY;

        let cReal = real;
        let cImaginary = imaginary;
        let iteration = 0;

        // Fractal iteration based on a spiral-like formula (Julia set or similar)
        while (iteration < maxIterations) {
          const real2 = cReal * cReal - cImaginary * cImaginary + real;
          const imaginary2 = 2 * cReal * cImaginary + imaginary;

          cReal = real2;
          cImaginary = imaginary2;

          if (cReal * cReal + cImaginary * cImaginary > 4) {
            break;
          }

          iteration++;
        }

        const color = iteration === maxIterations ? 0 : Math.floor(255 * (iteration / maxIterations));

        const index = (x + y * width) * 4;
        data[index] = color; // Red
        data[index + 1] = color; // Green
        data[index + 2] = color; // Blue
        data[index + 3] = 255;  // Alpha (fully opaque for the fractal)
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
          // Clear the canvas before rendering to ensure transparency
          ctx.clearRect(0, 0, width, height); // This will clear the canvas and leave it transparent
          renderSpiralFractal(ctx, width, height, zoom, offsetX, offsetY);
        }
      };

      render();

      // Use requestAnimationFrame for smoother rendering
      const animationId = requestAnimationFrame(render);

      return () => cancelAnimationFrame(animationId);
    }
  }, [zoom, offsetX, offsetY, canvasDimensions]);

  // Function to keep the fractal centered
  const handleScroll = (event: WheelEvent) => {
    const newZoom = Math.max(1, zoom + event.deltaY * -0.005);
    setZoom(newZoom);

    // Adjust the offset to ensure the fractal remains centered
    setOffsetX((prev) => prev + event.deltaX * 0.2);  // Optional: fine-tune the X offset to keep the fractal centered
    setOffsetY((prev) => prev + event.deltaY * 0.2);  // Optional: fine-tune the Y offset
  };

  if (!canvasDimensions.width || !canvasDimensions.height) {
    return null; // Prevent rendering before dimensions are set
  }

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-[-1]"
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Prevent the canvas from blocking interactions
      }}
    >
      <canvas ref={canvasRef} width={canvasDimensions.width} height={canvasDimensions.height}></canvas>
    </div>
  );
};

export default FractalBackground;
