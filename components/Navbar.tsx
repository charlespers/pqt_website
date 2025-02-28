"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link href="/">
          <Image src="/PQT-Logo1.png" alt="PQT Logo" width={60} height={60} />
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}
