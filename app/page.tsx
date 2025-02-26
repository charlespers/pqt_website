"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  return (
    <div id="content-container" className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-4xl font-extrabold">Welcome to Princeton Quantitative Traders</h2>
      <p className="mt-4 text-lg text-gray-400">
        We leverage quantitative methods to gain a competitive edge in trading.
      </p>
      {contentLoaded && (
        <p className="mt-4 text-green-400">Dynamic content loaded successfully!</p>
      )}
      <div className="mt-6">
        <a href="/mission" className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold">
          Learn More
        </a>
      </div>
    </div>
  );
}