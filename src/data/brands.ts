import { Brand } from "@/types";

export const brands: Brand[] = [
  {
    id: "brand-apple",
    slug: "apple",
    name: "Apple",
    logo: "/images/brands/apple.svg",
    description: "Pioneering premium smartphones, wearables, and audio technology engineered with precision.",
    featured: true,
  },
  {
    id: "brand-xiaomi-redmi",
    slug: "xiaomi-redmi",
    name: "Xiaomi / Redmi",
    logo: "/images/brands/xiaomi-redmi.svg",
    description: "Industry-leading price-to-performance smartphones, smart bands, and IoT home ecosystem products.",
    featured: true,
  },
  {
    id: "brand-infinix",
    slug: "infinix",
    name: "Infinix",
    logo: "/images/brands/infinix.svg",
    description: "Forward-thinking mobile designs, gaming smartphones, and trendsetting performance.",
    featured: true,
  },
  {
    id: "brand-samsung",
    slug: "samsung",
    name: "Samsung",
    logo: "/images/brands/samsung.svg",
    description: "Global standard in AMOLED display innovation, flagship mobile photography, and smart tech.",
    featured: true,
  },
  {
    id: "brand-midea",
    slug: "midea",
    name: "Midea",
    logo: "/images/brands/midea.svg",
    description: "World-renowned manufacturer of reliable, energy-efficient smart kitchen and living home appliances.",
    featured: true,
  },
  {
    id: "brand-sony",
    slug: "sony",
    name: "Sony",
    logo: "/images/brands/sony.svg",
    description: "Unrivaled Japanese acoustics, deep punchy party speakers, and studio-grade audio technology.",
    featured: true,
  },
  {
    id: "brand-anker",
    slug: "anker",
    name: "Anker",
    logo: "/images/brands/anker.svg",
    description: "The global leader in high-speed GaN fast charging, durable power banks, and portable energy.",
    featured: true,
  },
  {
    id: "brand-baseus",
    slug: "baseus",
    name: "Baseus",
    logo: "/images/brands/baseus.svg",
    description: "Practical aesthetic mobile accessories, braided high-wattage charging cables, and gadgets.",
    featured: true,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}
