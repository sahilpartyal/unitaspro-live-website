"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered",  sub: "Across diverse industries" },
  { value: "95+",  label: "Happy Clients",        sub: "Serving clients in 15+ countries" },
  { value: "97%",  label: "Client Satisfaction",  sub: "Based on long-term partnerships" },
  { value: "8+",   label: "Years of Experience",  sub: "Growing steadily since 2019" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0F172A" }}>
      {/* Subtle glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #1A56DB 0%, transparent 70%)" }}/>
      </div>

      <div className="container-main relative py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="text-center lg:px-8 py-4 lg:py-0"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {s.value}
              </div>
              <div className="text-white/80 text-sm font-semibold mb-0.5">{s.label}</div>
              <div className="text-white/35 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
