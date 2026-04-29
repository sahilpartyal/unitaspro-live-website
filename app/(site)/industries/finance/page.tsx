import { buildMetadata } from "@/lib/metadata";
import FinanceIndustryPage from "@/components/pages/FinanceIndustryPage";

export const metadata = buildMetadata({
  title: "Finance & Fintech Software Development | Unitaspro",
  description:
    "Secure banking portals, lending platforms, and KYC dashboards for financial services. Fixed price, 8-week delivery. Get a free quote.",
  path: "/industries/finance",
});

export default function FinancePage() {
  return <FinanceIndustryPage />;
}
