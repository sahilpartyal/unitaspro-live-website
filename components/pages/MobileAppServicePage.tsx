"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle,
  Smartphone, Code2, Star, Bell, Wifi, CreditCard,
  Layers, RefreshCw, DollarSign, HeadphonesIcon, Zap, Search,
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
  { icon: Smartphone, title: "iOS & Android",       desc: "We use React Native to build one codebase that works perfectly on both platforms.",                                       color: "#374151" },
  { icon: Star,       title: "User-Tested Design",  desc: "Every screen is tested with real users before we code to ensure it's easy to use.",                                     color: "#374151" },
  { icon: Zap,        title: "App Store Launch",    desc: "We handle the entire submission process, including App Store Optimization and launch assets.",                           color: "#374151" },
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
  { Icon: CheckCircle2,   color: "#374151", bg: "#F1F3F8", title: "Senior-only mobile devs",         desc: "Expert engineers with 5+ years of experience. No junior developers will ever touch your project." },
  { Icon: HeadphonesIcon, color: "#374151", bg: "#F1F3F8", title: "Dedicated project manager",       desc: "A single point of contact owning your project end-to-end via Slack or WhatsApp." },
  { Icon: DollarSign,     color: "#0D0D1A", bg: "#F1F3F8", title: "Fixed price, zero surprises",     desc: "Your quote is locked before work starts. Scope changes will never silently inflate your invoice." },
  { Icon: Zap,            color: "#374151", bg: "#F1F3F8", title: "TestFlight access throughout",    desc: "Test every sprint on your own device via TestFlight (iOS) and Google Play internal testing." },
];

const PROBLEMS = [
  {
    problem:  "Frequent Crashes On Real Devices",
    solution: "We test on 20+ physical iOS and Android devices — never relying solely on simulators.",
  },
  {
    problem:  "High Abandonment After The First Open",
    solution: "UX-led engineering. We validate wireframes and user flows before writing a single line of code.",
  },
  {
    problem:  "Doubled Costs for iOS and Android",
    solution: "We use React Native or Flutter to build a high-performance codebase that serves both stores.",
  },
  {
    problem:  "Delayed Launches Due To App Store Rejections",
    solution: "We handle the full submission, from compliance and metadata to managing appeals if needed.",
  },
  {
    problem:  "Apps Breaking After Every iOS or Android Update",
    solution: "Active post-launch monitoring ensures your app stays current with every major iOS or Android release.",
  },
];

const SERVICES = [
  { Icon: Smartphone,   title: "iOS & Android Development",  desc: "One codebase, two platforms. Unitaspro builds with React Native so your app runs natively on iPhone and Android without doubling the cost.",      color: "#374151", bg: "#F1F3F8" },
  { Icon: Wifi,         title: "Offline Mode Support",       desc: "Your app works even without internet. Data syncs automatically when the connection comes back, so users are never stuck.",                 color: "#374151", bg: "#F1F3F8" },
  { Icon: Layers,       title: "Backend API Development",    desc: "We build the full backend behind your app — the server, database, and API — or connect it to systems you already use.",                   color: "#0D0D1A", bg: "#F1F3F8" },
  { Icon: Star,         title: "Custom UX Design",           desc: "Every screen is designed around how your users actually think and move. Clean, intuitive, and tested before a single line of code is written.", color: "#374151", bg: "#F1F3F8" },
  { Icon: CreditCard,   title: "Payment Integration",        desc: "Accept payments through Stripe, Apple Pay, Google Pay, or local gateways. PCI-compliant and ready to transact from day one.",             color: "#374151", bg: "#F1F3F8" },
  { Icon: Zap,          title: "App Store Submission",       desc: "We handle the full App Store and Play Store submission, including screenshots, metadata, compliance checks, and approval follow-up.",      color: "#374151", bg: "#F1F3F8" },
  { Icon: Bell,         title: "Push Notifications",         desc: "Smart, targeted push messages that bring users back at the right moment. Personalised by behaviour, not just broadcast to everyone.",      color: "#0D0D1A", bg: "#F1F3F8" },
  { Icon: Code2,        title: "Real-Time Features",         desc: "Live chat, instant updates, and real-time feeds built with WebSockets and Firebase. Fast, reliable, and scales with your user base.",      color: "#374151", bg: "#F1F3F8" },
  { Icon: RefreshCw,    title: "Post-Launch Maintenance",    desc: "We stay with you after launch. OS updates, bug fixes, and new features handled on a monthly retainer so your app never falls behind.",     color: "#374151", bg: "#F1F3F8" },
];

