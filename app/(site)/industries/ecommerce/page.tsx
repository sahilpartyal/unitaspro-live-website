import type { Metadata } from "next";
import EcommerceIndustryPage from "@/components/pages/EcommerceIndustryPage";

export const metadata: Metadata = {
  title: "E-Commerce Software Development | Unitaspro",
  description:
    "Custom storefronts, marketplace platforms, and order management systems for D2C brands, retailers, and marketplace operators. Built in 6 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/ecommerce" },
};

export default function EcommercePage() {
  return <EcommerceIndustryPage />;
}
