import "@/app/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Princeton Quantitative Traders</title>
      </head>
      <body>
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">PQT</div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Animated Page Transition */}
        <main className="fade-in">
          {children}
        </main>

        <footer className="footer">
          <p>© 2025 Princeton Quantitative Traders. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
