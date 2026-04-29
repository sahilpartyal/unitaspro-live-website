import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts, getAllCategories } from "@/lib/sanity";
import BlogListingClient from "@/components/pages/BlogListingClient";

export const metadata: Metadata = buildMetadata({
  title: "Insights & Case Studies",
  description:
    "Expert insights on web development, software, mobile apps, and digital marketing. Tips, strategies, and case studies from the Unitaspro team.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);
  return <BlogListingClient posts={posts} categories={categories} />;
}
