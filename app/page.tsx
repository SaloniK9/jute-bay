"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const bags = [
    { id: 1, src: "/bag1.png", alt: "Tote Bag" },
    { id: 2, src: "/bag2.png", alt: "Clutch" },
    { id: 3, src: "/bag3.png", alt: "Eco Shopper" },
    { id: 4, src: "/bag4.png", alt: "Handbag" },
    { id: 5, src: "/bag5.png", alt: "Beach Bag" },
    { id: 6, src: "/bag6.png", alt: "Classic Jute" },
  ];

  return (
    // FIX: 'bg-stone-100' eliminates the white cast. 'min-h-screen' ensures it fills the window.
    <div className="bg-[#bda891] min-h-screen selection:bg-stone-900 selection:text-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* BACKGROUND TEXTURE */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/jute-texture.png" 
            alt="Jute Texture" 
            fill 
            className="object-cover opacity-80 mix-blend-multiply" 
            priority
          />
        </div>

        {/* RESPONSIVE CIRCULAR BAGS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            // FIX: Orbit scales better on laptops using 'vmin'
            className="relative w-[75vmin] h-[75vmin] max-w-[800px] max-h-[800px] flex items-center justify-center"
          >
            {bags.map((bag, i) => (
              <div
                key={bag.id}
                className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-xl overflow-hidden pointer-events-auto"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${i * (360 / bags.length)}deg) 
                    translateY(calc(-1 * var(--dynamic-radius))) 
                    rotate(-${i * (360 / bags.length)}deg)
                  `,
                }}
              >
                <img src={bag.src} className="w-full h-full object-contain p-4" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CENTER CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          // FIX: Added 'max-w-[90vw]' to ensure the card never hits screen edges
          className="z-20 text-center bg-white/5 backdrop-blur-3xl p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[60px] border border-white/20 shadow-2xl w-[90%] max-w-6xl mx-auto"
        >
          {/* FIX: Clamp prevents letters from getting "too big" on laptops */}
          <h1 
            className="font-black uppercase tracking-tighter text-stone-900 leading-[0.85] whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
          >
            True<span className="text-stone-600/70">Carry</span>
          </h1>
          
          <p className="text-stone-800 tracking-[0.3em] uppercase text-[10px] md:text-xs mt-6 md:mt-10 font-bold opacity-80">
            Luxury Sustainability. UAE
          </p>
          
          <Link href="/shop">
            <button className="mt-10 px-10 py-4 bg-stone-900 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all shadow-lg">
              View Collection
            </button>
          </Link>
        </motion.div>
      </main>

      {/* SECTION 2: ADDITIONAL CONTENT */}
      <section className="bg-white py-24 px-6 relative z-30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-stone-900">Premium Quality.</h2>
          <p className="mt-6 text-stone-500 text-lg">Ethically crafted for the modern world.</p>
        </div>
      </section>

      {/* DYNAMIC SPACING */}
      <style jsx global>{`
        :root { --dynamic-radius: 130px; }
        @media (min-width: 768px) { :root { --dynamic-radius: 250px; } }
        @media (min-width: 1024px) { :root { --dynamic-radius: 320px; } }
      `}</style>
    </div>
  );
}