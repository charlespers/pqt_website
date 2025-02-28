"use client"; // Required for client-side navigation

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="navbar-container fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-orange-500 text-center flex-grow sm:flex-grow-0">
          PQT
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          {["Home", "About", "Contact"].map((name, index) => {
            const href = `/${name.toLowerCase()}`;
            return (
              <Link
                key={index}
                href={href}
                className={`nav-link ${
                  pathname === href ? "text-orange-500 border-b-2 border-orange-500" : "text-white"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-black bg-opacity-90 py-4 space-y-4">
          {["Home", "About", "Contact"].map((name, index) => {
            const href = `/${name.toLowerCase()}`;
            return (
              <Link
                key={index}
                href={href}
                className={`text-lg ${pathname === href ? "text-orange-500" : "text-white"}`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
