"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Search, Tv, Film, Footprints, Gamepad2, Zap } from "lucide-react";

const channelData = [
  { name: "SKY SPORTS", bg: "from-[#7C3AED]/30 to-[#EC4899]/20" },
  { name: "BBC ONE", bg: "from-[#06B6D4]/30 to-[#7C3AED]/20" },
  { name: "NETFLIX", bg: "from-[#EC4899]/30 to-[#06B6D4]/20" },
  { name: "TNT SPORTS", bg: "from-[#7C3AED]/30 to-[#06B6D4]/20" },
  { name: "DISNEY+", bg: "from-[#06B6D4]/30 to-[#EC4899]/20" },
  { name: "SKY NEWS", bg: "from-[#EC4899]/30 to-[#7C3AED]/20" },
  { name: "ITV ONE", bg: "from-[#7C3AED]/30 to-[#EC4899]/20" },
  { name: "CHANNEL 4", bg: "from-[#06B6D4]/30 to-[#7C3AED]/20" },
  { name: "PRIME VID", bg: "from-[#EC4899]/30 to-[#06B6D4]/20" },
  { name: "DAZN", bg: "from-[#7C3AED]/30 to-[#06B6D4]/20" },
  { name: "EUROSPORT", bg: "from-[#06B6D4]/30 to-[#EC4899]/20" },
  { name: "NICK JR", bg: "from-[#EC4899]/30 to-[#7C3AED]/20" },
  { name: "FOX NEWS", bg: "from-[#7C3AED]/30 to-[#EC4899]/20" },
  { name: "HBO", bg: "from-[#06B6D4]/30 to-[#7C3AED]/20" },
  { name: "CNN INT", bg: "from-[#EC4899]/30 to-[#06B6D4]/20" },
  { name: "MTV", bg: "from-[#7C3AED]/30 to-[#06B6D4]/20" },
];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810] pt-24 pb-16">
      <h1 className="sr-only">
        Best IPTV Subscription UK — 28,000+ Channels in 4K
      </h1>

      {/* Animated gradient blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate1"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/25 blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={blobVariants}
        animate="animate2"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EC4899]/15 blur-[160px] pointer-events-none"
      />
      <motion.div
        variants={blobVariants}
        animate="animate3"
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Announcement pill */}
        <motion.a
          href="#channels"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group inline-flex items-center gap-2 border border-[#7C3AED]/50 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 text-xs text-[#C084FC] hover:bg-[#7C3AED]/20 transition-all cursor-pointer mb-6"
        >
          <Sparkles className="w-3 h-3" />
          Now with 28,000+ channels &middot; EPG guide included
        </motion.a>

        {/* Visible headline — styled as brand message, H1 is sr-only above */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          aria-hidden="true"
        >
          <span className="text-white">Stream Without</span>
          <br />
          <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
            Limits.
          </span>
        </motion.p>

        {/* Subheadline with keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mt-6"
        >
          StreamVault is the UK&apos;s best IPTV subscription service, delivering
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
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-4 rounded-2xl text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105"
          >
            Start Free IPTV Trial
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all"
          >
            <Play className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <div className="flex">
            {["JD", "SK", "MA", "CB", "RO"].map((initials, i) => (
              <div
                key={initials}
                className={`w-8 h-8 rounded-full border-2 border-[#080810] flex items-center justify-center text-[9px] font-bold text-white -ml-1.5 first:ml-0 ${
                  [
                    "bg-gradient-to-br from-[#7C3AED] to-[#EC4899]",
                    "bg-gradient-to-br from-[#EC4899] to-[#06B6D4]",
                    "bg-gradient-to-br from-[#06B6D4] to-[#7C3AED]",
                    "bg-gradient-to-br from-[#7C3AED] to-[#F472B6]",
                    "bg-gradient-to-br from-[#F472B6] to-[#06B6D4]",
                  ][i]
                }`}
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-sm text-[#94A3B8]">
              Joined by <span className="text-white font-semibold">50,000+</span> streamers across the UK
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex text-[#F59E0B] text-sm">
                {"★★★★★"}
              </div>
              <span className="text-[#F59E0B] text-sm font-medium">4.9/5</span>
            </div>
          </div>
        </motion.div>

        {/* Product UI mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          role="img"
          aria-label="StreamVault IPTV dashboard showing 28000+ live channels on UK streaming service"
          className="mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.2)] max-w-5xl mx-auto"
        >
          {/* Browser top bar */}
          <div className="h-9 bg-[#0E0E1A] flex items-center px-4 gap-2 border-b border-white/[0.04]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <div className="flex-1 flex justify-center">
              <span className="bg-white/5 rounded px-3 py-0.5 text-xs text-[#475569]">
                app.streamvault.co.uk
              </span>
            </div>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-[200px_1fr] min-h-[400px]">
            {/* Sidebar */}
            <div className="bg-[#080810]/80 p-4 border-r border-white/[0.04]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-white">StreamVault</span>
              </div>
              <nav className="space-y-1">
                {[
                  { icon: Tv, label: "Live TV", active: true },
                  { icon: Film, label: "Movies", active: false },
                  { icon: Footprints, label: "Sports", active: false },
                  { icon: Gamepad2, label: "Kids", active: false },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href="#"
                      className={`flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg transition-all ${
                        item.active
                          ? "bg-[#7C3AED]/20 text-[#C084FC]"
                          : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Main panel */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-white font-semibold">
                  Good evening <span className="wave">👋</span>
                </p>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#475569]" />
                  <input
                    type="text"
                    placeholder="Search channels..."
                    className="w-48 bg-white/[0.04] border border-white/[0.06] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#475569] focus:outline-none focus:border-[#7C3AED]/40"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                {channelData.map((ch, i) => (
                  <motion.div
                    key={ch.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.03, duration: 0.3 }}
                    className={`bg-gradient-to-br ${ch.bg} rounded-xl p-2 h-16 sm:h-[72px] flex items-center justify-center border border-white/[0.04] hover:border-[#7C3AED]/40 hover:scale-105 transition-all cursor-pointer`}
                  >
                    <span className="text-[8px] sm:text-[9px] font-bold text-white/70 text-center leading-tight">
                      {ch.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 bg-[#0E0E1A] rounded-xl p-3 border border-white/[0.04]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                    Live Now
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white font-medium">
                    Sky Sports HD — Premier League Live
                  </span>
                  <span className="text-[10px] text-[#475569]">2:30:00 / 3:15:00</span>
                </div>
                <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899]"
                    initial={{ width: "0%" }}
                    animate={{ width: "77%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
