"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

interface BlogPost {
  slug: string;
  featured: boolean;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
}

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <section className="section-pad bg-[#F7F8FC]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <span className="section-label mb-4">Insights</span>
            <h2 className="heading-xl text-text-primary">
              Tips, strategies & case studies
            </h2>
          </div>
          <Link href="/blog" className="btn-secondary whitespace-nowrap text-sm">
            All Articles <ArrowRight size={15}/>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured post — large */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 card overflow-hidden flex flex-col group"
          >
            <Link href={`/blog/${featured.slug}`} className="flex flex-col flex-1">
              {/* Visual */}
              <div className="h-56 relative overflow-hidden">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"/>
                <span className={`absolute bottom-4 left-5 text-xs font-semibold px-2.5 py-1 rounded-full ${featured.categoryColor}`}>
                  {featured.category}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11}/>{featured.readTime}</span>
                </div>
                <h3 className="font-bold text-xl text-text-primary mb-3 group-hover:text-brand-600 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{featured.excerpt}</p>
                <div className="flex items-center gap-1.5 text-brand-600 text-sm font-semibold mt-5 group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={14}/>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller posts */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="card group cursor-pointer overflow-hidden flex gap-0"
              >
                <Link href={`/blog/${post.slug}`} className="flex gap-0 w-full">
                  {/* Thumbnail */}
                  <div className="w-28 shrink-0 overflow-hidden relative">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="112px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-4 flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-text-primary text-sm mb-1 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="text-xs text-text-muted">{post.date} · {post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
