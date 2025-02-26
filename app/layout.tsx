import Link from 'next/link';
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 p-4 shadow-lg">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-400">Princeton Quantitative Traders</h1>
          <ul className="flex space-x-6">
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/members">Members</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/competitions">Competitions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      <main className="container flex-grow">{children}</main>
    </div>
  );
}