---
name: unitaspro-design
description: |
  Unitaspro website design system and rules. Enforces colors, typography, section patterns,
  page flow, navbar behavior, and component styles. Use before any UI/UX work on this project.
  Invoke when: building new pages, editing existing sections, adding components, reviewing design,
  or when the user says "follow the design system".
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
---

# Unitaspro Design System

You are working on the Unitaspro IT services website. Every UI change MUST follow these rules.
Do not deviate. If something conflicts, these rules win.

## Colors

```
Dark sections:    #0A0F1E (navy)
Dark gradient:    linear-gradient(135deg, #0A0F1E, #1a2d6e)
Light sections:   white, #F8F9FC, #F1F3F8
Blue accent:      #2563EB
Purple accent:    #7C3AED
Green accent:     #059669
Amber accent:     #D97706
Text dark:        #0D0D1A
Text gray:        #6B7180
Text light:       #9CA3AF
Grid texture:     rgba(255,255,255,0.03) lines at 48px (dark sections only)
```

## Typography

- **Font**: Plus Jakarta Sans (already loaded)
- **Headings**: Use `heading-xl` class. Letter-spacing: `-0.03em` to `-0.04em`. Line-height: `1.1` to `1.15`.
- **Section eyebrow**: ALWAYS add before headings:
  ```jsx
  <div className="mb-3 flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
    <p className="text-sm text-[#6B7180]">Label Text Here</p>
  </div>
  ```
- On dark backgrounds, eyebrow text color is `text-white/40`

## Feature Colors Array

Used for cards, icons, use cases — cycle through with `index % 4`:
```tsx
const FEATURE_COLORS = [
  { color: "#2563EB", bg: "#EFF6FF" },   // blue
  { color: "#7C3AED", bg: "#F5F3FF" },   // purple
  { color: "#059669", bg: "#ECFDF5" },   // green
  { color: "#D97706", bg: "#FFFBEB" },   // amber
];
```

## Stats (NEVER change these numbers)

```
150+ Projects Delivered — Across diverse industries
95+  Happy Clients — Serving clients in 15+ countries
97%  Client Satisfaction — Based on long-term partnerships
8+   Years of Experience — Growing steadily since 2018
```

Used in: `Stats.tsx`, `Benefits.tsx`, `AboutPageClient.tsx`, `ContactPageClient.tsx`, `Testimonials.tsx`

## Tech Logos (13 total)

React Native, Node.js, TypeScript, PostgreSQL, Firebase, Redis, AWS, Docker, Google Cloud, MongoDB, Flutter, Figma, GitHub

Rules:
- ALWAYS full color (no grayscale, no opacity filters)
- ALWAYS show name under/beside the logo on ALL screen sizes
- On service pages: Design B style (gradient bg, floating bouncing icons, pill badges in 2 rows)
- NOT on industry pages

## Industry Page Flow

Template: `components/pages/IndustryPageTemplate.tsx`

```
Hero → Stats Bar → Panels (dark tabbed) → CTA → Use Cases → Before/After → CTA → Features → FAQ
```

### Sections that DO NOT exist on industry pages (removed):
- Problem & Solution
- Comparison table
- Deliverables / "What You Get"
- Process steps / "How We Work"
- Tech logos section

### Panels Section (dark tabbed)
- Background: `#0A0F1E` with grid texture
- Tabs: underline style (blue `#2563EB` underline on active, `text-white/40` inactive)
- Layout: phone mockup LEFT (9:16 portrait, blue glow behind) + 2-column feature grid RIGHT
- Mobile: phone centered top, features stacked below
- Feature icons: glass containers (`bg-white/[0.06] border border-white/[0.08]`)

### Before/After Section
- Eyebrow: "Why Custom?"
- Heading: "Before vs after Unitaspro."
- Two cards side by side:
  - "Without Unitaspro": gray bg `#F8F9FC`, border, red X icons (`XCircle`)
  - "With Unitaspro": blue gradient bg (`#EFF6FF → #F5F3FF`), blue border, blue checkmarks (`CheckCircle2`), subtle blue glow

### CTA Bars
```jsx
style={{ background: "linear-gradient(135deg,#0A0F1E 0%,#1a2d6e 100%)" }}
```
Grid texture overlay. Industry icon + label pill + heading + subtitle + two buttons (Get Free Quote + Book a Call).

## Service Pages

### Tech Stack Section (Design B)
- Background: `linear-gradient(180deg, #F0F2FF 0%, #FAFBFE 50%, #F0F2FF 100%)`
- Floating icons: 8 logos positioned absolutely, bouncing with CSS keyframes (`floatUp`/`floatDown`), `opacity-40`, NO white circle backgrounds
- Center: heading "Built With Tools That **Power the Web**" + subtitle
- Pill badges: `max-w-3xl mx-auto`, `rounded-full bg-white border`, icon + name

## Navbar

### Services Dropdown
- Width: `320px`
- Single column list
- Each item: colored icon LEFT + bold black title + gray description + ↗ arrow on hover
- No CTA bar, no blog section

### Industries Dropdown
- Width: `640px`
- Two columns, NO category labels (no "Build"/"Serve")
- Same item style as services

### Mobile Menu
- Full-screen overlay, `z-40`
- **Services**: collapsible accordion (tap to expand/collapse with ChevronDown rotation)
- **Industries**: collapsible accordion (same style)
- **About, Blog, Contact**: direct links, always visible
- Bottom: phone number + "Get Free Quote" button
- No "Book a Call" in navbar — only "Get Free Quote"

### Popup
- `z-30` (below mobile menu `z-40`, below navbar `z-50`)
- Shows after 4.5 seconds, hidden behind mobile menu when open

## Animation Patterns

- `fadeUp`: `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`
- Easing: `[0.25, 0.46, 0.45, 0.94]`
- Stagger: `delay: i * 0.06` for lists
- Tab content: `AnimatePresence mode="wait"` with `initial/animate/exit`
- Floating icons: CSS `@keyframes floatUp/floatDown` with `ease-in-out infinite`, staggered duration `2.5s + i * 0.3s`

## Key Files

```
components/pages/IndustryPageTemplate.tsx    — shared industry template
components/pages/TransportIndustryPage.tsx   — (+ 7 others) industry data
components/pages/*ServicePage.tsx            — 4 service pages
components/layout/Navbar.tsx                 — navigation + dropdowns
components/layout/Footer.tsx                 — footer
components/sections/Stats.tsx                — reusable stats bar
components/ui/LeadPopup.tsx                  — lead capture popup
lib/industries-data.ts                       — industry listing data
app/globals.css                              — global styles
```

## Design References

These are the websites the owner approved and wants patterns borrowed from:
- **MaxelTracker** (maxeltracker.com) — floating tech icons, before/after cards, dropdown item style
- **LBM Solution FoodFleet** (lbmsolution.com/product/foodfleet) — dark tabbed panels with phone mockup
- **Pinterest orbital ring** — inspiration for floating tech icons

## Rules

1. ALWAYS add eyebrow labels above section headings
2. NEVER use grayscale on logos or images
3. NEVER change the stats numbers
4. NEVER add sections back that were removed (Problem/Solution, Comparison, Deliverables, Process)
5. ALWAYS use the established color system — no random colors
6. ALWAYS test mobile responsive when building UI
7. Dark sections get grid texture, light sections don't
8. When in doubt, match existing patterns in the codebase
