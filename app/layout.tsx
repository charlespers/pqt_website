"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FractalBackground from "./FractalBackground";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FractalBackground />
        <Navbar />

        {/* Center content in a limited width so fractal is visible on sides */}
        <main className="flex flex-col items-center min-h-screen px-4">
          <div className="content-container">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
