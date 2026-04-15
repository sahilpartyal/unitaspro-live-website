import type { Metadata } from "next";
import RealEstateIndustryPage from "@/components/pages/RealEstateIndustryPage";

export const metadata: Metadata = {
  title: "Real Estate Software Development | Unitaspro",
  description:
    "Custom property portals, agent CRM systems, and buyer platforms for real estate developers, agencies, and brokerages. Built in 8 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/real-estate" },
};

export default function RealEstatePage() {
  return <RealEstateIndustryPage />;
}
