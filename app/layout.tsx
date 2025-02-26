import Link from 'next/link';
import Head from 'next/head';
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" 
              content="default-src 'self'; script-src 'self' https://trustedsource.com; object-src 'none'; base-uri 'self';" />
      </Head>
      <div className="min-h-screen flex flex-col">
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
        <main className="container flex-grow">{children}</main>
      </div>
    </>
  );
}
