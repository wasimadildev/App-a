import type { Metadata } from "next";
import { siteUrl } from "@/lib/locales";

export const metadata: Metadata = {
  title: {
    default: "Beste IPTV Abonnement Nederland 2026 | 25.000+ Zenders | IPTV Subscription 4K NL",
    template: "%s | IPTV Subscription 4K Nederland",
  },
  description:
    "IPTV Subscription 4K Nederland is de beste IPTV dienst van Nederland. Stream 25.000+ live zenders inclusief ESPN, Ziggo Sport, NPO, RTL & 4K content op Firestick, Smart TV en meer. Gratis proefperiode. 99.9% uptime.",
  keywords: [
    "beste IPTV abonnement Nederland",
    "IPTV Nederland 2026",
    "IPTV firestick Nederland",
    "IPTV nederlands",
    "IPTV Eredivisie",
    "IPTV Ziggo",
    "goedkope IPTV Nederland",
    "4K IPTV Nederland",
  ],
  alternates: {
    canonical: `${siteUrl}/nl`,
    languages: {
      "nl-nl": `${siteUrl}/nl`,
      "en-gb": siteUrl,
      "en-us": `${siteUrl}/us`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: `${siteUrl}/nl`,
    siteName: "IPTV Subscription 4K Nederland",
    title: "Beste IPTV Abonnement Nederland 2026 | 25.000+ Zenders | IPTV Subscription 4K",
    description:
      "Stream 25.000+ live zenders in HD & 4K. ESPN, Ziggo Sport, NPO, RTL, films & internationale zenders. Werkt op Firestick, Smart TV, iOS & Android.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "IPTV Subscription 4K Nederland",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste IPTV Abonnement Nederland 2026 | IPTV Subscription 4K NL",
    description:
      "25.000+ zenders. 4K kwaliteit. 99.9% uptime. Probeer gratis.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function NLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
