"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-container flex flex-col items-center py-4">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Princeton QT. All Rights Reserved.
      </p>
      <div className="footer-links flex gap-4 mt-2">
        <Link href="/contact" className="hover:text-orange-500">Contact</Link>
        <a href="mailto:pqt@princeton.edu" className="hover:text-orange-500">pqt@princeton.edu</a>
      </div>
    </footer>
  );
}
