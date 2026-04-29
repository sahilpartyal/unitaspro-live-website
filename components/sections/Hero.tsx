"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = ["future,", "software,", "mobile apps,", "the web,"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      2800
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative flex flex-col min-h-screen px-6 pt-28 pb-10 md:px-14 lg:px-[88px] lg:pt-[108px] lg:pb-12 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#ECEEF8 0%,#F4F5FC 55%,#EDF0FB 100%)" }}
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle,#bfc3e0 1px,transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.2,
        }}
      />

      {/* Purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-24 w-[600px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse,rgba(165,180,252,0.18) 0%,transparent 65%)" }}
      />

      {/* ── Eyebrow ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-3.5 mb-10 lg:mb-12"
      >
        <div className="w-9 h-[2.5px] rounded-full flex-shrink-0 bg-[#2563EB]" />
        <span
          className="font-bold uppercase text-gray-400 tracking-[0.13em]"
          style={{ fontSize: 11 }}
        >
          An IT Services Agency&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2018
        </span>
      </motion.div>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end flex-1 gap-12 lg:gap-0">

        {/* LEFT: Headline + CTAs */}
        <div className="flex-none">

          <h1 className="mb-12 lg:mb-16" style={{ lineHeight: 1.0, letterSpacing: "-0.044em" }}>

            {/* Line 1 */}
            <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
              <motion.span
                className="block font-extrabold text-[#0A0F1E]"
                style={{ fontSize: "clamp(42px, 8.5vw, 112px)" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                Building
              </motion.span>
            </span>

            {/* Line 2 — rotating italic word */}
            <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
              <motion.span
                className="block font-extrabold text-[#0A0F1E]"
                style={{ fontSize: "clamp(42px, 8.5vw, 112px)" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                the digital{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="inline-block italic text-[#2563EB]"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </span>

            {/* Line 3 */}
            <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
              <motion.span
                className="block font-extrabold text-[#0A0F1E]"
                style={{ fontSize: "clamp(42px, 8.5vw, 112px)" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              >
                with precision.
              </motion.span>
            </span>
          </h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A0F1E] hover:bg-[#2563EB] text-white font-bold text-sm rounded-[10px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "15px 28px",
                letterSpacing: "-0.01em",
                boxShadow: "0 4px 14px rgba(10,15,30,0.22)",
              }}
            >
              Get Free Quote <ArrowUpRight size={15} />
            </Link>
            <a
              href="tel:+918264954344"
              className="inline-flex items-center gap-2 bg-transparent text-[#0A0F1E] hover:text-[#2563EB] font-bold text-sm rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 border-2 hover:border-[#2563EB]"
              style={{
                padding: "14px 28px",
                letterSpacing: "-0.01em",
                borderColor: "rgba(10,15,30,0.18)",
              }}
            >
              Book a Free Call
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Description — bottom-aligned on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="lg:pl-20 lg:pb-2 max-w-[340px]"
        >
          <p className="text-gray-500" style={{ fontSize: 15.5, lineHeight: 1.72 }}>
            Unitaspro is a full-service IT agency building websites, mobile apps,
            and software for companies that refuse to ship the average.
          </p>
        </motion.div>
      </div>

      {/* ── Trust strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
        className="relative z-10 flex flex-wrap items-center gap-6 pt-12 lg:pt-20 mt-auto"
      >
        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[12px] font-medium text-gray-400">
            95+ happy clients worldwide
          </span>
        </div>

        <div className="hidden lg:block w-px h-5 bg-black/10" />

        {/* Stats */}
        {[
          { num: "150+", label: "Projects Delivered" },
          { num: "97%",  label: "Client Satisfaction" },
          { num: "8+",   label: "Years Experience" },
        ].map(({ num, label }, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span
                className="font-extrabold text-[#0A0F1E] leading-none"
                style={{ fontSize: 22, letterSpacing: "-0.04em" }}
              >
                {num}
              </span>
              <span className="text-[12px] font-medium text-gray-400">{label}</span>
            </div>
            {i < 2 && <div className="hidden lg:block w-px h-5 bg-black/10" />}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
