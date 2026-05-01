import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/lib/industries-data";
import IndustryDetailPageClient from "@/components/pages/IndustryDetailPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Software Development | Unitaspro`,
    description: ind.shortDesc,
    alternates: { canonical: `https://unitaspro.com/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  // Pass slug only — client component looks up its own data to avoid
  // serializing LucideIcon (function) across the server/client boundary
  return <IndustryDetailPageClient slug={slug} />;
}
