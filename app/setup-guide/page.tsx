import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Setup Guide UK | How to Install on Firestick & Devices",
  description:
    "Complete IPTV setup guide for UK users. Learn how to install IPTV on Amazon Firestick, Smart TV, Android, iOS and more with IPTV Subscription 4K. Setup in 2 minutes.",
  alternates: {
    canonical: "https://iptvsubscription4k.com/setup-guide",
  },
};

const steps = [
  {
    title: "Enable Apps from Unknown Sources",
    description:
      "On your Amazon Firestick, go to Settings > My Fire TV > Developer Options and turn on 'Apps from Unknown Sources'. This allows you to install applications from outside the Amazon App Store.",
    device: "Firestick",
  },
  {
    title: "Install the Downloader App",
    description:
      "Search for 'Downloader' in the Amazon App Store and install it. This free app lets you download files from the internet directly onto your Firestick.",
    device: "Firestick",
  },
  {
    title: "Download IPTV Subscription 4K APK",
    description:
      "Open the Downloader app and enter the IPTV Subscription 4K installation URL provided in your welcome email. The APK file will download automatically.",
    device: "Firestick",
  },
  {
    title: "Install & Launch IPTV Subscription 4K",
    description:
      "Once downloaded, click 'Install' and wait for the installation to complete. Then click 'Open' to launch the app for the first time.",
    device: "Firestick",
  },
  {
    title: "Log In & Start Streaming",
    description:
      "Enter the IPTV Subscription 4K login credentials sent to your email. That's it — you now have access to 28,000+ channels in HD and 4K quality.",
    device: "Firestick",
  },
];

const deviceGuides = [
  {
    name: "Android TV / Smart TV",
    steps: [
      "Open the Google Play Store on your Android TV",
      "Search for and install an IPTV player app",
      "Open the app and enter your IPTV Subscription 4K credentials",
      "Alternatively, sideload the IPTV Subscription 4K APK via USB",
    ],
  },
  {
    name: "iPhone / iPad",
    steps: [
      "Download an IPTV player app from the App Store",
      "Open the app and select 'Add Playlist'",
      "Enter the M3U URL from your IPTV Subscription 4K account",
      "Browse and start watching instantly",
    ],
  },
  {
    name: "Android Phone / Tablet",
    steps: [
      "Download an IPTV player app from Google Play",
      "Open the app and enter your IPTV Subscription 4K login details",
      "Use Xtream Codes API or M3U playlist URL",
      "All 28,000+ channels load instantly",
    ],
  },
  {
    name: "Windows PC / Mac",
    steps: [
      "Download an IPTV player app like VLC or IPTV Smarters",
      "Open the app and locate the playlist upload section",
      "Enter your IPTV Subscription 4K M3U URL or Xtream Codes",
      "Start streaming on your computer",
    ],
  },
];

export default function SetupGuidePage() {
  return (
    <main className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">IPTV Setup Guide</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            IPTV Setup Guide UK
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            How to install IPTV on Amazon Firestick, Smart TV, and all your
            devices with IPTV Subscription 4K. Full step-by-step instructions for every
            platform.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            How to Get IPTV on Amazon Firestick UK
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6 flex gap-4"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center text-white font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Setup Guides for Other Devices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deviceGuides.map((guide) => (
              <div
                key={guide.name}
                className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-white font-bold mb-4">{guide.name}</h3>
                <ul className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#94A3B8]"
                    >
                      <span className="text-[#7C3AED] shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">
            Need Help Setting Up IPTV?
          </h2>
          <p className="text-[#94A3B8] text-sm mb-6">
            Our UK-based support team is available 24/7 via WhatsApp to help you
            get started. We can guide you through the IPTV Firestick UK setup
            step by step.
          </p>
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-all"
          >
            Contact UK Support on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
