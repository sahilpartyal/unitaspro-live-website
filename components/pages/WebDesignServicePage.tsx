"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle,
  PenTool, Code2, Gauge, Search, Smartphone, ShieldCheck,
  Target, Layers, RefreshCw, DollarSign, Zap, HeadphonesIcon,
} from "lucide-react";

/* --- Animation --------------------------------------- */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay },
});

/* --- Data -------------------------------------------- */

const HERO_SERVICES = [
  { icon: PenTool, title: "Custom Design", desc: "Brand-aligned UI/UX that builds trust and converts", color: "#2563EB" },
  { icon: Code2, title: "Full-Stack Dev", desc: "Next.js & React - fast, scalable, production-grade", color: "#7C3AED" },
  { icon: Target, title: "CRO Built-In", desc: "Every page engineered for conversion from day one", color: "#059669" },
];

const SERVICES = [
  { Icon: PenTool, title: "Bespoke UI/UX Design", desc: "Custom interfaces that build trust and guide visitors toward action. No templates - every pixel is purposeful.", color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Code2, title: "Full-Stack Development", desc: "Server-rendered Next.js & React. Fast, scalable code your team can grow with for years.", color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Search, title: "SEO Architecture", desc: "Structured data, SSR, auto-sitemaps. Your content gets found from the day you launch.", color: "#059669", bg: "#ECFDF5" },
  { Icon: Target, title: "Conversion Optimisation", desc: "Strategic CTAs, A/B-ready layouts, data-driven design that turns visitors into leads.", color: "#D97706", bg: "#FFFBEB" },
  { Icon: Smartphone, title: "Mobile-First Design", desc: "Designed for thumbs first. Responsive layouts tested on 20+ real devices.", color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Gauge, title: "99+ Performance", desc: "Sub-second loads. Edge CDN, code splitting, image optimisation - all baked in.", color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: ShieldCheck, title: "Security & ADA", desc: "WCAG 2.1 compliance, SSL, security headers. Protected and inclusive from launch.", color: "#059669", bg: "#ECFDF5" },
  { Icon: Layers, title: "Landing Pages", desc: "High-converting pages for campaigns and lead capture that pay for themselves.", color: "#D97706", bg: "#FFFBEB" },
  { Icon: RefreshCw, title: "30-Day Support", desc: "Bug fixes, monitoring, and tweaks - free for 30 days after go-live.", color: "#2563EB", bg: "#EFF6FF" },
];

const FEATURES_DARK = [
  {
    title: "Automated migrations",
    desc: "We migrate your existing content, preserve SEO rankings, and rebuild everything better.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80&auto=format",
  },
  {
    title: "Real-time support",
    desc: "A named project manager on Slack or WhatsApp. Real communication, not a ticket queue.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80&auto=format",
  },
  {
    title: "Global by design",
    desc: "Edge-deployed, multi-language ready, built for clients in UAE, UK, USA, and Australia.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80&auto=format",
  },
];

const TECH_LOGOS = [
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Vercel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "WordPress", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
];

const DIFFERENTIATORS = [
  { Icon: CheckCircle2,   color: "#2563EB", bg: "#EFF6FF", title: "Senior-only team",           desc: "Every project is handled by designers and devs with 5+ years of experience. No juniors learning on your budget." },
  { Icon: HeadphonesIcon, color: "#7C3AED", bg: "#F5F3FF", title: "Dedicated project manager",  desc: "One named PM owns your project end-to-end — your single point of contact on Slack or WhatsApp." },
  { Icon: DollarSign,     color: "#059669", bg: "#ECFDF5", title: "Fixed price, zero surprises", desc: "Your quote is locked before work begins. Scope changes don't silently inflate your invoice." },
  { Icon: Zap,            color: "#D97706", bg: "#FFFBEB", title: "Global-ready by default",     desc: "Edge-deployed, multi-language ready, and built to impress clients in UAE, UK, USA, and Australia." },
];

