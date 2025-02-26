import "./globals.css";

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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <div className="container">{children}</div>

        <footer className="footer">
          <p>© 2025 Princeton Quantitative Traders. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
