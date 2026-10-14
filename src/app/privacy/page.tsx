import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Shield, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TONDEL Sri Lanka",
  description:
    "Privacy policy regarding customer details and WhatsApp ordering at TONDEL Sri Lanka.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-slate-300">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Privacy Policy</span>
        </nav>

        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Data Protection
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: October 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/10 space-y-3">
            <h2 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>No Account Credentials or Card Data Stored</span>
            </h2>
            <p>
              TONDEL does NOT collect passwords, online credit/debit card credentials, or customer login profiles on this website. Cart and wishlist items are stored solely on your local device browser using <code>localStorage</code>.
            </p>
          </div>

          <h3 className="text-base font-bold font-heading text-white">
            1. Information Handled via WhatsApp
          </h3>
          <p>
            When you initiate a WhatsApp order or inquiry, your phone number and delivery address are shared voluntarily inside your private chat with our authorized staff. This information is used strictly to prepare your invoice, arrange delivery, and provide after-sales warranty support.
          </p>

          <h3 className="text-base font-bold font-heading text-white">
            2. Local Browser Storage
          </h3>
          <p>
            Our website uses browser <code>localStorage</code> purely to remember the products you placed in your cart or wishlist so your selections persist when you refresh the page.
          </p>

          <h3 className="text-base font-bold font-heading text-white">
            3. Third-Party Links
          </h3>
          <p>
            Clicking on our WhatsApp or Facebook links opens external services governed by Meta Platforms&apos; respective privacy policies.
          </p>
        </div>

      </div>
    </div>
  );
}
