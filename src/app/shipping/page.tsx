import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Truck, Clock, ShieldCheck, ChevronRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | TONDEL Sri Lanka",
  description:
    "Island-wide delivery schedules, courier tracking, and doorstep fulfillment policy for TONDEL Sri Lanka.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-slate-300">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Shipping Policy</span>
        </nav>

        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Logistics & Delivery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Shipping & Island-Wide Delivery
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last updated: October 2026. Standard terms subject to final WhatsApp confirmation.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-4">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-400" />
            <span>Coverage Across All 25 Districts</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed">
            TONDEL partners with certified domestic courier services across Sri Lanka to ensure your electronics, accessories, and home appliances reach you securely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Colombo & Western Province</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Orders placed before 2:00 PM are dispatched for next-day delivery (24–48 hours).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Outstation Districts</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Kandy, Galle, Kurunegala, Matara, Jaffna, and other regions take 2–3 business days.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <h3 className="text-lg font-bold font-heading text-white">
            Delivery Fees & Confirmation
          </h3>
          <p>
            Standard shipping rates range between LKR 350 and LKR 650 depending on parcel weight and destination district. For bulk or fragile home appliances (such as Midea rice cookers and air fryers), our team verifies the exact courier quote on WhatsApp before asking for payment or scheduling dispatch.
          </p>

          <h3 className="text-lg font-bold font-heading text-white pt-4">
            Packaging & Damage In Transit
          </h3>
          <p>
            All electronic items are bubble-wrapped and packaged in reinforced boxes. We recommend customers inspect parcel integrity upon handover. If the outer carton is damaged, take a quick photo and contact us immediately on WhatsApp ({siteConfig.displayPhone}).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
          <span className="font-semibold text-white">Note for Owner:</span> This policy is configured for initial launch and can be updated in <code>site-config.ts</code> with exact courier partner details.
        </div>

      </div>
    </div>
  );
}
