"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Shield,
  MessageSquare,
  Globe2,
  Target,
  Zap,
  Users,
  Award,
  Quote,
  TrendingUp,
  Clock,
  Lightbulb,
  Handshake,
  Rocket,
} from "lucide-react";

/* ── Animation ── */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Data ── */

const HERO_HIGHLIGHTS = [
  { icon: Lightbulb, title: "Senior-Only Team", desc: "Work directly with seniors having five or more years' experience.", color: "#2563EB" },
  { icon: Handshake, title: "Transparent Process", desc: "We provide fixed quotes and consistent weekly progress reports.", color: "#7C3AED" },
  { icon: Rocket, title: "Global Delivery", desc: "Serving high-growth brands in the UAE, UK, Australia, Canada, and India.", color: "#059669" },
];

const stats = [
  { value: "150+", label: "Projects Delivered", sub: "Across diverse industries" },
  { value: "95+", label: "Happy Clients", sub: "Serving clients in 15+ countries" },
  { value: "97%", label: "Client Satisfaction", sub: "Based on long-term partnerships" },
  { value: "8+", label: "Years of Experience", sub: "Growing steadily since 2018" },
];

const values = [
  {
    icon: Heart,
    title: "Client-Centric",
    desc: "We align every technical decision with your business goals. If a feature doesn't help you grow, we don't build it.",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
  },
  {
    icon: Shield,
    title: "Quality First",
    desc: "We skip the shortcuts to avoid technical debt. Every line of code is written to be a long-term asset for your company.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
  },
  {
    icon: MessageSquare,
    title: "Transparent",
    desc: "Direct Slack access, honest timelines, and real-time updates. We kill the agency black box with total visibility.",
    accent: "#059669",
    accentBg: "#ECFDF5",
  },
  {
    icon: Globe2,
    title: "Global Thinking",
    desc: "Engineering for the world stage. We deliver international-grade software for leaders in the UAE, Canada, UK, and beyond.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "We align every technical choice with your bottom line. If it doesn't drive revenue or retention, we don't build it.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "No \"black hole\" development. You get a fixed schedule with weekly updates, so you always know exactly where we are.",
  },
  {
    icon: Zap,
    title: "Senior-Only Team",
    desc: "We don't use your project as a training ground. You get direct access to experts with 5+ years of real-world experience.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Partners",
    desc: "A launch is just the start. We stay by your side with dedicated support to ensure your product scales as you grow.",
  },
];

