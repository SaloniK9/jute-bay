import './globals.css';
import Header from '@/components/Header';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* SHARED BACKGROUND - Visible on all pages */}
        <div className="fixed inset-0 z-0">
          <Image 
            src="/jute-texture.png" 
            alt="Jute Texture Background" 
            fill 
            className="object-cover opacity-70" 
            priority
          />
          {/* Subtle overlay to ensure text is readable on every page */}
          <div className="absolute inset-0 bg-stone-900/5" />
        </div>

        {/* HEADER - Stays at the top */}
        <Header />

        {/* PAGE CONTENT - Renders over the background */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}