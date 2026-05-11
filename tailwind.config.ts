import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^bg-(blue|violet|emerald|amber|rose|cyan)-(100|200)$/ },
    { pattern: /^text-(blue|violet|emerald|amber|rose|cyan)-(600|700)$/ },
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#F8F9FC",
          100: "#F1F3F8",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#374151",
          700: "#1F2937",
          800: "#111827",
          900: "#0D0D1A",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#F8F9FC",
          border: "#E5E7EB",
        },
        text: {
          primary:  "#111827",
          secondary: "#4B5563",
          muted:    "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.25rem" }],
        "display-xl": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3rem)",   { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)",
        elevated: "0 20px 40px -10px rgb(0 0 0 / 0.12)",
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
