"use client";

import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080810]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#7C3AED]/20 blur-[180px] pointer-events-none" />

      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="text-white">Start Your Free</span>
            <br />
            <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
              IPTV Trial Today
            </span>
          </h2>
          <p className="text-lg text-[#94A3B8] mt-6 max-w-xl mx-auto">
            Join 50,000+ UK households already watching with IPTV Subscription 4K —
            the best IPTV subscription UK has to offer. No credit card
            required for your free trial.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-10">
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] text-sm"
          >
            Start Free IPTV Trial
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="text-xs text-[#475569] mt-4">
            No credit card required &middot; Cancel anytime &middot; Setup in 2
            minutes &middot; 4K IPTV UK included
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
