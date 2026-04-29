"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Globe, Code2, Smartphone, Megaphone, ArrowRight, Calendar, Car, TrendingUp, Building2, ShoppingCart, Heart, Plane, Package, Rocket } from "lucide-react";
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

const industriesList = [
  { icon: Car,          label: "Transport & Mobility",     href: "/industries/transport",   desc: "Custom dispatch, booking, and fleet tracking platforms for transport operators." },
  { icon: TrendingUp,   label: "Finance & Fintech",        href: "/industries/finance",     desc: "Secure banking portals, lending platforms, and compliance-ready dashboards." },
  { icon: Building2,    label: "Real Estate & Property",   href: "/industries/real-estate", desc: "Property portals, agent CRMs, and listing platforms that close deals faster." },
  { icon: ShoppingCart, label: "E-Commerce & Retail",      href: "/industries/ecommerce",   desc: "Custom storefronts, inventory management, and checkout flows that convert." },
  { icon: Heart,        label: "Healthcare & Wellness",    href: "/industries/healthcare",  desc: "Patient portals, telemedicine apps, and clinic management systems." },
  { icon: Plane,        label: "Hospitality & Travel",     href: "/industries/hospitality", desc: "Direct booking engines, hotel dashboards, and guest loyalty platforms." },
  { icon: Package,      label: "Logistics & Supply Chain", href: "/industries/logistics",   desc: "Real-time tracking, warehouse management, and last-mile delivery tools." },
  { icon: Rocket,       label: "Startups & SaaS",          href: "/industries/startups",    desc: "MVPs to production-grade SaaS platforms with billing and multi-tenancy." },
];

