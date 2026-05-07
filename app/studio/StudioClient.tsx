"use client";

import dynamic from "next/dynamic";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false, loading: () => null }
);

export default function StudioClient({ config }: { config: any }) {
  return <NextStudio config={config} />;
}
