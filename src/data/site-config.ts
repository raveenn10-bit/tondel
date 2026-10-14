import { SiteConfig } from "@/types";

export interface ExtendedSiteConfig extends SiteConfig {
  secondaryPhone: string;
  instagram: string;
  postalCode: string;
  city: string;
  bio: string;
}

export const siteConfig: ExtendedSiteConfig = {
  brandName: "TONDEL",
  tagline: "Smart Choices, Smarter Living",
  whatsappNumber: "94777543984", // Numerical format for wa.me URL
  displayPhone: "+94 77 754 3984",
  secondaryPhone: "+94 76 197 3186",
  facebookUrl: "https://www.facebook.com/p/Tondel-61571556248431/",
  instagram: "https://instagram.com/tondel.lk",
  email: "tondellkanka@gmail.com",
  address: "Tondel.lk, Galle, Sri Lanka",
  city: "Galle",
  postalCode: "80000",
  bio: "We specialize in importing quality goods to Sri Lanka — from flagship electronics and smartphones to modern home essentials and tech lifestyle gear.",
  currency: "LKR",
  announcementText: "🚚 Island-Wide Delivery Across Sri Lanka | Direct WhatsApp Support: 077 754 3984",
  deliveryNotice: "Fast & safe delivery island-wide within 1–3 business days. Cash on delivery & bank transfer options available upon WhatsApp confirmation.",
  warrantyNotice: "100% Genuine Products with Seller / Company Warranty. Always verify your serial number and invoice.",
};
