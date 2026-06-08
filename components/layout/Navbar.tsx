"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/channels", label: "Channels" },
  { href: "/pricing", label: "Pricing" },
  { href: "/setup-guide", label: "Setup Guide" },
  { href: "/free-trial", label: "Free Trial" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`
          w-full max-w-4xl backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]
          rounded-2xl px-5 sm:px-6 py-3 flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "bg-white/[0.06] shadow-lg shadow-[#7C3AED]/5" : ""}
        `}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/Logo.png"
            alt="IPTV Subscription 4K"
            width={36}
            height={36}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm text-[#94A3B8] hover:text-white transition-colors font-medium"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold rounded-xl px-5 py-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 z-50 backdrop-blur-2xl bg-[#0E0E1A]/95 border border-white/[0.08] rounded-3xl p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-white hover:text-[#C084FC] transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/447380600578"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl px-6 py-3"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
