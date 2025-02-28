import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  
  // Mandelbrot render function
  const renderMandelbrot = (ctx: CanvasRenderingContext2D, width: number, height: number, zoom: number) => {
    const maxIterations = 1000;
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

  // Handle scroll event to adjust zoom
  const handleScroll = (event: WheelEvent) => {
    const newZoom = Math.max(1, zoom + event.deltaY * -0.005);
    setZoom(newZoom);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const { width, height } = canvas;

      const render = () => {
        if (ctx) {
          renderMandelbrot(ctx, width, height, zoom);
        }
      };

      render();

      // Add event listener for scroll
      window.addEventListener("wheel", handleScroll);

      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, [zoom]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
    </div>
  );
};

export default FractalBackground;
