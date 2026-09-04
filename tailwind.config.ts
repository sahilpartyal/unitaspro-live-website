import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Only the blue accent is safelisted. violet/emerald/amber/rose/cyan were
  // removed — those families are banned by CLAUDE.md and safelisting them meant
  // they would compile and ship the moment anyone referenced them.
  safelist: [
    { pattern: /^bg-blue-(100|200)$/ },
    { pattern: /^text-blue-(600|700)$/ },
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
        // NOTE: `xs` is still 0.875rem (14px), identical to Tailwind's `sm`.
        // Left deliberately broken for now — ~127 call sites depend on it
        // rendering 14px. It gets repointed to a true 12px only after those
        // are migrated onto the semantic tokens below. Do not "fix" it early.
        xs: ["0.875rem", { lineHeight: "1.25rem" }],

        // ── Semantic type roles ──────────────────────────────────────────
        // Line-heights are unitless on purpose so they scale with the size.
        // Additive: nothing below is in use yet, so adding them changes
        // nothing on screen. Migrate call sites onto them incrementally.
        micro:        ["0.75rem",   { lineHeight: "1.4",  letterSpacing: "0.10em" }],
        meta:         ["0.8125rem", { lineHeight: "1.45" }],
        "body-dense": ["0.875rem",  { lineHeight: "1.55" }],
        "data-label": ["0.875rem",  { lineHeight: "1.4" }],
        "ui-label":   ["0.9375rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "card-sm":    ["0.9375rem", { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
        body:         ["1rem",      { lineHeight: "1.65" }],
        "body-legal": ["1rem",      { lineHeight: "1.8" }],
        "nav-label":  ["1rem",      { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "card-md":    ["1rem",      { lineHeight: "1.35", letterSpacing: "-0.015em" }],
        lead:         ["clamp(1rem,1.4vw,1.125rem)",      { lineHeight: "1.7",  letterSpacing: "-0.01em" }],
        index:        ["clamp(1.125rem,2vw,1.5rem)",      { lineHeight: "1",    letterSpacing: "-0.04em" }],
        panel:        ["clamp(1.125rem,1.8vw,1.65rem)",   { lineHeight: "1.2",  letterSpacing: "-0.025em" }],
        data:         ["clamp(1.5rem,2.5vw,2.25rem)",     { lineHeight: "1",    letterSpacing: "-0.04em" }],
        section:      ["clamp(1.6rem,4vw,3rem)",          { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display:      ["clamp(2.25rem,5.5vw,4.75rem)",    { lineHeight: "1.06", letterSpacing: "-0.04em" }],
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
