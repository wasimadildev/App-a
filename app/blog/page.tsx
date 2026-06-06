import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Blog UK | IPTV Subscription 4K — Guides & Comparisons",
  description:
    "Expert IPTV guides for UK viewers. Learn how to set up IPTV on Firestick, compare IPTV vs satellite TV, and find the best subscription deals for 2026.",
};

const posts = [
  {
    slug: "best-iptv-firestick-uk-2026",
    title: "Best IPTV for Firestick UK 2026 — Complete Setup Guide",
    description:
      "Step-by-step guide to installing and using the best IPTV for Firestick UK. Compare providers, setup methods, and get the most from your Firestick.",
    date: "15 May 2026",
    readTime: "8 min read",
  },
  {
    slug: "iptv-vs-satellite-tv-uk",
    title: "IPTV vs Satellite TV in the UK — Which is Better in 2026?",
    description:
      "IPTV vs Sky TV UK — we compare costs, channel selection, quality, and flexibility. See why thousands are switching to IPTV in 2026.",
    date: "10 May 2026",
    readTime: "6 min read",
  },
  {
    slug: "watch-sky-sports-without-subscription",
    title: "How to Watch Sky Sports Without a Subscription in the UK",
    description:
      "Legal ways to watch Sky Sports cheap UK. IPTV alternatives that include all Premier League, F1, and UFC coverage without expensive contracts.",
    date: "5 May 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">IPTV Blog UK</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            IPTV Blog UK
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Expert guides, comparisons, and tips for UK IPTV viewers. Learn how
            to choose the best IPTV subscription UK has to offer and get the
            most from your streaming setup.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 hover:border-[#7C3AED]/40 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#C084FC] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#94A3B8] mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#475569]">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#475569] group-hover:text-[#C084FC] transition-colors shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
