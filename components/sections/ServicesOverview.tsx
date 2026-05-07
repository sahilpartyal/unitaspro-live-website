"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────── */

const ACCENT = "#0D0D1A";
const ACCENT_BG = "#F1F3F8";
const SECTION_BG = "#F8F9FC";

const services = [
  {
    number: "01", label: "Web Design & Development",
    tagline: "Performance-first platforms built for high conversion.",
    title: "Websites built for speed and sales",
    description: "We merge clean aesthetics with high-performance code. Using Next.js and React, we build platforms that load in under 2 seconds and are architected to rank high on Google. We focus on clear user journeys that turn casual traffic into measurable profit.",
    href: "/services/web-design",
    tags: ["Next.js", "React", "WordPress", "Webflow"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    number: "02", label: "Custom Software Development",
    tagline: "Secure, scalable systems to power your operations.",
    title: "Software that simplifies your complexity",
    description: "We build secure, production-grade tools tailored to your specific workflow. From internal management dashboards to robust APIs, our systems act as a solid digital backbone, allowing your business to scale without the technical headaches.",
    href: "/services/software-development",
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=800&q=80",
  },
  {
    number: "03", label: "Mobile App Development",
    tagline: "Premium iOS & Android experiences for a global audience.",
    title: "Apps your users will love to use",
    description: "We handle the entire lifecycle, from UX wireframing to App Store deployment. Using React Native and Flutter, we create fast, intuitive mobile experiences that keep your customers connected to your brand 24/7.",
    href: "/services/mobile-app",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    number: "04", label: "Digital Marketing & SEO",
    tagline: "Strategic growth engines focused on measurable ROI.",
    title: "Marketing that delivers actual ROI",
    description: "Forget vanity metrics like likes. We use technical SEO and data-driven ad campaigns to put you in front of ready-to-buy customers. Our goal is simple: lower your acquisition costs and steadily increase your monthly recurring revenue.",
    href: "/services/digital-marketing",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ─── Section ───────────────────────────────────────────── */

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = services[activeIndex];

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-main">

        {/* Label sits above both columns so they share the same top edge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-6"
        >
          <span className="section-label">What We Do</span>
        </motion.div>

        {/* items-stretch (default) so right card fills the same height as left sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* ── Left: sticky sidebar — self-start so it doesn't stretch, sticks at top ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 self-start lg:sticky lg:top-28"
          >
            <h2 className="heading-xl font-bold text-[#0D0D1A] mb-10 leading-tight">
              High-End Tech and<br />Marketing, All in<br />One Place
            </h2>

            {/* Nav list */}
            <div className="flex flex-col gap-1">
              {services.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={s.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: EASE }}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative text-left pl-5 pr-10 py-3.5 rounded-xl transition-all duration-250 ${
                      isActive ? "bg-gray-50/80" : "hover:bg-gray-50/50"
                    }`}
                  >
                    {/* Accent bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                        style={{ background: ACCENT }}
                        transition={{ duration: 0.28, ease: EASE }}
                      />
                    )}

                    <div className="flex items-start gap-3">
                      <span
                        className="text-xs font-mono font-bold mt-0.5 shrink-0 transition-colors duration-200"
                        style={{ color: isActive ? ACCENT : "#C4C9D4" }}
                      >
                        {s.number}
                      </span>
                      <div>
                        <div className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                          isActive ? "text-[#0D0D1A]" : "text-[#9CA3AF] group-hover:text-[#6B7180]"
                        }`}>
                          {s.label}
                        </div>
                        <div className={`text-xs mt-0.5 transition-colors duration-200 leading-relaxed ${
                          isActive ? "text-[#6B7180]" : "text-gray-300 group-hover:text-[#9CA3AF]"
                        }`}>
                          {s.tagline}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <ArrowRight size={14} style={{ color: ACCENT }} />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: content card — flex chain so card fills the grid row height ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="lg:col-span-3 flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ willChange: "transform, opacity" }}
                className="flex-1 flex flex-col"
              >
                {/* Card stretches to fill the full flex column height */}
                <div className="flex-1 rounded-3xl overflow-hidden border border-black/[0.05] shadow-[0_2px_32px_rgba(15,23,42,0.07)] flex flex-col">
                  <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">

                    {/* Text side — white */}
                    <div className="bg-white px-8 py-8 lg:px-9 lg:py-10 flex flex-col justify-between">
                      <div className="flex flex-col gap-4">
                        {/* Label */}
                        <span
                          className="inline-block text-xs font-bold px-3 py-1.5 rounded-full w-fit tracking-wide"
                          style={{ background: ACCENT_BG, color: ACCENT }}
                        >
                          {service.label}
                        </span>

                        {/* Title */}
                        <h3
                          className="font-bold text-[#0D0D1A] leading-tight"
                          style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.65rem)", letterSpacing: "-0.025em" }}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#6B7180] text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[#6B7180]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2.5 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group w-fit mt-6"
                        style={{ background: ACCENT, color: "#fff" }}
                      >
                        Explore service
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                          <ArrowRight size={11} className="text-white" />
                        </div>
                      </Link>
                    </div>

                    {/* Image side */}
                    <div className="relative overflow-hidden min-h-[280px]">
                      <Image
                        src={service.image}
                        alt={service.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D1A]/10 to-transparent"/>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
