"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Minus, CheckCircle2, XCircle, MessageSquare,
  type LucideIcon,
} from "lucide-react";
import Stats from "@/components/sections/Stats";

/* ── Fixed color palette (same for every industry) ── */
const FEATURE_COLORS = [
  { color: "#2563EB", bg: "#EFF6FF" },
  { color: "#7C3AED", bg: "#F5F3FF" },
  { color: "#059669", bg: "#ECFDF5" },
  { color: "#D97706", bg: "#FFFBEB" },
];

/* ── Types ──────────────────────────────────────────── */
export interface HeroHighlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PanelFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Panel {
  label: string;
  image: string;
  type?: "phone" | "desktop";
  features: PanelFeature[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface UseCase {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}

export interface IndustryPageData {
  /** Hero */
  heroEyebrow: string;
  heroHeadingLight: string;
  heroHeadingBold: string;
  heroHighlights: HeroHighlight[];
  /** Before / After (optional) */
  beforeAfter?: {
    heading: string;
    without: { subtitle: string; points: string[] };
    with: { subtitle: string; points: string[] };
  };
  /** Features */
  featuresHeading: string;
  features: Feature[];
  /** Panels */
  panelHeading: string;
  panelDesc?: string;
  panels: Panel[];
  /** Use cases / who it's for (optional) */
  useCases?: { heading: string; subtitle?: string; items: UseCase[] };
  /** FAQ */
  faqHeading: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  /** CTA */
  ctaIcon: LucideIcon;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  /** Legacy — kept for backward compat with industry data files */
  [key: string]: unknown;
}

/* ── Animations ─────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay },
});

/* ── Template ───────────────────────────────────────── */
export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const [activePanel, setActivePanel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const CtaIcon = data.ctaIcon;

  /* FAQPage structured data for rich snippets */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      {/* ──────────────────────────────────────────────
          HERO
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-0 lg:pt-32">

        {/* Subtle colour orbs for depth */}
        <div aria-hidden className="pointer-events-none absolute top-16 left-[20%] w-64 h-64 rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}/>
        <div aria-hidden className="pointer-events-none absolute top-32 left-[8%] w-40 h-40 rounded-full blur-2xl opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}/>

        {/* Grid decoration — right side */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
            }}/>
          <svg viewBox="0 0 400 400" className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-[0.07]">
            {[
              { x: 200, y: 200, s: 24 }, { x: 160, y: 160, s: 18 }, { x: 240, y: 160, s: 18 },
              { x: 160, y: 240, s: 18 }, { x: 240, y: 240, s: 18 }, { x: 200, y: 130, s: 14 },
              { x: 130, y: 200, s: 14 }, { x: 270, y: 200, s: 14 }, { x: 200, y: 270, s: 14 },
              { x: 140, y: 140, s: 10 }, { x: 260, y: 140, s: 10 }, { x: 140, y: 260, s: 10 },
              { x: 260, y: 260, s: 10 },
            ].map((d, i) => (
              <rect key={i} x={d.x - d.s/2} y={d.y - d.s/2} width={d.s} height={d.s}
                fill="#0D0D1A" rx={3} transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative pb-0">
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
              {data.heroEyebrow}
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">{data.heroHeadingLight} </span>
            <span className="font-semibold text-[#0D0D1A]">{data.heroHeadingBold}</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-24">
            <Link href="/contact" className="btn-primary group">
              Get a free quote
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <a href="tel:+918264954344"
              className="inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5">
              Book a call
            </a>
          </motion.div>

          {/* Full-width dashed separator */}
          <div aria-hidden className="w-full h-px border-t border-dashed border-gray-300 mb-10"/>

          {/* ── Hero highlight cards ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {data.heroHighlights.map((h, i) => {
              const c = FEATURE_COLORS[i % FEATURE_COLORS.length];
              return (
                <div key={h.title}
                  className="flex items-start gap-3 py-4 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}12` }}>
                    <h.icon size={16} style={{ color: c.color }}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="font-semibold text-sm text-[#0D0D1A]">{h.title}</h3>
                      <ArrowRight size={14} className="text-gray-300 shrink-0"/>
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom fade into next section */}
        <div aria-hidden className="h-10 bg-gradient-to-b from-[#F8F9FC] to-[#F1F3F8] mt-10"/>
      </section>

      {/* ── Stats bar ── */}
      <Stats />

      {/* ──────────────────────────────────────────────
          PANEL SHOWCASE — Savio-style: center mockup, feature cards flanking
      ────────────────────────────────────────────── */}
      <section className="section-pad bg-white overflow-hidden">
        <div className="container-main">
          {/* Heading + optional description */}
          <motion.div {...fadeUp()} className="mb-4 text-center">
            <motion.div {...fadeUp()} className="mb-3 flex items-center gap-2 justify-center">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
              <p className="text-sm text-[#6B7180]">What We Deliver</p>
            </motion.div>
            <h2 className="heading-xl text-[#0D0D1A]">{data.panelHeading}</h2>
            {data.panelDesc && (
              <p className="mt-3 text-[#6B7180] text-base max-w-2xl mx-auto leading-relaxed">{data.panelDesc}</p>
            )}
          </motion.div>

          {/* Underline tabs — centered */}
          <motion.div {...fadeUp(0.08)} className="flex gap-0 mb-14 border-b border-gray-200 justify-center">
            {data.panels.map((p, i) => (
              <button key={p.label} onClick={() => setActivePanel(i)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                  activePanel === i
                    ? "text-[#0D0D1A]"
                    : "text-[#9CA3AF] hover:text-[#374151]"
                }`}>
                {p.label}
                {activePanel === i && (
                  <motion.div layoutId="panelTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full"/>
                )}
              </button>
            ))}
          </motion.div>

          {/* Active panel */}
          <AnimatePresence mode="wait">
            {data.panels.map((panel, i) => {
              if (activePanel !== i) return null;
              const c = FEATURE_COLORS[0];
              const half = Math.ceil(panel.features.length / 2);
              const isDesktop = panel.type === "desktop";

              /* ── Feature card — Savio style: colored icon square + title + desc ── */
              const FeatureCard = ({ feat, idx }: { feat: PanelFeature; idx: number }) => {
                const Ic = feat.icon;
                return (
                  <motion.div key={feat.title} {...fadeUp(idx * 0.08)}
                    className="flex items-start gap-4 rounded-2xl bg-white/80 border border-gray-100/80 px-5 py-4 w-full
                      shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${c.color}14` }}>
                      <Ic size={20} style={{ color: c.color }}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[15px] text-[#0D0D1A] font-semibold leading-snug">{feat.title}</h3>
                      <p className="text-sm text-[#6B7180] leading-snug mt-1 line-clamp-2">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              };

              return (
                <motion.div key={panel.label}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE }}>

                  {/* ── Desktop layout — exact Savio replica ── */}
                  <div className={`hidden lg:grid items-center ${
                    isDesktop
                      ? "lg:grid-cols-[1fr_520px_1fr] gap-8"
                      : "lg:grid-cols-[1fr_320px_1fr] gap-8"
                  }`}>

                    {/* Left features */}
                    <div className="flex flex-col gap-4 justify-center">
                      {panel.features.slice(0, half).map((feat, idx) => (
                        <FeatureCard key={feat.title} feat={feat} idx={idx}/>
                      ))}
                    </div>

                    {/* Center mockup */}
                    <div className="relative flex items-center justify-center">
                      {/* Circular gradient glow */}
                      <div aria-hidden className="absolute rounded-full"
                        style={{
                          width: isDesktop ? "480px" : "400px",
                          height: isDesktop ? "480px" : "400px",
                          top: "50%", left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${c.color}14 0%, ${c.color}0A 40%, ${c.color}05 60%, transparent 72%)`,
                        }}/>
                      {isDesktop ? (
                        /* Laptop mockup */
                        <div className="relative w-full max-w-[520px]">
                          <div className="relative rounded-t-xl overflow-hidden border-[5px] border-gray-900 border-b-0 bg-gray-900
                            shadow-[0_25px_80px_rgba(15,23,42,0.22)]"
                            style={{ aspectRatio: "16/10" }}>
                            <Image src={panel.image} alt={panel.label} fill
                              className="object-cover" sizes="520px"/>
                          </div>
                          <div className="relative">
                            <div className="h-4 bg-gradient-to-b from-[#2a2a2e] to-[#3a3a3e] rounded-b-md
                              border-x-[5px] border-b-[5px] border-gray-900"/>
                            <div className="h-2.5 bg-[#4a4a4e] rounded-b-xl mx-10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"/>
                          </div>
                        </div>
                      ) : (
                        /* iPhone mockup — thin bezels, dynamic island, realistic */
                        <div className="relative bg-[#1a1a1e] rounded-[2.8rem] p-[6px]
                          shadow-[0_30px_80px_rgba(15,23,42,0.25),0_0_0_1px_rgba(255,255,255,0.05)_inset]"
                          style={{ width: "240px" }}>
                          {/* Screen */}
                          <div className="relative rounded-[2.4rem] overflow-hidden bg-black"
                            style={{ aspectRatio: "9/19.5" }}>
                            {/* Dynamic Island */}
                            <div aria-hidden className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px]
                              bg-[#1a1a1e] rounded-full z-10"/>
                            <Image src={panel.image} alt={panel.label} fill
                              className="object-cover" sizes="240px"/>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right features */}
                    <div className="flex flex-col gap-4 justify-center">
                      {panel.features.slice(half).map((feat, idx) => (
                        <FeatureCard key={feat.title} feat={feat} idx={idx}/>
                      ))}
                    </div>
                  </div>

                  {/* Desktop CTA */}
                  <div className="hidden lg:flex justify-center mt-10">
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                      style={{ color: c.color }}>
                      Build your {panel.label.toLowerCase()} <ArrowRight size={14}/>
                    </Link>
                  </div>

                  {/* ── Mobile layout ── */}
                  <div className="lg:hidden">
                    <div className={`relative mx-auto mb-8 ${isDesktop ? "w-full max-w-[320px]" : "w-[240px]"}`}>
                      <div aria-hidden className="absolute rounded-full"
                        style={{
                          width: "260px", height: "260px",
                          top: "50%", left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${c.color}10 0%, transparent 70%)`,
                        }}/>
                      {isDesktop ? (
                        <div className="relative">
                          <div className="relative rounded-t-lg overflow-hidden border-[4px] border-gray-900 border-b-0 bg-gray-900
                            shadow-[0_16px_40px_rgba(15,23,42,0.16)]"
                            style={{ aspectRatio: "16/10" }}>
                            <Image src={panel.image} alt={panel.label} fill
                              className="object-cover" sizes="320px"/>
                          </div>
                          <div className="h-3 bg-gradient-to-b from-[#2a2a2e] to-[#3a3a3e] rounded-b-sm border-x-[4px] border-b-[4px] border-gray-900"/>
                          <div className="h-2 bg-[#4a4a4e] rounded-b-lg mx-8"/>
                        </div>
                      ) : (
                        /* iPhone mockup — mobile */
                        <div className="relative bg-[#1a1a1e] rounded-[2.2rem] p-[5px] mx-auto
                          shadow-[0_16px_40px_rgba(15,23,42,0.18)]"
                          style={{ width: "180px" }}>
                          <div className="relative rounded-[1.8rem] overflow-hidden bg-black"
                            style={{ aspectRatio: "9/19.5" }}>
                            <div aria-hidden className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4
                              bg-[#1a1a1e] rounded-full z-10"/>
                            <Image src={panel.image} alt={panel.label} fill
                              className="object-cover" sizes="180px"/>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      {panel.features.map((feat) => {
                        const Ic = feat.icon;
                        return (
                          <div key={feat.title} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4
                            shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: `${c.color}14` }}>
                              <Ic size={16} style={{ color: c.color }}/>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm text-[#0D0D1A] leading-snug">{feat.title}</h3>
                              <p className="text-xs text-[#6B7180] leading-snug mt-0.5 line-clamp-2">{feat.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 mt-2 justify-center"
                        style={{ color: c.color }}>
                        Build your {panel.label.toLowerCase()} <ArrowRight size={14}/>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          INLINE CTA — between panels and use cases
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 lg:py-14"
        style={{ background: "linear-gradient(135deg,#0A0F1E 0%,#1a2d6e 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}/>
        <div className="container-main relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <CtaIcon size={20} className="text-white/70"/>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-white/20 bg-white/5">
                  <span className="text-white/60 text-xs font-medium">{data.ctaLabel}</span>
                </div>
                <h2 className="text-white font-semibold leading-tight"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", letterSpacing: "-0.02em" }}>
                  {data.ctaHeading}
                </h2>
                <p className="text-white/55 text-sm mt-1 max-w-md">{data.ctaSub}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full
                  bg-white text-[#0A0F1E] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Get a Free Quote <ArrowRight size={14}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-5 py-3 rounded-full hover:bg-white/10 transition-all duration-200">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          USE CASES (optional)
      ────────────────────────────────────────────── */}
      {data.useCases && (
        <section className="section-pad bg-white">
          <div className="container-main">
            <motion.div {...fadeUp()} className="mb-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
                <p className="text-sm text-[#6B7180]">Who It&apos;s For</p>
              </div>
              <h2 className="heading-xl text-[#0D0D1A] max-w-2xl">{data.useCases.heading}</h2>
              {data.useCases.subtitle && (
                <p className="text-[#6B7180] text-base mt-3 max-w-xl leading-relaxed">{data.useCases.subtitle}</p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.useCases.items.map((uc, i) => {
                const c = FEATURE_COLORS[i % FEATURE_COLORS.length];
                return (
                  <motion.div key={uc.title} {...fadeUp(i * 0.06)}
                    className="group/uc relative flex flex-col p-6 rounded-2xl border border-gray-100
                      hover:shadow-[0_6px_28px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                    <div aria-hidden className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl opacity-0 group-hover/uc:opacity-100 transition-all duration-300"
                      style={{ background: c.color }}/>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: c.bg }}>
                      <uc.icon size={20} style={{ color: c.color }}/>
                    </div>
                    <h3 className="font-bold text-[#0D0D1A] text-base mb-2 leading-snug">{uc.title}</h3>
                    <p className="text-[#6B7180] text-sm leading-relaxed mb-5">{uc.desc}</p>
                    <ul className="flex flex-col gap-2 mt-auto">
                      {uc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: c.color }}/>
                          <span className="text-xs text-[#6B7180] leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────
          BEFORE / AFTER (optional)
      ────────────────────────────────────────────── */}
      {data.beforeAfter && (
        <section className="section-pad bg-white">
          <div className="container-main">
            <motion.div {...fadeUp()} className="mb-12">
              <div className="mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
                <p className="text-sm text-[#6B7180]">Why Custom?</p>
              </div>
              <h2 className="heading-xl text-[#0D0D1A] max-w-xl">{data.beforeAfter.heading}</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* WITHOUT card */}
              <motion.div {...fadeUp(0.05)}
                className="rounded-2xl border border-gray-200 bg-[#F8F9FC] p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                  <span className="w-2 h-2 rounded-full bg-red-400"/>
                  <span className="text-sm font-bold text-[#0D0D1A]">Without Unitaspro</span>
                </div>
                <p className="text-sm text-[#6B7180] mb-6">{data.beforeAfter.without.subtitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.beforeAfter.without.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle size={13} className="text-red-400"/>
                      </div>
                      <p className="text-sm text-[#374151] leading-snug">{pt}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WITH card */}
              <motion.div {...fadeUp(0.1)}
                className="rounded-2xl border border-[#2563EB]/20 p-8 lg:p-10 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)" }}>
                <div aria-hidden className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}/>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-[#2563EB]/20 bg-white">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]"/>
                    <span className="text-sm font-bold text-[#0D0D1A]">With Unitaspro</span>
                  </div>
                  <p className="text-sm text-[#2563EB]/70 mb-6 font-medium">{data.beforeAfter.with.subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.beforeAfter.with.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={13} className="text-[#2563EB]"/>
                        </div>
                        <p className="text-sm text-[#374151] leading-snug">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────
          CTA — after before/after
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 lg:py-16"
        style={{ background: "linear-gradient(135deg,#0A0F1E 0%,#1a2d6e 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}/>
        <div className="container-main relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <CtaIcon size={20} className="text-white/70"/>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-white/20 bg-white/5">
                  <span className="text-white/60 text-xs font-medium">{data.ctaLabel}</span>
                </div>
                <h2 className="text-white font-semibold leading-tight"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em" }}>
                  {data.ctaHeading}
                </h2>
                <p className="text-white/55 text-sm mt-1 max-w-md">{data.ctaSub}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full
                  bg-white text-[#0A0F1E] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Get a Free Quote <ArrowRight size={14}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-5 py-3 rounded-full hover:bg-white/10 transition-all duration-200">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          FEATURES GRID
      ────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <motion.div {...fadeUp()} className="mb-10">
            <motion.div {...fadeUp()} className="mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
              <p className="text-sm text-[#6B7180]">Platform Features</p>
            </motion.div>
            <h2 className="heading-xl text-[#0D0D1A] max-w-2xl">{data.featuresHeading}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.features.map((f, i) => {
              const c = FEATURE_COLORS[i % FEATURE_COLORS.length];
              return (
                <motion.div key={f.title} {...fadeUp(i * 0.05)}
                  className="group/feat relative flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 bg-white
                    hover:shadow-[0_6px_28px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  {/* Accent bar on hover */}
                  <div aria-hidden className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl opacity-0 group-hover/feat:opacity-100 transition-all duration-300"
                    style={{ background: c.color }}/>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.bg }}>
                    <f.icon size={18} style={{ color: c.color }}/>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0D0D1A] text-sm mb-1 leading-snug">{f.title}</h3>
                    <p className="text-xs text-[#6B7180] leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          FAQ
      ────────────────────────────────────────────── */}
      <section className="section-pad bg-[#F7F8FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky panel */}
            <div className="lg:sticky lg:top-28">
              <div className="mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
                <p className="text-sm text-[#6B7180]">FAQ</p>
              </div>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mb-5 leading-tight">
                {data.faqHeading}
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                {data.faqSubtitle}
              </p>

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
                    We respond within 24 hours — no bots, just real answers from the team building your product.
                  </p>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F172A] text-xs font-bold hover:bg-gray-50 transition-colors group">
                    Talk to us
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right accordion */}
            <div className="flex flex-col">
              {data.faqs.map((faq, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className={`border-b border-gray-200 last:border-0 ${
                    openFaq === i ? "bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(15,23,42,0.06)] mb-2 -mx-4 px-4" : ""
                  }`}>
                  <button
                    className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className={`font-semibold text-[15px] leading-snug transition-colors
                      ${openFaq === i ? "text-[#0D0D1A]" : "text-[#374151] group-hover:text-[#0D0D1A]"}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
                      ${openFaq === i ? "bg-[#0D0D1A] text-white" : "bg-gray-100 text-[#6B7180] group-hover:bg-gray-200"}`}>
                      {openFaq === i ? <Minus size={13}/> : <Plus size={13}/>}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
                        className="overflow-hidden">
                        <p className="pb-5 text-[#6B7180] text-sm leading-relaxed">{faq.a}</p>
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
