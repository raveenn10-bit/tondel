import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogueDepartments, catalogueSeriesCount } from "@/data/catalogue";

export function FullCataloguePreview() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-8 sm:px-7 sm:py-12">
      <div className="mx-auto max-w-[1384px]">
        <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-700">Complete product catalogue</p><h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">12 specialist departments</h2><p className="mt-2 text-xs text-slate-500">{catalogueSeriesCount}+ product series from leading global brands.</p></div><Link href="/catalogue" className="hidden items-center gap-2 text-xs font-black uppercase text-blue-700 sm:flex">Explore all <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {catalogueDepartments.map((department) => (
            <Link key={department.slug} href={`/catalogue#${department.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-blue-50"><Image src={department.image} alt="" fill className="object-contain p-3 transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw" /></div>
              <div className="min-h-16 border-t border-slate-100 p-3"><span className="text-[9px] font-black text-blue-700">{department.number}</span><h3 className="mt-0.5 text-[11px] font-extrabold leading-4 text-slate-900">{department.title}</h3></div>
            </Link>
          ))}
        </div>
        <Link href="/catalogue" className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-xs font-black uppercase text-white shadow-lg sm:hidden">View full catalogue <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
