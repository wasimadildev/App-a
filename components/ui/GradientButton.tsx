"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function GradientButton({
  children,
  href,
  className = "",
  glow = true,
  onClick,
  type = "button",
}: GradientButtonProps) {
  const base =
    "inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] cursor-pointer";

  const glowStyle = glow
    ? "shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]"
    : "";

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${glowStyle} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${glowStyle} ${className}`}
    >
      {content}
    </button>
  );
}
