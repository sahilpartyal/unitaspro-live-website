import type { Metadata } from "next";
import { headers } from "next/headers";
import { buildMetadata } from "@/lib/metadata";
import PricingPageClient from "@/components/pages/PricingPageClient";
import { isLocale, DEFAULT_LOCALE } from "@/lib/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Web, Software & App Development",
  description:
    "Transparent, fixed-price quotes for web design, software development, mobile apps, and digital marketing. No hidden costs. Free discovery call.",
  path: "/pricing",
});

export default async function PricingPage() {
  // Set by middleware from the /{locale}/ prefix. Reading it opts this route
  // into dynamic rendering, which is the trade for per-market pricing: the
  // HTML differs by currency, so it cannot be one shared static document.
  const locale = (await headers()).get("x-locale");
  return <PricingPageClient locale={isLocale(locale) ? locale : DEFAULT_LOCALE} />;
}
