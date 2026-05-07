# Design System — Unitaspro

## Product Context
- **What this is:** IT services agency website selling custom software, mobile apps, web design, and digital marketing
- **Who it's for:** Founders, CTOs, and operations directors at SMBs (UAE, Australia, UK, USA, India)
- **Space/industry:** Custom software development agency
- **Project type:** Marketing site with service pages, industry pages, blog (Sanity CMS)

## Aesthetic Direction
- **Direction:** Refined Professional — clean, confident, trustworthy
- **Decoration level:** Intentional — grid textures on dark sections, diamond SVGs on hero backgrounds, dot grids, subtle color orbs
- **Mood:** An international client in Dubai or London should feel "these people know what they're doing" in the first 3 seconds
- **Reference site:** maxeltracker.com (floating pill navbar, dropdown style, font sizing, spacing)

## Typography
- **Font:** Plus Jakarta Sans (single font system, loaded via Google Fonts)
- **Headings:** weight 700 (bold), letter-spacing -0.02em to -0.04em, line-height 1.06 to 1.15
- **Body:** weight 400, 16px base
- **Hero heading style:** Two-tone — light gray (`font-light text-[#9CA3AF]`) + bold black (`font-bold text-[#0D0D1A]`) inline
- **Section eyebrow:** Blue dot (`w-1.5 h-1.5 rounded-sm bg-[#2563EB]`) + gray label (`text-sm text-[#6B7180]`) + dashed line on inner pages
- **Scale:**
  - H1 hero: `clamp(2.8rem, 6vw, 5rem)` / 700
  - H2 section: `clamp(1.6rem, 4vw, 3rem)` / 700 (heading-xl class)
  - H3 card: 16-20px / 700
  - Body: 16px / 400
  - Body large: 18px / 400 (hero descriptions)
  - Small: 14px / 400 (captions, labels)
  - Minimum: 12px (badges only, never body text)
- **Blacklist:** Never use font-weight 800 or 900. Never use text smaller than 12px.

## Color
- **Approach:** Restrained — navy + blue accent, minimal palette
- **Primary CTA:** #0F172A (dark navy)
- **Accent:** #2563EB (blue)
- **Feature accents:** Monochrome — `#374151` / bg `#F1F3F8` (uniform across all components)
  - The old cycling system (blue/purple/green/amber) was removed on 2026-05-05
  - Do not reintroduce per-step or per-feature color cycling
- **Text (5 colors only):**
  - Headings: #0D0D1A
  - Body dark: #374151
  - Body gray: #6B7180
  - Muted: #9CA3AF
  - Accent: #2563EB
- **Surfaces:**
  - White: #FFFFFF
  - Light gray: #F8F9FC
  - Alt light: #F1F3F8
  - Dark: #0A0F1E
  - Dark gradient: `linear-gradient(135deg, #0A0F1E, #1a2d6e)`
- **Semantic:** success #059669, warning #D97706, error #E11D48, info #2563EB
- **Dark sections:** Grid texture overlay `rgba(255,255,255,0.03)` lines at 48px

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Section padding:** `py-20 lg:py-28` (section-pad class)
- **Hero padding:** `pt-40 pb-24 lg:pt-52 lg:pb-36` (accounts for fixed navbar)
- **Inner page hero:** `pt-20 pb-12 lg:pt-32 lg:pb-14`

## Layout
- **Approach:** Grid-disciplined
- **Max content width:** max-w-7xl (1280px) via container-main class
- **Navbar max width:** max-w-6xl (1152px)
- **Grid:** 12-column on lg for blog/legal (3+9 split), 2-4 columns for cards
- **Border radius:**
  - Navbar pill: 9999px (full round)
  - Cards/dropdowns: 16px (rounded-2xl)
  - Buttons: 9999px (pill)
  - Inputs: 8px
  - Icon containers: 12px

## Navbar
- **Style:** Floating white pill, fixed position, `pt-4` from top
- **Always white** background with border-gray-200 and subtle shadow
- **Height:** 64px
- **Nav links:** 16px / semibold, no background on hover (just color change)
- **Services dropdown:** 340px, single column, divider lines between items
- **Industries dropdown:** 680px, 2-column grid, divider lines, positioned left-aligned under button
- **All dropdown icons:** Blue #2563EB (same color, not cycling)
- **Dropdown items:** 15px bold title, 14px description, blue ↗ arrow on hover
- **CTA:** "Get Free Quote" pill button with arrow circle
- **No "Book a Call"** button in navbar
- **Mobile:** Full-screen overlay, collapsible accordion for Services & Industries
- **Popup z-index:** z-30 (below mobile menu z-40, below navbar z-50)

