import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Free IPTV Trial UK | 24-Hour Trial — No Credit Card Required",
  description:
    "Start your free IPTV trial UK with StreamVault. Enjoy 28,000+ live channels including Sky Sports and 4K content for 24 hours. No credit card needed. Setup in 2 minutes.",
  openGraph: {
    title: "Free IPTV Trial UK | StreamVault",
    description:
      "Try the best IPTV subscription UK free for 24 hours. 28,000+ channels, 4K quality, zero commitment.",
  },
};

export default function FreeTrialPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">Free IPTV Trial</span>
        </nav>
      </div>
      <section className="py-16 bg-[#080810]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Start Your Free IPTV Trial UK
          </h1>
          <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
            Want to try the best IPTV subscription UK has to offer before you
            buy? StreamVault gives you a full 24-hour free trial with{" "}
            <strong className="text-white">unlimited access</strong> to all
            28,000+ channels, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-left">
            {[
              "Sky Sports in 4K",
              "BT Sport HD",
              "Premier League Football",
              "All UK Freeview Channels",
              "Movies & VOD Library",
              "International Content",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#0E0E1A] border border-white/[0.06] rounded-xl p-4 text-sm text-[#94A3B8] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                {item}
              </div>
            ))}
          </div>
          <div className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">
              How to Claim Your Free IPTV Trial
            </h2>
            <ol className="text-left text-[#94A3B8] text-sm space-y-3 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#7C3AED]/20 text-[#C084FC] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                Enter your email in the form below
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#7C3AED]/20 text-[#C084FC] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                Create your account (takes 30 seconds)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#7C3AED]/20 text-[#C084FC] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                Install on your Firestick or device via our setup guide
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#7C3AED]/20 text-[#C084FC] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  4
                </span>
                Start streaming 28,000+ channels instantly
              </li>
            </ol>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
