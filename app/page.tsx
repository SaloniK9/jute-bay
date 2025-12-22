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
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* 1. BACKGROUND TEXTURE (Low opacity, no grayscale) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/jute-texture.png" 
          alt="Jute Texture" 
          fill 
          className="object-cover opacity-80" 
          priority
        />
      </div>

      {/* 2. CIRCULAR BAGS (Surrounding the name) */}
      {/* We set a large radius (350px) to ensure they go around the central card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-[700px] h-[700px] flex items-center justify-center"
        >
          {bags.map((bag, i) => (
            <div
              key={bag.id}
              className="absolute w-28 h-28 md:w-36 md:h-36 bg-white rounded-full border-2 border-stone-200 shadow-xl overflow-hidden pointer-events-auto"
              style={{
                // Math to place them in a circle around the center
                top: "50%",
                left: "50%",
                transform: `
                  translate(-50%, -50%) 
                  rotate(${i * (360 / bags.length)}deg) 
                  translateY(-320px) 
                  rotate(-${i * (360 / bags.length)}deg)
                `,
              }}
            >
              <img 
                src={bag.src} 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=Bag"; }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. CENTER CARD (Very transparent to show BG) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-20 text-center bg-white/10 backdrop-blur-md p-12 rounded-[40px] border border-white/30 shadow-2xl max-w-2xl"
      >
        <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter text-stone-900 leading-none">
          Jute<span className="text-stone-600">Bay</span>
        </h1>
        <p className="text-stone-800 tracking-[0.4em] uppercase text-sm mt-6 font-bold">
          Luxury Sustainability • UAE
        </p>
        
        <Link href="/shop">
          <button className="mt-10 px-12 py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all">
            Start Shopping
          </button>
        </Link>
      </motion.div>
    </main>
  );
}