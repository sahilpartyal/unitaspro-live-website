"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  List,
  Share2,
  Linkedin,
  Twitter,
  Link2,
  ChevronUp,
} from "lucide-react";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { urlFor, type SanityPost } from "@/lib/sanity";
import sanitizeHtml from "sanitize-html";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/* ── Extract headings from portable text for TOC ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractHeadings(body: any[]): { text: string; id: string; level: number }[] {
  if (!body) return [];
  return body
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = block.children?.map((child: any) => child.text).join("") || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { text, id, level: block.style === "h2" ? 2 : 3 };
    });
}

/* ── Portable text components with ID anchors ── */
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = value?.children?.map((c: any) => c.text).join("") || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return (
        <h2 id={id} className="text-2xl font-bold text-[#0D0D1A] mt-12 mb-4 scroll-mt-28">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = value?.children?.map((c: any) => c.text).join("") || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return (
        <h3 id={id} className="text-xl font-semibold text-[#0D0D1A] mt-8 mb-3 scroll-mt-28">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-[#0D0D1A] mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-600 bg-brand-50 pl-6 py-4 pr-4 rounded-r-xl my-6 italic text-[#6B7180]">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-[#4B5163] text-[17px] leading-[1.8] mb-6">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#0D0D1A]">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-sm px-1.5 py-0.5 rounded font-mono text-[#0D0D1A]">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-brand-600 underline decoration-brand-200 hover:decoration-brand-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ""}
          width={800}
          height={450}
          className="rounded-xl w-full"
        />
        {value.caption && (
          <figcaption className="text-sm text-[#9CA3AF] text-center mt-3">{value.caption}</figcaption>
        )}
      </figure>
    ),
    html: ({ value }) => (
      <div
        className="my-8 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(value?.code || "") }}
      />
    ),
  },
};

