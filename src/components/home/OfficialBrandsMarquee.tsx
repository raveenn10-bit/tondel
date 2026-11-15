import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { catalogueDepartments } from "@/data/catalogue";

const brandNames = Array.from(new Set(catalogueDepartments.flatMap((department) => department.brands)));
const middle = Math.ceil(brandNames.length / 2);

const localLogos: Record<string, string> = {
  Apple: "/images/brands/apple.svg",
  Samsung: "/images/brands/samsung.svg",
  Xiaomi: "/images/brands/xiaomi-redmi.svg",
  Redmi: "/images/brands/xiaomi-redmi.svg",
  Infinix: "/images/brands/infinix.svg",
  Sony: "/images/brands/sony.svg",
  Anker: "/images/brands/anker.svg",
  Baseus: "/images/brands/baseus.svg",
};

const brandColours: Record<string, string> = {
  Apple: "#111111", Samsung: "#1428A0", Xiaomi: "#FF6900", Redmi: "#FF6900", POCO: "#FFD400",
  vivo: "#415FFF", OPPO: "#1D5632", OnePlus: "#F5010C", HONOR: "#00A9E0", Huawei: "#CF0A2C",
  realme: "#FFC915", Infinix: "#00D778", TECNO: "#0066CC", ASUS: "#00539B", HP: "#0096D6",
  Dell: "#0672CE", Lenovo: "#E2231A", Acer: "#83B81A", MSI: "#E60012", Epson: "#003399",
  Canon: "#CC0000", Brother: "#005CAB", Xerox: "#D71920", Hikvision: "#E60012", Dahua: "#D71920",
  EZVIZ: "#009FE3", IMOU: "#F58220", Reolink: "#0066FF", DJI: "#111111", Insta360: "#FFDE00",
  GoPro: "#00AEEF", Intel: "#0071C5", AMD: "#ED1C24", NVIDIA: "#76B900", Gigabyte: "#0075C9",
  Kingston: "#D71920", Crucial: "#0092D0", UGREEN: "#00B140", Anker: "#00A7E1",
  "TP-Link": "#4ACBD6", Ruijie: "#E60012", ZTE: "#00A0E9", Tenda: "#E60012", Mercusys: "#FF6A00",
  Ubiquiti: "#0559C9", JBL: "#FF3300", Edifier: "#E60012", Soundcore: "#00A8E8", Aqara: "#4A90E2",
  Roborock: "#E21C2A", Dreame: "#111111", Midea: "#00A3E0", Zebra: "#111111", Honeywell: "#D71920",
};

function BrandTile({ name }: { name: string }) {
  const colour = brandColours[name] ?? "#2449A4";
  const logo = localLogos[name];
  return (
    <div className="flex h-20 w-[154px] shrink-0 items-center justify-center rounded-2xl border bg-white px-4 shadow-[0_8px_24px_rgba(15,23,42,.06)]" style={{ borderColor: `${colour}33` }}>
      {logo ? (
        <Image src={logo} alt={`${name} official brand`} width={112} height={48} className="h-11 w-full object-contain" unoptimized />
      ) : (
        <div className="flex w-full items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[11px] font-black" style={{ backgroundColor: `${colour}16`, color: colour }}>{name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()}</span>
          <span className="text-[12px] font-black leading-4" style={{ color: colour }}>{name}</span>
        </div>
      )}
    </div>
  );
}

function BrandRow({ names, reverse = false }: { names: string[]; reverse?: boolean }) {
  const doubled = [...names, ...names];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className={`brand-marquee-track flex w-max gap-3 py-1 ${reverse ? "brand-marquee-reverse" : ""}`}>
        {doubled.map((name, index) => <BrandTile key={`${name}-${index}`} name={name} />)}
      </div>
    </div>
  );
}

export function OfficialBrandsMarquee() {
  return (
    <section id="brands" className="overflow-hidden border-y border-slate-200 bg-white px-4 py-10 sm:px-7 sm:py-14">
      <div className="mx-auto max-w-[1384px]">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-blue-700"><BadgeCheck className="h-3.5 w-3.5" /> Official Brands</span><h2 className="mt-3 text-2xl font-black tracking-[-.03em] text-slate-950 sm:text-3xl">Global brands. One trusted supplier.</h2><p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">Mobile, computing, security, imaging, networking, audio, smart-home and wholesale technology brands available through TONDEL.</p></div>
          <p className="text-xs font-extrabold text-blue-700">{brandNames.length} brands in the catalogue</p>
        </div>
        <div className="space-y-3"><BrandRow names={brandNames.slice(0, middle)} /><BrandRow names={brandNames.slice(middle)} reverse /></div>
      </div>
    </section>
  );
}
