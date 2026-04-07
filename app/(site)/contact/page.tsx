import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Unitaspro. Free consultation, 24-hour response. Let's discuss your web design, software, mobile app, or marketing project.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
