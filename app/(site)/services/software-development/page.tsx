import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SoftwareDevServicePage from "@/components/pages/SoftwareDevServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Custom Software Development Services",
  description: "Custom SaaS platforms, APIs, and enterprise tools built to your specs. Fixed pricing, weekly demos. Get a free consultation.",
  path: "/services/software-development",
});

export default function SoftwareDevPage() {
  return <SoftwareDevServicePage />;
}
