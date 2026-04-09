import type { Metadata } from "next";
import Hero            from "@/components/sections/Hero";
import Stats           from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps    from "@/components/sections/ProcessSteps";
import Benefits        from "@/components/sections/Benefits";
import FeaturedWork    from "@/components/sections/FeaturedWork";
import Testimonials    from "@/components/sections/Testimonials";
import BlogPreviewWrapper from "@/components/sections/BlogPreviewWrapper";
import FAQ             from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Unitaspro — IT Services Company | Web Design, Software Development, Mobile Apps",
  description:
    "Unitaspro is a results-driven IT services company in Mohali, India. We build websites, custom software, mobile apps, and run digital marketing for businesses in UAE, Australia, UK & USA.",
  alternates: { canonical: "https://unitaspro.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <ProcessSteps />
      <Benefits />
      <FeaturedWork />
      <Testimonials />
      <BlogPreviewWrapper />
      <FAQ />
    </>
  );
}
