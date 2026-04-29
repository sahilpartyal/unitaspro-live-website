import { buildMetadata } from "@/lib/metadata";
import TransportIndustryPage from "@/components/pages/TransportIndustryPage";

export const metadata = buildMetadata({
  title: "Transport & Mobility Software",
  description:
    "Custom booking apps and fleet tracking for transport operators. Fixed price, 4-week delivery. Get a free quote.",
  path: "/industries/transport",
});

export default function TransportPage() {
  return <TransportIndustryPage />;
}
