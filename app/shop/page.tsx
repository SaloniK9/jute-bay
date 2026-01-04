export default function Shop() {
  const products = [
    { id: 1, name: "Desert Tote", price: "150 AED" },
    { id: 2, name: "Dubai Marina Clutch", price: "95 AED" },
    { id: 3, name: "Eco-Shopper XL", price: "120 AED" },
    { id: 4, name: "Jumeirah Beach Bag", price: "180 AED" },
    { id: 5, name: "Old Souq Classic", price: "110 AED" },
    { id: 6, name: "Zabeel Handbag", price: "210 AED" },
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 uppercase tracking-widest">The Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square bg-stone-200 rounded-lg mb-4 transition-transform group-hover:scale-[1.02] flex items-center justify-center text-stone-400">
              {/* Product Image Placeholder */}
              [Bag Image]
            </div>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-stone-200">{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}