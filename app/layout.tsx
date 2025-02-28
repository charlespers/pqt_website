import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TradingGraph from "./TradingGraph";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="math-background"></div> {/* 🔥 Animated math equations */}
        <main className="min-h-screen flex flex-col justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
