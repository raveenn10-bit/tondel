"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Search, ChevronRight, ShoppingBag, X } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") || "";
  const [query, setQuery] = useState(qParam);
  const [results, setResults] = useState(searchProducts(qParam));

  useEffect(() => {
    setQuery(qParam);
    setResults(searchProducts(qParam));
  }, [qParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.history.pushState(null, "", `/search?q=${encodeURIComponent(query.trim())}`);
      setResults(searchProducts(query.trim()));
    }
  };

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Search Results</span>
        </nav>

        {/* Search Input Box */}
        <div className="p-8 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Search Catalogue
          </h1>
          <form onSubmit={handleSearch} className="relative flex items-center max-w-xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name, brand, category, or specs..."
              className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 px-4 pl-11 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4" />
            <button
              type="submit"
              className="absolute right-2 px-4 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Search
            </button>
          </form>

          {qParam && (
            <p className="text-xs text-slate-400">
              Found <strong className="text-white">{results.length}</strong> result{results.length === 1 ? "" : "s"} for &quot;<span className="text-blue-400">{qParam}</span>&quot;
            </p>
          )}
        </div>

        {/* Search Results */}
        {results.length === 0 ? (
          <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-lg text-white">
                No matching products found
              </h3>
              <p className="text-xs text-slate-400 max-w-sm">
                Try searching for general keywords like &quot;iPhone&quot;, &quot;Watch&quot;, &quot;Headphone&quot;, &quot;Midea&quot;, or &quot;Speaker&quot;.
              </p>
            </div>
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
            >
              Browse Full Catalogue
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} theme="dark" />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-tondel-navy text-center py-20 text-slate-400">Searching...</div>}>
      <SearchContent />
    </Suspense>
  );
}
