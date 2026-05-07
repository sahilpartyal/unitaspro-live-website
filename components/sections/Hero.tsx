"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = ["Software,", "Web Apps,", "Mobile Apps,"];

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
    <section className="relative flex flex-col lg:min-h-screen overflow-hidden bg-[#070D1F]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay — heavier at left so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(7,13,31,0.92) 0%, rgba(7,13,31,0.78) 45%, rgba(7,13,31,0.55) 75%, rgba(7,13,31,0.35) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to top, #070D1F 0%, transparent 100%)" }}
        />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-[13rem] lg:pb-12">

        {/* Heading */}
        <h1 className="font-bold text-white mb-7 lg:mb-8" style={{ lineHeight: 1.0, letterSpacing: "-0.044em" }}>

          {/* Line 1 */}
          <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
            <motion.span
              className="block"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Custom
            </motion.span>
          </span>

          {/* Line 2 — rotating word */}
          <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
            <motion.span
              className="block"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-[#FFFFFF] to-[#9CA3AF] bg-clip-text text-transparent"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </span>

          {/* Line 3 */}
          <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
            <motion.span
              className="block"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              Built to Scale.
            </motion.span>
          </span>
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="text-white/55 max-w-lg mb-10 lg:mb-12"
          style={{ fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.75 }}
        >
          Unitaspro builds websites, mobile apps, and custom software for
          companies that have outgrown off-the-shelf tools. From idea to launch — we deliver.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-row items-center gap-3"
        >
          {/* Primary — split pill: text left, circle arrow right */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0A0F1E] font-bold text-sm rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] active:translate-y-0 whitespace-nowrap shrink-0"
            style={{ padding: "6px 6px 6px 22px", letterSpacing: "-0.01em" }}
          >
            Get Free Quote
            <span className="w-9 h-9 rounded-full bg-[#0A0F1E] flex items-center justify-center shrink-0">
              <ArrowRight size={14} className="text-white" />
            </span>
          </Link>
          {/* Secondary — outlined pill */}
          <Link
            href="/services"
            className="hidden min-[576px]:inline-flex items-center justify-center text-white font-semibold text-sm rounded-full border border-white/25 hover:border-white/50 hover:bg-white/[0.06] transition-all duration-200 whitespace-nowrap shrink-0"
            style={{ padding: "14px 24px", letterSpacing: "-0.01em" }}
          >
            View Services
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-6 mt-10 lg:mt-auto pt-0 lg:pt-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-px">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[12px] font-medium text-white/45">
              95+ happy clients worldwide
            </span>
          </div>

          <div className="hidden lg:block w-px h-5 bg-white/10" />

          {[
            { num: "150+", label: "Projects Delivered" },
            { num: "97%",  label: "Client Satisfaction" },
            { num: "8+",   label: "Years Experience" },
          ].map(({ num, label }, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span
                  className="font-bold text-white leading-none"
                  style={{ fontSize: 22, letterSpacing: "-0.04em" }}
                >
                  {num}
                </span>
                <span className="text-[12px] font-medium text-white/45">{label}</span>
              </div>
              {i < 2 && <div className="hidden lg:block w-px h-5 bg-white/10" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
