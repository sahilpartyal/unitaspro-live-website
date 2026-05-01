"use client";

import IndustryPageTemplate, { type IndustryPageData } from "./IndustryPageTemplate";
import {
  Hotel, Calendar, Star, MapPin, Bell, Users, BarChart3, CreditCard, Utensils, Shield, MessageSquare, Zap, FileText, Smartphone, Globe, Code2, BookOpen, HeadphonesIcon, Building2, UtensilsCrossed, Wine, Palmtree,
} from "lucide-react";

const data: IndustryPageData = {
  /* Hero */
  heroEyebrow: "Hotel PMS, booking engines & guest experience apps",
  heroHeadingLight: "Hospitality software that",
  heroHeadingBold: "fills rooms and delights guests.",
  heroHighlights: [
    { icon: Hotel,    title: "Property Management",  desc: "Reservations, housekeeping & front desk in one system" },
    { icon: Calendar, title: "Direct Booking Engine", desc: "Commission-free reservations from your own website"   },
    { icon: Star,     title: "Guest Experience",      desc: "Pre-arrival, in-stay, and post-stay engagement flows" },
  ],

  /* Problem & Solution */
  problemSectionLight: "OTA commissions and disconnected tools",
  problemSectionBold:  "are costing you margin.",
  problemSubtitle:     "Four problems we solve for every hospitality business we work with.",
  problems: [
    {
      problem:  "Over-reliance on OTAs means paying 15–25% commission on every booking",
      solution: "A branded direct booking engine with real-time availability, best-rate guarantee, and seamless payment captures direct revenue — commission free.",
    },
    {
      problem:  "Front desk, housekeeping, and F&B managed in separate tools with no sync",
      solution: "Unified Property Management System connects reservations, room status, F&B orders, and billing so every department works from one source of truth.",
    },
    {
      problem:  "Guests have no way to communicate requests or preferences before arrival",
      solution: "Pre-arrival guest app lets guests share preferences, request early check-in, order room service, and communicate with the hotel before they arrive.",
    },
    {
      problem:  "No data on which channels, packages, or room types are most profitable",
      solution: "Revenue management dashboard tracks ADR, RevPAR, channel contribution, and package performance — giving you the data to price and promote intelligently.",
    },
  ],

  beforeAfter: {
    heading: "Before vs after Unitaspro.",
    without: {
      subtitle: "OTA commissions, no direct bookings, and scattered guest data.",
      points: [
        "Paying 15-25% commission on every OTA booking",
        "No direct booking channel for returning guests",
        "Guest preferences lost between visits",
        "Housekeeping and front desk on different systems",
      ],
    },
    with: {
      subtitle: "One platform for bookings, guest experience, and operations.",
      points: [
        "Direct booking engine with zero commission",
        "Guest profiles with preferences and history",
        "Integrated PMS, housekeeping, and front desk",
        "Revenue management with dynamic pricing",
      ],
    },
  },

  /* Features */
  featuresHeading: "Everything modern hospitality operations need.",
  features: [
    { icon: Calendar,     title: "Reservation Management", desc: "Real-time availability, group bookings, and room upgrades." },
    { icon: CreditCard,   title: "Payment & Billing",      desc: "Pre-authorisation, split bills, and folio management."     },
    { icon: Utensils,     title: "F&B Integration",        desc: "In-room dining, restaurant POS, and mini-bar billing."     },
    { icon: BarChart3,    title: "Revenue Analytics",      desc: "ADR, occupancy, RevPAR, and channel performance reports." },
    { icon: Bell,         title: "Guest Messaging",        desc: "WhatsApp and in-app messaging for every stay request."     },
    { icon: Star,         title: "Reviews & Loyalty",      desc: "Post-stay feedback, rewards points, and return guest perks."},
    { icon: MapPin,       title: "Concierge & Activities", desc: "Local experiences, transport, and spa booking in-app."     },
    { icon: Shield,       title: "Housekeeping Module",    desc: "Room status, task assignment, and inspection checklists."  },
  ],

  /* Panels */
  panelHeading: "Three systems. One hospitality platform.",
  panels: [
    {
      label: "Guest App",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=900&q=80",
      features: [
        { icon: CreditCard,    title: "Direct Booking",    desc: "Book rooms directly with a best-rate guarantee and zero OTA commission." },
        { icon: Smartphone,    title: "Digital Check-In",  desc: "Check in from your phone and unlock your room with a mobile key." },
        { icon: Utensils,      title: "In-App Orders",     desc: "Order room service, book spa sessions, and reserve activities in one tap." },
        { icon: MessageSquare, title: "Live Chat",         desc: "Chat with the front desk any time of day without picking up the phone." },
        { icon: Star,          title: "Loyalty Rewards",   desc: "Leave post-stay reviews and earn loyalty points for every booking." },
        { icon: Bell,          title: "Smart Alerts",      desc: "Receive push notifications for booking confirmations, upgrades, and stay updates." },
      ],
    },
    {
      label: "Staff Operations",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
      type: "desktop" as const,
      features: [
        { icon: Calendar, title: "Room Assignments",    desc: "View all reservations and assign rooms from a single real-time dashboard." },
        { icon: Shield,   title: "Housekeeping Board",  desc: "Track room status, assign cleaning tasks, and run inspection checklists." },
        { icon: Utensils, title: "Kitchen Display",     desc: "Route F&B order tickets to the kitchen display for faster turnaround." },
        { icon: Bell,     title: "Request Tracking",    desc: "Track every guest request with automatic escalation for overdue items." },
        { icon: FileText, title: "Shift Handover",      desc: "Log handover notes and alerts so the next shift picks up without gaps." },
        { icon: BarChart3, title: "Staff Analytics",    desc: "Monitor staff productivity, task completion rates, and response times." },
      ],
    },
    {
      label: "Management Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      type: "desktop" as const,
      features: [
        { icon: BarChart3, title: "Revenue Overview",    desc: "See live occupancy, ADR, and RevPAR metrics at a glance." },
        { icon: Globe,     title: "Channel Insights",    desc: "Compare channel performance and manage rates across every distribution source." },
        { icon: Star,      title: "Guest Scores",        desc: "Track guest satisfaction scores and spot experience trends over time." },
        { icon: Users,     title: "Team Performance",    desc: "Measure staff productivity and task completion across departments." },
        { icon: FileText,  title: "Financial Reports",   desc: "Generate monthly and year-to-date financial reports with one click." },
        { icon: Zap,       title: "Dynamic Pricing",     desc: "Optimise room rates automatically based on demand, season, and competitor data." },
      ],
    },
  ],

    /* Use cases */
  useCases: {
    heading: "Built for every type of hospitality business.",
    subtitle: "From boutique hotels to restaurant chains — the platform adapts to your service model.",
    items: [
      {
        icon: Building2,
        title: "Hotels & Resorts",
        desc: "Room booking, guest management, housekeeping, and revenue optimisation for properties of all sizes.",
        points: ["Channel manager integration", "Dynamic room pricing", "Guest experience portal"],
      },
      {
        icon: UtensilsCrossed,
        title: "Restaurants & Cafes",
        desc: "Table booking, online ordering, kitchen display, and delivery management for F&B businesses.",
        points: ["QR menu & ordering", "Kitchen display system", "Delivery fleet integration"],
      },
      {
        icon: Palmtree,
        title: "Tour & Travel",
        desc: "Trip booking, itinerary management, guide assignment, and customer communication tools.",
        points: ["Package builder", "Guide & vehicle assignment", "Traveller app with itinerary"],
      },
      {
        icon: Wine,
        title: "Events & Venues",
        desc: "Venue booking, catering management, guest lists, and event-day coordination platforms.",
        points: ["Venue availability calendar", "Catering & vendor management", "Guest RSVP portal"],
      },
    ],
  },

    /* FAQ */
  faqHeading: "Questions about your hospitality build",
  faqSubtitle: "For hotels, resorts, serviced apartments, and hospitality groups evaluating a custom platform.",
  faqs: [
    {
      q: "How long does a hotel PMS or booking engine take to build?",
      a: "A full PMS + guest app + management dashboard typically takes 8–12 weeks. A focused direct booking engine can ship in 4–5 weeks. We scope before we quote so you know exactly what you're committing to.",
    },
    {
      q: "Can you integrate with existing channel managers and OTAs?",
      a: "Yes. We integrate with SiteMinder, ChannelManager, and all major OTA APIs (Booking.com, Expedia, Airbnb) so your inventory stays in sync across all channels.",
    },
    {
      q: "Can the platform support multiple properties?",
      a: "Absolutely. The system is multi-property from day one — separate dashboards per property with a unified group-level overview for revenue and occupancy management.",
    },
    {
      q: "Do you support digital check-in and mobile room keys?",
      a: "Yes. We build mobile check-in flows with digital room key integration via NFC or QR, reducing front desk queues and improving the guest experience on arrival.",
    },
    {
      q: "Do we get the source code at the end?",
      a: "Yes. Full source code ownership at launch. This is your asset — not a rental. We also offer ongoing maintenance plans if you want us to manage updates and new features.",
    },
  ],

  /* CTA */
  ctaIcon:    Hotel,
  ctaLabel:   "Hospitality & Tourism",
  ctaHeading: "Ready to modernise your hotel operations?",
  ctaSub:     "Tell us how your property operates today. We'll design the platform that reduces OTA dependency and improves guest satisfaction — fixed price, fixed timeline.",
};

export default function HospitalityIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
