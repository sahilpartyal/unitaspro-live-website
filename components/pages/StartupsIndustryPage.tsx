"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Rocket, Zap, BarChart3,
  Code2, Users, Shield, CreditCard, Bell, RefreshCcw, Globe, Layers, TrendingUp,
  PhoneCall, FileText, Smartphone, BookOpen, HeadphonesIcon, Lightbulb, Target, Repeat,
  UserPlus, Lock, MousePointerClick,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "MVPs, SaaS platforms & growth-stage product builds",
  heroHeadingLight: "Software that takes your",
  heroHeadingBold: "startup from idea to scale.",
  heroHighlights: [
    { icon: Rocket,   title: "MVP in 4 Weeks",      desc: "Validated product in market before your next funding round" },
    { icon: Zap,      title: "SaaS Architecture",   desc: "Multi-tenant, subscription-ready from day one"              },
    { icon: BarChart3,title: "Growth Engineering",  desc: "Analytics, retention, and monetisation built in"           },
  ],

  /* Problem & Solution */
  problemSectionLight: "Slow builds and agency delays",
  problemSectionBold:  "kill momentum at the worst time.",
  problemSubtitle:     "Four problems we solve for every startup and SaaS company we work with.",
  problems: [
    {
      problem:  "Building an MVP takes months and budget you can't afford to waste",
      solution: "We scope, design, and ship a working MVP in 4 weeks. No bloated feature lists, no scope creep — just the core product your first users need to validate the idea.",
    },
    {
      problem:  "Technical debt from rushed early builds makes scaling painful and expensive",
      solution: "We build with production-grade architecture from day one — clean codebase, proper auth, scalable APIs, and CI/CD pipelines that won't need a rewrite in 12 months.",
    },
    {
      problem:  "No visibility into which features users actually use or where they drop off",
      solution: "Product analytics built into every build — event tracking, funnel analysis, and retention dashboards so you make decisions on data, not guesswork.",
    },
    {
      problem:  "Adding new features requires full developer involvement every time",
      solution: "Admin panels and configuration layers let non-technical founders manage plans, pricing, content, and feature flags — no developer required for routine updates.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "No-code prototypes, freelancer roulette, and code you can't scale.",
      points: [
        "Bubble or Webflow prototype that breaks at 1,000 users",
        "Freelancer disappeared mid-project",
        "Codebase nobody else can maintain",
        "No documentation, no tests, no deployment pipeline",
      ],
    },
    with: {
      subtitle: "A dedicated team shipping production-grade code you own forever.",
      points: [
        "Scalable architecture built for 100k+ users",
        "Weekly demos with a dedicated team",
        "Clean codebase with full documentation",
        "CI/CD pipeline and post-launch support included",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything a growing SaaS product needs.",
  features: [
    { icon: Users,      title: "Multi-Tenant Auth",    desc: "Organisation-based access with roles, SSO, and invites."    },
    { icon: CreditCard, title: "Subscription Billing", desc: "Plans, trials, upgrades, and invoices via Stripe or Razorpay." },
    { icon: BarChart3,  title: "Product Analytics",    desc: "Event tracking, funnels, cohorts, and retention reports."   },
    { icon: Globe,      title: "API & Webhooks",        desc: "Public API and webhook system for integrations and partners."},
    { icon: Bell,       title: "Notifications",         desc: "In-app, email, and push notifications at every key action." },
    { icon: Shield,     title: "Security & Compliance", desc: "SOC2-ready logging, encryption, and GDPR data handling."    },
    { icon: RefreshCcw, title: "CI/CD Pipeline",        desc: "Automated testing and deployment on every commit."          },
    { icon: Layers,     title: "Admin & Config Panel",  desc: "Feature flags, plan management, and user controls — no code."},
  ],

  /* Panels */
  panelHeading: "Three layers. One scalable SaaS.",
  panels: [
    {
      label: "End-User Product",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
      features: [
        { icon: UserPlus,   title: "Smooth Onboarding",     desc: "Clean signup-to-first-value flow that activates users in minutes, not hours." },
        { icon: Code2,      title: "Core Product Build",    desc: "Purpose-built features tailored to your specific use case and target audience." },
        { icon: BookOpen,   title: "In-App Guidance",       desc: "Contextual tooltips, walkthroughs, and polished empty states that reduce support tickets." },
        { icon: Bell,       title: "Notification Centre",   desc: "In-app notification feed and activity stream keeping users engaged and informed." },
        { icon: Smartphone, title: "Mobile-Ready",          desc: "Fully responsive web app or native mobile build for iOS and Android from day one." },
        { icon: Zap,        title: "Blazing Performance",   desc: "Optimised load times and snappy interactions so users never wait on your product." },
      ],
    },
    {
      label: "SaaS Admin Panel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: Users,         title: "User Management",      desc: "Manage users, organisations, and subscription plans from a single admin view." },
        { icon: Layers,        title: "Feature Flags",        desc: "Toggle features on or off per account, tier, or cohort — no code deploys needed." },
        { icon: CreditCard,    title: "Billing Controls",     desc: "Handle subscription upgrades, downgrades, invoices, and payment methods in one place." },
        { icon: HeadphonesIcon,title: "Support Tools",        desc: "Built-in support ticket queue and user impersonation for fast issue resolution." },
        { icon: Shield,        title: "System Health",        desc: "Real-time error logs, uptime monitoring, and system health dashboards at a glance." },
        { icon: Lock,          title: "Role-Based Access",    desc: "Granular permission controls so each team member sees only what they need." },
      ],
    },
    {
      label: "Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
      features: [
        { icon: TrendingUp,       title: "Active Users",        desc: "Track daily, weekly, and monthly active users to measure real product engagement." },
        { icon: Target,           title: "Adoption Funnels",    desc: "Visualise activation and feature adoption funnels to find exactly where users drop off." },
        { icon: RefreshCcw,       title: "Retention Curves",    desc: "Churn cohort analysis and retention curves that reveal long-term product stickiness." },
        { icon: BarChart3,        title: "Revenue Metrics",     desc: "Live MRR, ARR, and growth rate dashboards so you always know where revenue stands." },
        { icon: MousePointerClick,title: "Custom Events",       desc: "Track any user behaviour with custom event definitions — no developer involvement required." },
        { icon: FileText,         title: "Export & Reports",    desc: "Generate and export scheduled reports for investors, board meetings, and team syncs." },
      ],
    },
  ],

  /* Tech stack */
  techLogos: [
    { name: "React",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "PostgreSQL",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase",    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "Redis",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "AWS",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Docker",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Next.js",    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  ],

  /* Use cases */
  useCases: {
    heading: "Built for every stage of your startup.",
    subtitle: "Whether you're validating an idea or scaling to your Series A — we build what the stage demands.",
    items: [
      {
        icon: Lightbulb,
        title: "MVP & Validation",
        desc: "Ship a working product in 4–6 weeks to test demand, get user feedback, and raise your first round.",
        points: ["Core feature set only", "User analytics built in", "Investor-ready demo"],
      },
      {
        icon: Target,
        title: "Product-Market Fit",
        desc: "Iterate fast on user feedback. Add features, refine UX, and build retention loops that prove traction.",
        points: ["A/B testing support", "Usage analytics", "Feedback collection"],
      },
      {
        icon: TrendingUp,
        title: "Growth & Scale",
        desc: "Prepare your platform for 10x users. Performance tuning, infrastructure scaling, and team onboarding.",
        points: ["Auto-scaling infra", "CI/CD pipeline", "Team handover docs"],
      },
      {
        icon: Repeat,
        title: "Rebuild & Modernise",
        desc: "Replace a no-code prototype or legacy system with production-grade code that scales and performs.",
        points: ["Data migration", "Zero-downtime cutover", "Modern tech stack"],
      },
    ],
  },

  /* Deliverables */
  deliverables: {
    heading: "Everything you own at the end of the build.",
    items: [
      { icon: Smartphone,     title: "iOS App (App Store)",        desc: "Fully submitted and live on Apple App Store under your developer account." },
      { icon: Globe,          title: "Android App (Google Play)",  desc: "Published on Google Play Store — reviewed, listed, and ready for download." },
      { icon: BarChart3,      title: "Web Admin Dashboard",        desc: "Browser-based operations hub for your team to manage users, content, and data." },
      { icon: Code2,          title: "Full Source Code",           desc: "Complete codebase in a private GitHub repo — yours to own, fork, and extend." },
      { icon: BookOpen,       title: "Technical Documentation",    desc: "API docs, deployment guide, and environment setup — handed over at launch." },
      { icon: HeadphonesIcon, title: "30-Day Post-Launch Support", desc: "Dedicated support for bugs, tweaks, and go-live issues after delivery." },
    ],
  },

  /* Comparison */
  comparison: {
    heading: "Why hire a dev team instead of using no-code or freelancers?",
    cols: ["Unitaspro Build", "No-Code (Bubble)", "Freelancer / Upwork"],
    rows: [
      { feature: "Production-grade, scalable code",          custom: true,       alt1: false,       alt2: "Varies"   },
      { feature: "You own the source code",                  custom: true,       alt1: false,       alt2: true       },
      { feature: "Fixed price, fixed timeline",              custom: true,       alt1: true,        alt2: false      },
      { feature: "Dedicated team with weekly demos",         custom: true,       alt1: false,       alt2: false      },
      { feature: "Mobile apps (iOS + Android)",              custom: true,       alt1: "Limited",   alt2: "Varies"   },
      { feature: "Post-launch support included",             custom: true,       alt1: false,       alt2: false      },
      { feature: "Can scale to 100k+ users",                 custom: true,       alt1: false,       alt2: "Varies"   },
      { feature: "Investor-ready documentation",             custom: true,       alt1: false,       alt2: false      },
    ],
  },

  /* Process */
  processHeading: "From discovery call to live product — in four steps.",
  process: [
    { num: "01", icon: PhoneCall,   title: "Discovery Call",   desc: "We map your target user, core problem, and must-have features in a 30-minute call. We align on what success looks like before writing code." },
    { num: "02", icon: FileText,    title: "Proposal & Scope", desc: "Fixed price, fixed timeline, full spec within 48 hours. No scope creep, no moving goalposts — just a clear plan you can sign off on." },
    { num: "03", icon: Code2,       title: "Design & Build",   desc: "Weekly demos on a shared staging environment. Real working software every sprint — you see progress, not promises." },
    { num: "04", icon: Rocket,      title: "Launch & Support", desc: "Full production deployment with infrastructure handover. 30 days dedicated support for a smooth launch and first user feedback cycle." },
  ],

  /* FAQ */
  faqHeading: "Questions about your startup build",
  faqSubtitle: "For founders, product teams, and growth-stage companies evaluating a custom build partner.",
  faqs: [
    {
      q: "How long does an MVP take to build?",
      a: "A focused MVP with core features and a working backend typically ships in 4–6 weeks. A more complete SaaS platform with billing, multi-tenancy, and analytics takes 8–12 weeks. We scope before we quote.",
    },
    {
      q: "Can we start with an MVP and scale from there?",
      a: "Yes — and this is exactly how we recommend starting. We build the MVP with a production-grade architecture so there's nothing to throw away. Scaling is adding features, not rebuilding foundations.",
    },
    {
      q: "Do you do equity deals or deferred payment for early-stage startups?",
      a: "We work on fixed-price cash engagements. This keeps the relationship clean and ensures you own the work outright from day one — no equity dilution, no complicated arrangements.",
    },
    {
      q: "What tech stack do you use for SaaS products?",
      a: "Our default SaaS stack is Next.js (React) for the frontend, Node.js or Python for the API, PostgreSQL for the database, and hosted on AWS or GCP. We adapt to your requirements and existing tech where needed.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. The codebase is yours — not locked into our systems. We hand over the repo, infrastructure docs, and full deployment guide.",
    },
  ],

  /* CTA */
  ctaIcon:    TrendingUp,
  ctaLabel:   "Startups & SaaS",
  ctaHeading: "Ready to build your product the right way?",
  ctaSub:     "Tell us your idea and your timeline. We'll scope a build that gets you to market fast — without the technical debt that slows you down later.",
};

export default function StartupsIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
