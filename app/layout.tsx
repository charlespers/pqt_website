import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TradingGraph from "./TradingGraph";
import FractalBackground from "./FractalBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FractalBackground />
        <div className="math-background"></div> {/* 🔥 Animated math equations */}
        
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-b from-black to-transparent p-16">
          <h1 className="text-5xl text-center text-white font-bold">Welcome to Princeton QT</h1>
          <p className="text-center mt-4 text-gray-400">Explore the world of finance with cutting-edge tools</p>
        </section>

        <main className="min-h-screen flex flex-col justify-center items-center p-6">
          <div className="max-w-4xl w-full">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
