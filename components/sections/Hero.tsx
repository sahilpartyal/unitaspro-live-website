"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
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
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-[#070D1F]">

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
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-[13rem] lg:pb-12">

        {/* Heading */}
        <h1 className="font-extrabold text-white mb-7 lg:mb-8" style={{ lineHeight: 1.0, letterSpacing: "-0.044em" }}>

          {/* Line 1 */}
          <span className="block overflow-hidden" style={{ paddingBottom: "0.05em" }}>
            <motion.span
              className="block"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Building
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
              the digital{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="inline-block text-[#2563EB]"
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
              with precision.
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
          Unitaspro builds world-class websites, mobile apps, and custom software for
          companies that demand more than average. From idea to launch — we deliver.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1d51d0] text-white font-bold text-sm rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{ padding: "15px 30px", letterSpacing: "-0.01em", boxShadow: "0 4px 20px rgba(37,99,235,0.45)" }}
          >
            Get Free Quote <ArrowRight size={15} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-sm transition-colors duration-200"
            style={{ letterSpacing: "-0.01em" }}
          >
            View All Services
            <ArrowRight size={14} className="opacity-60" />
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-6 mt-auto pt-8 lg:pt-10"
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
                  className="font-extrabold text-white leading-none"
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
