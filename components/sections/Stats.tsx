"use client";

import { stats } from "@/lib/data";
import CountUp from "@/components/ui/CountUp";
import FadeUp from "@/components/ui/FadeUp";

export default function Stats() {
  const parseNumber = (val: string) => {
    const cleaned = val.replace(/[,+]/g, "");
    const num = parseInt(cleaned, 10);
    return isNaN(num) ? 0 : num;
  };

  const suffix = (val: string) => {
    if (val.includes("+")) return "+";
    return "";
  };

  return (
    <section className="py-20 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="sr-only">28,000+ Live TV Channels UK</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < stats.length - 1
                    ? "lg:border-r border-white/[0.06]"
                    : ""
                }`}
              >
                <span className="bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#67E8F9] bg-clip-text text-transparent text-5xl font-black block">
                  <CountUp
                    end={parseNumber(stat.value)}
                    suffix={suffix(stat.value)}
                  />
                </span>
                <span className="text-[#94A3B8] text-sm mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
