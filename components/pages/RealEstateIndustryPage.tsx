"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Home, MapPin, Users,
  Search, Calendar, FileText, BarChart3, Bell, Shield, CreditCard, Building2, Layers,
  PhoneCall, Rocket, TrendingUp,
  Smartphone, Globe, Code2, BookOpen, HeadphonesIcon, LandPlot, KeyRound,
  Eye, Heart,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Property portals, CRM systems & agent apps",
  heroHeadingLight: "Software that sells",
  heroHeadingBold: "more properties, faster.",
  heroHighlights: [
    { icon: Home,     title: "Property Portals",    desc: "Search, filter, and enquire on any device"          },
    { icon: MapPin,   title: "Location Intelligence",desc: "Map-based search with geo-filters and nearby data"  },
    { icon: Users,    title: "Agent & Broker CRM",  desc: "Full pipeline management from lead to close"         },
  ],

  /* Problem & Solution */
  problemSectionLight: "Leads fall through cracks when",
  problemSectionBold:  "your tools don't talk.",
  problemSubtitle:     "Four problems we fix for every property business we work with.",
  problems: [
    {
      problem:  "Leads from portals, WhatsApp, and referrals all managed in separate places",
      solution: "Unified CRM aggregates every lead source into one pipeline. Every enquiry is assigned, tracked, and followed up automatically.",
    },
    {
      problem:  "Agents waste hours updating listings manually across platforms",
      solution: "Centralised listing management with one-click syndication to all portals. Update once, publish everywhere instantly.",
    },
    {
      problem:  "Buyers have no visibility into project status or unit availability",
      solution: "Customer portal with live unit inventory, floor plan viewer, booking status, and payment schedule — all self-serve.",
    },
    {
      problem:  "No data on which sources, agents, or projects are actually converting",
      solution: "Analytics dashboard tracks lead-to-sale conversion by source, agent performance, and project velocity in real time.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Leads lost in spreadsheets, no online presence, and manual follow-ups.",
      points: [
        "Property listings scattered across portals",
        "Leads tracked in spreadsheets or notebooks",
        "No way for buyers to browse and filter online",
        "Rent collection and maintenance requests via phone",
      ],
    },
    with: {
      subtitle: "One platform for listings, leads, transactions, and tenant management.",
      points: [
        "Branded property portal with advanced search",
        "CRM with automated lead scoring and follow-ups",
        "Virtual tours and online booking for site visits",
        "Tenant portal with rent payments and maintenance",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything a modern property business needs.",
  features: [
    { icon: Search,    title: "Advanced Property Search",  desc: "Filters by price, type, location, amenities, and more."       },
    { icon: MapPin,    title: "Interactive Map View",      desc: "Geo-search with nearby schools, transit, and landmarks."      },
    { icon: Calendar,  title: "Appointment Booking",       desc: "Site visits booked online, confirmed with agent and buyer."   },
    { icon: BarChart3, title: "Sales Analytics",           desc: "Pipeline, conversion rates, and agent leaderboards."          },
    { icon: Bell,      title: "Lead Notifications",        desc: "Instant alerts to agents when new enquiries arrive."          },
    { icon: FileText,  title: "Document Management",       desc: "Agreements, NOCs, and title docs — stored and signed online." },
    { icon: CreditCard,title: "Payment Tracking",          desc: "Installment schedules, receipts, and payment reminders."     },
    { icon: Shield,    title: "Role-Based Access",         desc: "Separate views for buyers, agents, managers, and admins."    },
  ],

  /* Panels */
  panelHeading: "Three tools. One property ecosystem.",
  panels: [
    {
      label: "Buyer Portal",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
      features: [
        { icon: Search,     title: "Smart Search",       desc: "Search and shortlist properties in minutes with advanced filters by price, type, and location." },
        { icon: Eye,        title: "Virtual Tours",      desc: "Explore properties remotely with 360° virtual tours and interactive floor plan viewers." },
        { icon: Calendar,   title: "Visit Booking",      desc: "Book site visits online with real-time agent availability and instant confirmation." },
        { icon: BarChart3,  title: "Live Tracking",      desc: "Track your application status, booking progress, and approval stages in real time." },
        { icon: CreditCard, title: "Payment Hub",        desc: "View payment schedules, download receipts, and manage installment milestones from one place." },
        { icon: Heart,      title: "Saved Favorites",    desc: "Save and compare shortlisted properties side by side to make confident buying decisions." },
      ],
    },
    {
      label: "Agent App",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
      features: [
        { icon: Users,      title: "Lead Pipeline",      desc: "Manage every lead from first enquiry to closed deal in a visual sales pipeline." },
        { icon: PhoneCall,  title: "Click-to-Call",      desc: "Reach prospects instantly with one-tap calling and WhatsApp integration built in." },
        { icon: Home,       title: "Property Showcase",  desc: "Present listings with rich media galleries, floor plans, and neighbourhood highlights." },
        { icon: TrendingUp, title: "Commission Tracker", desc: "Track earned commissions, pending payouts, and full payout history at a glance." },
        { icon: Bell,       title: "Smart Reminders",    desc: "Get daily task reminders and automated follow-up alerts so no lead goes cold." },
        { icon: MapPin,     title: "Geo Check-ins",      desc: "Log site visit locations and client meeting check-ins for transparent field activity." },
      ],
    },
    {
      label: "Admin Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: Layers,     title: "Unit Inventory",     desc: "View the complete unit inventory with a real-time availability matrix across projects." },
        { icon: Globe,      title: "Multi-Platform Sync",desc: "Manage and syndicate listings across all portals from a single dashboard." },
        { icon: BarChart3,  title: "Team Analytics",     desc: "Monitor team performance, revenue trends, and agent leaderboards with live dashboards." },
        { icon: FileText,   title: "Bulk Import",        desc: "Import leads in bulk from any source and auto-assign them to agents by region or project." },
        { icon: Shield,     title: "Compliance Trail",   desc: "Maintain a complete audit trail for documents, approvals, and regulatory compliance." },
        { icon: Building2,  title: "Project Overview",   desc: "Get a centralised view of all projects, units, and sales progress in one place." },
      ],
    },
  ],

  /* Tech stack */
  techLogos: [
    { name: "React",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "PostgreSQL",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Redis",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "AWS",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Docker",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "MongoDB",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Flutter",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Figma",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "GitHub",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Next.js",    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  ],

  /* Use cases */
  useCases: {
    heading: "Built for every type of property business.",
    subtitle: "Whether you manage 5 listings or 5,000 — the platform adapts to your portfolio and sales model.",
    items: [
      {
        icon: Home,
        title: "Residential Sales & Rentals",
        desc: "Property listings, virtual tours, lead capture, and CRM for brokers and developers.",
        points: ["IDX-style listings", "Virtual tour integration", "Lead scoring & CRM"],
      },
      {
        icon: Building2,
        title: "Commercial Real Estate",
        desc: "Office, retail, and industrial property management with tenant tracking and lease workflows.",
        points: ["Lease lifecycle management", "Tenant portal", "Maintenance requests"],
      },
      {
        icon: LandPlot,
        title: "Property Development",
        desc: "Project tracking, unit inventory, booking management, and buyer communication for developers.",
        points: ["Unit-level inventory", "Payment plan tracking", "Buyer document portal"],
      },
      {
        icon: KeyRound,
        title: "Property Management",
        desc: "Rent collection, maintenance, tenant communication, and owner reporting for managed portfolios.",
        points: ["Auto rent reminders", "Maintenance ticketing", "Owner payout reports"],
      },
    ],
  },

  /* Deliverables */
  deliverables: {
    heading: "Everything you own at the end of the build.",
    items: [
      { icon: Smartphone,     title: "iOS App (App Store)",        desc: "Fully submitted and live on Apple App Store under your developer account." },
      { icon: Globe,          title: "Android App (Google Play)",  desc: "Published on Google Play Store — reviewed, listed, and ready for download." },
      { icon: BarChart3,      title: "Web Admin Dashboard",        desc: "Browser-based operations hub for agents, property managers, and finance teams." },
      { icon: Code2,          title: "Full Source Code",           desc: "Complete codebase in a private GitHub repo — yours to own, fork, and extend." },
      { icon: BookOpen,       title: "Technical Documentation",    desc: "API docs, deployment guide, and environment setup — handed over at launch." },
      { icon: HeadphonesIcon, title: "30-Day Post-Launch Support", desc: "Dedicated support for bugs, tweaks, and go-live issues after delivery." },
    ],
  },

  /* Comparison */
  comparison: {
    heading: "Why build custom instead of using MagicBricks or 99acres?",
    cols: ["Custom Build", "Portal Listing", "Generic CRM"],
    rows: [
      { feature: "Branded entirely as your company",         custom: true,       alt1: false,       alt2: false      },
      { feature: "You own the source code",                  custom: true,       alt1: false,       alt2: false      },
      { feature: "Zero per-lead or listing fees",            custom: true,       alt1: false,       alt2: true       },
      { feature: "Custom property search & filters",         custom: true,       alt1: "Limited",   alt2: false      },
      { feature: "Integrated CRM & lead management",        custom: true,       alt1: false,       alt2: true       },
      { feature: "Your own property & buyer data",           custom: true,       alt1: false,       alt2: true       },
      { feature: "Integrates with your existing tools",      custom: true,       alt1: false,       alt2: "Limited"  },
      { feature: "No recurring licence fees",                custom: true,       alt1: false,       alt2: false      },
    ],
  },

  /* Process */
  processHeading: "From discovery call to live platform — in four steps.",
  process: [
    { num: "01", icon: PhoneCall,  title: "Discovery Call",   desc: "We map your property types, lead sources, and agent workflow in a 30-minute call. We learn how your business works before writing code." },
    { num: "02", icon: FileText,   title: "Proposal & Scope", desc: "Fixed price, fixed timeline, full spec within 48 hours. You know exactly what gets built and what it costs — before we start." },
    { num: "03", icon: Layers,     title: "Design & Build",   desc: "Weekly demos on a shared staging environment. Real working software each sprint — no surprises at launch." },
    { num: "04", icon: Rocket,     title: "Launch & Support", desc: "Full deployment with handover documentation. 30 days dedicated support for a smooth go-live." },
  ],

  /* FAQ */
  faqHeading: "Questions about your property platform",
  faqSubtitle: "For developers, agencies, and brokerages evaluating a custom real estate build.",
  faqs: [
    {
      q: "How long does a property portal or CRM take to build?",
      a: "A full buyer portal + agent app + admin system typically takes 8–12 weeks. A focused CRM or listing management tool can ship in 4–6 weeks. We scope before we quote so you know exactly what you're committing to.",
    },
    {
      q: "Can you integrate with property portals like MagicBricks, 99acres, or Rightmove?",
      a: "Yes. We build API integrations with all major portals for listing syndication. Where direct APIs aren't available, we build feed-based automation to keep your listings in sync.",
    },
    {
      q: "Can the platform support multiple projects or cities?",
      a: "Absolutely. The platform is multi-project and multi-location from day one. Inventory, pricing, and team access are all managed per project with a unified admin overview.",
    },
    {
      q: "Do you support virtual tours and rich media?",
      a: "Yes. We integrate 360° virtual tour providers, YouTube/Vimeo embeds, and image galleries. Floor plan viewers with unit selection are built in for residential projects.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and releases.",
    },
  ],

  /* CTA */
  ctaIcon:    Building2,
  ctaLabel:   "Real Estate & Property",
  ctaHeading: "Ready to modernise your property business?",
  ctaSub:     "Tell us how your current sales process works. We'll design the platform that closes more deals — fixed price, fixed timeline.",
};

export default function RealEstateIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
