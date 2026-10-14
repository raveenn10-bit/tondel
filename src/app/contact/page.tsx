"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, Phone, Mail, MapPin, ChevronRight, Send, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello TONDEL!\n\nNew Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nTopic: ${subject}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(formatted)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-tondel-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400 font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            We are Here to Help
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Whether you want to check stock for a specific device, verify warranty terms, or track an active delivery, our team is directly available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I would like to get in touch.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-tondel-navySurface border border-white/5 hover:border-emerald-500/40 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-2xl bg-emerald-600/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-white text-base">
                  Official WhatsApp
                </h3>
                <p className="text-xs text-slate-400">Instant answers, orders & quotes</p>
                <p className="text-sm font-bold text-emerald-400 pt-1">
                  {siteConfig.displayPhone}
                </p>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/5 flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-white text-base">
                  Email Support
                </h3>
                <p className="text-xs text-slate-400">Corporate & formal inquiries</p>
                <p className="text-sm font-semibold text-white pt-1">
                  {siteConfig.email}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-tondel-navySurface border border-white/5 flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-600/20 text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-white text-base">
                  Service Area
                </h3>
                <p className="text-xs text-slate-400">Distribution hub</p>
                <p className="text-sm font-semibold text-white pt-1">
                  {siteConfig.address} (Island-Wide Dispatch)
                </p>
              </div>
            </div>

            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-tondel-navySurface border border-white/5 hover:border-blue-500/40 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-white text-sm">
                  Official Facebook Page
                </h3>
                <p className="text-xs text-slate-400">Follow for flash sales & new drops</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-tondel-navySurface border border-white/5 hover:border-pink-500/40 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-white text-sm">
                  Official Instagram
                </h3>
                <p className="text-xs text-slate-400">@tondel.lk</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </div>

          {/* Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 bg-tondel-navySurface p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-400">
                Fill out the quick form below to launch a pre-filled WhatsApp inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kasun Perera"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 077 123 4567"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Inquiry Topic</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. iPhone 17 series availability or Midea rice cooker delivery"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your questions regarding products, warranty, or delivery location..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/30"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