const PROBLEMS = [
  {
    problem: "Your site takes 8+ seconds to load",
    solution: "Sub-second loads via edge CDN, code splitting, and fully optimised assets — 99+ Lighthouse, every time.",
  },
  {
    problem: "Visitors browse but never get in touch",
    solution: "CRO-engineered layouts with strategic CTAs, trust signals, and conversion-first UX built into every page.",
  },
  {
    problem: "Google can't find your business online",
    solution: "SSR, structured data, auto-sitemaps, and semantic HTML — your content ranks from launch day.",
  },
  {
    problem: "Looks broken on phones and tablets",
    solution: "Mobile-first design tested on 20+ real devices before handover — not just resized, actually built for mobile.",
  },
  {
    problem: "You can't update content without a developer",
    solution: "CMS integration (Sanity, WordPress, or Shopify) so your team edits text, images, and products without touching code.",
  },
];

const PROCESS = [
  { num: "01", Icon: Search,       title: "Discovery Call",    desc: "Free 30-minute call. We understand your goals, audience, and requirements. No jargon, no pressure.",         color: "#2563EB", bg: "#EFF6FF" },
  { num: "02", Icon: Layers,       title: "Proposal & Plan",   desc: "Detailed proposal with scope, timeline, and fixed price within 48 hours. You review, we refine.",            color: "#7C3AED", bg: "#F5F3FF" },
  { num: "03", Icon: Code2,        title: "Design & Build",    desc: "Weekly demos so you always see progress. We build iteratively — no surprises at the end.",                   color: "#059669", bg: "#ECFDF5" },
  { num: "04", Icon: Zap,          title: "Launch & Grow",     desc: "We go live, monitor performance, and provide 30 days free support. Your success is our goal.",               color: "#D97706", bg: "#FFFBEB" },
];

const FAQS = [
  { q: "How much does a website cost?", a: "Simple landing pages start at $800. Multi-page business websites with CMS run $1,500–3,500. E-commerce sites start at $3,000. We provide a fixed quote before any work begins - no hidden costs." },
  { q: "How long does it take?", a: "Most websites launch in 2–4 weeks from kickoff. Simple landing pages ship in under 2 weeks. We commit to a timeline and stick to it." },
  { q: "Can I edit content myself?", a: "Yes. We integrate a CMS (Sanity, WordPress, or Shopify) so your team can update text, images, blog posts, and products without touching code." },
  { q: "Will my website work on phones?", a: "Every site is mobile-first. We test on real devices before handover - not just resized, actually designed for mobile." },
  { q: "Do you handle hosting and domains?", a: "Yes. Vercel or Netlify hosting, domain config, SSL, and email - all included in the project cost." },
  { q: "What if I need changes after launch?", a: "30 days of free post-launch support. After that, retainers start at $200/month." },
  { q: "What makes you different from a freelancer?", a: "Freelancers disappear. We deliver custom-designed, performance-optimised sites with a dedicated PM, fixed pricing, and 30-day support. Agency quality without agency bloat." },
];


