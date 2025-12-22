export default function About() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden grayscale">
           {/* Replace with Founder Image */}
           <div className="w-full h-full flex items-center justify-center text-stone-400 italic">
             Founder: Saloni K.
           </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 italic">The Visionary Behind JuteBay</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Founded by <strong>Atharva Dhobale</strong>, JuteBay was born out of a desire to merge the rugged, 
            earthy texture of natural jute with the high-fashion sensibilities of the UAE.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Our mission is to provide an eco-friendly alternative to plastic and synthetic materials 
            without compromising on the luxury aesthetic that the Middle East is known for.
          </p>
        </div>
      </div>
    </main>
  );
}