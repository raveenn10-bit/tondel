"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { brands } from "@/data/brands";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BrandGrid() {
  return (
    <section className="py-20 bg-tondel-navySurface/90 border-y border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <ScrollReveal animation="fade-down">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-wider uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Authorized & Trusted Tech
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Shop by Leading Brands
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Authentic global technology leaders with genuine warranty coverage and trusted performance.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group transition-colors"
            >
              <span>Explore All Brands</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {brands.map((brand, idx) => (
            <ScrollReveal
              key={brand.id}
              animation="scale-in"
              delay={(idx % 4) * 80}
            >
              <Link
                href={`/brand/${brand.slug}`}
                className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center space-y-3 h-full hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-slate-900/90 border border-white/10 p-2 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/40 transition-all shadow-md">
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={48}
                      height={48}
                      className="object-contain max-h-10 max-w-10 filter brightness-105"
                      unoptimized
                    />
                  ) : (
                    <span className="font-heading font-black text-xl text-blue-400">
                      {brand.name[0]}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                    {brand.name}
                  </h3>
                  {brand.description && (
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {brand.description}
                    </p>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
