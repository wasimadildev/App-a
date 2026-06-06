"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import FadeUp from "@/components/ui/FadeUp";

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#0E0E1A] overflow-hidden">
      {/* Friends watching sports background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 sm:opacity-20">
        <Image
          src="/images/friends-wating-sports.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E1A] via-transparent to-[#0E0E1A] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            StreamVault Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-[#F59E0B] text-lg">★★★★★</span>
            <span className="text-white font-semibold">Excellent</span>
            <span className="text-[#94A3B8]">&middot;</span>
            <span className="text-[#94A3B8]">4.9 / 5</span>
          </div>
        </FadeUp>
      </div>

      {/* Row 1 - scroll left */}
      <div className="relative z-10 flex overflow-hidden mb-6">
        <div className="flex gap-4 animate-marquee-left">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-[#080810] border border-white/[0.06] rounded-2xl p-5 w-72 flex-shrink-0"
            >
              <div className="flex text-[#F59E0B] text-sm mb-3">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[#475569]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative z-10 flex overflow-hidden">
        <div className="flex gap-4 animate-marquee-right">
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <div
              key={`rev-${t.name}-${i}`}
              className="bg-[#080810] border border-white/[0.06] rounded-2xl p-5 w-72 flex-shrink-0"
            >
              <div className="flex text-[#F59E0B] text-sm mb-3">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[#475569]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
