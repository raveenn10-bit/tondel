"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, Shield, Truck, Clock, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="bg-tondel-navySurface border-t border-white/10 text-slate-400 text-sm">
      {/* Upper Features / Guarantees Strip */}
      <div className="border-b border-white/5 py-10 px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Island-Wide Delivery</h4>
              <p className="text-xs text-slate-400">Fast, reliable doorstep delivery in Sri Lanka</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">100% Genuine Tech</h4>
              <p className="text-xs text-slate-400">Authentic devices with verified seller warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Direct WhatsApp Help</h4>
              <p className="text-xs text-slate-400">Real-time product & availability confirmation</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-3 rounded-xl bg-amber-600/20 text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Quick Response</h4>
              <p className="text-xs text-slate-400">Instant answers to specs, prices & queries</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block focus:outline-none">
            <div className="relative h-14 w-56 sm:w-64">
              <Image
                src="/images/logo.png"
                alt="TONDEL – Smart Choices, Smarter Living"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            {siteConfig.bio}
          </p>

          <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{siteConfig.address}, {siteConfig.postalCode}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Hotlines: {siteConfig.displayPhone} / {siteConfig.secondaryPhone}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
            Categories
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/category/smartphones" className="hover:text-blue-400 transition-colors">
                Smartphones
              </Link>
            </li>
            <li>
              <Link href="/category/smart-watches" className="hover:text-blue-400 transition-colors">
                Smart Watches
              </Link>
            </li>
            <li>
              <Link href="/category/audio" className="hover:text-blue-400 transition-colors">
                Headphones & Audio
              </Link>
            </li>
            <li>
              <Link href="/category/chargers-cables" className="hover:text-blue-400 transition-colors">
                Chargers & Cables
              </Link>
            </li>
            <li>
              <Link href="/category/home-appliances" className="hover:text-blue-400 transition-colors">
                Home Appliances
              </Link>
            </li>
            <li>
              <Link href="/offers" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                Special Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care & Policies */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About TONDEL
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-400 transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-blue-400 transition-colors">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-blue-400 transition-colors">
                Returns & Warranty
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect & Social */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
            Connect With Us
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Follow our official social page for flash sales, restocks and product reviews.
          </p>
          <div className="space-y-3">
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 hover:bg-blue-600/20 text-xs font-medium transition-all"
            >
              <span>Follow on Facebook</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I want to check latest promotions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-emerald-600/10 border border-emerald-600/20 text-emerald-400 hover:bg-emerald-600/20 text-xs font-medium transition-all"
            >
              <span>Chat on WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-6 pb-24 sm:pb-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TONDEL. All rights reserved. Smart Choices, Smarter Living.</p>
          <p className="text-slate-400">
            Powered by Next.js & WhatsApp Commerce
          </p>
        </div>
      </div>
    </footer>
  );
}
