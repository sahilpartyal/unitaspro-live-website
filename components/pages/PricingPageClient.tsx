"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  MessageSquare,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  Globe,
  Code2,
  Smartphone,
  Megaphone,
} from "lucide-react";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Service tabs ── */
const SERVICE_TABS = [
  { id: "web",       label: "Web Design",       icon: Globe },
  { id: "software",  label: "Software Dev",      icon: Code2 },
  { id: "mobile",    label: "Mobile App",        icon: Smartphone },
  { id: "marketing", label: "Digital Marketing", icon: Megaphone },
];

/* ── Pricing per service ── */
type Plan = {
  name: string; tagline: string; price: string; priceNote: string;
  duration: string; cta: string; featured: boolean; badge?: string;
  features: string[];
};

const SERVICE_PLANS: Record<string, Plan[]> = {
  web: [
    {
      name: "Starter", tagline: "Landing pages & brochure sites.",
      price: "$1,000", priceNote: "starting from", duration: "2–3 weeks", cta: "Get Started", featured: false,
      features: ["Up to 5 pages", "Custom UI/UX design", "Mobile responsive", "Contact form", "Basic on-page SEO", "Speed optimisation", "Google Analytics", "30-day support"],
    },
    {
      name: "Business", tagline: "Full websites with CMS & e-commerce.", badge: "Most Popular",
      price: "$3,500", priceNote: "starting from", duration: "4–6 weeks", cta: "Get Started", featured: true,
      features: ["Up to 15 pages", "Everything in Starter", "CMS integration (Sanity/WordPress)", "E-commerce (Shopify/custom)", "Blog setup", "Advanced SEO", "Newsletter integration", "60-day support"],
    },
    {
      name: "Enterprise", tagline: "High-traffic portals & web apps.",
      price: "Custom", priceNote: "let's talk", duration: "8–14 weeks", cta: "Book a Call", featured: false,
      features: ["Unlimited pages", "Everything in Business", "Custom web application", "User authentication", "API integrations", "Multi-language", "Dedicated account manager", "12-month support"],
    },
  ],
  software: [
    {
      name: "MVP", tagline: "Validate your idea fast.",
      price: "$4,000", priceNote: "starting from", duration: "4–6 weeks", cta: "Get Started", featured: false,
      features: ["Core feature set only", "Web app (React/Next.js)", "Basic admin panel", "PostgreSQL database", "User authentication", "REST API", "Cloud deployment (AWS/GCP)", "30-day support"],
    },
    {
      name: "SaaS Platform", tagline: "Production-ready custom software.", badge: "Most Popular",
      price: "$12,000", priceNote: "starting from", duration: "8–14 weeks", cta: "Get Started", featured: true,
      features: ["Full feature scope", "Everything in MVP", "Role-based access control", "Payment gateway (Stripe)", "Email & notification system", "Analytics dashboard", "CI/CD pipeline", "60-day support"],
    },
    {
      name: "Enterprise", tagline: "Large-scale systems & dedicated teams.",
      price: "Custom", priceNote: "let's talk", duration: "Custom timeline", cta: "Book a Call", featured: false,
      features: ["Everything in SaaS Platform", "Microservices architecture", "Third-party ERP/CRM integrations", "Custom data pipelines", "SLA guarantee", "Dedicated engineering team", "24/7 monitoring", "12-month support + retainer"],
    },
  ],
  mobile: [
    {
      name: "MVP App", tagline: "Launch fast, validate your concept.",
      price: "$5,000", priceNote: "starting from", duration: "5–8 weeks", cta: "Get Started", featured: false,
      features: ["iOS & Android (React Native)", "Up to 8 screens", "User authentication", "Core feature set", "Push notifications", "App Store submission", "Basic analytics", "30-day support"],
    },
    {
      name: "Full App", tagline: "Feature-rich apps for real-world use.", badge: "Most Popular",
      price: "$12,000", priceNote: "starting from", duration: "10–16 weeks", cta: "Get Started", featured: true,
      features: ["Everything in MVP App", "Unlimited screens", "Payment integration", "Offline mode", "Real-time features (chat/maps)", "Backend API development", "Admin dashboard", "60-day support"],
    },
    {
      name: "Enterprise", tagline: "Complex apps at enterprise scale.",
      price: "Custom", priceNote: "let's talk", duration: "Custom timeline", cta: "Book a Call", featured: false,
      features: ["Everything in Full App", "Custom native modules", "IoT / hardware integration", "White-label capability", "Multi-language & region", "Dedicated mobile team", "SLA guarantee", "12-month support"],
    },
  ],
  marketing: [
    {
      name: "Starter", tagline: "Build your online presence.",
      price: "$300", priceNote: "/ month", duration: "3-month minimum", cta: "Get Started", featured: false,
      features: ["SEO audit & setup", "On-page optimisation (up to 10 pages)", "Google Business Profile", "Monthly rank tracking report", "2 blog posts / month", "Basic link building", "Google Analytics setup", "Email support"],
    },
    {
      name: "Growth", tagline: "Ads + SEO to drive real leads.", badge: "Most Popular",
      price: "$1,500", priceNote: "/ month", duration: "3-month minimum", cta: "Get Started", featured: true,
      features: ["Everything in Starter", "Google Ads management (up to $3k spend)", "Meta Ads (Facebook/Instagram)", "Landing page optimisation", "4 blog posts / month", "Conversion tracking & reporting", "A/B testing", "Priority support"],
    },
    {
      name: "Full-Service", tagline: "Complete digital marketing operation.",
      price: "Custom", priceNote: "let's talk", duration: "Ongoing retainer", cta: "Book a Call", featured: false,
      features: ["Everything in Growth", "Unlimited ad spend management", "YouTube / LinkedIn ads", "Full content strategy", "Video & creative production", "PR & outreach campaigns", "Dedicated marketing manager", "Weekly performance calls"],
    },
  ],
};

