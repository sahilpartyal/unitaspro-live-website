import { buildMetadata } from "@/lib/metadata";
import HospitalityIndustryPage from "@/components/pages/HospitalityIndustryPage";

export const metadata = buildMetadata({
  title: "Hospitality Software Solutions",
  description:
    "Custom hotel PMS, direct booking engines, and guest apps for hotels and resorts. Commission-free. Get a free quote.",
  path: "/industries/hospitality",
});

export default function HospitalityPage() {
  return <HospitalityIndustryPage />;
}
