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
        {/* Fractal Background - Properly layered behind everything */}
        <FractalBackground />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center min-h-screen px-4">
          <div className="content-box">
            {/* Princeton QT Logo - Centered */}
            <div className="flex justify-center">
              <Image src="/PQT-Logo1.png" alt="PQT Logo" width={200} height={200} />
            </div>

            {/* Mission Statement */}
            <p className="text-lg mt-4">
              Our mission is to bridge the gap between Princeton students and quantitative finance 
              through education, research, and competitions.
            </p>

            {/* Princeton Tiger Image (Should be transparent) */}
            <div className="flex justify-center mt-4">
              <Image 
                src="/princeton-tiger.png" 
                alt="Princeton Tiger" 
                width={200} 
                height={200} 
                className="princeton-tiger" 
              />
            </div>

            {/* Inject Page-Specific Content */}
            <div className="page-content">{children}</div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
