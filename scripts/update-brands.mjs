import fs from 'fs';

const brands = {
  'apple.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <path fill="#FFFFFF" d="M68.5 49.3c.1-10.7 8.7-15.8 9.1-16.1-5-7.3-12.7-8.3-15.4-8.4-6.6-.7-12.8 3.9-16.2 3.9-3.3 0-8.5-3.8-14-3.7-7.2.1-13.8 4.2-17.5 10.6-7.5 13-1.9 32.2 5.3 42.7 3.5 5.1 7.7 10.8 13.2 10.6 5.3-.2 7.3-3.4 13.7-3.4 6.3 0 8.2 3.4 13.8 3.3 5.7-.1 9.3-5.2 12.8-10.3 4-5.9 5.7-11.6 5.8-11.9-.1-.1-11.1-4.3-10.6-17.3zM61.9 19.3c2.9-3.6 4.9-8.5 4.4-13.5-4.2.2-9.4 2.8-12.4 6.4-2.6 3.1-4.9 8.1-4.3 13 4.7.4 9.4-2.3 12.3-5.9z"/>
  </svg>`,

  'xiaomi-redmi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <rect width="90" height="90" x="5" y="5" rx="22" fill="#FF6900"/>
    <path fill="#FFFFFF" d="M28 32h11v20c0 4.4 3.6 8 8 8s8-3.6 8-8V32h11v20c0 10.5-8.5 19-19 19-10.5 0-19-8.5-19-19V32z"/>
    <rect x="44" y="32" width="11" height="16" fill="#FFFFFF"/>
    <circle cx="50" cy="52" r="4" fill="#FF6900"/>
  </svg>`,

  'samsung.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
    <path fill="#1428A0" d="M60 18c-30 0-54 14-54 32s24 32 54 32 54-14 54-32-24-32-54-32z"/>
    <text x="60" y="56" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" letter-spacing="2.5" text-anchor="middle">SAMSUNG</text>
  </svg>`,

  'sony.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <text x="50" y="58" fill="#FFFFFF" font-family="Georgia, serif" font-weight="900" font-size="24" letter-spacing="3" text-anchor="middle">SONY</text>
  </svg>`,

  'infinix.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
    <rect x="10" y="25" width="100" height="50" rx="12" fill="#0F172A" stroke="#00FF88" stroke-width="2"/>
    <text x="60" y="56" fill="#00FF88" font-family="system-ui, sans-serif" font-weight="900" font-size="15" letter-spacing="2" text-anchor="middle">INFINIX</text>
  </svg>`,

  'midea.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
    <circle cx="60" cy="50" r="38" fill="#0091DA" fill-opacity="0.15" stroke="#0091DA" stroke-width="2"/>
    <text x="60" y="56" fill="#00A3E0" font-family="system-ui, sans-serif" font-weight="900" font-size="16" letter-spacing="1" text-anchor="middle">Midea</text>
  </svg>`,

  'anker.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
    <path fill="#00A0DF" d="M60 22L40 68h14l6-16 6 16h14L60 22zm0 18l4 12h-8l4-12z"/>
    <text x="60" y="82" fill="#00A0DF" font-family="system-ui, sans-serif" font-weight="800" font-size="11" letter-spacing="2" text-anchor="middle">ANKER</text>
  </svg>`,

  'baseus.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
    <rect x="15" y="32" width="90" height="36" rx="8" fill="#FFCC00"/>
    <text x="60" y="56" fill="#000000" font-family="system-ui, sans-serif" font-weight="900" font-size="14" letter-spacing="2" text-anchor="middle">Baseus</text>
  </svg>`
};

for (const [filename, content] of Object.entries(brands)) {
  fs.writeFileSync('public/images/brands/' + filename, content);
}
console.log('Successfully updated brand SVG logos!');
