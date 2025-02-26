import Link from 'next/link';
import "./globals.css";
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 p-4 shadow-lg">
        <div className="container flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">Princeton Quantitative Traders</h1>
          <ul className="flex space-x-6">
            {['/mission', '/members', '/sponsors', '/competitions', '/contact'].map((link) => (
              <li key={link}>
                <Link href={link} className={`${pathname === link ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>{link.replace('/', '')}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="container flex-grow animate-fade-in">{children}</main>
    </div>
  );
}