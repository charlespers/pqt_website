import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/TradingGraph">Trading</Link>
      </div>
    </nav>
  );
}
