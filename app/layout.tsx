"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FractalBackground from "./FractalBackground";
import SpinningWheel from "./SpinningWheel";
//import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FractalBackground />
        <SpinningWheel />

        {/* Hero Section */}
        <section className="hero-section bg-black text-orange-500 py-20 text-center">
          <div className="hero-container max-w-4xl mx-auto p-6 bg-gradient-to-r from-black to-gold rounded-xl shadow-lg">
            <h1 className="text-5xl font-bold uppercase">Welcome to Princeton QT</h1>
            <p className="text-xl mt-4">Exploring the world of finance with cutting-edge tools</p>
          </div>
        </section>

        {/* Home Page Content */}
        <section className="home-content flex flex-col items-center py-20">
          <div className="content-box bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg text-center max-w-3xl">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={200} height={200} className="mx-auto" />
            <p className="text-lg mt-4">Our mission is to bridge the gap between Princeton students and quantitative finance through education, research, and competitions.</p>
            <Image src="/princeton-tiger.png" alt="Princeton Tiger" width={100} height={100} className="mx-auto mt-4" />
          </div>
        </section>

        {/* Officers Section */}
        <section className="officers-section text-center py-20">
          <h2 className="text-4xl text-orange-500 font-bold mb-8">Meet Our Team</h2>
          <div className="officers-container grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Officer placeholders (to be updated with actual images later) */}
            {['President', 'Vice President', 'Treasurer', 'Officer'].map((role) => (
              <div key={role} className="officer-card p-4 bg-black rounded-lg">
                <div className="h-32 w-32 bg-gray-700 rounded-full mx-auto"></div>
                <p className="mt-4 text-lg text-white">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Page Content */}
        <section className="about-content flex flex-col items-center py-20">
          <h2 className="text-4xl text-orange-500 font-bold mb-8">About Princeton QT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {['Competitions', 'Projects', 'Research', 'Education'].map((section) => (
              <div key={section} className="about-box bg-gradient-to-b from-black to-orange-700 p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-orange-400">{section}</h3>
                <p className="text-white mt-2">Description of {section} initiatives.</p>
              </div>
            ))}
          </div>
        </section>

        <main className="min-h-screen flex flex-col justify-center items-center">
          <div className="max-w-4xl w-full">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
