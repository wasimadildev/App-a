"use client";

import { motion } from "framer-motion";
import {
  Tv, Zap, Monitor, Smartphone, Tablet,
  Film, Play,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import StaggerChildren from "@/components/ui/StaggerChildren";
import GlassCard from "@/components/ui/GlassCard";

const qualityBadges = [
  { label: "HD", gradient: "from-[#7C3AED] to-[#C084FC]" },
  { label: "Full HD", gradient: "from-[#EC4899] to-[#F472B6]" },
  { label: "4K", gradient: "from-[#06B6D4] to-[#67E8F9]" },
  { label: "8K Ready", gradient: "from-[#7C3AED] to-[#06B6D4]" },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 border border-[#7C3AED]/30 bg-[#7C3AED]/10 rounded-full px-4 py-1 text-xs text-[#C084FC] mb-4">
            Key Features of StreamVault IPTV
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            <span className="text-white">Key Features of</span>
            <br />
            <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
              StreamVault IPTV
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg mt-4 max-w-xl mx-auto">
            No compromises on quality, speed, or reliability for your IPTV
            Firestick UK service.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {/* 28,000+ Channels */}
          <GlassCard className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center mb-4">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                28,000+ Live TV Channels UK
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Access every major UK channel plus international IPTV content.
                Sky Sports, BBC, ITV, Channel 4, BT Sport and thousands more —
                all included.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-2">
              {[
                "SKY", "BBC", "ITV",
                "CH4", "DAZN", "TNT",
              ].map((ch, i) => (
                <motion.div
                  key={ch}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className={`rounded-lg flex items-center justify-center text-[9px] font-bold border border-white/[0.06] ${
                    [
                      "bg-[#7C3AED]/20 text-[#C084FC]",
                      "bg-[#EC4899]/20 text-[#F472B6]",
                      "bg-[#06B6D4]/20 text-[#67E8F9]",
                      "bg-[#7C3AED]/15 text-[#C084FC]",
                      "bg-[#EC4899]/15 text-[#F472B6]",
                      "bg-[#06B6D4]/15 text-[#67E8F9]",
                    ][i]
                  }`}
                >
                  {ch}
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Instant Activation */}
          <GlassCard className="flex flex-col justify-center items-center md:items-start">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center mb-4 shadow-lg shadow-[#7C3AED]/30"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-1">
              Instant Activation
            </h3>
            <p className="text-[#7C3AED] text-sm font-medium mb-1">
              Live in 2 minutes
            </p>
            <p className="text-xs text-[#94A3B8]">
              Instant account setup, no waiting. Quick IPTV Firestick UK setup.
            </p>
          </GlassCard>

          {/* 99.9% Uptime */}
          <GlassCard className="flex flex-col justify-end">
            <div className="flex items-end gap-1.5 mb-4 h-20">
              {[40, 65, 85, 55, 95, 70, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className={`flex-1 rounded-t-sm ${
                    i === 4
                      ? "bg-gradient-to-t from-[#7C3AED] to-[#C084FC]"
                      : "bg-gradient-to-t from-[#7C3AED]/40 to-[#C084FC]/30"
                  }`}
                />
              ))}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              99.9% Uptime
            </h3>
            <p className="text-xs text-[#94A3B8]">
              UK-based servers with anti-freeze technology for buffer-free streaming.
            </p>
          </GlassCard>

          {/* 4K Ultra HD IPTV Streaming */}
          <GlassCard className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                4K Ultra HD IPTV Streaming
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">
                Our IPTV UK service delivers crystal-clear 4K and Full HD
                streams with zero buffering using our anti-freeze technology.
              </p>
              <div className="flex flex-wrap gap-2">
                {qualityBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`bg-gradient-to-r ${badge.gradient} text-white text-[10px] font-bold px-3 py-1 rounded-full`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-[#080810] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-center">
              <div className="relative">
                <div
                  className="aspect-video bg-[#0E0E1A] rounded-lg flex items-center justify-center border border-white/[0.04]"
                  role="img"
                  aria-label="StreamVault 4K IPTV UK streaming demo player"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.1] flex items-center justify-center hover:bg-white/[0.15] transition-all cursor-pointer">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                    4K
                  </span>
                </div>
                <div className="mt-2 w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "62%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] text-[#475569]">0:00</span>
                  <span className="text-[8px] text-[#475569]">1:24:15</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* All Device Support — IPTV for Firestick & More */}
          <GlassCard className="md:col-span-3 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                IPTV for Amazon Firestick UK
              </h3>
              <p className="text-sm text-[#94A3B8]">
                Our IPTV Firestick UK setup takes under 2 minutes. Works on all
                Firestick models including 4K Max. One subscription. Every screen
                you own.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              {[
                { icon: Tv, label: "Smart TV" },
                { icon: Smartphone, label: "Phone" },
                { icon: Monitor, label: "PC" },
                { icon: Tablet, label: "Tablet" },
                { icon: Film, label: "Firestick" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C084FC]" />
                    </div>
                    <span className="text-[10px] text-[#94A3B8]">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </StaggerChildren>
      </div>
    </section>
  );
}
