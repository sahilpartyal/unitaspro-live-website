"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle,
  Smartphone, Code2, Star, Bell, Wifi, CreditCard,
  Layers, RefreshCw, DollarSign, HeadphonesIcon, Zap, Search,
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
  { icon: Smartphone, title: "iOS & Android", desc: "One codebase, both platforms — up to 40% cost saving with React Native", color: "#059669" },
  { icon: Star,       title: "Beautiful UX",  desc: "Every screen user-tested before code is written — no guesswork",          color: "#7C3AED" },
  { icon: Zap,        title: "App Store Ready", desc: "End-to-end submission: screenshots, ASO, ratings strategy included",    color: "#D97706" },
];

const TECH_LOGOS = [
  { name: "React Native", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flutter",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Expo",         url: "https://cdn.simpleicons.org/expo/000000" },
  { name: "Firebase",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "TypeScript",   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Redux",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Figma",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "GitHub",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "AWS",          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Stripe",       url: "https://cdn.simpleicons.org/stripe/635BFF" },
];

const DIFFERENTIATORS = [
  { Icon: CheckCircle2,   color: "#059669", bg: "#ECFDF5", title: "Senior-only mobile devs",         desc: "Every app built by engineers with 5+ years in React Native or Flutter. No juniors on your project." },
  { Icon: HeadphonesIcon, color: "#7C3AED", bg: "#F5F3FF", title: "Dedicated project manager",       desc: "One named PM owns your project end-to-end — your single contact on Slack or WhatsApp." },
  { Icon: DollarSign,     color: "#2563EB", bg: "#EFF6FF", title: "Fixed price, zero surprises",     desc: "Quote locked before work starts. Scope changes never silently inflate your invoice." },
  { Icon: Zap,            color: "#D97706", bg: "#FFFBEB", title: "TestFlight access throughout",    desc: "Test on your own device at every sprint via TestFlight (iOS) and Play internal testing (Android)." },
];

const PROBLEMS = [
  {
    problem:  "Your app crashes on real devices",
    solution: "Tested on 20+ real iOS and Android devices before every release — not just simulators.",
  },
  {
    problem:  "Users install once, then never open it again",
    solution: "UX-first development: wireframes, user flows, and onboarding tested before a line of code is written.",
  },
  {
    problem:  "Building for iOS and Android separately doubles costs",
    solution: "React Native or Flutter: one codebase for both platforms, up to 40% cheaper with no loss in native performance.",
  },
  {
    problem:  "App Store rejections delay your launch",
    solution: "We own the full submission process — guidelines compliance, screenshots, metadata, and appeals if needed.",
  },
  {
    problem:  "The app breaks with every iOS or Android update",
    solution: "Post-launch monitoring and a retainer plan that keeps your app current with every major OS release.",
  },
];

const SERVICES = [
  { Icon: Smartphone,   title: "iOS & Android Development",  desc: "Cross-platform apps using React Native or Flutter — native performance on both platforms from one codebase.",                             color: "#059669", bg: "#ECFDF5" },
  { Icon: Star,         title: "Custom UX Design",           desc: "Every screen designed for real users. Onboarding flows, gestures, and interactions that feel effortless.",                                 color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Bell,         title: "Push Notifications",         desc: "Targeted, personalised push campaigns that bring users back — without the spam that drives uninstalls.",                                   color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Wifi,         title: "Offline Mode Support",       desc: "Apps that work without a connection and sync automatically when back online.",                                                             color: "#D97706", bg: "#FFFBEB" },
  { Icon: CreditCard,   title: "Payment Integration",        desc: "Stripe, Apple Pay, Google Pay, and regional gateways — secure, PCI-compliant from launch.",                                               color: "#059669", bg: "#ECFDF5" },
  { Icon: Code2,        title: "Real-Time Features",         desc: "Live chat, activity feeds, and real-time data using WebSockets and Firebase — fast and reliable.",                                        color: "#7C3AED", bg: "#F5F3FF" },
  { Icon: Layers,       title: "Backend API Development",    desc: "We build the server, database, and API your app needs — or connect to your existing backend.",                                            color: "#2563EB", bg: "#EFF6FF" },
  { Icon: Zap,          title: "App Store Submission",       desc: "End-to-end App Store and Play Store submission including ASO, screenshots, and compliance review.",                                       color: "#D97706", bg: "#FFFBEB" },
  { Icon: RefreshCw,    title: "Post-Launch Maintenance",    desc: "OS update compatibility, bug fixes, and feature additions — retainers from $300/month after launch.",                                     color: "#059669", bg: "#ECFDF5" },
];

const PROCESS = [
  { num: "01", Icon: Search, color: "#059669", bg: "#ECFDF5", title: "Discovery Call",     desc: "Free 30-min call. We understand your users, core features, and business goals before anything is designed." },
  { num: "02", Icon: Star,   color: "#7C3AED", bg: "#F5F3FF", title: "UX & Design",        desc: "Wireframes and high-fidelity screens for every flow — reviewed and refined until the experience feels right." },
  { num: "03", Icon: Code2,  color: "#2563EB", bg: "#EFF6FF", title: "Build & Test",       desc: "Cross-platform development with weekly TestFlight builds. Tested on real devices throughout." },
  { num: "04", Icon: Zap,    color: "#D97706", bg: "#FFFBEB", title: "App Store Launch",   desc: "End-to-end App Store and Google Play submission, plus post-launch monitoring and 30-day support." },
];

const FAQS = [
  {
    q: "Do you build for both iOS and Android?",
    a: "Yes. We use React Native or Flutter to build one codebase that works on both platforms — cutting development cost by up to 40% without sacrificing quality or native performance.",
  },
  {
    q: "Can I see the app during development?",
    a: "Yes. We share builds via TestFlight (iOS) and Google Play internal testing throughout development so you can test on your own device and give feedback at every sprint.",
  },
  {
    q: "How long does app development take?",
    a: "A typical app takes 6–10 weeks depending on complexity. Simple utility apps ship in 4–6 weeks; feature-rich apps with payments, real-time features, and custom backends take longer. We provide a detailed timeline upfront.",
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes, completely. App Store and Google Play submission — including screenshots, descriptions, app icons, and ASO metadata — is included in every project.",
  },
  {
    q: "What about updates after launch?",
    a: "We offer post-launch maintenance retainers from $300/month covering OS update compatibility, bug fixes, feature additions, and performance monitoring. We recommend at least a 3-month retainer after launch.",
  },
];


/* -------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------- */
export default function MobileAppServicePage() {
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
              Your partner for mobile apps that grow
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline - large, Hyperline style light/bold */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Mobile apps users </span>
            <span className="font-semibold text-[#0D0D1A]">actually come back to</span>
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
            Built with tools that power the best mobile apps on the market
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
            <p className="text-sm text-[#6B7180]">The problem &amp; the fix</p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">Most apps get installed once. </span>
              <span className="font-semibold text-[#0D0D1A]">Yours should keep them coming back.</span>
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              Here are the 5 problems every mobile app project has — and exactly how we fix them.
            </p>
          </motion.div>

          {/* Column headers */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 mb-3 px-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444]">
              <XCircle size={13}/> The Problem
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#059669]">
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
                    group-hover:opacity-90 transition-colors duration-200" style={{ background: "#D1FAE5" }}>
                    <CheckCircle2 size={14} style={{ color: "#059669" }}/>
                  </div>
                  <p className="text-sm text-[#6B7180] leading-relaxed">{row.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="btn-primary group">
              Build my app
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <p className="text-sm text-[#9CA3AF]">Free 30-min scoping call — no commitment required.</p>
          </motion.div>
        </div>
      </section>


      {/* -------------------------------------------------
          S3  SERVICES - Grid with arrow
      */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-t border-gray-100">
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #059669 0%, transparent 70%)" }}/>

        <div className="container-main relative">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            What&apos;s included
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">Everything your app needs, </span>
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
          S4  CTA - Vibrant green gradient
      */}
      <section className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #059669 0%, #047857 40%, #065F46 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }}/>
        <div className="container-main relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-semibold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Ready to build an app your users actually love?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              Fixed pricing. TestFlight access throughout. We&apos;ll scope your app in 48 hours — no strings attached.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full
                  bg-white text-[#059669] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Get a Free Scope <ArrowRight size={15}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200">
                Talk to a Mobile Dev
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* S5+S6 - Photo + differentiators */}
      <section className="bg-[#FAFBFD] py-20 lg:py-28 border-t border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - mobile app photo */}
            <motion.div {...fadeUp()} className="relative lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.12)] border border-gray-200/60 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85&auto=format&fit=crop"
                  alt="Mobile app development at Unitaspro"
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
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#ECFDF5" }}>
                  <CheckCircle2 size={18} style={{ color: "#059669" }}/>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0D0D1A]">App Store approved</div>
                  <div className="text-[11px] text-[#9CA3AF]">4.8&#9733; avg rating across our apps</div>
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
                <span className="font-semibold text-[#0D0D1A]">Apps built around your users, not just your feature list</span>
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                We don&apos;t just code what&apos;s on the spec sheet. Every screen is designed around how real users think and move — resulting in apps with higher retention, better reviews, and users who actually stay.
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
              style={{ background: "#ECFDF5" }}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#059669" }}>
                  WHAT YOU CAN EXPECT
                </div>
                <h3 className="text-lg font-semibold text-[#0D0D1A] leading-snug mb-5" style={{ letterSpacing: "-0.02em" }}>
                  An app your users open every day.
                </h3>
                <ul className="space-y-3">
                  {[
                    { stat: "10k+",  label: "downloads in the first quarter for our last healthcare app" },
                    { stat: "4.8\u2605",  label: "average App Store rating across all apps we\u2019ve shipped" },
                    { stat: "100%",  label: "App Store & Play Store approved on first submission" },
                  ].map((item) => (
                    <li key={item.stat} className="flex items-center gap-3 text-sm">
                      <span className="font-black shrink-0" style={{ color: "#059669", letterSpacing: "-0.03em" }}>{item.stat}</span>
                      <span className="text-[#6B7180]">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: "#059669" }}>
                Get a free scope <ArrowRight size={14}/>
              </Link>
            </motion.div>

            {/* Center tall — image */}
            <motion.div {...fadeUp(0.08)}
              className="lg:row-span-2 rounded-2xl overflow-hidden min-h-[320px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80&auto=format"
                alt="Mobile apps on devices"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right top */}
            <motion.div {...fadeUp(0.12)} className="rounded-2xl p-6" style={{ background: "#ECFDF5" }}>
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                20+
              </div>
              <p className="text-sm text-[#6B7180]">Mobile apps shipped across healthcare, e-commerce, logistics, and SaaS</p>
            </motion.div>

            {/* Right second */}
            <motion.div {...fadeUp(0.16)} className="rounded-2xl p-6" style={{ background: "#ECFDF5" }}>
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                6 wks
              </div>
              <p className="text-sm text-[#6B7180]">Average time from signed contract to TestFlight build you can actually use</p>
            </motion.div>

            {/* Bottom row — 2 stats + CTA */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl p-6" style={{ background: "#ECFDF5" }}>
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                40%
              </div>
              <p className="text-sm text-[#6B7180]">Cost saving with cross-platform vs building separate iOS and Android apps</p>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="rounded-2xl p-6" style={{ background: "#ECFDF5" }}>
              <div className="font-black text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                2 plat
              </div>
              <p className="text-sm text-[#6B7180]">iOS and Android delivered from one codebase — no quality compromise</p>
            </motion.div>

            {/* CTA card */}
            <motion.div {...fadeUp(0.28)}>
              <Link href="/contact"
                className="flex items-center justify-between rounded-2xl bg-[#0D0D1A] p-6 h-full
                  hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.2)] transition-all duration-200 group">
                <span className="font-semibold text-white text-lg">Start Your App</span>
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
            <span className="font-semibold text-[#0D0D1A]">App Store in 6 weeks</span>
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
              Get a free quote
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
