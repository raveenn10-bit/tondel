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
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const newArrivals = getNewArrivals().slice(0, 6);
  const trendingSmartphones = getProductsByCategory("smartphones").slice(0, 4);
  const wearables = getProductsByCategory("smart-watches").slice(0, 4);
  const audioGear = [
    ...getProductsByCategory("audio"),
    ...getProductsByCategory("speakers"),
    ...getProductsByCategory("chargers-cables"),
  ].slice(0, 4);
  const homeAppliances = getProductsByCategory("home-appliances").slice(0, 4);
  const specialOffers = getSpecialOffers().slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Canva-based Animated Hero */}
      <HeroSection />

      {/* 4. Category Navigation Bar */}
      <CategoryNav />

      {/* 5. Canva-based Bento Product Grid */}
      <BentoGrid />

      {/* 6. Primary Section 1: Featured Products (Mobile + Desktop Horizontal Carousel) */}
      <ProductSection
        title="Featured Tech Collection"
        subtitle="Handpicked high-performance devices, flagship models, and authentic accessories."
        badge="FLAGSHIP SELECTION"
        viewAllLink="/shop"
        products={featuredProducts}
        theme="dark"
      />

      {/* 7. Primary Section 2: New Arrivals 2026 (Mobile + Desktop Horizontal Carousel) */}
      <ProductSection
        title="New Arrivals 2026"
        subtitle="The latest gadgets and newly listed models ready for doorstep dispatch."
        badge="FRESH RESTOCKS"
        viewAllLink="/shop"
        products={newArrivals}
        theme="dark"
      />

      {/* Secondary Category Section: Trending Smartphones (Extended on Tablet/Desktop) */}
      <ProductSection
        title="Trending Smartphones"
        subtitle="Explore genuine Apple, Redmi, Infinix and flagship smartphones with verified seller warranty."
        badge="TOP MOBILE TECH"
        viewAllLink="/category/smartphones"
        products={trendingSmartphones}
        theme="dark"
        className="hidden md:block"
      />

      {/* 9. Shop by Brand */}
      <BrandGrid />

      {/* Secondary Category Section: Smart Watches & Wearables (Extended on Tablet/Desktop) */}
      <ProductSection
        title="Smart Watches & Wearables"
        subtitle="Next-gen AMOLED health trackers, luxury smart bands, and stainless steel watches."
        badge="BIOMETRIC PRECISION"
        viewAllLink="/category/smart-watches"
        products={wearables}
        theme="dark"
        className="hidden md:block"
      />

      {/* Secondary Category Section: Audio and Accessories (Extended on Tablet/Desktop) */}
      <ProductSection
        title="Audio & Fast Charging Gear"
        subtitle="Spatial noise-cancelling headphones, high-bass speakers, and GaN fast chargers."
        badge="SOUND & POWER"
        viewAllLink="/category/audio"
        products={audioGear}
        theme="dark"
        className="hidden md:block"
      />

      {/* Secondary Category Section: Home Appliances (Extended on Tablet/Desktop) */}
      <ProductSection
        title="Modern Home Appliances"
        subtitle="Genuine Midea digital rice cookers, oil-free air fryers, electric kettles, and blenders."
        badge="MIDEA LIVING"
        viewAllLink="/category/home-appliances"
        products={homeAppliances}
        theme="dark"
        className="hidden md:block"
      />

      {/* 8. Primary Section 3: Special Offers & Value Bundles (Mobile + Desktop Horizontal Carousel) */}
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
