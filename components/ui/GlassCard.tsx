"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUpItem } from "./StaggerChildren";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animatedBorder?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  animatedBorder = false,
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeUpItem}
      className={`
        bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 overflow-hidden
        ${hover ? "transition-all duration-300 hover:border-white/[0.12] hover:bg-[#14142A]" : ""}
        ${animatedBorder ? "animated-border-card" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
