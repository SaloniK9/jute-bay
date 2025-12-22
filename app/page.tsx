"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const bags = [1, 2, 3, 4, 5, 6]; // Representing your bag items

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Text Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-stone-800">
          JuteBay
        </h1>
        <p className="text-stone-500 tracking-[0.5em] uppercase text-sm mt-2">Dubai • Abu Dhabi • Sharjah</p>
        
        <Link href="/shop">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-2xl"
          >
            Start Shopping
          </motion.button>
        </Link>
      </motion.div>

      {/* Circular Animated Popups */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-[600px] max-h-[600px] animate-spin-slow">
          {bags.map((bag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="absolute w-20 h-20 md:w-32 md:h-32 bg-stone-200 rounded-full border-2 border-white shadow-lg overflow-hidden flex items-center justify-center text-[10px] font-bold text-stone-400"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 60}deg) translate(250px) rotate(-${i * 60}deg)`,
              }}
            >
              {/* Replace with <img src={`/bag-${bag}.jpg`} /> later */}
              BAG {bag}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}