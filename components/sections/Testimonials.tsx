"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Harrison",
    role: "Founder",
    company: "LaunchPath, Australia",
    review: "Unitaspro built our SaaS platform from scratch. The quality of code was exceptional and they delivered on time. Communication throughout was outstanding — I always knew exactly where things stood.",
    rating: 5,
    initials: "JH",
    color: "bg-[#F1F3F8] text-[#374151]",
    featured: true,
  },
  {
    name: "Aisha Al-Mansouri",
    role: "CEO",
    company: "RetailNest, UAE",
    review: "We needed an e-commerce platform in a tight timeline. Unitaspro met the deadline and added features we didn't even ask for. They truly understood our business.",
    rating: 4.5,
    initials: "AA",
    color: "bg-[#F1F3F8] text-[#374151]",
    featured: false,
  },
  {
    name: "Rahul Sharma",
    role: "CTO",
    company: "TechBridge, India",
    review: "The mobile app they built has a 4.8 rating on the App Store. Incredible attention to UI/UX detail. We've already engaged them for our next project.",
    rating: 5,
    initials: "RS",
    color: "bg-[#F1F3F8] text-[#374151]",
    featured: false,
  },
  {
    name: "Mark Williams",
    role: "Director",
    company: "CoreSystems, UK",
    review: "Professional, transparent, and genuinely skilled. They rebuilt our internal dashboard and the result is night and day from what we had. Highly recommend.",
    rating: 4,
    initials: "MW",
    color: "bg-[#F1F3F8] text-[#374151]",
    featured: false,
  },
  {
    name: "Sophie Chen",
    role: "Product Manager",
    company: "NexaFlow, Canada",
    review: "What stood out was how proactive they were. They flagged issues before they became problems and always came with solutions. The team felt like an extension of our own.",
    rating: 4.5,
    initials: "SC",
    color: "bg-[#F1F3F8] text-[#374151]",
    featured: false,
  },
];

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = rating >= n;
        const half = !filled && rating >= n - 0.5;
        return (
          <span key={n} className="relative inline-flex" style={{ width: size, height: size }}>
            {/* Base (empty) star */}
            <Star size={size} className="text-gray-200 fill-gray-200 absolute inset-0" />
            {/* Filled portion */}
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? "50%" : "100%" }}
              >
                <Star size={size} className="fill-amber-400 text-amber-400" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label mb-4">Client Reviews</span>
          <h2 className="heading-xl text-[#0D0D1A] mb-4">
            What our clients say
          </h2>
          <p className="text-[#6B7180] text-lg">
            Real feedback from real businesses across 12+ countries.
          </p>
        </div>

        {/* Aggregate trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 py-5 border-y border-gray-100">
          <div className="flex items-center gap-2">
            <StarRating rating={5} size={16} />
            <span className="font-bold text-[#0D0D1A] text-lg">4.9</span>
            <span className="text-[#6B7180] text-sm">average rating</span>
          </div>
          <div className="w-px h-6 bg-gray-200 hidden sm:block"/>
          <div className="text-sm text-[#6B7180]">
            <span className="font-semibold text-[#0D0D1A]">95+</span> happy clients
          </div>
          <div className="w-px h-6 bg-gray-200 hidden sm:block"/>
          <div className="text-sm text-[#6B7180]">
            <span className="font-semibold text-[#0D0D1A]">97%</span> client satisfaction
          </div>
          <div className="w-px h-6 bg-gray-200 hidden sm:block"/>
          <div className="text-sm text-[#6B7180]">
            <span className="font-semibold text-[#0D0D1A]">30-day</span> free support post-launch
          </div>
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F172A] rounded-2xl p-8 lg:p-10 mb-6 relative overflow-hidden"
        >
          <div aria-hidden className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #1A56DB 0%, transparent 70%)" }}/>
          <Quote size={36} className="text-white/10 mb-4"/>
          <p className="text-white text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl relative z-10">
            &ldquo;{testimonials[0].review}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${testimonials[0].color} flex items-center justify-center text-sm font-bold shrink-0`}>
              {testimonials[0].initials}
            </div>
            <div>
              <div className="font-semibold text-white">{testimonials[0].name}</div>
              <div className="text-white/50 text-sm">{testimonials[0].role} · {testimonials[0].company}</div>
            </div>
            <div className="ml-auto hidden sm:block">
              <StarRating rating={testimonials[0].rating} size={14} />
            </div>
          </div>
        </motion.div>

        {/* Rest — 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card flex flex-col gap-3"
            >
              <StarRating rating={t.rating} size={12} />
              <p className="text-[#6B7180] text-sm leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#0D0D1A] text-xs">{t.name}</div>
                  <div className="text-[#9CA3AF] text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
