import "./globals.css";
import Navbar from "../components/Navbar"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Princeton Quantitative Traders</title>
        <meta name="description" content="Pioneering quantitative trading and financial mathematics at Princeton." />
      </head>
      <body>
        {/* 📊 Grid Background */}
        <div className="background-grid"></div>

        {/* 🚀 Navbar */}
        <Navbar />

        {/* 📈 Main Content */}
        <main className="container mx-auto p-8 mt-16 animate-fade">{children}</main>
      </body>
    </html>
  );
}
