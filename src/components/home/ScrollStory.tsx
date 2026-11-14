"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Headphones, Laptop, Smartphone, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stories = [
  { number: "01", kicker: "Pocket power", title: "Smartphones that keep up.", copy: "Everyday performance, sharp cameras and direct support before you order.", image: "/images/products/redmi-note-14-5g-studio.webp", href: "/category/smartphones", Icon: Smartphone, tone: "bg-[#7357ff]" },
  { number: "02", kicker: "Work your way", title: "Laptops built for momentum.", copy: "Mac and Windows choices for study, business, creativity and gaming.", image: "/images/hero/story-laptop.webp", href: "/category/laptops", Icon: Laptop, tone: "bg-[#ff6b35]" },
  { number: "03", kicker: "Feel every beat", title: "Audio with real presence.", copy: "Personal listening and party-ready sound, selected for everyday life.", image: "/images/hero/story-headphones.webp", href: "/category/audio", Icon: Headphones, tone: "bg-[#ff4f91]" },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !stageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".story-card");
      const dots = gsap.utils.toArray<HTMLElement>(".story-dot");
      const words = gsap.utils.toArray<HTMLElement>(".story-word");
      const visuals = gsap.utils.toArray<HTMLElement>(".story-visual");
      gsap.from(words, { yPercent: 115, rotate: 4, opacity: 0, stagger: .08, duration: .8, ease: "power4.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      gsap.to(visuals, { y: -14, rotate: 2, duration: 2.4, stagger: .25, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.set(cards.slice(1), { yPercent: 110, rotate: 3, opacity: 0 });
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=200%", pin: stageRef.current, scrub: .75, anticipatePin: 1 },
        });
        cards.slice(1).forEach((card, index) => {
          timeline.to(cards[index], { yPercent: -20, scale: .93, rotate: -2, opacity: 0, duration: .65, ease: "power2.inOut" }, index)
            .to(card, { yPercent: 0, rotate: 0, opacity: 1, duration: .8, ease: "power3.out" }, index)
            .to(dots, { scale: 1, opacity: .35, duration: .1 }, index)
            .to(dots[index + 1], { scale: 1.5, opacity: 1, duration: .15 }, index);
        });
      });
      mm.add("(max-width: 767px)", () => {
        cards.forEach((card) => gsap.from(card, { y: 48, opacity: 0, duration: .65, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 86%" } }));
      });
      return () => mm.revert();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#ffd91a] text-slate-950 md:min-h-[300vh]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
      <div ref={stageRef} className="relative min-h-screen px-4 py-16 sm:px-7 md:flex md:items-center md:py-20">
        <div className="mx-auto grid w-full max-w-[1384px] gap-10 md:grid-cols-[.78fr_1.22fr] md:items-center lg:gap-16">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] shadow-[4px_4px_0_#0f172a]"><Sparkles className="h-4 w-4" /> Scroll to discover</span>
            <h2 className="mt-8 max-w-xl text-[clamp(3rem,7vw,6.8rem)] font-black leading-[.83] tracking-[-.07em]">
              {"SMART CHOICES MOVE DIFFERENT".split(" ").map((word) => <span key={word} className="mr-[.16em] inline-block overflow-hidden pb-[.08em]"><span className="story-word inline-block">{word}</span></span>)}
            </h2>
            <p className="mt-6 max-w-md text-sm font-bold leading-6 sm:text-base">Four ways TONDEL makes modern tech simpler—from the first look to the final WhatsApp confirmation.</p>
            <div className="mt-8 hidden items-center gap-3 md:flex">{stories.map((story, index) => <span key={story.number} className={`story-dot h-2.5 w-2.5 rounded-full bg-slate-950 ${index === 0 ? "scale-150" : "opacity-35"}`} />)}</div>
          </div>

          <div className="scrollbar-none relative -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 md:mx-0 md:block md:h-[610px] md:overflow-visible md:px-0 md:pb-0">
            {stories.map(({ number, kicker, title, copy, image, href, Icon, tone }, index) => (
              <article key={number} className={`story-card relative min-h-[520px] w-[88vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border-[3px] border-slate-950 ${tone} p-5 text-white shadow-[10px_10px_0_#0f172a] md:absolute md:inset-0 md:min-h-0 md:w-auto md:p-8`} style={{ zIndex: index + 1 }}>
                <div className="relative z-10 flex items-start justify-between"><span className="text-xs font-black tracking-[.2em]">{number} / 03</span><span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur"><Icon className="h-6 w-6" /></span></div>
                <div className="relative z-10 mt-28 max-w-[60%] md:mt-44"><p className="text-[10px] font-black uppercase tracking-[.2em] text-white/70">{kicker}</p><h3 className="mt-3 text-3xl font-black leading-[.95] tracking-[-.04em] sm:text-5xl">{title}</h3><p className="mt-4 text-xs font-semibold leading-5 text-white/80 sm:text-sm">{copy}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-black uppercase text-slate-950 transition hover:-translate-y-1 hover:shadow-lg">Explore <ArrowUpRight className="h-4 w-4" /></Link></div>
                <div className="story-visual absolute -bottom-8 -right-16 h-[76%] w-[66%] rounded-[2rem] bg-white/95 shadow-2xl md:-right-10"><Image src={image} alt={title} fill className="object-contain p-5" sizes="(max-width:768px) 60vw, 42vw" /></div>
                <span className="absolute -left-10 top-24 h-36 w-36 rounded-full border-[28px] border-white/10" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
