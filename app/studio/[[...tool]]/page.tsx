import type { Metadata } from "next";
import StudioClient from "../StudioClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioClient />;
}
