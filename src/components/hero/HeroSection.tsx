"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const podiumRef = useRef<HTMLDivElement>(null);

  // Independent refs for each separate PNG device layer
  const phoneRef = useRef<HTMLDivElement>(null);
  const headphonesRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const sneakerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -25,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 45,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.5"
        )
        // Device Staggered Reveal
        .from(
          ringRef.current,
          {
            opacity: 0,
            scale: 0.75,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.0"
        )
        .from(
          podiumRef.current,
          {
            opacity: 0,
            scaleX: 0.7,
            duration: 1.2,
          },
          "-=1.2"
        )
        .from(
          phoneRef.current,
          {
            opacity: 0,
            y: 60,
            x: -20,
            duration: 1.2,
            ease: "back.out(1.2)",
          },
          "-=1.0"
        )
        .from(
          headphonesRef.current,
          {
            opacity: 0,
            y: -50,
            x: 30,
            duration: 1.3,
            ease: "back.out(1.2)",
          },
          "-=1.1"
        )
        .from(
          watchRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 40,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.9"
        )
        .from(
          sneakerRef.current,
          {
            opacity: 0,
            x: 60,
            y: 40,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=1.0"
        );

      // Independent Continuous Floating Animations for Each Device
      // 1. Phone: slow floating with gentle tilt oscillation
      gsap.to(phoneRef.current, {
        y: -14,
        rotation: -14,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Headphones: gentle hover sway
      gsap.to(headphonesRef.current, {
        y: -18,
        rotation: 12,
        duration: 3.6,
        delay: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Apple Watch: smooth pulse and hover
      gsap.to(watchRef.current, {
        y: -10,
        rotation: -4,
        duration: 3.1,
        delay: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Sneaker: ground floating glide
      gsap.to(sneakerRef.current, {
        y: -12,
        rotation: -8,
        duration: 4.8,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Ring Pulse
      gsap.to(ringRef.current, {
        scale: 1.04,
        opacity: 0.9,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Interactive Mouse Parallax (3D Depth)
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current || window.innerWidth < 1024) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const mouseY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

        gsap.to(ringRef.current, {
          x: mouseX * -12,
          y: mouseY * -8,
          duration: 1.8,
          ease: "power1.out",
        });

        gsap.to(phoneRef.current, {
          x: mouseX * 16,
          y: mouseY * 12,
          duration: 1.4,
          ease: "power1.out",
        });

        gsap.to(headphonesRef.current, {
          x: mouseX * 22,
          y: mouseY * 18,
          duration: 1.6,
          ease: "power1.out",
        });

        gsap.to(watchRef.current, {
          x: mouseX * 28,
          y: mouseY * 22,
          duration: 1.2,
          ease: "power1.out",
        });

        gsap.to(sneakerRef.current, {
          x: mouseX * 24,
          y: mouseY * 16,
          duration: 1.5,
          ease: "power1.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whatsappExploreUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello TONDEL! I would like to explore the 2026 Collection and check available items."
  )}`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050C1A] px-4 sm:px-6 lg:px-8 pt-8 pb-16 select-none"
    >
      {/* Cinematic Ambient Atmosphere Glows */}
      <div className="absolute top-1/4 left-1/5 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-6 right-12 w-[450px] h-[450px] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs (Exact match to Canva reference) */}
        <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-start space-y-7 z-20">
          
          {/* Badge: "NEW COLLECTION 2026" */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/50 text-[11px] font-bold tracking-widest text-indigo-300 uppercase shadow-lg shadow-indigo-950/50">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            NEW COLLECTION 2026
          </div>

          {/* Heading: "THE FUTURE OF SHOPPING" */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight font-heading leading-[1.05] text-white">
            <span className="hero-title-line block">THE FUTURE</span>
            <span className="hero-title-line block text-white">
              OF SHOPPING
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
            Discover extraordinary products. Designed for your lifestyle.
          </p>

          {/* Buttons: Exact match to reference buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary: Solid white pill "SHOP NOW" */}
            <Link
              href="/shop"
              className="hero-cta-btn px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-white/25 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            {/* Secondary: Translucent pill with purple/blue glowing border "EXPLORE COLLECTION" */}
            <a
              href={whatsappExploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn px-7 py-3.5 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-indigo-500/70 hover:border-indigo-400 text-slate-200 hover:text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-indigo-950/60 hover:shadow-indigo-500/30 flex items-center gap-2 group"
            >
              <MessageCircle className="w-4 h-4 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
              <span>EXPLORE COLLECTION</span>
            </a>
          </div>

          {/* Trust points underneath */}
          <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Island-Wide Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-blue-400">✓</span> Verified Genuine
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-purple-400">✓</span> Direct WhatsApp Orders
            </span>
          </div>
        </div>

        {/* Right Column: True 3D Layered Device Composition (Zero Square Bounds) */}
        <div className="lg:col-span-7 xl:col-span-6 relative flex items-center justify-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] w-full">
          
          {/* 1. Luminous Glass / Neon Arch Behind Products (Exact match to Canva arch) */}
          <div
            ref={ringRef}
            className="absolute w-[360px] sm:w-[500px] md:w-[560px] h-[360px] sm:h-[500px] md:h-[560px] rounded-full border-2 border-blue-400/30 bg-gradient-to-tr from-blue-900/15 via-indigo-600/10 to-cyan-400/15 backdrop-blur-[2px] pointer-events-none shadow-[0_0_90px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            {/* Concentric subtle inner ring */}
            <div className="w-[88%] h-[88%] rounded-full border border-indigo-400/25" />
          </div>

          {/* 2. Circular Reflective 3D Floor Podium (Exact match to Canva ground platform) */}
          <div
            ref={podiumRef}
            className="absolute bottom-4 sm:bottom-8 w-[90%] sm:w-[520px] lg:w-[600px] h-32 sm:h-40 rounded-[100%] bg-gradient-to-b from-blue-600/20 via-blue-950/40 to-transparent border-t border-blue-400/40 shadow-[0_-10px_40px_rgba(37,99,235,0.25)] pointer-events-none"
          >
            {/* Specular neon blue horizon line */}
            <div className="w-3/4 mx-auto h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" />
            <div className="w-1/2 mx-auto h-12 bg-blue-500/15 blur-2xl rounded-full" />
          </div>

          {/* 3. Layered 3D Product Canvas (Independent Cutouts) */}
          <div className="relative w-full max-w-[560px] lg:max-w-[620px] h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
            
            {/* Layer A: Apple iPhone 14/15 Pro (Tilted back-left, upright, deep shadow) */}
            <div
              ref={phoneRef}
              className="absolute left-[8%] sm:left-[10%] top-[14%] sm:top-[12%] w-[210px] sm:w-[260px] lg:w-[280px] h-[300px] sm:h-[370px] lg:h-[400px] z-20 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-16deg)" }}
            >
              <Image
                src="/images/hero/hero-phone.png"
                alt="Flagship Smartphone"
                fill
                priority
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.05]"
                sizes="(max-width: 768px) 240px, 300px"
              />
            </div>

            {/* Layer B: Luxury Over-Ear Headphones (Upper-right, upright, tilted slightly right) */}
            <div
              ref={headphonesRef}
              className="absolute right-[6%] sm:right-[10%] top-[8%] sm:top-[6%] w-[240px] sm:w-[290px] lg:w-[320px] h-[280px] sm:h-[340px] lg:h-[370px] z-15 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(10deg)" }}
            >
              <Image
                src="/images/hero/hero-headphones.png"
                alt="Luxury Studio Headphones"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter contrast-[1.05]"
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>

            {/* Layer C: Apple Watch (Centered bottom, in front of the phone, crisp dial) */}
            <div
              ref={watchRef}
              className="absolute left-[36%] sm:left-[36%] bottom-[16%] sm:bottom-[15%] w-[130px] sm:w-[160px] lg:w-[175px] h-[160px] sm:h-[200px] lg:h-[220px] z-35 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-6deg)" }}
            >
              <Image
                src="/images/hero/hero-watch.png"
                alt="Smart Watch"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] filter contrast-[1.08]"
                sizes="(max-width: 768px) 150px, 180px"
              />
            </div>

            {/* Layer D: Athletic Performance Sneaker (Foreground lower-right, resting on podium) */}
            <div
              ref={sneakerRef}
              className="absolute right-[2%] sm:right-[4%] bottom-[6%] sm:bottom-[4%] w-[260px] sm:w-[320px] lg:w-[350px] h-[200px] sm:h-[250px] lg:h-[270px] z-40 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-10deg)" }}
            >
              <Image
                src="/images/hero/hero-sneaker.png"
                alt="Performance Lifestyle Sneaker"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.95)] filter contrast-[1.06]"
                sizes="(max-width: 768px) 300px, 360px"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
