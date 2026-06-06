import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "IPTV Plans & Pricing UK 2026 | Starting from £9/month",
  description:
    "Compare cheap IPTV subscription UK plans from StreamVault. Starter £9/mo, Pro £19/mo (4K), Unlimited £29/mo. Save 40% with yearly. Free trial included.",
  openGraph: {
    title: "IPTV Plans & Pricing UK 2026 | StreamVault",
    description:
      "Compare the best IPTV subscription UK plans. 28,000+ channels, 4K quality, 99.9% uptime. From just £9/month.",
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
      <Pricing />
    </main>
  );
}
