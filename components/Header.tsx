import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 grayscale hover:grayscale-0 transition-all duration-500">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
          Jute<span className="text-stone-500">Bay</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-stone-500 transition">Home</Link>
          <Link href="/shop" className="hover:text-stone-500 transition">Shop</Link>
          <Link href="/about" className="hover:text-stone-500 transition">About</Link>
          <Link href="/contact" className="hover:text-stone-500 transition">Contact</Link>
          <Link href="/feedback" className="hover:text-stone-500 transition">Feedback</Link>
        </div>
      </nav>
    </header>
  );
}