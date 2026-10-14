"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariant } from "@/types";
import { formatPrice } from "@/lib/utils";
import { generateProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "./ProductCard";
import { 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Plus, 
  Minus, 
  ChevronRight,
  Share2,
  Sparkles
} from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: "default", name: "Standard" }
  );
  const [selectedImage, setSelectedImage] = useState<string>(
    product.images[0] || "/images/products/placeholder.svg"
  );
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);

  // Active price based on variant or base product
  const activePrice = selectedVariant?.price !== undefined && selectedVariant?.price !== null
    ? selectedVariant.price
    : product.price;

  const activeCompareAtPrice = selectedVariant?.compareAtPrice !== undefined && selectedVariant?.compareAtPrice !== null
    ? selectedVariant.compareAtPrice
    : product.compareAtPrice;

  const displayPrice = formatPrice(activePrice, product.currency);

  const whatsappUrl = generateProductWhatsAppUrl(
    product,
    selectedVariant,
    quantity,
    typeof window !== "undefined" ? window.location.href : ""
  );

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/shop" className="hover:text-white transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href={`/category/${product.category}`}
          className="hover:text-white transition-colors capitalize"
        >
          {product.category.replace("-", " ")}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-400 font-semibold truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Hero Image */}
          <div className="relative aspect-square w-full rounded-3xl bg-slate-900 border border-white/10 overflow-hidden group shadow-xl">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-md">
                {product.badge}
              </span>
            )}
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>

          {/* Thumbnails (if multiple) */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-2xl bg-tondel-navySurface border p-2 shrink-0 transition-all ${
                    selectedImage === img
                      ? "border-blue-500 shadow-md shadow-blue-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} preview ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information, Variants & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Top Brand & Actions */}
            <div className="flex items-center justify-between">
              <Link
                href={`/brand/${product.brand}`}
                className="text-xs font-bold tracking-widest text-blue-400 uppercase hover:underline"
              >
                {product.brand}
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorited
                      ? "bg-rose-500/20 text-rose-500"
                      : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? "fill-rose-500" : ""}`} />
                </button>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              {product.name}
            </h1>

            {/* Availability & SKU */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span
                className={`px-3 py-1 rounded-full font-semibold ${
                  product.availability === "In Stock"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                }`}
              >
                {product.availability}
              </span>
              {selectedVariant?.sku && (
                <span className="text-slate-400">
                  SKU: <code className="text-slate-200">{selectedVariant.sku}</code>
                </span>
              )}
            </div>

            {/* Price Presentation */}
            <div className="py-4 border-y border-white/10 flex items-baseline gap-4">
              <span className="text-3xl sm:text-4xl font-black font-heading text-blue-400">
                {displayPrice}
              </span>
              {activeCompareAtPrice && (
                <span className="text-sm sm:text-base text-slate-500 line-through">
                  {formatPrice(activeCompareAtPrice, product.currency)}
                </span>
              )}
              {activePrice === null && (
                <span className="text-xs text-amber-400 font-medium">
                  * Dynamic rate based on daily stock & currency. Click WhatsApp for live quote.
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector (if available) */}
            {product.variants.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                  Select Variant: <span className="text-blue-400">{selectedVariant.name}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                          isSelected
                            ? "bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-600/30"
                            : "bg-tondel-navySurface border-white/10 text-slate-300 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {v.colorHex && (
                          <span
                            className="w-3 h-3 rounded-full border border-black/20"
                            style={{ backgroundColor: v.colorHex }}
                          />
                        )}
                        <span>{v.name}</span>
                        {v.price && (
                          <span className="text-[10px] opacity-80">
                            ({formatPrice(v.price, product.currency)})
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-white/10 rounded-xl bg-tondel-navySurface p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:text-white text-slate-400 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:text-white text-slate-400 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  Total item price: {activePrice ? formatPrice(activePrice * quantity, product.currency) : "To be confirmed"}
                </span>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product.id, selectedVariant.id, quantity)}
                className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              {/* Order via WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Island-wide doorstep delivery in Sri Lanka within 1–3 business days.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine product with verified warranty and physical invoice.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Specifications & Extended Description Tabs */}
      <div className="border-t border-white/10 pt-12 space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-heading text-white">
            Technical Specifications
          </h2>
          <div className="rounded-2xl border border-white/5 overflow-hidden">
            <div className="divide-y divide-white/5">
              {Object.entries(product.specifications).map(([key, value], idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm ${
                    idx % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                  }`}
                >
                  <span className="font-semibold text-slate-400">{key}</span>
                  <span className="sm:col-span-2 text-white font-medium mt-1 sm:mt-0">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Overview Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold font-heading text-white">
            Product Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-white/10 pt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading text-white">
              Related Products You May Like
            </h2>
            <Link
              href="/shop"
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} theme="dark" />
            ))}
          </div>
        </div>
      )}

      {copiedLink && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xl animate-bounce">
          Product link copied to clipboard!
        </div>
      )}
    </div>
  );
}
