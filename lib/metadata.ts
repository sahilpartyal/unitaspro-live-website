import type { Metadata } from "next";

export const siteConfig = {
  name: "Unitaspro",
  tagline: "We Build Software That Grows Your Business",
  description:
    "Unitaspro is a leading IT services company based in Mohali, India. We specialize in web design, custom software development, mobile app development, and digital marketing for businesses worldwide.",
  url: "https://unitaspro.com",
  email: "info@unitaspro.com",
  phone: "+91 82649 54344",
  address: "E 279, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055, India",
  city: "Mohali",
  country: "India",
  social: {
    linkedin: "https://linkedin.com/company/unitaspro",
    instagram: "https://instagram.com/unitaspro",
    twitter: "https://twitter.com/unitaspro",
  },
};

export function buildMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path = "/", noIndex = false } = options;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const metaDesc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: metaDesc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: metaDesc,
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [`${siteConfig.url}/og-image.png`],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "E 279, Industrial Area, Sector 75",
    addressLocality: "Sahibzada Ajit Singh Nagar",
    addressRegion: "Punjab",
    postalCode: "160055",
    addressCountry: "IN",
  },
  sameAs: Object.values(siteConfig.social),
};
