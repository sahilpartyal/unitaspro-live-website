"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Car, Navigation, Clock, MapPin, Zap, CreditCard, BarChart3, Bell, Star, Users, Shield, Briefcase, Bus, Truck, Code2, BookOpen, HeadphonesIcon, Globe, Timer, Calculator, History, CheckCircle, Wallet, MessageCircle, CalendarClock, Radar, ClipboardCheck, Map,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Fleet management, booking systems, and driver apps",
  heroHeadingLight: "Software that keeps",
  heroHeadingBold: "your fleet moving.",
  heroHighlights: [
    { icon: Car,        title: "Fleet & Dispatch",   desc: "Full booking, assignment & tracking systems"  },
    { icon: Navigation, title: "Real-Time Tracking", desc: "Live GPS for passengers and operators"        },
    { icon: Clock,      title: "4-Week Delivery",    desc: "From scoping call to production-ready app"    },
  ],

  /* Problem & Solution */
  problemSectionLight: "Manual operations cost money.",
  problemSectionBold:  "Yours shouldn't.",
  problemSubtitle:     "Four problems every transport business faces — and exactly how we solve them.",
  problems: [
    {
      problem:  "Dispatching jobs manually over the phone",
      solution: "Automated booking and smart driver-matching eliminates the back-and-forth — jobs assigned in seconds, not minutes.",
    },
    {
      problem:  "Passengers have no idea where their vehicle is",
      solution: "Live GPS tracking gives passengers a real-time map view and accurate ETAs from the moment a job is confirmed.",
    },
    {
      problem:  "Driver apps built for gig platforms, not professional fleets",
      solution: "We build driver apps around your workflow — corporate bookings, pre-scheduled jobs, and multi-stop routes handled properly.",
    },
    {
      problem:  "Booking, invoicing and driver records in separate tools",
      solution: "One admin dashboard connects bookings, driver management, billing and reporting so nothing falls through the cracks.",
    },
  ],

  /* Before / After */
  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "Scattered tools, manual workflows, and zero visibility into your fleet.",
      points: [
        "Dispatching jobs manually over phone or WhatsApp",
        "Drivers using personal maps with no tracking",
        "Invoicing done separately in spreadsheets",
        "No idea where vehicles are in real time",
      ],
    },
    with: {
      subtitle: "One platform connecting passengers, drivers, and operators in real time.",
      points: [
        "Automated dispatch with smart driver matching",
        "Live GPS tracking for every vehicle",
        "Integrated billing, invoicing, and payments",
        "Full fleet visibility from a single dashboard",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything your fleet operation needs, built in.",
  features: [
    { icon: MapPin,     title: "Real-Time GPS Tracking",     desc: "Live location for passengers and operators, always."        },
    { icon: Zap,        title: "Instant Booking & Dispatch", desc: "Automated job assignment with smart driver matching."       },
    { icon: CreditCard, title: "Integrated Payments",        desc: "Cards, wallets, and invoicing — all in one checkout flow." },
    { icon: BarChart3,  title: "Analytics Dashboard",        desc: "Revenue, trips, and driver performance at a glance."       },
    { icon: Bell,       title: "Push Notifications",         desc: "Real-time updates for drivers and passengers."             },
    { icon: Star,       title: "Ratings & Reviews",          desc: "Built-in feedback loop to maintain service standards."     },
    { icon: Users,      title: "Driver Management",          desc: "Onboard, schedule, and manage your entire fleet."         },
    { icon: Shield,     title: "Safety Features",            desc: "Emergency SOS, trip sharing, and identity verification."   },
  ],

  /* Panels */
  panelHeading: "Three apps. One seamless ecosystem.",
  panelDesc: "A connected platform for passengers, drivers, and operators — each with their own purpose-built interface.",
  panels: [
    {
      label: "Passenger App",
      type: "phone",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&q=80",
      features: [
        { icon: Timer,      title: "Instant Booking",  desc: "Book a ride in under 30 seconds with a single tap." },
        { icon: MapPin,     title: "Live Tracking",     desc: "Watch your driver approach in real time on an interactive map." },
        { icon: Calculator, title: "Fare Estimates",    desc: "See an upfront fare estimate before you confirm the trip." },
        { icon: CreditCard, title: "Tap to Pay",        desc: "Pay in-app with cards or wallets and receive digital receipts instantly." },
        { icon: History,    title: "Trip History",       desc: "Access your full trip history and re-book past rides with one tap." },
        { icon: Star,       title: "Rate & Review",     desc: "Rate your driver and leave feedback to help maintain service quality." },
      ],
    },
    {
      label: "Driver App",
      type: "phone",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80",
      features: [
        { icon: CheckCircle,  title: "Job Control",       desc: "Accept or decline incoming jobs instantly with a single swipe." },
        { icon: Navigation,   title: "Built-in Nav",      desc: "Turn-by-turn navigation built right into the driver app." },
        { icon: Wallet,       title: "Earnings Tracker",  desc: "View daily and weekly earnings breakdowns at a glance." },
        { icon: MessageCircle, title: "Chat & SOS",       desc: "Message passengers directly and trigger an SOS alert in emergencies." },
        { icon: CalendarClock, title: "Shift Planner",    desc: "Set your availability, schedule shifts, and control when you go online." },
        { icon: BarChart3,    title: "Performance Stats", desc: "Track your acceptance rate, ratings, and trip stats over time." },
      ],
    },
    {
      label: "Admin Dashboard",
      type: "desktop",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      features: [
        { icon: Radar,          title: "Fleet Overview",     desc: "See every vehicle on a single real-time map with status indicators." },
        { icon: Zap,            title: "Smart Dispatch",     desc: "Dispatch jobs manually or let the system auto-assign the nearest driver." },
        { icon: BarChart3,      title: "Trip Analytics",     desc: "Pull revenue reports, trip summaries, and trend data in seconds." },
        { icon: ClipboardCheck, title: "Driver Compliance",  desc: "Track driver performance, document expiry, and compliance in one place." },
        { icon: Map,            title: "Zone Pricing",       desc: "Define geo-zones and set dynamic pricing rules per area or time slot." },
        { icon: Bell,           title: "Live Alerts",        desc: "Get instant notifications for cancellations, SOS triggers, and anomalies." },
      ],
    },
  ],

    /* Use cases */
  useCases: {
    heading: "Built for every type of transport business.",
    subtitle: "Whether you run 5 vehicles or 500, the platform adapts to your operation — not the other way around.",
    items: [
      {
        icon: Car,
        title: "Taxi & Ride-Hailing",
        desc: "On-demand booking with surge pricing, driver matching, and passenger tracking.",
        points: ["Metered or fixed-fare rides", "Surge pricing zones", "Multi-car types"],
      },
      {
        icon: Briefcase,
        title: "Chauffeur & Corporate",
        desc: "Pre-scheduled bookings, corporate accounts, and executive-grade passenger experience.",
        points: ["Pre-booking up to 60 days", "Corporate billing & invoicing", "Flight tracking integration"],
      },
      {
        icon: Bus,
        title: "Shuttle & School Transport",
        desc: "Fixed-route scheduling, stop management, and real-time tracking for group travel.",
        points: ["Route & stop management", "Parent or employee tracking", "Capacity management"],
      },
      {
        icon: Truck,
        title: "Freight & Logistics",
        desc: "Multi-stop dispatch, driver payroll, and proof-of-delivery for goods transport.",
        points: ["Multi-stop route planning", "POD with signature capture", "Driver payroll integration"],
      },
    ],
  },

    /* FAQ */
  faqHeading: "Questions about your transport build",
  faqSubtitle: "For fleet operators, chauffeur companies, and transport startups evaluating a custom build.",
  faqs: [
    {
      q: "How long does a transport or fleet app take to build?",
      a: "A full passenger + driver + admin system typically takes 8–12 weeks. A simpler dispatch-only tool can ship in 4–6 weeks. We scope before we quote so you always know exactly what you're committing to.",
    },
    {
      q: "Can you integrate with our existing dispatch or booking system?",
      a: "Yes. We build API bridges to most legacy dispatch systems. If your current system has no API, we handle data migration cleanly into the new platform with no data loss.",
    },
    {
      q: "Do you support multiple vehicle types — chauffeur, taxi, and shuttle?",
      a: "Absolutely. Pricing rules, booking flows, and driver assignment logic are all configurable per vehicle class. Adding a new vehicle type is a configuration change, not a rebuild.",
    },
    {
      q: "Will the app be available on both iOS and Android?",
      a: "Yes. We build using React Native for cross-platform delivery — one codebase, both stores. Passenger and driver apps are submitted to the App Store and Google Play as part of the launch.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. You receive full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and releases.",
    },
  ],

  /* CTA */
  ctaIcon:    Car,
  ctaLabel:   "Transport & Mobility",
  ctaHeading: "Ready to modernise your fleet operations?",
  ctaSub:     "Tell us how your fleet works today. We'll design the system that fixes the gaps — fixed price, fixed timeline.",
};

export default function TransportIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
