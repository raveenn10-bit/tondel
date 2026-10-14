"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  MapPin, 
  Zap, 
  Flame 
} from "lucide-react";

export function AnnouncementBar() {
  const [tickerIndex, setTickerIndex] = useState(0);

  const announcements = [
    {
      icon: Truck,
      color: "text-cyan-400",
      text: "Island-Wide Secure Delivery Across Sri Lanka",
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-400",
      text: "100% Genuine Certified Tech with Seller Warranty",
    },
    {
      icon: MessageCircle,
      color: "text-emerald-400",
      text: `Direct WhatsApp Orders: ${siteConfig.displayPhone}`,
    },
    {
      icon: MapPin,
      color: "text-purple-400",
      text: "Store Location: Galle, Sri Lanka (80000)",
    },
    {
      icon: Flame,
      color: "text-amber-400",
      text: "Exclusive 2026 Collection Now Available",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[tickerIndex].icon;

  return (
    <div className="bg-[#050E1F] border-b border-white/[0.08] py-2 px-4 text-xs tracking-wide text-slate-300 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Mobile: Dynamic Rotating Animated Ticker */}
        <div className="sm:hidden flex items-center justify-center w-full py-0.5">
          <div
            key={tickerIndex}
            className="flex items-center gap-2 animate-fadeIn transition-all duration-500 text-[11px] font-medium"
          >
            <CurrentIcon className={`w-3.5 h-3.5 ${announcements[tickerIndex].color} animate-pulse shrink-0`} />
            <span className="text-slate-200 truncate">
              {announcements[tickerIndex].text}
            </span>
          </div>
        </div>

        {/* Desktop: Full Multi-Benefit Bar */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span>Island-Wide Delivery</span>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>2026 Smart Tech Catalog</span>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Galle, Sri Lanka</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-5 text-slate-400">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>100% Genuine Guaranteed</span>
          </span>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I need assistance with an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>WhatsApp: {siteConfig.displayPhone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
