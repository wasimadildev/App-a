import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "IPTV Plans & Pricing UK 2026 | Starting from £15",
  description:
    "Choose from IPTV Subscription 4K plans: Basic £15/mo, Standard £35/6mo, Premium £49/yr. 40,000+ channels, 4K quality, VOD library.",
  alternates: {
    canonical: "https://www.iptvsubscription4k.com/pricing",
  },
  openGraph: {
    title: "IPTV Plans & Pricing UK 2026 | IPTV Subscription 4K",
    description:
      "Compare the best IPTV subscription UK plans. 40,000+ channels, 4K quality, 99.9% uptime. From just £15.",
  },
};

export default function PricingPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">IPTV Pricing</span>
        </nav>
      </div>
      <section aria-labelledby="pricing-heading">
        <h1 id="pricing-heading" className="sr-only">
          IPTV Plans & Pricing UK 2026 — Starting from £15/month
        </h1>
        <Pricing />
      </section>
    </main>
  );
}
