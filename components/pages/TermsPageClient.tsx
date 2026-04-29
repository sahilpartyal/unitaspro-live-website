"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    content: [
      "By accessing our website or engaging Unitaspro for services, you agree to be bound by these Terms of Service. These terms govern all project engagements, website use, and business relationships with Unitaspro.",
      "If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    id: "services",
    label: "Services",
    content: [
      "Unitaspro provides custom software development services including web design and development, custom software development, mobile app development (iOS & Android), and digital marketing and SEO.",
      "All projects are governed by a separate project agreement or statement of work (SOW) that outlines scope, deliverables, timeline, and pricing.",
    ],
  },
  {
    id: "engagement",
    label: "Project Engagement",
    content: [
      "We provide fixed-price quotations based on a detailed scoping process. A project begins only after mutual agreement on scope, timeline, and payment terms documented in a project agreement.",
      "Any changes to the agreed scope will be documented as a change request with revised pricing and timeline. No additional work is performed without your written approval.",
      "You agree to provide timely feedback and approvals as outlined in the project plan, supply all required content, assets, and access credentials, and designate a single point of contact for project communication.",
    ],
  },
  {
    id: "payment",
    label: "Payment Terms",
    content: [
      "Payment schedules are defined in the project agreement, typically milestone-based. Invoices are due within 7 days of issue unless otherwise agreed.",
      "Late payments may result in project suspension until outstanding amounts are settled. All prices are quoted in the currency specified in the project agreement.",
    ],
  },
  {
    id: "ip",
    label: "Intellectual Property",
    content: [
      "Upon full payment, you own 100% of the custom source code developed for your project. This does not include third-party libraries, frameworks, or open-source components which remain under their respective licences.",
      "Any tools, frameworks, templates, or components that existed before the project or are used across multiple client projects remain the property of Unitaspro.",
      "We reserve the right to showcase the project in our portfolio and marketing materials unless you explicitly request otherwise in writing.",
    ],
  },
  {
    id: "confidentiality",
    label: "Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary information shared during the project. This includes business strategies, technical specifications, customer data, and financial information.",
      "This obligation survives the termination of the project.",
    ],
  },
  {
    id: "warranties",
    label: "Warranties & Liability",
    content: [
      "We guarantee that all deliverables will match the agreed specifications in the project agreement, include a 30-day bug-fix warranty period after project delivery, and code will follow industry best practices.",
      "We do not guarantee specific business outcomes, revenue, or traffic numbers, third-party service uptime (hosting providers, APIs, app stores), or compatibility with future software or platform updates beyond our control.",
      "To the maximum extent permitted by law, Unitaspro\u2019s total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific project in question.",
    ],
  },
  {
    id: "termination",
    label: "Termination",
    content: [
      "Either party may terminate a project engagement by providing 14 days written notice. Upon termination, you will be invoiced for all work completed to date.",
      "All completed deliverables will be handed over upon payment. Any advance payments for undelivered work will be refunded on a pro-rata basis.",
    ],
  },
  {
    id: "website-use",
    label: "Website Use",
    content: [
      "When using our website, you agree not to attempt to gain unauthorised access to any part of the website, use the website to transmit malicious code or spam, or reproduce, duplicate, or resell any part of our website content without permission.",
    ],
  },
  {
    id: "governing-law",
    label: "Governing Law",
    content: [
      "These terms are governed by the laws of India. Any disputes will be resolved through arbitration in Mohali, Punjab, India, unless an alternative jurisdiction is agreed upon in the project agreement.",
      "We may update these terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsPageClient() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <>
      {/* Hero — inner page style with grid + diamond decoration */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-14">
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
            <span className="font-light text-[#9CA3AF]">Read before you </span>
            <span className="font-semibold text-[#0D0D1A]">engage our services.</span>
          </h1>
          <p className="text-[#6B7180] text-base max-w-xl leading-relaxed mt-4">
            These terms govern all project engagements, website use, and business relationships with Unitaspro.
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
                  <h2 className="font-semibold text-[#0D0D1A] text-lg mb-3">Questions about these terms?</h2>
                  <p className="text-[#6B7180] text-[15px] leading-[1.8]">
                    Email{" "}
                    <a href="mailto:info@unitaspro.com" className="text-[#2563EB] hover:underline">info@unitaspro.com</a>
                    {" "}or call{" "}
                    <a href="tel:+918264954344" className="text-[#2563EB] hover:underline">+91 82649 54344</a>.
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
