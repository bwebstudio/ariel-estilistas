import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Carbón cálido / espresso — no negro puro
        carbon: {
          DEFAULT: "#141210",
          900: "#0f0e0d",
          800: "#141210",
          700: "#1d1814",
          600: "#26211c",
          500: "#332d26",
        },
        // Champagne moderno, apagado, cálido — no dorado brillante
        champagne: {
          DEFAULT: "#c9a875",
          50: "#f5efe6",
          100: "#ece0c8",
          200: "#e8d8be",
          300: "#d8bc8a",
          400: "#c9a875",
          500: "#bfa06a",
          600: "#a08758",
          700: "#7a6644",
        },
        // Marfil / beige cálidos para texto y superficies claras
        ivory: {
          DEFAULT: "#f5efe6",
          50: "#fbf8f1",
          100: "#f5efe6",
          200: "#e8d8be",
          300: "#cfc1a3",
        },
        warm: {
          100: "#e8d8be",
          200: "#cdbb9a",
          300: "#9a8d76",
          400: "#6c6354",
          500: "#48413a",
          600: "#2b261f",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      boxShadow: {
        soft: "0 24px 50px -28px rgba(0,0,0,0.55)",
        card: "0 14px 40px -24px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        // Hero overlay más liviano y natural
        "gradient-hero":
          "linear-gradient(180deg, rgba(20,18,16,0.30) 0%, rgba(20,18,16,0.45) 55%, rgba(20,18,16,0.78) 100%)",
        // Fondo de sección con tono cálido sutil (no negro)
        "gradient-section":
          "radial-gradient(120% 90% at 50% 0%, #1d1814 0%, #141210 60%, #0f0e0d 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
