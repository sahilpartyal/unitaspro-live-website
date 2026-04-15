"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  MessageSquare,
  Globe2,
  Shield,
} from "lucide-react";

/* ── Animation ── */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Data ── */

const HERO_HIGHLIGHTS = [
  { icon: Clock, title: "24hr Response", desc: "Get a technical project reply within one day.", color: "#2563EB" },
  { icon: MessageSquare, title: "Free Consultation", desc: "A 30-minute strategy session to map your goals.", color: "#7C3AED" },
  { icon: Globe2, title: "Global Clients", desc: "Proudly scaling brands across five major international regions.", color: "#059669" },
];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "info@unitaspro.com", href: "mailto:info@unitaspro.com", type: "link" as const },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 82649 54344", href: "tel:+918264954344", type: "phone" as const },
  { icon: MapPin, label: "Office", value: "Sector 75, Mohali\nPunjab, India 160055", href: null, type: "text" as const },
];

const TRUST_POINTS = [
  { icon: Shield, text: "Fixed pricing — no hidden costs" },
  { icon: CheckCircle2, text: "150+ projects delivered on time" },
  { icon: Globe2, text: "Clients in 15+ countries" },
];

const COUNTRIES = [
  { code: "IN", dial: "+91", flag: "🇮🇳", name: "India" },
  { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
  { code: "GB", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "AE", dial: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "AU", dial: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "CA", dial: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "SG", dial: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "DE", dial: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "FR", dial: "+33", flag: "🇫🇷", name: "France" },
  { code: "SA", dial: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "QA", dial: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "KW", dial: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "OM", dial: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "BH", dial: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "NZ", dial: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "ZA", dial: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "NL", dial: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "SE", dial: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "CH", dial: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "JP", dial: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "KR", dial: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "MY", dial: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "PH", dial: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "NG", dial: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "KE", dial: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "PK", dial: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "BD", dial: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "LK", dial: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "NP", dial: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "BR", dial: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "MX", dial: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "IT", dial: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "ES", dial: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "IE", dial: "+353", flag: "🇮🇪", name: "Ireland" },
];

export default function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
        setCountrySearch("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (countryOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [countryOpen]);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone ? `${selectedCountry.dial} ${form.phone}` : "",
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-[#0D0D1A] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200";

  return (
    <>
      {/* ═══════════════════ HERO — Service-page style ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-12">
        {/* Abstract geometric pattern — right side */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#0D0D1A 1px, transparent 1px), linear-gradient(90deg, #0D0D1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 70% 40%, black 10%, transparent 70%)",
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
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Ready To Build A Digital Legacy For Your Brand.
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300" />
          </motion.div>

          {/* Headline */}
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
            <span className="font-light text-[#9CA3AF]">
              We Build, You{" "}
            </span>
            <span className="font-semibold text-[#0D0D1A]">Grow Faster</span>
          </motion.h1>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-24"
          >
            <a href="#contact-form" className="btn-primary group">
              Fill the form
              <span className="btn-arrow">
                <ArrowRight size={15} />
              </span>
            </a>
            <a href="tel:+918264954344" className="btn-secondary">
              Call us directly
            </a>
          </motion.div>

          {/* Dashed separator + 3-column highlights */}
          <div
            aria-hidden
            className="w-full h-px border-t border-dashed border-gray-300 mb-10"
          />

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
                  style={{ background: `${s.color}12` }}
                >
                  <s.icon size={16} style={{ color: s.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-semibold text-sm text-[#0D0D1A]">
                      {s.title}
                    </h3>
                    <ArrowRight size={14} className="text-gray-300 shrink-0" />
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FORM + SIDEBAR ═══════════════════ */}
      <section id="contact-form" className="section-pad bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* ── Left sidebar — contact info ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="lg:col-span-4 self-start lg:sticky lg:top-28 order-2 lg:order-1"
            >
              <p className="text-sm text-[#6B7180] mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>Contact Info</p>
              <h2 className="heading-xl font-black text-[#0D0D1A] mt-1 mb-5 leading-tight">
                Reach us
                <br />
                directly
              </h2>
              <p className="text-[#6B7180] text-base leading-relaxed mb-8">
                Prefer a quick chat? Reach out via email, phone, or WhatsApp —
                we&apos;re always available.
              </p>

              {/* Contact cards */}
              <div className="flex flex-col gap-3 mb-8">
                {CONTACT_INFO.map((c) => (
                  <div
                    key={c.label}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-[#FAFAFA]
                      hover:bg-white hover:shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                      <c.icon size={15} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.18em] mb-0.5">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-[#0D0D1A] font-medium text-sm hover:text-brand-600 transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-[#0D0D1A] font-medium text-sm whitespace-pre-line">
                          {c.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-100 h-44">
                <iframe
                  title="Unitaspro Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+75+Mohali!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* ── Right — form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="lg:col-span-8 order-1 lg:order-2"
            >
              {sent ? (
                /* ── Success state ── */
                <div
                  className="min-h-[500px] flex flex-col items-center justify-center gap-5 p-12
                  rounded-2xl border border-gray-100 bg-[#F7F8FC] text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <CheckCircle2 size={32} className="text-green-600" />
                  </motion.div>
                  <div>
                    <h2 className="font-black text-[#0D0D1A] text-2xl mb-2">
                      Message received!
                    </h2>
                    <p className="text-[#6B7180] text-base">
                      We&apos;ll review your project details and get back within
                      24 hours.
                    </p>
                  </div>
                  <button
                    className="btn-primary group mt-2"
                    onClick={() => setSent(false)}
                  >
                    Send Another
                    <span className="btn-arrow">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <div className="rounded-2xl border border-gray-100 bg-[#F7F8FC] p-5 sm:p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="font-bold text-[#0D0D1A] text-xl mb-1.5">
                      Tell us about your project
                    </h3>
                    <p className="text-[#6B7180] text-sm">
                      Fill in the details and we&apos;ll get back within 24
                      hours with a free consultation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-[#374151] uppercase tracking-[0.18em]">
                          Full Name *
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-[#374151] uppercase tracking-[0.18em]">
                          Email *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-[#374151] uppercase tracking-[0.18em]">
                          Phone / WhatsApp
                        </label>
                        <div className="flex gap-0">
                          {/* Country selector */}
                          <div ref={countryRef} className="relative">
                            <button
                              type="button"
                              onClick={() => { setCountryOpen(!countryOpen); setCountrySearch(""); }}
                              className="flex items-center gap-1.5 px-3 py-3.5 rounded-l-xl bg-white border border-r-0 border-gray-200
                                text-sm hover:bg-gray-50 transition-colors duration-150 h-full"
                            >
                              <span className="text-lg leading-none">{selectedCountry.flag}</span>
                              <span className="text-[#6B7180] text-xs font-medium">{selectedCountry.dial}</span>
                              <svg width="10" height="6" viewBox="0 0 10 6" className="text-gray-400 ml-0.5 shrink-0">
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>

                            <AnimatePresence>
                              {countryOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-gray-200
                                    shadow-[0_8px_32px_rgba(15,23,42,0.12)] z-50 overflow-hidden"
                                >
                                  {/* Search */}
                                  <div className="p-2 border-b border-gray-100">
                                    <input
                                      ref={searchInputRef}
                                      type="text"
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      placeholder="Search country..."
                                      className="w-full px-3 py-2 rounded-lg bg-[#F7F8FC] border-0 text-sm text-[#0D0D1A]
                                        placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30"
                                    />
                                  </div>
                                  {/* List */}
                                  <div className="max-h-52 overflow-y-auto overscroll-contain">
                                    {filteredCountries.length === 0 ? (
                                      <div className="px-4 py-3 text-sm text-gray-400">No results</div>
                                    ) : (
                                      filteredCountries.map((c) => (
                                        <button
                                          key={c.code}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCountry(c);
                                            setCountryOpen(false);
                                            setCountrySearch("");
                                          }}
                                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm
                                            hover:bg-brand-50 transition-colors duration-100
                                            ${selectedCountry.code === c.code ? "bg-brand-50 text-brand-700" : "text-[#0D0D1A]"}`}
                                        >
                                          <span className="text-lg leading-none">{c.flag}</span>
                                          <span className="flex-1 font-medium truncate">{c.name}</span>
                                          <span className="text-xs text-[#9CA3AF] tabular-nums">{c.dial}</span>
                                        </button>
                                      ))
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Phone input */}
                          <input
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            maxLength={15}
                            value={form.phone}
                            onChange={(e) => { const v = e.target.value.replace(/\D/g, ""); setForm(f => ({ ...f, phone: v })); }}
                            placeholder="XXXXX XXXXX"
                            className="flex-1 min-w-0 px-4 py-3.5 rounded-r-xl bg-white border border-gray-200 text-[#0D0D1A]
                              placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20
                              focus:border-blue-400 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-[#374151] uppercase tracking-[0.18em]">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass} pr-8`}
                        >
                          <option value="">Select a service</option>
                          <option value="web-design">
                            Web Design & Development
                          </option>
                          <option value="software">
                            Software Development
                          </option>
                          <option value="mobile">
                            Mobile App Development
                          </option>
                          <option value="marketing">
                            Digital Marketing
                          </option>
                          <option value="other">Other / Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-[#374151] uppercase tracking-[0.18em]">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking to build, your timeline, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button type="submit" disabled={loading} className="btn-primary group disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? "Sending…" : "Send Message"}
                        <span className="btn-arrow">
                          <ArrowRight size={15} />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ STRIP ═══════════════════ */}
      <section className="bg-[#F7F8FC] border-t border-gray-100">
        <div className="container-main py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm text-[#6B7180] mb-3 flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block"/>No Surprises. Just Results.</p>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              Before You Reach Out
            </h2>
            <p className="text-[#6B7180] text-lg">
              Learn more about our timelines, pricing, and international delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                q: "How Quickly Do You Respond?",
                a: "We guarantee a professional technical response within 24 business hours.",
              },
              {
                q: "Is The Consultation Really Free?",
                a: "Yes, our initial 30-minute strategy session is complimentary with no commitment.",
              },
              {
                q: "What Information Should I Include?",
                a: "Please provide your project goals, preferred timeline, and estimated budget range.",
              },
              {
                q: "Do You Work With International Clients?",
                a: "We currently serve partners in the UAE, Canada, UK, and India.",
              },
              {
                q: "What Happens After I Send The Form?",
                a: "Our engineers review your brief and schedule a discovery call session.",
              },
              {
                q: "Do You Sign NDA?",
                a: "We provide signed NDA documents to protect your intellectual property immediately.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="group/step relative bg-white rounded-2xl p-6 border border-gray-100/80
                  shadow-[0_1px_8px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)]
                  hover:-translate-y-1
                  transition-all duration-300 overflow-hidden"
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #2563EB, #2563EB99)",
                  }}
                />
                <h3 className="font-bold text-[#0D0D1A] text-sm mb-2">
                  {faq.q}
                </h3>
                <p className="text-[#6B7180] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-[#6B7180] text-sm mb-4">
              Still have questions?
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="#contact-form" className="btn-primary group">
                Get Free Quote
                <span className="btn-arrow">
                  <ArrowRight size={15} />
                </span>
              </Link>
              <a href="tel:+918264954344" className="btn-secondary">
                Call us now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