const team = [
  {
    name: "Sahil Partyal",
    role: "Founder & CEO",
    initials: "SP",
    color: "#2563EB",
    quote: "Great software should be accessible to every business.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    initials: "PS",
    color: "#7C3AED",
    quote: "Design is not just how it looks — it's how it works.",
  },
  {
    name: "Rohan Mehta",
    role: "Backend Engineer",
    initials: "RM",
    color: "#059669",
    quote: "Clean architecture makes everything else possible.",
  },
  {
    name: "Ankit Verma",
    role: "Frontend Developer",
    initials: "AV",
    color: "#D97706",
    quote: "Every interaction should feel effortless.",
  },
  {
    name: "Neha Gupta",
    role: "Digital Marketing",
    initials: "NG",
    color: "#DC2626",
    quote: "Growth is a system, not an accident.",
  },
  {
    name: "Arjun Singh",
    role: "Mobile Developer",
    initials: "AS",
    color: "#0891B2",
    quote: "Native performance, delightful experience.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* ═══════════════════ HERO — Service-page style ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-12">
        {/* Abstract geometric pattern — right side */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
            }}/>
          <svg viewBox="0 0 400 400" className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-[0.07]">
            {[
              { x: 200, y: 200, s: 24 }, { x: 160, y: 160, s: 18 }, { x: 240, y: 160, s: 18 },
              { x: 160, y: 240, s: 18 }, { x: 240, y: 240, s: 18 }, { x: 200, y: 130, s: 14 },
              { x: 130, y: 200, s: 14 }, { x: 270, y: 200, s: 14 }, { x: 200, y: 270, s: 14 },
              { x: 140, y: 140, s: 10 }, { x: 260, y: 140, s: 10 }, { x: 140, y: 260, s: 10 },
              { x: 260, y: 260, s: 10 }, { x: 200, y: 100, s: 8 }, { x: 100, y: 200, s: 8 },
              { x: 300, y: 200, s: 8 }, { x: 200, y: 300, s: 8 },
            ].map((d, i) => (
              <rect key={i} x={d.x - d.s/2} y={d.y - d.s/2} width={d.s} height={d.s}
                fill="#0D0D1A" rx={3}
                transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          {/* Eyebrow with dashed line */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
            className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>
              Expert Design, Software Development, And Marketing Since 2018
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </motion.div>

          {/* Headline — light/bold split */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Launch Faster. </span>
            <span className="font-semibold text-[#0D0D1A]">Grow Much Bigger</span>
          </motion.h1>

          {/* Dual CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex items-center gap-3 mb-24">
            <Link href="/contact" className="btn-primary group">
              Work with us
              <span className="btn-arrow"><ArrowRight size={15}/></span>
            </Link>
            <a href="tel:+918264954344"
              className="inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5">
              Book a free call
            </a>
          </motion.div>

          {/* Dashed separator + 3-column highlight cards */}
          <div aria-hidden className="w-full h-px border-t border-dashed border-gray-300 mb-10"/>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {HERO_HIGHLIGHTS.map((s) => (
              <div key={s.title} className="flex items-start gap-3 py-4 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}12` }}>
                  <s.icon size={16} style={{ color: s.color }}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-semibold text-sm text-[#0D0D1A]">{s.title}</h3>
                    <ArrowRight size={14} className="text-gray-300 shrink-0"/>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(ellipse, #1A56DB 0%, transparent 70%)",
            }}
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
                <div className="text-white/80 text-sm font-semibold mb-0.5">
                  {s.label}
                </div>
                <div className="text-white/35 text-xs">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ OUR STORY ═══════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left sticky */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="lg:col-span-2 self-start lg:sticky lg:top-28"
            >
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Our Story</p>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mt-1 mb-5 leading-tight">
                Proven In The Real World. Trusted By The Best
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                We&apos;ve spent years in the trenches building for international markets. We take everything we&apos;ve learned from 30+ successful launches and apply it directly to your project.
              </p>

              {/* Mini stats */}
              <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
                {[
                  { v: "2018", l: "Founded" },
                  { v: "20+", l: "Team members" },
                  { v: "4", l: "Core services" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-[#0D0D1A] leading-none mb-0.5">
                      {s.v}
                    </div>
                    <div className="text-xs text-[#9CA3AF] font-medium">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — story paragraphs as timeline */}
            <div className="lg:col-span-3 flex flex-col">
              {[
                {
                  year: "The Beginning",
                  text: "Unitaspro launched in 2018 as a Mohali-based company. We provide professional software & mobile app development along with digital marketing services for businesses of all sizes. Our foundation is built on clean code and transparent technical work.",
                },
                {
                  year: "Growing Global",
                  text: "We now serve startups and established enterprises across the UAE, Australia, Canada and the UK. Our team includes senior engineers, designers, and digital marketers focused on building reliable digital products for international markets.",
                },
                {
                  year: "Our Approach",
                  text: "Every project receives a custom roadmap and our full attention. We do not use generic templates or shortcuts. We build specific digital solutions that match your exact business goals and metrics.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.07,
                    ease: EASE,
                  }}
                  className="group relative flex items-start gap-5 py-7 border-b border-gray-100 last:border-0
                    -mx-4 px-4 rounded-xl hover:bg-gray-50/70 transition-colors duration-200"
                >
                  {/* Accent left bar */}
                  <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Year badge */}
                  <div className="w-11 h-11 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-brand-600 font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#0D0D1A] text-base leading-snug mb-1.5">
                      {item.year}
                    </h3>
                    <p className="text-[#6B7180] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUES — HowItWorks-style cards ═══════════════════ */}
      <section className="section-pad bg-[#F7F8FC]">
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-lg">
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Our Values</p>
              <h2 className="heading-xl text-[#0D0D1A] mb-3">
                Doing It Right, Even When It&apos;s Harder.
              </h2>
              <p className="text-[#6B7180] text-lg">
                Shortcuts lead to technical debt. We follow these principles to build products that last for years, not months.
              </p>
            </div>
          </div>

          {/* Cards grid — matches HowItWorks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connector line — desktop */}
            <div
              className="hidden lg:block absolute top-[2.2rem] left-[calc(12.5%+2.2rem)] right-[calc(12.5%+2.2rem)] h-px z-0"
              style={{
                background:
                  "linear-gradient(to right, #E5E7EB, #C4B5FD 50%, #E5E7EB)",
              }}
            />

            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative z-10 group/step"
              >
                <div
                  className="relative h-full bg-white rounded-2xl p-6 border border-gray-100/80
                  shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                  hover:-translate-y-1
                  transition-all duration-300 overflow-hidden"
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${v.accent}, ${v.accent}99)`,
                    }}
                  />

                  {/* Subtle bg tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 20% 0%, ${v.accentBg} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Icon + Number */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/step:scale-110"
                      style={{ background: v.accentBg }}
                    >
                      <v.icon size={20} style={{ color: v.accent }} />
                    </div>
                    <span className="text-3xl font-bold tabular-nums text-gray-100 group-hover/step:text-gray-200 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-base text-[#0D0D1A] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#6B7180] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY UNITASPRO — Benefits style ═══════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left sticky */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="lg:col-span-2 self-start lg:sticky lg:top-28"
            >
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Why Choose Us</p>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mt-1 mb-5 leading-tight">
                Built For The Long Term, Not Just The Launch.
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                No complex jargon or hidden costs. Just an experienced team dedicated to building high-quality products that help your business stand out and stay ahead.
              </p>
              <Link href="/contact" className="btn-primary group">
                Start a Project
                <span className="btn-arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            {/* Right list */}
            <div className="lg:col-span-3 flex flex-col">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.07,
                    ease: EASE,
                  }}
                  className="group relative flex items-start gap-5 py-6 border-b border-gray-100 last:border-0
                    -mx-4 px-4 rounded-xl hover:bg-gray-50/70 transition-colors duration-200 cursor-default"
                >
                  {/* Accent left bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: values[i % values.length].accent,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: values[i % values.length].accentBg,
                    }}
                  >
                    <item.icon
                      size={20}
                      style={{
                        color: values[i % values.length].accent,
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-bold text-[#0D0D1A] text-base leading-snug">
                        {item.title}
                      </h3>
                      <span
                        className="text-xs font-mono font-bold shrink-0 tabular-nums transition-colors duration-200 group-hover:opacity-100 opacity-30"
                        style={{
                          color: values[i % values.length].accent,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-[#6B7180] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="section-pad bg-[#F7F8FC] hidden">
        <div className="container-main">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Our Team</p>
            <h2 className="heading-xl text-[#0D0D1A] mb-4">
              The people behind the work
            </h2>
            <p className="text-[#6B7180] text-lg">
              Senior professionals — no juniors learning on your project.
            </p>
          </div>

          {/* Featured — Founder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0F172A] rounded-2xl p-8 lg:p-10 mb-6 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(ellipse, #1A56DB 0%, transparent 70%)",
              }}
            />
            <Quote size={36} className="text-white/10 mb-4" />
            <p className="text-white text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl relative z-10">
              &ldquo;{team[0].quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${team[0].color}70, ${team[0].color})`,
                }}
              >
                {team[0].initials}
              </div>
              <div>
                <div className="font-semibold text-white">{team[0].name}</div>
                <div className="text-white/50 text-sm">{team[0].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Rest of team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {team.slice(1).map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group/step relative bg-white rounded-2xl p-5 border border-gray-100/80
                  shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                  hover:-translate-y-1
                  transition-all duration-300 overflow-hidden"
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${m.color}, ${m.color}99)`,
                  }}
                />

                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base
                      transition-transform duration-300 group-hover/step:scale-110 shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${m.color}70, ${m.color})`,
                    }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D0D1A] text-sm">
                      {m.name}
                    </div>
                    <div className="text-[#9CA3AF] text-xs mt-0.5">
                      {m.role}
                    </div>
                  </div>
                  <p className="text-[#6B7180] text-xs leading-relaxed italic">
                    &ldquo;{m.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
