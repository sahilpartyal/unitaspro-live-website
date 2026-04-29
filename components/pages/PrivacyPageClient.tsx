"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

const SECTIONS = [
  {
    id: "introduction",
    label: "Introduction",
    content: [
      'Unitaspro ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website unitaspro.com or engage our services.',
    ],
  },
  {
    id: "info-collected",
    label: "Information We Collect",
    content: [
      "When you fill out our contact form, request a quote, or engage our services, we may collect your name (first and last), email address, phone number or WhatsApp number, company name, and project details you voluntarily provide.",
      "When you browse our website, we may automatically collect your IP address and approximate location, browser type and version, pages visited and time spent, referring website or search terms, and device type and screen resolution.",
    ],
  },
  {
    id: "how-we-use",
    label: "How We Use Your Data",
    content: [
      "We use the information we collect to respond to your enquiries and provide project quotes, deliver and manage our services, send project updates and relevant communications, improve our website and user experience, and comply with legal obligations.",
      "We do not sell, rent, or share your personal data with third parties for their marketing purposes.",
    ],
  },
  {
    id: "cookies",
    label: "Cookies & Analytics",
    content: [
      "Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse website traffic. You can control cookie preferences through your browser settings.",
      "We may use Google Analytics to understand how visitors interact with our site. This data is anonymised and used solely to improve our website.",
    ],
  },
  {
    id: "data-retention",
    label: "Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law.",
      "Contact form submissions are retained for up to 24 months unless you request earlier deletion.",
    ],
  },
  {
    id: "your-rights",
    label: "Your Rights",
    content: [
      "Depending on your location, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict processing of your data, request data portability, and withdraw consent at any time.",
      "To exercise any of these rights, email us at info@unitaspro.com. We will respond within 30 days.",
    ],
  },
  {
    id: "security",
    label: "Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.",
      "Our website is served over HTTPS with SSL encryption. Data is stored on secure servers managed by our hosting provider (Vercel).",
    ],
  },
  {
    id: "third-parties",
    label: "Third-Party Services",
    content: [
      "We may use the following third-party services that process data on our behalf: Vercel (website hosting), Sanity.io (content management), and Google Analytics (website analytics).",
      "Each third party is bound by their own privacy policies and data processing agreements.",
    ],
  },
  {
    id: "international",
    label: "International Transfers",
    content: [
      "As we serve clients globally (India, UAE, UK, Australia, USA), your data may be transferred to and processed in countries outside your own.",
      "We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws including GDPR.",
    ],
  },
  {
    id: "changes",
    label: "Policy Changes",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.",
      "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children.",
    ],
  },
];

export default function PrivacyPageClient() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <>
      {/* Hero — inner page style with grid + diamond decoration */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-[13rem] lg:pb-14">
        <div aria-hidden className="pointer-events-none absolute top-16 left-[20%] w-64 h-64 rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}/>

        {/* Grid + diamonds — right side */}
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
              { x: 260, y: 260, s: 10 },
            ].map((d, i) => (
              <rect key={i} x={d.x - d.s/2} y={d.y - d.s/2} width={d.s} height={d.s}
                fill="#0D0D1A" rx={3} transform={`rotate(45 ${d.x} ${d.y})`}/>
            ))}
          </svg>
        </div>

        <div className="container-main relative">
          <div className="mb-5">
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] inline-block"/>
              Legal
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300"/>
          </div>
          <h1
            className="max-w-4xl mb-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08, letterSpacing: "-0.04em" }}
          >
            <span className="font-light text-[#9CA3AF]">Your data is </span>
            <span className="font-semibold text-[#0D0D1A]">safe with us.</span>
          </h1>
          <p className="text-[#6B7180] text-base max-w-xl leading-relaxed mt-4">
            How Unitaspro collects, uses, and protects your personal information. GDPR and CCPA compliant.
          </p>
          <p className="text-[#9CA3AF] text-sm mt-4">Last updated: 16 April 2026</p>
        </div>

      </section>

      {/* Content */}
      <section className="bg-white section-pad">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left sidebar — TOC (sticky) */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 flex flex-col gap-5">
                <div className="rounded-2xl border border-gray-100 bg-[#F7F8FC] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <List size={15} className="text-[#0D0D1A]" />
                    <h3 className="font-bold text-sm text-[#0D0D1A]">Contents</h3>
                  </div>
                  <nav className="flex flex-col gap-0.5">
                    {SECTIONS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActiveSection(s.id);
                          document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`text-left text-[13px] py-1.5 border-l-2 pl-3 transition-all duration-200 leading-snug ${
                          activeSection === s.id
                            ? "border-[#2563EB] text-[#2563EB] font-medium"
                            : "border-transparent text-[#6B7180] hover:text-[#0D0D1A] hover:border-gray-300"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Right — full content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="max-w-2xl space-y-12">
                {SECTIONS.map((s) => (
                  <motion.div
                    key={s.id}
                    id={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h2
                      className="font-semibold text-[#0D0D1A] mb-4"
                      style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
                    >
                      {s.label}
                    </h2>
                    <div className="text-[#6B7180] text-[15px] leading-[1.8] space-y-4">
                      {s.content.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Contact */}
                <div className="pt-8 border-t border-gray-100">
                  <h2 className="font-semibold text-[#0D0D1A] text-lg mb-3">Contact us about your data</h2>
                  <p className="text-[#6B7180] text-[15px] leading-[1.8]">
                    Email{" "}
                    <a href="mailto:info@unitaspro.com" className="text-[#2563EB] hover:underline">info@unitaspro.com</a>
                    {" "}or call{" "}
                    <a href="tel:+918264954344" className="text-[#2563EB] hover:underline">+91 82649 54344</a>.
                    {" "}Address: E 279, Industrial Area, Sector 75, Mohali, Punjab 160055, India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
