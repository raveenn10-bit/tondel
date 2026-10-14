import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/home/FAQSection";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | TONDEL Sri Lanka",
  description:
    "Common questions regarding WhatsApp orders, delivery timelines, payment options, and genuine warranty at TONDEL Sri Lanka.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Help & FAQ</span>
        </nav>

        <FAQSection />

      </div>
    </div>
  );
}
