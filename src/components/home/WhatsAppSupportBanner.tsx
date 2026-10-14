"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhatsAppSupportBanner() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello TONDEL! I would like to check prices and current availability for tech items."
  )}`;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-tondel-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="scale-in">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Ambient glow in background */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Left Text */}
            <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Personal Service
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Order Instantly on WhatsApp
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                No complicated checkouts, no hidden payment gateway fees. Connect directly with our team to verify current stock, confirm specs, and schedule your island-wide delivery.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live Stock Updates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Official Invoices
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Cash on Delivery Available
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Chat on WhatsApp: {siteConfig.displayPhone}</span>
              </a>
              <span className="text-[11px] text-slate-400">
                ⚡ Typically replies within 5–15 minutes during operating hours
              </span>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
