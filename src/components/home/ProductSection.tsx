"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductSection({ title, subtitle, viewAllLink, products, className = "" }: { title: string; subtitle?: string; badge?: string; viewAllLink?: string; products: Product[]; theme?: "dark" | "light"; columns?: 3 | 4; className?: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (by: number) => rail.current?.scrollBy({ left: by, behavior: "smooth" });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || products.length < 2) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const timer = window.setInterval(() => {
      const node = rail.current;
      if (!node || (canHover && node.matches(":hover")) || node.scrollWidth <= node.clientWidth + 2) return;
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 20;
      const firstCard = node.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(window.getComputedStyle(node).columnGap || "0");
      const step = (firstCard?.offsetWidth || 262) + gap;
      node.scrollTo({ left: atEnd ? 0 : node.scrollLeft + step, behavior: "smooth" });
    }, 5000);
    return () => window.clearInterval(timer);
  }, [products.length]);
  if (!products.length) return null;
  return (
    <section className={`motion-reveal bg-[#f5f7fb] px-4 py-8 sm:px-7 ${className}`}>
      <div className="mx-auto max-w-[1384px] rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(15,23,42,.06)] sm:p-6">
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div><h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">{title}</h2>{subtitle && <p className="mt-1 max-w-2xl text-xs text-slate-500 sm:text-sm">{subtitle}</p>}</div>
          <div className="flex shrink-0 items-center gap-2"><button onClick={() => move(-320)} className="hidden h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-700 sm:grid" aria-label="Previous"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => move(320)} className="hidden h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-700 sm:grid" aria-label="Next"><ChevronRight className="h-4 w-4" /></button>{viewAllLink && <Link href={viewAllLink} className="ml-1 text-xs font-extrabold uppercase tracking-wide text-blue-700 hover:text-blue-900">View all</Link>}</div>
        </div>
        <div ref={rail} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-none">
          {products.map((product) => <div key={product.id} className="w-[76vw] max-w-[270px] shrink-0 snap-start sm:w-[245px]"><ProductCard product={product} /></div>)}
        </div>
      </div>
    </section>
  );
}
