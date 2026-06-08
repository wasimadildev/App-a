"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Camera, MessageCircle, Send } from "lucide-react";

const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Channels", href: "/channels" },
      { label: "Setup Guide", href: "/setup-guide" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Free Trial", href: "/free-trial" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Live Chat", href: "https://wa.me/447380600578" },
      { label: "Reseller Program", href: "https://wa.me/447380600578" },
    ],
  },
  {
    heading: "Contact",
    content: (
      <>
        <p className="text-sm text-[#94A3B8]">
          WhatsApp:{" "}
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#C084FC] transition-colors"
          >
            +44 7380 600578
          </a>
        </p>
        <p className="text-sm text-[#94A3B8] mt-1">
          Email:{" "}
          <a
            href="mailto:support@iptvsubscription4k.com"
            className="text-white hover:text-[#C084FC] transition-colors"
          >
            support@iptvsubscription4k.com
          </a>
        </p>
        <p className="text-xs text-[#475569] mt-2">24/7 Support Available</p>
      </>
    ),
  },
];

const socialLinks = [
  { icon: Globe, label: "Twitter", href: "#" },
  { icon: Send, label: "Facebook", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/447380600578" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center mb-3">
              <Image
                src="/images/Logo.png"
                alt="IPTV Subscription 4K"
                width={120}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#94A3B8] mb-5">
              Premium IPTV for the modern viewer.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 transition-all"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4 text-[#94A3B8] hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs uppercase tracking-wider text-[#475569] font-semibold mb-4">
                {col.heading}
              </h4>
              {col.content || (
                <ul className="space-y-2.5">
                  {col.links!.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">
            &copy; 2026 IPTV Subscription 4K. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#475569] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
