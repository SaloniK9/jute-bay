import Link from 'next/link';

// src/components/Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-black/5 grayscale">
      <nav className="max-w-15xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Changed text-black for visibility */}
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-black">
          True<span className="text-stone-600">Carry</span>
        </Link>
        {/* Changed text-stone-800 for visibility */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-[0.2em] text-stone-800">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
          <Link href="/feedback" className="hover:text-black transition">Feedback</Link>
        </div>
      </nav>
    </header>
  );
}