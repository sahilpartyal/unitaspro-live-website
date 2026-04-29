import { buildMetadata } from "@/lib/metadata";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Unitaspro collects, uses, and protects your personal data. GDPR and CCPA compliant.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPageClient />;
}
