"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { generateCartWhatsAppUrl } from "@/lib/whatsapp";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
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

  if (!isCartDrawerOpen) return null;

  const whatsappCheckoutUrl = generateCartWhatsAppUrl(
    resolvedItems.map((item) => ({
      product: item.product,
      variant: item.variant,
      quantity: item.quantity,
    })),
    siteOrigin
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-tondel-navySurface border-l border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white font-heading">
                Shopping Cart ({totalCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {resolvedItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Your cart is empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Explore our catalogue of smartphones, audio gear, and luxury lifestyle accessories.
                  </p>
                </div>
                <Link
                  href="/shop"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              resolvedItems.map((item) => {
                const img = item.product.images[0] || "/images/products/placeholder.svg";
                const displayPrice = item.unitPrice !== null
                  ? formatPrice(item.unitPrice, item.product.currency)
                  : "Contact for Price";

                return (
                  <div
                    key={`${item.product.id}-${item.variant?.id || "default"}`}
                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-slate-900 border border-white/10 relative overflow-hidden shrink-0 flex items-center justify-center p-1">
                      <Image
                        src={img}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={() => setIsCartDrawerOpen(false)}
                        className="text-xs font-medium text-white hover:text-blue-400 transition-colors truncate block"
                      >
                        {item.product.name}
                      </Link>

                      {item.variant && (
                        <p className="text-[11px] text-slate-400 truncate">
                          {item.variant.name}
                        </p>
                      )}

                      <p className="text-xs font-semibold text-blue-400 mt-1">
                        {displayPrice}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-white/10 rounded-lg bg-slate-900/80">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.variant?.id
                              )
                            }
                            className="p-1 hover:text-white text-slate-400"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-white">
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
                            className="p-1 hover:text-white text-slate-400"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.variant?.id)
                          }
                          className="text-slate-500 hover:text-rose-400 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & WhatsApp Checkout */}
          {resolvedItems.length > 0 && (
            <div className="p-5 border-t border-white/10 space-y-4 bg-tondel-navy">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Subtotal:</span>
                  <span className="font-bold text-base text-white">
                    {hasUnknownPrice
                      ? "Pending Confirmation"
                      : formatPrice(subtotal, resolvedItems[0]?.product.currency || "LKR")}
                  </span>
                </div>
                {hasUnknownPrice && (
                  <p className="text-[11px] text-amber-400">
                    * One or more items require price confirmation via WhatsApp.
                  </p>
                )}
                <p className="text-[11px] text-slate-400">
                  Delivery charges and final confirmation handled directly via WhatsApp chat.
                </p>
              </div>

              {/* WhatsApp Checkout CTA */}
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Checkout via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <Link
                  href="/cart"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>View Full Cart Page</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={clearCart}
                  className="text-slate-500 hover:text-rose-400 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
