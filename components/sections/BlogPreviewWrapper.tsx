import { getPreviewPosts, urlFor } from "@/lib/sanity";
import BlogPreview from "./BlogPreview";

export default async function BlogPreviewWrapper() {
  let posts;

  try {
    const sanityPosts = await getPreviewPosts();
    posts = sanityPosts.map((p) => ({
      slug: p.slug.current,
      featured: p.featured ?? false,
      category: p.category?.name ?? "General",
      categoryColor: p.category?.color ?? "bg-blue-100 text-blue-700",
      date: new Date(p.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: p.readTime || "5 min read",
      title: p.title,
      excerpt: p.excerpt,
      image: p.mainImage ? urlFor(p.mainImage).width(800).height(500).url() : "",
    }));
  } catch {
    // If Sanity is not configured or has no posts, use fallback data
    posts = [
      {
        slug: "#",
        featured: true,
        category: "Web Development",
        categoryColor: "bg-blue-100 text-blue-700",
        date: "Mar 20, 2026",
        readTime: "6 min read",
        title: "10 Things Every Business Website Must Have in 2026",
        excerpt: "Most business websites are losing leads without even knowing it. Here are the 10 non-negotiable elements every professional site needs.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      },
      {
        slug: "#",
        featured: false,
        category: "Mobile Apps",
        categoryColor: "bg-violet-100 text-violet-700",
        date: "Mar 15, 2026",
        readTime: "4 min read",
        title: "React Native vs Flutter: Which Should You Choose?",
        excerpt: "We've built apps in both. Here's our honest comparison based on real project experience.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      },
      {
        slug: "#",
        featured: false,
        category: "Digital Marketing",
        categoryColor: "bg-amber-100 text-amber-700",
        date: "Mar 10, 2026",
        readTime: "5 min read",
        title: "How We Generated 3x More Leads for an E-Commerce Client",
        excerpt: "A breakdown of the exact SEO and paid ads strategy that tripled organic traffic in 90 days.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      },
      {
        slug: "#",
        featured: false,
        category: "Software Dev",
        categoryColor: "bg-emerald-100 text-emerald-700",
        date: "Mar 5, 2026",
        readTime: "7 min read",
        title: "Why Your SaaS Needs a Custom Admin Dashboard",
        excerpt: "Off-the-shelf tools create bottlenecks. Here's when custom software pays for itself.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
      },
    ];
  }

  return <BlogPreview posts={posts} />;
}
