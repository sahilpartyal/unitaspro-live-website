"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle,
  PenTool, Code2, Gauge, Search, Smartphone, ShieldCheck,
  Target, Layers, RefreshCw, DollarSign, Zap, HeadphonesIcon,
  PhoneCall, FileText, Rocket, MessageSquare,
} from "lucide-react";
import ProcessSteps from "@/components/sections/ProcessSteps";

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
  { icon: Code2, title: "Full-Stack Dev", desc: "Next.js & React — fast, scalable, production-grade", color: "#7C3AED" },
  { icon: Target, title: "CRO Built-In", desc: "Every page is designed for conversion from day one", color: "#059669" },
];

const SERVICES = [
  { Icon: PenTool, title: "Bespoke UI/UX Design", desc: "Custom interfaces engineered to build trust and drive action. No templates — just intentional, purposeful design.", color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Target, title: "Conversion Optimisation", desc: "Strategic, A/B-ready layouts using data-driven design patterns to transform casual visitors into high-quality leads.", color: "#D97706", bg: "#FFFBEB" },
  { Icon: ShieldCheck, title: "Security & ADA", desc: "WCAG 2.1 compliance and SSL encryption — ensuring your digital platform is secure, inclusive, and protected.", color: "#059669", bg: "#ECFDF5" },
  { Icon: Code2, title: "Full-Stack Development", desc: "Fast, reliable websites built with Next.js and React. Clean code that scales as you grow.", color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Smartphone, title: "Mobile-First Design", desc: "Built for easy thumb-scrolling. Every layout is tested on real phones for a perfect feel.", color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Layers, title: "Landing Pages", desc: "Simple, high-impact pages made for marketing campaigns that turn visitors into leads and profit.", color: "#D97706", bg: "#FFFBEB" },
  { Icon: Search, title: "SEO Architecture", desc: "Technical SEO with SSR and structured data to ensure Google finds and ranks your business.", color: "#059669", bg: "#ECFDF5" },
  { Icon: Gauge, title: "99+ Performance", desc: "Instant load times via Edge CDN and image optimisation, built to provide a frictionless user experience.", color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: RefreshCw, title: "30-Day Support", desc: "Complimentary bug fixes, monitoring, and technical tweaks to ensure your site runs perfectly after launch.", color: "#2563EB", bg: "#EFF6FF" },
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
  { Icon: CheckCircle2,   color: "#2563EB", bg: "#EFF6FF", title: "Senior-Only Team",            desc: "Work directly with experts boasting 5+ years of experience. No juniors learning on your budget." },
  { Icon: HeadphonesIcon, color: "#7C3AED", bg: "#F5F3FF", title: "Dedicated Project Manager",   desc: "One accountable point of contact managing your project via Slack or WhatsApp from start to finish." },
  { Icon: DollarSign,     color: "#059669", bg: "#ECFDF5", title: "Fixed Price, Zero Surprises", desc: "Your investment is locked before work begins. We protect your budget against any hidden fees." },
  { Icon: Zap,            color: "#D97706", bg: "#FFFBEB", title: "Global-Ready By Default",     desc: "Edge-deployed for worldwide speed, built to meet the highest professional standards in any major market." },
];

const PROBLEMS = [
  {
    problem: "The website takes too long to load",
    solution: "We use advanced speed technology — CDNs and image optimisation — so your pages feel instant to your customers.",
  },
  {
    problem: "People visit, but they don't buy",
    solution: "We design your site with a clear customer path, using smart layouts that guide people naturally toward a sale or a phone call.",
  },
  {
    problem: "Your business is hard to find on Google",
    solution: "We build Google-ready code from day one, making it easy for search engines to read your site and rank you higher.",
  },
  {
    problem: "The site looks messy on phones",
    solution: "We use the mobile-first approach. Your site is tested on real phones and tablets to ensure it looks perfect on every screen.",
  },
  {
    problem: "You need a developer to change a simple photo",
    solution: "We connect your site to an easy-to-use dashboard. You can update your own text and images in seconds without touching any code.",
  },
];

const PROCESS = [
  { num: "01", Icon: PhoneCall, title: "Discovery Call",  desc: "A free 30-minute consultation. We listen to your goals and map out a practical strategy. No sales pressure, no jargon — just an honest conversation.", color: "#2563EB", bg: "#EFF6FF" },
  { num: "02", Icon: FileText,  title: "Proposal & Plan", desc: "Within 48 hours, you'll receive a full scope of work, fixed pricing, and a clear timeline. We refine the details until you are 100% confident.",      color: "#7C3AED", bg: "#F5F3FF" },
  { num: "03", Icon: Layers,    title: "Design & Build",  desc: "Transparent weekly updates. We build in sprints with regular demos, so you see the product take shape in real-time. No surprises at the finish line.", color: "#059669", bg: "#ECFDF5" },
  { num: "04", Icon: Rocket,    title: "Launch & Grow",   desc: "Full technical deployment. We handle the go-live process, optimize for peak speed, and provide 30 days of dedicated support to ensure total stability.", color: "#D97706", bg: "#FFFBEB" },
];