/* -------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------- */
export default function WebDesignServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>

      {/* -------------------------------------------------
          S1  HERO - Hyperline style with abstract pattern
      */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-12">
        {/* Abstract geometric pattern - right side */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
            }}/>
          {/* Scattered diamond shapes */}
          <svg viewBox="0 0 400 400" className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-[0.07]">
            {[
              { x: 200, y: 200, s: 24 }, { x: 160, y: 160, s: 18 }, { x: 240, y: 160, s: 18 },
              { x: 160, y: 240, s: 18 }, { x: 240, y: 240, s: 18 }, { x: 200, y: 130, s: 14 },
              { x: 130, y: 200, s: 14 }, { x: 270, y: 200, s: 14 }, { x: 200, y: 270, s: 14 },
              { x: 140, y: 140, s: 10 }, { x: 260, y: 140, s: 10 }, { x: 140, y: 260, s: 10 },
              { x: 260, y: 260, s: 10 }, { x: 200, y: 100, s: 8 }, { x: 100, y: 200, s: 8 },
              { x: 300, y: 200, s: 8 }, { x: 200, y: 300, s: 8 },
            ].map((d, i) => (
              <rect key={i} x={d.x - d.s/2} y={d.y - d.s/2} width={d.s} height={d.s}
                fill="#0D0D1A" rx={3}
                transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          {/* Eyebrow with dashed line */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
            className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
              Your engine for high-performance websites
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline - large, Hyperline style light/bold */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">The new standard for </span>
            <span className="font-semibold text-[#0D0D1A]">web design & development</span>
          </motion.h1>

          {/* Dual CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-24">
            <Link href="/contact" className="btn-primary group">
              Get a free quote
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <Link href="#process"
              className="inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5">
              Book a demo
            </Link>
          </motion.div>

          {/* 3-column service cards - below CTAs, separated by dashed border */}
          <div aria-hidden className="w-full h-px border-t border-dashed border-gray-300 mb-10"/>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {HERO_SERVICES.map((s) => (
              <div key={s.title} className="flex items-start gap-3 py-4 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}12` }}>
                  <s.icon size={16} style={{ color: s.color }}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-semibold text-sm text-[#0D0D1A]">{s.title}</h3>
                    <ArrowRight size={14} className="text-gray-300 shrink-0"/>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>




      {/* S2 LOGOS - Actual brand logos */}
      <section className="relative py-14 lg:py-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-px border-t border-dashed border-gray-200"/>
        <div className="container-main">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            Built with tools that power the fastest sites on the web
          </motion.p>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 items-center">
            {TECH_LOGOS.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(0.03 * i)}
                className="flex flex-col items-center gap-2 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.url} alt={t.name} width={32} height={32}
                  className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"/>
                <span className="text-[10px] font-medium text-[#9CA3AF] group-hover:text-[#374151] transition-colors hidden lg:block">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-px border-t border-dashed border-gray-200"/>
      </section>


      {/* -------------------------------------------------
          S2.5  PROBLEM & SOLUTION
      */}
      <section className="relative bg-[#FAFBFD] py-20 lg:py-28 overflow-hidden">
        {/* subtle dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #0D0D1A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}/>

        <div className="container-main relative">
          <motion.div {...fadeUp()} className="mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            <p className="text-sm text-[#6B7180]">The problem & the fix</p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">Most websites cost money. </span>
              <span className="font-semibold text-[#0D0D1A]">Yours should make it.</span>
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              Here are the 5 problems every business website has — and exactly how we fix them.
            </p>
          </motion.div>

          {/* Column headers */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 mb-3 px-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444]">
              <XCircle size={13}/> The Problem
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              <CheckCircle2 size={13}/> Our Solution
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col divide-y divide-gray-200/80 border border-gray-200/80 rounded-2xl overflow-hidden">
            {PROBLEMS.map((row, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 + i * 0.07)}
                className="grid grid-cols-1 md:grid-cols-2 group hover:bg-white transition-colors duration-200"
              >
                {/* Problem */}
                <div className="flex items-start gap-3 p-5 md:border-r border-gray-200/80">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5
                    group-hover:bg-red-100 transition-colors duration-200">
                    <XCircle size={14} className="text-red-400"/>
                  </div>
                  <p className="text-sm font-medium text-[#374151] leading-snug">{row.problem}</p>
                </div>
                {/* Solution */}
                <div className="flex items-start gap-3 p-5 bg-white/50 md:bg-transparent">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5
                    group-hover:bg-blue-100 transition-colors duration-200">
                    <CheckCircle2 size={14} className="text-[#2563EB]"/>
                  </div>
                  <p className="text-sm text-[#6B7180] leading-relaxed">{row.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Fix my website
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <p className="text-sm text-[#9CA3AF]">Free UX audit included — no strings attached.</p>
          </motion.div>
        </div>
      </section>


      {/* -------------------------------------------------
          S3  SERVICES - Grid with arrow
      */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-t border-gray-100">
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}/>

        <div className="container-main relative">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            What&apos;s included
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">Everything your website needs, </span>
              <span className="font-semibold text-[#0D0D1A]">nothing it doesn&apos;t</span>
            </h2>
            <Link href="/contact" className="text-sm font-semibold text-[#0D0D1A] flex items-center gap-1.5 shrink-0 hover:gap-2.5 transition-all">
              Get a proposal <ArrowRight size={14}/>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(0.04 + i * 0.04)}
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100
                  hover:shadow-[0_6px_24px_rgba(15,23,42,0.07)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                  group-hover:scale-110 transition-transform duration-300"
                  style={{ background: s.bg }}>
                  <s.Icon size={18} style={{ color: s.color }}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm text-[#0D0D1A]">{s.title}</h3>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-[#0D0D1A] transition-colors shrink-0"/>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* -------------------------------------------------
          S4  CTA - Vibrant purple gradient
      */}
      <section className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 40%, #A855F7 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }}/>
        <div className="container-main relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-semibold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Ready to outperform your competitors?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              Free UX audit. Fixed pricing. We&apos;ll show you exactly what to fix - no strings attached.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full
                  bg-white text-[#4F46E5] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Get My Free Audit <ArrowRight size={15}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200">
                Talk to a Strategist
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* S5+S6 - Photo + differentiators */}
      <section className="bg-[#FAFBFD] py-20 lg:py-28 border-t border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - real web design photo */}
            <motion.div {...fadeUp()} className="relative lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.12)] border border-gray-200/60 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=85&auto=format&fit=crop"
                  alt="Web design and development process at Unitaspro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* subtle overlay to keep image cohesive with site palette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/30 via-transparent to-transparent"/>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-green-600"/>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0D0D1A]">Delivered on time</div>
                  <div className="text-[11px] text-[#9CA3AF]">0 missed deadlines in 3 years</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - content + differentiators */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
                Why teams choose us
              </p>
              <div className="mt-3 w-48 h-px border-t border-dashed border-gray-300 mb-6"/>

              <h2 className="mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                <span className="font-semibold text-[#0D0D1A]">Websites that work as hard as you do</span>
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                Everything you need for a high-performing web presence: custom design, server-rendered code,
                SEO architecture, and conversion optimisation. No add-ons, no surprises.
              </p>

              {/* Key differentiators */}
              <div className="space-y-4 mb-8">
                {DIFFERENTIATORS.map((d, i) => (
                  <motion.div key={d.title} {...fadeUp(0.18 + i * 0.06)}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100
                      hover:shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: d.bg }}>
                      <d.Icon size={16} style={{ color: d.color }}/>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#0D0D1A] mb-0.5">{d.title}</div>
                      <div className="text-xs text-[#9CA3AF] leading-relaxed">{d.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/contact" className="text-sm font-semibold text-[#0D0D1A] flex items-center gap-1.5 hover:gap-2.5 transition-all">
                See how we can help <ArrowRight size={14}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* S7 RESULTS - Bento grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-main">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            By the numbers
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto">

            {/* Left tall — outcomes list */}
            <motion.div {...fadeUp()}
              className="lg:row-span-2 rounded-2xl bg-[#EFF6FF] p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">What you can expect</div>
                <h3 className="text-lg font-semibold text-[#0D0D1A] leading-snug mb-5" style={{ letterSpacing: "-0.02em" }}>
                  Websites that grow your business.
                </h3>
                <ul className="space-y-3">
                  {[
                    { stat: "+185%", label: "organic traffic growth in 6 months" },
                    { stat: "3.2x",  label: "more leads from the same traffic" },
                    { stat: "100%",  label: "fixed-price, zero scope creep" },
                  ].map((item) => (
                    <li key={item.stat} className="flex items-center gap-3 text-sm">
                      <span className="font-black text-[#2563EB] shrink-0" style={{ letterSpacing: "-0.03em" }}>{item.stat}</span>
                      <span className="text-[#6B7180]">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3 transition-all">
                Get a free quote <ArrowRight size={14}/>
              </Link>
            </motion.div>

            {/* Center tall — image */}
            <motion.div {...fadeUp(0.08)}
              className="lg:row-span-2 rounded-2xl overflow-hidden min-h-[320px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right top */}
            <motion.div {...fadeUp(0.12)} className="rounded-2xl bg-[#EFF6FF] p-6">
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                50+
              </div>
              <p className="text-sm text-[#6B7180]">Websites shipped across e-commerce, SaaS, and services</p>
            </motion.div>

            {/* Right bottom */}
            <motion.div {...fadeUp(0.16)} className="rounded-2xl bg-[#EFF6FF] p-6">
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                5 yrs
              </div>
              <p className="text-sm text-[#6B7180]">Average experience level across every developer on the team</p>
            </motion.div>

            {/* Bottom row — 2 stats + CTA */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl bg-[#EFF6FF] p-6">
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                $0
              </div>
              <p className="text-sm text-[#6B7180]">Scope creep on fixed-price projects — what you quote is what you pay</p>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="rounded-2xl bg-[#EFF6FF] p-6">
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                12+
              </div>
              <p className="text-sm text-[#6B7180]">Industries served — healthcare, retail, fintech, real estate, and more</p>
            </motion.div>

            {/* CTA card — replaced "View Case Studies" with See Our Work */}
            <motion.div {...fadeUp(0.28)}>
              <Link href="/portfolio"
                className="flex items-center justify-between rounded-2xl bg-[#0D0D1A] p-6 h-full
                  hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.2)] transition-all duration-200 group">
                <span className="font-semibold text-white text-lg">See Our Work</span>
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0
                  group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight size={18} className="text-[#0D0D1A]"/>
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>


      {/* -------------------------------------------------
          S8  PROCESS - Horizontal steps
      */}
      <section className="bg-[#F7F8FC] py-20 lg:py-28" id="process">
        <div className="container-main">
          <motion.div {...fadeUp()} className="mb-4">
            <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Process</p>
          </motion.div>

          <motion.h2 {...fadeUp(0.05)} className="max-w-xl mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            <span className="font-light text-[#9CA3AF]">From first call to </span>
            <span className="font-semibold text-[#0D0D1A]">live in 2 weeks</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden lg:block absolute top-[2.2rem] left-[calc(12.5%+2.2rem)] right-[calc(12.5%+2.2rem)] h-px z-0"
              style={{ background: "linear-gradient(to right, #E5E7EB, #C4B5FD 50%, #E5E7EB)" }}
            />
            {PROCESS.map((p, i) => (
              <motion.div key={p.num} {...fadeUp(0.06 + i * 0.08)}
                className="relative z-10 group/step">
                <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100/80
                  shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                  hover:-translate-y-1
                  transition-all duration-300 overflow-hidden">
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}99)` }}
                  />
                  {/* Subtle bg tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 20% 0%, ${p.bg} 0%, transparent 60%)` }}
                  />
                  {/* Icon + Number row */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/step:scale-110"
                      style={{ background: p.bg }}
                    >
                      <p.Icon size={20} style={{ color: p.color }}/>
                    </div>
                    <span className="text-3xl font-black tabular-nums text-gray-100 group-hover/step:text-gray-200 transition-colors select-none leading-none">
                      {p.num}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-base text-[#0D0D1A] mb-2">{p.title}</h3>
                    <p className="text-sm text-[#6B7180] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* -------------------------------------------------
          S10  FAQ - Homepage style
      */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-10 border-b border-gray-200">
            <div>
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>FAQ</p>
              <h2 className="heading-xl font-black text-[#0D0D1A]">
                Frequently asked questions
              </h2>
            </div>
            <Link href="/contact" className="btn-primary group shrink-0">
              Talk to Us
              <span className="btn-arrow"><ArrowRight size={16}/></span>
            </Link>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="border-b border-gray-200 last:border-0">
                <button
                  className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className={`font-semibold text-base leading-snug transition-colors
                    ${openFaq === i ? "text-[#0D0D1A]" : "text-[#374151] group-hover:text-[#0D0D1A]"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5 transition-all
                    ${openFaq === i
                      ? "border-[#0D0D1A] bg-[#0D0D1A] text-white"
                      : "border-gray-300 text-[#6B7180] group-hover:border-gray-500"}`}>
                    {openFaq === i ? <Minus size={14}/> : <Plus size={14}/>}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden">
                      <p className="pb-6 text-[#6B7180] text-base leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#9CA3AF]">
            Still have questions?{" "}
            <Link href="/contact" className="text-[#0D0D1A] font-semibold underline underline-offset-2 hover:no-underline">
              Send us a message
            </Link>
            {" "}- we respond within 24 hours.
          </p>
        </div>
      </section>

    </>
  );
}
