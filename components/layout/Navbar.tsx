"use client";

import Link from "next/link";
import Image from "next/image";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/unitaspro-logo.png" alt="Unitaspro" width={140} height={40} className="h-9 w-auto" style={{ filter: "brightness(0)" }} priority />
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
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: [0.22,1,0.36,1] }}
                          className="absolute top-full left-0 mt-2.5 w-72 bg-white rounded-2xl border border-gray-100 shadow-[0_24px_64px_rgba(15,23,42,0.12)] overflow-hidden"
                        >
                          <div className="p-2">
                            {servicesMega.flatMap(g => g.items).map((item, idx) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#F7F8FC] transition-all duration-150"
                              >
                                <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                                  style={{ background: item.accentBg }}>
                                  <item.icon size={15} style={{ color: item.accent }}/>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[13px] font-semibold text-[#0D0D1A] leading-snug">{item.label}</div>
                                  <div className="text-[11px] text-[#9CA3AF] mt-0.5">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                            <div className="mx-3 mt-1 pt-2.5 border-t border-gray-100">
                              <Link
                                href="/services"
                                onClick={() => setMegaOpen(false)}
                                className="group inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#9CA3AF] hover:text-[#0D0D1A] transition-colors pb-1"
                              >
                                All services
                                <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform"/>
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

            <nav className="px-5 py-5 flex flex-col gap-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2">Services</p>
              {servicesMega.flatMap(g => g.items).map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.accentBg }}>
                    <item.icon size={16} style={{ color: item.accent }}/>
                  </div>
                  <span className="text-sm font-semibold text-[#0D0D1A]">{item.label}</span>
                </Link>
              ))}

              <div className="my-3 border-t border-gray-100"/>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2">Company</p>
              {navLinks.filter(l => !l.hasMega).map((link) => (
                <Link key={link.href} href={link.href}
                  className="px-3 py-3 text-sm font-semibold text-[#374151] hover:text-[#0D0D1A] hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
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
