"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = ["Websites", "Software", "Mobile Apps", "Digital Products"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % rotatingWords.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32"
      style={{ background: "linear-gradient(160deg,#ECEEF8 0%,#F4F5FC 55%,#EDF0FB 100%)" }}
    >
      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(circle,#b8bcdf 1px,transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 100%)",
        }}
      />
      {/* Glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse,#a5b4fc 0%,transparent 65%)" }}/>

      {/* Abstract SVG rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full max-w-5xl opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
          <circle cx="450" cy="300" r="280" fill="none" stroke="#1A56DB" strokeWidth="1.5"/>
          <circle cx="450" cy="300" r="210" fill="none" stroke="#1A56DB" strokeWidth="0.9"/>
          <circle cx="450" cy="300" r="140" fill="none" stroke="#1A56DB" strokeWidth="0.6"/>
          <circle cx="450" cy="300" r="350" fill="none" stroke="#1A56DB" strokeWidth="0.4" strokeDasharray="4 12"/>
          <line x1="170" y1="300" x2="730" y2="300" stroke="#1A56DB" strokeWidth="0.5" strokeDasharray="6 8"/>
          <line x1="450" y1="20" x2="450" y2="580" stroke="#1A56DB" strokeWidth="0.5" strokeDasharray="6 8"/>
        </svg>
      </div>

      {/* ── Centred content — wide container ── */}
      <div className="container-main relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Eyebrow badge */}
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>
            <span className="inline-flex items-center gap-2 bg-white border border-brand-100 text-brand-700 font-semibold text-[11px] px-4 py-2 rounded-full tracking-widest uppercase shadow-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"/>
              Trusted IT Partner · 12+ Countries
            </span>
          </motion.div>

          {/* Headline — 2 lines at wide viewport */}
          <motion.h1
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.08 }}
            className="font-black text-[#0D0D1A] mb-5"
            style={{ fontSize:"clamp(2.8rem,6vw,5rem)", lineHeight:1.06, letterSpacing:"-0.03em" }}
          >
            We Build{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-16 }}
                transition={{ duration:0.3 }}
                className="text-gradient inline-block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
            {" "}That Grow Your Business
          </motion.h1>

          {/* Sub — max 2 lines */}
          <motion.p
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.18 }}
            className="text-[#4B5163] text-xl leading-relaxed mb-9 max-w-2xl"
          >
            End-to-end technology solutions — websites, software, apps & marketing —
            that help ambitious businesses compete globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.45, delay:0.26 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <Link href="/contact" className="btn-primary group">
              Get Free Quote
              <span className="btn-arrow"><ArrowRight size={16}/></span>
            </Link>
            <a
              href="tel:+918264954344"
              className="inline-flex items-center gap-2.5 bg-white text-[#0D0D1A] font-semibold text-sm px-5 py-3 rounded-full border border-gray-200 shadow-sm transition-all duration-200 hover:border-gray-400 hover:-translate-y-0.5"
            >
              <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center">
                <Phone size={13} className="text-brand-600"/>
              </div>
              Book a Free Call
            </a>
          </motion.div>

          {/* Trust micro-badges */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:0.36 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {["Free consultation","No commitment required","24hr response"].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-[#6B7180] font-medium">
                <CheckCircle size={13} className="text-brand-600 shrink-0"/>
                {t}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
