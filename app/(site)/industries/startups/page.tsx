import { buildMetadata } from "@/lib/metadata";
import StartupsIndustryPage from "@/components/pages/StartupsIndustryPage";

export const metadata = buildMetadata({
  title: "Startup & SaaS Development Company | Unitaspro",
  description:
    "MVP builds and SaaS platforms for startups. Production-grade architecture, clean codebase, launched in 4 weeks. No technical debt, full source code ownership. Get a free quote.",
  path: "/industries/startups",
});

export default function StartupsPage() {
  return <StartupsIndustryPage />;
}
