"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor, type SanityPost, type SanityCategory } from "@/lib/sanity";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const POSTS_PER_PAGE = 9;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListingClient({
  posts,
  categories,
}: {
  posts: SanityPost[];
  categories: SanityCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.category?.slug?.current === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset page when filter changes
  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleSearchChange(val: string) {
    setSearchQuery(val);
    setCurrentPage(1);
  }

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-32 lg:pt-[13rem] pb-12">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[55%] h-full hidden lg:block"
        >
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <p className="text-sm text-[#6B7180] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
              Insights from the domains shaping what&apos;s next
            </p>
            <div className="mt-3 w-64 h-px border-t border-dashed border-gray-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="max-w-4xl mb-10"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="font-light text-[#9CA3AF]">Tips, strategies & </span>
            <span className="font-semibold text-[#0D0D1A]">case studies</span>
          </motion.h1>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="relative max-w-md mb-8"
          >
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 text-sm text-[#0D0D1A]
                placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400
                transition-all duration-200 shadow-sm"
            />
          </motion.div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeCategory === "all"
                    ? "bg-[#0D0D1A] text-white shadow-md"
                    : "bg-white text-[#6B7180] border border-gray-200 hover:border-gray-400 hover:text-[#0D0D1A]"
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat.slug.current)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === cat.slug.current
                      ? "bg-[#0D0D1A] text-white shadow-md"
                      : "bg-white text-[#6B7180] border border-gray-200 hover:border-gray-400 hover:text-[#0D0D1A]"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ POSTS GRID ═══════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery + currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-[#6B7180] text-lg mb-2">No posts found.</p>
                  <p className="text-[#9CA3AF] text-sm">
                    Try a different category or search term.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {paginatedPosts.map((post, i) => (
                      <motion.div
                        key={post._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="group/card relative flex flex-col bg-white rounded-2xl border border-gray-100
                            shadow-[0_1px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]
                            hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full"
                        >
                          {/* Accent top bar */}
                          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-brand-600 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10" />

                          {/* Image */}
                          {post.mainImage && (
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <Image
                                src={urlFor(post.mainImage).width(600).height(375).url()}
                                alt={post.mainImage.alt || post.title}
                                fill
                                priority={i === 0}
                                className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              {/* Category overlay badge */}
                              {post.category && (
                                <span
                                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${post.category.color} backdrop-blur-sm`}
                                >
                                  {post.category.name}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex flex-col flex-1 p-5">
                            <h3 className="font-bold text-[#0D0D1A] text-[15px] mb-2.5 group-hover/card:text-brand-600 transition-colors leading-snug line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-[#6B7180] text-[13px] leading-relaxed flex-1 line-clamp-3 mb-4">
                              {post.excerpt}
                            </p>

                            {/* Author + meta */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-2">
                                {post.author?.image && (
                                  <Image
                                    src={urlFor(post.author.image).width(28).height(28).url()}
                                    alt={post.author.name}
                                    width={28}
                                    height={28}
                                    className="rounded-full"
                                  />
                                )}
                                <div>
                                  <div className="text-xs font-semibold text-[#0D0D1A]">
                                    {post.author?.name}
                                  </div>
                                  <div className="text-xs text-[#9CA3AF]">
                                    {formatDate(post.publishedAt)}
                                  </div>
                                </div>
                              </div>
                              {post.readTime && (
                                <span className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                                  <Clock size={10} />
                                  {post.readTime}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Read more bar */}
                          <div className="px-5 py-3 border-t border-gray-50 bg-[#FAFBFC] flex items-center justify-between">
                            <span className="text-xs font-semibold text-brand-600">
                              Read more
                            </span>
                            <ArrowRight
                              size={13}
                              className="text-brand-600 group-hover/card:translate-x-1 transition-transform"
                            />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-14">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center
                          text-[#6B7180] hover:border-gray-400 hover:text-[#0D0D1A] transition-all
                          disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-xl text-sm font-medium transition-all duration-200
                            ${
                              currentPage === page
                                ? "bg-[#0D0D1A] text-white shadow-md"
                                : "border border-gray-200 text-[#6B7180] hover:border-gray-400 hover:text-[#0D0D1A]"
                            }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center
                          text-[#6B7180] hover:border-gray-400 hover:text-[#0D0D1A] transition-all
                          disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER CTA ═══════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0F172A 0%,#1e2d5a 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 65%)" }}
        />

        <div className="container-main relative py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Subscribe to our newsletter
            </p>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
            >
              Stay ahead with handpicked weekly reads
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              Get the latest insights on web development, software engineering, and digital growth delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm
                  placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-white text-[#0F172A] font-semibold text-sm
                  hover:bg-[#F1F3F8] transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
