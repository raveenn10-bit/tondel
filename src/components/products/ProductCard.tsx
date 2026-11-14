"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, MessageCircle, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { generateProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export function ProductCard({ product, className = "" }: { product: Product; theme?: "dark" | "light"; index?: number; className?: string }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);
  const price = formatPrice(product.price, product.currency);
  const oldPrice = product.compareAtPrice ? formatPrice(product.compareAtPrice, product.currency) : null;
  const discount = product.price && product.compareAtPrice ? Math.round((1 - product.price / product.compareAtPrice) * 100) : null;
  const add = () => { addToCart(product.id, product.variants[0]?.id); setAdded(true); window.setTimeout(() => setAdded(false), 1400); };

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_12px_28px_rgba(37,99,235,.14)] ${className}`}>
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="relative block aspect-[1.08/1] overflow-hidden bg-white">
          <Image src={product.images[0] || "/images/products/placeholder.jpg"} alt={product.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 75vw, 260px" />
        </Link>
        {discount && discount > 0 && <span className="sale-pulse absolute left-3 top-3 rounded-md bg-rose-600 px-2 py-1 text-[11px] font-black text-white">{discount}% OFF</span>}
        {product.badge && !discount && <span className="absolute left-3 top-3 rounded-md bg-blue-700 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">{product.badge}</span>}
        <button onClick={() => toggleWishlist(product.id)} aria-label="Toggle wishlist" className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border bg-white shadow-sm transition ${isInWishlist(product.id) ? "border-rose-200 text-rose-600" : "border-slate-200 text-slate-500 hover:text-rose-600"}`}><Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} /></button>
      </div>
      <div className="flex flex-1 flex-col border-t border-slate-100 p-4">
        <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[.1em] text-slate-500"><span>{product.brand.replace("-", " ")}</span><span className="flex items-center gap-1 text-amber-500"><Star className="h-3 w-3 fill-current" />4.9</span></div>
        <Link href={`/product/${product.slug}`} className="mt-2 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-slate-900 transition hover:text-blue-700">{product.name}</Link>
        <div className="mt-3 min-h-12">
          {oldPrice && <div className="text-xs text-slate-400 line-through">{oldPrice}</div>}
          <div className="text-lg font-black tracking-tight text-blue-800">{price}</div>
          {product.price && <div className="text-[10px] font-medium text-slate-500">or 3 easy payments available</div>}
        </div>
        <div className="mt-auto grid grid-cols-[1fr_42px] gap-2 pt-4">
          <button onClick={add} className={`flex h-10 items-center justify-center gap-2 rounded-md text-xs font-extrabold text-white transition ${added ? "bg-emerald-600" : "bg-blue-700 hover:bg-blue-800"}`}>{added ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingCart className="h-4 w-4" /> Add to cart</>}</button>
          <a href={generateProductWhatsAppUrl(product, product.variants[0], 1)} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp" className="grid h-10 place-items-center rounded-md bg-emerald-600 text-white transition hover:bg-emerald-700"><MessageCircle className="h-4 w-4" /></a>
        </div>
      </div>
    </article>
  );
}
