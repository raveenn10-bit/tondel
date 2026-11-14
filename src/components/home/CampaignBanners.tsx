import Image from "next/image";
import Link from "next/link";
import { Banknote, Landmark, MessageCircle, ShieldCheck, Truck } from "lucide-react";

const campaigns = [
  { image: "/images/banners/tondel-mobile-campaign.webp", eyebrow: "Mobile & Wearables", title: "Smart tech for every day", copy: "Explore phones, watches and connected essentials.", href: "/category/smartphones", cta: "Shop mobile" },
  { image: "/images/banners/tondel-audio-campaign.webp", eyebrow: "Immersive Audio", title: "Sound that moves you", copy: "Headphones and speakers for work, travel and play.", href: "/category/audio", cta: "Explore audio" },
  { image: "/images/banners/tondel-appliance-campaign.webp", eyebrow: "Smart Living", title: "Upgrade your everyday", copy: "Modern appliances made for easier living.", href: "/category/home-appliances", cta: "Shop appliances" },
];

export function PaymentOptions() {
  const options = [
    [Banknote, "Cash on delivery", "Available on confirmed orders"],
    [Landmark, "Bank transfer", "Secure payment confirmation"],
    [MessageCircle, "WhatsApp order", "Direct product assistance"],
    [Truck, "Island-wide delivery", "Fast and carefully packed"],
    [ShieldCheck, "Genuine products", "Invoice and warranty guidance"],
  ] as const;
  return <section className="bg-white px-4 py-6 sm:px-7"><div className="mx-auto max-w-[1384px]"><p className="mb-4 text-center text-[11px] font-black uppercase tracking-[.18em] text-slate-500">Easy & trusted shopping with TONDEL</p><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{options.map(([Icon,title,text]) => <div key={title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-800"><Icon className="h-5 w-5" /></span><span><b className="block text-[11px] text-slate-900">{title}</b><small className="mt-0.5 block text-[9px] leading-3 text-slate-500">{text}</small></span></div>)}</div></div></section>;
}

export function CampaignBanners() {
  return <section className="bg-[#f5f7fb] px-4 py-7 sm:px-7"><div className="mx-auto max-w-[1384px]"><div className="mb-5 flex items-end justify-between"><div><p className="text-[11px] font-black uppercase tracking-[.16em] text-violet-700">Discover TONDEL</p><h2 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">Featured collections</h2></div><Link href="/shop" className="text-xs font-extrabold uppercase text-violet-700">View all</Link></div><div className="grid gap-4 lg:grid-cols-3">{campaigns.map((item) => <Link key={item.title} href={item.href} className="group relative min-h-[240px] overflow-hidden rounded-2xl bg-slate-950 shadow-lg"><Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" /><div className="relative z-10 flex min-h-[240px] max-w-[62%] flex-col justify-center p-6 text-white"><span className="text-[9px] font-black uppercase tracking-[.2em] text-orange-300">{item.eyebrow}</span><h3 className="mt-2 text-2xl font-black leading-tight">{item.title}</h3><p className="mt-2 text-[11px] leading-5 text-slate-300">{item.copy}</p><span className="mt-5 w-fit rounded-full bg-orange-500 px-4 py-2 text-[10px] font-black uppercase transition group-hover:bg-orange-400">{item.cta} →</span></div></Link>)}</div></div></section>;
}
