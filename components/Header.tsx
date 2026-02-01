'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* BRAND SECTION: Logo + Tagline (Always visible and stacked) */}
        <div className="flex flex-col items-start gap-1">
          <Link href="/" className="relative h-9 w-24 sm:h-10 sm:w-28 transition-transform hover:scale-105 active:scale-95">
            <Image 
              src="/favicon.jpg" 
              alt="True Carry Logo" 
              fill 
              className="object-contain object-left"
              priority 
            />
          </Link>

          {/* TAGLINE: 'block' ensures it stays visible on mobile */}
          <p className="block text-[9px] sm:text-[10px] font-serif italic text-stone-600 tracking-wider leading-none">
            True Quality. Truly Sustainable.
          </p>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-black p-2 text-xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-[0.3em] text-black">
          <Link href="/" className="hover:text-stone-400 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-stone-400 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-stone-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-stone-400 transition-colors">Contact</Link>
          <Link href="/feedback" className="hover:text-stone-400 transition-colors">Feedback</Link>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-black/10 flex flex-col p-8 space-y-6 text-sm font-bold uppercase text-black md:hidden shadow-2xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-4">Home</Link>
            <Link href="/shop" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-4">Shop</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-4">About</Link>
          </div>
        )}
      </nav>
    </header>
  );
}