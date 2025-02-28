"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container w-full flex justify-center mt-10">
      <div className="relative w-96 h-60">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width={384}  // 96 * 4
            height={240} // 60 * 4
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
