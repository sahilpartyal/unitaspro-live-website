# Design Fix Tasks (Steve Schoger Review)

## Priority 1 — Shadows (20 min)
Replace all one-off shadow values with design tokens `shadow-card` / `shadow-elevated`.

Files to update:
- `components/layout/Navbar.tsx` — remove `shadow-[0_2px_16px_rgba(15,23,42,0.08)]` and `shadow-[0_2px_16px_rgba(15,23,42,0.06)]`, use tokens
- `components/pages/IndustriesPageClient.tsx` — card hover shadow → `hover:shadow-elevated`
- `app/(site)/services/page.tsx` — service card hover shadow → `hover:shadow-elevated`

## Priority 2 — Hero body text contrast (2 min)
`components/sections/Hero.tsx:122`
Change `text-white/55` → `text-white/70` on the paragraph below the h1.

## Priority 3 — Amber stars (5 min)
`components/sections/Hero.tsx:167`
Stars are `fill-amber-400 text-amber-400` — only warm color on the whole site.
Decision needed: change to `fill-white/60 text-white/60` (monochrome), OR use amber consistently everywhere ratings appear.

## Priority 4 — Card border + shadow doubling
On hover, cards have both a border AND a box shadow — they fight each other.
Fix: add `hover:border-transparent` to cards that already have a hover shadow.

Files:
- `components/pages/IndustriesPageClient.tsx` — industry cards
- `app/(site)/services/page.tsx` — service cards

## Priority 5 — Eyebrow label consistency
Two different eyebrow styles across pages — standardise to one.

- Option A: use `.section-label` utility everywhere
- Option B: keep the dot + plain text style everywhere

Pages using the dot style (non-standard):
- `components/pages/IndustriesPageClient.tsx:46`
- `components/pages/AboutPageClient.tsx` (verify)

## Priority 6 — Hero h1 visual hierarchy
All 3 lines same font size — line 3 ("Built to Scale.") should visually dominate.
`components/sections/Hero.tsx:74,84,106`
Bump line 3 `clamp(36px, 5.5vw, 76px)` → `clamp(40px, 6vw, 86px)`.
