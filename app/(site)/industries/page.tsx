import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import IndustriesPageClient from "@/components/pages/IndustriesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Software for 8+ Industries",
  description:
    "Custom software and apps for Transport, Finance, Real Estate, E-Commerce, Healthcare, Hospitality, Logistics, and Startups. Get a free quote.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
