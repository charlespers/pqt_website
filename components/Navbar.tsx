import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link href="/">
          <img src="/PQT-Logo1.png" alt="PQT Logo" />
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
