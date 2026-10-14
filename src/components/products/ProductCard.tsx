"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { generateProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  Check, 
  Star, 
  ShieldCheck, 
  Truck,
  Zap,
  Battery,
  Wifi,
  Sparkles
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  theme?: "dark" | "light";
  index?: number;
  className?: string;
}

export function ProductCard({ product, theme = "dark", index = 0, className = "" }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const primaryImage = product.images[0] || "/images/products/placeholder.svg";
  const displayPrice = formatPrice(product.price, product.currency);
  const isAvailable = product.availability === "In Stock";

  const whatsappUrl = generateProductWhatsAppUrl(
    product,
    product.variants[0],
    1
  );

  const handleAddToCart = () => {
    addToCart(product.id, product.variants[0]?.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const isDark = theme === "dark";

  // Category-specific micro icon tag
  const getCategoryIcon = () => {
    switch (product.category) {
      case "smartphones":
        return { icon: Wifi, label: "5G Ready" };
      case "smart-watches":
        return { icon: Battery, label: "Multi-Day Battery" };
      case "audio":
      case "speakers":
        return { icon: Zap, label: "Spatial Sound" };
      case "home-appliances":
        return { icon: ShieldCheck, label: "Energy Efficient" };
      default:
        return { icon: Sparkles, label: "Verified Genuine" };
    }
  };

  const tag = getCategoryIcon();
  const TagIcon = tag.icon;

  return (
    <ScrollReveal animation="fade-up" delay={Math.min(index * 60, 300)} duration={600} className={`h-full ${className}`}>
      <div
        className={`group relative rounded-3xl p-4 sm:p-5 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 ${
          isDark
            ? "bg-tondel-navyCard/60 hover:bg-tondel-navyCard border border-white/5 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/40"
            : "bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200"
        }`}
      >
        {/* Top Badges & Wishlist Action */}
        <div className="flex items-center justify-between w-full mb-3 z-10">
          <div className="flex flex-wrap items-center gap-1.5">
            {product.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{product.badge}</span>
              </span>
            )}
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 ${
                isAvailable
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                  : "bg-amber-500/15 text-amber-400 border border-amber-500/25"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
              <span>{product.availability}</span>
            </span>
          </div>

          {/* Wishlist toggle with pop effect */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={`p-2 rounded-full transition-all duration-300 active:scale-75 ${
              isFavorited
                ? "bg-rose-500/20 text-rose-500 scale-110 shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                : isDark
                ? "bg-slate-900/60 text-slate-400 hover:text-rose-400 hover:bg-white/10"
                : "bg-slate-100 text-slate-400 hover:text-rose-500"
            }`}
            aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 transition-transform duration-300 ${isFavorited ? "fill-rose-500 scale-110" : ""}`} />
          </button>
        </div>

        {/* Product Image Stage with Real Photography Presentation & Zoom on Hover */}
        <Link
          href={`/product/${product.slug}`}
          className="relative aspect-square w-full rounded-2xl overflow-hidden my-2 bg-slate-900/80 border border-white/5 group-hover:border-cyan-400/40 transition-all duration-500 block"
        >
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity" />

          {/* Micro spec pill in corner */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[9px] font-medium text-slate-300 flex items-center gap-1 shadow-md">
            <TagIcon className="w-3 h-3 text-cyan-400" />
            <span>{tag.label}</span>
          </div>
        </Link>

        {/* Product Information */}
        <div className="space-y-2 mt-2 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-slate-400">
                {product.brand}
              </span>
              <span className="flex items-center gap-0.5 text-amber-400 font-semibold">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>4.9</span>
              </span>
            </div>

            <Link
              href={`/product/${product.slug}`}
              className={`font-heading font-bold text-sm sm:text-base leading-snug line-clamp-2 transition-colors ${
                isDark
                  ? "text-white group-hover:text-cyan-400"
                  : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              {product.name}
            </Link>
            <p className="text-xs text-slate-400 line-clamp-1 mt-1">
              {product.shortDescription}
            </p>
          </div>

          {/* Price & Delivery Row */}
          <div className="pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-blue-500 font-heading">
                {displayPrice}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatPrice(product.compareAtPrice, product.currency)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1">
              <Truck className="w-3 h-3 text-cyan-400" />
              <span>Island-Wide Delivery</span>
            </div>
          </div>

          {/* Action Buttons: Add to Cart + WhatsApp Order */}
          <div className="grid grid-cols-2 gap-2 pt-3">
            {/* Add to Cart with success feedback */}
            <button
              onClick={handleAddToCart}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95 ${
                justAdded
                  ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : isDark
                  ? "bg-white/10 hover:bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-600/30"
                  : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white animate-bounce" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Order */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/30 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
