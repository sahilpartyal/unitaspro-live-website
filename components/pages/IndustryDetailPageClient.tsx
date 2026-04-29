"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay },
});

interface Props {
  slug: string;
}

export default function IndustryDetailPageClient({ slug }: Props) {
  const industry = INDUSTRIES.find((i) => i.slug === slug)!;
  const Icon = industry.icon;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-16 pb-12 lg:pt-28 lg:pb-16">
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[50%] h-full hidden lg:block">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
            }}/>
          <svg viewBox="0 0 400 400" className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-[0.07]">
            {[
              { x: 200, y: 200, s: 24 }, { x: 160, y: 160, s: 18 }, { x: 240, y: 160, s: 18 },
              { x: 160, y: 240, s: 18 }, { x: 240, y: 240, s: 18 }, { x: 200, y: 130, s: 14 },
              { x: 130, y: 200, s: 14 }, { x: 270, y: 200, s: 14 }, { x: 200, y: 270, s: 14 },
            ].map((d, i) => (
              <rect key={i} x={d.x - d.s/2} y={d.y - d.s/2} width={d.s} height={d.s}
                fill="#0D0D1A" rx={3} transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
              {industry.tagline}
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-3xl mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.07, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Solutions for </span>
            <span className="font-bold text-[#0D0D1A]">{industry.name}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-[#6B7180] text-lg max-w-2xl mb-10 leading-relaxed">
            {industry.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex items-center gap-3">
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
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="section-label mb-4">The Challenge</span>
            <h2 className="heading-xl text-[#0D0D1A] max-w-2xl">
              The problems we hear from {industry.name.toLowerCase()} businesses every week.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.problems.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.06)}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-[#F8F9FC]">
                <div className="shrink-0 mt-0.5">
                  <AlertCircle size={18} style={{ color: industry.accent }}/>
                </div>
                <div>
                  <h3 className="font-bold text-[#0D0D1A] mb-1.5">{p.title}</h3>
                  <p className="text-[#6B7180] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad bg-[#F8F9FC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">

            {/* Left sticky panel */}
            <div className="lg:sticky lg:top-24">
              <motion.div {...fadeUp()}>
                <span className="section-label mb-4">What We Build</span>
                <h2 className="heading-xl text-[#0D0D1A] mb-4">
                  Our {industry.name} solutions.
                </h2>
                <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                  {industry.desc}
                </p>
              </motion.div>

              {/* Dark CTA card */}
              <motion.div {...fadeUp(0.1)}
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #1a2d6e 100%)" }}>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                  Let&apos;s scope your project.
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  Free consultation. No commitment. We&apos;ll tell you exactly what to build and what it&apos;ll cost.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                    px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-200">
                  Get a free quote <ArrowRight size={14}/>
                </Link>
              </motion.div>
            </div>

            {/* Right services list */}
            <div className="flex flex-col gap-3">
              {industry.services.map((s, i) => (
                <motion.div key={s} {...fadeUp(i * 0.05)}
                  className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100
                    hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: industry.bg }}>
                    <CheckCircle2 size={16} style={{ color: industry.accent }}/>
                  </div>
                  <span className="font-semibold text-[#0D0D1A] text-base">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg,#0A0F1E 0%,#1a2d6e 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
            backgroundSize: "100% 100%",
            opacity: 0.03,
          }}/>
        <div className="container-main relative text-center">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5">
              <Icon size={14} style={{ color: industry.accent }}/>
              <span className="text-white/70 text-sm font-medium">{industry.name}</span>
            </div>
            <h2 className="font-semibold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {industry.cta.heading}
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              {industry.cta.sub}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full
                  bg-white text-[#0A0F1E] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200">
                Get a Free Quote <ArrowRight size={15}/>
              </Link>
              <a href="tel:+918264954344"
                className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 border border-white/30
                  px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200">
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
