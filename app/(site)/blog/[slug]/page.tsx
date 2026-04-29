import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, urlFor, type SanityPost } from "@/lib/sanity";
import { siteConfig } from "@/lib/metadata";
import BlogPostClient from "@/components/pages/BlogPostClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug.current }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  // Fetch related posts (same category, exclude current)
  const allPosts = await getAllPosts();
  const relatedPosts: SanityPost[] = allPosts
    .filter(
      (p) =>
        p._id !== post._id &&
        p.category?.slug?.current === post.category?.slug?.current
    )
    .slice(0, 3);

  // If not enough same-category posts, fill with latest
  if (relatedPosts.length < 3) {
    const remaining = allPosts
      .filter(
        (p) =>
          p._id !== post._id &&
          !relatedPosts.find((rp) => rp._id === p._id)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...remaining);
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).url()
      : undefined,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
