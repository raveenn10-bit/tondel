"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { siteConfig } from "@/data/site-config";
import { Typewriter } from "@/components/ui/Typewriter";
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  ChevronDown,
  Mouse,
  Smartphone,
  Watch,
  Headphones,
  MapPin
} from "lucide-react";

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
      // Entrance Timeline - Using fromTo with clearProps to guarantee 100% visibility
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, clearProps: "opacity,transform" },
          "-=0.5"
        )
        .fromTo(
          ".hero-typewriter-box",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, clearProps: "opacity,transform" },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta-btn",
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, clearProps: "all" },
          "-=0.5"
        )
        .fromTo(
          ".hero-trust-item",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, clearProps: "all" },
          "-=0.4"
        )
        // Background Arch & Podium Entrance
        .fromTo(
          ringRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
          "-=1.1"
        )
        .fromTo(
          podiumRef.current,
          { opacity: 0, scaleX: 0.7 },
          { opacity: 1, scaleX: 1, duration: 1.2 },
          "-=1.2"
        )
        // Device Staggered Reveal
        .fromTo(
          phoneRef.current,
          { opacity: 0, y: 40, x: -15 },
          { opacity: 1, y: 0, x: 0, duration: 1.2, ease: "back.out(1.2)" },
          "-=1.0"
        )
        .fromTo(
          headphonesRef.current,
          { opacity: 0, y: -30, x: 20 },
          { opacity: 1, y: 0, x: 0, duration: 1.3, ease: "back.out(1.2)" },
          "-=1.1"
        )
        .fromTo(
          sneakerRef.current,
          { opacity: 0, x: 40, y: 25 },
          { opacity: 1, x: 0, y: 0, duration: 1.3, ease: "power3.out" },
          "-=1.0"
        )
        // Watch enters prominently in the FRONT (z-50)
        .fromTo(
          watchRef.current,
          { opacity: 0, scale: 0.6, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.5)" },
          "-=0.9"
        );

      // Continuous Floating Animations (Runs smoothly on BOTH Mobile & Desktop)
      // 1. Flagship Smartphone
      gsap.to(phoneRef.current, {
        y: -12,
        rotation: -14,
        duration: 4.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Luxury Studio Headphones
      gsap.to(headphonesRef.current, {
        y: -15,
        rotation: 12,
        duration: 3.8,
        delay: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Apple Watch (Foreground Anchor - Crisp hover sway)
      gsap.to(watchRef.current, {
        y: -10,
        rotation: -3,
        duration: 3.2,
        delay: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Performance Sneaker
      gsap.to(sneakerRef.current, {
        y: -9,
        rotation: -8,
        duration: 5.0,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Neon Portal Ring Pulse
      gsap.to(ringRef.current, {
        scale: 1.03,
        opacity: 0.95,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Desktop Interactive Mouse Parallax (3D Spatial Depth)
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current || window.innerWidth < 1024) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const mouseY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

        gsap.to(ringRef.current, {
          x: mouseX * -10,
          y: mouseY * -6,
          duration: 1.6,
          ease: "power1.out",
        });

        gsap.to(phoneRef.current, {
          x: mouseX * 14,
          y: mouseY * 10,
          duration: 1.3,
          ease: "power1.out",
        });

        gsap.to(headphonesRef.current, {
          x: mouseX * 20,
          y: mouseY * 16,
          duration: 1.5,
          ease: "power1.out",
        });

        gsap.to(sneakerRef.current, {
          x: mouseX * 22,
          y: mouseY * 14,
          duration: 1.4,
          ease: "power1.out",
        });

        // Watch has strongest parallax depth because it's closest to the camera
        gsap.to(watchRef.current, {
          x: mouseX * 28,
          y: mouseY * 22,
          duration: 1.1,
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

  const scrollToNextSection = () => {
    const el = document.getElementById("categories-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#040A17] px-4 sm:px-6 lg:px-8 pt-6 pb-8 select-none"
    >
      {/* Cinematic Ambient Atmosphere Glows */}
      <div className="absolute top-1/4 left-1/6 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/12 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-indigo-600/18 rounded-full blur-[130px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-4 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Canva Reference Luxury Glass Frame Contour */}
      <div className="absolute inset-x-3 sm:inset-x-8 lg:inset-x-12 inset-y-4 sm:inset-y-8 rounded-[28px] sm:rounded-[48px] border border-white/[0.07] bg-gradient-to-b from-white/[0.02] via-transparent to-blue-950/[0.08] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 py-4 sm:py-8 my-auto">
        
        {/* Left Column: Typography, Dynamic Typewriter & CTAs */}
        <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7 z-20 text-left">
          
          {/* Badge: "NEW COLLECTION 2026" with Radar Pulse */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/50 text-[11px] font-bold tracking-widest text-indigo-300 uppercase shadow-lg shadow-indigo-950/60 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span>NEW COLLECTION 2026</span>
          </div>

          {/* Heading: "THE FUTURE OF SHOPPING" with Gradient Shimmer Wave */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight font-heading leading-[1.05] text-white">
            <span className="hero-title-line block">THE FUTURE</span>
            <span className="hero-title-line block animate-shimmer-text">
              OF SHOPPING
            </span>
          </h1>

          {/* Dynamic Typewriter Subtitle for Interactive Motion */}
          <div className="hero-typewriter-box space-y-2 max-w-lg">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Discover extraordinary technology designed for your lifestyle.
            </p>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium py-1 px-3 rounded-lg bg-white/[0.03] border border-white/5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
              <span className="text-slate-400">Featuring:</span>
              <Typewriter
                words={[
                  "Flagship Smartphones & 5G",
                  "Apple Watch & Smart Bands",
                  "Luxury Over-Ear Acoustics",
                  "Smart Kitchen Appliances",
                  "GaN Chargers & Accessories"
                ]}
                typingSpeed={65}
                deletingSpeed={35}
                delayBetweenWords={2000}
                className="text-cyan-400 font-semibold"
              />
            </div>
          </div>

          {/* Buttons: 100% visible on both Mobile and Desktop with Glow Styling */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1 w-full sm:w-auto">
            {/* Primary: Solid white pill "SHOP NOW" */}
            <Link
              href="/shop"
              className="hero-cta-btn flex-1 sm:flex-initial px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            {/* Secondary: Dark pill with glowing purple/blue border "EXPLORE COLLECTION" */}
            <a
              href={whatsappExploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn flex-1 sm:flex-initial px-7 py-3.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-indigo-500/70 hover:border-cyan-400 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] flex items-center justify-center gap-2.5 group backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              <span>EXPLORE VIA WHATSAPP</span>
            </a>
          </div>

          {/* Trust badges with icons and subtle animated glows */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
            <span className="hero-trust-item flex items-center gap-1.5 hover:text-white transition-colors">
              <Truck className="w-4 h-4 text-cyan-400" /> 
              <span>Island-Wide Delivery</span>
            </span>
            <span className="hero-trust-item flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> 
              <span>100% Genuine Tech</span>
            </span>
            <span className="hero-trust-item flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-purple-400" /> 
              <span>Galle, Sri Lanka</span>
            </span>
          </div>
        </div>

        {/* Right Column: True 3D Layered Device Composition (Scales perfectly on Mobile and Desktop) */}
        <div className="lg:col-span-7 xl:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[520px] lg:min-h-[640px] w-full mt-4 lg:mt-0">
          
          {/* 1. Luminous Glass Arch Behind Products (Canva portal arch) */}
          <div
            ref={ringRef}
            className="absolute w-[300px] sm:w-[480px] md:w-[580px] h-[300px] sm:h-[480px] md:h-[580px] rounded-full border-2 border-cyan-400/35 bg-gradient-to-tr from-blue-900/20 via-indigo-600/15 to-cyan-400/20 backdrop-blur-[3px] pointer-events-none shadow-[0_0_100px_rgba(6,182,212,0.3)] flex items-center justify-center"
          >
            {/* Concentric subtle inner rings */}
            <div className="w-[88%] h-[88%] rounded-full border border-indigo-400/30" />
            <div className="w-[74%] h-[74%] rounded-full border border-blue-400/20" />
          </div>

          {/* 2. Circular Reflective 3D Floor Podium (Canva ground stage) */}
          <div
            ref={podiumRef}
            className="absolute bottom-1 sm:bottom-6 w-[95%] sm:w-[520px] lg:w-[620px] h-28 sm:h-44 rounded-[100%] bg-gradient-to-b from-blue-600/25 via-blue-950/50 to-transparent border-t border-cyan-400/50 shadow-[0_-15px_50px_rgba(6,182,212,0.3)] pointer-events-none"
          >
            {/* Specular neon blue horizon line */}
            <div className="w-4/5 mx-auto h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />
            <div className="w-3/5 mx-auto h-12 bg-cyan-500/20 blur-2xl rounded-full" />
          </div>

          {/* 3. Layered 3D Product Canvas (Independent Cutouts with Proper Z-Index Hierarchy) */}
          <div className="relative w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[640px] h-[360px] sm:h-[500px] lg:h-[620px] flex items-center justify-center">
            
            {/* Layer A: Apple iPhone Flagship (Back-Left, Upright, Tilted -16°) */}
            <div
              ref={phoneRef}
              className="absolute left-[3%] sm:left-[6%] top-[8%] sm:top-[10%] w-[160px] sm:w-[240px] lg:w-[290px] h-[230px] sm:h-[350px] lg:h-[420px] z-20 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-16deg)" }}
            >
              <Image
                src="/images/hero/hero-phone.png"
                alt="Flagship Smartphone"
                fill
                priority
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.05]"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 320px"
              />
            </div>

            {/* Layer B: Luxury Over-Ear Studio Headphones (Upper-Right, Tilted +10°) */}
            <div
              ref={headphonesRef}
              className="absolute right-[2%] sm:right-[6%] top-[2%] sm:top-[4%] w-[180px] sm:w-[280px] lg:w-[340px] h-[210px] sm:h-[330px] lg:h-[390px] z-15 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(10deg)" }}
            >
              <Image
                src="/images/hero/hero-headphones.png"
                alt="Luxury Studio Headphones"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter contrast-[1.05]"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 280px, 340px"
              />
            </div>

            {/* Layer C: Athletic Performance Sneaker (Lower-Right Ground Foreground, resting on podium, z-30) */}
            <div
              ref={sneakerRef}
              className="absolute right-[-4%] sm:right-[1%] lg:right-[3%] bottom-[2%] sm:bottom-[3%] w-[190px] sm:w-[300px] lg:w-[360px] h-[150px] sm:h-[230px] lg:h-[280px] z-30 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-10deg)" }}
            >
              <Image
                src="/images/hero/hero-sneaker.png"
                alt="Performance Lifestyle Sneaker"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)] filter contrast-[1.06]"
                sizes="(max-width: 640px) 190px, (max-width: 1024px) 300px, 360px"
              />
            </div>

            {/* Layer D: Apple Watch (FRONT AND CENTER! Highest Z-index z-50! Visible illuminated dial!) */}
            <div
              ref={watchRef}
              className="absolute left-[30%] sm:left-[32%] lg:left-[35%] bottom-[10%] sm:bottom-[9%] lg:bottom-[8%] w-[120px] sm:w-[180px] lg:w-[210px] h-[145px] sm:h-[220px] lg:h-[260px] z-50 cursor-pointer transition-transform duration-300"
              style={{ transform: "rotate(-5deg)" }}
            >
              {/* Subtle ambient cyan glow behind watch dial to make it pop brilliantly */}
              <div className="absolute inset-0 bg-cyan-400/25 blur-xl rounded-full scale-75 -z-10 pointer-events-none" />
              <Image
                src="/images/hero/hero-watch.png"
                alt="Apple Watch Series"
                fill
                priority
                className="object-contain drop-shadow-[0_15px_30px_rgba(6,182,212,0.4)] drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] filter contrast-[1.12]"
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 220px"
              />
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Animated Scroll-Down Cue */}
      <div className="relative z-20 flex justify-center pb-2 pt-1">
        <button
          onClick={scrollToNextSection}
          className="group inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
          aria-label="Scroll to browse categories"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold group-hover:tracking-wider transition-all">
            Scroll to Explore
          </span>
          <div className="p-1 rounded-full border border-white/10 group-hover:border-cyan-400/50 bg-white/[0.02] group-hover:bg-cyan-500/10 transition-all animate-bounce-slow">
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </div>
        </button>
      </div>
    </section>
  );
}
