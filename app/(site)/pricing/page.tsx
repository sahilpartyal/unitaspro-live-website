import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PricingPageClient from "@/components/pages/PricingPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Web, Software & App Development",
  description:
    "Transparent, fixed-price quotes for web design, software development, mobile apps, and digital marketing. No hidden costs. Free discovery call.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingPageClient />;
}