## Buttons
- **Primary:** Dark navy pill (#0F172A) + white circle arrow, font 15px/600
- **Secondary:** White pill, gray border, font 15px/600
- **Link:** Accent blue text + arrow, no underline

## Motion
- **Approach:** Intentional — Framer Motion for entrance animations
- **fadeUp pattern:** `initial={{ opacity: 0, y: 24 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- **Easing:** [0.25, 0.46, 0.45, 0.94]
- **Duration:** 0.3-0.55s
- **Stagger:** `delay: i * 0.06` for lists
- **Tab content:** `AnimatePresence mode="wait"`
- **Floating tech icons (service pages only):** CSS @keyframes, staggered duration

## Industry Page Flow
Template: `IndustryPageTemplate.tsx`
```
Hero → Stats → Panels (tabbed, white bg) → Features → Use Cases → Before/After → CTA → Related Services → FAQ
```
**Removed sections (never add back):** Problem & Solution, Comparison table, Deliverables, Process steps, Tech logos, inline CTA between panels and use cases

**Section backgrounds (alternating):**
- Panels: bg-white
- Features: bg-[#F8F9FC]
- Use Cases: bg-white
- Before/After: bg-[#F8F9FC]
- CTA: bg-[#F8F9FC] outer + dark gradient card inside

### Panels Section
- White background, underline tabs (blue active)
- Feature cards on both sides of center mockup
- Cards: icon-left, title + description, rounded bg, border
- Phone mockup: CSS iPhone frame (dark bezels, dynamic island)
- Desktop mockup: laptop frame with hinge/base
- All icon colors: blue #2563EB (not cycling per tab)
- Circular gradient glow behind mockup

### Before/After Section
- Eyebrow: "Why Custom?"
- Two cards: "Without Unitaspro" (gray, red X icons) vs "With Unitaspro" (blue gradient, blue checkmarks)

## Service Pages
### Tech Stack Section (Design B)
- Gradient background: `#F0F2FF → #FAFBFE → #F0F2FF`
- Floating bouncing icons: CSS keyframes, opacity-40, no white backgrounds
- Center: heading + subtitle
- Pill badges: `max-w-3xl`, 2 rows, rounded-full bg-white border

## Legal Pages (Terms, Privacy)
- Inner page hero with grid + diamond decoration
- Blog-style layout: sticky left TOC sidebar (col-span-3) + full content right (col-span-9)
- All sections in DOM for SEO (hidden class toggle, not removed)

## Footer
- Dark navy background (#0A0F1E)
- Nav links: 15px, text-[#6B7180], hover white
- Bottom bar: Privacy Policy, Terms, copyright, location — all 14px text-[#9CA3AF]

## Stats (NEVER change these numbers)
```
150+ Projects Delivered
95+  Happy Clients
97%  Client Satisfaction
8+   Years of Experience
```

## Tech Logos (13 total, full color, names always visible)
React Native, Node.js, TypeScript, PostgreSQL, Firebase, Redis, AWS, Docker, Google Cloud, MongoDB, Flutter, Figma, GitHub

## SEO
- robots.ts: blocks /studio and /api/
- sitemap.ts: all static pages + industries + blog posts from Sanity
- FAQPage JSON-LD on all service and industry pages
- Organization + LocalBusiness schema globally
- OG image: /public/og-image.png (1200x630)
- All pages use buildMetadata() for consistent OG/Twitter/canonical

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-15 | Savio-style panels with feature cards | User preferred Savio layout over dark tabbed panels |
| 2026-04-15 | iPhone + laptop mockup in panels | Phone for app tabs, laptop for dashboard tabs |
| 2026-04-16 | Privacy Policy + Terms with tabbed TOC | Blog-style layout with sticky sidebar |
| 2026-04-20 | Floating pill navbar | Matches MaxelTracker reference |
| 2026-04-20 | All dropdown icons blue | User requested uniform color, not cycling |
| 2026-04-21 | Font weight 700 max (killed 900) | Lighter, more premium feel per MaxelTracker |
| 2026-04-21 | Minimum text 12px (killed 9-11px) | Readability and consistency |
| 2026-04-21 | 5 text colors only | Consolidated from 28 to reduce visual noise |
| 2026-05-04 | Removed duplicate inline CTA after panels | Two identical CTAs diluted both — one specific CTA after Before/After is stronger |
| 2026-05-04 | Moved Features before Use Cases | Features are the strongest conversion argument; burying them last lost most readers |
| 2026-05-04 | CTA now uses data.ctaHeading + data.ctaSub | Industry-specific copy replaces generic "Let's build something great together." |
| 2026-05-04 | Alternating bg-white / bg-[#F8F9FC] section rhythm | Five consecutive white sections had no visual break; now each section has breathing room |
| 2026-05-05 | All feature icon colors → monochrome (#374151 / #F1F3F8) | Per-step color cycling (blue/purple/green/amber) was visually noisy and hard to maintain consistently across 20+ pages |
