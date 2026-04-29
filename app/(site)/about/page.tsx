import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About Us — IT Services Agency India",
  description:
    "Unitaspro is an IT services agency in India building web, software, and mobile solutions for businesses worldwide. Get a free consultation today.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
