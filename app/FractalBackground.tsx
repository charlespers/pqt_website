"use client"; // This marks this component as a client component

import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

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

  // Mandelbrot render function with reduced complexity for performance
  const renderMandelbrot = (ctx: CanvasRenderingContext2D, width: number, height: number, zoom: number) => {
    const maxIterations = 300; // Reduce the number of iterations to improve performance
    const centerX = -0.5;
    const centerY = 0;
    const scale = zoom;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const real = (x - width / 2) / (0.5 * scale * width) + centerX;
        const imaginary = (y - height / 2) / (0.5 * scale * height) + centerY;

        let cReal = real;
        let cImaginary = imaginary;
        let iteration = 0;

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
        data[index + 3] = 255;  // Alpha
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
          renderMandelbrot(ctx, width, height, zoom);
        }
      };

      render();

      // Use requestAnimationFrame for smoother rendering
      const animationId = requestAnimationFrame(render);

      return () => cancelAnimationFrame(animationId);
    }
  }, [zoom, canvasDimensions]);

  if (!canvasDimensions.width || !canvasDimensions.height) {
    return null; // Prevent rendering before dimensions are set
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]"> {/* Ensures it's behind all content */}
      <canvas ref={canvasRef} width={canvasDimensions.width} height={canvasDimensions.height}></canvas>
    </div>
  );
};

export default FractalBackground;