const PROCESS = [
  { num: "01", Icon: PhoneCall, title: "Discovery Call",  desc: "A free 30-minute consultation. We listen to your goals and map out a practical strategy. No sales pressure, no jargon — just an honest conversation.", color: "#0D0D1A", bg: "#F1F3F8" },
  { num: "02", Icon: FileText,  title: "Proposal & Plan", desc: "Within 48 hours, you'll receive a full scope of work, fixed pricing, and a clear timeline. We refine the details until you are 100% confident.",      color: "#374151", bg: "#F1F3F8" },
  { num: "03", Icon: Layers,    title: "Design & Build",  desc: "Transparent weekly updates. We build in sprints with regular demos, so you see the product take shape in real-time. No surprises at the finish line.", color: "#374151", bg: "#F1F3F8" },
  { num: "04", Icon: Rocket,    title: "Launch & Grow",   desc: "Full technical deployment. We handle the go-live process, optimize for peak speed, and provide 30 days of dedicated support to ensure total stability.", color: "#374151", bg: "#F1F3F8" },
];

const FAQS = [
  {
    q: "Will My App Work On Both iOS And Android?",
    a: "Yes. We use cross-platform frameworks like React Native or Flutter. You get one codebase that runs perfectly on both stores, cutting your development and maintenance costs in half.",
  },
  {
    q: "What If I Need To Change The Scope Mid-Project?",
    a: "We work in agile sprints. If you need to pivot or add a feature, we will discuss the impact on the timeline and budget immediately. No \"silent\" invoices or surprise charges.",
  },
  {
    q: "Can You Integrate With My Existing Software?",
    a: "Yes. Whether it's a custom CRM, a legacy database, or third-party APIs like Stripe and Twilio, we build the bridges (APIs) to make sure your data flows securely.",
  },
  {
    q: "How Do You Ensure The App Doesn't Crash?",
    a: "We don't just test on simulators. We test on a fleet of 20+ physical iOS and Android devices to ensure performance, battery life, and stability are solid in the real world.",
  },
  {
    q: "What Happens If Apple Or Google Rejects The App?",
    a: "We handle the entire submission process. If there's a rejection based on guidelines, we fix it and manage the appeal until your app is live. It's part of the service.",
  },
  {
    q: "How Do We Communicate During The Build?",
    a: "You'll have a dedicated Project Manager and a direct Slack or WhatsApp channel. No \"support tickets\" — just direct, human conversation with the people running your project.",
  },
  {
    q: "Do You Provide The Backend And Servers?",
    a: "Yes. We build the entire engine — the servers, databases, and security layers. We can host it on your infrastructure (AWS/Google Cloud) or set it up for you.",
  },
  {
    q: "How Do I Know People Will Actually Use It?",
    a: "We don't just code. We start with UX discovery to map out user flows. By solving real friction points before we build, we ensure the app is a tool users actually want to keep.",
  },
];


