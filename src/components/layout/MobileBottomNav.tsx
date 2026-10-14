"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { siteConfig } from "@/data/site-config";
import { 
  Home, 
  ShoppingBag, 
  Search, 
  Heart, 
  MessageCircle,
  Smartphone
} from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalCount: cartCount, setIsCartDrawerOpen } = useCart();
  const { totalCount: wishlistCount } = useWishlist();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Shop", href: "/shop", icon: Smartphone },
    { label: "Search", href: "/search", icon: Search },
    { label: "Wishlist", href: "/wishlist", icon: Heart, count: wishlistCount },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 px-3 py-2 safe-area-bottom shadow-2xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center p-1.5 min-w-[54px] rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-cyan-400 font-bold scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110 text-cyan-400" : ""}`} />
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-cyan-400 mt-0.5 shadow-[0_0_6px_#22d3ee]" />
              )}
            </Link>
          );
        })}

        {/* Cart Trigger */}
        <button
          onClick={() => setIsCartDrawerOpen(true)}
          className="relative flex flex-col items-center justify-center p-1.5 min-w-[54px] rounded-xl text-slate-400 hover:text-white transition-all active:scale-90"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight text-blue-400 font-semibold">
            Cart
          </span>
        </button>

        {/* Quick WhatsApp Action */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I would like to inquire about products.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 min-w-[54px] rounded-xl text-emerald-400 hover:text-emerald-300 transition-all active:scale-90"
          aria-label="WhatsApp Hotline"
        >
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
            <MessageCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-[10px] mt-1 tracking-tight font-semibold">
            Chat
          </span>
        </a>
      </div>
    </div>
  );
}
