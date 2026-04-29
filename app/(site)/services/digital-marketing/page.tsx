import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import DigitalMarketingServicePage from "@/components/pages/DigitalMarketingServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing, SEO & Paid Ads",
  description: "Data-driven digital marketing — SEO, Google Ads, Meta Ads, and content marketing tied to real revenue. Free audit, no long-term contracts.",
  path: "/services/digital-marketing",
});

export default function DigitalMarketingPage() {
  return <DigitalMarketingServicePage />;
}
