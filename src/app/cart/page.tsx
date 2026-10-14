"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { generateCartWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ChevronRight, 
  ArrowLeft,
  Truck,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export default function CartPage() {
  const {
    resolvedItems,
    totalCount,
    subtotal,
    hasUnknownPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [siteOrigin, setSiteOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteOrigin(window.location.origin);
    }
  }, []);

  const whatsappCheckoutUrl = generateCartWhatsAppUrl(
    resolvedItems.map((item) => ({
      product: item.product,
      variant: item.variant,
      quantity: item.quantity,
    })),
    siteOrigin
  );

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Shopping Cart</span>
        </nav>

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Shopping Cart ({totalCount})
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Review your items and proceed directly to WhatsApp order confirmation.
            </p>
          </div>

          {resolvedItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {resolvedItems.length === 0 ? (
          <div className="p-16 rounded-3xl bg-tondel-navySurface/40 border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h2 className="font-heading font-bold text-xl text-white">
                Your cart is currently empty
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                Explore our collection of authentic smartphones, wearables, and audio gear.
              </p>
            </div>
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all"
            >
              Start Shopping Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Items Column */}
            <div className="lg:col-span-8 space-y-4">
              {resolvedItems.map((item) => {
                const img = item.product.images[0] || "/images/products/placeholder.svg";
                const unitPriceDisplay = item.unitPrice !== null
                  ? formatPrice(item.unitPrice, item.product.currency)
                  : "Contact for Price";

                const lineTotalDisplay = item.lineTotal !== null
                  ? formatPrice(item.lineTotal, item.product.currency)
                  : "Pending Confirmation";

                return (
                  <div
                    key={`${item.product.id}-${item.variant?.id || "default"}`}
                    className="p-5 rounded-3xl bg-tondel-navySurface border border-white/5 flex flex-col sm:flex-row items-center gap-5 justify-between"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      {/* Image */}
                      <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 p-2 shrink-0 flex items-center justify-center">
                        <Image
                          src={img}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      {/* Info */}
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">
                          {item.product.brand}
                        </span>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-heading font-bold text-sm sm:text-base text-white hover:text-blue-400 transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        {item.variant && (
                          <p className="text-xs text-slate-400 mt-0.5">
                            Variant: {item.variant.name}
                          </p>
                        )}
                        <p className="text-xs text-slate-400 mt-1">
                          Unit: <span className="text-white font-medium">{unitPriceDisplay}</span>
                        </p>
                      </div>
                    </div>

                    {/* Controls & Line Total */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-white/10 rounded-xl bg-slate-900 p-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.variant?.id
                            )
                          }
                          className="p-1.5 hover:text-white text-slate-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.variant?.id
                            )
                          }
                          className="p-1.5 hover:text-white text-slate-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line subtotal */}
                      <div className="text-right min-w-[100px]">
                        <span className="text-sm sm:text-base font-extrabold text-white block">
                          {lineTotalDisplay}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.variant?.id)
                        }
                        className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continue Shopping</span>
              </Link>
            </div>

            {/* Order Summary & WhatsApp Checkout Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-6">
                <h2 className="font-heading font-bold text-lg text-white pb-3 border-b border-white/5">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Items Count:</span>
                    <span className="font-bold text-white">{totalCount} items</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Estimated Subtotal:</span>
                    <span className="font-black text-lg text-blue-400 font-heading">
                      {hasUnknownPrice
                        ? "Pending Price Confirmation"
                        : formatPrice(subtotal, resolvedItems[0]?.product.currency || "LKR")}
                    </span>
                  </div>

                  {hasUnknownPrice && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                      <span>One or more selected products are subject to daily currency stock verification via WhatsApp.</span>
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 space-y-1">
                    <p>• Delivery fees calculated based on destination district.</p>
                    <p>• Verified serial numbers and invoice shared before dispatch.</p>
                  </div>
                </div>

                {/* Primary WhatsApp Checkout CTA */}
                <a
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Checkout via WhatsApp</span>
                </a>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    Direct human verification with {siteConfig.displayPhone}
                  </span>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Doorstep delivery island-wide in Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine electronics with warranty</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
