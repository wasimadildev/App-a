"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sports() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#080810]">
      <div className="absolute inset-0">
        <Image
          src="/images/footbal-stadium.png"
          alt=""
          fill
          className="object-cover opacity-30 sm:opacity-40"
          priority
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-transparent to-[#080810]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-[#C084FC]/30 bg-[#C084FC]/10 rounded-full px-4 py-1 text-xs text-[#C084FC] mb-4"
        >
          Live Sports in 4K
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
        >
          <span className="text-white">Every Match.</span>
          <br />
          <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent">
            Every Moment. Live.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-[#94A3B8] mt-4 max-w-2xl mx-auto"
        >
          Watch Premier League, Champions League, UEFA, La Liga, Serie A, and
          more in stunning 4K Ultra HD. Never miss a goal with StreamVault&apos;s
          premium sports coverage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-[#94A3B8]"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            Sky Sports
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
            TNT Sports
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
            Premier League
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            DAZN
          </span>
        </motion.div>
      </div>
    </section>
  );
}
