"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management, payment gateway integration, and a custom CMS.",
    result: "3× increase in online sales within 6 months",
    tags: ["Next.js", "Node.js", "Stripe"],
    accentColor: "text-[#6B7180]",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile App",
    description: "Cross-platform health tracking app for a UAE-based clinic with appointment booking, health records, and telemedicine features.",
    result: "10,000+ downloads in the first quarter",
    tags: ["React Native", "Firebase", "HL7"],
    accentColor: "text-[#6B7180]",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    title: "SaaS Dashboard",
    category: "Software Development",
    description: "Analytics and reporting SaaS platform for a logistics company with real-time tracking, automated reports, and role-based access.",
    result: "Reduced manual reporting time by 80%",
    tags: ["React", "Python", "PostgreSQL"],
    accentColor: "text-[#6B7180]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];


export default function FeaturedWork() {
  return (
    <section className="section-pad bg-[#F7F8FC]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-4">Our Work</span>
            <h2 className="heading-xl text-[#0D0D1A] mb-3">
              Projects we&apos;re proud of
            </h2>
            <p className="text-[#6B7180] text-lg max-w-2xl">
              Real results for real businesses — from startups to established enterprises.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary whitespace-nowrap shrink-0">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl border border-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${p.accentColor} mb-2`}>
                    {p.category}
                  </span>
                  <h3 className="font-bold text-[#0D0D1A] text-lg mb-2 group-hover:text-brand-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7180] text-sm leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center gap-2 bg-[#F5F6FC] rounded-xl px-3.5 py-2.5 mb-4">
                    <span className="text-sm font-medium text-[#0D0D1A]">{p.result}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#6B7180] bg-[#F5F6FC] border border-gray-100 px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