/* -------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------- */
export default function MobileAppServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      {/* -------------------------------------------------
          S1  HERO - Hyperline style with abstract pattern
      */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-32 lg:pt-[13rem] pb-12">
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
              Mobile Applications Are Designed To Grow
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline - large, Hyperline style light/bold */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Built For Your Users. </span>
            <span className="font-semibold text-[#0D0D1A]">Owned Entirely By You.</span>
          </motion.h1>

          {/* Dual CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-24">
            <Link href="/contact" className="btn-primary group whitespace-nowrap shrink-0">
              Get a free quote
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <Link href="#process"
              className="hidden min-[576px]:inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3.5 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5 whitespace-nowrap shrink-0">
              How we work
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
              <span className="text-[#0D0D1A]">Power the Web</span>
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
            <p className="text-sm text-[#6B7180]">The Problem &amp; The Fix</p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">If It&apos;s Hard To Use, </span>
              <span className="font-semibold text-[#0D0D1A]">They Won&apos;t Use It. It&apos;s That Simple.</span>
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              We remove the complexity that kills user engagement, ensuring your app delivers value in seconds.
            </p>
          </motion.div>

          {/* Column headers */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 mb-3 px-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444]">
              <XCircle size={13}/> The Problem
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#374151]">
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
                    <CheckCircle2 size={14} style={{ color: "#374151" }}/>
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
          style={{ background: "radial-gradient(ellipse, #374151 0%, transparent 70%)" }}/>

        <div className="container-main relative">
          <motion.p {...fadeUp()} className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
            What&apos;s included
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              <span className="font-light text-[#9CA3AF]">Apps Designed To </span>
              <span className="font-semibold text-[#0D0D1A]">Stay On The Home Screen</span>
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


      {/* S4 CTA */}
      <section className="py-10 lg:py-12 bg-[#F8F9FC]">
        <div className="container-main">
          <motion.div {...fadeUp()} className="relative overflow-hidden rounded-3xl"
            style={{ background: "linear-gradient(135deg,#0A0F1E 0%,#1a2d6e 100%)" }}>
            <div aria-hidden className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}/>
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_42%]">
              <div className="flex flex-col justify-center gap-4 px-8 py-12 lg:px-12">
                <h2 className="text-white font-semibold leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}>
                  Ready to launch your app on iOS and Android?
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Fixed price. Fixed timeline. We scope before we quote — no surprises, ever.
                </p>
                <Link href="/contact"
                  className="self-start inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full
                    bg-white text-[#0A0F1E] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-200">
                  Get a Free Quote <ArrowRight size={14}/>
                </Link>
              </div>
              <div className="relative hidden md:block min-h-[240px]">
                <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80" alt="Mobile app development" fill className="object-cover" sizes="40vw"/>
              </div>
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
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#F1F3F8" }}>
                  <CheckCircle2 size={18} style={{ color: "#374151" }}/>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0D0D1A]">App Store approved</div>
                  <div className="text-xs text-[#9CA3AF]">4.8&#9733; avg rating across our apps</div>
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
                <span className="font-semibold text-[#0D0D1A]">A Team That Listens First And Builds Second</span>
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                In 8+ years building mobile apps for clients across healthcare, logistics, transport, and e-commerce, Unitaspro has learned that the best apps come from listening first. We spend time understanding your users&apos; real workflows before writing a single line of code — fewer revisions, faster launch, and an app that actually gets used.
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
              style={{ background: "#F1F3F8" }}>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#374151" }}>
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
                      <span className="font-bold shrink-0" style={{ color: "#374151", letterSpacing: "-0.03em" }}>{item.stat}</span>
                      <span className="text-[#6B7180]">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: "#374151" }}>
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
            <motion.div {...fadeUp(0.12)} className="rounded-2xl p-6" style={{ background: "#F1F3F8" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                20+
              </div>
              <p className="text-sm text-[#6B7180]">Mobile apps shipped across healthcare, e-commerce, logistics, and SaaS</p>
            </motion.div>

            {/* Right second */}
            <motion.div {...fadeUp(0.16)} className="rounded-2xl p-6" style={{ background: "#F1F3F8" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                6 wks
              </div>
              <p className="text-sm text-[#6B7180]">Average time from signed contract to TestFlight build you can actually use</p>
            </motion.div>

            {/* Bottom row — 2 stats + CTA */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl p-6" style={{ background: "#F1F3F8" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                40%
              </div>
              <p className="text-sm text-[#6B7180]">Cost saving with cross-platform vs building separate iOS and Android apps</p>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="rounded-2xl p-6" style={{ background: "#F1F3F8" }}>
              <div className="font-bold text-[#0D0D1A] leading-none mb-2"
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


      {/* S8 PROCESS */}
      <ProcessSteps />




      {/* ─── INDUSTRIES WE SERVE ─────────────────────────── */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="mb-8">
            <span className="section-label mb-4 inline-flex">Industries We Serve</span>
            <h2 className="heading-xl font-bold text-[#0D0D1A] max-w-2xl">
              Mobile apps built for 8 industries.
            </h2>
            <p className="text-[#6B7180] text-base mt-3 max-w-xl leading-relaxed">
              From patient-facing healthcare apps to driver dispatch tools — Unitaspro has shipped mobile products in every major sector. Explore yours.
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
                  hover:border-[#374151] hover:bg-[#F1F3F8] transition-all duration-200">
                <span className="text-sm font-semibold text-[#374151] group-hover:text-[#374151] transition-colors leading-snug">{ind.label}</span>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-[#374151] shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          S10  FAQ - Homepage style (2-col)
      */}
      <section className="section-pad bg-[#F7F8FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky panel */}
            <div className="lg:sticky lg:top-28">
              <span className="section-label mb-5 inline-flex">FAQ</span>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mb-5 leading-tight">
                Frequently asked questions
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
