"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Leaf, 
  ShieldCheck, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X 
} from "lucide-react";

/**
 * HEADER COMPONENT
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f5f2ed]/90 backdrop-blur-md border-b border-stone-200/50">
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
          <a href="/shop" className="hover:text-stone-50 transition-colors">Products</a>
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

export default function App() {
  // Hero bags (Circular Gallery at top) - Standard bag assets
  const heroBags = [
    { id: 1, src: "/bag1.png", alt: "Tote Bag" },
    { id: 2, src: "/bag2.png", alt: "Clutch" },
    { id: 3, src: "/bag3.png", alt: "Eco Shopper" },
    { id: 4, src: "/bag4.png", alt: "Handbag" },
    { id: 5, src: "/bag5.png", alt: "Beach Bag" },
    { id: 6, src: "/bag6.png", alt: "Classic Jute" },
  ];

  // Specific print images for "The Gallery" section
  const galleryBags = [
    { id: 1, src: "/palm-beach.png", alt: "Palm Beach Sunset" },
    { id: 2, src: "/Screenshot 2026-02-08 101441.png", alt: "Sailboat Stripes" },
    { id: 3, src: "/mountain.png", alt: "Mountain Lake" },
    { id: 4, src: "/birds.png", alt: "Tropical Birds" },
    { id: 5, src: "/forest.png", alt: "Pine Forest" },
    { id: 6, src: "/hibiscus.png", alt: "Hibiscus Print" },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);

  return (
    <div ref={containerRef} className=" selection:bg-stone-900 selection:text-white overflow-x-hidden text-stone-900">
      <Header />

      {/* SECTION 1: HERO - 75% HEIGHT ON MOBILE */}
      <motion.main 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-[75vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* LIGHTER TEXTURE BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-[#bda891]/20">
          <img 
            src="/jute-texture.png" 
            alt="Jute Texture" 
            className="w-full h-full object-cover opacity-80 mix-blend-overlay contrast-100" 
          />
        </div>

        {/* COMPACT ORBITAL GALLERY - Uses Hero Bags */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="relative w-[85vmin] h-[85vmin] max-w-[700px] max-h-[700px] flex items-center justify-center"
          >
            {heroBags.map((bag, i) => (
              <div
                key={bag.id}
                className="absolute w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white shadow-xl rounded-full border-[5px] border-[#f5f2ed] pointer-events-auto transition-all hover:scale-110 overflow-hidden"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${i * (360 / heroBags.length)}deg) 
                    translateY(calc(-1 * var(--dynamic-radius))) 
                    rotate(-${i * (360 / heroBags.length)}deg)
                  `,
                }}
              >
                <img 
                  src={bag.src} 
                  className="w-full h-full object-cover" 
                  alt={bag.alt} 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CENTRAL BRAND CONTAINER - Adjusted for proper "TRUECARRY" alignment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-20 text-center px-4 w-full max-w-2xl md:max-w-4xl"
        >
          <div className="bg-[#e4d6c6]/80 backdrop-blur-2xl p-8 md:p-14 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            
            {/* Branding with fixed alignment and responsive scaling to prevent overflow */}
            <h1 className="w-full text-[12vw] md:text-[7rem] font-black uppercase tracking-tighter text-stone-900 leading-[0.85] mb-2 text-center">
              True<span className="text-[#8b735b]/80">Carry</span>
            </h1>
            
            <p className="text-stone-700 tracking-[0.4em] uppercase text-[7px] md:text-[10px] mt-4 md:mt-8 font-black opacity-70 text-center">
              True Quality. Truly Sustainable.
            </p>
            
            <div className="mt-8 md:mt-12 w-full flex justify-center">
              <a href="/shop">
                <button className="px-10 py-3.5 bg-stone-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-black transition-all shadow-xl flex items-center gap-4 group">
                  View Collection 
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 opacity-50">
          <span className="text-[7px] uppercase tracking-[0.4em] font-black">Scroll</span>
          <div className="w-px h-10 bg-stone-400" />
        </div>
      </motion.main>

      {/* SECTION 2: CRAFTED FROM NATURE */}
      <section className="relative py-16 md:py-32 px-6 bg-white z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group max-w-md mx-auto lg:mx-0">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/Jute-texture-home.png" 
                alt="Natural Jute" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#bda891]/20 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-stone-900 p-8 md:p-10 rounded-2xl text-white shadow-2xl hidden sm:block">
              <h4 className="text-2xl md:text-3xl font-serif italic mb-0.5 leading-none">100%</h4>
              <p className="text-[7px] uppercase tracking-[0.3em] opacity-60 font-black leading-none mt-1">Biodegradable</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-[1.1]">
                Crafted from <br /> Nature's Finest.
              </h2>
              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Our bags are made from premium laminated natural jute. It's more than a material; it's a commitment to a world where luxury doesn't cost the earth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Leaf size={20} />, title: "Eco-Friendly", desc: "Sourced with respect for the planet." },
                { icon: <ShieldCheck size={20} />, title: "True Quality", desc: "Reinforced stitching and padded handles." }
              ].map((val, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[#f5f2ed] border border-stone-100 transition-colors hover:border-stone-200">
                  <div className="text-stone-900 shrink-0">{val.icon}</div>
                  <div>
                    <h5 className="font-black text-[9px] uppercase tracking-widest text-stone-900 mb-1">{val.title}</h5>
                    <p className="text-stone-500 text-[11px] leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE GALLERY - Printed images fill circles */}
      <section className="py-16 md:py-32 px-6 bg-[#ebe0cf]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h3 className="text-5xl md:text-8xl font-serif italic text-stone-900 leading-none">The Gallery</h3>
              <p className="text-stone-500 max-w-md text-sm md:text-base font-medium opacity-80 text-center md:text-left">Our most-loved designs, capturing the spirit of the natural world.</p>
            </div>
            <a href="/shop" className="group flex items-center gap-4 text-stone-900 font-black uppercase text-[10px] tracking-[0.4em] pb-2 border-b-2 border-stone-300 transition-all hover:border-black">
              View All Products <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryBags.slice(0, 3).map((prod) => (
              <div key={prod.id} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full overflow-hidden mb-6 rounded-full bg-white shadow-lg border border-stone-200/50 transition-all hover:-translate-y-3">
                  <img 
                    src={prod.src} 
                    alt={prod.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-stone-900 border border-stone-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Explore
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-stone-900 mb-1">{prod.alt}</h4>
                  <p className="text-stone-400 text-[8px] uppercase font-bold italic tracking-widest">Laminated Natural Jute</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - LIGHT YELLOWISH BG COLOR [#ebe0cf] */}
      <footer className="bg-[#ebe0cf] border-t border-stone-200/50 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start gap-1">
                <img src="/favicon.jpg" alt="True Carry" className="h-9 object-contain mix-blend-multiply" />
                <p className="text-[9px] font-serif italic text-stone-400">True Quality. Truly Sustainable.</p>
              </div>
              <p className="text-stone-500 text-[11px] leading-relaxed max-w-xs font-medium">
                Premium Jute Carry Bags. Combining tradition with modern sustainable fashion across the UAE.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Mail size={18} /></a>
              </div>
            </div>

            <div className="space-y-6">
              <h6 className="font-black text-[9px] uppercase tracking-[0.4em] text-stone-900">Collections</h6>
              <ul className="space-y-3 text-[10px] text-stone-500 font-bold uppercase tracking-widest">
                <li><a href="/shop/landscape" className="hover:text-stone-900 transition-colors">Landscape Series</a></li>
                <li><a href="/shop/nautica" className="hover:text-stone-900 transition-colors">Nautica Collection</a></li>
                <li><a href="/shop" className="hover:text-stone-900 transition-colors">Printed Jute Bags</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h6 className="font-black text-[9px] uppercase tracking-[0.4em] text-stone-900">Support</h6>
              <ul className="space-y-3 text-[10px] text-stone-500 font-bold uppercase tracking-widest">
                <li><a href="/about" className="hover:text-stone-900 transition-colors">Our Story</a></li>
                <li><a href="/feedback" className="hover:text-stone-900 transition-colors">Feedback</a></li>
                <li><a href="/contact" className="hover:text-stone-900 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h6 className="font-black text-[9px] uppercase tracking-[0.4em] text-stone-900">Reach Us</h6>
              <div className="flex gap-4 items-start justify-center md:justify-start">
                <MapPin size={18} className="text-stone-400 shrink-0" />
                <span className="text-stone-500 text-[10px] font-bold leading-relaxed uppercase tracking-widest">India, Maharashtra <br /> Sustainable Hub</span>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-stone-200/30 text-center">
            <p className="text-stone-600 text-[8px] uppercase tracking-[0.5em] font-black">© 2026 TrueCarry. Truly Sustainable. Truly Yours.</p>
          </div>
        </div>
      </footer>

      {/* DYNAMIC RADIUS FOR ORBIT */}
      <style>
        {`
          :root { --dynamic-radius: 110px; }
          @media (min-width: 480px) { :root { --dynamic-radius: 140px; } }
          @media (min-width: 768px) { :root { --dynamic-radius: 240px; } }
          @media (min-width: 1024px) { :root { --dynamic-radius: 300px; } }
          
          body { overflow-x: hidden; width: 100%; position: relative; background-color: #f5f2ed; }
        `}
      </style>
    </div>
  );
}