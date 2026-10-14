"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const enquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello TONDEL! I would like to make an enquiry regarding products and availability."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-emerald-500/30 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl shadow-black/40 animate-bounce">
          <span>Need help or quick price check? <strong>Chat with us!</strong></span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={enquiryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact TONDEL on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900" />
      </a>
    </div>
  );
}
