'use client'; // Required for useState in Next.js App Router

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-black">
          True<span className="text-stone-600">Carry</span>
        </Link>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-black p-2 text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-[0.2em] text-black">
          <Link href="/" className="hover:text-stone-500 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-stone-500 transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-stone-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-stone-500 transition-colors">Contact</Link>
          <Link href="/feedback" className="hover:text-stone-500 transition-colors">Feedback</Link>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-black/10 flex flex-col p-6 space-y-6 text-base font-bold uppercase text-black md:hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-2 active:text-stone-500">
              Home
            </Link>
            <Link href="/shop" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-2 active:text-stone-500">
              Shop
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-2 active:text-stone-500">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-2 active:text-stone-500">
              Contact
            </Link>
            <Link href="/feedback" onClick={() => setIsOpen(false)} className="border-b border-stone-100 pb-2 active:text-stone-500">
              Feedback
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}