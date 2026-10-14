import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, Truck, MessageCircle, HeartHandshake, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About TONDEL | Smart Choices, Smarter Living",
  description:
    "Learn about TONDEL's mission to deliver authentic flagship smartphones, smart watches, audio gear, and home appliances across Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">About TONDEL</span>
        </nav>

        {/* Hero Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-4">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Our Story & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Smart Choices, Smarter Living.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            TONDEL was founded with a straightforward goal: providing Sri Lankan tech enthusiasts and households with authentic flagship electronics, verified warranties, and personal human-first shopping through WhatsApp.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-heading text-white">
            The TONDEL Difference
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Zero Clones, 100% Genuine</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We strictly stock authentic hardware from reputable global manufacturers like Apple, Xiaomi, Infinix, Samsung, and Midea. Every serial number is verifiable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Direct Human Interaction</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Skip automated bots and complex payment checkout gates. Talk directly with our team on WhatsApp for live price checks, unboxing photos, and delivery updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Island-Wide Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you are in Colombo, Kandy, Galle, Jaffna, or Kurunegala, our courier network ensures safe, prompt delivery to your doorstep.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Verified Seller Warranty</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Transparent warranty terms with physical invoices. We stand firmly behind the performance and authenticity of every product we sell.
              </p>
            </div>
          </div>
        </div>

        {/* Contact banner */}
        <div className="p-8 rounded-3xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Have a business or bulk inquiry?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Reach out to our founders directly on WhatsApp at {siteConfig.displayPhone}.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I would like to get in touch with your team.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Chat with Us
          </a>
        </div>

      </div>
    </div>
  );
}
