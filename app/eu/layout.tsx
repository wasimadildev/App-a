import type { Metadata } from "next";
import { siteUrl } from "@/lib/locales";

export const metadata: Metadata = {
  title: {
    default: "Best IPTV Subscription Europe 2026 | 25,000+ Channels | IPTV Subscription 4K EU",
    template: "%s | IPTV Subscription 4K Europe",
  },
  description:
    "IPTV Subscription 4K Europe delivers 25,000+ live channels across the continent in HD & 4K. Premier League, La Liga, Serie A, Bundesliga, international news & local channels. Works on Firestick, Smart TV & more. Free trial.",
  keywords: [
    "best IPTV subscription Europe",
    "IPTV Europe 2026",
    "IPTV EU",
    "IPTV Premier League Europe",
    "IPTV European channels",
    "4K IPTV Europe",
    "IPTV for expats",
    "IPTV international channels",
  ],
  alternates: {
    canonical: `${siteUrl}/eu`,
    languages: {
      en: `${siteUrl}/eu`,
      "en-gb": siteUrl,
      "en-us": `${siteUrl}/us`,
      "nl-nl": `${siteUrl}/nl`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${siteUrl}/eu`,
    siteName: "IPTV Subscription 4K Europe",
    title: "Best IPTV Subscription Europe 2026 | 25,000+ Channels | IPTV Subscription 4K",
    description:
      "Stream 25,000+ live channels from across Europe in HD & 4K. Premier League, La Liga, Serie A, Bundesliga, news & movies. Works on Firestick, Smart TV & more.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "IPTV Subscription 4K Europe",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Subscription Europe 2026 | IPTV Subscription 4K EU",
    description:
      "25,000+ channels from across Europe. 4K quality. Free trial.",
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

export default function EULayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
