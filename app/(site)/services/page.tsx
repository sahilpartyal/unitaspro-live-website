import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Web, Software & App Development Services",
  description:
    "Web design, custom software, mobile apps, and digital marketing — all under one roof. Get a free quote from Unitaspro today.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
