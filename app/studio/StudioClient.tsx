"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false, loading: () => null }
);

export default function StudioClient() {
  return <NextStudio config={config} />;
}
