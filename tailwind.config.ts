import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tondel: {
          navy: "#081326",
          navySecondary: "#10264A",
          navySurface: "#0C1B35",
          navyCard: "#0E2040",
          blue: "#2563EB",
          blueHover: "#1D4ED8",
          blueLight: "#EAF2FF",
          blueGlow: "rgba(37, 99, 235, 0.35)",
          purpleGlow: "rgba(147, 51, 234, 0.25)",
          white: "#FFFFFF",
          muted: "#94A3B8",
          borderDark: "rgba(255, 255, 255, 0.1)",
          borderGlow: "rgba(37, 99, 235, 0.4)",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(37, 99, 235, 0.4)",
        "glow-purple": "0 0 35px -5px rgba(147, 51, 234, 0.35)",
        "card-luxury": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "card-bento": "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 60% 40%, rgba(37, 99, 235, 0.25) 0%, rgba(8, 19, 38, 0.8) 70%, #081326 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
