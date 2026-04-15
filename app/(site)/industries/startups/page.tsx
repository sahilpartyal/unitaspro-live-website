import type { Metadata } from "next";
import StartupsIndustryPage from "@/components/pages/StartupsIndustryPage";

export const metadata: Metadata = {
  title: "Startup & SaaS Software Development | Unitaspro",
  description:
    "Custom MVP builds, SaaS platforms, and growth-stage product development for startups and founders. Production-grade architecture, launched in 4 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/startups" },
};

export default function StartupsPage() {
  return <StartupsIndustryPage />;
}
