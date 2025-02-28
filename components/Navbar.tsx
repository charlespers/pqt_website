"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50">
      <div className="navbar-container flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-4">
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image src="/PQT-Logo1.png" alt="PQT Logo" width={40} height={40} />
        </Link>

        {/* Title (Centered) */}
        <div className ="justify-center">
        <p className="flex-grow text-center text-sm sm:text-sm font-bold text-orange-500">
          Princeton Quantitative Traders
        </p>
        </div>

        {/* Navigation Links (Right) */}
        <div className="navbar-links flex space-x-8">
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
