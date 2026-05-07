import { buildMetadata } from "@/lib/metadata";
import StartupsIndustryPage from "@/components/pages/StartupsIndustryPage";

export const metadata = buildMetadata({
  title: "Startup & SaaS Development Company",
  description:
    "MVP builds and SaaS platforms for startups. Production-grade architecture, launched in 4 weeks. Full source code ownership. Get a free quote.",
  path: "/industries/startups",
});

export default function StartupsPage() {
  return <StartupsIndustryPage />;
}
