import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import WebDesignServicePage from "@/components/pages/WebDesignServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Web Design & Development Services",
  description: "Mobile-first web design & development on Next.js and React. SEO-friendly, 99+ Lighthouse scores, and built to convert. Get a free UX audit.",
  path: "/services/web-design",
});

export default function WebDesignPage() {
  return <WebDesignServicePage />;
}
