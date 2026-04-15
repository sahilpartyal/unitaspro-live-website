import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import IndustriesPageClient from "@/components/pages/IndustriesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Unitaspro builds software, apps, and digital products for Transport, Finance, Real Estate, E-Commerce, Healthcare, Hospitality, Logistics, and Startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
