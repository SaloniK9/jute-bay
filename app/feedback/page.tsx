export default function Feedback() {
  const reviews = [
    { name: "Amna R.", city: "Abu Dhabi", comment: "The quality of the jute is incredible. Perfect for the beach!" },
    { name: "John D.", city: "Dubai", comment: "Fast delivery and beautiful sustainable packaging." },
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-12">Customer Love</h1>
      <div className="space-y-12">
        {reviews.map((rev, i) => (
          <div key={i} className="border-b border-stone-200 pb-8">
            <p className="text-2xl italic text-stone-700 mb-4">"{rev.comment}"</p>
            <p className="font-bold">{rev.name}</p>
            <p className="text-stone-400 text-sm uppercase">{rev.city}</p>
          </div>
        ))}
      </div>
    </main>
  );
}