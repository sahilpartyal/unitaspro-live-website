"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, FileText, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description: "Free 30-minute call. We understand your goals, audience, and requirements. No jargon, no pressure.",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Plan",
    description: "Detailed proposal with scope, timeline, and fixed price within 48 hours. You review, we refine.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    iconColor: "text-violet-600",
  },
  {
    number: "03",
    icon: Layers,
    title: "Design & Build",
    description: "Weekly demos so you always see progress. We build iteratively — no surprises at the end.",
    accent: "#059669",
    accentBg: "#ECFDF5",
    iconColor: "text-emerald-600",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Grow",
    description: "We go live, monitor performance, and provide 30 days free support. Your success is our goal.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    iconColor: "text-amber-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-[#F7F8FC]">
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              Simple process,<br />exceptional results
            </h2>
            <p className="text-[#6B7180] text-lg">
              Four clear steps — from first conversation to successful launch.
            </p>
          </div>
          <Link href="/contact" className="btn-primary group shrink-0">
            Start the Process
            <span className="btn-arrow"><ArrowRight size={16}/></span>
          </Link>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[2.2rem] left-[calc(12.5%+2.2rem)] right-[calc(12.5%+2.2rem)] h-px z-0"
            style={{ background: "linear-gradient(to right, #E5E7EB, #C4B5FD 50%, #E5E7EB)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 group/step"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100/80
                shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                hover:-translate-y-1
                transition-all duration-300 overflow-hidden"
              >
                {/* Accent top bar — glows in on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${step.accent}, ${step.accent}99)` }}
                />

                {/* Subtle bg tint — barely visible */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 0%, ${step.accentBg} 0%, transparent 60%)` }}
                />

                {/* Number + Icon */}
                <div className="relative z-10 flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/step:scale-110"
                    style={{ background: step.accentBg }}
                  >
                    <step.icon size={20} className={step.iconColor} />
                  </div>
                  <span className="text-3xl font-black tabular-nums text-gray-100 group-hover/step:text-gray-200 transition-colors select-none">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-bold text-base text-[#0D0D1A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7180] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
