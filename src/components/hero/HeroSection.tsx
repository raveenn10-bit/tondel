"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle, Truck } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef5ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.15),transparent_36%)]" />
      <div className="relative mx-auto grid min-h-[430px] max-w-[1440px] items-center lg:grid-cols-[.82fr_1.18fr]">
        <div className="hero-copy z-10 px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.16em] text-blue-700 shadow-sm ring-1 ring-blue-100">
            <BadgeCheck className="h-4 w-4" /> Genuine tech. Smarter prices.
          </span>
          <h1 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-[1.04] tracking-[-.045em] text-slate-950 sm:text-5xl lg:text-[58px]">
            Upgrade every day with <span className="text-blue-700">TONDEL</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
            Smartphones, wearables, audio and home appliances with direct WhatsApp support and island-wide delivery.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blue-700 px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
              Shop now <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I would like help choosing a product.")}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-extrabold text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300">
              <MessageCircle className="h-4 w-4 text-emerald-600" /> Ask on WhatsApp
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-blue-700" /> Island-wide delivery</span>
            <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Verified products</span>
          </div>
        </div>
        <div className="hero-visual relative min-h-[310px] self-stretch lg:min-h-[430px]">
          <Image src="/images/banners/tondel-retail-hero.webp" alt="TONDEL electronics collection" fill priority className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 60vw" />
          <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#eef5ff] to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
