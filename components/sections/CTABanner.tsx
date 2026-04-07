"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative bg-[#0A0F1E] overflow-hidden">

      {/* Grain texture overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(ellipse, #3B82F6 0%, transparent 65%)" }}/>
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 65%)" }}/>
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)" }}/>

      <div className="container-main relative py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-end">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-white/30 text-xs uppercase tracking-[0.25em] font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20 inline-block"/>
              Let&apos;s work together
            </p>
            <h2 className="font-black leading-[0.95] text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}>
              Have an idea?<br />
              <span className="relative inline-block">
                <span style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #C084FC 60%, #60A5FA 100%)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Let&apos;s build it.</span>
              </span>
            </h2>
          </motion.div>

          {/* Right — contact block */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:pl-20 flex flex-col gap-8"
          >
            {/* Contact details */}
            <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
              <a href="mailto:info@unitaspro.com"
                className="group flex items-center justify-between text-white/60 hover:text-white transition-colors duration-200">
                <span className="text-sm font-medium">info@unitaspro.com</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
              </a>
              <a href="tel:+918264954344"
                className="group flex items-center justify-between text-white/60 hover:text-white transition-colors duration-200">
                <span className="text-sm font-medium">+91 82649 54344</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
              </a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-5">
              <Link href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0A0F1E] font-bold text-sm px-7 py-4 rounded-2xl hover:bg-blue-50 transition-colors">
                Start a Project
                <span className="w-6 h-6 rounded-full bg-[#0A0F1E] flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight size={12} className="text-white"/>
                </span>
              </Link>
              <span className="text-white/25 text-xs leading-relaxed">
                Free call<br/>No commitment
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)" }}/>
    </section>
  );
}
