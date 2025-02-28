"use client";

import { useEffect, useRef } from "react";

const TradingAnimation = () => {
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

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawCandlestick = (x: number, open: number, close: number, high: number, low: number) => {
      ctx.strokeStyle = open > close ? "#ff4d4d" : "#4dff4d";
      ctx.lineWidth = 2;

      // Draw high-low line
      ctx.beginPath();
      ctx.moveTo(x, low);
      ctx.lineTo(x, high);
      ctx.stroke();

      // Draw body
      ctx.fillStyle = open > close ? "#ff4d4d" : "#4dff4d";
      ctx.fillRect(x - 5, Math.min(open, close), 10, Math.abs(open - close));
    };

    const drawChart = () => {
      drawGrid();

      let x = 100;
      for (let i = 0; i < 10; i++) {
        const open = Math.random() * height;
        const close = Math.random() * height;
        const high = Math.max(open, close) + Math.random() * 30;
        const low = Math.min(open, close) - Math.random() * 30;
        drawCandlestick(x, open, close, high, low);
        x += 50;
      }
    };

    drawChart();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      canvas.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <canvas ref={canvasRef} className="trading-animation" />;
};

export default TradingAnimation;
