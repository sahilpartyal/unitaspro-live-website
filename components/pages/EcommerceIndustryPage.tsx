"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  ShoppingCart, Package, BarChart3, Search, Star, RefreshCcw, Bell, CreditCard, Truck, Tag, Users, Globe, Code2, BookOpen, HeadphonesIcon, Store, ShoppingBag, Boxes, Warehouse, Filter, Heart, MapPin, Eye, RotateCcw, Upload, AlertCircle, Wallet, MessageSquare, TrendingUp, Settings, ClipboardList, LayoutGrid, Megaphone, UserCheck, LineChart, ShieldCheck,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Custom storefronts, marketplace platforms & order management",
  heroHeadingLight: "E-commerce software that",
  heroHeadingBold: "converts and scales.",
  heroHighlights: [
    { icon: ShoppingCart, title: "Custom Storefront",   desc: "Branded shopping experience built for conversion"    },
    { icon: Package,      title: "Order & Inventory",   desc: "Real-time stock management and fulfilment tracking"  },
    { icon: BarChart3,    title: "6-Week Delivery",     desc: "From scoping call to live store in six weeks"        },
  ],

  /* Problem & Solution */
  problemSectionLight: "Off-the-shelf platforms limit",
  problemSectionBold:  "what your brand can do.",
  problemSubtitle:     "Four constraints we remove for every e-commerce business we build for.",
  problems: [
    {
      problem:  "Platform fees and transaction cuts eat into every sale",
      solution: "A custom-built storefront owned by you — no per-transaction fees, no platform tax on every order you fulfil.",
    },
    {
      problem:  "Can't customise the checkout or product experience without a developer",
      solution: "Your storefront is built exactly to your requirements. Any change — product page, checkout flow, offers — takes minutes, not a Shopify app.",
    },
    {
      problem:  "Inventory, orders, and shipping tracked across three separate tools",
      solution: "Unified order management connects your store, warehouse, and courier partners. One screen shows every order from placed to delivered.",
    },
    {
      problem:  "No real analytics beyond basic sales numbers",
      solution: "Custom analytics tracks cart abandonment, product performance, customer lifetime value, and campaign ROI — all in one dashboard.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Platform fees, limited customisation, and disconnected tools.",
      points: [
        "Paying per-transaction fees on every sale",
        "Can't customise checkout without a developer",
        "Inventory tracked in a separate tool",
        "No real analytics beyond basic sales numbers",
      ],
    },
    with: {
      subtitle: "Your own storefront with full control over every customer touchpoint.",
      points: [
        "Zero platform fees — you keep every margin",
        "Custom checkout, product pages, and promotions",
        "Unified inventory across all warehouses",
        "Custom analytics for LTV, abandonment, and ROI",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything your store needs, built in.",
  features: [
    { icon: Search,     title: "Smart Product Search",   desc: "Faceted filters, autocomplete, and search analytics."      },
    { icon: Star,       title: "Reviews & Ratings",      desc: "Verified purchase reviews with photo and video support."   },
    { icon: CreditCard, title: "Multi-Payment Support",  desc: "Cards, UPI, wallets, buy-now-pay-later, and COD."          },
    { icon: Truck,      title: "Shipping Integration",   desc: "Auto-assign courier, track shipments, manage returns."     },
    { icon: Tag,        title: "Promotions & Coupons",   desc: "Discount rules, flash sales, and loyalty points built in." },
    { icon: Bell,       title: "Order Notifications",    desc: "Real-time updates to customers at every order stage."      },
    { icon: RefreshCcw, title: "Returns & Refunds",      desc: "Automated returns portal with refund workflow."            },
    { icon: Users,      title: "Vendor Management",      desc: "Multi-seller marketplace with individual dashboards."      },
  ],

  /* Panels */
  panelHeading: "Three views. One commerce platform.",
  panels: [
    {
      label: "Customer Storefront",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80",
      features: [
        { icon: Filter,     title: "Smart Filters",       desc: "Browse and filter thousands of products instantly with faceted search and sorting." },
        { icon: Heart,      title: "Wishlist & Compare",   desc: "Save favourites, compare side by side, and share products with friends." },
        { icon: CreditCard, title: "One-Page Checkout",    desc: "Streamlined single-page checkout with saved addresses and multiple payment options." },
        { icon: MapPin,     title: "Live Order Tracking",  desc: "Real-time order tracking from placement to doorstep delivery." },
        { icon: RotateCcw,  title: "Easy Returns",         desc: "Self-service returns portal with instant refund status updates." },
        { icon: Eye,        title: "Personalised Feed",    desc: "AI-driven product recommendations based on browsing history and preferences." },
      ],
    },
    {
      label: "Vendor Dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      features: [
        { icon: Upload,         title: "Bulk Product Upload", desc: "Manage and publish product listings in bulk with CSV import and media manager." },
        { icon: AlertCircle,    title: "Inventory Alerts",    desc: "Real-time notifications for low stock, new orders, and return requests." },
        { icon: Wallet,         title: "Payout Tracking",     desc: "Transparent commission breakdown and scheduled payout tracking per order." },
        { icon: MessageSquare,  title: "Review Management",   desc: "Respond to customer reviews and ratings directly from your dashboard." },
        { icon: TrendingUp,     title: "Sales Analytics",     desc: "Track revenue, return rates, and top-performing products at a glance." },
        { icon: Settings,       title: "Store Settings",      desc: "Configure shipping rules, tax profiles, and storefront appearance in one place." },
      ],
    },
    {
      label: "Admin Panel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: ClipboardList, title: "Order Lifecycle",      desc: "Full order management from placement through fulfilment to delivery and returns." },
        { icon: LayoutGrid,    title: "Warehouse Inventory",  desc: "Unified inventory view across all warehouses with real-time stock sync." },
        { icon: Megaphone,     title: "Campaign Manager",     desc: "Create and schedule promotions, flash sales, and coupon campaigns platform-wide." },
        { icon: UserCheck,     title: "Seller Onboarding",    desc: "Streamlined seller registration, document verification, and approval workflow." },
        { icon: LineChart,     title: "Growth Analytics",     desc: "Track GMV, revenue, and platform growth with exportable executive dashboards." },
        { icon: ShieldCheck,   title: "Fraud Prevention",     desc: "Automated fraud detection rules that flag suspicious orders before fulfilment." },
      ],
    },
  ],

    /* Use cases */
  useCases: {
    heading: "Built for every type of e-commerce business.",
    subtitle: "Whether you sell 10 SKUs or 100,000 — the platform adapts to your catalogue and fulfilment model.",
    items: [
      {
        icon: Store,
        title: "D2C Brand Store",
        desc: "Branded shopping experience with custom checkout, loyalty, and subscription support.",
        points: ["Branded storefront", "Subscription & auto-replenish", "Customer loyalty program"],
      },
      {
        icon: ShoppingBag,
        title: "Multi-Vendor Marketplace",
        desc: "Independent seller dashboards, per-vendor payouts, and marketplace-wide promotions.",
        points: ["Vendor onboarding portal", "Commission & payout engine", "Marketplace-wide search"],
      },
      {
        icon: Boxes,
        title: "B2B Wholesale Platform",
        desc: "Tiered pricing, bulk ordering, credit terms, and invoice-based purchasing for trade buyers.",
        points: ["Tiered pricing by volume", "Credit limit management", "Bulk order & reorder"],
      },
      {
        icon: Warehouse,
        title: "Inventory & Fulfilment",
        desc: "Multi-warehouse stock management, pick-pack-ship workflow, and courier integration.",
        points: ["Multi-warehouse sync", "Barcode scanning", "Auto courier assignment"],
      },
    ],
  },

  /* FAQ */
  faqHeading: "Questions about your e-commerce build",
  faqSubtitle: "For D2C brands, marketplace operators, and retailers evaluating a custom platform.",
  faqs: [
    {
      q: "How long does a custom e-commerce platform take to build?",
      a: "A full storefront + admin + vendor system typically takes 8–12 weeks. A focused D2C store or order management module can ship in 4–6 weeks. We scope before we quote.",
    },
    {
      q: "Can you migrate our existing products and orders from Shopify or WooCommerce?",
      a: "Yes. We handle data migration from all major platforms — products, variants, customer accounts, and order history — with zero data loss.",
    },
    {
      q: "Can you build a multi-vendor marketplace?",
      a: "Absolutely. Our marketplace architecture supports independent vendor dashboards, per-vendor inventory and payouts, and configurable commission rules across all product categories.",
    },
    {
      q: "Will the store work for both B2C and B2B customers?",
      a: "Yes. We build dual-mode storefronts with separate pricing tiers, bulk ordering, and credit terms for B2B customers alongside the standard retail experience.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and new features.",
    },
  ],

  /* CTA */
  ctaIcon:    ShoppingCart,
  ctaLabel:   "E-Commerce & Retail",
  ctaHeading: "Ready to build your own commerce platform?",
  ctaSub:     "Tell us how your business sells today. We'll design the system that removes the limitations — fixed price, fixed timeline.",
};

export default function EcommerceIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
