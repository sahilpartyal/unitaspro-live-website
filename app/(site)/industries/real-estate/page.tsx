import { buildMetadata } from "@/lib/metadata";
import RealEstateIndustryPage from "@/components/pages/RealEstateIndustryPage";

export const metadata = buildMetadata({
  title: "Real Estate Software Development",
  description:
    "Custom property portals and agent CRM systems for real estate agencies and developers. Fixed price, 8-week delivery. Get a free quote.",
  path: "/industries/real-estate",
});

export default function RealEstatePage() {
  return <RealEstateIndustryPage />;
}
