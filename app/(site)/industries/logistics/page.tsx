import type { Metadata } from "next";
import LogisticsIndustryPage from "@/components/pages/LogisticsIndustryPage";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Software Development | Unitaspro",
  description:
    "Custom fleet tracking, warehouse management, and last-mile delivery platforms for logistics companies, 3PLs, and courier operators. Built in 8 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/logistics" },
};

export default function LogisticsPage() {
  return <LogisticsIndustryPage />;
}
