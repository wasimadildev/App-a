"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Undo2, CreditCard, Star } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import FadeUp from "@/components/ui/FadeUp";
import StaggerChildren, { fadeUpItem } from "@/components/ui/StaggerChildren";

export default function Pricing() {
  return (
    <section className="py-24 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <span className="inline-flex items-center gap-2 border border-[#7C3AED]/30 bg-[#7C3AED]/10 rounded-full px-4 py-1 text-xs text-[#C084FC] mb-4">
            IPTV Plans &amp; Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
              IPTV Plans &amp; Pricing — Starting from £15
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg mt-4 max-w-2xl mx-auto">
            Our IPTV subscription UK plans are designed to fit every budget.
            Whether you want a cheap IPTV subscription UK for casual viewing or
            a premium 4K IPTV UK package for the whole family — we have you
            covered. Prices shown in GBP (£) &middot; VAT included.
          </p>
        </FadeUp>

        <StaggerChildren
          staggerDelay={0.12}
          delay={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUpItem}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                plan.featured
                  ? "bg-gradient-to-b from-[#14142A] to-[#0E0E1A] border border-[#7C3AED]/50 ring-1 ring-[#7C3AED]/20 ring-offset-2 ring-offset-[#080810] scale-105 md:scale-[1.05]"
                  : "bg-[#0E0E1A] border border-white/[0.08]"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs px-4 py-1 rounded-full font-semibold whitespace-nowrap shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-black ${
                      plan.featured
                        ? "bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    £{plan.monthlyPrice}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/[0.06] pt-6 mb-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-[#94A3B8]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.featured ? (
                <a
                  href="https://wa.me/447380600578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="https://wa.me/447380600578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-white/20 text-white font-semibold py-3 rounded-xl hover:border-[#7C3AED]/60 transition-all"
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Free Trial Card */}
        <FadeUp delay={0.3} className="mt-12">
          <div className="bg-gradient-to-r from-[#7C3AED]/20 via-[#EC4899]/10 to-[#06B6D4]/20 border border-[#7C3AED]/30 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Try IPTV Subscription 4K Free for 24 Hours
            </h3>
            <p className="text-[#94A3B8] text-sm sm:text-base mb-2">
              No credit card required. Full access to all 40,000+ channels, 4K
              content, and VOD library. Experience the best IPTV UK has to offer
              — completely free.
            </p>
            <p className="text-[#475569] text-xs mb-6">
              ⚡ Instant setup &middot; Cancel anytime
            </p>
            <a
              href="https://wa.me/447380600578"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            >
              Start Free Trial on WhatsApp
            </a>
          </div>
        </FadeUp>

        {/* Trust badges */}
        <FadeUp delay={0.45} className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#475569]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Encrypted
            </span>
            <span className="w-px h-3 bg-white/[0.06]" />
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Instant setup
            </span>
            <span className="w-px h-3 bg-white/[0.06]" />
            <span className="flex items-center gap-1.5">
              <Undo2 className="w-3.5 h-3.5" /> Cancel anytime
            </span>
            <span className="w-px h-3 bg-white/[0.06]" />
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" /> Secure payment
            </span>
          </div>
          {/* UK trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
            <span>🇬🇧 UK-Based Support</span>
            <span>🔒 SSL Secured Payments</span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#F59E0B]" /> Rated #1 IPTV UK 2026
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
