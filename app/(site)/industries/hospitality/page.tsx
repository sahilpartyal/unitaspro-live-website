import type { Metadata } from "next";
import HospitalityIndustryPage from "@/components/pages/HospitalityIndustryPage";

export const metadata: Metadata = {
  title: "Hospitality Software Development | Unitaspro",
  description:
    "Custom hotel PMS, direct booking engines, and guest experience apps for hotels, resorts, and serviced apartments. Commission-free reservations, built in 8 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/hospitality" },
};

export default function HospitalityPage() {
  return <HospitalityIndustryPage />;
}
