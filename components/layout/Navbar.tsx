"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, Phone, Globe, Code2, Smartphone, Megaphone, ArrowRight, ArrowUpRight, Car, TrendingUp, Building2, ShoppingCart, Heart, Plane, Package, Rocket } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const servicesMega = [
  {
    group: "Build",
    href: "/services",
    items: [
      { icon: Globe,      label: "Web Design & Development", desc: "Websites & web apps that convert",   href: "/services/web-design" },
      { icon: Code2,      label: "Software Development",     desc: "SaaS, platforms & enterprise tools", href: "/services/software-development" },
      { icon: Smartphone, label: "Mobile App Development",   desc: "iOS & Android apps users love",      href: "/services/mobile-app" },
    ],
    secondary: [],
  },
  {
    group: "Grow",
    href: "/services",
    items: [
      { icon: Megaphone,  label: "Digital Marketing",        desc: "SEO, ads & content that converts",   href: "/services/digital-marketing" },
    ],
    secondary: [
      { label: "Pricing & packages", href: "/pricing" },
      { label: "About the team",     href: "/about" },
    ],
  },
];

// Promo rail content per menu. Stats are the locked site-wide figures.
const megaPromo = {
  services: {
    kicker: "Most requested",
    title:  "Web Design & Development",
    body:   "Websites and web apps that convert — from first wireframe to launch.",
    href:   "/services/web-design",
    fine:   "8+ years · 150+ projects delivered",
  },
  industries: {
    kicker: "Most built for",
    title:  "Transport & Mobility",
    body:   "Dispatch, booking and fleet tracking platforms for operators running real fleets.",
    href:   "/industries/transport",
    fine:   "8+ years · 95+ happy clients",
  },
} as const;

// Panel footer links — every href is an existing route
const megaFooter = [
  { label: "All services", href: "/services" },
  { label: "Case studies", href: "/portfolio" },
  { label: "Blog",         href: "/blog" },
];

const industriesList = [
  { icon: Car,          label: "Transport & Mobility",     href: "/industries/transport", short: "Dispatch, booking, fleet tracking",   desc: "Custom dispatch, booking, and fleet tracking platforms for transport operators." },
  { icon: TrendingUp,   label: "Finance & Fintech",        href: "/industries/finance", short: "Banking, lending, compliance",     desc: "Secure banking portals, lending platforms, and compliance-ready dashboards." },
  { icon: Building2,    label: "Real Estate & Property",   href: "/industries/real-estate", short: "Portals, agent CRMs, listings", desc: "Property portals, agent CRMs, and listing platforms that close deals faster." },
  { icon: ShoppingCart, label: "E-Commerce & Retail",      href: "/industries/ecommerce", short: "Storefronts and checkout flows",   desc: "Custom storefronts, inventory management, and checkout flows that convert." },
  { icon: Heart,        label: "Healthcare & Wellness",    href: "/industries/healthcare", short: "Patient portals, telemedicine",  desc: "Patient portals, telemedicine apps, and clinic management systems." },
  { icon: Plane,        label: "Hospitality & Travel",     href: "/industries/hospitality", short: "Booking engines and loyalty", desc: "Direct booking engines, hotel dashboards, and guest loyalty platforms." },
  { icon: Package,      label: "Logistics & Supply Chain", href: "/industries/logistics", short: "Tracking and last-mile tools",   desc: "Real-time tracking, warehouse management, and last-mile delivery tools." },
  { icon: Rocket,       label: "Startups & SaaS",          href: "/industries/startups", short: "MVPs to production SaaS",    desc: "MVPs to production-grade SaaS platforms with billing and multi-tenancy." },
];

const companyLinks = [
  { label: "About Us",  href: "/about",     desc: "Our story, values, and team" },
  { label: "Blog",      href: "/blog",      desc: "Insights, guides, and updates" },
];

const navLinks = [
  { label: "Services",   href: "/services",    hasMega: true,       hasIndustries: false, hasCompany: false },
  { label: "Industries", href: "/industries",  hasMega: false,      hasIndustries: true,  hasCompany: false },
  { label: "Company",    href: "#",            hasMega: false,      hasIndustries: false, hasCompany: true  },
  { label: "Contact",    href: "/contact",     hasMega: false,      hasIndustries: false, hasCompany: false },
];

