import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import MobileAppServicePage from "@/components/pages/MobileAppServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Development | iOS & Android Apps",
  description: "iOS and Android apps by Unitaspro. React Native & Flutter — from concept to App Store. Fixed pricing, weekly TestFlight builds. Get a free quote.",
  path: "/services/mobile-app",
});

export default function MobileAppPage() {
  return <MobileAppServicePage />;
}
