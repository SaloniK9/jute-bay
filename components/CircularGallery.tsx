// components/CircularGallery.tsx
export default function CircularGallery() {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Gallery</h2>
        
        {/* Responsive Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-square bg-stone-100 rounded-full flex items-center justify-center border border-black/5">
            <span className="text-xs font-bold uppercase">Item 1</span>
          </div>
          <div className="aspect-square bg-stone-100 rounded-full flex items-center justify-center border border-black/5">
            <span className="text-xs font-bold uppercase">Item 2</span>
          </div>
          <div className="aspect-square bg-stone-100 rounded-full flex items-center justify-center border border-black/5">
            <span className="text-xs font-bold uppercase">Item 3</span>
          </div>
        </div>
      </div>
    </section>
  );
}