export type Currency = 'LKR';

export type ProductStatus = 'draft' | 'active' | 'archived';

export type ProductAvailability = 
  | 'In Stock' 
  | 'Confirm Availability' 
  | 'Contact for Price' 
  | 'Pre-Order' 
  | 'Out of Stock';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "256GB - Titanium Blue", "5L Non-Stick"
  price?: number | null;
  compareAtPrice?: number | null;
  sku?: string;
  inStock?: boolean;
  colorHex?: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string; // Brand slug or display name
  category: string; // Category slug
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  price: number | null; // null if unverified / "Contact for Price"
  compareAtPrice: number | null;
  currency: Currency;
  variants: ProductVariant[];
  availability: ProductAvailability;
  featured: boolean;
  newArrival: boolean;
  trending?: boolean;
  status: ProductStatus;
  badge?: string; // e.g. "New 2026", "Best Seller", "Hot Deal"
  seo: ProductSEO;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  iconName?: string;
  featured?: boolean;
  productCount?: number;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  description?: string;
  featured?: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  theme: 'dark' | 'light' | 'blue';
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  addedAt: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  whatsappNumber: string; // e.g. "94777543984"
  displayPhone: string; // e.g. "+94 77 754 3984"
  facebookUrl: string;
  email: string;
  address: string;
  currency: Currency;
  announcementText: string;
  deliveryNotice: string;
  warrantyNotice: string;
}