export default function Navbar() {
  type MenuKey = "services" | "industries" | "company";

  const [scrolled,        setScrolled]        = useState(false);
  const [openMenu,        setOpenMenu]        = useState<MenuKey | null>(null);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobServices,     setMobServices]     = useState(false);
  const [mobIndustries,   setMobIndustries]   = useState(false);
  const [mobCompany,      setMobCompany]      = useState(false);

  // Hover intent: a short close delay lets the pointer travel the diagonal
  // from the trigger to the panel without the menu collapsing underneath it.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement | null>>>({});

  const cancelClose = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  }, []);

  const openNow = useCallback((key: MenuKey) => {
    cancelClose();
    setOpenMenu(key);
  }, [cancelClose]);

  const closeSoon = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  // Escape closes the open panel and returns focus to its trigger.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const key = openMenu;
      cancelClose();
      setOpenMenu(null);
      triggerRefs.current[key]?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu, cancelClose]);

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // Mobile: always full-width solid white
          "bg-white border-b border-gray-200 shadow-[0_2px_16px_rgba(15,23,42,0.08)]",
          // Desktop: floating pill when at top, solid when scrolled
          !scrolled && "lg:bg-transparent lg:border-b-0 lg:shadow-none lg:px-8 lg:pt-4"
        )}
      >
        <div
          className={clsx(
            "mx-auto bg-white border transition-all duration-300 relative",
            scrolled
              ? "max-w-7xl px-4 sm:px-6 lg:px-8 rounded-none border-transparent"
              : [
                  "max-w-7xl px-4 sm:px-6 rounded-none border-transparent",
                  "lg:max-w-6xl lg:px-8 lg:rounded-full lg:border-gray-200/80 lg:shadow-[0_2px_16px_rgba(15,23,42,0.06)]"
                ]
          )}
        >
          <div className="flex items-center justify-between h-[56px] lg:h-[64px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/unitaspro-logo.png" alt="Unitaspro" width={140} height={40} className="h-9 w-auto" style={{ filter: "brightness(0)" }} priority />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const key: MenuKey | null =
                  link.hasMega ? "services" : link.hasIndustries ? "industries" : link.hasCompany ? "company" : null;

                if (!key) {
                  return (
                    <Link key={link.href} href={link.href}
                      className="px-4 py-2.5 min-h-[44px] inline-flex items-center rounded-lg text-base font-semibold text-[#374151] hover:text-[#0D0D1A] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
                      {link.label}
                    </Link>
                  );
                }

                const isOpen = openMenu === key;
                return (
                  <div key={link.label} className={key === "company" ? "relative" : undefined}
                    onMouseEnter={() => openNow(key)}
                    onMouseLeave={closeSoon}>
                    <button
                      ref={(el) => { triggerRefs.current[key] = el; }}
                      aria-expanded={isOpen}
                      aria-controls={`nav-panel-${key}`}
                      aria-haspopup="true"
                      onClick={() => (isOpen ? setOpenMenu(null) : openNow(key))}
                      className={clsx(
                        "flex items-center gap-1 px-4 py-2.5 min-h-[44px] rounded-lg text-base font-semibold transition-colors duration-150",
                        "focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
                        isOpen ? "text-[#0D0D1A]" : "text-[#374151] hover:text-[#0D0D1A]"
                      )}>
                      {link.label}
                      <ChevronDown size={13} className={clsx("transition-transform duration-200", isOpen && "rotate-180")}/>
                    </button>

                    {/* Company stays a compact dropdown — two links do not need a mega panel */}
                    {key === "company" && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id="nav-panel-company"
                            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15, ease: [0.22,1,0.36,1] }}
                            className="absolute top-full -left-2 mt-2 w-[286px] bg-white rounded-2xl border border-gray-200 shadow-[0_18px_48px_rgba(15,23,42,0.12)] p-2">
                            {companyLinks.map((item) => (
                              <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)}
                                className="group block p-3 rounded-xl hover:bg-[#F8F9FC] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                                <span className="flex items-center gap-1.5 text-base font-bold text-[#0D0D1A] tracking-[-0.02em] leading-snug">
                                  {item.label}
                                  <ArrowUpRight size={13} className="text-[#D1D5DB] group-hover:text-[#2563EB] transition-colors"/>
                                </span>
                                <span className="block text-sm text-[#6B7180] leading-snug">{item.desc}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
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

          {/* ── Full-width mega panel (Services / Industries) ──
              Anchored to the container, not the trigger, so it tracks the
              pill as it goes max-w-6xl → max-w-7xl on scroll. */}
          <AnimatePresence>
            {(openMenu === "services" || openMenu === "industries") && (
              <motion.div
                id={`nav-panel-${openMenu}`}
                role="group"
                aria-label={openMenu === "services" ? "Services menu" : "Industries menu"}
                onMouseEnter={() => openNow(openMenu)}
                onMouseLeave={closeSoon}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.16, ease: [0.22,1,0.36,1] }}
                className="hidden lg:grid absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-200 shadow-[0_18px_48px_rgba(15,23,42,0.12)] overflow-hidden"
                style={{ gridTemplateColumns: openMenu === "services" ? "1fr 1fr 350px" : "1fr 350px" }}
              >
                {openMenu === "services" ? (
                  servicesMega.map((grp) => (
                    <div key={grp.group} className="p-7 border-r border-gray-200">
                      <Link href={grp.href} onClick={() => setOpenMenu(null)}
                        className="group inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0D0D1A] focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                        {grp.group}
                        <ArrowRight size={12} className="text-[#6B7180] group-hover:text-[#2563EB] transition-colors"/>
                      </Link>
                      {grp.items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)}
                          className="group flex gap-3 p-3 -mx-3 rounded-xl hover:bg-[#F8F9FC] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                          <span className="w-9 h-9 rounded-[10px] bg-[#F1F3F8] grid place-items-center shrink-0 text-[#374151]">
                            <item.icon size={17} strokeWidth={1.7}/>
                          </span>
                          <span>
                            <span className="block text-base font-bold text-[#0D0D1A] tracking-[-0.02em] leading-snug">{item.label}</span>
                            <span className="block text-sm text-[#6B7180] leading-snug">{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                      {grp.secondary.length > 0 && (
                        <div className="mt-3.5 pt-3 border-t border-gray-200">
                          {grp.secondary.map((sec) => (
                            <Link key={sec.href} href={sec.href} onClick={() => setOpenMenu(null)}
                              className="block px-3 -mx-3 py-2 rounded-lg text-[15px] text-[#374151] hover:bg-[#F8F9FC] hover:text-[#2563EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                              {sec.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-7 border-r border-gray-200">
                    <Link href="/industries" onClick={() => setOpenMenu(null)}
                      className="group inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0D0D1A] focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                      Industries
                      <ArrowRight size={12} className="text-[#6B7180] group-hover:text-[#2563EB] transition-colors"/>
                    </Link>
                    <div className="grid grid-cols-2 gap-x-7">
                      {industriesList.map((ind) => (
                        <Link key={ind.href} href={ind.href} onClick={() => setOpenMenu(null)}
                          className="group flex gap-3 p-3 -mx-3 rounded-xl hover:bg-[#F8F9FC] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                          <span className="w-9 h-9 rounded-[10px] bg-[#F1F3F8] grid place-items-center shrink-0 text-[#374151]">
                            <ind.icon size={17} strokeWidth={1.7}/>
                          </span>
                          <span>
                            <span className="block text-base font-bold text-[#0D0D1A] tracking-[-0.02em] leading-snug">{ind.label}</span>
                            <span className="block text-sm text-[#6B7180] leading-snug">{ind.short}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dark promo rail */}
                <div className="p-[18px]">
                  <div className="relative h-full rounded-xl bg-[#0A0F1E] p-6 flex flex-col justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-100" style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}/>
                    <div className="relative">
                      <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#2563EB] mb-2.5">{megaPromo[openMenu].kicker}</p>
                      <p className="text-[21px] font-bold text-white leading-[1.25] tracking-[-0.025em] mb-2">{megaPromo[openMenu].title}</p>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">{megaPromo[openMenu].body}</p>
                      <Link href="/contact" onClick={() => setOpenMenu(null)}
                        className="inline-flex items-center gap-2.5 bg-[#2563EB] text-white text-sm font-semibold pl-5 pr-2.5 py-2.5 rounded-full hover:bg-[#1d4ed8] transition-colors focus-visible:ring-2 focus-visible:ring-white">
                        Get Free Quote
                        <span className="w-6 h-6 rounded-full bg-white/20 grid place-items-center"><ArrowRight size={13}/></span>
                      </Link>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7180] mt-4">{megaPromo[openMenu].fine}</p>
                    </div>
                  </div>
                </div>

                {/* Footer utility bar */}
                <div className="col-span-full border-t border-gray-200 px-7 py-3.5 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex gap-6 flex-wrap">
                    {megaFooter.map((f) => (
                      <Link key={f.href} href={f.href} onClick={() => setOpenMenu(null)}
                        className="text-xs font-bold uppercase tracking-[0.1em] text-[#374151] hover:text-[#0D0D1A] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                        {f.label}
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact" onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#2563EB] hover:text-[#1d4ed8] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]">
                    Need help choosing? Talk to us
                    <ArrowRight size={13}/>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            className="lg:hidden fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 h-[68px] border-b border-gray-100">
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <Image src="/unitaspro-logo.png" alt="Unitaspro" width={120} height={36} className="h-8 w-auto" style={{ filter: "brightness(0)" }} />
              </Link>
              <button onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100">
                <X size={18} className="text-[#0D0D1A]"/>
              </button>
            </div>

            <nav className="px-5 py-4 flex flex-col">
              {/* Services — collapsible */}
              <button
                onClick={() => { setMobServices(s => !s); setMobIndustries(false); }}
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
                          className="px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm text-[#374151] block"
                          onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-gray-100"/>

              {/* Industries — collapsible */}
              <button
                onClick={() => { setMobIndustries(i => !i); setMobServices(false); }}
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
                          className="px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm text-[#374151] block"
                          onClick={() => setMobileOpen(false)}>
                          {ind.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-gray-100"/>

              {/* Company — collapsible */}
              <button
                onClick={() => { setMobCompany(c => !c); setMobServices(false); setMobIndustries(false); }}
                className="flex items-center justify-between w-full px-3 py-3.5 text-[15px] font-semibold text-[#0D0D1A]">
                Company
                <ChevronDown size={16} className={clsx("text-[#9CA3AF] transition-transform duration-200", mobCompany && "rotate-180")}/>
              </button>
              <AnimatePresence>
                {mobCompany && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <div className="pl-3 pb-2 flex flex-col gap-0.5">
                      {companyLinks.map((item) => (
                        <Link key={item.href} href={item.href}
                          className="px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm text-[#374151] block"
                          onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-gray-100"/>

              {/* Direct links */}
              {navLinks.filter(l => !l.hasMega && !l.hasIndustries && !l.hasCompany).map((link) => (
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
