"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShoppingBag, Eye, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export function BentoGrid() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-slate-100 text-slate-900 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Curated Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
              Explore By Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group transition-colors"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Top Bento Row: 4-Quadrant Category Bento + Dark Spacial Experience Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: 4-Quadrant Category Bento (Faithful to bento-reference.png) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Quadrant 1: Technology */}
              <Link
                href="/category/smartphones"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 max-w-[65%]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    Technology
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Flagship smartphones & next-generation mobile processing.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 group-hover:text-blue-600 mt-4 transition-colors">
                    <span>Explore category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 w-36 h-36 opacity-90 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500">
                  <Image
                    src="/images/categories/smartphones.webp"
                    alt="Technology Smartphones"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Quadrant 2: Gear (Audio & Headphones) */}
              <Link
                href="/category/audio"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 max-w-[65%]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    Audio Gear
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Acoustic spatial audio, over-ear studio cans & ANC earbuds.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 group-hover:text-blue-600 mt-4 transition-colors">
                    <span>Explore category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 w-36 h-36 opacity-90 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                  <Image
                    src="/images/categories/audio.webp"
                    alt="Audio Gear"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Quadrant 3: Speakers & Sound */}
              <Link
                href="/category/speakers"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 max-w-[65%]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    Speakers
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    High-bass portable outdoor party sound & home acoustics.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 group-hover:text-blue-600 mt-4 transition-colors">
                    <span>Explore category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 w-36 h-36 opacity-90 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500">
                  <Image
                    src="/images/categories/speakers.webp"
                    alt="Bluetooth Speakers"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Quadrant 4: Accessory & Wearables */}
              <Link
                href="/category/smart-watches"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 max-w-[65%]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    Wearables
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Smart watches, biometric monitors & everyday essentials.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 group-hover:text-blue-600 mt-4 transition-colors">
                    <span>Explore category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 w-36 h-36 opacity-90 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                  <Image
                    src="/images/categories/smart-watches.webp"
                    alt="Wearables and Smart Watches"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

            </div>
          </div>

          {/* Right: Dark "The new Spacial Experience" Card (Faithful to bento-reference.png) */}
          <div className="lg:col-span-4 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border border-white/10 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/30 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase">
                Featured Innovation
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                The new Spatial Experience
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Step into high-fidelity soundscapes, ultra-responsive smart display wearables, and verified flagship performance.
              </p>
            </div>

            <div className="relative z-10 pt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-sm font-bold tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Browse products
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Bento Row: Bestsellers Section + Featured Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Bestsellers Showcase (Faithful to bento-reference.png) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Bestsellers
              </h3>
              <Link
                href="/shop"
                className="text-xs font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1"
              >
                <span>Browse all products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Bestseller 1 */}
              <div className="flex flex-col p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="relative aspect-square w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden mb-3">
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600">
                    GEAR
                  </span>
                  <Image
                    src="/images/products/xiaomi-smart-band-10.jpg"
                    alt="Smart Band 10"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  Xiaomi Smart Band 10
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  1.62&quot; AMOLED, 60Hz Display
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">
                    LKR 14,500
                  </span>
                  <Link
                    href="/product/xiaomi-smart-band-10"
                    className="p-1 rounded-md text-slate-400 hover:text-blue-600"
                    aria-label="View product"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bestseller 2 */}
              <div className="flex flex-col p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="relative aspect-square w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden mb-3">
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600">
                    AUDIO
                  </span>
                  <Image
                    src="/images/products/luxury-overear-headphones.jpg"
                    alt="Luxury Wireless Earbuds"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  Studio ANC Earbuds
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  Hybrid Active Noise Cancelling
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">
                    LKR 18,900
                  </span>
                  <Link
                    href="/product/airpods-max-style-headphones"
                    className="p-1 rounded-md text-slate-400 hover:text-blue-600"
                    aria-label="View product"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bestseller 3 */}
              <div className="flex flex-col p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="relative aspect-square w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden mb-3">
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600">
                    AUDIO
                  </span>
                  <Image
                    src="/images/hero/hero-headphones.png"
                    alt="Luxury Over-Ear Headphones"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  Max Bass Studio Pro
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  Spatial Audio & 40H Playtime
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">
                    LKR 28,500
                  </span>
                  <Link
                    href="/product/airpods-max-style-headphones"
                    className="p-1 rounded-md text-slate-400 hover:text-blue-600"
                    aria-label="View product"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bestseller 4 */}
              <div className="flex flex-col p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="relative aspect-square w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden mb-3">
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600">
                    TECH
                  </span>
                  <Image
                    src="/images/products/bluetooth-party-speaker.jpg"
                    alt="Bluetooth Party Speaker"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  Party Bass Blast
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  60W RGB Wireless Speaker
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">
                    LKR 24,000
                  </span>
                  <Link
                    href="/product/bluetooth-party-speaker-high-bass"
                    className="p-1 rounded-md text-slate-400 hover:text-blue-600"
                    aria-label="View product"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Featured Products Spotlight (Faithful to bento-reference.png) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Featured Products
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-blue-700">
                  SPOTLIGHT
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Flagship wearable technology engineered for health monitoring and high precision.
              </p>
            </div>

            <div className="relative aspect-square w-full my-6 bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100 group">
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-white border border-slate-200 text-slate-700">
                FLAGSHIP
              </span>
              <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/hero/hero-watch.png"
                  alt="Apple Watch Series 11"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Apple Watch Series 11
                </h4>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  Confirm Availability
                </p>
              </div>
              <Link
                href="/product/apple-watch-series-11"
                className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
