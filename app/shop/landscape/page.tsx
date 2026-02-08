import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function LandscapeGallery() {
  const landscapeBags = [
    { id: 1, name: "Palm Beach Sunset", image: "/palm-beach.png" },
    { id: 2, name: "Hot Air Balloons", image: "/balloons.png" },
    { id: 3, name: "Mountain Lake", image: "/mountain.png" },
    { id: 4, name: "Tropical Birds", image: "/birds.png" },        //
    { id: 5, name: "Pine Forest", image: "/forest.png" },          //
    { id: 6, name: "City Life", image: "/city.png" },              //
    { id: 7, name: "Birds of City", image: "/city_birds.png" },    //
    { id: 8, name: "Hibiscus", image: "/hibiscus.png" }
    
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Header />
      <div className="fixed inset-0 z-0 bg-[url('/jute-texture.png')] bg-repeat bg-center pointer-events-none"></div>

      <section className="relative z-10 pt-44 px-6 max-w-6xl mx-auto pb-24">
        
        {/* REFINED BACK BUTTON
           - 'relative z-20': Ensures it stays above all backgrounds
           - 'tracking-[0.4em]': Matches the premium catalog style
        */}
        <Link 
          href="/shop" 
          className="relative z-20 inline-flex items-center gap-3 mb-12 px-6 py-3 bg-white/70 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 hover:bg-stone-900 hover:text-white transition-all duration-300 group shadow-sm"
        >
          <span className="text-lg transform group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
          Back to Shop
        </Link>

        {/* LIGHTENED SUMMARY CARD */}
        <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/30 mb-20">
          <h1 className="text-5xl font-serif italic text-stone-900 mb-6">Landscape Collection</h1>
          <p className="text-lg text-stone-700 leading-relaxed border-l-2 border-stone-200 pl-6 italic">
            "Natural laminated Jute—durable, reusable, and environment friendly."
          </p>
        </div>

        {/* LIGHTENED GALLERY CONTAINER */}
        <div className="bg-white/70 backdrop-blur-md py-16 px-6 rounded-[3rem] border border-white/30">
          <div className="text-center mb-24">
            <h3 className="text-3xl font-bold tracking-[0.4em] uppercase text-stone-900">The Gallery</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {landscapeBags.map((bag) => (
              <div key={bag.id} className="group flex flex-col items-center relative">
                {/* Framed Image */}
                <div className="w-full aspect-[4/5] relative bg-white p-2.5 shadow-2xl rounded-sm overflow-hidden transition-all duration-500 group-hover:-translate-y-4">
                  <Image src={bag.image} alt={bag.name} fill className="object-cover" />
                </div>
                
                {/* HOVER REVEAL NAME PILL */}
                <div className="mt-8 bg-black text-white px-8 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h4 className="font-bold tracking-[0.3em] uppercase text-[10px] whitespace-nowrap">
                    {bag.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}