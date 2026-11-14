import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { CategoryNav } from "@/components/home/CategoryNav";
import { ProductSection } from "@/components/home/ProductSection";
import { BusinessBenefits } from "@/components/home/BusinessBenefits";
import { WhatsAppSupportBanner } from "@/components/home/WhatsAppSupportBanner";
import { CampaignBanners, PaymentOptions } from "@/components/home/CampaignBanners";
import { ScrollStory } from "@/components/home/ScrollStory";
import { getFeaturedProducts, getNewArrivals, getProductsByCategory, getSpecialOffers } from "@/data/products";

export default function HomePage() {
  const phones = getProductsByCategory("smartphones");
  const wearables = getProductsByCategory("smart-watches");
  const audio = [...getProductsByCategory("audio"), ...getProductsByCategory("speakers"), ...getProductsByCategory("chargers-cables")];
  const appliances = getProductsByCategory("home-appliances");
  const laptops = getProductsByCategory("laptops");
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <HeroSection />
      <PaymentOptions />
      <CategoryNav />
      <ProductSection title="Featured deals" subtitle="Popular tech selected for value, performance and everyday use." viewAllLink="/shop" products={getFeaturedProducts()} />
      <ScrollStory />
      <section className="bg-[#f5f7fb] px-4 py-3 sm:px-7">
        <div className="mx-auto grid max-w-[1384px] gap-4 md:grid-cols-2">
          <Link href="/category/home-appliances" className="group relative min-h-48 overflow-hidden rounded-2xl bg-blue-800 p-7 text-white shadow-lg">
            <div className="relative z-10 max-w-[55%]"><span className="text-[10px] font-black uppercase tracking-[.18em] text-blue-200">Home upgrade</span><h3 className="mt-2 text-2xl font-black">Smarter appliances for modern living</h3><span className="mt-5 inline-block text-xs font-extrabold uppercase">Shop appliances →</span></div>
            <Image src="/images/products/midea-digital-air-fryer.webp" alt="Modern home appliances" fill className="object-cover object-right opacity-55 transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
          </Link>
          <Link href="/category/smartphones" className="group relative min-h-48 overflow-hidden rounded-2xl bg-slate-950 p-7 text-white shadow-lg">
            <div className="relative z-10 max-w-[58%]"><span className="text-[10px] font-black uppercase tracking-[.18em] text-cyan-300">Mobile collection</span><h3 className="mt-2 text-2xl font-black">Flagship power in your pocket</h3><span className="mt-5 inline-block text-xs font-extrabold uppercase">Explore phones →</span></div>
            <Image src="/images/products/iphone-17-pro.webp" alt="Smartphone collection" fill className="object-cover object-right opacity-55 transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
          </Link>
        </div>
      </section>
      <ProductSection title="New arrivals" subtitle="Fresh devices and new-generation accessories now in the catalogue." viewAllLink="/shop" products={getNewArrivals()} />
      <CampaignBanners />
      <ProductSection title="Laptops" subtitle="Mac and Windows notebooks for work, study, creativity and gaming." viewAllLink="/category/laptops" products={laptops} />
      <ProductSection title="Smartphones" subtitle="Apple, Xiaomi and Infinix models with direct product support." viewAllLink="/category/smartphones" products={phones} />
      <ProductSection title="Watches & wearables" subtitle="Connected health, activity and daily convenience." viewAllLink="/category/smart-watches" products={wearables} />
      <ProductSection title="Audio & power essentials" subtitle="Headphones, speakers, fast chargers and durable cables." viewAllLink="/category/audio" products={audio} />
      <ProductSection title="Home appliances" subtitle="Practical everyday appliances for a smarter home." viewAllLink="/category/home-appliances" products={appliances} />
      <ProductSection title="Special offers" subtitle="Limited-time value offers and selected price reductions." viewAllLink="/offers" products={getSpecialOffers()} />
      <BusinessBenefits />
      <WhatsAppSupportBanner />
    </div>
  );
}
