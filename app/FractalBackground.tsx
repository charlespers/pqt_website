"use client"; // Marks the component as client-side only

import { useEffect, useRef, useState, useCallback } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const zoomRef = useRef(1);
  const centerXRef = useRef(0);
  const centerYRef = useRef(0);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  // Optimized zoom update with useRef
  const handleZoom = (event: WheelEvent) => {
    event.preventDefault();
    zoomRef.current = Math.max(1, zoomRef.current + event.deltaY * -0.005);
    requestAnimationFrame(renderFractal);
  };

  // Handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      setCanvasDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("wheel", handleZoom);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("wheel", handleZoom);
    };
  }, []);

  // Render the Julia Set fractal (optimized)
  const renderFractal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const maxIterations = 500;
    const scale = zoomRef.current;
    const cRe = -0.7, cIm = 0.27015;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const real = (x - width / 2 + centerXRef.current) / (0.5 * scale * width);
        const imaginary = (y - height / 2 + centerYRef.current) / (0.5 * scale * height);

        let zr = real, zi = imaginary, iteration = 0;
        while (zr * zr + zi * zi <= 4 && iteration < maxIterations) {
          const temp = zr * zr - zi * zi + cRe;
          zi = 2 * zr * zi + cIm;
          zr = temp;
          iteration++;
        }

        const color = iteration === maxIterations ? 0 : Math.floor(255 * (iteration / maxIterations));
        const index = (x + y * width) * 4;
        data[index] = (color * 0.7) % 255;
        data[index + 1] = (color * 0.5) % 255;
        data[index + 2] = (color * 0.3) % 255;
        data[index + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Redraw fractal when canvas size changes
  useEffect(() => {
    renderFractal();
  }, [canvasDimensions, renderFractal]);

  // Handle mouse drag to pan
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    centerXRef.current += event.movementX * 0.002;
    centerYRef.current += event.movementY * 0.002;
    requestAnimationFrame(renderFractal);
  };

  if (!canvasDimensions.width || !canvasDimensions.height) return null;

  return (
    <>
      {/* Content Layer - This stays in front of the fractal */}
      <div className="relative z-10 text-center p-10">
        <h1 className="text-white text-4xl font-bold">Beautiful Fractal Background</h1>
        <p className="text-gray-300 text-lg mt-4">Explore the mesmerizing Julia Set in real-time!</p>
      </div>

      {/* Background Layer - Fractal */}
      <div className="fixed top-0 left-0 w-full h-full">
        <canvas
          ref={canvasRef}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
      </div>
    </>
  );
};

export default FractalBackground;