/* ── Comparison rows per service ── */
const TABLE_ROWS: Record<string, { label: string; values: (boolean | string)[] }[]> = {
  web: [
    { label: "No. of pages",         values: ["Up to 5",   "Up to 15",  "Unlimited"] },
    { label: "Custom UI/UX",         values: [true,         true,         true] },
    { label: "Mobile responsive",    values: [true,         true,         true] },
    { label: "CMS integration",      values: [false,        true,         true] },
    { label: "E-commerce",           values: [false,        true,         true] },
    { label: "Blog",                 values: [false,        true,         true] },
    { label: "Custom web app",       values: [false,        false,        true] },
    { label: "Multi-language",       values: [false,        false,        true] },
    { label: "Post-launch support",  values: ["30 days",   "60 days",   "12 months"] },
  ],
  software: [
    { label: "User authentication",  values: [true,        true,         true] },
    { label: "Admin panel",          values: [true,        true,         true] },
    { label: "Payment gateway",      values: [false,       true,         true] },
    { label: "Role-based access",    values: [false,       true,         true] },
    { label: "Email notifications",  values: [false,       true,         true] },
    { label: "ERP/CRM integrations", values: [false,       false,        true] },
    { label: "Microservices arch.",  values: [false,       false,        true] },
    { label: "SLA guarantee",        values: [false,       false,        true] },
    { label: "Post-launch support",  values: ["30 days",  "60 days",   "12 months"] },
  ],
  mobile: [
    { label: "iOS & Android",        values: [true,        true,         true] },
    { label: "Push notifications",   values: [true,        true,         true] },
    { label: "Payment integration",  values: [false,       true,         true] },
    { label: "Offline mode",         values: [false,       true,         true] },
    { label: "Real-time features",   values: [false,       true,         true] },
    { label: "Backend API",          values: [false,       true,         true] },
    { label: "IoT / hardware",       values: [false,       false,        true] },
    { label: "White-label",          values: [false,       false,        true] },
    { label: "Post-launch support",  values: ["30 days",  "60 days",   "12 months"] },
  ],
  marketing: [
    { label: "SEO optimisation",     values: [true,        true,         true] },
    { label: "Google Ads",           values: [false,       true,         true] },
    { label: "Meta Ads",             values: [false,       true,         true] },
    { label: "Content (blog posts)", values: ["2/month",  "4/month",   "Unlimited"] },
    { label: "A/B testing",          values: [false,       true,         true] },
    { label: "YouTube / LinkedIn",   values: [false,       false,        true] },
    { label: "Video production",     values: [false,       false,        true] },
    { label: "Dedicated manager",    values: [false,       false,        true] },
    { label: "Reporting",            values: ["Monthly",  "Weekly",    "Weekly + calls"] },
  ],
};

