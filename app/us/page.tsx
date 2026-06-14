"use client";

import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/layout/CursorGlow";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import dynamic from "next/dynamic";

const LogoBar = dynamic(() => import("@/components/sections/LogoBar"), { ssr: false });
const Features = dynamic(() => import("@/components/sections/Features"), { ssr: false });
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: false });
const Sports = dynamic(() => import("@/components/sections/Sports"), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: false });

import { heroContent } from "@/lib/content";

export default function USHome() {
  return (
    <>
      <JsonLd />
      <CursorGlow />
      <Navbar />
      <main>
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#080810] pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white">
              Cut the Cord. <br />
              <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
                Stream Everything.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
              {heroContent.us.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="https://wa.me/447380600578"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-[1.02]"
              >
                Start Free IPTV Trial
              </a>
              <a
                href="https://wa.me/447380600578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base hover:bg-white/[0.1] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-8">
              Joined by <span className="text-white font-semibold">50,000+</span> streamers worldwide
              <br />
              <span className="text-[#F59E0B]">★★★★★</span>{" "}
              <span className="text-[#F59E0B] font-medium">4.9/5</span>
            </p>
          </div>
        </section>
        <LogoBar />
        <section id="features"><Features /></section>
        <section id="stats"><Stats /></section>
        <section id="sports"><Sports /></section>
        <section id="pricing"><Pricing /></section>
        <section id="reviews"><Testimonials /></section>
        <section id="faq"><FAQ /></section>
        <section id="free-trial"><CTA /></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
