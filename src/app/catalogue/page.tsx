"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Search, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { catalogueDepartments, catalogueSeriesCount } from "@/data/catalogue";
import { siteConfig } from "@/data/site-config";

export default function CataloguePage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const departments = useMemo(() => {
    if (!normalizedQuery) return catalogueDepartments;
    return catalogueDepartments.filter((department) =>
      [
        department.title,
        department.summary,
        ...department.brands,
        ...department.groups.flatMap((group) => [group.name, ...group.items]),
      ].some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [normalizedQuery]);

  const whatsappLink = (department: string) =>
    `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello TONDEL! I would like availability and pricing for products in ${department}.`)}`;

  return (
    <main className="min-h-screen bg-[#f4f6fb] pb-28 md:pb-16">
      <section className="relative overflow-hidden bg-[#0b1735] px-4 py-14 text-white sm:px-7 lg:py-20">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_18%_10%,rgba(37,99,235,.42),transparent_34%),radial-gradient(circle_at_86%_80%,rgba(124,58,237,.28),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1384px]">
          <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/15 px-3 py-1 text-[10px] font-black uppercase tracking-[.2em] text-blue-100">China to Sri Lanka · Bulk Wholesale</span>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-6xl">China to Sri Lanka wholesale technology supply.</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">TONDEL handles large-volume wholesale orders, reseller supply and project quotations across {catalogueDepartments.length} departments and {catalogueSeriesCount}+ product series. Contact us for bulk pricing, sourcing and delivery details.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-extrabold uppercase tracking-wider text-blue-100"><span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Bulk orders</span><span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Reseller supply</span><span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Project quotations</span><span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">China sourcing</span></div>
          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search iPhone, MacBook, CCTV, printer, DJI, POS..." className="h-14 w-full rounded-2xl border border-white/15 bg-white px-12 pr-12 text-sm font-semibold text-slate-950 outline-none ring-blue-400 transition focus:ring-4" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"><X className="h-5 w-5" /></button>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1384px] px-4 py-10 sm:px-7">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div><p className="text-[10px] font-black uppercase tracking-[.18em] text-blue-700">TONDEL Departments</p><h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">{departments.length} departments found</h2></div>
          <p className="hidden text-xs text-slate-500 sm:block">Tap a department to view every series</p>
        </div>

        {departments.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <article id={department.slug} key={department.slug} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,.07)]">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100">
                  <span className="absolute left-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#123fa8] text-xs font-black text-white shadow-lg">{department.number}</span>
                  <Image src={department.image} alt={`${department.title} product range`} fill className="object-contain p-5 transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-black text-slate-950">{department.title}</h2>
                  <p className="mt-2 min-h-12 text-xs leading-6 text-slate-600">{department.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{department.brands.slice(0, 7).map((brand) => <span key={brand} className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-extrabold text-slate-600">{brand}</span>)}</div>

                  <details className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 open:bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-xs font-extrabold text-blue-800">View all product series <ArrowRight className="h-4 w-4" /></summary>
                    <div className="space-y-5 border-t border-slate-200 px-4 py-4">
                      {department.groups.map((group) => (
                        <div key={group.name}><h3 className="text-xs font-black text-slate-900">{group.name}</h3><ul className="mt-2 grid gap-2">{group.items.map((item) => <li key={item} className="flex items-start gap-2 text-[11px] leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />{item}</li>)}</ul></div>
                      ))}
                    </div>
                  </details>

                  <a href={whatsappLink(department.title)} target="_blank" rel="noreferrer" className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"><WhatsAppIcon className="h-5 w-5" /> Check price &amp; availability</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center"><Search className="mx-auto h-9 w-9 text-slate-300" /><h2 className="mt-4 text-lg font-black text-slate-900">No matching department</h2><p className="mt-2 text-sm text-slate-500">Try another brand, series or product type.</p></div>
        )}
      </section>
    </main>
  );
}
