import type { Metadata } from "next";
import TransportIndustryPage from "@/components/pages/TransportIndustryPage";

export const metadata: Metadata = {
  title: "Transport & Mobility Software Development | Unitaspro",
  description:
    "Custom booking apps, fleet tracking dashboards, and driver management systems for chauffeur companies, taxi fleets, and transport operators. Built in 4 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/transport" },
};

export default function TransportPage() {
  return <TransportIndustryPage />;
}
