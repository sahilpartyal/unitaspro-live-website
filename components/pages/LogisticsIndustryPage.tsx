"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Truck, Package, MapPin, BarChart3, Bell, Users, Shield, CreditCard, RefreshCcw, Scan, Route, FileText, Layers, Globe, Code2, BookOpen, HeadphonesIcon, Ship, Warehouse, AlertTriangle, Wallet, WifiOff, Clock,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Fleet tracking, warehouse management & delivery platforms",
  heroHeadingLight: "Logistics software that",
  heroHeadingBold: "delivers on time, every time.",
  heroHighlights: [
    { icon: Truck,   title: "Fleet & Route Optimisation", desc: "Live tracking and smart route planning for every vehicle" },
    { icon: Package, title: "Warehouse Management",       desc: "Real-time inventory, pick-pack-ship in one system"        },
    { icon: MapPin,  title: "Last-Mile Delivery",         desc: "Driver apps with proof of delivery and live ETAs"         },
  ],

  /* Problem & Solution */
  problemSectionLight: "Manual operations mean",
  problemSectionBold:  "late deliveries and lost margin.",
  problemSubtitle:     "Four inefficiencies we eliminate for every logistics business we work with.",
  problems: [
    {
      problem:  "Route planning done manually wastes fuel and causes late deliveries",
      solution: "Automated route optimisation assigns the most efficient path to every driver — reducing fuel costs by up to 20% and improving on-time delivery rates.",
    },
    {
      problem:  "Customers have no real-time visibility of their shipment",
      solution: "Live tracking portal gives customers a real-time map view, accurate ETAs, and instant notifications at every stage from pickup to delivery.",
    },
    {
      problem:  "Warehouse picking errors lead to wrong deliveries and costly returns",
      solution: "Digital pick-and-pack workflows with barcode scanning eliminate picking errors. Every item is scanned, verified, and confirmed before it leaves the warehouse.",
    },
    {
      problem:  "No single view of fleet, drivers, and delivery performance",
      solution: "Unified operations dashboard shows fleet location, delivery status, driver performance, and SLA compliance — all in real time from one screen.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Manual routing, no shipment visibility, and disconnected operations.",
      points: [
        "Routes planned manually on paper or basic maps",
        "Customers calling to ask where their shipment is",
        "Warehouse and dispatch teams on separate systems",
        "Proof of delivery done on paper slips",
      ],
    },
    with: {
      subtitle: "One platform connecting dispatch, drivers, warehouses, and customers.",
      points: [
        "AI-optimised routing that saves fuel and time",
        "Real-time tracking links for every shipment",
        "Unified warehouse and dispatch operations",
        "Digital POD with photo and signature capture",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything a modern logistics operation needs.",
  features: [
    { icon: Route,      title: "Route Optimisation",      desc: "Multi-stop route planning with real-time traffic data."    },
    { icon: MapPin,     title: "Live Fleet Tracking",      desc: "GPS location of every vehicle updated every 30 seconds."  },
    { icon: Scan,       title: "Barcode & QR Scanning",   desc: "Scan-based intake, picking, and proof of delivery."        },
    { icon: BarChart3,  title: "Delivery Analytics",       desc: "On-time rates, SLA breaches, and driver performance."     },
    { icon: Bell,       title: "Automated Notifications",  desc: "Customer alerts at pickup, in-transit, and delivery."     },
    { icon: Package,    title: "Inventory Management",     desc: "Real-time stock levels, reorder alerts, and batch tracking."},
    { icon: RefreshCcw, title: "Returns Management",       desc: "Reverse logistics workflow from request to warehouse."     },
    { icon: Shield,     title: "Proof of Delivery",        desc: "Digital POD with photo, signature, and GPS stamp."        },
  ],

  /* Panels */
  panelHeading: "Three tools. One logistics platform.",
  panels: [
    {
      label: "Customer Portal",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
      type: "desktop" as const,
      features: [
        { icon: CreditCard,  title: "Instant Quotes",      desc: "Book shipments and get instant price quotes without waiting for callbacks." },
        { icon: MapPin,      title: "Live Tracking",        desc: "Real-time shipment tracking from pickup to final delivery on an interactive map." },
        { icon: FileText,    title: "E-Waybill Downloads",  desc: "Download e-waybills, shipping labels, and delivery reports in one click." },
        { icon: RefreshCcw,  title: "Disputes & Returns",   desc: "Raise disputes and initiate returns directly from the shipment detail screen." },
        { icon: Layers,      title: "Shipment History",     desc: "Full shipment history with invoice access, filters, and CSV export." },
        { icon: Bell,        title: "Push Notifications",   desc: "Real-time status alerts at every milestone from dispatch to doorstep." },
      ],
    },
    {
      label: "Driver App",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80",
      features: [
        { icon: Route,           title: "Smart Navigation",   desc: "Optimised multi-stop routes with turn-by-turn navigation and live traffic." },
        { icon: Scan,            title: "Package Scanning",   desc: "Scan packages at pickup and delivery using the phone camera for instant verification." },
        { icon: Shield,          title: "Digital POD",        desc: "Capture photo and e-signature as tamper-proof proof of delivery." },
        { icon: AlertTriangle,   title: "Issue Reporting",    desc: "Report delivery exceptions, damaged goods, or access issues in real time." },
        { icon: Wallet,          title: "Earnings Summary",   desc: "View daily earnings, delivery counts, and payout breakdowns after every shift." },
        { icon: WifiOff,         title: "Offline Mode",       desc: "Complete deliveries and sync data automatically when connectivity returns." },
      ],
    },
    {
      label: "Operations Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      type: "desktop" as const,
      features: [
        { icon: Truck,      title: "Fleet Map",           desc: "Live fleet map showing every vehicle, status, and current route in real time." },
        { icon: Package,    title: "Order Management",    desc: "End-to-end order management from booking through dispatch to final delivery." },
        { icon: Warehouse,  title: "Warehouse Picking",   desc: "Real-time warehouse inventory levels and priority-sorted picking queue." },
        { icon: Clock,      title: "SLA Monitoring",      desc: "Track SLA compliance across all shipments with automated breach alerts." },
        { icon: BarChart3,  title: "Revenue Analytics",   desc: "Revenue, cost, and margin analytics with drill-down by route, client, or period." },
        { icon: Users,      title: "Team Management",     desc: "Assign roles, shifts, and delivery zones to every team member from one screen." },
      ],
    },
  ],

    /* Use cases */
  useCases: {
    heading: "Built for every type of logistics operation.",
    subtitle: "Whether you move parcels, pallets, or containers — the platform adapts to your supply chain.",
    items: [
      {
        icon: Package,
        title: "Last-Mile Delivery",
        desc: "Route optimisation, delivery assignment, and proof-of-delivery for local and hyperlocal couriers.",
        points: ["Auto route optimisation", "Driver app with POD", "Customer tracking link"],
      },
      {
        icon: Ship,
        title: "Freight & Cargo",
        desc: "Multi-modal shipment tracking, documentation, and carrier management for freight forwarders.",
        points: ["Multi-modal tracking", "Bill of lading management", "Carrier rate comparison"],
      },
      {
        icon: Warehouse,
        title: "Warehouse & 3PL",
        desc: "Inbound/outbound management, inventory tracking, and pick-pack-ship for fulfilment centres.",
        points: ["Bin & zone management", "Pick-pack-ship workflow", "Client-level inventory"],
      },
      {
        icon: Truck,
        title: "Fleet & Transport",
        desc: "Vehicle tracking, maintenance scheduling, and driver management for owned or leased fleets.",
        points: ["GPS fleet tracking", "Maintenance alerts", "Fuel & expense logging"],
      },
    ],
  },

    /* FAQ */
  faqHeading: "Questions about your logistics build",
  faqSubtitle: "For courier companies, 3PLs, warehouses, and freight operators evaluating a custom platform.",
  faqs: [
    {
      q: "How long does a logistics or fleet management platform take to build?",
      a: "A full customer portal + driver app + operations dashboard typically takes 8–12 weeks. A focused tracking or warehouse module can ship in 4–6 weeks. We scope before we quote.",
    },
    {
      q: "Can you integrate with our existing ERP or WMS?",
      a: "Yes. We build API integrations with SAP, Oracle, Tally, and most major WMS and ERP systems. If your system has no API, we handle data migration cleanly into the new platform.",
    },
    {
      q: "Can the platform support multiple warehouses and zones?",
      a: "Absolutely. The system is multi-warehouse and multi-zone from day one — with inventory managed per location and a unified view for operations managers.",
    },
    {
      q: "Do you support third-party courier integrations like Delhivery, Bluedart, or FedEx?",
      a: "Yes. We integrate with all major courier APIs for real-time rates, booking, label generation, and shipment tracking. New couriers can be added as your business grows.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and new features.",
    },
  ],

  /* CTA */
  ctaIcon:    Truck,
  ctaLabel:   "Logistics & Supply Chain",
  ctaHeading: "Ready to modernise your logistics operations?",
  ctaSub:     "Tell us how your supply chain works today. We'll design the system that cuts delays and costs — fixed price, fixed timeline.",
};

export default function LogisticsIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
