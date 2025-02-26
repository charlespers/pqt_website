"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("content-container");
    if (container) {
      const newElement = document.createElement("p");
      newElement.textContent = "Dynamic content loaded!";
      container.appendChild(newElement);

      return () => {
        if (container.contains(newElement)) {
          container.removeChild(newElement);
        }
      };
    }
  }, []);

  return (
    <div id="content-container" className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-4xl font-extrabold">Welcome to Princeton Quantitative Traders</h2>
      <p className="mt-4 text-lg text-gray-400">
        We leverage quantitative methods to gain a competitive edge in trading.
      </p>
      <div className="mt-6">
        <a href="/mission" className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold">
          Learn More
        </a>
      </div>
    </div>
  );
}
