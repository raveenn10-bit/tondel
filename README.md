# TONDEL – Smart Choices, Smarter Living
## Full Production Website | Luxury Hybrid Architecture | Canva 3D Hero | Bento Product Grid | WhatsApp Commerce

Official high-end e-commerce catalogue and WhatsApp ordering web platform for **TONDEL Sri Lanka**.

---

## 🌟 Key Features

1. **Canva-Faithful 3D Animated Hero**
   - Direct reproduction of `references/hero-reference.png` using the transparent device cutout `hero-products.png`.
   - Dark luxury atmosphere, glass glowing display ring, glossy reflective floor, and smooth continuous GSAP floating motion.
   - Dual CTAs: "SHOP NOW" (direct to `/shop`) and "EXPLORE COLLECTION" (direct WhatsApp inquiry).
   - Fully responsive on desktop, tablet, and mobile with `prefers-reduced-motion` compliance.

2. **Canva-Faithful Bento Product Grid**
   - Direct reproduction of `references/bento-reference.png`.
   - 4-quadrant category tiles (Technology, Audio Gear, Speakers, Wearables), dark high-contrast "Spatial Experience" innovation card, Bestsellers showcase, and featured wearable spotlight.

3. **Complete Static Product Catalogue (Zero Database Dependency)**
   - Strongly typed TypeScript models in `src/types/index.ts`.
   - 16 authentic products in `src/data/products.ts` covering Apple iPhone 11, iPhone 17 Series, Infinix Note 60 Ultra, Redmi Note 15 Pro, Redmi Note 14 5G, Apple Watch Series 10/11, Xiaomi Smart Band 10, luxury over-ear headphones, Bluetooth party speakers, fast GaN chargers, braided cables, wireless mice, and Midea smart digital appliances.
   - Transparent price handling: dynamic LKR prices or verified "Contact for Price" / "Confirm Availability" with zero commercial fabrication.

4. **Cart + Wishlist + WhatsApp Direct Commerce**
   - Client-side persistent cart and wishlist using `localStorage`.
   - Dynamic catalogue price revalidation (never trusts stored prices).
   - Interactive slide-out `CartDrawer` and full `/cart` page.
   - **Single Item WhatsApp Ordering**: Formatted URL-encoded message with item name, brand, variant, SKU, quantity, price, and product URL sent directly to `+94 77 754 3984`.
   - **Full Cart WhatsApp Checkout**: Consolidated order summary with itemized line items, quantities, unit prices, and estimated subtotal sent to WhatsApp.
   - Floating WhatsApp quick-support action button with live inquiry prompt.

5. **Technical SEO, AEO & Performance**
   - Dynamic metadata, OpenGraph tags, and canonical paths across all product, category, and brand pages.
   - JSON-LD Structured Data Schema (`Product`, `Organization`, `BreadcrumbList`).
   - Dynamic `sitemap.xml` and `robots.txt`.
   - Responsive images powered by `next/image`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP (GreenSock)
- **Icons**: Lucide React
- **Hosting / Deployment**: Vercel

---

## 📁 Project Structure

```
tondel-website/
├── public/
│   └── images/
│       ├── banners/          # Promotional banners
│       ├── brands/           # Brand vector logos
│       ├── categories/       # Category vector badges
│       ├── hero/             # hero-products.png & hero.png
│       └── products/         # High-resolution product graphics
├── references/
│   ├── bento-reference.png   # Original Canva bento reference
│   └── hero-reference.png    # Original Canva hero reference
├── src/
│   ├── app/
│   │   ├── about/            # About TONDEL page
│   │   ├── brand/[slug]/     # Dynamic brand catalogue
│   │   ├── cart/             # Dedicated full cart page
│   │   ├── category/[slug]/  # Dynamic category pages
│   │   ├── contact/          # Contact & inquiry form page
│   │   ├── faq/              # FAQ page
│   │   ├── offers/           # Special offers page
│   │   ├── privacy/          # Privacy policy
│   │   ├── product/[slug]/   # Product detail page with gallery & specs
│   │   ├── returns/          # Warranty & returns policy
│   │   ├── search/           # Real-time search page
│   │   ├── shipping/         # Shipping & delivery policy
│   │   ├── shop/             # Filterable catalogue page
│   │   ├── terms/            # Terms of service
│   │   ├── wishlist/         # Wishlist page
│   │   ├── globals.css       # Tailwind & luxury styling tokens
│   │   ├── layout.tsx        # Root layout with fonts & providers
│   │   ├── not-found.tsx     # 404 handler
│   │   ├── page.tsx          # 17-section flagship homepage
│   │   ├── robots.ts         # Robots.txt generator
│   │   └── sitemap.ts        # Dynamic sitemap generator
│   ├── components/
│   │   ├── bento/            # BentoGrid component
│   │   ├── cart/             # CartDrawer component
│   │   ├── hero/             # Animated HeroSection
│   │   ├── home/             # Nav, Benefits, FAQ, Banners
│   │   ├── layout/           # Navbar, Footer, AnnouncementBar
│   │   ├── products/         # ProductCard & ProductDetailView
│   │   └── ui/               # FloatingWhatsApp button
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── WishlistContext.tsx
│   ├── data/
│   │   ├── banners.ts
│   │   ├── brands.ts
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   └── site-config.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── whatsapp.ts
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 How to Run Locally

1. Navigate to the project folder:
   ```bash
   cd tondel-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Content & Configuration Updates

### How to change the WhatsApp Number or Business Details
Open `src/data/site-config.ts`:
```typescript
export const siteConfig = {
  brandName: "TONDEL",
  tagline: "Smart Choices, Smarter Living",
  whatsappNumber: "94777543984", // Numbers only for wa.me URL
  displayPhone: "+94 77 754 3984", // Formatted for UI display
  facebookUrl: "https://www.facebook.com/p/Tondel-61571556248431/",
  email: "contact@tondel.lk",
  address: "Colombo, Sri Lanka",
  currency: "LKR",
  // ...
};
```

### How to Add or Update Products
Open `src/data/products.ts`. Each product follows the `Product` interface in `src/types/index.ts`.
- To update prices, modify the `price` property (or set to `null` to display "Contact for Price").
- To toggle stock, set `availability: "In Stock"` or `"Confirm Availability"`.
- To draft a product without showing in live shop, set `status: "draft"`.

---

## 🚢 Vercel Deployment

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log into [vercel.com](https://vercel.com).
3. Import the `tondel-website` repository.
4. Framework Preset: **Next.js**.
5. Build Command: `npm run build` (or `next build`).
6. Click **Deploy**.
7. In the Vercel Project Settings, connect your custom domain (e.g., `tondel.lk`).
