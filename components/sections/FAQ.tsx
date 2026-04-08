"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What Services Does Unitaspro Offer?",
    a: "We are a full-service IT agency specializing in Web Design & Development, Software Development (SaaS, internal tools), Mobile App Development (iOS & Android), and Digital Marketing. We provide end-to-end solutions from initial strategy to post-launch growth.",
  },
  {
    q: "What Industries Do You Specialize In?",
    a: "We have delivered 150+ projects across various sectors, including E-commerce, Healthcare, Logistics, and Fintech. Our team is experienced in building everything from retail platforms to complex healthcare apps and internal business dashboards.",
  },
  {
    q: "Do You Work With International Clients?",
    a: "Yes. We have successfully served clients in over 15 countries, including the USA, UK, UAE, Australia, and Canada, maintaining high international standards of communication and delivery.",
  },
  {
    q: "How Long Does It Take To Complete A Project?",
    a: "The timeline depends on complexity. A professional website typically takes 4–6 weeks, while complex software or mobile apps can take 3–6 months. During our initial discovery call, we provide a clear, fixed timeline with weekly milestones.",
  },
  {
    q: "How Will We Communicate During The Project?",
    a: "Transparency is our priority. You will have a dedicated project manager and direct access to our team. We avoid late deadlines and prefer real-time, proactive communication.",
  },
  {
    q: "Which Technologies Do You Use?",
    a: "We use modern, scalable stacks including Next.js, React, Node.js, Python, and React Native. For CMS-based sites, we work with WordPress and Webflow. We ensure every site is optimized for speed (loading in under 2 seconds) and SEO.",
  },
  {
    q: "Will My Website Be Mobile-Friendly And SEO-Optimized?",
    a: "Absolutely. All our websites are mobile-first and responsive. We also follow strict technical SEO guidelines to ensure your site ranks well on Google and provides a great user experience.",
  },
  {
    q: "Do You Provide Support After The Project Is Launched?",
    a: "Yes, every project includes 30 days of free post-launch support. We monitor performance and fix any bugs to ensure a smooth transition. We also offer long-term maintenance packages if you'd like us to handle updates and security.",
  },
  {
    q: "Can You Help Me Redesign An Existing Website Or App?",
    a: "Definitely. We can perform a full audit of your current platform and rebuild it using modern technologies to improve speed, UI/UX, and conversion rates.",
  },
  {
    q: "How Do I Get Started?",
    a: "The first step is a free 30-minute Discovery Call. You can book it directly through our website or send us a message via our contact form. We typically respond to all inquiries within 24 hours.",
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
