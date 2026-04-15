"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay },
});

export default function IndustriesPageClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-12">
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
              { x: 260, y: 260, s: 10 }, { x: 200, y: 100, s: 8 }, { x: 100, y: 200, s: 8 },
              { x: 300, y: 200, s: 8 }, { x: 200, y: 300, s: 8 },
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
              Trusted across 8 industries globally
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Built For Your </span>
            <span className="font-semibold text-[#0D0D1A]">Industry, Not Just Your Brief.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-16">
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

          {/* Industry pill list */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <a key={ind.slug} href={`#${ind.slug}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-gray-200 bg-white
                  text-sm font-medium text-[#374151] hover:border-gray-400 hover:text-[#0D0D1A] transition-all duration-150">
                <ind.icon size={13} style={{ color: ind.accent }}/>
                {ind.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industry cards ── */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="flex flex-col gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.slug}
                id={ind.slug}
                {...fadeUp(i * 0.04)}
                className="group grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 rounded-2xl border border-gray-100
                  hover:shadow-[0_8px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Left accent panel */}
                <div className="flex flex-col justify-between p-8" style={{ background: ind.bg }}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-white shadow-sm">
                      <ind.icon size={22} style={{ color: ind.accent }}/>
                    </div>
                    <h2 className="font-black text-[#0D0D1A] text-xl leading-snug mb-2" style={{ letterSpacing: "-0.02em" }}>
                      {ind.name}
                    </h2>
                    <p className="text-sm font-medium" style={{ color: ind.accent }}>
                      {ind.tagline}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-2">
                    <Link href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
                      style={{ color: ind.accent }}>
                      View industry page <ArrowRight size={12}/>
                    </Link>
                    <Link href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9CA3AF] hover:text-[#0D0D1A] transition-colors">
                      Start a project <ArrowRight size={12}/>
                    </Link>
                  </div>
                </div>

                {/* Right content */}
                <div className="p-8 bg-white flex flex-col justify-between">
                  <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                    {ind.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {ind.services.slice(0, 4).map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-[#374151]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ind.accent }}/>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
