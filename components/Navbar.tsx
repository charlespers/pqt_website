"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      <div className="navbar-container flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/PQT-Logo1.png" alt="PQT Logo" width={50} height={50} />
        </Link>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-orange-500 text-center flex-grow mx-4">
          Princeton Quantitative Traders
        </h1>

        {/* Navigation Links */}
        <div className="navbar-links hidden sm:flex space-x-6">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
