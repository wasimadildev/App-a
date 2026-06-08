import type { Metadata } from "next";
import { siteUrl } from "@/lib/locales";

export const metadata: Metadata = {
  title: {
    default: "Best IPTV Subscription USA 2026 | 20,000+ Channels | IPTV Subscription 4K US",
    template: "%s | IPTV Subscription 4K US",
  },
  description:
    "IPTV Subscription 4K US is America's premium IPTV service. Stream 20,000+ live channels including ESPN, FOX Sports, NFL, NBA, MLB & 4K content on Firestick, Smart TV & more. Free trial. 99.9% uptime.",
  keywords: [
    "best IPTV subscription USA",
    "IPTV US 2026",
    "IPTV firestick USA",
    "IPTV NFL",
    "IPTV sports US",
    "streaming without cable",
    "cut the cord IPTV",
    "4K IPTV US",
  ],
  alternates: {
    canonical: `${siteUrl}/us`,
    languages: {
      "en-us": `${siteUrl}/us`,
      "en-gb": siteUrl,
      "x-default": siteUrl,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Subscription USA 2026 | IPTV Subscription 4K US",
    description:
      "20,000+ channels. 4K quality. 99.9% uptime. Cut the cord today.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/us`,
    siteName: "IPTV Subscription 4K US",
    title: "Best IPTV Subscription USA 2026 | 20,000+ Channels | IPTV Subscription 4K",
    description:
      "Cut the cord and stream 20,000+ live channels in HD & 4K. ESPN, FOX Sports, NFL, NBA, MLB, movies & more.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "IPTV Subscription 4K US",
        type: "image/jpeg",
      },
    ],
  },
};

export default function USLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
