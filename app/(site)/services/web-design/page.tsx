import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import WebDesignServicePage from "@/components/pages/WebDesignServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Web Design & Development | Modern UI/UX, High-Performance Sites",
  description: "High-performance web design & development built on Next.js and React. Mobile-first design, SEO-friendly architecture, conversion rate optimisation, and 99+ Lighthouse scores. Get your free UX audit today.",
  path: "/services/web-design",
});

export default function WebDesignPage() {
  return <WebDesignServicePage />;
}
