import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const links = [
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About",     href: "/about" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

const social = [
  { label: "LinkedIn",  href: siteConfig.social.linkedin,  Icon: Linkedin  },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
  { label: "Twitter",   href: siteConfig.social.twitter,   Icon: Twitter   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1E] text-white border-t border-white/[0.06]">

      {/* Nav row */}
      <div className="container-main py-8 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="inline-flex items-center shrink-0">
            <Image src="/unitaspro-logo.png" alt="Unitaspro" width={130} height={36} className="h-8 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {links.map(l => (
              <Link key={l.label} href={l.href}
                className="text-slate-500 text-sm hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {social.map(({ label, href, Icon }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-slate-600 hover:text-white hover:border-white/20 transition-all">
                <Icon size={13}/>
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-main py-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-slate-700">© {year} Unitaspro. All rights reserved.</span>
          <span className="text-xs text-slate-700">Mohali, India · Serving globally</span>
        </div>
      </div>

    </footer>
  );
}
