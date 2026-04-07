import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-06",
  useCdn: true,
};

export const client = createClient(sanityConfig);

// Image URL builder
const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

/* ── Types ── */

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featured: boolean;
  category: { name: string; slug: { current: string }; color: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  author: { name: string; image?: any; bio?: string };
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: { asset: any; alt?: string };
  readTime?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
}

/* ── Queries ── */

const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, featured, readTime, publishedAt,
    mainImage { asset->, alt },
    category->{ name, slug, color },
    author->{ name, image }
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, featured, readTime, publishedAt,
    body,
    mainImage { asset->, alt },
    category->{ name, slug, color },
    author->{ name, image, bio }
  }
`;

const previewPostsQuery = groq`
  *[_type == "post"] | order(featured desc, publishedAt desc) [0...4] {
    _id, title, slug, excerpt, featured, readTime, publishedAt,
    mainImage { asset->, alt },
    category->{ name, slug, color }
  }
`;

export interface SanityCategory {
  _id: string;
  name: string;
  slug: { current: string };
  color: string;
}

const categoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id, name, slug, color
  }
`;

/* ── Fetch functions ── */

export async function getAllCategories(): Promise<SanityCategory[]> {
  return client.fetch(categoriesQuery, {}, { next: { tags: ["posts"] } });
}

export async function getAllPosts(): Promise<SanityPost[]> {
  return client.fetch(postsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getPostBySlug(
  slug: string
): Promise<SanityPost | null> {
  return client.fetch(postBySlugQuery, { slug }, { next: { tags: ["posts"] } });
}

export async function getPreviewPosts(): Promise<SanityPost[]> {
  return client.fetch(previewPostsQuery, {}, { next: { tags: ["posts"] } });
}
