"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Heart, ShoppingBag, Trash2, ChevronRight, ArrowLeft } from "lucide-react";

export default function WishlistPage() {
  const { resolvedProducts, totalCount, removeFromWishlist, clearWishlist, moveToCart } = useWishlist();

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">My Wishlist</span>
        </nav>

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              My Saved Items ({totalCount})
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Save your favorite gadgets and move them directly to your cart whenever you are ready.
            </p>
          </div>

          {resolvedProducts.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Wishlist</span>
            </button>
          )}
        </div>

        {resolvedProducts.length === 0 ? (
          <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Heart className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h2 className="font-heading font-bold text-xl text-white">
                Your wishlist is empty
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                Tap the heart icon on any product to save it for later review or instant ordering.
              </p>
            </div>
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resolvedProducts.map((product) => {
              const primaryImage = product.images[0] || "/images/products/placeholder.svg";
              const displayPrice = formatPrice(product.price, product.currency);

              return (
                <div
                  key={product.id}
                  className="rounded-3xl p-5 bg-tondel-navySurface border border-white/5 hover:border-blue-500/30 flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-square w-full rounded-2xl bg-slate-900 border border-white/10 p-4 mb-4 flex items-center justify-center">
                      <Image
                        src={primaryImage}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {product.brand}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-heading font-bold text-base text-white hover:text-blue-400 transition-colors line-clamp-2 mt-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm font-extrabold text-blue-400 font-heading mt-2">
                      {displayPrice}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-white/5">
                    <button
                      onClick={() => moveToCart(product.id)}
                      className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="py-2 px-3 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
