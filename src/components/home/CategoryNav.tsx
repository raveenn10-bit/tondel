"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { 
  Smartphone, 
  Watch, 
  Headphones, 
  Speaker, 
  Zap, 
  Mouse, 
  Home, 
  Sparkles 
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
};

export function CategoryNav() {
  return (
    <section className="py-8 bg-tondel-navySurface/80 border-y border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
          {categories.map((cat) => {
            const Icon = (cat.iconName && iconMap[cat.iconName]) || Sparkles;
            const isOffer = cat.slug === "offers";

            return (
              <Link
                key={cat.id}
                href={isOffer ? "/offers" : `/category/${cat.slug}`}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isOffer
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 hover:bg-blue-600/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isOffer ? "text-amber-400" : "text-blue-400"}`} />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
