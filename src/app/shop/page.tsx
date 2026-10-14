"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { ProductCard } from "@/components/products/ProductCard";
import { 
  Filter, 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  ShoppingBag,
  Sparkles
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialBrand = searchParams.get("brand") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== "all" && p.brand !== selectedBrand) {
        return false;
      }
      // In-stock filter
      if (onlyInStock && p.availability !== "In Stock") {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesBrand) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") {
        const pA = a.price ?? 999999999;
        const pB = b.price ?? 999999999;
        return pA - pB;
      }
      if (sortBy === "price-desc") {
        const pA = a.price ?? -1;
        const pB = b.price ?? -1;
        return pB - pA;
      }
      if (sortBy === "newest") {
        return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      }
      // Default: featured
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrand, searchQuery, onlyInStock, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSearchQuery("");
    setOnlyInStock(false);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Catalogue
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              All Products & Tech Gear
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Showing {filteredProducts.length} verified products with direct WhatsApp ordering.
            </p>
          </div>

          {/* Search bar inside shop */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in catalogue..."
              className="w-full bg-tondel-navySurface border border-white/10 rounded-2xl py-2.5 px-4 pl-10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters + Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-tondel-navySurface/80 p-6 rounded-3xl border border-white/5 h-fit sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                <span>Filters</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium"
              >
                Reset
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                Categories
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    selectedCategory === "all"
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  All Categories ({products.length})
                </button>
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.slug).length;
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brands */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                Brands
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedBrand("all")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    selectedBrand === "all"
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  All Brands
                </button>
                {brands.map((brand) => {
                  const count = products.filter((p) => p.brand === brand.slug).length;
                  const isSelected = selectedBrand === brand.slug;
                  return (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{brand.name}</span>
                      <span className="text-[10px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stock status */}
            <div className="pt-4 border-t border-white/5">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-300">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded bg-slate-900 border-white/20 text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Show In-Stock Only</span>
              </label>
            </div>
          </aside>

          {/* Main Product Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Toolbar (Sort & Mobile filter button) */}
            <div className="flex items-center justify-between bg-tondel-navySurface/50 p-3 rounded-2xl border border-white/5">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-400 hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-900 border border-white/10 text-white text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-white">
                    No matching products found
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Try clearing or adjusting your search filters to find what you are looking for.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} theme="dark" />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-tondel-navySurface h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h2 className="font-bold text-white text-base">Filter Catalogue</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase">Categories</h3>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg text-xs ${
                    selectedCategory === "all" ? "bg-blue-600 text-white" : "text-slate-300"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCategory(c.slug);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs ${
                      selectedCategory === c.slug ? "bg-blue-600 text-white" : "text-slate-300"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Brands */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold text-slate-400 uppercase">Brands</h3>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedBrand("all");
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg text-xs ${
                    selectedBrand === "all" ? "bg-blue-600 text-white" : "text-slate-300"
                  }`}
                >
                  All Brands
                </button>
                {brands.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBrand(b.slug);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs ${
                      selectedBrand === b.slug ? "bg-blue-600 text-white" : "text-slate-300"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                resetFilters();
                setMobileFilterOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-tondel-navy text-center py-20 text-slate-400">Loading catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}
