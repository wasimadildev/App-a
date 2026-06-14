"use client";

import { motion } from "framer-motion"; 
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const blobVariants = {
  animate1: {
    x: [0, 60, -30, 40, 0],
    y: [0, -40, 50, -20, 0],
    scale: [1, 1.05, 0.95, 1.02, 1],
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" as const },
  },
  animate2: {
    x: [0, -50, 40, -30, 0],
    y: [0, 30, -60, 20, 0],
    scale: [1, 0.95, 1.05, 0.98, 1],
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" as const },
  },
  animate3: {
    x: [0, 40, -50, 30, 0],
    y: [0, -30, 40, -50, 0],
    scale: [1, 1.02, 0.98, 1.04, 1],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#080810] pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <Image
          src="/images/hero-bg-texture.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
      </div>
      {/* Animated gradient blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate1"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#7C3AED]/25 blur-[80px] sm:blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={blobVariants}
        animate="animate2"
        className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#EC4899]/15 blur-[100px] sm:blur-[160px] pointer-events-none"
      />
      <motion.div
        variants={blobVariants}
        animate="animate3"
        className="absolute top-1/3 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#06B6D4]/10 blur-[80px] sm:blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Announcement pill */}
        <motion.a
          href="#channels"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group inline-flex items-center gap-1.5 sm:gap-2 border border-[#7C3AED]/50 bg-[#7C3AED]/10 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs text-[#C084FC] hover:bg-[#7C3AED]/20 transition-all cursor-pointer mb-4 sm:mb-6"
        >
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="hidden xs:inline">Now with 28,000+ channels &middot; EPG guide included</span>
          <span className="xs:hidden">28,000+ channels</span>
        </motion.a>

        {/* Visible headline — H1 with primary keyword */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
        >
          <span className="text-white">Stream Without</span>
          <br />
          <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
            Limits.
          </span>
        </motion.h1>

        {/* Subheadline with keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-0 sm:px-2"
        >
          IPTV Subscription 4K is the UK&apos;s best IPTV subscription service, delivering
          28,000+ live channels in Full HD and 4K Ultra HD quality. Stream Sky
          Sports, BT Sport, Premier League, movies, and 150+ international
          channels on your Firestick, Smart TV, or any device. 99.9% uptime.
          Zero buffering. Cancel anytime.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 active:scale-[0.98]"
          >
            Start Free IPTV Trial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all active:scale-[0.98]"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-8 sm:mt-10"
        >
          <div className="flex">
            {[
              "james-thompson-iptv",
              "sarah-kennedy-iptv",
              "mohammed-ali-iptv",
              "claire-buchanan-iptv",
              "ryan-obrien-iptv",
            ].map((seed) => (
              <Image
                key={seed}
                src={`https://i.pravatar.cc/150?u=${seed}`}
                alt=""
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#080810] object-cover -ml-1.5 first:ml-0"
              />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Joined by <span className="text-white font-semibold">50,000+</span> streamers across the UK
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
              <div className="flex text-[#F59E0B] text-xs sm:text-sm">
                {"★★★★★"}
              </div>
              <span className="text-[#F59E0B] text-xs sm:text-sm font-medium">4.9/5</span>
            </div>
          </div>
        </motion.div>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 sm:mt-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.15)] sm:shadow-[0_0_80px_rgba(124,58,237,0.2)] max-w-5xl mx-auto border border-white/[0.08]"
        >
          <Image
            src="/images/banner.png"
            alt="IPTV Subscription 4K IPTV - 28000+ live channels on UK streaming service"
            width={1729}
            height={910}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
