"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  CreditCard, ShieldCheck, BarChart3, Lock, FileText, RefreshCcw, Bell, Users, Zap, Globe, PieChart, AlertCircle, Layers, TrendingUp, Smartphone, Code2, BookOpen, HeadphonesIcon, Building2, Wallet, Landmark, PiggyBank,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Banking portals, lending platforms & fintech dashboards",
  heroHeadingLight: "Financial software built for",
  heroHeadingBold: "compliance and scale.",
  heroHighlights: [
    { icon: CreditCard,  title: "Payments & Lending",  desc: "End-to-end payment flows, loan management & KYC"   },
    { icon: ShieldCheck, title: "Bank-Grade Security",  desc: "Encryption, audit trails, and role-based access"   },
    { icon: BarChart3,   title: "8-Week Delivery",     desc: "Production-ready fintech platform in under 2 months" },
  ],

  /* Problem & Solution */
  problemSectionLight: "Legacy banking software is",
  problemSectionBold:  "costing you customers.",
  problemSubtitle:     "Four issues we fix for every fintech and lending company we work with.",
  problems: [
    {
      problem:  "Clunky onboarding loses applicants before they convert",
      solution: "Streamlined digital onboarding with eKYC, document upload, and instant eligibility checks — done in minutes on mobile.",
    },
    {
      problem:  "Manual loan processing creates bottlenecks and delays",
      solution: "Automated underwriting workflows with rule-based approvals, credit scoring integration, and real-time status tracking.",
    },
    {
      problem:  "No unified view of customer accounts and transactions",
      solution: "A single dashboard aggregates accounts, statements, repayment schedules, and support history in one place.",
    },
    {
      problem:  "Compliance reporting is time-consuming and error-prone",
      solution: "Built-in audit trails, regulatory report exports, and configurable compliance workflows reduce manual effort by 80%.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Legacy systems, compliance headaches, and disconnected customer data.",
      points: [
        "Manual KYC and onboarding taking days",
        "Loan processing stuck in spreadsheets",
        "No unified view of customer accounts",
        "Compliance reports assembled by hand",
      ],
    },
    with: {
      subtitle: "One platform handling applications, approvals, payments, and compliance.",
      points: [
        "Digital KYC with instant eligibility checks",
        "Automated underwriting and disbursement",
        "Single dashboard for all customer data",
        "One-click regulatory reports and audit trails",
      ],
    },
  },

  /* Features */
  featuresHeading: "Every feature your fintech platform needs.",
  features: [
    { icon: Lock,       title: "KYC & AML Compliance",    desc: "Identity verification, PEP screening, and AML rule enforcement." },
    { icon: CreditCard, title: "Payment Processing",       desc: "Cards, bank transfers, and wallets with real-time settlement."   },
    { icon: FileText,   title: "Loan Origination System",  desc: "Application, underwriting, disbursement, and collections."      },
    { icon: BarChart3,  title: "Analytics & Reporting",    desc: "Portfolio health, default rates, and revenue dashboards."       },
    { icon: Bell,       title: "Smart Notifications",      desc: "EMI reminders, statement alerts, and fraud warnings."           },
    { icon: RefreshCcw, title: "Recurring Payments",       desc: "Auto-debit mandates, subscription billing, and retry logic."    },
    { icon: Users,      title: "Multi-Tenant Architecture",desc: "Support multiple branches, agents, or white-label partners."    },
    { icon: ShieldCheck,title: "Audit & Security Logs",    desc: "Full tamper-proof audit trails for every transaction."          },
  ],

  /* Panels */
  panelHeading: "Three portals. One financial ecosystem.",
  panels: [
    {
      label: "Customer App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
      features: [
        { icon: Zap,        title: "Instant Apply",    desc: "Apply for loans or accounts in under 5 minutes with a streamlined digital flow." },
        { icon: Wallet,     title: "Live Balance",     desc: "View real-time balance, full transaction history, and downloadable statements." },
        { icon: CreditCard, title: "One-Tap EMI",      desc: "See your full EMI schedule and make repayments with a single tap." },
        { icon: FileText,   title: "Doc Upload",       desc: "Upload documents directly from your phone and track verification status in real time." },
        { icon: Bell,       title: "Smart Alerts",     desc: "Receive push notifications for due dates, approvals, and account activity." },
        { icon: Smartphone, title: "Mobile-First UX",  desc: "Designed for mobile from day one with biometric login and offline access." },
      ],
    },
    {
      label: "Agent / Broker Portal",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: Users,      title: "Client Pipeline",     desc: "Submit, track, and manage customer applications from a single dashboard." },
        { icon: PieChart,   title: "Commission Tracker",  desc: "Monitor real-time commission earnings, payout history, and incentive tiers." },
        { icon: ShieldCheck,title: "Doc Verification",    desc: "Collect and verify customer documents digitally with built-in compliance checks." },
        { icon: TrendingUp, title: "Lead Management",     desc: "Track your lead pipeline with real-time status updates and follow-up reminders." },
        { icon: BarChart3,  title: "Performance Boards",  desc: "Access personal and team performance dashboards with leaderboard rankings." },
        { icon: Globe,      title: "Multi-Region Access", desc: "Manage applications across multiple branches and regions from one portal." },
      ],
    },
    {
      label: "Admin Dashboard",
      type: "desktop",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: Layers,      title: "Portfolio Overview",  desc: "Get a complete view of the loan book, disbursements, and outstanding balances." },
        { icon: AlertCircle, title: "Risk Engine",         desc: "Configure credit risk scoring rules and manage multi-level approval workflows." },
        { icon: Lock,        title: "Role Permissions",    desc: "Define granular user roles, access levels, and operational permissions." },
        { icon: RefreshCcw,  title: "Reconciliation",      desc: "Automate daily settlement reconciliation across payment channels and partners." },
        { icon: ShieldCheck, title: "Fraud Detection",     desc: "Receive real-time fraud alerts and manage investigation cases end to end." },
        { icon: FileText,    title: "Compliance Reports",  desc: "Generate regulatory reports and full audit trails with a single click." },
      ],
    },
  ],

    /* Use cases */
  useCases: {
    heading: "Built for every type of financial business.",
    subtitle: "Whether you're a neobank, lending platform, or insurance provider — the system adapts to your model.",
    items: [
      {
        icon: Landmark,
        title: "Neobank & Digital Banking",
        desc: "Full-featured digital banking with accounts, transfers, cards, and compliance built in.",
        points: ["Multi-currency accounts", "Card issuance & management", "Core banking integration"],
      },
      {
        icon: Wallet,
        title: "Lending & NBFC",
        desc: "End-to-end loan origination with automated underwriting, disbursement, and collections.",
        points: ["Credit scoring integration", "EMI auto-debit mandates", "Collections workflow"],
      },
      {
        icon: PiggyBank,
        title: "Insurance & Wealth",
        desc: "Policy management, premium collection, and claims processing for insurance and investment platforms.",
        points: ["Policy lifecycle management", "Premium reminders & auto-pay", "Claims tracking dashboard"],
      },
      {
        icon: Building2,
        title: "Payment Gateway & Aggregator",
        desc: "Multi-merchant payment processing with settlement, reconciliation, and reporting.",
        points: ["Multi-method checkout", "T+1 settlement engine", "Merchant onboarding portal"],
      },
    ],
  },

    /* FAQ */
  faqHeading: "Questions about your fintech build",
  faqSubtitle: "For lending platforms, neobanks, and financial services companies evaluating a custom build.",
  faqs: [
    {
      q: "How long does a lending or fintech platform take to build?",
      a: "A full customer + agent + admin system typically takes 8–12 weeks. A focused loan origination or payment module can ship in 4–6 weeks. We scope before we quote so you always know exactly what you're committing to.",
    },
    {
      q: "Can you integrate with credit bureaus and payment gateways?",
      a: "Yes. We integrate with Experian, CRIF, Equifax, and all major Indian and international payment gateways including Razorpay, Stripe, PayU, and NEFT/IMPS/UPI rails.",
    },
    {
      q: "How do you handle regulatory compliance and data security?",
      a: "All platforms we build include role-based access, encrypted storage, full audit trails, and configurable compliance workflows. We also support RBI guidelines, GDPR, and PCI-DSS requirements depending on your market.",
    },
    {
      q: "Can the platform support multiple products — personal loans, business loans, credit cards?",
      a: "Absolutely. The platform is product-agnostic. Eligibility rules, repayment schedules, and fee structures are all configurable per product. Adding a new product type is a configuration change, not a rebuild.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and releases.",
    },
  ],

  /* CTA */
  ctaIcon:    TrendingUp,
  ctaLabel:   "Finance & Fintech",
  ctaHeading: "Ready to modernise your financial platform?",
  ctaSub:     "Tell us how your current system works. We'll design the platform that fixes the gaps — fixed price, fixed timeline.",
};

export default function FinanceIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
