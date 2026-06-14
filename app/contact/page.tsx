import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact IPTV Subscription 4K UK | 24/7 Customer Support",
  description:
    "Contact the UK's best IPTV provider. WhatsApp 24/7 support, email, and live chat. Get help with setup, billing, or any questions about our IPTV subscription UK service.",
  alternates: {
    canonical: "https://www.iptvsubscription4k.com/contact",
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+44 7380 600578",
    href: "https://wa.me/447380600578",
    description: "Fastest response — typically under 5 minutes",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@streamvault.co.uk",
    href: "mailto:support@streamvault.co.uk",
    description: "We respond within 1 hour during business hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7380 600578",
    href: "tel:+447380600578",
    description: "24/7 UK-based support line",
  },
  {
    icon: Clock,
    label: "Live Chat",
    value: "Available 24/7",
    description: "Instant help from our UK support team",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">Contact Us</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact IPTV Subscription 4K IPTV UK
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Need help with your IPTV subscription UK? Our UK-based support team
            is available 24/7 to help with setup, billing, or any questions
            about our best IPTV provider UK service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href || "#"}
                target={method.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 hover:border-[#7C3AED]/40 transition-all group"
              >
                <Icon className="w-8 h-8 text-[#7C3AED] mb-4" />
                <h2 className="text-white font-bold text-lg mb-1">
                  {method.label}
                </h2>
                <p className="text-[#C084FC] text-sm font-medium mb-1">
                  {method.value}
                </p>
                <p className="text-xs text-[#475569]">{method.description}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Before You Contact Us
          </h2>
          <p className="text-sm text-[#94A3B8] mb-6 max-w-lg mx-auto">
            Most questions are answered in our comprehensive{" "}
            <Link
              href="/setup-guide"
              className="text-[#C084FC] hover:text-white transition-colors"
            >
              IPTV Setup Guide
            </Link>{" "}
            and{" "}
            <Link
              href="/#faq"
              className="text-[#C084FC] hover:text-white transition-colors"
            >
              FAQ section
            </Link>
            . Check these first for instant answers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#475569]">
            <span>🇬🇧 UK-Based Support</span>
            <span>🔒 SSL Secured</span>
            <span>⭐ Rated 4.9/5</span>
          </div>
        </div>
      </div>
    </main>
  );
}
