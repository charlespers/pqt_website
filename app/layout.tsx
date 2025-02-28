"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FractalBackground from "./FractalBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FractalBackground />
        <Navbar />

        {/* Stacked sections with centered content */}
        <main className="main-container">
          <div className="content-box">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
