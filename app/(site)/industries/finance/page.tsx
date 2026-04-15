import type { Metadata } from "next";
import FinanceIndustryPage from "@/components/pages/FinanceIndustryPage";

export const metadata: Metadata = {
  title: "Finance & Fintech Software Development | Unitaspro",
  description:
    "Custom banking portals, lending platforms, and fintech dashboards for financial services companies. KYC, payments, loan origination and more. Built in 8 weeks.",
  alternates: { canonical: "https://unitaspro.com/industries/finance" },
};

export default function FinancePage() {
  return <FinanceIndustryPage />;
}
