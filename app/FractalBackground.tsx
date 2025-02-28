import { useEffect, useRef, useState } from "react";

const FractalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update canvas size on window resize
  const handleResize = () => {
    setCanvasDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        const imaginary = (y - height / 2)
