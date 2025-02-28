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

        <main className="min-h-screen flex flex-col justify-center items-center">
          <div className="max-w-4xl w-full">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
