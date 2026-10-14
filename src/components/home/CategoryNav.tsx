"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Smartphone, 
  Watch, 
  Headphones, 
  Speaker, 
  Zap, 
  Mouse, 
  Home, 
  Sparkles,
  Flame
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Watch,
  Headphones,
  Speaker,
  Zap,
  Mouse,
  Home,
  Sparkles,
  Flame,
};

export function CategoryNav() {
  return (
    <section id="categories-section" className="py-8 bg-tondel-navySurface/80 border-y border-white/5 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {categories.map((cat, idx) => {
              const Icon = (cat.iconName && iconMap[cat.iconName]) || Sparkles;
              const isOffer = cat.slug === "offers";

              return (
                <Link
                  key={cat.id}
                  href={isOffer ? "/offers" : `/category/${cat.slug}`}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 shrink-0 hover:scale-105 active:scale-95 ${
                    isOffer
                      ? "bg-amber-500/15 text-amber-300 border border-amber-500/40 hover:bg-amber-500/25 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                      : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isOffer ? "text-amber-400 animate-pulse" : "text-cyan-400"}`} />
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
