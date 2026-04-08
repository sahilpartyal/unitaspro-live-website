"use client";

import { motion } from "framer-motion";

const WA_URL = "https://wa.me/918264954344?text=Hi%20Unitaspro%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9990] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] transition-shadow duration-300"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.355.627 4.563 1.72 6.468L2.667 29.333l7.053-1.693A13.267 13.267 0 0016 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667z"
          fill="white"
        />
        <path
          d="M22.5 19.792c-.302-.151-1.787-.882-2.065-.983-.277-.1-.479-.151-.68.151-.202.302-.779.983-.956 1.185-.176.201-.352.226-.654.075-.302-.151-1.274-.469-2.427-1.496-.897-.8-1.503-1.787-1.679-2.089-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.378-.025-.528-.075-.151-.68-1.637-.932-2.24-.245-.589-.494-.51-.68-.519l-.578-.01c-.201 0-.528.075-.804.378-.277.302-1.057 1.032-1.057 2.518 0 1.486 1.082 2.921 1.233 3.123.151.201 2.13 3.254 5.162 4.561.721.311 1.284.497 1.722.636.723.23 1.382.197 1.903.12.58-.086 1.787-.73 2.039-1.436.252-.705.252-1.31.176-1.436-.075-.126-.277-.201-.578-.352z"
          fill="#25D366"
        />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#25D366" }}/>
    </motion.a>
  );
}
