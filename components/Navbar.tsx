"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar-container fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/PQT-Logo1.png" alt="PQT Logo" width={40} height={40} />
        </Link>

        {/* Navbar Title (Now Smaller) */}
        <h1 className="text-sm sm:text-sm font-bold text-orange-500">
          Princeton Quantitative Traders
        </h1>

        {/* Navigation Links - Properly Aligned */}
        <div className="flex space-x-6">
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About</Link>
          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
