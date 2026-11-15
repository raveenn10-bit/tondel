"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const enquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello TONDEL! I would like to make an enquiry regarding products and availability."
  )}`;

  return (
    <div className="fixed bottom-[82px] right-4 z-30 flex items-end gap-3 sm:bottom-6 sm:right-6 sm:z-50 group">
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
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M16 .8A15.1 15.1 0 0 0 3.1 23.7L1 31l7.5-2A15.2 15.2 0 1 0 16 .8Zm0 27.4a12.1 12.1 0 0 1-6.2-1.7l-.4-.2-4.4 1.1 1.2-4.3-.3-.4A12.2 12.2 0 1 1 16 28.2Zm6.7-9.1c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2s-.9 1.2-1.1 1.4c-.2.2-.4.3-.8.1s-1.6-.6-3-1.9a11.2 11.2 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.4 3.6c2.7 4.7 6.5 6.5 1 .5 1.8.8 2.5 1 1 .3 1.9.3 2.6.2.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
        </svg>
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900" />
      </a>
    </div>
  );
}
