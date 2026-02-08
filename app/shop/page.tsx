"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Instagram, Facebook, Mail, MapPin } from "lucide-react";

/**
 * HEADER COMPONENT (Inlined for resolution)
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-stone-200/50">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col items-start">
          <a href="/" className="relative h-8 w-24 md:w-28 transition-transform hover:scale-105 active:scale-95">
            <img 
              src="/favicon.jpg" 
              alt="True Carry Logo" 
              className="h-full object-contain object-left mix-blend-multiply"
            />
          </a>
          <p className="block text-[7px] md:text-[8px] font-serif italic text-stone-500 tracking-wider mt-0.5 uppercase">
            True Quality. Truly Sustainable.
          </p>
        </div>

        <button className="md:hidden text-stone-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden md:flex space-x-8 text-[9px] font-black uppercase tracking-[0.3em] text-stone-900">
          <a href="/" className="hover:text-stone-50 transition-colors">Home</a>
          <a href="/shop" className="text-stone-400">Products</a>
          <a href="/about" className="hover:text-stone-50 transition-colors">About</a>
          <a href="/contact" className="hover:text-stone-50 transition-colors">Contact</a>
          <a href="/feedback" className="hover:text-stone-50 transition-colors">Feedback</a>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#f5f2ed] border-b border-stone-200 flex flex-col p-8 space-y-6 text-[10px] font-black uppercase text-stone-900 md:hidden shadow-2xl"
          >
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/shop" onClick={() => setIsOpen(false)}>Products</a>
            <a href="/about" onClick={() => setIsOpen(false)}>About</a>
            <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="/feedback" onClick={() => setIsOpen(false)}>Feedback</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default function ShopLandingPage() {
  const collections = [
    {
      title: "Landscape Series",
      href: "/shop/landscape",
      image: "/landscape-collection-header.png",
      description: "10 vibrant prints capturing the essence of natural landscapes. Durable, laminated jute for your everyday journeys.",
      tag: "Printed Jute",
      size: '12"(H) x 12"(W) x 5"(D)'
    },
    {
      title: "Nautica Collection",
      href: "/shop/nautica",
      image: "/nautica.png",
      description: "11 nautical patterns inspired from maritime and sailing. Features heavy-duty P.U. handles for premium carry.",
      tag: "Maritime Series",
      size: '17.5"(H) x 14.5"(W) x 4"(D)'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5f2ed]">
      <Header />
      
      {/* FIXED RICH TEXTURE BACKGROUND - Increased opacity and contrast to remove white cast */}
      <div className="fixed inset-0 z-0 bg-[#bda891]/25 pointer-events-none">
        <img 
          src="/jute-texture.png" 
          alt="Jute Texture" 
          className="w-full h-full object-cover opacity-90 mix-blend-overlay contrast-125" 
        />
      </div>

      {/* HERO SECTION - Updated container color to be more earthy/saturated */}
      <section className="relative z-10 pt-32 pb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-[#e4d6c6]/60 backdrop-blur-xl p-10 md:p-14 rounded-full border border-white/40 text-center shadow-2xl flex flex-col items-center justify-center"
        >
           <h1 className="text-4xl md:text-5xl font-serif italic text-stone-900 tracking-tight leading-tight">
             Our Collections
           </h1>
           <div className="w-16 h-1 bg-stone-900/60 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </section>

      {/* COLLECTION DIRECTORY CARDS - Less transparent background to combat white cast */}
      <section className="relative z-10 px-6 max-w-6xl mx-auto space-y-16 pb-24">
        {collections.map((col, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-white/50 flex flex-col lg:flex-row gap-12 items-center transition-all hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)] group"
          >
            {/* Image Frame - Richened the background shadow */}
            <div className="w-full lg:w-1/2 relative aspect-square bg-[#f5f2ed] shadow-inner overflow-hidden rounded-[2.5rem] border border-stone-200/50 flex items-center justify-center">
              <img 
                src={col.image} 
                alt={col.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
            </div>

            {/* Collection Details */}
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-stone-900 text-white text-[9px] tracking-[0.4em] uppercase font-black rounded-sm mb-6">
                  {col.tag}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight mb-4">
                  {col.title}
                </h2>
                <p className="text-lg leading-relaxed text-stone-800 font-medium opacity-90 border-stone-300 lg:border-l-2 lg:pl-6">
                  {col.description}
                </p>
              </div>
              
              <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                   <h4 className="text-[9px] font-black uppercase text-stone-400 tracking-widest mb-1">Dimensions</h4>
                   <p className="text-md font-bold text-black italic">{col.size}</p>
                </div>
                <a href={col.href} className="bg-stone-900 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-black hover:px-12 shadow-xl flex items-center gap-3">
                   Explore Collection <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}