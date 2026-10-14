"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, ShieldCheck, Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-tondel-navySurface border-b border-white/5 py-2 px-4 text-xs tracking-wide text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-blue-400 font-medium">
            <Truck className="w-3.5 h-3.5" />
            Island-Wide Delivery
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">
            {siteConfig.announcementText}
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1 hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            100% Genuine Guaranteed
          </span>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I need assistance with an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: {siteConfig.displayPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
