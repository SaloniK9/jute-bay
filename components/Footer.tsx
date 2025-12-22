export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-b border-stone-800 pb-8">
        <div>
          <h3 className="text-white font-bold mb-4">JuteBay UAE</h3>
          <p className="text-sm">Sustainable fashion for a greener tomorrow. Handcrafted with love.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>Shipping Info (UAE Wide)</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <p className="text-sm">@JuteBay_Official</p>
        </div>
      </div>
      <p className="text-center text-xs mt-8">© {new Date().getFullYear()} JuteBay. All rights reserved.</p>
    </footer>
  );
}