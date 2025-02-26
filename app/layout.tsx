import Link from 'next/link';
import "./globals.css";

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-black p-4 shadow-lg">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold">Princeton Quantitative Traders</h1>
          <ul className="flex space-x-4">
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/members">Members</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/competitions">Competitions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      <main className="container mt-8">{children}</main>
    </div>
  );
}
