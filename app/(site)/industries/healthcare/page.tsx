import type { Metadata } from "next";
import HealthcareIndustryPage from "@/components/pages/HealthcareIndustryPage";

export const metadata: Metadata = {
  title: "Healthcare Software Development | Unitaspro",
  description:
    "Custom patient portals, clinic management systems, and telemedicine platforms for hospitals, clinics, and healthtech companies. HIPAA-ready, built in 8 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/healthcare" },
};

export default function HealthcarePage() {
  return <HealthcareIndustryPage />;
}
