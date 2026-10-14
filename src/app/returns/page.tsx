import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, RotateCcw, ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Warranty Policy | TONDEL Sri Lanka",
  description:
    "Information regarding warranty claims, checking defective units, and returns process at TONDEL Sri Lanka.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-slate-300">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Warranty & Returns</span>
        </nav>

        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Customer Protection
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Warranty & Returns Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear guidelines for inspection, manufacturing defects, and official warranty claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Warranty Coverage</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Smartphones, smart watches, and home appliances are covered by official manufacturer or seller warranty as stated on your invoice.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <RotateCcw className="w-4 h-4 text-blue-400" />
              <span>7-Day Replacement for Dead on Arrival</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Any factory manufacturing defect reported within 7 days of receiving the item is eligible for direct technical assessment and replacement.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <h3 className="text-lg font-bold font-heading text-white">
            How to File a Warranty Claim
          </h3>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>Have your printed invoice number and device serial / IMEI number ready.</li>
            <li>Send a message with short video evidence of the fault to our WhatsApp support ({siteConfig.displayPhone}).</li>
            <li>Our technician will verify the issue and advise either drop-off or courier return for service center processing.</li>
          </ol>

          <h3 className="text-lg font-bold font-heading text-white pt-4">
            Exclusions from Warranty
          </h3>
          <p>
            Warranty does not cover liquid damage, physical cracks or drops, unauthorized root/jailbreak firmware modifications, electrical power surges, or normal cosmetic wear and tear.
          </p>
        </div>

      </div>
    </div>
  );
}
