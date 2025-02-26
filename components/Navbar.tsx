import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold">Princeton QT</h1>
      <div>
        <Link href="/" className="mx-2">Home</Link>
        <Link href="/mission" className="mx-2">Mission</Link>
        <Link href="/members" className="mx-2">Members</Link>
        <Link href="/sponsors" className="mx-2">Sponsors</Link>
        <Link href="/competitions" className="mx-2">Competitions</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
}