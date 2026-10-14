"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { 
  ShieldCheck, 
  Truck, 
  MessageCircle, 
  BadgePercent, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

export function BusinessBenefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% Genuine Guaranteed",
      description: "Direct sourced from official distributors and verified channels. Zero clones, zero grey imports.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Truck,
      title: "Island-Wide Prompt Delivery",
      description: "Safe doorstep delivery across all 25 districts in Sri Lanka with trusted courier tracking.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Ordering",
      description: "No tedious registration or payment forms. Order directly in a conversation with verified TONDEL reps.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: BadgePercent,
      title: "Verified Price Assurance",
      description: "Transparent prices in LKR with no hidden surcharge. Exact quotes and payment options confirmed prior to dispatch.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section className="py-20 bg-tondel-navy px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose TONDEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Smart Choices, Smarter Living
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We bridge authentic technology and everyday lifestyle with seamless human-first service and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-tondel-navySurface/80 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${b.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-base text-white">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 pt-2 border-t border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
