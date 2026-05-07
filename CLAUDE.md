# Unitaspro Website — Project Guide

## Overview
IT services agency website. Next.js 14 App Router, Tailwind CSS, Framer Motion, Sanity CMS (blog).
Deployed on Vercel. Route groups: `(site)` for public pages, `studio` for Sanity admin.

**Design system reference → see `DESIGN.md`** (single source of truth for colors, typography, spacing, components).

---

## Key Files

| File | Purpose |
|------|---------|
| `components/pages/IndustryPageTemplate.tsx` | Shared template for all 8 industry pages |
| `components/pages/[Industry]IndustryPage.tsx` | Industry-specific data (8 files) |
| `lib/industries-data.ts` | Industry listing data used on homepage + /industries |
| `components/layout/Navbar.tsx` | Navigation with dropdowns |
| `components/sections/Stats.tsx` | Reusable stats bar (4 global stats) |
| `components/ui/LeadPopup.tsx` | Lead capture popup |
| `lib/metadata.ts` | `buildMetadata()` factory — all pages use this |
| `app/globals.css` | Global styles and utility classes |

---

## Page Architecture

### Industry Pages
Template: `IndustryPageTemplate.tsx`
Flow: **Hero → Stats → Panels → Features → Use Cases → Before/After → CTA → Related Services → FAQ**

Sections permanently removed (never add back): Problem & Solution, Comparison table, Deliverables, Process steps, Tech logos

### Service Pages
4 services: Web Design, Software Dev, Mobile App, Digital Marketing.
Tech stack section uses floating bouncing CSS keyframe icons with pill badges.

### Navbar
- Services dropdown: single column, 320px
- Industries dropdown: 2 columns, 640px
- Mobile: collapsible accordion
- CTA: "Get Free Quote" only — no "Book a Call"
- z-index: popup z-30, mobile menu z-40, navbar z-50

---

## Rules — Read Before Every Task

### 1. Scope discipline
**If asked to change only one thing (e.g. colors, copy, spacing), change ONLY that thing.**
Do not touch layout, JSX structure, className order, or unrelated code.
After making changes, run `git diff` mentally — if lines changed go beyond the requested scope, revert the extras.

### 2. Color-only tasks
When the task is to change colors: edit only the color values inside inline `style={{}}` props or data array color fields.
Do not restructure JSX, rename components, alter spacing, or change hover logic.

### 3. Current color system — monochrome feature icons
Feature icon colors across the site are **monochrome**: `color: "#374151"`, `bg: "#F1F3F8"`.
The old cycling system (blue `#2563EB` / purple `#7C3AED` / green `#059669` / amber `#D97706`) was removed.
Do not reintroduce the old colors anywhere.

### 4. Banned colors (never use in inline styles or data)
`#059669`, `#D97706`, `#7C3AED`, `#E11D48`, `#0891B2`, `#EA580C`, `#4F46E5`, `#DC2626`
and their background pairs: `#ECFDF5`, `#FFFBEB`, `#F5F3FF`, `#FFF1F2`, `#ECFEFF`, `#FFF7ED`, `#EEF2FF`, `#EFF6FF`

### 5. Banned words in copy
`bespoke`, `world-class`, `turnkey`, `cutting-edge`, `synergy`, `disruptive`, `disruption`, `seamless`, `innovative`, `robust`, `comprehensive`

### 6. Stats are locked — never change
- 150+ Projects Delivered
- 95+ Happy Clients
- 97% Client Satisfaction
- 8+ Years of Experience

### 7. Do not add back removed sections
The industry page sections listed under "permanently removed" above were removed deliberately after user review. Never add them back.

### 8. Verify browser after any visual change
After color or layout changes, run a color audit in the browser using the banned color list above to confirm no violations remain.
