export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-stone-300 uppercase tracking-widest">Based in Dubai, Shipping Worldwide</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Our Founder</h3>
            <p className="text-stone-300">Atharva Dhobale</p>
            <p className="text-stone-300 text-sm">atharvad@jutebay.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Office</h3>
            <p className="text-stone-300">Business Bay, Dubai, UAE</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Wholesale Inquiries</h3>
            <p className="text-stone-300">sales@jutebay.com</p>
          </div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-stone-500 border border-stone-200 rounded-lg outline-none focus:border-black transition" />
          <input type="email" placeholder="Your Email" className="w-full p-4 bg-stone-500 border border-stone-200 rounded-lg outline-none focus:border-black transition" />
          <textarea placeholder="Message" rows={4} className="w-full p-4 bg-stone-500 border border-stone-200 rounded-lg outline-none focus:border-black transition"></textarea>
          <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest rounded-lg hover:bg-stone-800 transition">Send Message</button>
        </form>
      </div>
    </main>
  );
}