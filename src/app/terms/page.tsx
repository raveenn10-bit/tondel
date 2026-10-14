import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | TONDEL Sri Lanka",
  description:
    "Terms of service, pricing policy, and ordering guidelines for TONDEL Sri Lanka.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-slate-300">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Terms & Conditions</span>
        </nav>

        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last modified: October 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-3">
            <h2 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span>Catalogue & Ordering Protocol</span>
            </h2>
            <p>
              This website serves as an interactive product showcase, cart compiler, and direct WhatsApp communication portal. Submission of a WhatsApp checkout request constitutes a commercial enquiry, not an automated binding transaction until mutual confirmation by both parties.
            </p>
          </div>

          <h3 className="text-base font-bold font-heading text-white">
            1. Pricing and Stock Availability
          </h3>
          <p>
            Due to market dynamics, foreign exchange fluctuations, and limited import batches, all quoted prices and availability must be re-confirmed during the WhatsApp conversation before payment or dispatch. Items labelled &quot;Contact for Price&quot; or &quot;Confirm Availability&quot; are provided as estimates.
          </p>

          <h3 className="text-base font-bold font-heading text-white">
            2. Payment & Dispatch
          </h3>
          <p>
            Orders are confirmed once customer details, destination address, and settlement method (Cash on Delivery or direct bank deposit) are agreed upon via WhatsApp. Serial numbers and package photos are supplied prior to handing the parcel to our courier service.
          </p>

          <h3 className="text-base font-bold font-heading text-white">
            3. Warranty Terms
          </h3>
          <p>
            All products are backed by the seller or distributor warranty specified on the physical sales invoice issued at the time of delivery.
          </p>
        </div>

      </div>
    </div>
  );
}
