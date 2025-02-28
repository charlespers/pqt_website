"use client";

import { useEffect, useRef } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const zoomRef = useRef(1);
  const centerXRef = useRef(0);
  const centerYRef = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const renderFractal = () => {
      const maxIterations = 300;
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
    };

    renderFractal();

    return () => {
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  const handleZoom = (event: WheelEvent) => {
    event.preventDefault();
    zoomRef.current = Math.max(1, zoomRef.current + event.deltaY * -0.005);
    requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      renderFractal();
    });
  };

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
    requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      renderFractal();
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="math-background"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

export default FractalBackground;
