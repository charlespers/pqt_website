"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FractalBackground from "./FractalBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Background */}
        <FractalBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main className="flex flex-col items-center min-h-screen px-4">
          <div className="content-wrapper">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
