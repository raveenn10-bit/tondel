import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getSpecialOffers } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Sparkles, ChevronRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Special Offers & Tech Deals | TONDEL Sri Lanka",
  description:
    "Explore discounted authentic smartphones, wearables, headphones, and home appliances with island-wide delivery and direct WhatsApp ordering.",
};

export default function OffersPage() {
  const offers = getSpecialOffers();

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-amber-400 font-semibold">Special Offers</span>
        </nav>

        {/* Offers Header Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-tondel-navySurface border border-amber-500/30 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold tracking-wider uppercase">
            <Tag className="w-3.5 h-3.5 text-amber-400" />
            Limited-Time Reductions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Special Deals & Promotions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Take advantage of discounted rates on genuine brand electronics, appliances, and accessories with verified seller warranty and island-wide delivery.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((product) => (
            <ProductCard key={product.id} product={product} theme="dark" />
          ))}
        </div>

      </div>
    </div>
  );
}
