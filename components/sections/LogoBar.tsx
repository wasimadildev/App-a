"use client";

import { motion } from "framer-motion";
import {
  Tv,
  Smartphone,
  Monitor,
  Tablet,
  Gamepad2,
  Laptop,
  Radio,
  MonitorSmartphone,
} from "lucide-react";
import { devices } from "@/lib/data";

const iconMap = [
  Tv, MonitorSmartphone, Tablet, Monitor,
  Smartphone, Tablet, Smartphone, Radio,
  Tv, Monitor, Laptop, Gamepad2,
];

export default function LogoBar() {
  return (
    <section className="bg-[#0E0E1A] border-y border-white/[0.04] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-[#475569] text-center mb-8"
        >
          Compatible Devices for IPTV UK
        </motion.p>

        <div className="relative">
          <div className="flex overflow-hidden mb-4">
            <div className="flex gap-3 animate-marquee-left">
              {[...devices, ...devices].map((device, i) => {
                const Icon = iconMap[i % iconMap.length] || Tv;
                return (
                  <div
                    key={`${device}-${i}`}
                    className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2 whitespace-nowrap"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#475569]" />
                    <span className="text-sm text-[#94A3B8]">{device}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex gap-3 animate-marquee-right">
              {[...devices, ...devices].reverse().map((device, i) => {
                const Icon = iconMap[(devices.length - 1 - i) % iconMap.length] || Tv;
                return (
                  <div
                    key={`rev-${device}-${i}`}
                    className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2 whitespace-nowrap"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#475569]" />
                    <span className="text-sm text-[#94A3B8]">{device}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
