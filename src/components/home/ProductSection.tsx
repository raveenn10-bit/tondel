"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRight } from "lucide-react";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  viewAllLink?: string;
  products: Product[];
  theme?: "dark" | "light";
  columns?: 3 | 4;
}

export function ProductSection({
  title,
  subtitle,
  badge,
  viewAllLink,
  products,
  theme = "dark",
  columns = 4,
}: ProductSectionProps) {
  if (products.length === 0) return null;

  const isDark = theme === "dark";

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-tondel-navy" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            {badge && (
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-600/20 text-blue-400 border border-blue-500/30">
                {badge}
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

          {viewAllLink && (
            <Link
              href={viewAllLink}
              className={`text-xs sm:text-sm font-semibold flex items-center gap-1 group transition-colors ${
                isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
              }`}
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Product Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          } gap-5 sm:gap-6`}
        >
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} theme={theme} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
