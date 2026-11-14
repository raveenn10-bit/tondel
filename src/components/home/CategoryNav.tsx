import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryNav() {
  return (
    <section className="bg-white px-4 py-7 sm:px-7">
      <div className="mx-auto max-w-[1384px]">
        <div className="mb-5 flex items-end justify-between"><div><p className="text-[11px] font-black uppercase tracking-[.16em] text-blue-700">Browse faster</p><h2 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">Shop by category</h2></div><Link href="/shop" className="text-xs font-extrabold uppercase text-blue-700">View all</Link></div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category, index) => <Link style={{ animationDelay: `${index * 70}ms` }} key={category.id} href={category.slug === "offers" ? "/offers" : `/category/${category.slug}`} className="category-pop group w-24 shrink-0 text-center sm:w-auto"><div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-50 transition duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-lg"><Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="96px" /></div><span className="mt-2 block text-[11px] font-bold leading-4 text-slate-700 group-hover:text-blue-700">{category.name}</span></Link>)}
        </div>
      </div>
    </section>
  );
}
