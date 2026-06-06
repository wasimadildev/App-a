"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";
import FadeUp from "@/components/ui/FadeUp";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-base pr-4 group-hover:bg-gradient-to-r group-hover:from-[#C084FC] group-hover:to-[#F472B6] group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#94A3B8]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#94A3B8] text-sm leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#080810]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Frequently Asked Questions About IPTV UK
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </FadeUp>

        <FadeUp delay={0.2} className="text-center mt-10">
          <p className="text-sm text-[#94A3B8]">
            Need more help? Check our{" "}
            <a
              href="/setup-guide"
              className="text-[#C084FC] hover:text-white transition-colors"
            >
              IPTV Setup Guide
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="text-[#C084FC] hover:text-white transition-colors"
            >
              contact our UK support team
            </a>
            .
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
