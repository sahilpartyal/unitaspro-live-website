import { buildMetadata } from "@/lib/metadata";
import LogisticsIndustryPage from "@/components/pages/LogisticsIndustryPage";

export const metadata = buildMetadata({
  title: "Logistics & Supply Chain Software",
  description:
    "Fleet tracking, warehouse management, and last-mile delivery platforms for logistics companies and 3PLs. Get a free quote.",
  path: "/industries/logistics",
});

export default function LogisticsPage() {
  return <LogisticsIndustryPage />;
}
