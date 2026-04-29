import { buildMetadata } from "@/lib/metadata";
import HealthcareIndustryPage from "@/components/pages/HealthcareIndustryPage";

export const metadata = buildMetadata({
  title: "Healthcare Software Solutions",
  description:
    "HIPAA-ready patient portals, telemedicine platforms, and clinic management systems for healthcare providers. Get a free quote.",
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return <HealthcareIndustryPage />;
}
