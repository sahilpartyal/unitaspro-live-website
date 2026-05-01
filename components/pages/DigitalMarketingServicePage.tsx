"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle,
  TrendingUp, Search, Target, BarChart3, Mail, Share2,
  Layers, RefreshCw, DollarSign, HeadphonesIcon, Zap, Globe2,
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
  { icon: TrendingUp, title: "Revenue-Focused",  desc: "We ignore vanity metrics to focus on the only thing that matters: finding people who actually buy from you.", color: "#D97706" },
  { icon: Globe2,     title: "Multi-Channel",     desc: "We pull your search and social together into one simple plan, so you're seen everywhere that counts.",         color: "#2563EB" },
  { icon: BarChart3,  title: "Transparent ROI",   desc: "No jargon or messy charts. Just a clear monthly update on what you spent and what it brought back.",          color: "#059669" },
];

const TECH_LOGOS = [
  { name: "Google Ads",      url: "https://cdn.simpleicons.org/googleads/4285F4" },
  { name: "Meta",            url: "https://cdn.simpleicons.org/meta/0082FB" },
  { name: "Google Analytics",url: "https://cdn.simpleicons.org/googleanalytics/E37400" },
  { name: "Search Console",  url: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
  { name: "Semrush",         url: "https://cdn.simpleicons.org/semrush/FF642D" },
  { name: "Ahrefs",          url: "https://cdn.simpleicons.org/googleanalytics/E37400" },
  { name: "Mailchimp",       url: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
  { name: "HubSpot",         url: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "Hotjar",          url: "https://cdn.simpleicons.org/hotjar/FD3A5C" },
  { name: "Figma",           url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Looker",          url: "https://cdn.simpleicons.org/googleanalytics/4285F4" },
  { name: "Shopify",         url: "https://cdn.simpleicons.org/shopify/7AB55C" },
];

const DIFFERENTIATORS = [
  { Icon: CheckCircle2,   color: "#D97706", bg: "#FFFBEB", title: "Strategy before spending",       desc: "We establish KPIs and a full-channel roadmap before a single rupee goes to ads." },
  { Icon: HeadphonesIcon, color: "#7C3AED", bg: "#F5F3FF", title: "Dedicated account manager",      desc: "A senior strategist owns your account—your single point of contact for every campaign question." },
  { Icon: DollarSign,     color: "#2563EB", bg: "#EFF6FF", title: "No long-term lock-in",           desc: "Month-to-month retainers after 90 days. We earn your business through results every single month." },
  { Icon: Zap,            color: "#059669", bg: "#ECFDF5", title: "Results in 2–4 weeks",           desc: "Paid campaigns deliver measurable lead data within 2–4 weeks, not months of waiting for results." },
];

const PROBLEMS = [
  {
    problem:  "Your ad spend is a black hole.",
    solution: "We track every rupee to real outcomes. You get a monthly report in plain English covering your cost per lead and ROAS.",
  },
  {
    problem:  "Visitors arrive, then they leave.",
    solution: "Unitaspro builds CRO-optimized pages that stop the \"window shopping\" and systematically improve your conversion rate.",
  },
  {
    problem:  "Competitors are winning the search.",
    solution: "We use Technical SEO to answer the exact keywords your buyers use, building a presence that compounds over time.",
  },
  {
    problem:  "Your social posts are invisible.",
    solution: "We skip the shouting and use paid amplification to make sure your content finds an audience that actually buys.",
  },
  {
    problem:  "You're tired of \"vanity metrics.\"",
    solution: "We refuse to report empty likes. Every update is tied to leads generated and the actual cost of winning a customer.",
  },
];

const SERVICES = [
  { Icon: Search,      title: "Search Engine Optimization",       desc: "We use technical SEO and content to build rankings that actually last and grow.",                                         color: "#D97706", bg: "#FFFBEB" },
  { Icon: Globe2,      title: "LinkedIn Advertising",             desc: "Direct B2B lead generation targeting the exact decision-makers you need to reach.",                                       color: "#059669", bg: "#ECFDF5" },
  { Icon: Mail,        title: "Email Marketing",                  desc: "Simple, effective campaigns that keep leads moving and bring customers back for more.",                                    color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Target,      title: "Google Ads (Search & Display)",    desc: "High-intent campaigns that put you in front of buyers the moment they search.",                                           color: "#2563EB", bg: "#EFF6FF" },
  { Icon: TrendingUp,  title: "Content Marketing",                desc: "Blog posts and resources that rank on Google to build real industry authority.",                                          color: "#D97706", bg: "#FFFBEB" },
  { Icon: Layers,      title: "Local SEO",                        desc: "Optimize your Google Profile and citations to dominate local searches in your area.",                                     color: "#059669", bg: "#ECFDF5" },
  { Icon: Share2,      title: "Meta Ads (Facebook & Instagram)",  desc: "Targeted campaigns that drive awareness, leads, and retargeting across all Meta platforms.",                              color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: BarChart3,   title: "Conversion Rate Optimization",     desc: "Using A/B testing and heatmaps to turn more of your visitors into customers.",                                            color: "#2563EB", bg: "#EFF6FF" },
  { Icon: RefreshCw,   title: "Monthly Performance Reports",      desc: "Clear monthly updates on what we spent, what you earned, and what's next.",                                              color: "#D97706", bg: "#FFFBEB" },
];

const PROCESS = [
  { num: "01", Icon: PhoneCall, title: "Discovery Call",  desc: "A free 30-minute consultation. We listen to your goals and map out a practical strategy. No sales pressure, no jargon — just an honest conversation.", color: "#2563EB", bg: "#EFF6FF" },
  { num: "02", Icon: FileText,  title: "Proposal & Plan", desc: "Within 48 hours, you'll receive a full scope of work, fixed pricing, and a clear timeline. We refine the details until you are 100% confident.",      color: "#7C3AED", bg: "#F5F3FF" },
  { num: "03", Icon: Layers,    title: "Design & Build",  desc: "Transparent weekly updates. We build in sprints with regular demos, so you see the product take shape in real-time. No surprises at the finish line.", color: "#059669", bg: "#ECFDF5" },
  { num: "04", Icon: Rocket,    title: "Launch & Grow",   desc: "Full technical deployment. We handle the go-live process, optimize for peak speed, and provide 30 days of dedicated support to ensure total stability.", color: "#D97706", bg: "#FFFBEB" },
];

const FAQS = [
  {
    q: "Why Should I Invest In Marketing Instead Of Sales?",
    a: "Marketing creates the demand; sales harvest it. Good marketing makes your sales team's job ten times easier by bringing in leads who are already convinced you're the expert.",
  },
  {
    q: "How Do You Determine The Right Budget For My Brand?",
    a: "We don't guess. We look at your profit margins and your revenue goals, then work backward to find the exact spend required to acquire a customer profitably.",
  },
  {
    q: "What Is The Biggest Mistake Most Businesses Make Online?",
    a: "Chasing \"Data.\" Businesses spend thousands on \"likes\" and \"followers\" that don't convert. We focus on intent by targeting people who are actually looking to spend money.",
  },
  {
    q: "How Do You Stay Ahead Of Algorithm Changes?",
    a: "We don't chase the algorithm; we focus on the user. Platforms like Google and Meta change their rules constantly, but they always reward high-quality content and a seamless user experience.",
  },
  {
    q: "Is SEO Still Relevant With The Rise Of AI?",
    a: "More than ever. AI search engines still pull from authoritative sources. If you aren't an established authority in your niche, AI tools won't recommend you. We build that authority.",
  },
  {
    q: "Why Do I Need A \"Full-Funnel\" Strategy?",
    a: "Because people rarely buy the first time they see an ad. You need a strategy that introduces you (Top), educates them (Middle), and converts them (Bottom). Anything less is just burning cash.",
  },
  {
    q: "How Often Will I See Reports On My Performance?",
    a: "You shouldn't have to wait for a report to see your data. We provide a 24/7 live dashboard, plus a monthly deep-dive to discuss strategy and next steps.",
  },
  {
    q: "What Happens If A Campaign Doesn't Perform?",
    a: "We turn to a new strategy. Digital marketing is about testing and refining. If the data shows a channel isn't working, we don't keep spending — we move the budget to where the results are.",
  },
];


/* -------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------- */
export default function DigitalMarketingServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      {/* -------------------------------------------------
          S1  HERO - Hyperline style with abstract pattern
      */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-[13rem] lg:pb-12">
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
              Don't Just Get More Traffic. Get The Right Attention.
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline - large, Hyperline style light/bold */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Let&apos;s Stop Wasting </span>
            <span className="font-semibold text-[#0D0D1A]">Your Budget On &ldquo;Likes.&rdquo;</span>
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
            <p className="text-sm text-[#6B7180]">The problem &amp; the fix</p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">If They Don&apos;t See You, </span>
              <span className="font-semibold text-[#0D0D1A]">You Don&apos;t Exist. Let&apos;s Change That.</span>
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              Here are the 5 biggest gaps between your brand and your audience, and the clear path we use to bridge them.
            </p>
          </motion.div>

          {/* Column headers */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 mb-3 px-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444]">
              <XCircle size={13}/> The Problem
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D97706]">
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
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5
                    group-hover:opacity-80 transition-colors duration-200" style={{ background: "#FFFBEB" }}>
                    <CheckCircle2 size={14} style={{ color: "#D97706" }}/>
                  </div>
                  <p className="text-sm text-[#6B7180] leading-relaxed">{row.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Grow my business
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <p className="text-sm text-[#9CA3AF]">Free marketing audit — no strings attached.</p>
          </motion.div>
        </div>
      </section>


      {/* -------------------------------------------------
          S3  SERVICES - Grid with arrow
      */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-t border-gray-100">
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #D97706 0%, transparent 70%)" }}/>

        <div className="container-main relative">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            Our core services
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">A complete setup </span>
              <span className="font-semibold text-[#0D0D1A]">built to get results.</span>
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
          S4  CTA - Amber gradient
      */}
      <section className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #B45309 0%, #D97706 40%, #F59E0B 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }}/>
        <div className="container-main relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-semibold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Turn your{" "}
              <span className="italic relative inline-block px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.18)", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.45)" }}>what ifs</span>
              {" "}into{" "}
              <span className="italic relative inline-block px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.18)", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.45)" }}>what&apos;s next.</span>
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              We bridge the gap between a scattered budget and a focused revenue engine. No jargon, just a clear roadmap to more.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full
                  bg-white text-[#B45309] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Talk to Our Strategist <ArrowRight size={15}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200">
                Get an Audit
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* S5+S6 - Photo + differentiators */}
      <section className="bg-[#FAFBFD] py-20 lg:py-28 border-t border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - digital marketing photo */}
            <motion.div {...fadeUp()} className="relative lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.12)] border border-gray-200/60 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&q=85&auto=format&fit=crop"
                  alt="Digital marketing strategy at Unitaspro"
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
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#FFFBEB" }}>
                  <TrendingUp size={18} style={{ color: "#D97706" }}/>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0D0D1A]">Campaign live</div>
                  <div className="text-xs text-[#9CA3AF]">First results in 2–4 weeks</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - content + differentiators */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
                Why Choose Us
              </p>
              <div className="mt-3 w-48 h-px border-t border-dashed border-gray-300 mb-6"/>

              <h2 className="mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                <span className="font-semibold" style={{ color: "#D97706" }}>Own the market,</span>
                <span className="font-semibold text-[#0D0D1A]"> don&apos;t just join it.</span>
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                In 8+ years running paid and organic campaigns for clients across India, UAE, UK, and Australia, Unitaspro has found that most budgets are wasted on traffic that was never going to convert. Unitaspro builds the systems that put you in front of buyers at the exact moment they search — high-performance strategy delivered with full accountability.
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
              className="lg:row-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-[320px]"
              style={{ background: "#FFFBEB" }}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#D97706" }}>
                  WHAT YOU CAN EXPECT
                </div>
                <h3 className="text-lg font-semibold text-[#0D0D1A] leading-snug mb-5" style={{ letterSpacing: "-0.02em" }}>
                  Marketing that pays for itself.
                </h3>
                <ul className="space-y-3">
                  {[
                    { stat: "4×",    label: "average return on ad spend across our Google Ads clients" },
                    { stat: "#1",    label: "Google ranking achieved for key commercial terms within 6 months" },
                    { stat: "100%",  label: "of clients receive plain-English ROI reports every single month" },
                  ].map((item) => (
                    <li key={item.stat} className="flex items-center gap-3 text-sm">
                      <span className="font-bold shrink-0" style={{ color: "#D97706", letterSpacing: "-0.03em" }}>{item.stat}</span>
                      <span className="text-[#6B7180]">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: "#D97706" }}>
                Get a free audit <ArrowRight size={14}/>
              </Link>
            </motion.div>

            {/* Center tall — image */}
            <motion.div {...fadeUp(0.08)}
              className="lg:row-span-2 rounded-2xl overflow-hidden min-h-[320px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format"
                alt="Digital marketing analytics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right top */}
            <motion.div {...fadeUp(0.12)} className="rounded-2xl p-6" style={{ background: "#FFFBEB" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                12+
              </div>
              <p className="text-sm text-[#6B7180]">Digital marketing channels managed — from SEO to LinkedIn to email</p>
            </motion.div>

            {/* Right second */}
            <motion.div {...fadeUp(0.16)} className="rounded-2xl p-6" style={{ background: "#FFFBEB" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                3–6 mo
              </div>
              <p className="text-sm text-[#6B7180]">Timeline to significant organic ranking improvements with SEO</p>
            </motion.div>

            {/* Bottom row — 2 stats + CTA */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl p-6" style={{ background: "#FFFBEB" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                $500
              </div>
              <p className="text-sm text-[#6B7180]">Minimum recommended monthly ad budget to get meaningful campaign data</p>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="rounded-2xl p-6" style={{ background: "#FFFBEB" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                4×
              </div>
              <p className="text-sm text-[#6B7180]">Average ROAS across all paid campaigns we&apos;ve managed in the last 12 months</p>
            </motion.div>

            {/* CTA card */}
            <motion.div {...fadeUp(0.28)}>
              <Link href="/contact"
                className="flex items-center justify-between rounded-2xl bg-[#0D0D1A] p-6 h-full
                  hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.2)] transition-all duration-200 group">
                <span className="font-semibold text-white text-lg">Start Growing</span>
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




      {/* ─── INDUSTRIES WE SERVE ─────────────────────────── */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="mb-8">
            <span className="section-label mb-4 inline-flex">Industries We Serve</span>
            <h2 className="heading-xl font-bold text-[#0D0D1A] max-w-2xl">
              Unitaspro runs digital marketing for 8 industries worldwide.
            </h2>
            <p className="text-[#6B7180] text-base mt-3 max-w-xl leading-relaxed">
              Each industry has different buyer intent, seasonality, and ad platform dynamics. Explore how Unitaspro approaches growth in your sector.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Transport & Mobility",     href: "/industries/transport"   },
              { label: "Finance & Fintech",         href: "/industries/finance"     },
              { label: "Healthcare & Wellness",     href: "/industries/healthcare"  },
              { label: "E-Commerce & Retail",       href: "/industries/ecommerce"   },
              { label: "Real Estate & Property",    href: "/industries/real-estate" },
              { label: "Hospitality & Travel",      href: "/industries/hospitality" },
              { label: "Logistics & Supply Chain",  href: "/industries/logistics"   },
              { label: "Startups & SaaS",           href: "/industries/startups"    },
            ].map((ind) => (
              <Link key={ind.href} href={ind.href}
                className="group flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200
                  hover:border-[#D97706] hover:bg-[#FFFBEB] transition-all duration-200">
                <span className="text-sm font-semibold text-[#374151] group-hover:text-[#D97706] transition-colors leading-snug">{ind.label}</span>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-[#D97706] shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          S10  FAQ - Homepage style
      */}
      <section className="section-pad bg-[#F7F8FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky panel */}
            <div className="lg:sticky lg:top-28">
              <span className="section-label mb-5 inline-flex">FAQs</span>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mb-5 leading-tight">
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
                    Unitaspro&apos;s team responds within 24 hours — no bots, just real answers.
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
