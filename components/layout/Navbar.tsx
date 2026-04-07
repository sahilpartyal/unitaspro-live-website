"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Phone, Globe, Code2, Smartphone, Megaphone, ArrowRight, Calendar } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const servicesMega = [
  {
    group: "Build",
    items: [
      {
        icon: Globe,
        label: "Web Design & Development",
        desc: "Websites & web apps that convert",
        href: "/services/web-design",
        color: "text-blue-600",
        bg: "bg-blue-50",
        accent: "#2563EB",
        accentBg: "#EFF6FF",
      },
      {
        icon: Code2,
        label: "Software Development",
        desc: "SaaS, platforms & enterprise tools",
        href: "/services/software-development",
        color: "text-violet-600",
        bg: "bg-violet-50",
        accent: "#7C3AED",
        accentBg: "#F5F3FF",
      },
      {
        icon: Smartphone,
        label: "Mobile App Development",
        desc: "iOS & Android apps users love",
        href: "/services/mobile-app",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        accent: "#059669",
        accentBg: "#ECFDF5",
      },
    ],
  },
  {
    group: "Grow",
    items: [
      {
        icon: Megaphone,
        label: "Digital Marketing",
        desc: "SEO, ads & content that converts",
        href: "/services/digital-marketing",
        color: "text-amber-600",
        bg: "bg-amber-50",
        accent: "#D97706",
        accentBg: "#FFFBEB",
      },
    ],
  },
];

const navLinks = [
  { label: "Services",  href: "/services",   hasMega: true },
  { label: "Portfolio", href: "/portfolio",  hasMega: false },
  { label: "About",     href: "/about",      hasMega: false },
  { label: "Blog",      href: "/blog",       hasMega: false },
  { label: "Contact",   href: "/contact",    hasMega: false },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main navbar ── */}
      <header
        className={clsx(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white backdrop-blur-lg border-b border-gray-100 shadow-[0_1px_8px_rgba(15,23,42,0.06)]"
            : "bg-white border-b border-gray-100"
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              {/* Brand mark */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #1A47DB 0%, #6D28D9 100%)" }}>
                <span className="text-white font-black text-sm select-none">U</span>
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="text-[#0D0D1A]">Unitas</span>
                <span className="text-gradient">pro</span>
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button className={clsx(
                      "flex items-center gap-1 px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors duration-150",
                      megaOpen ? "text-brand-600 bg-brand-50" : "text-[#374151] hover:text-[#0D0D1A] hover:bg-gray-50"
                    )}>
                      {link.label}
                      <ChevronDown size={13} className={clsx("transition-transform duration-200", megaOpen && "rotate-180")}/>
                    </button>

                    {/* Mega dropdown */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22,1,0.36,1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[600px] bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(15,23,42,0.14)] overflow-hidden"
                        >
                          <div className="grid grid-cols-[1fr_200px]">

                            {/* ── Left: service list (vertical, Image #14 style) ── */}
                            <div className="p-4">
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 px-3">Our Services</p>
                              <div className="flex flex-col">
                                {servicesMega.flatMap(g => g.items).map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMegaOpen(false)}
                                    className="group flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
                                  >
                                    {/* Bordered icon box */}
                                    <div className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-gray-300 group-hover:shadow-sm transition-all duration-150">
                                      <item.icon size={17} className={item.color}/>
                                    </div>
                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[14px] font-semibold text-[#0D0D1A] leading-snug mb-0.5 group-hover:text-brand-600 transition-colors">
                                        {item.label}
                                      </div>
                                      <div className="text-[12px] text-gray-400 leading-snug">{item.desc}</div>
                                    </div>
                                    {/* Arrow */}
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-150 shrink-0"/>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-1 pt-3 border-t border-gray-100 px-3">
                                <Link
                                  href="/services"
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex items-center gap-2 py-1 text-xs font-semibold text-gray-400 hover:text-brand-600 transition-colors"
                                >
                                  <span>Browse all services</span>
                                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform"/>
                                </Link>
                              </div>
                            </div>

                            {/* ── Right: CTA panel ── */}
                            <div
                              className="relative flex flex-col justify-between p-5 overflow-hidden"
                              style={{ background: "linear-gradient(160deg,#0F172A 0%,#1e2d5a 100%)" }}
                            >
                              {/* Dot grid */}
                              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10"
                                style={{
                                  backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)",
                                  backgroundSize: "18px 18px",
                                }}/>
                              {/* Glow */}
                              <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
                                style={{ background: "radial-gradient(circle,#6366f1,transparent 70%)" }}/>

                              <div className="relative z-10">
                                <div className="flex items-center gap-1.5 mb-4">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                                  <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Free consultation</span>
                                </div>
                                <h3 className="text-white font-black text-base leading-snug mb-2" style={{ letterSpacing: "-0.02em" }}>
                                  Not sure which service you need?
                                </h3>
                                <p className="text-white/50 text-xs leading-relaxed mb-5">
                                  Tell us your goal — we&apos;ll recommend the right solution and quote within 24h.
                                </p>

                                {/* Mini stats */}
                                <div className="flex flex-col gap-2 mb-5">
                                  {[
                                    { v: "50+", l: "Projects delivered" },
                                    { v: "4.9★", l: "Client satisfaction" },
                                    { v: "12+", l: "Countries served" },
                                  ].map(s => (
                                    <div key={s.l} className="flex items-center justify-between">
                                      <span className="text-white/40 text-[11px]">{s.l}</span>
                                      <span className="text-white font-bold text-xs">{s.v}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Link
                                href="/contact"
                                onClick={() => setMegaOpen(false)}
                                className="relative z-10 group flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all duration-200"
                              >
                                <span className="text-white font-semibold text-xs">Get Free Quote</span>
                                <div className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                                  <ArrowRight size={11} className="text-white"/>
                                </div>
                              </Link>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2.5 min-h-[44px] inline-flex items-center rounded-lg text-sm font-medium text-[#374151] hover:text-[#0D0D1A] hover:bg-gray-50 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+918264954344"
                className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-medium text-[#374151] hover:text-[#0D0D1A] hover:bg-gray-50 transition-colors duration-150"
              >
                <Calendar size={14} className="text-brand-600"/>
                Book a Call
              </a>
              <Link href="/contact" className="btn-primary group">
                Get Free Quote
                <span className="btn-arrow"><ArrowRight size={15}/></span>
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} className="text-[#0D0D1A]"/> : <Menu size={20} className="text-[#0D0D1A]"/>}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <nav className="container-main py-4 flex flex-col gap-1">
                {/* Services with sub-items */}
                <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Services</div>
                {servicesMega.flatMap(g => g.items).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon size={14} className={item.color}/>
                    </div>
                    <span className="text-sm font-medium text-[#0D0D1A]">{item.label}</span>
                  </Link>
                ))}

                <div className="my-1 border-t border-gray-100"/>
                <div className="px-3 pt-1 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company</div>
                {navLinks.filter(l => !l.hasMega).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#0D0D1A] hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2.5 pb-2">
                  <a href="tel:+918264954344"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#374151]">
                    <Phone size={14} className="text-brand-600"/> +91 82649 54344
                  </a>
                  <Link href="/contact" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                    Get Free Quote
                    <span className="btn-arrow"><ArrowRight size={15}/></span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
