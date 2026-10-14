"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  viewAllLink?: string;
  products: Product[];
  theme?: "dark" | "light";
  columns?: 3 | 4;
  className?: string;
}

export function ProductSection({
  title,
  subtitle,
  badge,
  viewAllLink,
  products,
  theme = "dark",
  columns = 4,
  className = "",
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (products.length === 0) return null;

  const isDark = theme === "dark";

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`py-14 sm:py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-tondel-navy" : "bg-slate-50"} ${className}`}>
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-down">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              {badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{badge}</span>
                </span>
              )}
              <h2 className={`text-2xl sm:text-3xl font-extrabold font-heading ${isDark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-500"} max-w-xl`}>
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop Scroll Nav Buttons */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {viewAllLink && (
                <Link
                  href={viewAllLink}
                  className={`text-xs sm:text-sm font-semibold flex items-center gap-1 group transition-colors px-3 py-1.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 ${
                    isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Product Cards Container: Horizontal Scroll on Mobile, Grid on Tablet/Desktop */}
        <div className="relative">
          <div
            ref={scrollRef}
            className={`flex overflow-x-auto pb-4 pt-1 gap-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 ${
              columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } sm:gap-6 sm:overflow-visible`}
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="w-[78vw] max-w-[285px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink flex flex-col"
              >
                <ProductCard product={product} theme={theme} index={idx} className="h-full" />
              </div>
            ))}
          </div>

          {/* Mobile Swipe Cue Bar */}
          <div className="flex sm:hidden items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
              <span>Swipe horizontally</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </span>
            <span className="text-slate-500">{products.length} products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