const navLinks = [
  { label: "Services",   href: "/services",    hasMega: true,       hasIndustries: false },
  { label: "Industries", href: "/industries",  hasMega: false,      hasIndustries: true  },
  { label: "About",      href: "/about",       hasMega: false,      hasIndustries: false },
  { label: "Blog",       href: "/blog",        hasMega: false,      hasIndustries: false },
  { label: "Contact",    href: "/contact",     hasMega: false,      hasIndustries: false },
];

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [megaOpen,        setMegaOpen]        = useState(false);
  const [industriesOpen,  setIndustriesOpen]  = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobServices,     setMobServices]     = useState(false);
  const [mobIndustries,   setMobIndustries]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main navbar — floating white pill ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-4">
        <div
          className={clsx(
            "max-w-6xl mx-auto rounded-full bg-white border transition-all duration-300 px-6 lg:px-8",
            scrolled
              ? "border-gray-200 shadow-[0_4px_24px_rgba(15,23,42,0.10)]"
              : "border-gray-200/80 shadow-[0_2px_16px_rgba(15,23,42,0.06)]"
          )}
        >
          <div className="flex items-center justify-between h-[64px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/unitaspro-logo.png" alt="Unitaspro" width={140} height={40} className="h-9 w-auto" style={{ filter: "brightness(0)" }} priority />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}>
                    <button className={clsx(
                      "flex items-center gap-1 px-4 py-2.5 min-h-[44px] rounded-lg text-base font-semibold transition-colors duration-150",
                      megaOpen ? "text-[#2563EB]" : "text-[#374151] hover:text-[#0D0D1A]"
                    )}>
                      {link.label}
                      <ChevronDown size={13} className={clsx("transition-transform duration-200", megaOpen && "rotate-180")}/>
                    </button>
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: [0.22,1,0.36,1] }}
                          className="absolute top-full -left-4 mt-2.5 bg-white rounded-2xl border border-gray-100 shadow-[0_24px_64px_rgba(15,23,42,0.12)] overflow-hidden"
                          style={{ width: "340px" }}
                        >
                          <div>
                            {servicesMega.flatMap(g => g.items).map((item, idx, arr) => (
                              <Link key={item.href} href={item.href} onClick={() => setMegaOpen(false)}
                                className={clsx(
                                  "group flex items-start gap-4 px-6 py-5 hover:bg-[#F8F9FC] transition-colors",
                                  idx < arr.length - 1 && "border-b border-gray-100/80"
                                )}>
                                <item.icon size={22} strokeWidth={1.6} className="shrink-0 mt-0.5 text-[#2563EB]"/>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[15px] font-bold text-[#0D0D1A] group-hover:text-[#2563EB] transition-colors">
                                    {item.label}
                                  </span>
                                  <p className="text-sm text-[#6B7180] leading-relaxed mt-1">
                                    {item.desc}.{" "}
                                    <span className="text-[#2563EB] inline-block group-hover:translate-x-0.5 transition-transform">↗</span>
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.hasIndustries ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}>
                    <button className={clsx(
                      "flex items-center gap-1 px-4 py-2.5 min-h-[44px] rounded-lg text-base font-semibold transition-colors duration-150",
                      industriesOpen ? "text-[#2563EB]" : "text-[#374151] hover:text-[#0D0D1A]"
                    )}>
                      {link.label}
                      <ChevronDown size={13} className={clsx("transition-transform duration-200", industriesOpen && "rotate-180")}/>
                    </button>
                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: [0.22,1,0.36,1] }}
                          className="absolute top-full left-0 mt-2.5 bg-white rounded-2xl border border-gray-100 shadow-[0_24px_64px_rgba(15,23,42,0.12)] overflow-hidden"
                          style={{ width: "680px" }}
                        >
                          <div className="grid grid-cols-2">
                            {industriesList.map((ind, idx) => (
                              <Link key={ind.href} href={ind.href} onClick={() => setIndustriesOpen(false)}
                                className={clsx(
                                  "group flex items-start gap-4 px-6 py-5 hover:bg-[#F8F9FC] transition-colors",
                                  idx < industriesList.length - 2 && "border-b border-gray-100/80"
                                )}>
                                <ind.icon size={22} strokeWidth={1.6} className="shrink-0 mt-0.5 text-[#2563EB]"/>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[15px] font-bold text-[#0D0D1A] group-hover:text-[#2563EB] transition-colors">
                                    {ind.label}
                                  </span>
                                  <p className="text-sm text-[#6B7180] leading-relaxed mt-1">
                                    {ind.desc}{" "}
                                    <span className="text-[#2563EB] inline-block group-hover:translate-x-0.5 transition-transform">↗</span>
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className="px-4 py-2.5 min-h-[44px] inline-flex items-center rounded-lg text-base font-semibold text-[#374151] hover:text-[#0D0D1A] transition-colors duration-150">
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
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
      </header>

      {/* ── Mobile menu — fixed full-screen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 h-[68px] border-b border-gray-100">
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <Image src="/unitaspro-logo.png" alt="Unitaspro" width={120} height={36} className="h-8 w-auto" style={{ filter: "brightness(0)" }} priority />
              </Link>
              <button onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100">
                <X size={18} className="text-[#0D0D1A]"/>
              </button>
            </div>

            <nav className="px-5 py-4 flex flex-col">
              {/* Services — collapsible */}
              <button
                onClick={() => setMobServices(!mobServices)}
                className="flex items-center justify-between w-full px-3 py-3.5 text-[15px] font-semibold text-[#0D0D1A]">
                Services
                <ChevronDown size={16} className={clsx("text-[#9CA3AF] transition-transform duration-200", mobServices && "rotate-180")}/>
              </button>
              <AnimatePresence>
                {mobServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <div className="pl-3 pb-2 flex flex-col gap-0.5">
                      {servicesMega.flatMap(g => g.items).map((item) => (
                        <Link key={item.href} href={item.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          <item.icon size={16} strokeWidth={1.8} style={{ color: item.accent }} className="shrink-0"/>
                          <span className="text-sm text-[#374151]">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-gray-100"/>

              {/* Industries — collapsible */}
              <button
                onClick={() => setMobIndustries(!mobIndustries)}
                className="flex items-center justify-between w-full px-3 py-3.5 text-[15px] font-semibold text-[#0D0D1A]">
                Industries
                <ChevronDown size={16} className={clsx("text-[#9CA3AF] transition-transform duration-200", mobIndustries && "rotate-180")}/>
              </button>
              <AnimatePresence>
                {mobIndustries && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <div className="pl-3 pb-2 flex flex-col gap-0.5">
                      {industriesList.map((ind) => (
                        <Link key={ind.href} href={ind.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          <ind.icon size={16} strokeWidth={1.8} className="shrink-0 text-[#2563EB]"/>
                          <span className="text-sm text-[#374151]">{ind.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-gray-100"/>

              {/* Direct links */}
              {navLinks.filter(l => !l.hasMega && !l.hasIndustries).map((link) => (
                <Link key={link.href} href={link.href}
                  className="px-3 py-3.5 text-[15px] font-semibold text-[#0D0D1A] hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href="tel:+918264954344"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#374151]">
                  <Phone size={14} className="text-brand-600"/> +91 82649 54344
                </a>
                <Link href="/contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                  Get Free Quote
                  <span className="btn-arrow"><ArrowRight size={15}/></span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
