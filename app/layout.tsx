import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { locales, localeConfig, siteUrl } from "@/lib/locales";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Best IPTV Subscription UK 2026 | 28,000+ Channels | IPTV Subscription 4K",
    template: "%s | IPTV Subscription 4K",
  },
  description:
    "IPTV Subscription 4K is the UK's #1 IPTV subscription service. Stream 28,000+ live channels including Sky Sports, BT Sport & 4K content on any device. Free trial available. 99.9% uptime guaranteed.",
  keywords: [
    "best IPTV subscription UK",
    "IPTV UK 2026",
    "buy IPTV UK",
    "IPTV Firestick UK",
    "cheap IPTV UK",
    "4K IPTV UK",
    "UK IPTV provider",
    "IPTV Sky Sports UK",
    "IPTV 28000 channels",
    "IPTV Subscription 4K",
  ],
  alternates: {
    canonical: siteUrl,
    languages: Object.fromEntries(
      locales.map((l) => [localeConfig[l].hrefLang, `${siteUrl}${localeConfig[l].path}`])
    ),
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "IPTV Subscription 4K",
    title:
      "Best IPTV Subscription UK 2026 | 28,000+ Channels | IPTV Subscription 4K",
    description:
      "Stream 28,000+ live channels in HD & 4K. Sky Sports, BT Sport, Movies, Kids & International channels. Works on Firestick, Smart TV, iOS & Android. Start free trial.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "IPTV Subscription 4K — Best IPTV Subscription UK 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iptvsub4k",
    creator: "@iptvsub4k",
    title: "Best IPTV Subscription UK 2026 | IPTV Subscription 4K",
    description:
      "28,000+ channels. 4K quality. 99.9% uptime. Start your free trial today.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  applicationName: "IPTV Subscription 4K",
  category: "Streaming Service",
  creator: "IPTV Subscription 4K",
  publisher: "IPTV Subscription 4K UK",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-48x48.png",
  },
  other: {
    "hreflang-en-gb": siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`}>
      <head>
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={localeConfig[l].hrefLang}
            href={`${siteUrl}${localeConfig[l].path}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
      <body className="min-h-screen flex flex-col noise-bg">{children}</body>
    </html>
  );
}
