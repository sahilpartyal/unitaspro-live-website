"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageSquare } from "lucide-react";

const faqs = [
  {
    q: "What services does Unitaspro offer?",
    a: "We are a full-service IT agency specializing in Web Design & Development, Software Development (SaaS, internal tools), Mobile App Development (iOS & Android), and Digital Marketing. We provide end-to-end solutions from initial strategy to post-launch growth.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have delivered 150+ projects across various sectors, including E-commerce, Healthcare, Logistics, and Fintech. Our team is experienced in building everything from retail platforms to complex healthcare apps and internal business dashboards.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We have successfully served clients in over 15 countries, including the USA, UK, UAE, Australia, and Canada, maintaining high international standards of communication and delivery.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "The timeline depends on complexity. A professional website typically takes 4–6 weeks, while complex software or mobile apps can take 3–6 months. During our initial discovery call, we provide a clear, fixed timeline with weekly milestones.",
  },
  {
    q: "How will we communicate during the project?",
    a: "Transparency is our priority. You will have a dedicated project manager and direct access to our team. We avoid late deadlines and prefer real-time, proactive communication.",
  },
  {
    q: "Which technologies do you use?",
    a: "We use modern, scalable stacks including Next.js, React, Node.js, Python, and React Native. For CMS-based sites, we work with WordPress and Webflow. We ensure every site is optimized for speed (loading in under 2 seconds) and SEO.",
  },
  {
    q: "Will my website be mobile-friendly and SEO-optimized?",
    a: "Absolutely. All our websites are mobile-first and responsive. We also follow strict technical SEO guidelines to ensure your site ranks well on Google and provides a great user experience.",
  },
  {
    q: "Do you provide support after the project is launched?",
    a: "Yes, every project includes 30 days of free post-launch support. We monitor performance and fix any bugs to ensure a smooth transition. We also offer long-term maintenance packages if you'd like us to handle updates and security.",
  },
  {
    q: "Can you help me redesign an existing website or app?",
    a: "Definitely. We can perform a full audit of your current platform and rebuild it using modern technologies to improve speed, UI/UX, and conversion rates.",
  },
  {
    q: "How do I get started?",
    a: "The first step is a free 30-minute discovery call. You can book it directly through our website or send us a message via our contact form. We typically respond to all inquiries within 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-[#F7F8FC]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left sticky panel ── */}
          <div className="lg:sticky lg:top-28">
            <span className="section-label mb-5 inline-flex">FAQ</span>
            <h2 className="heading-xl font-black text-[#0D0D1A] mb-5 leading-tight">
              Frequently asked<br />questions
            </h2>
            <p className="text-[#6B7180] text-base leading-relaxed mb-8">
              Can&apos;t find what you&apos;re looking for? We&apos;re always happy to help directly.
            </p>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden p-6"
              style={{ background: "linear-gradient(140deg,#0F172A 0%,#1e2d5a 100%)" }}>
              <div aria-hidden className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}/>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <MessageSquare size={18} className="text-white/70"/>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2" style={{ letterSpacing: "-0.02em" }}>
                  Still have questions?
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  Our team responds within 24 hours — no bots, just real answers.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F172A] text-xs font-bold hover:bg-gray-50 transition-colors group">
                  Talk to us
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className={`border-b border-gray-200 last:border-0 ${open === i ? "bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(15,23,42,0.06)] mb-2 -mx-4 px-4" : ""}`}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-semibold text-[15px] leading-snug transition-colors
                    ${open === i ? "text-[#0D0D1A]" : "text-[#374151] group-hover:text-[#0D0D1A]"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
                    ${open === i
                      ? "bg-[#0D0D1A] text-white"
                      : "bg-gray-100 text-[#6B7180] group-hover:bg-gray-200"}`}>
                    {open === i ? <Minus size={13}/> : <Plus size={13}/>}
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
                      <p className="pb-5 text-[#6B7180] text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
