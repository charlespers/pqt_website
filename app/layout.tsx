import "./globals.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { LaTeX } from "react-latex";
import TradingGraph from "./TradingGraph";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Princeton Quantitative Traders</title>
      </head>
      <body className="bg-black text-white">
        {/* Neon-Glowing Navbar */}
        <header className="navbar">
          <div className="logo">𝛼 PQT</div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/strategies">Alpha Strategies</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section with Dynamic Math */}
        <motion.div 
          className="hero"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>📈 Welcome to the Future of Quantitative Trading</h1>
          <p>Harnessing **data, mathematics, and technology** to **exploit market inefficiencies.**</p>
          <TradingGraph />
        </motion.div>

        {/* Page Content */}
        <main className="fade-in">
          {children}
        </main>

        {/* Financial Formula Footer */}
        <footer className="footer">
          <p>© 2025 Princeton Quantitative Traders</p>
          <LaTeX>{"E = mc^2 \\quad \\text{(But for markets, it's } P = \\alpha + \\beta X_t + \\varepsilon \\text{)}"}</LaTeX>
        </footer>
      </body>
    </html>
  );
}
