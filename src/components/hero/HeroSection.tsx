"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Truck,
} from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/data/site-config";

const AUTO_PLAY_MS = 8000;

const slides = [
  {
    id: "tondel-original",
    image: "/images/banners/tondel-retail-hero.webp",
    mobileImage: "/images/hero/tondel-original-mobile.webp",
    alt: "TONDEL electronics and lifestyle collection",
    eyebrow: "GENUINE TECH · SMARTER PRICES",
    sinhala: "ඔබේ ජීවිතයට Smart Upgrade එකක්",
    title: "Upgrade every day with TONDEL",
    description:
      "Smartphones, wearables, audio and home appliances with direct WhatsApp support.",
    accent: "from-blue-500 via-cyan-400 to-indigo-500",
    imagePosition: "object-center",
  },
  {
    id: "smart-tech",
    image: "/images/hero/tondel-tech-center.webp",
    mobileImage: "/images/hero/tondel-tech-mobile.webp",
    alt: "Laptop, smartphone, smartwatch and headphones on a purple studio platform",
    eyebrow: "SMART TECH DEALS",
    sinhala: "හොඳම තාක්ෂණය, හොඳම තේරීම",
    title: "Upgrade Your Tech. Smarter.",
    description: "Everyday devices selected for work, play and life on the move.",
    accent: "from-fuchsia-400 via-pink-500 to-violet-500",
    imagePosition: "object-center",
  },
  {
    id: "home-essentials",
    image: "/images/hero/tondel-home-center.webp",
    mobileImage: "/images/hero/tondel-home-mobile.webp",
    alt: "Modern home appliances arranged on a purple studio platform",
    eyebrow: "ISLAND-WIDE DELIVERY",
    sinhala: "ගෙදරට ගැලපෙන Smart Living",
    title: "Modern Home Essentials",
    description: "Practical appliances for an easier, more comfortable everyday home.",
    accent: "from-amber-300 via-pink-500 to-violet-500",
    imagePosition: "object-center",
  },
] as const;

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.to(track, {
        xPercent: -active * 100,
        duration: reducedMotion ? 0 : 0.95,
        ease: "power3.inOut",
        overwrite: true,
      });

      const currentSlide = track.children[active] as HTMLElement | undefined;
      if (!currentSlide) return;

      gsap.fromTo(
        currentSlide.querySelectorAll("[data-hero-reveal]"),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: reducedMotion ? 0 : 0.7,
          stagger: reducedMotion ? 0 : 0.09,
          delay: reducedMotion ? 0 : 0.28,
          ease: "power3.out",
          overwrite: true,
        },
      );

      gsap.fromTo(
        currentSlide.querySelector("[data-product-stage]"),
        { scale: reducedMotion ? 1 : 1.055, autoAlpha: 0.85 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: reducedMotion ? 0 : 1.25,
          ease: "power2.out",
          overwrite: true,
        },
      );
    }, root);

    return () => context.revert();
  }, [active]);

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="TONDEL featured collections"
      className="group relative isolate overflow-hidden bg-[#160027] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={(event) => {
        touchStartRef.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartRef.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStartRef.current) - touchStartRef.current;
        if (Math.abs(distance) > 45) goTo(active + (distance < 0 ? 1 : -1));
        touchStartRef.current = null;
      }}
    >
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex will-change-transform">
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              aria-hidden={active !== index}
              className="relative min-h-[580px] w-full shrink-0 overflow-hidden sm:min-h-[610px] lg:min-h-[520px]"
            >
              <div data-product-stage className="absolute inset-0">
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={`object-cover ${slide.imagePosition} lg:hidden`}
                  sizes="100vw"
                />
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={`hidden object-cover ${slide.imagePosition} lg:block`}
                  sizes="(min-width: 1024px) 100vw, 1px"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,3,35,.74)_0%,rgba(17,3,35,.08)_28%,rgba(17,3,35,.12)_60%,rgba(17,3,35,.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(15,2,31,.88)_0%,rgba(15,2,31,.20)_32%,rgba(15,2,31,.08)_54%,rgba(15,2,31,.84)_100%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_48%,transparent_0%,transparent_25%,#12001f_86%)]" />
              <div className="hero-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative mx-auto grid min-h-[580px] max-w-[1440px] grid-rows-[auto_1fr_auto] px-5 pb-20 pt-9 sm:min-h-[610px] sm:px-8 sm:pt-12 lg:min-h-[520px] lg:grid-cols-[minmax(250px,0.8fr)_minmax(380px,1.35fr)_minmax(270px,0.85fr)] lg:grid-rows-1 lg:items-center lg:gap-5 lg:px-14 lg:pb-16 lg:pt-12">
                <div className="z-10 max-w-[330px] self-start lg:self-center">
                  <div
                    data-hero-reveal
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-black tracking-[.18em] text-white/90 shadow-xl backdrop-blur-md sm:text-[11px]"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-fuchsia-300" /> {slide.eyebrow}
                  </div>
                  <h2
                    data-hero-reveal
                    lang="si"
                    className="mt-4 max-w-xs text-[27px] font-black leading-[1.18] tracking-[-.035em] text-white drop-shadow-2xl sm:text-4xl lg:text-[40px]"
                  >
                    {slide.sinhala}
                  </h2>
                  <div data-hero-reveal className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${slide.accent}`} />
                </div>

                <div aria-hidden="true" className="min-h-[250px] lg:min-h-0" />

                <div className="z-10 max-w-md self-end text-left lg:self-center lg:justify-self-end lg:text-right">
                  <p data-hero-reveal className="text-[11px] font-bold uppercase tracking-[.24em] text-fuchsia-200">
                    Shop the collection
                  </p>
                  <h1 data-hero-reveal className="mt-2 font-heading text-[32px] font-extrabold leading-[1.02] tracking-[-.045em] text-white drop-shadow-2xl sm:text-5xl lg:text-[48px]">
                    {slide.title}
                  </h1>
                  <p data-hero-reveal className="mt-3 max-w-sm text-sm leading-6 text-white/75 lg:ml-auto">
                    {slide.description}
                  </p>
                  <div data-hero-reveal className="mt-5 flex flex-wrap gap-2.5 lg:justify-end">
                    <Link
                      href="/shop"
                      tabIndex={active === index ? 0 : -1}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-[#34104e] shadow-[0_14px_35px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5 hover:bg-fuchsia-50"
                    >
                      Shop now <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello TONDEL! I would like help choosing a product.")}`}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={active === index ? 0 : -1}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/25 bg-black/25 px-4 text-sm font-extrabold text-white backdrop-blur-md transition hover:bg-white/15"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-300" /> WhatsApp
                    </a>
                  </div>
                  <div data-hero-reveal className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-white/70 lg:justify-end">
                    <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-fuchsia-300" /> Island-wide delivery</span>
                    <span className="flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5 text-fuchsia-300" /> Verified products</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous hero slide"
        onClick={() => goTo(active - 1)}
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/25 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/15 sm:grid lg:left-5"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next hero slide"
        onClick={() => goTo(active + 1)}
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/25 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/15 sm:grid lg:right-5"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 shadow-xl backdrop-blur-md">
        <ArrowLeft className="mr-0.5 h-3.5 w-3.5 text-white/55 sm:hidden" aria-hidden="true" />
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${index === active ? "w-14 bg-white/20" : "w-5 bg-white/35 hover:bg-white/60"}`}
          >
            {index === active && (
              <span key={`${active}-${paused}`} className={`absolute inset-0 origin-left bg-white ${paused ? "" : "hero-progress"}`} />
            )}
          </button>
        ))}
        <ArrowRight className="ml-0.5 h-3.5 w-3.5 text-white/55 sm:hidden" aria-hidden="true" />
      </div>

      <span className="sr-only" aria-live="polite">
        Slide {active + 1} of {slides.length}: {slides[active].title}
      </span>
    </section>
  );
}
