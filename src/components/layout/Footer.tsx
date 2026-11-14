import Image from "next/image";
import Link from "next/link";
import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const columns = [
  { title: "Shop", links: [["Smartphones", "/category/smartphones"], ["Smart Watches", "/category/smart-watches"], ["Audio & Speakers", "/category/audio"], ["Chargers & Cables", "/category/chargers-cables"], ["Home Appliances", "/category/home-appliances"], ["Special Offers", "/offers"]] },
  { title: "Customer Care", links: [["Contact Us", "/contact"], ["Frequently Asked Questions", "/faq"], ["Shipping & Delivery", "/shipping"], ["Returns & Warranty", "/returns"], ["Track via WhatsApp", `https://wa.me/${siteConfig.whatsappNumber}`]] },
  { title: "About", links: [["About TONDEL", "/about"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Wishlist", "/wishlist"], ["My Cart", "/cart"]] },
];

export function Footer() {
  const services = [
    [MessageCircle, "Customer support", "Fast WhatsApp assistance"],
    [Truck, "Island-wide delivery", "Safe doorstep dispatch"],
    [Clock3, "Quick response", "Daily sales support"],
    [ShieldCheck, "Genuine products", "Verified product sourcing"],
    [Wrench, "After-sales help", "Warranty guidance"],
  ] as const;
  return (
    <footer className="mt-auto">
      <div className="border-y border-slate-200 bg-white px-4 py-6 sm:px-7">
        <div className="mx-auto grid max-w-[1384px] grid-cols-2 gap-4 md:grid-cols-5">
          {services.map(([Icon, title, text]) => <div key={title} className="flex items-center gap-3 md:border-r md:border-slate-200 md:pr-4 md:last:border-0"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></div><div><h3 className="text-xs font-extrabold text-slate-900">{title}</h3><p className="mt-0.5 text-[10px] leading-4 text-slate-500">{text}</p></div></div>)}
        </div>
      </div>
      <div className="bg-[#071a3a] px-4 py-12 text-slate-300 sm:px-7">
        <div className="mx-auto grid max-w-[1384px] gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,.75fr)]">
          <div>
            <div className="relative h-12 w-44 rounded-md bg-white p-2"><Image src="/images/logo-horizontal.png" alt="TONDEL" fill className="object-contain p-2" /></div>
            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-400">{siteConfig.bio}</p>
            <div className="mt-5 space-y-3 text-xs"><p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-blue-300" />{siteConfig.address}, {siteConfig.postalCode}</p><a href={`mailto:${siteConfig.email}`} className="flex gap-2 hover:text-white"><Mail className="h-4 w-4 shrink-0 text-blue-300" />{siteConfig.email}</a><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="flex gap-2 font-bold text-emerald-300 hover:text-emerald-200"><MessageCircle className="h-4 w-4 shrink-0" />{siteConfig.displayPhone} / {siteConfig.secondaryPhone}</a></div>
            <div className="mt-6 flex gap-2"><a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-blue-600"><Facebook className="h-4 w-4" /></a><a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-pink-600"><Instagram className="h-4 w-4" /></a></div>
          </div>
          {columns.map((column) => <div key={column.title}><h3 className="mb-5 text-sm font-extrabold text-white">{column.title}</h3><ul className="space-y-3">{column.links.map(([label, href]) => <li key={label}><Link href={href} className="text-xs text-slate-400 transition hover:translate-x-1 hover:text-white inline-block">{label}</Link></li>)}</ul></div>)}
        </div>
        <div className="mx-auto mt-10 flex max-w-[1384px] flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TONDEL. All rights reserved.</p><p>Smart Choices, Smarter Living · Galle, Sri Lanka</p></div>
      </div>
    </footer>
  );
}
