import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Free Software Consultation",
  description:
    "Reach out to Unitaspro for a free consultation. We respond within 24 hours. Let's discuss your web, software, or app project — get a free quote.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
