"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, ShieldCheck, Headphones, Globe2, Award } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    n: "01", icon: TrendingUp, color: "#2563EB", bg: "#EFF6FF",
    title: "Results-Driven",
    desc: "We focus on the numbers that actually grow your business like new leads and higher sales. We build software that works in the real world, not just something that looks good in a report.",
  },
  {
    n: "02", icon: Clock, color: "#7C3AED", bg: "#F5F3FF",
    title: "On-Time, Every Time",
    desc: "No vague updates or missed dates. We give you a clear schedule with weekly check-ins, so you always know exactly where we stand. You can plan your business around our delivery.",
  },
  {
    n: "03", icon: ShieldCheck, color: "#059669", bg: "#ECFDF5",
    title: "Quality Guaranteed",
    desc: "We test every part of your software to make sure it's fast, safe, and easy to use. To give you total peace of mind, we stay by your side with 30 days of free support after we launch.",
  },
  {
    n: "04", icon: Headphones, color: "#D97706", bg: "#FFFBEB",
    title: "Dedicated Support",
    desc: "Forget about ticket queues or talking to a bot. You get a direct line to your project lead for quick, honest, and human-to-human conversations.",
  },
  {
    n: "05", icon: Globe2, color: "#0891B2", bg: "#ECFEFF",
    title: "Global Standards",
    desc: "With successful projects in the UAE, UK, and USA, we know what international customers expect. We build your product to look and work perfectly, no matter where your users are.",
  },
  {
    n: "06", icon: Award, color: "#7C3AED", bg: "#F5F3FF",
    title: "Senior-Only Team",
    desc: "We don't let juniors learn their craft on your project. Every person on our team is a senior professional with at least 5+ years of real experience building successful software & strategies.",
  },
];

const trust = [
  { value: "150+", label: "Projects Delivered" },
  { value: "95+",  label: "Happy Clients"       },
  { value: "97%",  label: "Client Satisfaction" },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Benefits() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── Left: sticky header ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 self-start lg:sticky lg:top-28"
          >
            <span className="section-label mb-4 inline-flex">Why Choose Us</span>

            <h2 className="heading-xl font-bold text-[#0D0D1A] mt-1 mb-5 leading-tight">
              The Digital Backbone<br />for Visionary Brands
            </h2>

            <p className="text-[#6B7180] text-base leading-relaxed mb-8">
              Your vision deserves a team that can actually build it. We turn complex plans into smooth, working software, giving you a reliable foundation to grow your brand and reach customers anywhere in the world.
            </p>

            {/* Trust stats */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
              {trust.map((t) => (
                <div key={t.label}>
                  <div className="text-2xl font-bold text-[#0D0D1A] leading-none mb-0.5">{t.value}</div>
                  <div className="text-xs text-[#9CA3AF] font-medium">{t.label}</div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary group">
              Work With Us
              <span className="btn-arrow"><ArrowRight size={16} /></span>
            </Link>
          </motion.div>

          {/* ── Right: feature list ── */}
          <div className="lg:col-span-3 flex flex-col">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                className="group relative flex items-start gap-5 py-6 border-b border-gray-100 last:border-0
                  -mx-4 px-4 rounded-xl hover:bg-gray-50/70 transition-colors duration-200 cursor-default"
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.color }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.bg }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="font-bold text-[#0D0D1A] text-base leading-snug">{item.title}</h3>
                    <span className="text-xs font-mono font-bold shrink-0 tabular-nums transition-colors duration-200 group-hover:opacity-100 opacity-30"
                      style={{ color: item.color }}>
                      {item.n}
                    </span>
                  </div>
                  <p className="text-[#6B7180] text-sm leading-relaxed">{item.desc}</p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
