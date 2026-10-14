"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { generateProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingBag, MessageCircle, ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  theme?: "dark" | "light";
}

export function ProductCard({ product, theme = "dark" }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const primaryImage = product.images[0] || "/images/products/placeholder.svg";
  const displayPrice = formatPrice(product.price, product.currency);
  const isAvailable = product.availability === "In Stock";

  const whatsappUrl = generateProductWhatsAppUrl(
    product,
    product.variants[0],
    1
  );

  const isDark = theme === "dark";

  return (
    <div
      className={`group relative rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
        isDark
          ? "bg-tondel-navyCard/60 hover:bg-tondel-navyCard border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
          : "bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200"
      }`}
    >
      {/* Top Badges & Wishlist Action */}
      <div className="flex items-center justify-between w-full mb-3 z-10">
        <div className="flex flex-wrap items-center gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600 text-white shadow-sm">
              {product.badge}
            </span>
          )}
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              isAvailable
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
            }`}
          >
            {product.availability}
          </span>
        </div>

        {/* Wishlist toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className={`p-2 rounded-full transition-all ${
            isFavorited
              ? "bg-rose-500/20 text-rose-500"
              : isDark
              ? "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-white/10"
              : "bg-slate-100 text-slate-400 hover:text-slate-800"
          }`}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-rose-500" : ""}`} />
        </button>
      </div>

      {/* Product Image Stage with Real Photography Presentation */}
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square w-full rounded-2xl overflow-hidden my-2 bg-slate-900/80 border border-white/5 group-hover:border-blue-500/40 transition-all duration-500"
      >
        <Image
          src={primaryImage}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </Link>

      {/* Product Information */}
      <div className="space-y-2 mt-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {product.brand}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className={`font-heading font-bold text-sm sm:text-base leading-snug line-clamp-2 transition-colors ${
              isDark
                ? "text-white group-hover:text-blue-400"
                : "text-slate-900 group-hover:text-blue-600"
            }`}
          >
            {product.name}
          </Link>
          <p className="text-xs text-slate-400 line-clamp-1 mt-1">
            {product.shortDescription}
          </p>
        </div>

        {/* Price Row */}
        <div className="pt-2 flex items-baseline gap-2">
          <span className="text-base sm:text-lg font-extrabold text-blue-500 font-heading">
            {displayPrice}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-slate-500 line-through">
              {formatPrice(product.compareAtPrice, product.currency)}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-3">
          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product.id, product.variants[0]?.id)}
            className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              isDark
                ? "bg-white/10 hover:bg-blue-600 text-white"
                : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>

          {/* Direct WhatsApp Order */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
