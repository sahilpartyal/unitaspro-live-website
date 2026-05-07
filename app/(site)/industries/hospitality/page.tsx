import { buildMetadata } from "@/lib/metadata";
import HospitalityIndustryPage from "@/components/pages/HospitalityIndustryPage";

export const metadata = buildMetadata({
  title: "Hotel & Hospitality Software Development",
  description:
    "Custom hotel PMS, commission-free direct booking engines, and guest apps for hotels and resorts. Replace OTA fees with your own platform. Get a free quote.",
  path: "/industries/hospitality",
});

export default function HospitalityPage() {
  return <HospitalityIndustryPage />;
}
