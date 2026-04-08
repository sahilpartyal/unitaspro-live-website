"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Search, Zap, Star, CheckCircle } from "lucide-react";

/* ─── Mockups ───────────────────────────────────────────── */

function WebDesignMockup() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_56px_rgba(15,23,42,0.16)] border border-gray-100">
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F7F7F8] border-b border-gray-100">
          <div className="flex gap-1.5 shrink-0">
            {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }}/>)}
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[9px] text-gray-400 flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
            yourclient.com
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#EEF2FF] to-[#EFF6FF] px-4 pt-4 pb-3">
          <div className="h-4 w-36 bg-gray-900 rounded mb-1.5"/>
          <div className="h-2.5 w-28 bg-gray-600 rounded mb-1"/>
          <div className="h-2.5 w-20 bg-gray-600 rounded mb-3"/>
          <div className="flex gap-1.5">
            <div className="h-7 w-20 bg-blue-600 rounded-full"/>
            <div className="h-7 w-16 bg-white border border-gray-200 rounded-full"/>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white">
          {[{v:"340%",l:"ROI"},{v:"98",l:"Speed"},{v:"4.9★",l:"Rating"}].map(s => (
            <div key={s.l} className="py-2 text-center">
              <div className="text-[10px] font-black text-gray-800">{s.v}</div>
              <div className="text-[8px] text-gray-400">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-3 bg-white border-t border-gray-50">
          {[{bg:"#EFF6FF",ic:"#2563EB"},{bg:"#F5F3FF",ic:"#7C3AED"},{bg:"#ECFDF5",ic:"#059669"}].map((c,i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: c.bg }}>
              <div className="w-4 h-4 rounded mb-1.5 flex items-center justify-center" style={{ background: c.ic }}>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-sm"/>
              </div>
              <div className="h-1.5 rounded mb-1" style={{ background: `${c.ic}30`, width:"80%" }}/>
              <div className="h-1 bg-white/60 rounded w-3/4"/>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-[0_6px_20px_rgba(15,23,42,0.12)] border border-gray-100 px-2.5 py-1.5 flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
          <Zap size={10} className="text-white"/>
        </div>
        <div>
          <div className="text-[8px] text-gray-400">PageSpeed</div>
          <div className="text-[11px] font-black text-gray-900">98 / 100</div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-[0_6px_20px_rgba(15,23,42,0.10)] border border-gray-100 px-2.5 py-1.5 flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center">
          <TrendingUp size={10} className="text-blue-600"/>
        </div>
        <div>
          <div className="text-[8px] text-gray-400">Conversion</div>
          <div className="text-[11px] font-black text-gray-900">+340%</div>
        </div>
      </div>
    </div>
  );
}

function SoftwareMockup() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      <div className="bg-[#1E1E2E] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
        <div className="flex items-end gap-0 px-3 pt-2.5">
          {["api.ts","schema.sql","routes.ts"].map((tab,i) => (
            <div key={tab} className={`px-2.5 py-1 text-[10px] rounded-t-md font-mono ${i===0?"bg-[#2A2A3E] text-white":"text-gray-500"}`}>{tab}</div>
          ))}
        </div>
        <div className="bg-[#2A2A3E] px-3 py-3 font-mono text-[10px] leading-6">
          <div><span className="text-purple-400">export async function </span><span className="text-blue-300">getUsers</span><span className="text-white">() {"{"}</span></div>
          <div className="pl-3"><span className="text-purple-400">const </span><span className="text-blue-200">users </span><span className="text-white">= await </span><span className="text-yellow-300">db</span><span className="text-white">.</span><span className="text-blue-300">query</span><span className="text-white">(</span></div>
          <div className="pl-6"><span className="text-green-300">`SELECT * FROM users WHERE active = true`</span></div>
          <div className="pl-3"><span className="text-white">);</span></div>
          <div className="pl-3"><span className="text-purple-400">return </span><span className="text-white">users.rows;</span></div>
          <div><span className="text-white">{"}"}</span></div>
        </div>
        <div className="bg-[#0D0D1A] px-3 py-2.5 font-mono text-[10px] space-y-1">
          <div className="text-green-400">✓ Server running on :8080</div>
          <div className="text-blue-400">✓ PostgreSQL connected (pool: 20)</div>
          <div className="text-yellow-300">⚡ 142 tests passing · 0 failing</div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-500">$</span>
            <span className="text-gray-400">npm run deploy</span>
            <span className="animate-pulse text-white">█</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center shrink-0">
          <span className="text-orange-500 font-black text-[8px]">AWS</span>
        </div>
        <div>
          <div className="text-[8px] text-gray-400">Deployed to</div>
          <div className="text-[11px] font-black text-gray-900">Production ✓</div>
        </div>
      </div>
    </div>
  );
}

function MobileAppMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto flex justify-center items-start gap-3">
      <div className="w-[140px] bg-[#0F172A] rounded-[2rem] border-[4px] border-slate-700 overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.45)] shrink-0">
        <div className="flex justify-center pt-1.5 pb-1"><div className="w-10 h-2.5 bg-black rounded-full"/></div>
        <div className="px-2.5 pb-4">
          <div className="text-white text-[9px] font-bold mb-2">Good morning, Alex 👋</div>
          <div className="grid grid-cols-2 gap-1 mb-2">
            {[{l:"Revenue",v:"$12.4k",c:"#60A5FA"},{l:"Orders",v:"284",c:"#A78BFA"},{l:"Users",v:"1.2k",c:"#34D399"},{l:"Rating",v:"4.9★",c:"#FBBF24"}].map(s => (
              <div key={s.l} className="rounded-lg p-1.5" style={{ background:"rgba(255,255,255,0.07)" }}>
                <div className="text-[7px] text-white/40">{s.l}</div>
                <div className="text-[10px] font-black" style={{ color: s.c }}>{s.v}</div>
              </div>
            ))}
          </div>
          {[1,2,3].map(n => (
            <div key={n} className="flex items-center gap-1.5 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-white/10 shrink-0"/>
              <div className="flex-1"><div className="h-1 bg-white/15 rounded mb-0.5"/><div className="h-0.5 bg-white/08 rounded w-3/4"/></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[140px] mt-10 bg-white rounded-[2rem] border-[4px] border-gray-200 overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.15)] shrink-0">
        <div className="flex justify-center pt-1.5 pb-1"><div className="w-10 h-2.5 bg-black rounded-full"/></div>
        <div className="px-2.5 pb-4">
          <div className="text-gray-900 text-[9px] font-bold mb-2">Nearby Services</div>
          {[{bg:"#EFF6FF",ic:"#2563EB"},{bg:"#F5F3FF",ic:"#7C3AED"},{bg:"#ECFDF5",ic:"#059669"},{bg:"#FFFBEB",ic:"#D97706"}].map((c,i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-lg p-1.5 mb-1.5" style={{ background: c.bg }}>
              <div className="w-5 h-5 rounded-md shrink-0" style={{ background: c.ic }}/>
              <div className="flex-1"><div className="h-1.5 bg-white/80 rounded mb-0.5"/><div className="h-1 bg-white/60 rounded w-2/3"/></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex items-center gap-1.5">
        <CheckCircle size={11} className="text-green-500 shrink-0"/>
        <div><div className="text-[8px] text-gray-400">App Store</div><div className="text-[10px] font-black text-gray-900">Live ✓</div></div>
      </div>
    </div>
  );
}

function MarketingMockup() {
  const bars = [35,52,41,68,55,78,65,90,75,110,95,130];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_56px_rgba(15,23,42,0.12)] border border-gray-100">
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-gray-100">
          <div><div className="text-[11px] font-bold text-gray-900">Campaign Dashboard</div><div className="text-[9px] text-gray-400">March 2026</div></div>
          <div className="flex items-center gap-1 text-[9px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full"><TrendingUp size={9}/> +34%</div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          {[{l:"Impressions",v:"2.4M"},{l:"Click Rate",v:"6.8%"},{l:"Conversions",v:"3.2%"}].map(s => (
            <div key={s.l} className="py-2 text-center">
              <div className="text-[8px] text-gray-400 mb-0.5">{s.l}</div>
              <div className="text-sm font-black text-gray-900">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="p-3">
          <div className="text-[10px] font-semibold text-gray-700 mb-2">Organic Traffic Growth</div>
          <div className="flex items-end gap-0.5 h-14">
            {bars.map((h,i) => <div key={i} className="flex-1 rounded-t" style={{ height:`${(h/130)*100}%`, background:i>=9?"linear-gradient(180deg,#2563EB,#1A47DB)":"#EEF2FF" }}/>)}
          </div>
          <div className="flex justify-between mt-1">{months.map(m => <span key={m} className="text-[6px] text-gray-400">{m}</span>)}</div>
        </div>
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-2.5 py-2">
            <Search size={10} className="text-amber-500 shrink-0"/>
            <div className="flex-1"><div className="text-[10px] font-semibold text-gray-900">IT company in Mohali</div><div className="text-[8px] text-gray-400">Ranked #1 · +8 positions</div></div>
            <span className="text-[11px] font-black text-amber-600">↑8</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex items-center gap-1.5">
        <Star size={11} className="text-yellow-400 fill-yellow-400 shrink-0"/>
        <div><div className="text-[9px] font-black text-gray-900">ROI: +280%</div><div className="text-[8px] text-gray-400">avg. result</div></div>
      </div>
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────── */

const services = [
  {
    number: "01", label: "Web Design & Development",
    tagline: "Performance-first platforms built for high conversion.",
    title: "Websites built for speed and sales",
    description: "We merge clean aesthetics with high-performance code. Using Next.js and React, we build platforms that load in under 2 seconds and are architected to rank high on Google. We focus on clear user journeys that turn casual traffic into measurable profit.",
    href: "/services/web-design",
    tags: ["Next.js", "React", "WordPress", "Webflow"],
    accentColor: "#2563EB", accentBg: "#DBEAFE", sectionBg: "#EFF4FF",
    Mockup: WebDesignMockup,
  },
  {
    number: "02", label: "Custom Software Development",
    tagline: "Secure, scalable systems to power your operations.",
    title: "Software that simplifies your complexity",
    description: "We build secure, production-grade tools tailored to your specific workflow. From internal management dashboards to robust APIs, our systems act as a solid digital backbone, allowing your business to scale without the technical headaches.",
    href: "/services/software-development",
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
    accentColor: "#7C3AED", accentBg: "#EDE9FE", sectionBg: "#F3F0FF",
    Mockup: SoftwareMockup,
  },
  {
    number: "03", label: "Mobile App Development",
    tagline: "Premium iOS & Android experiences for a global audience.",
    title: "Apps your users will love to use",
    description: "We handle the entire lifecycle, from UX wireframing to App Store deployment. Using React Native and Flutter, we create fast, intuitive mobile experiences that keep your customers connected to your brand 24/7.",
    href: "/services/mobile-app",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    accentColor: "#059669", accentBg: "#D1FAE5", sectionBg: "#F0FDF6",
    Mockup: MobileAppMockup,
  },
  {
    number: "04", label: "Digital Marketing & SEO",
    tagline: "Strategic growth engines focused on measurable ROI.",
    title: "Marketing that delivers actual ROI",
    description: "Forget vanity metrics like likes. We use technical SEO and data-driven ad campaigns to put you in front of ready-to-buy customers. Our goal is simple: lower your acquisition costs and steadily increase your monthly recurring revenue.",
    href: "/services/digital-marketing",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content"],
    accentColor: "#D97706", accentBg: "#FEF3C7", sectionBg: "#FFFBF0",
    Mockup: MarketingMockup,
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ─── Section ───────────────────────────────────────────── */

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = services[activeIndex];

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-main">

        {/* Label sits above both columns so they share the same top edge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-6"
        >
          <span className="section-label">What We Do</span>
        </motion.div>

        {/* items-stretch (default) so right card fills the same height as left sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* ── Left: sticky sidebar — self-start so it doesn't stretch, sticks at top ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 self-start lg:sticky lg:top-28"
          >
            <h2 className="heading-xl font-black text-[#0D0D1A] mb-10 leading-tight">
              High-End Tech and<br />Marketing, All in<br />One Place
            </h2>

            {/* Nav list */}
            <div className="flex flex-col gap-1">
              {services.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={s.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: EASE }}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative text-left pl-5 pr-10 py-3.5 rounded-xl transition-all duration-250 ${
                      isActive ? "bg-gray-50/80" : "hover:bg-gray-50/50"
                    }`}
                  >
                    {/* Accent bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                        style={{ background: s.accentColor }}
                        transition={{ duration: 0.28, ease: EASE }}
                      />
                    )}

                    <div className="flex items-start gap-3">
                      <span
                        className="text-[10px] font-mono font-bold mt-0.5 shrink-0 transition-colors duration-200"
                        style={{ color: isActive ? s.accentColor : "#C4C9D4" }}
                      >
                        {s.number}
                      </span>
                      <div>
                        <div className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                          isActive ? "text-[#0D0D1A]" : "text-gray-400 group-hover:text-gray-600"
                        }`}>
                          {s.label}
                        </div>
                        <div className={`text-xs mt-0.5 transition-colors duration-200 leading-relaxed ${
                          isActive ? "text-gray-500" : "text-gray-300 group-hover:text-gray-400"
                        }`}>
                          {s.tagline}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <ArrowRight size={14} style={{ color: s.accentColor }} />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: content card — flex chain so card fills the grid row height ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="lg:col-span-3 flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ willChange: "transform, opacity" }}
                className="flex-1 flex flex-col"
              >
                {/* Card stretches to fill the full flex column height */}
                <div className="flex-1 rounded-3xl overflow-hidden border border-black/[0.05] shadow-[0_2px_32px_rgba(15,23,42,0.07)] flex flex-col">
                  <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">

                    {/* Text side — white */}
                    <div className="bg-white px-8 py-8 lg:px-9 lg:py-10 flex flex-col justify-between">
                      <div className="flex flex-col gap-4">
                        {/* Label */}
                        <span
                          className="inline-block text-[11px] font-bold px-3 py-1.5 rounded-full w-fit tracking-wide"
                          style={{ background: service.accentBg, color: service.accentColor }}
                        >
                          {service.label}
                        </span>

                        {/* Title */}
                        <h3
                          className="font-black text-[#0D0D1A] leading-tight"
                          style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.65rem)", letterSpacing: "-0.025em" }}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#6B7180] text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2.5 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group w-fit mt-6"
                        style={{ background: service.accentColor, color: "#fff" }}
                      >
                        Explore service
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                          <ArrowRight size={11} className="text-white" />
                        </div>
                      </Link>
                    </div>

                    {/* Mockup side — accent tinted */}
                    <div
                      className="relative flex items-center justify-center px-6 py-10 overflow-hidden min-h-[280px]"
                      style={{ background: service.sectionBg }}
                    >
                      {/* Radial glow */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 50%, ${service.accentBg} 0%, transparent 72%)`,
                        }}
                      />
                      {/* Subtle dot grid */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                          backgroundImage: `radial-gradient(circle, ${service.accentColor}22 1px, transparent 1px)`,
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="relative z-10">
                        <service.Mockup />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
