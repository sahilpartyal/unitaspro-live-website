"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard business website typically takes 2–4 weeks. Complex web applications or custom platforms can take 8–16 weeks. We always discuss timelines upfront and stick to them.",
  },
  {
    q: "What does a typical project cost?",
    a: "Pricing depends on scope and complexity. A professional website starts from ₹30,000. Custom software and apps are quoted based on your specific requirements. Contact us for a free estimate.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across Australia, the UAE, UK, Canada, and the USA. We adapt to your timezone and communicate clearly throughout the project.",
  },
  {
    q: "Will I own the code and all project files?",
    a: "Yes. You own 100% of the code, designs, and all deliverables once the project is complete. No vendor lock-in, ever.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. All projects include a free 30-day post-launch support window. We also offer ongoing maintenance and support packages.",
  },
  {
    q: "What information do you need to get started?",
    a: "We start with a free discovery call to understand your goals, target audience, and requirements. From there we create a detailed proposal with timeline and cost breakdown.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-10 border-b border-gray-200">
          <div>
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="heading-xl font-black text-[#0D0D1A]">
              Frequently asked questions
            </h2>
          </div>
          <Link href="/contact" className="btn-primary group shrink-0">
            Talk to Us
            <span className="btn-arrow"><ArrowRight size={16}/></span>
          </Link>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-base leading-snug transition-colors
                  ${open === i ? "text-[#0D0D1A]" : "text-[#374151] group-hover:text-[#0D0D1A]"}`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5 transition-all
                  ${open === i
                    ? "border-[#0D0D1A] bg-[#0D0D1A] text-white"
                    : "border-gray-300 text-[#6B7180] group-hover:border-gray-500"}`}>
                  {open === i ? <Minus size={14}/> : <Plus size={14}/>}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#6B7180] text-base leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-[#9CA3AF]">
          Still have questions?{" "}
          <Link href="/contact" className="text-[#0D0D1A] font-semibold underline underline-offset-2 hover:no-underline">
            Send us a message
          </Link>
          {" "}— we respond within 24 hours.
        </p>

      </div>
    </section>
  );
}
