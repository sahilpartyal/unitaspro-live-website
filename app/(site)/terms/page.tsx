import { buildMetadata } from "@/lib/metadata";
import TermsPageClient from "@/components/pages/TermsPageClient";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for Unitaspro software development services. Fixed pricing, IP ownership, and project engagement terms.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsPageClient />;
}
