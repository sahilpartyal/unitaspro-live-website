"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, FileText, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay },
});

const steps = [
  {
    num: "01", Icon: PhoneCall, color: "#2563EB", bg: "#EFF6FF",
    title: "Discovery Call",
    desc: "A free 30-minute consultation. We listen to your goals and map out a practical strategy. No sales pressure, no jargon — just an honest conversation.",
  },
  {
    num: "02", Icon: FileText, color: "#7C3AED", bg: "#F5F3FF",
    title: "Proposal & Plan",
    desc: "Within 48 hours, you'll receive a full scope of work, fixed pricing, and a clear timeline. We refine the details until you are 100% confident.",
  },
  {
    num: "03", Icon: Layers, color: "#059669", bg: "#ECFDF5",
    title: "Design & Build",
    desc: "Transparent weekly updates. We build in sprints with regular demos, so you see the product take shape in real-time. No surprises at the finish line.",
  },
  {
    num: "04", Icon: Rocket, color: "#D97706", bg: "#FFFBEB",
    title: "Launch & Grow",
    desc: "Full technical deployment. We handle the go-live process, optimize for peak speed, and provide 30 days of dedicated support to ensure total stability.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-pad bg-[#F7F8FC]" id="process">
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="heading-xl font-black text-[#0D0D1A] mb-3 leading-tight">
              Turning complex ideas into<br />seamless digital reality
            </h2>
            <p className="text-[#6B7180] text-lg">
              Four clear steps — from first conversation to successful launch.
            </p>
          </div>
          <Link href="/contact" className="btn-primary group shrink-0">
            Start the Process
            <span className="btn-arrow"><ArrowRight size={16} /></span>
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
            <motion.div key={step.num} {...fadeUp(0.06 + i * 0.08)} className="relative z-10 group/step">
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100/80
                shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                hover:-translate-y-1
                transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}99)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 0%, ${step.bg} 0%, transparent 60%)` }}
                />
                <div className="relative z-10 flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/step:scale-110"
                    style={{ background: step.bg }}
                  >
                    <step.Icon size={20} style={{ color: step.color }} />
                  </div>
                  <span className="text-3xl font-black tabular-nums text-gray-100 group-hover/step:text-gray-200 transition-colors select-none leading-none">
                    {step.num}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-base text-[#0D0D1A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7180] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
