"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, Users, Globe2 } from "lucide-react";

const COUNTRIES = [
  { code: "IN", dial: "+91", flag: "🇮🇳" },
  { code: "US", dial: "+1",  flag: "🇺🇸" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "AE", dial: "+971",flag: "🇦🇪" },
  { code: "AU", dial: "+61", flag: "🇦🇺" },
  { code: "CA", dial: "+1",  flag: "🇨🇦" },
];

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSent(false);
    setVisible(false);
    // Don't show popup on contact page — user is already filling out a form
    if (pathname === "/contact") return;
    timerRef.current = setTimeout(() => setVisible(true), 4500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [pathname]);

  function dismiss() {
    setVisible(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.lastName.trim()) errs.lastName = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone ? `${selectedCountry.dial} ${form.phone}` : "",
          service: form.service,
          message: form.message || "—",
        }),
      });
      const data = await res.json();
      if (data.success) setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  const inp = (hasError?: boolean) =>
    `w-full px-3.5 py-3 rounded-xl text-sm text-[#0D0D1A] placeholder-gray-400 bg-[#F7F8FC] border transition-all duration-150 focus:outline-none focus:ring-2 focus:bg-white ${
      hasError
        ? "border-red-300 focus:ring-red-400/20 focus:border-red-400"
        : "border-gray-200 focus:ring-blue-500/15 focus:border-blue-400"
    }`;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-[780px] bg-white rounded-3xl shadow-[0_40px_100px_rgba(15,23,42,0.25)] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">

              {/* ── Left: dark value panel ── */}
              <div className="relative hidden md:flex flex-col justify-between p-8 overflow-hidden"
                style={{ background: "linear-gradient(160deg,#0A0F1E 0%,#0F1F4A 100%)" }}>

                {/* Grid pattern */}
                <div aria-hidden className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}/>
                {/* Glow */}
                <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle,#3B6FDB,transparent 65%)" }}/>
                <div aria-hidden className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-10"
                  style={{ background: "radial-gradient(circle,#6D28D9,transparent 65%)" }}/>

                <div className="relative z-10">
                  {/* Logo mark */}
                  <div className="flex items-center mb-8">
                    <Image src="/unitaspro-logo.png" alt="Unitaspro" width={120} height={34} className="h-7 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em]">Free consultation</span>
                    </div>
                    <h2 className="text-white font-bold text-2xl leading-snug mb-3" style={{ letterSpacing: "-0.03em" }}>
                      Ready to build<br/>something great?
                    </h2>
                    <p className="text-white/45 text-sm leading-relaxed">
                      Tell us your idea. We'll come back with a clear plan, timeline, and fixed price — within 24 hours.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: Users, value: "150+", label: "Projects delivered" },
                      { icon: Globe2, value: "15+",  label: "Countries served" },
                      { icon: Clock, value: "24h",   label: "Response time" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                          <s.icon size={14} className="text-white/50"/>
                        </div>
                        <div>
                          <span className="text-white font-bold text-sm">{s.value} </span>
                          <span className="text-white/40 text-xs">{s.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom divider line */}
                <div className="relative z-10 mt-8">
                  <div className="h-px w-full opacity-10 bg-white mb-5"/>
                  <p className="text-white/25 text-xs leading-relaxed">
                    No commitment required. We&apos;ll listen first, then recommend.
                  </p>
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="relative p-7 sm:p-8">
                {/* Close */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-[#6B7180]"/>
                </button>

                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16 }}
                      className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5"
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <h3 className="font-bold text-[#0D0D1A] text-xl mb-2">We'll be in touch!</h3>
                    <p className="text-[#9CA3AF] text-sm mb-6">Expect a reply within 24 hours.</p>
                    <button onClick={dismiss} className="btn-primary group">
                      Continue browsing
                      <span className="btn-arrow"><ArrowRight size={14}/></span>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-5">
                      <h3 className="font-bold text-[#0D0D1A] text-lg leading-snug" style={{ letterSpacing: "-0.02em" }}>
                        Get a free quote
                      </h3>
                      <p className="text-[#9CA3AF] text-xs mt-1">Takes 30 seconds. No spam, ever.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                      {/* First Name + Last Name */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input name="firstName" type="text" value={form.firstName} onChange={handleChange}
                            placeholder="First Name *" className={inp(!!errors.firstName)}/>
                          {errors.firstName && <p className="text-xs text-red-500 mt-1 pl-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <input name="lastName" type="text" value={form.lastName} onChange={handleChange}
                            placeholder="Last Name *" className={inp(!!errors.lastName)}/>
                          {errors.lastName && <p className="text-xs text-red-500 mt-1 pl-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Email — full width */}
                      <div>
                        <input name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="Email Address *" className={inp(!!errors.email)}/>
                        {errors.email && <p className="text-xs text-red-500 mt-1 pl-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="flex gap-0">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => setSelectedCountry(COUNTRIES.find(c => c.code === e.target.value) ?? COUNTRIES[0])}
                          className="px-2.5 py-3 rounded-l-xl bg-[#F7F8FC] border border-r-0 border-gray-200 text-sm focus:outline-none"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.code}>{c.flag} {c.dial}</option>
                          ))}
                        </select>
                        <input name="phone" type="tel" value={form.phone}
                          onChange={(e) => { const v = e.target.value.replace(/\D/g, ""); setForm(f => ({ ...f, phone: v })); }}
                          placeholder="Phone / WhatsApp" inputMode="numeric" maxLength={15}
                          className="flex-1 min-w-0 px-3.5 py-3 rounded-r-xl bg-[#F7F8FC] border border-gray-200 text-sm text-[#0D0D1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 focus:bg-white transition-all"/>
                      </div>

                      {/* Service */}
                      <select name="service" value={form.service} onChange={handleChange} className={`${inp()} pr-8`}>
                        <option value="">Service Needed</option>
                        <option value="web-design">Web Design & Development</option>
                        <option value="software">Software Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="other">Other / Not sure yet</option>
                      </select>

                      {/* Message — optional */}
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                        placeholder="Project details (optional)"
                        className={`${inp()} resize-none`}/>

                      <button type="submit" disabled={loading}
                        className="btn-primary group w-full justify-between mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? "Sending…" : "Get Free Consultation"}
                        <span className="btn-arrow"><ArrowRight size={14}/></span>
                      </button>

                      <p className="text-center text-xs text-[#9CA3AF]">
                        By submitting you agree to be contacted by our team.
                      </p>
                    </form>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
