import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white border-b border-gray-700">
    <Link href="/"><h1 className="text-2xl font-bold">NicoRodriguez.io</h1></Link>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}