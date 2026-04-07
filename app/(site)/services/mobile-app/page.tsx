import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import MobileAppServicePage from "@/components/pages/MobileAppServicePage";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Development | iOS & Android Apps",
  description: "iOS and Android mobile app development by Unitaspro. React Native and Flutter apps users love — from concept to App Store. Fixed pricing, TestFlight access throughout.",
  path: "/services/mobile-app",
});

export default function MobileAppPage() {
  return <MobileAppServicePage />;
}
