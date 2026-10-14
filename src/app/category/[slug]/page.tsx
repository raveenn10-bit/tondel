import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronRight, Sparkles, ShoppingBag } from "lucide-react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | TONDEL Sri Lanka`,
    description: category.description,
    openGraph: {
      title: `${category.name} – TONDEL`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(params.slug);

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
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">{category.name}</span>
        </nav>

        {/* Category Header Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-tondel-navySurface via-blue-950/40 to-slate-900 border border-white/10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Category
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            {category.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {category.description}
          </p>
          <p className="text-xs text-blue-400 pt-2 font-medium">
            Showing {categoryProducts.length} authentic products available for island-wide delivery.
          </p>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              No products currently listed in this category
            </h3>
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Back to Catalogue
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} theme="dark" index={idx} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