export default function BlogPostClient({
  post,
  relatedPosts,
}: {
  post: SanityPost;
  relatedPosts?: SanityPost[];
}) {
  const headings = extractHeadings(post.body || []);
  const [activeHeading, setActiveHeading] = useState("");
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHeading(entry.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  // Reading progress bar
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  function copyLink() {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* ── Reading progress bar ── */}
      <div className="fixed top-[68px] left-0 right-0 h-[3px] z-40 bg-gray-100">
        <motion.div
          className="h-full bg-brand-600"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#F8F9FC] pt-20 pb-12 lg:pt-32 lg:pb-16">
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
        </div>

        <div className="container-main relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-8"
          >
            <Link href="/blog" className="hover:text-[#0D0D1A] transition-colors">
              Blog
            </Link>
            <span>/</span>
            {post.category && (
              <>
                <span className="hover:text-[#0D0D1A] transition-colors">
                  {post.category.name}
                </span>
                <span>/</span>
              </>
            )}
            <span className="text-[#6B7180] truncate max-w-[200px]">{post.title}</span>
          </motion.div>

          <div className="max-w-4xl">
            {post.category && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-5 ${post.category.color}`}
                >
                  {post.category.name}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
              className="font-bold text-[#0D0D1A] mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
              }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#6B7180] text-lg leading-relaxed mb-8 max-w-3xl"
            >
              {post.excerpt}
            </motion.p>

            {/* Author + meta row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-5 pb-6 border-b border-gray-200"
            >
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image && (
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-sm text-[#0D0D1A]">{post.author.name}</div>
                    {post.author.bio && (
                      <div className="text-xs text-[#9CA3AF] line-clamp-1 max-w-[200px]">
                        {post.author.bio}
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 text-sm text-[#6B7180]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(post.publishedAt)}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTENT AREA ═══════════════════ */}
      <section className="bg-white section-pad">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left sidebar — Author card + TOC (sticky) ── */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 flex flex-col gap-5">

                {/* Author card */}
                {post.author && (
                  <div className="rounded-2xl border border-gray-100 bg-[#F7F8FC] p-5 text-center">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).width(72).height(72).url()}
                        alt={post.author.name}
                        width={72}
                        height={72}
                        className="rounded-full mx-auto mb-3"
                      />
                    )}
                    <div className="font-semibold text-[#0D0D1A] text-sm mb-1">
                      {post.author.name}
                    </div>
                    {post.author.bio && (
                      <p className="text-xs text-[#6B7180] leading-relaxed mb-3">
                        {post.author.bio}
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center
                          text-[#6B7180] hover:text-[#0D0D1A] hover:border-gray-400 transition-all"
                      >
                        <Twitter size={13} />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center
                          text-[#6B7180] hover:text-[#0D0D1A] hover:border-gray-400 transition-all"
                      >
                        <Linkedin size={13} />
                      </a>
                      <button
                        onClick={copyLink}
                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center
                          text-[#6B7180] hover:text-[#0D0D1A] hover:border-gray-400 transition-all"
                      >
                        {copied ? <span className="text-[10px] text-green-600">Done</span> : <Link2 size={13} />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="rounded-2xl border border-gray-100 bg-[#F7F8FC] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <List size={15} className="text-[#0D0D1A]" />
                      <h3 className="font-bold text-sm text-[#0D0D1A]">In this article</h3>
                    </div>
                    <nav className="flex flex-col gap-0.5">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className={`text-[13px] py-1.5 border-l-2 transition-all duration-200 leading-snug
                            ${h.level === 3 ? "pl-5" : "pl-3"}
                            ${
                              activeHeading === h.id
                                ? "border-brand-600 text-brand-600 font-medium"
                                : "border-transparent text-[#6B7180] hover:text-[#0D0D1A] hover:border-gray-300"
                            }`}
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* CTA card */}
                <div
                  className="rounded-2xl p-5 overflow-hidden relative"
                  style={{ background: "linear-gradient(160deg,#0F172A 0%,#1e2d5a 100%)" }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle,#6366f1,transparent 70%)" }}
                  />
                  <h3 className="text-white font-bold text-sm mb-2 relative z-10">
                    Need help building this?
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 relative z-10">
                    Free consultation, no commitment.
                  </p>
                  <Link
                    href="/contact"
                    className="relative z-10 inline-flex items-center gap-2 bg-white text-[#0F172A] font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Get Free Quote
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main article body ── */}
            <article className="lg:col-span-9 order-1 lg:order-2 min-w-0">
              {/* Main image */}
              {post.mainImage && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(15,23,42,0.08)] mb-10"
                >
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(675).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                  />
                </motion.div>
              )}

              {/* Body */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose-unitaspro"
              >
                {post.body && (
                  <PortableText value={post.body} components={portableTextComponents} />
                )}
              </motion.div>

              {/* Share bar at bottom of article */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                <Share2 size={14} className="text-[#9CA3AF]" />
                <span className="text-sm text-[#6B7180] mr-2">Share this article:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7F8FC] border border-gray-100
                    text-xs text-[#6B7180] hover:border-gray-300 hover:text-[#0D0D1A] transition-all"
                >
                  <Twitter size={13} /> Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7F8FC] border border-gray-100
                    text-xs text-[#6B7180] hover:border-gray-300 hover:text-[#0D0D1A] transition-all"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7F8FC] border border-gray-100
                    text-xs text-[#6B7180] hover:border-gray-300 hover:text-[#0D0D1A] transition-all"
                >
                  <Link2 size={13} /> {copied ? "Copied!" : "Copy link"}
                </button>
              </div>

              {/* Back to blog */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to all posts
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ RELATED POSTS ═══════════════════ */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-[#F7F8FC] border-t border-gray-100">
          <div className="container-main py-16 lg:py-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-sm text-[#6B7180] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#0D0D1A] inline-block" />
                  Similar blog and resources
                </p>
                <h2 className="heading-lg text-[#0D0D1A]">Related articles</h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#6B7180] hover:text-[#0D0D1A] transition-colors"
              >
                All posts <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp, i) => (
                <motion.div
                  key={rp._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <Link
                    href={`/blog/${rp.slug.current}`}
                    className="group/card relative flex flex-col bg-white rounded-2xl border border-gray-100/80
                      shadow-[0_1px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]
                      hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-brand-600 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10" />
                    {rp.mainImage && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={urlFor(rp.mainImage).width(400).height(250).url()}
                          alt={rp.mainImage.alt || rp.title}
                          fill
                          className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        {rp.category && (
                          <span
                            className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${rp.category.color}`}
                          >
                            {rp.category.name}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-bold text-[#0D0D1A] text-sm mb-2 group-hover/card:text-brand-600 transition-colors leading-snug line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-[#6B7180] text-xs leading-relaxed line-clamp-2 flex-1">
                        {rp.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-50">
                        <span className="text-[10px] text-[#9CA3AF]">
                          {new Date(rp.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-600">
                          Read <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Scroll to top button ── */}
      {readProgress > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-[#0D0D1A] text-white
            shadow-lg flex items-center justify-center hover:bg-brand-600 transition-colors z-40"
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </>
  );
}
