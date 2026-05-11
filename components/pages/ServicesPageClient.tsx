"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Award,
} from "lucide-react";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const HERO_HIGHLIGHTS = [
  {
    icon: Award,
    title: "8+ Years Delivering",
    desc: "From startups to enterprise — we've shipped 150+ products across 4 continents.",
  },
  {
    icon: Users,
    title: "Senior-Only Team",
    desc: "No juniors on your project. Every build is led by engineers with 5+ years of real experience.",
  },
  {
    icon: TrendingUp,
    title: "Results Focused",
    desc: "We measure success by your growth — conversions, retention, and revenue — not just code.",
  },
];

const services = [
  {
    n: "01",
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Performance-first websites built for conversion.",
    desc: "Fast, beautiful websites and web apps that turn visitors into customers. Mobile-first, SEO-optimised, and built to grow with your business.",
    href: "/services/web-design",
    features: [
      "Custom UI/UX Design",
      "CMS Integration",
      "E-commerce",
      "SEO Optimised",
      "Speed under 2s",
      "Mobile-first",
    ],
  },
  {
    n: "02",
    icon: Code2,
    title: "Software Development",
    tagline: "Secure, scalable systems to power your operations.",
    desc: "Custom SaaS platforms, internal dashboards, APIs, and automation tools built to solve real business problems and scale as you grow.",
    href: "/services/software-development",
    features: [
      "SaaS Platforms",
      "Admin Dashboards",
      "API Development",
      "Cloud Deployment",
      "Automation",
      "Integrations",
    ],
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android apps built to perform.",
    desc: "Cross-platform apps built in React Native — fast, native-feeling, and designed for users worldwide. From concept to App Store launch.",
    href: "/services/mobile-app",
    features: [
      "iOS & Android",
      "React Native",
      "App Store Launch",
      "Push Notifications",
      "Offline Support",
      "Analytics",
    ],
  },
  {
    n: "04",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    tagline: "Growth campaigns tied directly to revenue.",
    desc: "SEO, Google Ads, Meta Ads, and content strategy — all tied directly to revenue. We track what matters and cut what doesn't.",
    href: "/services/digital-marketing",
    features: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Content Strategy",
      "Analytics",
      "Conversion Optimisation",
    ],
  },
];

