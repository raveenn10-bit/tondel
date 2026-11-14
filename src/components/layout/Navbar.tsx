"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const links = [
  ["Brands", "/shop"], ["Today's Offers", "/offers"], ["Smartphones", "/category/smartphones"],
  ["Smart Watches", "/category/smart-watches"], ["Audio", "/category/audio"], ["Home Appliances", "/category/home-appliances"],
];

export function Navbar() {
  const router = useRouter();
  const { totalCount, setIsCartDrawerOpen } = useCart();
  const { totalCount: wishlistCount } = useWishlist();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_14px_rgba(15,23,42,.08)]">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center gap-4 px-4 sm:px-7">
        <Link href="/" className="relative h-11 w-36 shrink-0 sm:w-44"><Image src="/images/logo-horizontal.png" alt="TONDEL" fill priority className="object-contain object-left" /></Link>
        <form onSubmit={submit} className="relative hidden flex-1 md:block">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for products, categories and more" className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 pl-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100" />
          <button aria-label="Search" className="absolute right-0 top-0 grid h-11 w-12 place-items-center rounded-r-lg bg-blue-700 text-white hover:bg-blue-800"><Search className="h-5 w-5" /></button>
        </form>
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Link href="/wishlist" className="relative grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100" aria-label="Wishlist"><Heart className="h-5 w-5" />{wishlistCount > 0 && <b className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-rose-600 px-1 text-[9px] text-white">{wishlistCount}</b>}</Link>
          <button onClick={() => setIsCartDrawerOpen(true)} className="relative flex h-10 items-center gap-2 rounded-lg px-2 text-sm font-bold text-slate-800 hover:bg-slate-100"><ShoppingCart className="h-5 w-5" /><span className="hidden sm:inline">Cart</span>{totalCount > 0 && <b className="grid h-5 min-w-5 place-items-center rounded-full bg-blue-700 px-1 text-[10px] text-white">{totalCount}</b>}</button>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg text-slate-800 lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className="border-t border-blue-800 bg-blue-800 text-white">
        <div className="mx-auto hidden h-11 max-w-[1440px] items-center px-7 lg:flex">
          <Link href="/shop" className="mr-8 flex h-full items-center gap-2 border-r border-white/20 pr-8 text-sm font-extrabold"><Menu className="h-4 w-4" /> All Categories <ChevronDown className="h-4 w-4" /></Link>
          <nav className="flex items-center gap-7">{links.map(([label, href]) => <Link key={label} href={href} className="text-[13px] font-semibold text-blue-50 hover:text-white">{label}</Link>)}</nav>
        </div>
      </div>
      {open && <div className="border-t bg-white px-4 pb-5 lg:hidden"><form onSubmit={submit} className="relative my-4"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="h-11 w-full rounded-lg border border-slate-300 pl-4 pr-11 text-sm text-slate-900" /><button className="absolute right-0 top-0 grid h-11 w-11 place-items-center text-blue-700"><Search className="h-5 w-5" /></button></form><nav className="grid gap-1">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={href} className="rounded-lg px-3 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100">{label}</Link>)}</nav></div>}
    </header>
  );
}
