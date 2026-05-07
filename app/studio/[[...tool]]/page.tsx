import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import config from "@/sanity.config";

const NextStudio = nextDynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false, loading: () => null }
);

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
