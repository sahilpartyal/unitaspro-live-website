import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Unitaspro — a passionate IT team in Mohali, India, building world-class digital products for businesses across the globe.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
