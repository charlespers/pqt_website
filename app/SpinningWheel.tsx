"use client";

import { useEffect, useRef, useState } from "react";

const SpinningWheel = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 2); // Rotate faster based on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="spinning-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
      ⚙️
    </div>
  );
};

export default SpinningWheel;
