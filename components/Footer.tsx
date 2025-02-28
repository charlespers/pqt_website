"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Princeton QT. All Rights Reserved.</p>
      <div className="footer-links">
        <Link href="/contact">Contact</Link>
        <a href="mailto:pqt@princeton.edu">pqt@princeton.edu</a>
      </div>
    </footer>
  );
}
