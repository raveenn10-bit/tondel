import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/data/site-config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tondel.lk"),
  title: {
    default: `${siteConfig.brandName} – ${siteConfig.tagline} | Electronics & Lifestyle`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Sri Lanka's premier destination for flagship smartphones, smart watches, premium audio, and genuine home appliances with island-wide delivery and direct WhatsApp ordering.",
  keywords: [
    "TONDEL",
    "Smart Choices Smarter Living",
    "Smartphones Sri Lanka",
    "Apple iPhone Sri Lanka",
    "Redmi Note Sri Lanka",
    "Infinix Sri Lanka",
    "Smart Watches Colombo",
    "Midea appliances Sri Lanka",
    "WhatsApp shopping Sri Lanka",
  ],
  authors: [{ name: "TONDEL" }],
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://tondel.lk",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} – ${siteConfig.tagline}`,
    description:
      "Explore curated smartphones, smart wearables, studio audio, and home appliances in Sri Lanka with direct WhatsApp checkout.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plusJakarta.variable} ${inter.variable}`}
    >
      <body className="bg-tondel-navy text-white min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <FloatingWhatsApp />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