/* ── FAQ ── */
const faqs = [
  {
    q: "Are these fixed prices or estimates?",
    a: "The prices shown are starting points. Every project is scoped individually — you'll get a fixed quote after a free discovery call. No hidden costs.",
  },
  {
    q: "What if my project doesn't fit neatly into a plan?",
    a: "Most projects are custom. Book a free call and we'll scope your project exactly and give you a precise quote with a clear milestone plan.",
  },
  {
    q: "Do you charge separately for design and development?",
    a: "No. Design, development, testing, and deployment are all included in your project quote — one price, full scope.",
  },
  {
    q: "What's included in post-launch support?",
    a: "Bug fixes, minor content updates, performance monitoring, and priority Slack/email access. New features are quoted separately.",
  },
  {
    q: "Can I combine services (e.g. website + SEO)?",
    a: "Yes. We bundle services at a discount. Many clients start with a website and add a marketing retainer from month two.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0" onClick={() => setOpen((v) => !v)}>
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left group">
        <span className="font-semibold text-[#0D0D1A] text-base group-hover:text-[#2563EB] transition-colors duration-200">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#9CA3AF] shrink-0" /> : <ChevronDown size={18} className="text-[#9CA3AF] shrink-0" />}
      </button>
      {open && <p className="text-[#6B7180] text-sm leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

export default function PricingPageClient() {
  const [activeService, setActiveService] = useState("web");
  const plans = SERVICE_PLANS[activeService];
  const tableRows = TABLE_ROWS[activeService];

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-32 lg:pt-[13rem] pb-12">
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
              <rect key={i} x={d.x - d.s / 2} y={d.y - d.s / 2} width={d.s} height={d.s} fill="#0D0D1A" rx={3} transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Fixed Quotes · No Hidden Costs · Free Discovery Call
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
            <span className="font-light text-[#9CA3AF]">Simple pricing, </span>
            <span className="font-semibold text-[#0D0D1A]">no surprises.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-[#6B7180] text-lg max-w-xl mb-10" style={{ lineHeight: 1.7 }}>
            Fixed project quotes for every service. You know exactly what you&apos;re getting — and what it costs — before we write a single line of code.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex items-center gap-3 mb-24">
            <Link href="/contact" className="btn-primary group">
              Get Free Quote
              <span className="btn-arrow"><ArrowRight size={15} /></span>
            </Link>
            <a href="tel:+918264954344"
              className="hidden min-[576px]:inline-flex items-center gap-2 bg-white text-[#0D0D1A] font-semibold text-sm
                px-6 py-3.5 rounded-full border border-gray-200 transition-all duration-200
                hover:border-gray-400 hover:-translate-y-0.5 whitespace-nowrap shrink-0">
              Call us directly
            </a>
          </motion.div>

          <div aria-hidden className="w-full h-px border-t border-dashed border-gray-300 mb-10" />

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { icon: Shield, title: "Fixed-Price Quotes", desc: "Your quote is locked in. Scope changes are agreed in writing before we touch the budget." },
              { icon: MessageSquare, title: "Free Discovery Call", desc: "30 minutes with a senior engineer to scope your project and answer every question you have." },
              { icon: Clock, title: "Clear Timelines", desc: "Every project gets a milestone calendar. You see the finish line before we start." },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-3 py-4 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F1F3F8" }}>
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

      {/* ══════════════ SERVICE TABS + PRICING CARDS ══════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm text-[#6B7180] mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Pricing Plans
            </p>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">Choose your service to see pricing.</h2>
            <p className="text-[#6B7180] text-lg">All prices are starting points — your free quote will be exact.</p>
          </div>

          {/* Service tab switcher */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {SERVICE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveService(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeService === tab.id
                    ? "bg-[#0F172A] text-white shadow-[0_4px_16px_rgba(15,23,42,0.2)]"
                    : "bg-[#F1F3F8] text-[#374151] hover:bg-gray-200"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pricing cards — animated on tab change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: EASE }}
                  className={`relative rounded-2xl overflow-hidden ${
                    plan.featured
                      ? "shadow-[0_20px_60px_rgba(15,23,42,0.22)] lg:-mt-4 lg:mb-4"
                      : "shadow-[0_1px_12px_rgba(15,23,42,0.07)] hover:shadow-[0_8px_32px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: "linear-gradient(90deg, #1e40af, #2563EB, #60a5fa)" }}/>
                  )}

                  <div className={`p-8 h-full flex flex-col ${plan.featured ? "bg-[#0F172A] text-white" : "bg-white"}`}>
                    {plan.badge && (
                      <div className="mb-4">
                        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white/80">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <h3 className={`font-bold text-lg mb-1 ${plan.featured ? "text-white" : "text-[#0D0D1A]"}`}>{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.featured ? "text-white/60" : "text-[#6B7180]"}`}>{plan.tagline}</p>

                    <div className="mb-1">
                      <span className={`text-4xl font-bold tracking-tight ${plan.featured ? "text-white" : "text-[#0D0D1A]"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ml-2 ${plan.featured ? "text-white/50" : "text-[#9CA3AF]"}`}>
                        {plan.priceNote}
                      </span>
                    </div>
                    <p className={`text-xs mb-8 ${plan.featured ? "text-white/40" : "text-[#9CA3AF]"}`}>
                      Typical delivery: {plan.duration}
                    </p>

                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.featured ? "text-white/70" : "text-[#374151]"}`} />
                          <span className={`text-sm ${plan.featured ? "text-white/80" : "text-[#374151]"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 ${
                        plan.featured
                          ? "bg-white text-[#0F172A] hover:bg-gray-100 hover:-translate-y-0.5"
                          : "bg-[#0F172A] text-white hover:bg-[#1a2235] hover:-translate-y-0.5"
                      }`}>
                      {plan.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════ COMPARISON TABLE ══════════════ */}
      <section className="section-pad bg-[#F8F9FC]">
        <div className="container-main">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-sm text-[#6B7180] mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Compare Plans
            </p>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">What&apos;s included in each plan.</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService + "-table"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_12px_rgba(15,23,42,0.07)]"
            >
              {/* Header */}
              <div className="grid grid-cols-4 bg-[#0F172A]">
                <div className="p-5 col-span-1" />
                {plans.map((p) => (
                  <div key={p.name} className={`p-5 text-center ${p.featured ? "bg-white/[0.06]" : ""}`}>
                    <div className="font-bold text-white text-sm">{p.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{p.price}</div>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {tableRows.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"}`}>
                  <div className="p-4 lg:p-5 text-sm text-[#374151] font-medium col-span-1">{row.label}</div>
                  {row.values.map((val, vi) => (
                    <div key={vi} className={`p-4 lg:p-5 text-center flex items-center justify-center ${plans[vi].featured ? "bg-blue-50/30" : ""}`}>
                      {val === true ? (
                        <CheckCircle2 size={18} className="text-[#374151]" />
                      ) : val === false ? (
                        <Minus size={18} className="text-gray-300" />
                      ) : (
                        <span className="text-sm text-[#374151] font-medium">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-4 border-t border-gray-100 bg-[#F8F9FC]">
                <div className="p-5" />
                {plans.map((p) => (
                  <div key={p.name} className={`p-5 flex justify-center ${p.featured ? "bg-blue-50/30" : ""}`}>
                    <Link href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D0D1A] hover:text-[#2563EB] transition-colors duration-200">
                      {p.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className="lg:col-span-2 self-start lg:sticky lg:top-28"
            >
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
                FAQ
              </p>
              <h2 className="heading-xl font-bold text-[#0D0D1A] mb-5 leading-tight">Pricing questions answered.</h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                Still unsure? Book a free call — we&apos;ll scope your project and give you a clear fixed quote.
              </p>
              <Link href="/contact" className="btn-primary group">
                Book Free Call
                <span className="btn-arrow"><ArrowRight size={15} /></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {faqs.map((faq) => <FAQ key={faq.q} q={faq.q} a={faq.a} />)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