const FAQS = [
  { q: "How long does a typical project take from start to finish?", a: "Our professional experts take you from initial brief to a live, production-grade site in just 14 days." },
  { q: "Will my website be easy to manage after launch?", a: "Yes. We build on modern frameworks that allow you to update content easily without touching code. Also, every project includes a 30-day support window for bug fixes, monitoring, and minor technical tweaks." },
  { q: "Is SEO included in the development process?", a: "Absolutely. We integrate technical SEO architecture from day one so your site is search-ready at launch." },
  { q: "What is the difference between a \"site\" and a \"digital asset\"?", a: "A site just exists; an asset performs. We focus on speed, conversion logic, and technical stability." },
  { q: "Will my website work on all mobile devices?", a: "Yes. We follow a mobile-first philosophy, ensuring a perfect user experience across all screen sizes and browsers." },
  { q: "Do you handle website hosting and security?", a: "We deploy to global edge networks for maximum speed and include SSL encryption for total security." },
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
              Replacing confusion with total clarity
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline - large, Hyperline style light/bold */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Setting a higher bar for </span>
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




      {/* S2 LOGOS — Design B: gradient + pills */}
      <style>{`
        @keyframes floatUp { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
        @keyframes floatDown { 0%,100% { transform:translateY(0); } 50% { transform:translateY(12px); } }
      `}</style>
      <section className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F0F2FF 0%, #FAFBFE 50%, #F0F2FF 100%)" }}>

        {/* Floating decorative logos */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {TECH_LOGOS.slice(0, 8).map((t, i) => {
            const positions = [
              { top: "8%", left: "6%" },
              { top: "12%", right: "8%" },
              { top: "35%", left: "3%" },
              { top: "30%", right: "4%" },
              { bottom: "30%", left: "7%" },
              { bottom: "25%", right: "6%" },
              { bottom: "8%", left: "12%" },
              { bottom: "10%", right: "14%" },
            ];
            const sizes = [48, 44, 40, 52, 44, 48, 40, 44];
            const pos = positions[i];
            const size = sizes[i];
            return (
              <motion.div key={`float-${t.name}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="absolute hidden lg:flex items-center justify-center"
                style={{ ...pos, width: size, height: size, animation: `${i % 2 === 0 ? "floatUp" : "floatDown"} ${2.5 + i * 0.3}s ease-in-out infinite` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.url} alt={t.name} width={size * 0.55} height={size * 0.55} className="opacity-40"/>
              </motion.div>
            );
          })}
        </div>

        <div className="container-main relative">
          <motion.div {...fadeUp()} className="text-center max-w-lg mx-auto mb-12">
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              Built With Tools That{" "}
              <span className="text-[#2563EB]">Power the Web</span>
            </h2>
            <p className="text-sm text-[#6B7180]">
              We use production-grade, battle-tested technology — so your platform is fast, secure, and built to scale.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH_LOGOS.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(0.04 * i)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-gray-200/80
                  shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)]
                  hover:-translate-y-0.5 transition-all duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.url} alt={t.name} width={20} height={20}/>
                <span className="text-xs font-semibold text-[#374151]">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
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
              <span className="font-light text-[#9CA3AF]">Streamlining your vision into </span>
              <span className="font-semibold text-[#0D0D1A]">one powerful platform</span>
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
              Are You Ready To Discover Exactly Where Your Website Is Losing Leads?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              Get a free UX audit to see what&apos;s holding you back. We offer transparent, fixed pricing to fix the gaps. No surprises, just results.
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
                <span className="font-semibold text-[#0D0D1A]">Your Website Shouldn&apos;t Just Exist. It Should Perform</span>
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                We build fast, search-friendly websites using custom design and professional code delivered as a complete package with no hidden costs.
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


      {/* S8 PROCESS */}
      <ProcessSteps />




      {/* -------------------------------------------------
          S10  FAQ - Homepage style (2-col)
      */}
      <section className="section-pad bg-[#F7F8FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky panel */}
            <div className="lg:sticky lg:top-28">
              <span className="section-label mb-5 inline-flex">FAQ</span>
              <h2 className="heading-xl font-black text-[#0D0D1A] mb-5 leading-tight">
                Frequently asked<br />questions
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                Can&apos;t find what you&apos;re looking for? We&apos;re always happy to help directly.
              </p>

              {/* CTA card */}
              <div className="relative rounded-2xl overflow-hidden p-6"
                style={{ background: "linear-gradient(140deg,#0F172A 0%,#1e2d5a 100%)" }}>
                <div aria-hidden className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}/>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <MessageSquare size={18} className="text-white/70"/>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug mb-2" style={{ letterSpacing: "-0.02em" }}>
                    Still have questions?
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    Our team responds within 24 hours — no bots, just real answers.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F172A] text-xs font-bold hover:bg-gray-50 transition-colors group">
                    Talk to us
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="flex flex-col">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className={`border-b border-gray-200 last:border-0 ${openFaq === i ? "bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(15,23,42,0.06)] mb-2 -mx-4 px-4" : ""}`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className={`font-semibold text-[15px] leading-snug transition-colors
                      ${openFaq === i ? "text-[#0D0D1A]" : "text-[#374151] group-hover:text-[#0D0D1A]"}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
                      ${openFaq === i
                        ? "bg-[#0D0D1A] text-white"
                        : "bg-gray-100 text-[#6B7180] group-hover:bg-gray-200"}`}>
                      {openFaq === i ? <Minus size={13}/> : <Plus size={13}/>}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[#6B7180] text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
