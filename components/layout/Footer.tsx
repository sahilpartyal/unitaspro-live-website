import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const services = [
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "Software Development",     href: "/services/software-development" },
  { label: "Mobile App Development",   href: "/services/mobile-app" },
  { label: "Digital Marketing",        href: "/services/digital-marketing" },
];

const industries = [
  { label: "Transport & Mobility",  href: "/industries/transport" },
  { label: "Finance & Fintech",     href: "/industries/finance" },
  { label: "Healthcare",            href: "/industries/healthcare" },
  { label: "E-Commerce",            href: "/industries/ecommerce" },
  { label: "Real Estate",           href: "/industries/real-estate" },
  { label: "Hospitality",           href: "/industries/hospitality" },
  { label: "Logistics",             href: "/industries/logistics" },
  { label: "Startups & SaaS",       href: "/industries/startups" },
];

const company = [
  { label: "About Us",  href: "/about" },
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

      {/* Main footer grid */}
      <div className="container-main py-14 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5">
              <Image src="/unitaspro-logo.png" alt="Unitaspro" width={130} height={36} className="h-8 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </Link>
            <p className="text-sm text-[#6B7180] leading-relaxed mb-6 max-w-[240px]">
              Custom software, mobile apps, and web platforms — built fixed-price, delivered in weeks.
            </p>
            <div className="flex items-center gap-2">
              {social.map(({ label, href, Icon }) => (
                <Link key={label} href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer" aria-label={label}
                  scroll={false}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#6B7180] hover:text-white hover:border-white/20 transition-all">
                  <Icon size={13}/>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {services.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#6B7180] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-4">Industries</p>
            <ul className="flex flex-col gap-2.5">
              {industries.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#6B7180] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {company.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#6B7180] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-[#6B7180] leading-relaxed">
                E 279, Industrial Area, Sector 75<br/>
                Sahibzada Ajit Singh Nagar, Punjab 160055<br/>
                Serving clients globally
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-main py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-[#9CA3AF]">© {year} Unitaspro. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
