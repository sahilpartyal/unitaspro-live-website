"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management, payment gateway integration, and a custom CMS.",
    result: "3× increase in online sales within 6 months",
    resultIcon: "📈",
    tags: ["Next.js", "Node.js", "Stripe"],
    accentColor: "text-blue-600",
    visual: "ecommerce",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile App",
    description: "Cross-platform health tracking app for a UAE-based clinic with appointment booking, health records, and telemedicine features.",
    result: "10,000+ downloads in the first quarter",
    resultIcon: "🚀",
    tags: ["React Native", "Firebase", "HL7"],
    accentColor: "text-violet-600",
    visual: "healthcare",
  },
  {
    title: "SaaS Dashboard",
    category: "Software Development",
    description: "Analytics and reporting SaaS platform for a logistics company with real-time tracking, automated reports, and role-based access.",
    result: "Reduced manual reporting time by 80%",
    resultIcon: "⚡",
    tags: ["React", "Python", "PostgreSQL"],
    accentColor: "text-emerald-600",
    visual: "saas",
  },
];

function EcommerceVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-blue-600 to-blue-900 relative overflow-hidden flex items-start justify-center pt-5 px-6">
      {/* Background blur blobs */}
      <div className="absolute w-40 h-40 rounded-full bg-blue-400/20 -top-10 -right-10 blur-2xl"/>
      <div className="absolute w-32 h-32 rounded-full bg-indigo-400/20 bottom-0 left-0 blur-xl"/>

      {/* Browser chrome */}
      <div className="relative w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border-b border-white/10">
          <div className="w-2 h-2 rounded-full bg-red-400/80"/>
          <div className="w-2 h-2 rounded-full bg-yellow-400/80"/>
          <div className="w-2 h-2 rounded-full bg-green-400/80"/>
          <div className="flex-1 mx-2 bg-white/10 rounded px-2 py-0.5 text-[9px] text-white/60 truncate">shop.client.com</div>
        </div>
        {/* Content */}
        <div className="p-3 grid grid-cols-3 gap-2">
          {[["👟","$89"],["👜","$129"],["⌚","$299"],["💻","$999"],["📱","$699"],["🎧","$149"]].map(([emoji, price], i) => (
            <div key={i} className="bg-white/10 rounded-lg p-1.5 text-center">
              <div className="text-base">{emoji}</div>
              <div className="text-[9px] text-white/80 font-semibold">{price}</div>
            </div>
          ))}
        </div>
        {/* Cart */}
        <div className="mx-3 mb-3 bg-blue-500 rounded-lg py-1.5 text-center text-[9px] text-white font-bold tracking-wide">
          Add to Cart — $89.00
        </div>
      </div>
    </div>
  );
}

function HealthcareVisual() {
  return (
    <div className="h-52 bg-gradient-to-br from-violet-600 to-purple-900 relative overflow-hidden flex items-start justify-center pt-5">
      <div className="absolute w-48 h-48 rounded-full bg-purple-400/20 -bottom-8 -right-8 blur-2xl"/>
      <div className="absolute w-32 h-32 rounded-full bg-pink-400/15 -top-8 -left-8 blur-xl"/>

      {/* Phone frame */}
      <div className="relative w-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/25 shadow-2xl overflow-hidden">
        {/* Phone status bar */}
        <div className="flex items-center justify-between px-3 pt-1.5 pb-1">
          <span className="text-[8px] text-white/70 font-medium">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 rounded-sm bg-green-400/80"/>
          </div>
        </div>
        {/* App header */}
        <div className="px-3 pb-1">
          <div className="text-[8px] text-white/60">Good morning</div>
          <div className="text-[10px] text-white font-bold">Dr. Ahmed</div>
        </div>
        {/* Health cards */}
        <div className="px-3 space-y-1.5 pb-3">
          {[
            { label: "Heart Rate", val: "72 bpm", color: "bg-red-400/30", bar: "75%" },
            { label: "Steps Today", val: "8,421", color: "bg-green-400/30", bar: "84%" },
            { label: "Sleep Score", val: "8.2 hrs", color: "bg-blue-400/30", bar: "90%" },
          ].map(({ label, val, color, bar }) => (
            <div key={label} className={`${color} rounded-lg p-1.5`}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[7px] text-white/70">{label}</span>
                <span className="text-[7px] text-white font-bold">{val}</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white/60 rounded-full" style={{ width: bar }}/>
              </div>
            </div>
          ))}
          <div className="bg-violet-500 rounded-lg py-1.5 text-center text-[8px] text-white font-bold">
            Book Appointment
          </div>
        </div>
      </div>
    </div>
  );
}

function SaasVisual() {
  const bars = [40, 65, 50, 85, 72, 90, 78];
  return (
    <div className="h-52 bg-gradient-to-br from-emerald-600 to-teal-900 relative overflow-hidden flex items-start justify-center pt-5 px-5">
      <div className="absolute w-48 h-48 rounded-full bg-teal-400/20 -bottom-12 -right-12 blur-2xl"/>
      <div className="absolute w-32 h-32 rounded-full bg-emerald-300/10 top-0 left-0 blur-xl"/>

      {/* Dashboard card */}
      <div className="relative w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Top stats row */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
          {[["Shipments","1,284"],["On Time","96.4%"],["Alerts","3"]].map(([l,v]) => (
            <div key={l} className="px-2.5 py-2">
              <div className="text-[8px] text-white/50">{l}</div>
              <div className="text-[11px] text-white font-bold">{v}</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="p-3">
          <div className="text-[8px] text-white/50 mb-2">Weekly Deliveries</div>
          <div className="flex items-end gap-1.5 h-12">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-400/30 rounded-sm flex items-end overflow-hidden">
                <div
                  className="w-full bg-emerald-400/70 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["M","T","W","T","F","S","S"].map((d,i) => (
              <span key={i} className="text-[7px] text-white/40 flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, React.FC> = {
  ecommerce: EcommerceVisual,
  healthcare: HealthcareVisual,
  saas: SaasVisual,
};

export default function FeaturedWork() {
  return (
    <section className="section-pad bg-[#F7F8FC]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-label mb-4">Our Work</span>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              Projects we&apos;re proud of
            </h2>
            <p className="text-[#6B7180] text-lg">
              Real results for real businesses — from startups to established enterprises.
            </p>
          </div>
          <Link href="/portfolio" className="btn-secondary whitespace-nowrap shrink-0">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Visual = visuals[p.visual];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual area */}
                <Visual />

                <div className="p-6 flex flex-col flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${p.accentColor} mb-2`}>
                    {p.category}
                  </span>
                  <h3 className="font-bold text-[#0D0D1A] text-lg mb-2 group-hover:text-brand-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7180] text-sm leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center gap-2 bg-[#F5F6FC] rounded-xl px-3.5 py-2.5 mb-4">
                    <span className="text-sm font-medium text-[#0D0D1A]">{p.result}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#6B7180] bg-[#F5F6FC] border border-gray-100 px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
