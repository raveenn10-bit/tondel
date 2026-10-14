import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { CategoryNav } from "@/components/home/CategoryNav";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { ProductSection } from "@/components/home/ProductSection";
import { BrandGrid } from "@/components/home/BrandGrid";
import { BusinessBenefits } from "@/components/home/BusinessBenefits";
import { FAQSection } from "@/components/home/FAQSection";
import { WhatsAppSupportBanner } from "@/components/home/WhatsAppSupportBanner";
import { 
  getFeaturedProducts, 
  getNewArrivals, 
  getProductsByCategory, 
  getSpecialOffers 
} from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const newArrivals = getNewArrivals().slice(0, 4);
  const trendingSmartphones = getProductsByCategory("smartphones").slice(0, 4);
  const wearables = getProductsByCategory("smart-watches").slice(0, 4);
  const audioGear = [
    ...getProductsByCategory("audio"),
    ...getProductsByCategory("speakers"),
    ...getProductsByCategory("chargers-cables"),
  ].slice(0, 4);
  const homeAppliances = getProductsByCategory("home-appliances").slice(0, 4);
  const specialOffers = getSpecialOffers().slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Canva-based Animated Hero */}
      <HeroSection />

      {/* 4. Category Navigation Bar */}
      <CategoryNav />

      {/* 5. Canva-based Bento Product Grid */}
      <BentoGrid />

      {/* 6. Featured Products */}
      <ProductSection
        title="Featured Tech Collection"
        subtitle="Handpicked high-performance devices, flagship models, and authentic accessories."
        badge="FLAGSHIP SELECTION"
        viewAllLink="/shop"
        products={featuredProducts}
        theme="dark"
      />

      {/* 7. New Arrivals */}
      <ProductSection
        title="New Arrivals 2026"
        subtitle="The latest gadgets and newly listed models ready for doorstep dispatch."
        badge="FRESH RESTOCKS"
        viewAllLink="/shop"
        products={newArrivals}
        theme="dark"
      />

      {/* 8. Trending Smartphones */}
      <ProductSection
        title="Trending Smartphones"
        subtitle="Explore genuine Apple, Redmi, Infinix and flagship smartphones with verified seller warranty."
        badge="TOP MOBILE TECH"
        viewAllLink="/category/smartphones"
        products={trendingSmartphones}
        theme="dark"
      />

      {/* 9. Shop by Brand */}
      <BrandGrid />

      {/* 10. Smart Watches and Wearables */}
      <ProductSection
        title="Smart Watches & Wearables"
        subtitle="Next-gen AMOLED health trackers, luxury smart bands, and stainless steel watches."
        badge="BIOMETRIC PRECISION"
        viewAllLink="/category/smart-watches"
        products={wearables}
        theme="dark"
      />

      {/* 11. Audio and Accessories */}
      <ProductSection
        title="Audio & Fast Charging Gear"
        subtitle="Spatial noise-cancelling headphones, high-bass speakers, and GaN fast chargers."
        badge="SOUND & POWER"
        viewAllLink="/category/audio"
        products={audioGear}
        theme="dark"
      />

      {/* 12. Home Appliances */}
      <ProductSection
        title="Modern Home Appliances"
        subtitle="Genuine Midea digital rice cookers, oil-free air fryers, electric kettles, and blenders."
        badge="MIDEA LIVING"
        viewAllLink="/category/home-appliances"
        products={homeAppliances}
        theme="dark"
      />

      {/* 13. Special Offers */}
      <ProductSection
        title="Exclusive Offers & Value Bundles"
        subtitle="Limited-time price reductions on verified stock with island-wide shipping."
        badge="HOT DISCOUNTS"
        viewAllLink="/offers"
        products={specialOffers}
        theme="dark"
      />

      {/* 14. Verified Business Benefits */}
      <BusinessBenefits />

      {/* 15. FAQ */}
      <FAQSection />

      {/* 16. WhatsApp Support CTA */}
      <WhatsAppSupportBanner />
    </div>
  );
}
