import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SoftwareDevServicePage from "@/components/pages/SoftwareDevServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Custom Software Development | SaaS, APIs & Enterprise Tools",
  description: "Custom software development by Unitaspro. SaaS platforms, enterprise tools, APIs, and automation built to your exact specifications. Fixed pricing, weekly demos.",
  path: "/services/software-development",
});

export default function SoftwareDevPage() {
  return <SoftwareDevServicePage />;
}
