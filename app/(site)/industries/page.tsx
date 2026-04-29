import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import IndustriesPageClient from "@/components/pages/IndustriesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Industry-Specific Software Solutions for 8+ Sectors",
  description:
    "Custom software and apps for Transport, Finance, Real Estate, E-Commerce, Healthcare, Hospitality, Logistics, and Startups. Get a free quote.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
