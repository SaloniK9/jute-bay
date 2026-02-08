'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function NauticaGallery() {
const nauticaBags = [
    { id: 1, name: "Sailboat Stripes", image: "/Screenshot 2026-02-08 101441.png" },
    { id: 2, name: "Maritime Herringbone", image: "/Screenshot 2026-02-08 101451.png" },
    { id: 3, name: "Anchor Horizon", image: "/Screenshot 2026-02-08 101515.png" },
    { id: 4, name: "Coastal Lattice", image: "/Screenshot 2026-02-08 101534.png" },
    { id: 5, name: "Deep Sea Chevron", image: "/Screenshot 2026-02-08 101550.png" },
    { id: 6, name: "Ocean Waves", image: "/Screenshot 2026-02-08 101606.png" },
    { id: 7, name: "Anchor Zigzag", image: "/Screenshot 2026-02-08 101621.png" },
    { id: 8, name: "Regatta Diagonal", image: "/Screenshot 2026-02-08 101655.png" },
    { id: 9, name: "Paper Boat Fleet", image: "/Screenshot 2026-02-08 101711.png" },
    { id: 10, name: "Captain's Wheel", image: "/Screenshot 2026-02-08 101752.png" },
    { id: 11, name: "Nautical Compass", image: "/Screenshot 2026-02-08 101802.png" } // Main model bag
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Header />
      
      {/* 1. FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-[url('/jute-texture.png')] bg-repeat bg-center pointer-events-none"></div>

      <section className="relative z-10 pt-48 px-6 max-w-6xl mx-auto pb-32">
        
        {/* OVAL BACK BUTTON CONTAINER */}
        <Link 
          href="/shop" 
          className="relative z-20 inline-flex items-center gap-3 mb-12 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-black hover:bg-stone-900 hover:text-white transition-all duration-300 group shadow-sm"
        >
          <span className="text-lg transform group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
          Back to Collections
        </Link>

        {/* LIGHTENED SUMMARY CARD */}
        <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/30 mb-20">
          <h1 className="text-5xl font-serif italic text-stone-900 mb-6">Nautica Collection</h1>
          <p className="text-lg text-stone-700 leading-relaxed border-l-2 border-blue-200 pl-6 italic">
            "11 nautical patterns inspired from maritime & sailing."
          </p>
          <div className="mt-8 pt-8 border-t border-stone-200/40 grid grid-cols-2 gap-4">
             <div>
                <h4 className="text-[9px] font-black uppercase text-stone-400 tracking-widest mb-1">Standard Size</h4>
                <p className="text-lg font-bold text-black italic">17.5"(H) x 14"(W) x 4"(D)</p>
             </div>
             <div>
                <h4 className="text-[9px] font-black uppercase text-stone-400 tracking-widest mb-1">Handle Type</h4>
                <p className="text-lg font-bold text-black italic">P.U. Handle</p>
             </div>
          </div>
        </div>

        {/* LIGHTENED GALLERY CONTAINER */}
        <div className="bg-white/70 backdrop-blur-md py-16 px-6 rounded-[3rem] border border-white/30">
          <div className="text-center mb-24">
            <h3 className="text-3xl font-bold tracking-[0.4em] uppercase text-stone-900">The Gallery</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {nauticaBags.map((bag) => (
              <div key={bag.id} className="group flex flex-col items-center relative">
                <div className="w-full aspect-[4/5] relative bg-white p-2.5 shadow-2xl rounded-sm transition-all duration-500 group-hover:-translate-y-4">
                  <Image src={bag.image} alt={bag.name} fill className="object-cover" />
                </div>
                
                <div className="mt-8 bg-black text-white px-8 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h4 className="font-bold tracking-[0.3em] uppercase text-[10px] whitespace-nowrap">{bag.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}