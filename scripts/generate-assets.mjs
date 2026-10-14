import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('public/images');

// Ensure directories
['categories', 'brands', 'banners', 'products'].forEach(dir => {
  const p = path.join(baseDir, dir);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// ==========================================
// 1. CATEGORIES (8)
// ==========================================
const categories = [
  {
    slug: 'smartphones',
    name: 'Smartphones',
    color1: '#0B132B',
    color2: '#1C2541',
    accent: '#3B82F6',
    icon: `<rect x="160" y="55" width="80" height="150" rx="16" fill="none" stroke="#3B82F6" stroke-width="4"/><circle cx="200" cy="72" r="3" fill="#3B82F6"/><line x1="185" y1="185" x2="215" y2="185" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/><rect x="170" y="85" width="60" height="85" rx="4" fill="#3B82F6" fill-opacity="0.12"/>`
  },
  {
    slug: 'smart-watches',
    name: 'Smart Watches',
    color1: '#0B192C',
    color2: '#1E3E62',
    accent: '#06B6D4',
    icon: `<rect x="170" y="45" width="60" height="35" rx="6" fill="#06B6D4" fill-opacity="0.3"/><rect x="170" y="180" width="60" height="35" rx="6" fill="#06B6D4" fill-opacity="0.3"/><rect x="160" y="75" width="80" height="110" rx="20" fill="none" stroke="#06B6D4" stroke-width="4"/><circle cx="200" cy="130" r="32" fill="#06B6D4" fill-opacity="0.1" stroke="#06B6D4" stroke-width="2"/><line x1="200" y1="130" x2="200" y2="115" stroke="#06B6D4" stroke-width="3" stroke-linecap="round"/><line x1="200" y1="130" x2="215" y2="130" stroke="#06B6D4" stroke-width="3" stroke-linecap="round"/>`
  },
  {
    slug: 'audio',
    name: 'Headphones & Audio',
    color1: '#190A2E',
    color2: '#2F124D',
    accent: '#A855F7',
    icon: `<path d="M150 140 C150 85, 250 85, 250 140" fill="none" stroke="#A855F7" stroke-width="6" stroke-linecap="round"/><rect x="138" y="125" width="24" height="46" rx="12" fill="#A855F7"/><rect x="238" y="125" width="24" height="46" rx="12" fill="#A855F7"/><circle cx="200" cy="155" r="14" fill="#A855F7" fill-opacity="0.2"/>`
  },
  {
    slug: 'speakers',
    name: 'Bluetooth Speakers',
    color1: '#1F1105',
    color2: '#3D200E',
    accent: '#F97316',
    icon: `<rect x="165" y="75" width="70" height="120" rx="14" fill="none" stroke="#F97316" stroke-width="4"/><circle cx="200" cy="115" r="18" fill="none" stroke="#F97316" stroke-width="3"/><circle cx="200" cy="115" r="7" fill="#F97316"/><circle cx="200" cy="160" r="18" fill="none" stroke="#F97316" stroke-width="3"/><circle cx="200" cy="160" r="7" fill="#F97316"/>`
  },
  {
    slug: 'chargers-cables',
    name: 'Chargers & Cables',
    color1: '#1F1B05',
    color2: '#3A320A',
    accent: '#EAB308',
    icon: `<polygon points="205,65 185,120 205,120 195,185 225,110 205,110" fill="#EAB308"/><path d="M165 170 C165 185, 235 185, 235 170" fill="none" stroke="#EAB308" stroke-width="3" stroke-dasharray="4 4"/>`
  },
  {
    slug: 'computer-accessories',
    name: 'Computer Accessories',
    color1: '#071E1C',
    color2: '#0F3E3A',
    accent: '#10B981',
    icon: `<rect x="165" y="75" width="70" height="110" rx="35" fill="none" stroke="#10B981" stroke-width="4"/><line x1="200" y1="75" x2="200" y2="120" stroke="#10B981" stroke-width="3"/><circle cx="200" cy="100" r="4" fill="#10B981"/>`
  },
  {
    slug: 'home-appliances',
    name: 'Home Appliances',
    color1: '#1E0E1B',
    color2: '#3D1B36',
    accent: '#EC4899',
    icon: `<path d="M160 160 L170 95 C170 85, 230 85, 230 95 L240 160 Z" fill="none" stroke="#EC4899" stroke-width="4"/><rect x="155" y="160" width="90" height="25" rx="5" fill="#EC4899" fill-opacity="0.2" stroke="#EC4899" stroke-width="3"/><circle cx="200" cy="125" r="8" fill="#EC4899"/>`
  },
  {
    slug: 'offers',
    name: 'Special Offers',
    color1: '#260B18',
    color2: '#47142D',
    accent: '#F43F5E',
    icon: `<polygon points="200,60 215,95 250,95 222,118 232,152 200,132 168,152 178,118 150,95 185,95" fill="none" stroke="#F43F5E" stroke-width="4"/><text x="200" y="185" text-anchor="middle" fill="#F43F5E" font-family="system-ui, sans-serif" font-weight="900" font-size="22">% OFF</text>`
  }
];

categories.forEach(cat => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${cat.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${cat.color1}"/>
      <stop offset="100%" stop-color="${cat.color2}"/>
    </linearGradient>
    <radialGradient id="glow-${cat.slug}" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="${cat.accent}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${cat.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" rx="20" fill="url(#bg-${cat.slug})"/>
  <rect width="400" height="300" rx="20" fill="url(#glow-${cat.slug})"/>
  <rect x="1" y="1" width="398" height="298" rx="19" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>
  
  <g transform="translate(0, -5)">
    ${cat.icon}
  </g>
  
  <text x="200" y="240" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="20">${cat.name}</text>
  <rect x="140" y="255" width="120" height="24" rx="12" fill="${cat.accent}" fill-opacity="0.15" stroke="${cat.accent}" stroke-opacity="0.4" stroke-width="1"/>
  <text x="200" y="271" text-anchor="middle" fill="${cat.accent}" font-family="system-ui, sans-serif" font-weight="700" font-size="10.5" letter-spacing="1">EXPLORE COLLECTION</text>
</svg>`;
  fs.writeFileSync(path.join(baseDir, 'categories', `${cat.slug}.svg`), svg, 'utf-8');
});

// ==========================================
// 2. BRANDS (8)
// ==========================================
const brands = [
  { slug: 'apple', name: 'Apple', sub: 'iPhone, Watch & Audio', color: '#F5F5F7', mark: '' },
  { slug: 'xiaomi-redmi', name: 'Xiaomi / Redmi', sub: 'Smartphones & Smart Living', color: '#FF6900', mark: 'mi' },
  { slug: 'infinix', name: 'Infinix', sub: 'Future Tech & Gaming', color: '#00D26A', mark: 'INFINIX' },
  { slug: 'samsung', name: 'Samsung', sub: 'Galaxy Innovation', color: '#387BFF', mark: 'SAMSUNG' },
  { slug: 'midea', name: 'Midea', sub: 'Smart Home & Living', color: '#0091FF', mark: 'Midea' },
  { slug: 'sony', name: 'Sony', sub: 'Premium Audio & Vision', color: '#E5E7EB', mark: 'SONY' },
  { slug: 'anker', name: 'Anker', sub: 'Fast Charge & Power', color: '#00A6DA', mark: 'ANKER' },
  { slug: 'baseus', name: 'Baseus', sub: 'Base on User Tech', color: '#FFBE00', mark: 'Baseus' },
];

brands.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${b.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="320" height="140" rx="16" fill="url(#bg-${b.slug})"/>
  <rect x="1" y="1" width="318" height="138" rx="15" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="160" cy="52" r="32" fill="${b.color}" fill-opacity="0.08"/>
  <text x="160" y="60" text-anchor="middle" fill="${b.color}" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" letter-spacing="1">${b.mark}</text>
  <text x="160" y="96" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="600" font-size="14">${b.name}</text>
  <text x="160" y="116" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-weight="400" font-size="11">${b.sub}</text>
</svg>`;
  fs.writeFileSync(path.join(baseDir, 'brands', `${b.slug}.svg`), svg, 'utf-8');
});

// ==========================================
// 3. BANNERS (4)
// ==========================================
const banners = [
  {
    name: 'hero-banner-1.svg',
    title: 'SMART CHOICES. SMARTER LIVING.',
    sub: 'Original Tech, Premium Wearables & Smart Home Appliances with Island-Wide Delivery',
    badge: 'FLAGSHIP COLLECTION 2026',
    btn: 'Explore Catalog',
    accent: '#3B82F6',
    bg1: '#070C1A',
    bg2: '#132147'
  },
  {
    name: 'whatsapp-order-banner.svg',
    title: 'ORDER DIRECTLY ON WHATSAPP',
    sub: 'Quick Responses • Real-Time Stock Confirmation • Cash on Delivery or Bank Transfer',
    badge: 'FAST DISPATCH SRI LANKA',
    btn: 'Chat with Us',
    accent: '#10B981',
    bg1: '#051E16',
    bg2: '#0D382B'
  },
  {
    name: 'special-deals-banner.svg',
    title: 'LIMITED TIME TECH SPECIALS',
    sub: 'Save Big on Smartphones, Earbuds & GaN Chargers. Guaranteed Authentic Warranties.',
    badge: 'SPECIAL OFFERS & BUNDLES',
    btn: 'View Special Offers',
    accent: '#F43F5E',
    bg1: '#240816',
    bg2: '#47142D'
  },
  {
    name: 'appliances-banner.svg',
    title: 'ELEVATE YOUR KITCHEN & HOME',
    sub: 'Midea Smart Rice Cookers, Air Fryers & High-Speed Blenders for effortless living.',
    badge: 'GENUINE MIDEA HOME LIVING',
    btn: 'Shop Home Appliances',
    accent: '#06B6D4',
    bg1: '#081726',
    bg2: '#133552'
  }
];

banners.forEach(bn => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${bn.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bn.bg1}"/>
      <stop offset="100%" stop-color="${bn.bg2}"/>
    </linearGradient>
    <radialGradient id="glow-${bn.name}" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${bn.accent}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${bn.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="480" rx="24" fill="url(#bg-${bn.name})"/>
  <rect width="1200" height="480" rx="24" fill="url(#glow-${bn.name})"/>
  <rect x="2" y="2" width="1196" height="476" rx="22" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="2"/>
  
  <!-- Subtle decorative graphic lines -->
  <g opacity="0.15">
    <circle cx="950" cy="240" r="180" fill="none" stroke="${bn.accent}" stroke-width="2" stroke-dasharray="8 8"/>
    <circle cx="950" cy="240" r="120" fill="none" stroke="${bn.accent}" stroke-width="3"/>
    <circle cx="950" cy="240" r="60" fill="${bn.accent}" fill-opacity="0.2"/>
  </g>
  
  <!-- Content -->
  <g transform="translate(80, 110)">
    <!-- Badge -->
    <rect x="0" y="0" width="230" height="34" rx="17" fill="${bn.accent}" fill-opacity="0.18" stroke="${bn.accent}" stroke-width="1.5"/>
    <text x="115" y="22" text-anchor="middle" fill="${bn.accent}" font-family="system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="1.5">${bn.badge}</text>
    
    <!-- Title -->
    <text x="0" y="90" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" letter-spacing="-0.5">${bn.title}</text>
    
    <!-- Subtitle -->
    <text x="0" y="140" fill="#CBD5E1" font-family="system-ui, sans-serif" font-weight="400" font-size="18" max-width="700">${bn.sub}</text>
    
    <!-- Button CTA mockup -->
    <g transform="translate(0, 185)">
      <rect width="210" height="52" rx="26" fill="${bn.accent}"/>
      <text x="105" y="32" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="16">${bn.btn} →</text>
    </g>
  </g>
  
  <!-- Watermark -->
  <text x="1120" y="440" text-anchor="end" fill="#FFFFFF" fill-opacity="0.2" font-family="system-ui, sans-serif" font-weight="800" font-size="18" letter-spacing="3">TONDEL.LK</text>
</svg>`;
  fs.writeFileSync(path.join(baseDir, 'banners', bn.name), svg, 'utf-8');
});

// ==========================================
// 4. PRODUCTS (16 Items)
// ==========================================
const productsList = [
  {
    slug: 'iphone-11',
    name: 'Apple iPhone 11',
    category: 'Smartphones',
    brand: 'Apple',
    accent: '#3B82F6',
    iconType: 'phone-dual'
  },
  {
    slug: 'iphone-17-pro',
    name: 'Apple iPhone 17 Pro',
    category: 'Smartphones',
    brand: 'Apple',
    accent: '#6366F1',
    iconType: 'phone-concept'
  },
  {
    slug: 'infinix-note-60-ultra',
    name: 'Infinix Note 60 Ultra',
    category: 'Smartphones',
    brand: 'Infinix',
    accent: '#10B981',
    iconType: 'phone-gaming'
  },
  {
    slug: 'redmi-note-15-pro',
    name: 'Xiaomi Redmi Note 15 Pro',
    category: 'Smartphones',
    brand: 'Xiaomi / Redmi',
    accent: '#F97316',
    iconType: 'phone-quad'
  },
  {
    slug: 'redmi-note-14-5g',
    name: 'Xiaomi Redmi Note 14 5G',
    category: 'Smartphones',
    brand: 'Xiaomi / Redmi',
    accent: '#EC4899',
    iconType: 'phone-modern'
  },
  {
    slug: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    category: 'Smart Watches',
    brand: 'Apple',
    accent: '#06B6D4',
    iconType: 'watch-apple'
  },
  {
    slug: 'xiaomi-smart-band-10',
    name: 'Xiaomi Smart Band 10',
    category: 'Smart Watches',
    brand: 'Xiaomi / Redmi',
    accent: '#FF6900',
    iconType: 'smart-band'
  },
  {
    slug: 'luxury-overear-headphones',
    name: 'Luxury ANC Wireless Over-Ear Headphones',
    category: 'Headphones & Audio',
    brand: 'Apple',
    accent: '#A855F7',
    iconType: 'headphones-luxury'
  },
  {
    slug: 'bluetooth-party-speaker',
    name: 'High-Bass RGB Bluetooth Party Speaker',
    category: 'Bluetooth Speakers',
    brand: 'Sony',
    accent: '#F59E0B',
    iconType: 'party-speaker'
  },
  {
    slug: '65w-gan-fast-charger',
    name: '65W GaN Dual-Port Fast Charger Adapter',
    category: 'Chargers & Cables',
    brand: 'Anker',
    accent: '#00A6DA',
    iconType: 'gan-charger'
  },
  {
    slug: 'braided-type-c-cable',
    name: 'Braided Type-C to Type-C 100W Fast Cable',
    category: 'Chargers & Cables',
    brand: 'Baseus',
    accent: '#EAB308',
    iconType: 'cable-braided'
  },
  {
    slug: 'ergonomic-wireless-mouse',
    name: 'Ergonomic Dual-Mode Silent Wireless Mouse',
    category: 'Computer Accessories',
    brand: 'Xiaomi / Redmi',
    accent: '#10B981',
    iconType: 'mouse-ergo'
  },
  {
    slug: 'midea-smart-rice-cooker',
    name: 'Midea 1.8L Smart Digital Fuzzy Logic Rice Cooker',
    category: 'Home Appliances',
    brand: 'Midea',
    accent: '#0091FF',
    iconType: 'rice-cooker'
  },
  {
    slug: 'midea-digital-air-fryer',
    name: 'Midea 4.5L Digital Touchscreen Air Fryer',
    category: 'Home Appliances',
    brand: 'Midea',
    accent: '#EF4444',
    iconType: 'air-fryer'
  },
  {
    slug: 'midea-electric-kettle',
    name: 'Midea 1.7L Double-Wall Stainless Steel Electric Kettle',
    category: 'Home Appliances',
    brand: 'Midea',
    accent: '#06B6D4',
    iconType: 'electric-kettle'
  },
  {
    slug: 'midea-high-speed-blender',
    name: 'Midea 600W High-Speed Nutrient Blender',
    category: 'Home Appliances',
    brand: 'Midea',
    accent: '#8B5CF6',
    iconType: 'blender'
  }
];

function getProductIllustration(type, accent) {
  switch (type) {
    case 'phone-dual':
      return `
        <!-- Phone Outline -->
        <rect x="210" y="80" width="180" height="340" rx="34" fill="#111827" stroke="${accent}" stroke-width="4"/>
        <rect x="222" y="94" width="156" height="312" rx="24" fill="#1F2937"/>
        <!-- Notch -->
        <path d="M265 94 L265 110 A 6 6 0 0 0 271 116 L329 116 A 6 6 0 0 0 335 110 L335 94 Z" fill="#111827"/>
        <!-- Camera bump rear silhouette -->
        <rect x="230" y="115" width="46" height="88" rx="16" fill="${accent}" fill-opacity="0.2" stroke="${accent}" stroke-width="2"/>
        <circle cx="253" cy="138" r="14" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
        <circle cx="253" cy="178" r="14" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
        <line x1="260" y1="380" x2="340" y2="380" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round"/>
      `;
    case 'phone-concept':
      return `
        <!-- Futuristic Ultra-Slim Bezel Phone -->
        <rect x="210" y="70" width="180" height="350" rx="36" fill="#090E17" stroke="${accent}" stroke-width="4"/>
        <rect x="216" y="76" width="168" height="338" rx="30" fill="#131F37"/>
        <!-- Dynamic Island -->
        <rect x="270" y="90" width="60" height="18" rx="9" fill="#000000" stroke="${accent}" stroke-width="1.5"/>
        <circle cx="282" cy="99" r="4" fill="#1E293B"/>
        <!-- Hologram screen lines -->
        <line x1="240" y1="170" x2="360" y2="170" stroke="${accent}" stroke-opacity="0.5" stroke-width="2"/>
        <line x1="240" y1="210" x2="330" y2="210" stroke="${accent}" stroke-opacity="0.3" stroke-width="2"/>
        <circle cx="300" cy="270" r="38" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="300" y="275" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-weight="700" font-size="13">TITANIUM</text>
      `;
    case 'phone-gaming':
    case 'phone-quad':
    case 'phone-modern':
      return `
        <!-- Sleek Modern Smartphone -->
        <rect x="210" y="75" width="180" height="345" rx="30" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <rect x="218" y="83" width="164" height="329" rx="24" fill="#1E293B"/>
        <!-- Punch hole camera -->
        <circle cx="300" cy="100" r="5" fill="#0F172A" stroke="${accent}" stroke-width="1.5"/>
        <!-- Display Graphic -->
        <path d="M230 330 Q 300 240, 370 290 L370 400 L230 400 Z" fill="${accent}" fill-opacity="0.25"/>
        <!-- Camera island on back indication -->
        <rect x="230" y="125" width="65" height="100" rx="14" fill="#090E17" stroke="${accent}" stroke-width="2"/>
        <circle cx="250" cy="150" r="10" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <circle cx="275" cy="150" r="10" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <circle cx="250" cy="180" r="10" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <circle cx="275" cy="180" r="6" fill="${accent}"/>
      `;
    case 'watch-apple':
      return `
        <!-- Straps -->
        <rect x="250" y="50" width="100" height="80" rx="14" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <rect x="250" y="370" width="100" height="80" rx="14" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <!-- Watch Case -->
        <rect x="220" y="110" width="160" height="190" rx="42" fill="#0F172A" stroke="${accent}" stroke-width="5"/>
        <!-- Digital Crown -->
        <rect x="380" y="145" width="12" height="38" rx="5" fill="${accent}"/>
        <!-- Screen -->
        <rect x="236" y="126" width="128" height="158" rx="30" fill="#1E293B"/>
        <!-- Watch Face Rings -->
        <circle cx="300" cy="205" r="45" fill="none" stroke="#EF4444" stroke-width="5"/>
        <circle cx="300" cy="205" r="34" fill="none" stroke="#10B981" stroke-width="5"/>
        <circle cx="300" cy="205" r="23" fill="none" stroke="#3B82F6" stroke-width="5"/>
        <text x="300" y="165" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="18">09:41</text>
      `;
    case 'smart-band':
      return `
        <!-- Band strap -->
        <rect x="270" y="60" width="60" height="380" rx="28" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <!-- Pill capsule body -->
        <rect x="260" y="140" width="80" height="190" rx="40" fill="#090E17" stroke="${accent}" stroke-width="4"/>
        <rect x="270" y="155" width="60" height="160" rx="30" fill="#111827"/>
        <!-- OLED display graphic -->
        <path d="M275 240 L285 240 L292 220 L300 260 L308 230 L315 240 L325 240" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
        <text x="300" y="200" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="22">10:08</text>
        <text x="300" y="290" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-weight="700" font-size="13">8,420 BPM</text>
      `;
    case 'headphones-luxury':
      return `
        <!-- Headband -->
        <path d="M210 240 C210 110, 390 110, 390 240" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>
        <path d="M230 180 C230 120, 370 120, 370 180" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round"/>
        <!-- Metal Telescoping Arms -->
        <line x1="210" y1="230" x2="210" y2="280" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
        <line x1="390" y1="230" x2="390" y2="280" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
        <!-- Ear Cups -->
        <rect x="180" y="260" width="60" height="105" rx="30" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <rect x="360" y="260" width="60" height="105" rx="30" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Cushions -->
        <rect x="190" y="270" width="40" height="85" rx="20" fill="#1E293B"/>
        <rect x="370" y="270" width="40" height="85" rx="20" fill="#1E293B"/>
      `;
    case 'party-speaker':
      return `
        <!-- Speaker Cabinet -->
        <rect x="220" y="90" width="160" height="320" rx="30" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Handle -->
        <path d="M260 90 L260 60 A 10 10 0 0 1 270 50 L330 50 A 10 10 0 0 1 340 60 L340 90" fill="none" stroke="${accent}" stroke-width="6"/>
        <!-- Woofer Top -->
        <circle cx="300" cy="180" r="50" fill="#1E293B" stroke="${accent}" stroke-width="4"/>
        <circle cx="300" cy="180" r="22" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
        <!-- Woofer Bottom -->
        <circle cx="300" cy="310" r="55" fill="#1E293B" stroke="${accent}" stroke-width="4"/>
        <circle cx="300" cy="310" r="26" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
        <!-- RGB ring effects -->
        <circle cx="300" cy="310" r="66" fill="none" stroke="${accent}" stroke-opacity="0.3" stroke-width="4" stroke-dasharray="10 6"/>
      `;
    case 'gan-charger':
      return `
        <!-- Charger Body -->
        <rect x="220" y="140" width="160" height="200" rx="24" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Wall Prongs -->
        <rect x="250" y="80" width="22" height="60" rx="6" fill="#94A3B8"/>
        <rect x="328" y="80" width="22" height="60" rx="6" fill="#94A3B8"/>
        <!-- Ports plate -->
        <rect x="245" y="220" width="110" height="90" rx="14" fill="#1E293B"/>
        <!-- Type-C 1 -->
        <rect x="270" y="235" width="60" height="14" rx="7" fill="#0F172A" stroke="${accent}" stroke-width="2"/>
        <text x="300" y="246" text-anchor="middle" fill="${accent}" font-size="8" font-weight="bold">Type-C 65W</text>
        <!-- Type-C 2 -->
        <rect x="270" y="260" width="60" height="14" rx="7" fill="#0F172A" stroke="${accent}" stroke-width="2"/>
        <!-- USB-A -->
        <rect x="270" y="285" width="60" height="14" rx="4" fill="#0F172A" stroke="#EAB308" stroke-width="2"/>
        <text x="300" y="195" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="28">65W</text>
        <text x="300" y="212" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-weight="700" font-size="11">GaN Fast Tech</text>
      `;
    case 'cable-braided':
      return `
        <!-- Cable Loop -->
        <path d="M180 280 C180 140, 420 140, 420 280 C420 380, 180 380, 180 280" fill="none" stroke="${accent}" stroke-width="12" stroke-dasharray="8 6"/>
        <!-- Connector 1 -->
        <g transform="translate(140, 240) rotate(-20)">
          <rect x="0" y="0" width="70" height="34" rx="10" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
          <rect x="65" y="6" width="30" height="22" rx="4" fill="#94A3B8"/>
          <text x="35" y="22" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-weight="bold" font-size="10">100W</text>
        </g>
        <!-- Connector 2 -->
        <g transform="translate(390, 260) rotate(25)">
          <rect x="0" y="0" width="70" height="34" rx="10" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
          <rect x="65" y="6" width="30" height="22" rx="4" fill="#94A3B8"/>
        </g>
      `;
    case 'mouse-ergo':
      return `
        <!-- Mouse Body -->
        <ellipse cx="300" cy="250" rx="95" ry="140" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Left/Right Click Divider -->
        <line x1="300" y1="110" x2="300" y2="230" stroke="${accent}" stroke-width="3"/>
        <line x1="205" y1="210" x2="395" y2="210" stroke="${accent}" stroke-opacity="0.4" stroke-width="2"/>
        <!-- Scroll Wheel -->
        <rect x="290" y="145" width="20" height="45" rx="10" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <!-- Thumb Rest Ergonomic flare -->
        <path d="M210 230 C175 260, 175 310, 225 350" fill="none" stroke="${accent}" stroke-width="4"/>
        <circle cx="300" cy="300" r="14" fill="${accent}" fill-opacity="0.2"/>
      `;
    case 'rice-cooker':
      return `
        <!-- Cooker Body -->
        <path d="M180 200 C180 160, 420 160, 420 200 L420 330 C420 370, 180 370, 180 330 Z" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Lid Handle -->
        <rect x="250" y="130" width="100" height="32" rx="16" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <!-- Digital Display Panel -->
        <rect x="235" y="225" width="130" height="75" rx="12" fill="#090E17" stroke="${accent}" stroke-width="2"/>
        <text x="300" y="258" text-anchor="middle" fill="${accent}" font-family="monospace" font-weight="bold" font-size="22">00:25</text>
        <circle cx="260" cy="282" r="5" fill="#10B981"/>
        <text x="272" y="286" fill="#94A3B8" font-family="sans-serif" font-size="9">WARM</text>
        <circle cx="320" cy="282" r="5" fill="#EF4444"/>
        <text x="332" y="286" fill="#94A3B8" font-family="sans-serif" font-size="9">COOK</text>
        <!-- Base Rim -->
        <rect x="195" y="345" width="210" height="15" rx="7" fill="#1E293B"/>
      `;
    case 'air-fryer':
      return `
        <!-- Air Fryer Main Dome -->
        <path d="M190 170 C190 110, 410 110, 410 170 L410 360 C410 380, 190 380, 190 360 Z" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Top Touchscreen Panel -->
        <rect x="230" y="140" width="140" height="70" rx="16" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <text x="300" y="175" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-weight="900" font-size="24">200°C</text>
        <text x="300" y="196" text-anchor="middle" fill="${accent}" font-family="monospace" font-weight="bold" font-size="14">18 MIN</text>
        <!-- Fry Basket Window -->
        <rect x="220" y="235" width="160" height="105" rx="18" fill="#182234" stroke="${accent}" stroke-width="3"/>
        <!-- Basket Handle -->
        <rect x="282" y="260" width="36" height="55" rx="12" fill="#0F172A" stroke="${accent}" stroke-width="3"/>
      `;
    case 'electric-kettle':
      return `
        <!-- Kettle Base -->
        <ellipse cx="300" cy="370" rx="100" ry="18" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <!-- Kettle Body -->
        <path d="M225 360 L245 180 C245 160, 355 160, 355 180 L375 360 Z" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Spout -->
        <path d="M245 185 L200 175 L228 230 Z" fill="#1E293B" stroke="${accent}" stroke-width="2"/>
        <!-- Handle -->
        <path d="M360 190 C420 190, 420 330, 370 330" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>
        <!-- Lid & Knob -->
        <rect x="270" y="145" width="60" height="20" rx="10" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <circle cx="300" cy="140" r="8" fill="${accent}"/>
        <!-- Water Level Indicator Window -->
        <rect x="290" y="230" width="20" height="80" rx="10" fill="#06B6D4" fill-opacity="0.2" stroke="${accent}" stroke-width="2"/>
        <line x1="290" y1="270" x2="310" y2="270" stroke="${accent}" stroke-width="2"/>
      `;
    case 'blender':
      return `
        <!-- Blender Motor Base -->
        <path d="M230 380 L245 280 L355 280 L370 380 Z" fill="#0F172A" stroke="${accent}" stroke-width="4"/>
        <!-- Dial Knob -->
        <circle cx="300" cy="330" r="22" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <line x1="300" y1="330" x2="300" y2="315" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
        <!-- Glass Jug -->
        <path d="M245 275 L230 130 L370 130 L355 275 Z" fill="#1E293B" fill-opacity="0.4" stroke="${accent}" stroke-width="4"/>
        <!-- Jug Handle -->
        <path d="M370 145 C415 150, 415 240, 355 255" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
        <!-- Lid -->
        <rect x="220" y="115" width="160" height="22" rx="8" fill="#1E293B" stroke="${accent}" stroke-width="3"/>
        <!-- Blades inside -->
        <path d="M280 265 L320 265 L300 250 Z" fill="${accent}"/>
      `;
    default:
      return `<rect x="200" y="150" width="200" height="200" rx="20" fill="#1E293B" stroke="${accent}" stroke-width="4"/>`;
  }
}

productsList.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070C1A"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#15213F"/>
    </linearGradient>
    <radialGradient id="radial-${p.slug}" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${p.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" rx="30" fill="url(#bg-${p.slug})"/>
  <rect width="600" height="600" rx="30" fill="url(#radial-${p.slug})"/>
  <rect x="2" y="2" width="596" height="596" rx="28" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="2"/>
  
  <!-- Subtle tech background grid -->
  <g opacity="0.06" stroke="#FFFFFF" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="600"/>
    <line x1="200" y1="0" x2="200" y2="600"/>
    <line x1="300" y1="0" x2="300" y2="600"/>
    <line x1="400" y1="0" x2="400" y2="600"/>
    <line x1="500" y1="0" x2="500" y2="600"/>
    <line x1="0" y1="100" x2="600" y2="100"/>
    <line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="0" y1="300" x2="600" y2="300"/>
    <line x1="0" y1="400" x2="600" y2="400"/>
    <line x1="0" y1="500" x2="600" y2="500"/>
  </g>
  
  <!-- Brand & Category Tag -->
  <rect x="40" y="40" width="130" height="28" rx="14" fill="${p.accent}" fill-opacity="0.15" stroke="${p.accent}" stroke-width="1.2"/>
  <text x="105" y="58" text-anchor="middle" fill="${p.accent}" font-family="system-ui, sans-serif" font-weight="700" font-size="11" letter-spacing="1">${p.brand.toUpperCase()}</text>
  
  <!-- Genuine Verification Stamp -->
  <g transform="translate(430, 40)">
    <rect width="130" height="28" rx="14" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1.2"/>
    <text x="65" y="18" text-anchor="middle" fill="#10B981" font-family="system-ui, sans-serif" font-weight="700" font-size="10.5" letter-spacing="0.5">✓ 100% GENUINE</text>
  </g>

  <!-- Product Illustration -->
  <g transform="translate(0, 20)">
    ${getProductIllustration(p.iconType, p.accent)}
  </g>
  
  <!-- Bottom Product Title and Watermark -->
  <rect x="40" y="505" width="520" height="60" rx="16" fill="#0B132B" fill-opacity="0.8" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
  <text x="65" y="541" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="18">${p.name}</text>
  <text x="535" y="541" text-anchor="end" fill="${p.accent}" font-family="system-ui, sans-serif" font-weight="700" font-size="12" letter-spacing="1">TONDEL.LK</text>
</svg>`;
  fs.writeFileSync(path.join(baseDir, 'products', `${p.slug}.svg`), svg, 'utf-8');
});

console.log('All SVGs generated successfully!');
