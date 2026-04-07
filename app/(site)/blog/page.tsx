import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts, getAllCategories } from "@/lib/sanity";
import BlogListingClient from "@/components/pages/BlogListingClient";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Tips, Strategies & Case Studies",
  description:
    "Expert insights on web development, software engineering, mobile apps, and digital marketing from the Unitaspro team.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);
  return <BlogListingClient posts={posts} categories={categories} />;
}
