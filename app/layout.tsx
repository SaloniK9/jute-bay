import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JuteBay | Sustainable Luxury UAE",
  description: "Premium handcrafted jute bags delivered across the Emirates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}