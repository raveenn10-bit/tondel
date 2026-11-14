"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Home, LayoutGrid, ShoppingCart, Tags, TicketPercent } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalCount: cartCount, setIsCartDrawerOpen } = useCart();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Category", href: "/shop", icon: LayoutGrid },
    { label: "Today's Offer", href: "/offers", icon: TicketPercent, featured: true },
    { label: "Brands", href: "/shop#brands", icon: Tags },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-1 pb-[max(.45rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_26px_rgba(15,23,42,.12)] backdrop-blur-xl md:hidden">
      <div className="flex items-end justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex min-w-[62px] flex-col items-center justify-center rounded-xl p-1 transition-all ${
                isActive
                  ? "font-bold text-violet-800"
                  : "text-slate-600"
              }`}
            >
              <div className={`relative grid place-items-center ${item.featured ? "-mt-5 h-12 w-16 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-600 text-white shadow-lg" : "h-7"}`}>
                <Icon className={`${item.featured ? "h-6 w-6" : "h-6 w-6"}`} />
              </div>
              <span className={`mt-1 text-[10px] font-bold tracking-tight ${item.featured ? "text-rose-700" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Cart Trigger */}
        <button
          onClick={() => setIsCartDrawerOpen(true)}
          className="relative flex min-w-[62px] flex-col items-center justify-center rounded-xl p-1 text-slate-600 transition active:scale-95"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-violet-800" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="mt-1 text-[10px] font-bold tracking-tight text-slate-700">
            Cart
          </span>
        </button>

      </div>
    </div>
  );
}
