import Image from 'next/image';
import Header from '../../components/Header';

export default function CollectionPage() {
  const landscapeBags = [
    { id: 1, name: "Palm Beach Sunset", image: "/palm-beach.png" },
    { id: 2, name: "Hot Air Balloons", image: "/balloons.png" },
    { id: 3, name: "Mountain Lake", image: "/mountain.png" },
    { id: 4, name: "Tropical Birds", image: "/birds.png" },
    { id: 5, name: "Pine Forest", image: "/forest.png" },
    { id: 6, name: "Golden Sunset", image: "/sunset.png" },
    { id: 7, name: "City Life", image: "/city.png" },
    { id: 8, name: "Birds Of City", image: "/city_birds.png" },
    { id: 9, name: "Hibiscus", image: "/hibiscus.png" }
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] relative overflow-x-hidden">
      {/* Fixed Background Texture Layer */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none bg-[url('/jute-texture.png')] bg-repeat bg-center"></div>

      {/* 1. INITIAL COLLECTION INFO (Hero Section) */}
      <section className="relative z-10 pt-32 pb-16 px-6 max-w-6xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 relative aspect-square shadow-lg overflow-hidden rounded-xl">
              <Image 
                src="/landscape-collection-header.png" 
                alt="Landscape Collection Cover"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] tracking-[0.3em] uppercase font-bold rounded-full">
                Printed Bags 
              </div>
              <h2 className="text-5xl font-serif italic text-stone-900 leading-tight">
                Landscape Collection 
              </h2>
              <p className="text-xl leading-relaxed text-stone-800 font-medium">
                These bags come in 10 different colorful and interesting prints inspired from natural 
                landscapes, to break the monotony of a regular jute bag. 
              </p>
              <div className="p-4 bg-stone-100/50 rounded-lg border-l-4 border-stone-400">
                <p className="text-stone-700 italic text-lg">
                  Perfect for gifting, storage & carrying. Made of Natural laminated Jute—durable, 
                  reusable, and environment friendly. 
                </p>
              </div>
            </div>
          </div>

          {/* SPECIFICATIONS GRID - Now inside the card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-stone-200">
            <div className="text-center">
              <h4 className="text-xs font-black uppercase text-stone-500 tracking-tighter mb-2">Size </h4>
              <p className="text-lg font-bold text-black">12" x 12" x 5" </p>
            </div>
            <div className="text-center">
              <h4 className="text-xs font-black uppercase text-stone-500 tracking-tighter mb-2">Fabric </h4>
              <p className="text-lg font-bold text-black">Laminated Jute </p>
            </div>
            <div className="text-center">
              <h4 className="text-xs font-black uppercase text-stone-500 tracking-tighter mb-2">Color </h4>
              <p className="text-lg font-bold text-black">Natural Printed </p>
            </div>
            <div className="text-center">
              <h4 className="text-xs font-black uppercase text-stone-500 tracking-tighter mb-2">Handle </h4>
              <p className="text-lg font-bold text-black">Padded Handle </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDIVIDUAL BAGS */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm py-12 px-6 rounded-3xl">
          <h3 className="text-center text-3xl font-bold tracking-[0.2em] uppercase mb-20 text-stone-900">
            The Designs
            <span className="block w-24 h-1 bg-black mx-auto mt-4"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {landscapeBags.map((bag) => (
              <div key={bag.id} className="group flex flex-col items-center">
                <div className="w-full aspect-[4/5] relative bg-white p-2 shadow-xl rounded-lg overflow-hidden transition-transform duration-500 group-hover:-translate-y-4">
                  <Image 
                    src={bag.image} 
                    alt={bag.name}
                    fill
                    className="object-cover p-2 rounded-md"
                  />
                </div>
                <div className="mt-8 bg-black text-white px-6 py-2 rounded-full shadow-lg transform translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-bold tracking-widest uppercase text-xs">
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