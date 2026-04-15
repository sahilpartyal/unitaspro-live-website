import {
  Car, TrendingUp, Building2, ShoppingCart,
  Heart, Plane, Package, Rocket, type LucideIcon,
} from "lucide-react";

export interface Industry {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  shortDesc: string;
  desc: string;
  services: string[];
  accent: string;
  bg: string;
  heroHeading: string;
  heroSub: string;
  problems: { title: string; desc: string }[];
  cta: { heading: string; sub: string };
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "transport",
    icon: Car,
    name: "Transport & Mobility",
    tagline: "Fleet management, booking systems, and driver apps.",
    shortDesc: "Dispatch platforms, booking apps & route optimisation tools for transport operators.",
    desc: "We build dispatch platforms, passenger booking apps, route optimisation tools, and driver management systems for chauffeur companies, taxi fleets, and logistics operators.",
    services: ["Booking & Dispatch Apps", "Fleet Tracking Dashboards", "Driver Management Systems", "Customer Portals", "Route Optimisation Tools", "Passenger Notification Systems"],
    accent: "#2563EB",
    bg: "#EFF6FF",
    heroHeading: "Software That Keeps Your Fleet Moving.",
    heroSub: "Custom dispatch, booking, and tracking systems built for chauffeur companies, taxi fleets, and transport operators who need reliability over everything.",
    problems: [
      { title: "Manual dispatching causes delays", desc: "Operators still assign jobs by phone or spreadsheet. Missed bookings, driver conflicts, and unhappy passengers are the result." },
      { title: "No real-time fleet visibility", desc: "Without live tracking, you can't tell customers where their vehicle is or predict arrival times accurately." },
      { title: "Driver apps that drivers actually hate", desc: "Off-the-shelf apps built for gig economy don't fit corporate chauffeur or premium fleet workflows." },
      { title: "Disconnected systems", desc: "Booking software, invoicing, and driver management tools that don't talk to each other cost hours of admin every week." },
    ],
    cta: {
      heading: "Ready To Modernise Your Fleet Operations?",
      sub: "Tell us how your fleet works today. We'll design the system that fixes the gaps.",
    },
  },
  {
    slug: "finance",
    icon: TrendingUp,
    name: "Finance & Fintech",
    tagline: "Secure platforms built for compliance and scale.",
    shortDesc: "Investment dashboards, payment systems & KYC tools with enterprise-grade security.",
    desc: "From investment dashboards to payment gateways, we build financial software with enterprise-grade security, role-based access, audit trails, and regulatory compliance built in from day one.",
    services: ["Investment Dashboards", "Payment & Billing Systems", "KYC & Compliance Tools", "Reporting Platforms", "Loan Management Systems", "Client Onboarding Portals"],
    accent: "#059669",
    bg: "#ECFDF5",
    heroHeading: "Financial Software Built For Compliance And Scale.",
    heroSub: "Enterprise-grade security, audit trails, and role-based access control built into every layer. We build platforms that your compliance team will approve on the first review.",
    problems: [
      { title: "Compliance risk from day one", desc: "Generic software wasn't built for financial regulations. Every new feature becomes a compliance question your team has to answer manually." },
      { title: "No audit trail when it matters", desc: "When regulators ask who accessed what and when, off-the-shelf tools rarely give you the granular logs you need." },
      { title: "Scaling causes security gaps", desc: "What worked for 10 users breaks for 1,000. Access controls, data segregation, and encryption need to be designed in, not bolted on." },
      { title: "Reporting that takes days", desc: "Finance teams pulling data from multiple systems into Excel spreadsheets is a liability and an inefficiency you can eliminate." },
    ],
    cta: {
      heading: "Build Financial Software That Scales Safely.",
      sub: "From MVP to enterprise platform — we architect for compliance, security, and growth from the start.",
    },
  },
  {
    slug: "real-estate",
    icon: Building2,
    name: "Real Estate & Property",
    tagline: "Property portals, CRM, and listing platforms.",
    shortDesc: "Property portals, agent CRMs & listing platforms that help agencies close deals faster.",
    desc: "We build property search portals, agent CRMs, virtual tour integrations, and lead management systems that help agencies and developers close deals faster across UAE, UK, and beyond.",
    services: ["Property Listing Portals", "Agent CRM Systems", "Virtual Tour Integration", "Lead Management Tools", "Developer Project Microsites", "Tenant & Landlord Portals"],
    accent: "#D97706",
    bg: "#FFFBEB",
    heroHeading: "Property Software That Closes More Deals.",
    heroSub: "Custom portals, CRMs, and listing platforms built for agencies and developers operating in UAE, UK, India, and beyond. Built to handle high-volume leads and complex inventory.",
    problems: [
      { title: "Lead leakage through poor follow-up", desc: "Enquiries come through WhatsApp, portals, and websites, then get lost. A CRM built for real estate workflow fixes this." },
      { title: "Portals that can't handle your inventory", desc: "Off-the-shelf listing platforms aren't built for developers with 200+ units or agencies managing multiple projects simultaneously." },
      { title: "No visibility across your sales team", desc: "Managers can't see which agents are converting, which properties are underperforming, or where leads are stalling." },
      { title: "Slow websites lose buyers", desc: "A buyer searching at 11pm on mobile needs a fast, searchable portal — not a slow, desktop-first website with outdated listings." },
    ],
    cta: {
      heading: "Turn Your Property Listings Into A Lead Machine.",
      sub: "We build portals and CRMs that capture more leads, follow up automatically, and give agents everything they need to close.",
    },
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    tagline: "Online stores built to convert and scale.",
    shortDesc: "Custom online stores with real-time inventory, multi-currency checkout & custom CMS.",
    desc: "Full-stack e-commerce platforms with real-time inventory, multi-currency checkout, warehouse integration, and custom CMS. We build for brands that outgrow Shopify templates.",
    services: ["Custom Online Stores", "Inventory Management", "Multi-Currency Checkout", "Admin & CMS Dashboards", "Warehouse Integration", "Subscription & Loyalty Systems"],
    accent: "#7C3AED",
    bg: "#F5F3FF",
    heroHeading: "E-Commerce Built To Sell More, Not Just Look Good.",
    heroSub: "Custom storefronts, real-time inventory, and checkout flows optimised for conversion. For brands that have outgrown templates and need a platform that scales with them.",
    problems: [
      { title: "Shopify themes that don't fit your brand", desc: "Template stores look like everyone else's. Your brand deserves a storefront that reflects your product quality." },
      { title: "Checkout that loses customers", desc: "Every extra step in checkout costs conversions. A custom flow — guest checkout, saved carts, local payment methods — keeps buyers moving." },
      { title: "Inventory chaos across channels", desc: "Selling across your site, Amazon, and physical stores without a single source of truth means overselling, refunds, and lost customers." },
      { title: "No data on what's actually working", desc: "Without custom analytics, you're guessing which products, pages, and campaigns drive real revenue." },
    ],
    cta: {
      heading: "Ready To Build A Store That Actually Converts?",
      sub: "Custom storefront, checkout, CMS, and inventory management — all built to your exact business model.",
    },
  },
  {
    slug: "healthcare",
    icon: Heart,
    name: "Healthcare & Wellness",
    tagline: "Patient apps, clinic tools, and telemedicine.",
    shortDesc: "HIPAA-aware booking systems, patient portals & telemedicine apps for clinics and health startups.",
    desc: "We build HIPAA-aware appointment booking systems, patient health record portals, telemedicine apps, and wellness tracking platforms for clinics, hospitals, and health startups.",
    services: ["Appointment Booking Systems", "Patient Health Portals", "Telemedicine Apps", "Wellness Tracking Platforms", "Clinical Staff Dashboards", "Medication & Reminder Systems"],
    accent: "#E11D48",
    bg: "#FFF1F2",
    heroHeading: "Healthcare Software That Puts Patients First.",
    heroSub: "Appointment systems, patient portals, and telemedicine platforms built with privacy, compliance, and clinical workflow in mind — for clinics, hospitals, and health startups.",
    problems: [
      { title: "Appointment no-shows and scheduling chaos", desc: "Manual booking over the phone, paper calendars, and double-bookings eat staff time and frustrate patients." },
      { title: "Patient data scattered across systems", desc: "Clinicians making decisions without complete patient history is a clinical and compliance risk you can eliminate." },
      { title: "No digital front door", desc: "Patients expect to book, consult, and access results online. Clinics without digital tools are losing patients to competitors who have them." },
      { title: "Telemedicine bolted on, not built in", desc: "Video consultations added as an afterthought create friction for both patients and clinicians. A properly integrated system changes the experience." },
    ],
    cta: {
      heading: "Build Patient-Centred Digital Healthcare.",
      sub: "From appointment booking to full patient portals — we design healthcare software that clinicians want to use and patients trust.",
    },
  },
  {
    slug: "hospitality",
    icon: Plane,
    name: "Hospitality & Travel",
    tagline: "Booking engines, hotel tools, and travel apps.",
    shortDesc: "Reservation systems, hotel dashboards & loyalty apps for hotels and travel operators.",
    desc: "We build reservation systems, hotel management dashboards, travel booking platforms, and loyalty apps for hotels, tour operators, and travel agencies serving global markets.",
    services: ["Reservation & Booking Systems", "Hotel Management Dashboards", "Travel Booking Platforms", "Guest Loyalty Apps", "Channel Manager Integration", "Housekeeping & Staff Apps"],
    accent: "#0891B2",
    bg: "#ECFEFF",
    heroHeading: "Hospitality Software That Fills More Rooms.",
    heroSub: "Custom booking engines, PMS dashboards, and guest loyalty platforms built for hotels, resorts, and travel operators who want direct bookings over OTA commissions.",
    problems: [
      { title: "OTA commissions eating your margins", desc: "When 30% of bookings go through OTAs, your direct booking engine pays for itself in weeks. We build it properly." },
      { title: "Property management systems that slow staff down", desc: "Clunky legacy PMS tools that staff work around, rather than with, are a training and operational cost every season." },
      { title: "No guest loyalty programme", desc: "Repeat guests are your most profitable guests. Without a digital loyalty programme, you're starting from zero with every new booking." },
      { title: "Fragmented channel management", desc: "Managing availability across Booking.com, Expedia, and your own site manually leads to double-bookings and rate inconsistencies." },
    ],
    cta: {
      heading: "Drive More Direct Bookings. Build Guest Loyalty.",
      sub: "Custom booking engines, loyalty programmes, and hotel management tools built for hospitality businesses that want to own their guest relationships.",
    },
  },
  {
    slug: "logistics",
    icon: Package,
    name: "Logistics & Supply Chain",
    tagline: "Tracking systems, warehouse tools, and dashboards.",
    shortDesc: "Shipment tracking, warehouse management & dispatch tools that eliminate manual processes.",
    desc: "Real-time shipment tracking, warehouse management systems, driver dispatch tools, and automated reporting dashboards that eliminate manual processes and give full operational visibility.",
    services: ["Shipment Tracking Platforms", "Warehouse Management Systems", "Driver Dispatch Tools", "Automated Reporting Dashboards", "Supplier & Vendor Portals", "Last-Mile Delivery Apps"],
    accent: "#EA580C",
    bg: "#FFF7ED",
    heroHeading: "Full Supply Chain Visibility. Zero Manual Reporting.",
    heroSub: "Real-time tracking, warehouse management, and automated dashboards built for logistics operators who need to see everything happening across their network — instantly.",
    problems: [
      { title: "No real-time visibility on shipments", desc: "Customers calling to ask where their delivery is costs you support staff time and erodes trust. Live tracking fixes both." },
      { title: "Warehouse operations run on spreadsheets", desc: "Manual stock counts, paper pick lists, and email-based reordering is a compounding inefficiency at every scale." },
      { title: "Driver management over WhatsApp", desc: "Assigning jobs, tracking deliveries, and managing PODs through messaging apps is not scalable and not auditable." },
      { title: "Reporting that takes days to compile", desc: "Operations managers spending hours pulling data from multiple systems instead of acting on it is a problem you can solve in weeks." },
    ],
    cta: {
      heading: "Eliminate Manual Processes Across Your Supply Chain.",
      sub: "Custom tracking, warehouse management, and dispatch tools that give you full visibility and eliminate the manual work slowing you down.",
    },
  },
  {
    slug: "startups",
    icon: Rocket,
    name: "Startups & SaaS",
    tagline: "MVPs to full SaaS platforms, fast.",
    shortDesc: "Fixed-price MVPs, multi-tenant SaaS architecture & billing integration for founders.",
    desc: "We help founders go from idea to production-ready product. Fixed-price MVPs, multi-tenant SaaS architecture, billing integration, and the infrastructure to scale from 10 to 10,000 users.",
    services: ["MVP Development", "Multi-Tenant SaaS Platforms", "Billing & Subscription Systems", "Scalable Cloud Infrastructure", "User Auth & Onboarding", "Analytics & Admin Dashboards"],
    accent: "#4F46E5",
    bg: "#EEF2FF",
    heroHeading: "Go From Idea To Product. Fast.",
    heroSub: "Fixed-price MVPs, production-ready SaaS architecture, and billing integration for founders who need to validate quickly and scale confidently.",
    problems: [
      { title: "Agencies that overbuild and over-charge", desc: "Most agencies scope 6 months of work when your MVP needs 6 weeks. We scope for what actually needs to ship first." },
      { title: "Tech debt baked in from day one", desc: "Quick-and-dirty MVP code that becomes a rewrite by Series A. We build MVPs with the architecture that supports the scale you're aiming for." },
      { title: "Multi-tenancy added as an afterthought", desc: "Bolting multi-tenant data isolation onto a single-tenant app is painful and expensive. We architect it correctly from the start." },
      { title: "No billing integration", desc: "A SaaS without Stripe, billing tiers, trial management, and subscription logic isn't ready for customers. We build this as standard." },
    ],
    cta: {
      heading: "Build Your SaaS The Right Way The First Time.",
      sub: "Fixed-price MVP or full platform build — we scope it, spec it, and deliver it in a way that lets you scale without rewrites.",
    },
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
