import { BadgeCheck } from "lucide-react";
import { catalogueDepartments } from "@/data/catalogue";

const brandNames = Array.from(new Set(catalogueDepartments.flatMap((department) => department.brands)));

// Official website domains are used to load each brand's original coloured icon.
// Keeping this mapping explicit prevents guessed or AI-generated brand marks.
const brandDomains: Record<string, string> = {
  Apple: "apple.com", Samsung: "samsung.com", Xiaomi: "xiaomi.com", Redmi: "mi.com", POCO: "po.co",
  vivo: "vivo.com", OPPO: "oppo.com", OnePlus: "oneplus.com", HONOR: "honor.com", Huawei: "huawei.com",
  realme: "realme.com", Infinix: "infinixmobility.com", TECNO: "tecno-mobile.com", ASUS: "asus.com",
  HP: "hp.com", Dell: "dell.com", Lenovo: "lenovo.com", Acer: "acer.com", MSI: "msi.com",
  Amazfit: "amazfit.com", Epson: "epson.com", Canon: "canon.com", Brother: "brother.com",
  Pantum: "global.pantum.com", Fujifilm: "fujifilm.com", Kyocera: "kyocera.com", Ricoh: "ricoh.com",
  Xerox: "xerox.com", "Konica Minolta": "konicaminolta.com", Toshiba: "global.toshiba", "G&G": "ggimage.com",
  Hikvision: "hikvision.com", Dahua: "dahuasecurity.com", Uniview: "global.uniview.com", Tiandy: "tiandy.com",
  EZVIZ: "ezviz.com", IMOU: "imoulife.com", Reolink: "reolink.com", "TP-Link Tapo": "tapo.com",
  DJI: "dji.com", Insta360: "insta360.com", GoPro: "gopro.com", Intel: "intel.com", AMD: "amd.com",
  NVIDIA: "nvidia.com", Gigabyte: "gigabyte.com", Kingston: "kingston.com", Crucial: "crucial.com",
  UGREEN: "ugreen.com", Baseus: "baseus.com", Anker: "anker.com", Orico: "orico.cc", "TP-Link": "tp-link.com",
  Ruijie: "ruijienetworks.com", ZTE: "zte.com.cn", Tenda: "tendacn.com", Mercusys: "mercusys.com",
  Ubiquiti: "ui.com", JBL: "jbl.com", Edifier: "edifier.com", Soundcore: "soundcore.com", Aqara: "aqara.com",
  Roborock: "global.roborock.com", Dreame: "global.dreametech.com", "DJI Power": "dji.com", Zebra: "zebra.com",
  Honeywell: "honeywell.com", Sunmi: "sunmi.com",
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
  const domain = brandDomains[name];
  return (
    <div className="flex h-[86px] w-[190px] shrink-0 items-center gap-4 rounded-[22px] border border-[#dce5fb] bg-white px-[18px] shadow-[0_8px_22px_rgba(37,99,235,.045)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_12px_28px_rgba(37,99,235,.10)]">
      <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-[16px] border border-slate-100 bg-[#f8faff] p-2 shadow-[0_4px_12px_rgba(15,23,42,.04)]">
        <img
          src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
          alt={`${name} official logo`}
          width="44"
          height="44"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="min-w-0 text-[13px] font-black leading-4" style={{ color: colour }}>{name}</span>
    </div>
  );
}

function BrandRow({ names }: { names: string[] }) {
  const doubled = [...names, ...names];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="brand-marquee-track flex w-max gap-3 py-1">
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
        <BrandRow names={brandNames} />
      </div>
    </section>
  );
}
