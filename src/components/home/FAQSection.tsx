"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does ordering via WhatsApp work?",
    answer:
      "Browse our website, select your desired products and variants, and click 'Order via WhatsApp' (for a single item) or add items to your cart and click 'Checkout via WhatsApp'. This automatically creates a pre-formatted message with item details, variant, and pricing. You simply send it to our official business number (+94 77 754 3984) to confirm availability and delivery.",
  },
  {
    question: "What are the delivery times and charges across Sri Lanka?",
    answer:
      "We deliver island-wide across all 25 districts in Sri Lanka. Colombo and suburban areas typically arrive within 24 to 48 hours; outstation areas take 2 to 3 working days. Standard delivery fees range between LKR 350 and LKR 650 depending on parcel weight and location, confirmed prior to dispatch.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support Cash on Delivery (COD) for eligible locations, direct bank wire transfer to our company bank account, and online banking slip verification via WhatsApp. You only transfer funds after our team confirms product serial numbers and stock availability.",
  },
  {
    question: "Are all products original with genuine warranty?",
    answer:
      "Yes, 100%. TONDEL strictly offers authentic products with manufacturer or certified seller warranty. Smartphones, smart watches, and Midea appliances come with standard warranty coverage (ranging from 6 months to 2 years depending on the brand and model).",
  },
  {
    question: "Can I order multiple different items in one go?",
    answer:
      "Absolutely. Use the 'Add to Cart' button for each product. When you open your Shopping Cart, click 'Checkout via WhatsApp' to send a single itemized order with calculated subtotal directly to our team.",
  },
  {
    question: "What if a product says 'Contact for Price' or 'Confirm Availability'?",
    answer:
      "Due to fast-moving international currency exchange and stock allocations, certain high-demand electronics and upcoming releases (like new smartphone models) are priced dynamically upon request. Clicking WhatsApp immediately connects you to an agent who provides the exact live rate.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-tondel-navySurface border-t border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Everything you need to know about ordering, delivery, warranty, and WhatsApp checkout.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-white text-sm">
              Still have a specific question about a product?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Our support team is available daily on WhatsApp for quick inquiries.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I have a question before placing an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}
