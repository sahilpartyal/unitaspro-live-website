import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Globe, Code2, Smartphone, Megaphone, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description:
    "Unitaspro offers web design, software development, mobile app development, and digital marketing services for businesses worldwide.",
  path: "/services",
});

const services = [
  {
    n: "01",
    icon: Globe,
    color: "#2563EB",
    bg: "#EFF6FF",
    title: "Web Design & Development",
    desc: "High-converting websites and web apps built for speed, SEO, and real business growth.",
    href: "/services/web-design",
    features: ["Custom UI/UX design", "CMS integration", "E-commerce", "SEO optimised"],
  },
  {
    n: "02",
    icon: Code2,
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Software Development",
    desc: "Custom SaaS platforms, internal tools, APIs, and automation built to scale.",
    href: "/services/software-development",
    features: ["SaaS platforms", "Admin dashboards", "API development", "Cloud deployment"],
  },
  {
    n: "03",
    icon: Smartphone,
    color: "#059669",
    bg: "#ECFDF5",
    title: "Mobile App Development",
    desc: "iOS and Android apps users love, built in React Native and Flutter.",
    href: "/services/mobile-app",
    features: ["Cross-platform", "Native performance", "App Store launch", "Push notifications"],
  },
  {
    n: "04",
    icon: Megaphone,
    color: "#D97706",
    bg: "#FFFBEB",
    title: "Digital Marketing",
    desc: "SEO, paid ads, social media, and content — all tied directly to revenue.",
    href: "/services/digital-marketing",
    features: ["SEO", "Google Ads", "Meta Ads", "Content marketing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] relative overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #1A56DB 0%, transparent 65%)" }}/>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}/>
        </div>
        <div className="container-main relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border"
            style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
            Services
          </span>
          <h1 className="heading-xl font-black text-white mb-5 max-w-2xl leading-tight">
            End-to-end digital services<br />under one roof
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            From the first wireframe to your first 1,000 customers — we cover every digital need your business has.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="flex flex-col">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-10 border-b border-gray-100 last:border-0 hover:bg-[#F7F8FC] -mx-4 px-4 rounded-2xl transition-colors">

                {/* Number */}
                <div className="hidden lg:flex lg:col-span-1 pt-1">
                  <span className="text-3xl font-black tabular-nums text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                    {s.n}
                  </span>
                </div>

                {/* Icon + title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: s.bg }}>
                    <s.icon size={22} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h2 className="font-black text-[#0D0D1A] text-xl leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h2>
                    <div className="h-[2px] w-8 rounded-full group-hover:w-16 transition-all duration-300"
                      style={{ background: s.color }}/>
                  </div>
                </div>

                {/* Description + features */}
                <div className="lg:col-span-6">
                  <p className="text-[#6B7180] text-base leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs font-medium text-[#6B7180] bg-[#F7F8FC] border border-gray-200 px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex lg:col-span-1 justify-end pt-1">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:bg-blue-50 transition-all">
                    <ArrowUpRight size={14}/>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
