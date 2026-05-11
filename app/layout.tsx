import type { Metadata } from "next";
import "./globals.css";
import { organizationSchema, webSiteSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    default: "Unitaspro — Custom Software & App Development",
    template: "%s | Unitaspro",
  },
  description:
    "Unitaspro is a leading IT services company in Mohali, India. Web design, software development, mobile apps, and digital marketing for businesses worldwide.",
  metadataBase: new URL("https://unitaspro.com"),
  authors: [{ name: "Unitaspro" }],
  creator: "Unitaspro",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Unitaspro",
    images: [{ url: "https://unitaspro.com/og-image.png", width: 1200, height: 630, alt: "Unitaspro" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://unitaspro.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "32x32",   type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700;1,9..144,900&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
