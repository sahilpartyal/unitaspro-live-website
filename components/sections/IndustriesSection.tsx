"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function IndustriesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-label mb-4">Industries</span>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              We know your industry&apos;s problems before you explain them.
            </h2>
            <p className="text-[#6B7180] text-lg">
              Deep domain experience across 8 verticals — so every solution is built with real context, not just requirements.
            </p>
          </div>
          <Link href="/industries" className="btn-secondary whitespace-nowrap shrink-0">
            All Industries <ArrowRight size={16}/>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex flex-col h-full p-6 rounded-2xl border border-gray-100
                  hover:shadow-[0_8px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
                style={{ background: ind.bg }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white shadow-sm shrink-0">
                  <ind.icon size={18} style={{ color: ind.accent }}/>
                </div>
                <h3 className="font-bold text-[#0D0D1A] text-base leading-snug mb-2" style={{ letterSpacing: "-0.01em" }}>
                  {ind.name}
                </h3>
                <p className="text-xs text-[#6B7180] leading-relaxed flex-1">
                  {ind.tagline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold transition-all" style={{ color: ind.accent }}>
                  Learn more
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform"/>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
