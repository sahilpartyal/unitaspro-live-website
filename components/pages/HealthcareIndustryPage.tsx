"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Stethoscope, Calendar, FileText,
  Shield, Bell, Users, BarChart3, Lock, RefreshCcw, Zap, Heart, ClipboardList,
  PhoneCall, Layers, Rocket,
  Smartphone, Globe, Code2, BookOpen, HeadphonesIcon, Hospital, Brain, Baby,
  CalendarCheck, FolderOpen, Download, Video, Pill, MessageSquare,
  LayoutDashboard, PenLine, FlaskConical, MonitorPlay, BellRing, Clipboard,
  CalendarRange, Receipt, UserCog, Package, FileCheck, Activity,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Patient portals, clinic software & telemedicine platforms",
  heroHeadingLight: "Healthcare software built for",
  heroHeadingBold: "patients and providers.",
  heroHighlights: [
    { icon: Stethoscope, title: "Clinic & Hospital",  desc: "Appointments, EMR, billing in one integrated system" },
    { icon: Calendar,    title: "Patient Scheduling", desc: "Online booking with automated reminders"             },
    { icon: FileText,    title: "8-Week Delivery",    desc: "HIPAA-ready platform in under two months"            },
  ],

  /* Problem & Solution */
  problemSectionLight: "Paper-based processes put",
  problemSectionBold:  "patients and revenue at risk.",
  problemSubtitle:     "Four problems we solve for every healthcare provider we work with.",
  problems: [
    {
      problem:  "Appointment books are still paper or basic spreadsheets",
      solution: "Online appointment scheduling with real-time doctor availability, patient self-booking, and automated SMS/email reminders — reducing no-shows by up to 40%.",
    },
    {
      problem:  "Patient records scattered across physical files and disconnected systems",
      solution: "Centralised Electronic Medical Records with full history, lab results, prescriptions, and imaging — accessible securely from any device.",
    },
    {
      problem:  "Billing and insurance claims handled manually, causing delays and errors",
      solution: "Integrated billing module with insurance claim submission, payment tracking, and automated statements for patients and insurers.",
    },
    {
      problem:  "Patients have no visibility into their care journey",
      solution: "Patient portal gives full access to appointments, prescriptions, test reports, and upcoming visits — reducing reception workload significantly.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Paper records, missed appointments, and disconnected departments.",
      points: [
        "Patient records scattered across paper and Excel",
        "Appointment scheduling done over phone calls",
        "No way for patients to access their own records",
        "Billing and clinical systems that don't talk to each other",
      ],
    },
    with: {
      subtitle: "One platform connecting patients, doctors, and admin — digitally.",
      points: [
        "Centralised electronic health records",
        "Online booking with automated reminders",
        "Patient portal with reports and prescriptions",
        "Integrated billing, pharmacy, and lab workflows",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything a modern healthcare platform needs.",
  features: [
    { icon: Calendar,     title: "Smart Scheduling",      desc: "Online booking, cancellations, and waitlist management."    },
    { icon: ClipboardList,title: "Electronic Medical Records", desc: "Structured patient history, diagnoses, and notes."    },
    { icon: FileText,     title: "Prescription Management",desc: "Digital prescriptions with pharmacy integration."          },
    { icon: BarChart3,    title: "Revenue Analytics",     desc: "Collections, outstanding, and payer performance reports."  },
    { icon: Bell,         title: "Appointment Reminders", desc: "Automated SMS, WhatsApp, and email reminders."             },
    { icon: Shield,       title: "HIPAA Compliance",      desc: "Encrypted data storage, audit trails, access controls."    },
    { icon: Heart,        title: "Telemedicine",          desc: "Secure video consultations with in-call notes and e-Rx."   },
    { icon: Users,        title: "Multi-Provider Support",desc: "Manage multiple doctors, departments, and locations."      },
  ],

  /* Panels */
  panelHeading: "Three portals. One care ecosystem.",
  panels: [
    {
      label: "Patient App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
      features: [
        { icon: CalendarCheck,  title: "Instant Booking",       desc: "Book appointments with any doctor in seconds from your phone." },
        { icon: FolderOpen,     title: "Medical History",       desc: "Access your full medical history and past prescriptions anytime." },
        { icon: Download,       title: "Report Downloads",      desc: "Download test reports and medical certificates with one tap." },
        { icon: Video,          title: "Video Consults",        desc: "Consult your doctor from home via secure HD video calls." },
        { icon: Pill,           title: "Medication Alerts",     desc: "Get timely medication reminders and track your daily health vitals." },
        { icon: MessageSquare,  title: "In-App Chat",           desc: "Message your care team directly for quick follow-ups and queries." },
      ],
    },
    {
      label: "Doctor Dashboard",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80",
      features: [
        { icon: LayoutDashboard, title: "Daily Schedule",       desc: "View today's appointments with full patient history at a glance." },
        { icon: PenLine,         title: "Digital Notes",        desc: "Write clinical notes, diagnoses, and prescriptions digitally in seconds." },
        { icon: FlaskConical,    title: "Lab Integration",      desc: "Order labs and view results directly within the same screen." },
        { icon: MonitorPlay,     title: "Video Sessions",       desc: "Run video consultations with built-in recording and in-call notes." },
        { icon: BellRing,        title: "Follow-Up Alerts",     desc: "Receive automated patient follow-up reminders and critical alerts." },
        { icon: Clipboard,       title: "Patient Summary",      desc: "Get a one-page clinical summary for every patient before each visit." },
      ],
    },
    {
      label: "Admin Panel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: CalendarRange,  title: "Occupancy Calendar",    desc: "View full clinic occupancy and appointment calendars across departments." },
        { icon: Receipt,        title: "Billing & Claims",      desc: "Manage billing, insurance claims, and collections from one dashboard." },
        { icon: UserCog,        title: "Staff Management",      desc: "Handle staff scheduling, shift assignments, and performance tracking." },
        { icon: Package,        title: "Inventory Control",     desc: "Track pharmacy stock, medical supplies, and reorder levels in real time." },
        { icon: FileCheck,      title: "Compliance Reports",    desc: "Generate audit trails and compliance reports for regulatory reviews." },
        { icon: Activity,       title: "Ops Analytics",         desc: "Monitor revenue trends, patient flow, and department-level performance." },
      ],
    },
  ],

  /* Tech Logos */
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

  /* Use Cases */
  useCases: {
    heading: "Built for every type of healthcare provider.",
    subtitle: "From solo clinics to multi-branch hospital chains — the platform scales with your practice.",
    items: [
      {
        icon: Hospital,
        title: "Hospitals & Chains",
        desc: "Multi-department OPD/IPD management with bed tracking, billing, and discharge workflows.",
        points: ["Multi-branch management", "Bed & ward tracking", "Department-level analytics"],
      },
      {
        icon: Stethoscope,
        title: "Clinics & Specialists",
        desc: "Appointment booking, patient records, and prescription management for solo or group practices.",
        points: ["Online booking portal", "Digital prescriptions", "Follow-up reminders"],
      },
      {
        icon: Brain,
        title: "Telemedicine & Remote Care",
        desc: "Video consultations, remote monitoring, and digital prescriptions for virtual care providers.",
        points: ["HD video consultations", "Remote vitals monitoring", "E-prescription delivery"],
      },
      {
        icon: Baby,
        title: "Diagnostics & Labs",
        desc: "Sample collection, test management, report generation, and delivery for pathology and imaging centres.",
        points: ["Sample barcode tracking", "Auto-generated reports", "Patient portal access"],
      },
    ],
  },

  /* Deliverables */
  deliverables: {
    heading: "Everything you own at the end of the build.",
    items: [
      { icon: Smartphone,     title: "iOS App (App Store)",        desc: "Fully submitted and live on Apple App Store under your developer account." },
      { icon: Globe,          title: "Android App (Google Play)",  desc: "Published on Google Play Store — reviewed, listed, and ready for download." },
      { icon: BarChart3,      title: "Web Admin Dashboard",        desc: "Browser-based operations hub for clinic managers, doctors, and finance teams." },
      { icon: Code2,          title: "Full Source Code",           desc: "Complete codebase in a private GitHub repo — yours to own, fork, and extend." },
      { icon: BookOpen,       title: "Technical Documentation",    desc: "API docs, deployment guide, and environment setup — handed over at launch." },
      { icon: HeadphonesIcon, title: "30-Day Post-Launch Support", desc: "Dedicated support for bugs, tweaks, and go-live issues after delivery." },
    ],
  },

  /* Comparison */
  comparison: {
    heading: "Why build custom instead of using off-the-shelf clinic software?",
    cols: ["Custom Build", "Practo / Lybrate", "Generic HMS"],
    rows: [
      { feature: "Branded entirely as your practice",       custom: true,       alt1: false,       alt2: false      },
      { feature: "You own the source code",                 custom: true,       alt1: false,       alt2: false      },
      { feature: "Zero per-appointment platform fees",      custom: true,       alt1: false,       alt2: true       },
      { feature: "Custom clinical workflows & templates",   custom: true,       alt1: "Limited",   alt2: "Limited"  },
      { feature: "Integrates with lab and pharmacy systems", custom: true,       alt1: false,       alt2: "Limited"  },
      { feature: "Your own patient data — no shared pool",  custom: true,       alt1: false,       alt2: false      },
      { feature: "Telemedicine built into the same platform", custom: true,     alt1: "Limited",   alt2: false      },
      { feature: "No recurring licence fees",               custom: true,       alt1: false,       alt2: false      },
    ],
  },

  /* Process */
  processHeading: "From discovery call to live platform — in four steps.",
  process: [
    { num: "01", icon: PhoneCall,  title: "Discovery Call",   desc: "We map your patient flow, clinical workflows, and compliance requirements in a 30-minute call before writing code." },
    { num: "02", icon: FileText,   title: "Proposal & Scope", desc: "Fixed price, fixed timeline, full spec within 48 hours. You know exactly what gets built and what it costs — upfront." },
    { num: "03", icon: Layers,     title: "Design & Build",   desc: "Weekly demos on a shared staging environment. Real working software every sprint — no surprises at launch." },
    { num: "04", icon: Rocket,     title: "Launch & Support", desc: "Full deployment with staff training documentation. 30 days dedicated support for a smooth go-live." },
  ],

  /* FAQ */
  faqHeading: "Questions about your healthcare build",
  faqSubtitle: "For clinics, hospitals, diagnostic centres, and healthtech startups evaluating a custom platform.",
  faqs: [
    {
      q: "How long does a clinic or hospital platform take to build?",
      a: "A full patient + doctor + admin system typically takes 8–12 weeks. A focused scheduling or EMR module can ship in 4–6 weeks. We scope before we quote so you know exactly what you're committing to.",
    },
    {
      q: "Is the platform HIPAA and data privacy compliant?",
      a: "Yes. All platforms include encrypted data storage, role-based access controls, full audit trails, and configurable data retention policies aligned with HIPAA, DPDP (India), and GDPR requirements.",
    },
    {
      q: "Can you integrate with diagnostic labs and pharmacy systems?",
      a: "Yes. We integrate with LIMS (Lab Information Management Systems), pharmacy management software, and diagnostic equipment via HL7 and FHIR standards where available.",
    },
    {
      q: "Can the platform support telemedicine and in-person visits together?",
      a: "Absolutely. The scheduling and consultation modules support both modes. Patients book online, choose in-person or video, and the doctor sees all cases in one unified workflow.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and new features.",
    },
  ],

  /* CTA */
  ctaIcon:    Stethoscope,
  ctaLabel:   "Healthcare & MedTech",
  ctaHeading: "Ready to modernise your healthcare operations?",
  ctaSub:     "Tell us how your clinic or hospital works today. We'll design the platform that improves patient outcomes — fixed price, fixed timeline.",
};

export default function HealthcareIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
