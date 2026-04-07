import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Our Work",
  description:
    "Browse Unitaspro's portfolio of websites, software, mobile apps, and marketing projects for clients worldwide.",
  path: "/portfolio",
});

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    client: "RetailNest, UAE",
    tags: ["Next.js", "Node.js", "Stripe"],
    result: "3× sales growth in 6 months",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile App",
    client: "MedTrack, Australia",
    tags: ["React Native", "Firebase"],
    result: "10,000+ downloads in Q1",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "Logistics SaaS Dashboard",
    category: "Software Development",
    client: "CoreSystems, UK",
    tags: ["React", "Python", "PostgreSQL"],
    result: "80% less manual reporting",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    client: "PropNest, UAE",
    tags: ["Next.js", "Sanity", "Maps API"],
    result: "2× lead generation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Restaurant Chain App",
    category: "Mobile App",
    client: "FoodLoop, India",
    tags: ["Flutter", "Firebase", "Stripe"],
    result: "30% increase in orders",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    title: "SEO & Paid Ads Campaign",
    category: "Digital Marketing",
    client: "LaunchPath, Australia",
    tags: ["Google Ads", "SEO", "Analytics"],
    result: "4× ROI on ad spend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "FinTech Dashboard",
    category: "Software Development",
    client: "NexaFlow, Canada",
    tags: ["React", "Node.js", "AWS"],
    result: "Used by 500+ users daily",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
  },
  {
    title: "EdTech Platform",
    category: "Web Development",
    client: "TechBridge, India",
    tags: ["Next.js", "Stripe", "Video API"],
    result: "1,200+ enrolled students",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    title: "Social Media Growth",
    category: "Digital Marketing",
    client: "StyleHive, UAE",
    tags: ["Instagram", "LinkedIn", "Content"],
    result: "5× follower growth in 3 months",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
];

const categoryDot: Record<string, string> = {
  "Web Development":      "bg-blue-500",
  "Mobile App":           "bg-purple-500",
  "Software Development": "bg-emerald-500",
  "Digital Marketing":    "bg-amber-500",
};

export default function PortfolioPage() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="bg-white pt-28 lg:pt-36">
        <div className="h-[2px] bg-blue-600"/>
        <div className="container-main">
          <div className="pt-12 pb-14">
            <p className="text-blue-600 text-[11px] font-semibold uppercase tracking-[0.25em] mb-6">
              Our Portfolio
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <h1 className="font-black text-[#0A0A0A] leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
                Work we&apos;re proud to show
              </h1>
              <p className="text-[#525252] text-[1.0625rem] leading-relaxed lg:pb-2">
                A selection of projects across web, mobile, software, and marketing —
                each with measurable, real-world results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="bg-[#FAFAFA] border-y border-gray-100 sticky top-0 z-10">
        <div className="container-main py-3 flex items-center gap-6 overflow-x-auto">
          {["All", "Web Development", "Mobile App", "Software Development", "Digital Marketing"].map(c => (
            <button key={c}
              className={`text-xs font-semibold whitespace-nowrap transition-colors pb-0.5 ${
                c === "All"
                  ? "text-[#0A0A0A] border-b-2 border-[#0A0A0A]"
                  : "text-[#9CA3AF] hover:text-[#525252]"
              }`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(p => (
              <div key={p.title}
                className="group border border-gray-100 rounded-2xl overflow-hidden
                           hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col">

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${categoryDot[p.category]}`}/>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">
                      {p.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-black text-[#0A0A0A] text-base leading-snug mb-0.5
                                   group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs">{p.client}</p>
                  </div>

                  <div className="flex items-center gap-2 border border-gray-100 rounded-lg px-3 py-2 self-start bg-[#FAFAFA]">
                    <span className="w-1 h-1 rounded-full bg-green-500 shrink-0"/>
                    <span className="text-[#374151] text-xs font-semibold">{p.result}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {p.tags.map(t => (
                      <span key={t}
                        className="text-xs text-[#525252] bg-[#FAFAFA] border border-gray-200 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
