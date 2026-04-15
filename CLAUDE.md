# Unitaspro Website — Project Guide

## Overview
IT services agency website built with Next.js 14, Tailwind CSS, Framer Motion, and Sanity CMS for blog.
Deployed on Vercel. Route groups: `(site)` for public pages, `studio` for Sanity admin.

## Design System

### Colors
- Dark sections: `#0A0F1E`, gradient `linear-gradient(135deg, #0A0F1E, #1a2d6e)`
- Light sections: `white`, `#F8F9FC`, `#F1F3F8`
- Blue accent: `#2563EB`
- Feature colors: Blue `#2563EB`, Purple `#7C3AED`, Green `#059669`, Amber `#D97706`
- Text: `#0D0D1A` (dark), `#6B7180` (gray), `#9CA3AF` (light)

### Typography
- Font: Plus Jakarta Sans
- Headings: `heading-xl` class, `letter-spacing: -0.03em`, `line-height: 1.15`
- Section eyebrow: blue dot (`w-1.5 h-1.5 rounded-sm bg-[#2563EB]`) + gray label

### Section Patterns
- Always add eyebrow label above headings
- Dark sections use grid texture: `rgba(255,255,255,0.03)` lines at 48px
- Light sections alternate between `white` and `#F8F9FC`
- CTAs: dark gradient bg with grid texture, industry icon + label + heading + buttons

### Stats (global)
- 150+ Projects Delivered
- 95+ Happy Clients
- 97% Client Satisfaction
- 8+ Years of Experience

### Tech Logos (13)
React Native, Node.js, TypeScript, PostgreSQL, Firebase, Redis, AWS, Docker, Google Cloud, MongoDB, Flutter, Figma, GitHub

## Page Architecture

### Industry Pages (`IndustryPageTemplate.tsx`)
Flow: Hero → Stats → Panels (dark tabbed) → CTA → Use Cases → Before/After → CTA → Features → FAQ

**Panels section**: Dark bg, underline tabs, phone mockup left + 2-col feature grid right
**Before/After**: "Without Unitaspro" gray card + "With Unitaspro" blue gradient card, eyebrow "Why Custom?"
**Removed**: Problem & Solution, Comparison table, Deliverables, Process steps, Tech logos

All 8 industries have: heroHighlights, panels, techLogos, useCases, deliverables, comparison, beforeAfter, features, faqs

### Service Pages
4 services: Web Design, Software Dev, Mobile App, Digital Marketing
Tech stack section: Design B — gradient bg, floating bouncing icons (CSS keyframes), pill badges in 2 rows (`max-w-3xl`)

### Navbar
- Services dropdown: single column, 320px, icon left (accent color) + title/desc + ↗
- Industries dropdown: 2 columns (no labels), 640px, same item style
- Mobile: collapsible accordion for Services & Industries
- No "Book a Call" — only "Get Free Quote" CTA
- Popup z-index: z-30 (below mobile menu z-40, below navbar z-50)

## Key Files
- `components/pages/IndustryPageTemplate.tsx` — shared template for all 8 industry pages
- `components/pages/TransportIndustryPage.tsx` (and 7 others) — industry-specific data
- `components/layout/Navbar.tsx` — navigation with dropdowns
- `components/sections/Stats.tsx` — reusable stats bar
- `components/ui/LeadPopup.tsx` — lead capture popup
- `lib/industries-data.ts` — industry listing data
- `app/globals.css` — global styles, utility classes

## Design References
- MaxelTracker (maxeltracker.com) — tech stack floating icons, before/after cards, dropdown style
- LBM Solution FoodFleet — dark tabbed panels with phone mockup
- Pinterest orbital ring — inspiration for floating tech icons
