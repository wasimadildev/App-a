import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IPTV Blog UK — Guides & Comparisons",
  description:
    "Expert IPTV guides for UK viewers. Learn how to set up IPTV on Firestick, compare IPTV vs satellite TV, and find the best subscription deals for 2026.",
  alternates: {
    canonical: "https://iptvsubscription4k.com/blog",
  },
};

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
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 hover:border-[#7C3AED]/40 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-[10px] uppercase tracking-wider text-[#7C3AED] font-semibold mb-2">
                    {post.category}
                  </span>
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

        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94A3B8]">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
