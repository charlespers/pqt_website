"use client";

import { useEffect, useRef } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      const cRe = -0.7, cIm = 0.27015;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const real = (x - width / 2) / (0.5 * width);
          const imaginary = (y - height / 2) / (0.5 * height);

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
          data[index + 3] = 255 * 0.4; // Apply transparency (opacity)
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };

    renderFractal();
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"
    />
  );
};

export default FractalBackground;