const WHY_US = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Fixed schedules and weekly progress updates. No black-hole development — you always know where things stand.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    desc: "Every build goes through code review, testing, and QA sign-off before it reaches your hands.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Lean team, no bureaucracy. Most projects go from kickoff to launch in 6–12 weeks.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Support",
    desc: "We stay by your side post-launch with dedicated maintenance, updates, and growth campaigns.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered", sub: "Across diverse industries" },
  { value: "95+", label: "Happy Clients", sub: "Serving clients in 15+ countries" },
  { value: "97%", label: "Client Satisfaction", sub: "Based on long-term partnerships" },
  { value: "8+", label: "Years of Experience", sub: "Growing steadily since 2019" },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-32 lg:pt-[13rem] pb-12">
        {/* Grid + Diamond decoration — right side */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
            }}
          />
          <svg
            viewBox="0 0 400 400"
            className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-[0.07]"
          >
            {[
              { x: 200, y: 200, s: 24 }, { x: 160, y: 160, s: 18 }, { x: 240, y: 160, s: 18 },
              { x: 160, y: 240, s: 18 }, { x: 240, y: 240, s: 18 }, { x: 200, y: 130, s: 14 },
              { x: 130, y: 200, s: 14 }, { x: 270, y: 200, s: 14 }, { x: 200, y: 270, s: 14 },
              { x: 140, y: 140, s: 10 }, { x: 260, y: 140, s: 10 }, { x: 140, y: 260, s: 10 },
              { x: 260, y: 260, s: 10 }, { x: 200, y: 100, s: 8 }, { x: 100, y: 200, s: 8 },
              { x: 300, y: 200, s: 8 }, { x: 200, y: 300, s: 8 },
            ].map((d, i) => (
              <rect
                key={i}
                x={d.x - d.s / 2}
                y={d.y - d.s / 2}
                width={d.s}
                height={d.s}
                fill="#0D0D1A"
                rx={3}
                transform={`rotate(45 ${d.x} ${d.y})`}
              />
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          {/* Dot eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Web, Software, Mobile & Marketing — All Under One Roof
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300" />
          </motion.div>

          {/* H1 two-tone */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="font-light text-[#9CA3AF]">Everything your business </span>
            <span className="font-semibold text-[#0D0D1A]">needs online.</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-24"
          >
            <Link href="/contact" className="btn-primary group">
              Get Free Quote
              <span className="btn-arrow">
                <ArrowRight size={15} />
              </span>
            </Link>
            <a
              href="tel:+918264954344"
              className="hidden min-[576px]:inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3.5 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              Call us directly
            </a>
          </motion.div>

          {/* Separator + 3-col highlights */}
          <div aria-hidden className="w-full h-px border-t border-dashed border-gray-300 mb-10" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200"
          >
            {HERO_HIGHLIGHTS.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-3 py-4 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#F1F3F8" }}
                >
                  <s.icon size={16} style={{ color: "#374151" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-semibold text-sm text-[#0D0D1A]">{s.title}</h3>
                    <ArrowRight size={14} className="text-gray-300 shrink-0" />
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#0F172A" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #1A56DB 0%, transparent 70%)" }}
          />
        </div>
        <div className="container-main relative py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="text-center lg:px-8 py-4 lg:py-0"
              >
                <div
                  className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {s.value}
                </div>
                <div className="text-white/80 text-sm font-semibold mb-0.5">{s.label}</div>
                <div className="text-white/35 text-xs">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-lg">
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
                Our Services
              </p>
              <h2 className="heading-xl text-[#0D0D1A] mb-3">
                Four Services. One Team. Zero Middlemen.
              </h2>
              <p className="text-[#6B7180] text-lg">
                One point of contact across design, development, and marketing — no handoffs, no gaps.
              </p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <Link
                  href={s.href}
                  className="group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 py-10
                    -mx-4 px-4 rounded-2xl hover:bg-[#F8F9FC] transition-colors duration-300"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-20 shrink-0">
                    <span
                      className="text-4xl font-bold tabular-nums text-gray-100 group-hover:text-gray-200
                        transition-colors leading-none select-none"
                    >
                      {s.n}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "#F1F3F8" }}
                    >
                      <s.icon size={22} style={{ color: "#374151" }} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-[#0D0D1A] text-xl leading-snug mb-1">{s.title}</h2>
                    <p className="text-sm font-semibold text-[#374151] mb-3">{s.tagline}</p>
                    <p className="text-[#6B7180] text-sm leading-relaxed mb-5 max-w-xl">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 text-xs text-[#374151] bg-[#F1F3F8] px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle2 size={11} />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-3 shrink-0 lg:self-center">
                    <span className="text-sm font-semibold text-[#374151] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
                      Learn more
                    </span>
                    <div
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                        group-hover:border-[#0D0D1A] group-hover:bg-[#0D0D1A] transition-all duration-300"
                    >
                      <ArrowRight
                        size={15}
                        className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY UNITASPRO ══════════════ */}
      <section className="section-pad bg-[#F8F9FC]">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-lg">
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
                Why Unitaspro
              </p>
              <h2 className="heading-xl text-[#0D0D1A] mb-3">Experienced. Accountable. Fast.</h2>
              <p className="text-[#6B7180] text-lg">
                We run lean so you get faster delivery and a single point of contact from kickoff to launch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100
                  shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                  hover:-translate-y-1
                  transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #374151, #37415180)" }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#F1F3F8" }}
                >
                  <item.icon size={20} style={{ color: "#374151" }} />
                </div>
                <h3 className="font-bold text-base text-[#0D0D1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7180] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
