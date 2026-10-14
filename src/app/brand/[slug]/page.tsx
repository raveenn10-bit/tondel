import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronRight, ShieldCheck, ShoppingBag } from "lucide-react";

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return brands.map((b) => ({
    slug: b.slug,
  }));
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = getBrandBySlug(params.slug);
  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} Products | TONDEL Sri Lanka`,
    description: brand.description || `Explore genuine ${brand.name} devices and accessories in Sri Lanka with verified seller warranty.`,
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) {
    notFound();
  }

  const brandProducts = getProductsByBrand(params.slug);

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-white transition-colors">
            Brands
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">{brand.name}</span>
        </nav>

        {/* Brand Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-tondel-navySurface border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 p-3 shrink-0 flex items-center justify-center">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain p-2"
              />
            ) : (
              <span className="font-heading font-black text-3xl text-blue-400">
                {brand.name[0]}
              </span>
            )}
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Verified Brand Hardware
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {brand.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Products */}
        {brandProducts.length === 0 ? (
          <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              No products found for this brand
            </h3>
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} theme="dark" index={idx} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
