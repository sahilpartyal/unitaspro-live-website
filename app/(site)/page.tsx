import type { Metadata } from "next";
import Hero            from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps    from "@/components/sections/ProcessSteps";
import Benefits        from "@/components/sections/Benefits";
import FeaturedWork    from "@/components/sections/FeaturedWork";
import IndustriesSection from "@/components/sections/IndustriesSection";
// import Testimonials    from "@/components/sections/Testimonials";
import BlogPreviewWrapper from "@/components/sections/BlogPreviewWrapper";
import FAQ             from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Unitaspro — Custom Software & App Development",
  description:
    "Custom software, mobile apps & web development for businesses worldwide. Fixed price, 4-12 week delivery. Get a free quote today.",
  alternates: { canonical: "https://unitaspro.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <Benefits />
      <FeaturedWork />
      <IndustriesSection />
      {/* <Testimonials /> */}
      <BlogPreviewWrapper />
      <FAQ />
    </>
  );
}
