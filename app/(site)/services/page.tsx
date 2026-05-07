import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Globe, Code2, Smartphone, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Web, Software & App Development Services",
  description:
    "Web design, custom software, mobile apps, and digital marketing — all under one roof. Get a free quote from Unitaspro today.",
  path: "/services",
});

const services = [
  {
    n: "01", icon: Globe, color: "#374151", bg: "#F1F3F8",
    title: "Web Design & Development",
    tagline: "Performance-first websites built for conversion.",
    desc: "Fast, beautiful websites and web apps that turn visitors into customers. Mobile-first, SEO-optimised, and built to grow your business.",
    href: "/services/web-design",
    features: ["Custom UI/UX Design", "CMS Integration", "E-commerce", "SEO Optimised", "Speed under 2s", "Mobile-first"],
  },
  {
    n: "02", icon: Code2, color: "#374151", bg: "#F1F3F8",
    title: "Software Development",
    tagline: "Secure, scalable systems to power your operations.",
    desc: "Custom SaaS platforms, internal dashboards, APIs, and automation tools built to solve real business problems and scale as you grow.",
    href: "/services/software-development",
    features: ["SaaS Platforms", "Admin Dashboards", "API Development", "Cloud Deployment", "Automation", "Integrations"],
  },
  {
    n: "03", icon: Smartphone, color: "#374151", bg: "#F1F3F8",
    title: "Mobile App Development",
    tagline: "iOS & Android apps built to perform.",
    desc: "Cross-platform apps built in React Native — fast, native-feeling, and designed for users worldwide. From concept to App Store launch.",
    href: "/services/mobile-app",
    features: ["iOS & Android", "React Native", "App Store Launch", "Push Notifications", "Offline Support", "Analytics"],
  },
  {
    n: "04", icon: Megaphone, color: "#374151", bg: "#F1F3F8",
    title: "Digital Marketing & SEO",
    tagline: "Growth campaigns tied directly to revenue.",
    desc: "SEO, Google Ads, Meta Ads, and content strategy — all tied directly to revenue. We track what matters and cut what doesn't.",
    href: "/services/digital-marketing",
    features: ["SEO", "Google Ads", "Meta Ads", "Content Strategy", "Analytics", "Conversion Optimisation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-32 lg:pt-[13rem] pb-12 lg:pb-14">
        {/* Subtle grid — right half only */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(#0D0D1A 1px,transparent 1px),linear-gradient(90deg,#0D0D1A 1px,transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 80% at 80% 50%,black 10%,transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 80% 50%,black 10%,transparent 70%)",
            }}
          />
        </div>
        <div className="container-main relative">
          <span className="section-label mb-5 inline-flex">What We Do</span>
          <h1 className="heading-xl font-bold text-[#0D0D1A] max-w-3xl mb-5 leading-tight">
            Every digital service<br />your business needs
          </h1>
          <p className="text-[#6B7180] text-lg max-w-xl mb-8" style={{ lineHeight: 1.7 }}>
            From the first wireframe to your first 1,000 customers — we cover every digital need under one roof.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary group">
              Get Free Quote
              <span className="btn-arrow"><ArrowRight size={15} /></span>
            </Link>
            <a href="tel:+918264954344" className="btn-secondary">Call us directly</a>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group relative flex flex-col bg-[#F1F3F8] rounded-2xl p-7 border border-gray-100
                  hover:shadow-[0_8px_40px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                {/* Accent top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg,#374151,#37415180)" }} />

                {/* Icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: s.bg }}>
                    <s.icon size={22} style={{ color: s.color }} />
                  </div>
                  <span className="text-2xl font-bold tabular-nums text-gray-200 group-hover:text-gray-300 transition-colors select-none">
                    {s.n}
                  </span>
                </div>

                {/* Text */}
                <h2 className="font-bold text-[#0D0D1A] text-xl leading-snug mb-1">{s.title}</h2>
                <p className="text-sm font-semibold text-[#374151] mb-3">{s.tagline}</p>
                <p className="text-[#6B7180] text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-5">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[#374151] shrink-0" />
                      <span className="text-xs text-[#6B7180]">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#374151] transition-colors duration-200">
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-pad bg-[#F8F9FC]">
        <div className="container-main">
          <div
            className="rounded-3xl px-8 py-16 lg:px-16 text-center text-white"
            style={{ background: "linear-gradient(135deg, #0A0F1E, #1a2d6e)" }}
          >
            <span className="inline-flex items-center gap-2 text-white/60 font-semibold text-xs tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-sm bg-white/40 inline-block" />
              Ready to Start?
            </span>
            <h2 className="heading-xl font-bold text-white mb-4 max-w-2xl mx-auto">
              Not sure which service fits your project?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              Book a free 30-minute call — we&apos;ll listen to your goals and recommend exactly what you need.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary group">
                Book Free Call
                <span className="btn-arrow"><ArrowRight size={15} /></span>
              </Link>
              <a
                href="tel:+918264954344"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-[15px] px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                +91 82649 54344
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
