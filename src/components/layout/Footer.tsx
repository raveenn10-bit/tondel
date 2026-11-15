import Image from "next/image";
import Link from "next/link";
import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const columns = [
  { title: "Shop", links: [["Full Catalogue", "/catalogue"], ["Smartphones", "/category/smartphones"], ["Smart Watches", "/category/smart-watches"], ["Audio & Speakers", "/category/audio"], ["Home Appliances", "/category/home-appliances"], ["Special Offers", "/offers"]] },
  { title: "Customer Care", links: [["Contact Us", "/contact"], ["Frequently Asked Questions", "/faq"], ["Shipping & Delivery", "/shipping"], ["Returns & Warranty", "/returns"], ["Track via WhatsApp", `https://wa.me/${siteConfig.whatsappNumber}`]] },
  { title: "About", links: [["About TONDEL", "/about"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Wishlist", "/wishlist"], ["My Cart", "/cart"]] },
];

const paymentMethods = [
  ["LankaPay", "/images/payment-icons/lankapay.png"],
  ["Visa", "/images/payment-icons/visa.png"],
  ["Mastercard", "/images/payment-icons/mastercard.png"],
  ["American Express", "/images/payment-icons/amex.png"],
  ["Discover", "/images/payment-icons/discover.png"],
  ["Diners Club", "/images/payment-icons/diners-club.png"],
  ["Genie", "/images/payment-icons/genie.png"],
  ["FriMi", "/images/payment-icons/frimi.png"],
  ["eZ Cash", "/images/payment-icons/ezcash.png"],
  ["mCash", "/images/payment-icons/mcash.png"],
  ["Bank QR payments", "/images/payment-icons/bank-qr.png"],
  ["Q+", "/images/payment-icons/q-plus.png"],
  ["iPay", "/images/payment-icons/ipay.png"],
] as const;

export function Footer() {
  const services = [
    [MessageCircle, "Customer support", "Fast WhatsApp assistance", "bg-emerald-50 text-emerald-600"],
    [Truck, "Island-wide delivery", "Safe doorstep dispatch", "bg-orange-50 text-orange-600"],
    [Clock3, "Quick response", "Daily sales support", "bg-cyan-50 text-cyan-600"],
    [ShieldCheck, "Genuine products", "Verified product sourcing", "bg-violet-50 text-violet-600"],
    [Wrench, "After-sales help", "Warranty guidance", "bg-amber-50 text-amber-600"],
  ] as const;
  return (
    <footer className="mt-auto">
      <div className="border-y border-slate-200 bg-white px-4 py-6 sm:px-7">
        <div className="mx-auto grid max-w-[1384px] grid-cols-2 gap-4 md:grid-cols-5">
          {services.map(([Icon, title, text, iconTone]) => <div key={title} className="flex items-center gap-3 md:border-r md:border-slate-200 md:pr-4 md:last:border-0"><div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${iconTone}`}><Icon className="h-5 w-5" /></div><div><h3 className="text-xs font-extrabold text-slate-900">{title}</h3><p className="mt-0.5 text-[10px] leading-4 text-slate-500">{text}</p></div></div>)}
        </div>
      </div>
      <div className="crimson-footer relative isolate overflow-hidden px-4 pb-28 pt-10 text-rose-100 sm:px-7 md:py-12">
        <div className="crimson-footer-shine pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1384px] gap-8 lg:grid-cols-[1.25fr_2.3fr] lg:gap-14">
          <div>
            <div className="relative h-14 w-52"><Image src="/images/logo-horizontal.png" alt="TONDEL" fill className="object-contain object-left" /></div>
            <p className="mt-5 max-w-sm text-xs leading-6 text-rose-100/75">{siteConfig.bio}</p>
            <div className="mt-5 space-y-3 text-xs"><p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-rose-300" />{siteConfig.address}, {siteConfig.postalCode}</p><a href={`mailto:${siteConfig.email}`} className="flex gap-2 hover:text-white"><Mail className="h-4 w-4 shrink-0 text-rose-300" />{siteConfig.email}</a><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="flex gap-2 font-bold text-emerald-300 hover:text-emerald-200"><MessageCircle className="h-4 w-4 shrink-0" />{siteConfig.displayPhone} / {siteConfig.secondaryPhone}</a></div>
            <div className="mt-6 flex gap-2"><a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg transition hover:-translate-y-0.5"><Facebook className="h-5 w-5" fill="currentColor" /></a><a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-lg transition hover:-translate-y-0.5"><Instagram className="h-5 w-5" /></a></div>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-8 border-t border-white/10 pt-7 sm:grid-cols-3 lg:border-0 lg:pt-1">
            {columns.map((column, index) => <div key={column.title} className={index === 2 ? "col-span-2 sm:col-span-1" : ""}><h3 className="mb-4 text-sm font-extrabold text-white">{column.title}</h3><ul className={index === 2 ? "grid grid-cols-2 gap-x-5 gap-y-3 sm:block sm:space-y-3" : "space-y-3"}>{column.links.map(([label, href]) => <li key={label}><Link href={href} className="inline-block text-xs leading-5 text-rose-100/75 transition hover:translate-x-1 hover:text-white">{label}</Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1384px] border-t border-white/10 pt-6">
          <h3 className="mb-4 text-xs font-black uppercase tracking-[.16em] text-rose-100/85">Payment &amp; ordering options</h3>
          <div className="rounded-2xl border border-white/10 bg-black/10 p-3 sm:p-4">
            <div role="region" aria-label="Card and digital payment methods" className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-7">
              {paymentMethods.map(([name, src]) => (
                <div key={name} className="flex min-h-16 items-center justify-center rounded-xl border border-white/10 bg-transparent px-2 py-2" title={name}>
                  <Image src={src} alt={`${name} payment`} width={180} height={90} className="h-11 w-full object-contain" sizes="(max-width: 640px) 28vw, 150px" />
                </div>
              ))}
            </div>
            <p className="mt-3 px-1 text-[11px] leading-5 text-rose-100/70 sm:text-xs">Card and digital wallet availability is confirmed with TONDEL before payment. Order via WhatsApp, bank transfer, or cash on delivery where available.</p>
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-rose-100/65 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TONDEL. All rights reserved.</p><p>Smart Choices, Smarter Living · Galle, Sri Lanka</p></div>
        </div>
      </div>
    </footer>
  );
}
