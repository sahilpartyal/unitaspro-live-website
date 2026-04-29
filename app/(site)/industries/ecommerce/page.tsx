import { buildMetadata } from "@/lib/metadata";
import EcommerceIndustryPage from "@/components/pages/EcommerceIndustryPage";

export const metadata = buildMetadata({
  title: "E-Commerce Software Solutions",
  description:
    "Custom storefronts and marketplace platforms for D2C brands and retailers. Fixed price, 6-week delivery. Get a free quote.",
  path: "/industries/ecommerce",
});

export default function EcommercePage() {
  return <EcommerceIndustryPage />;
}
