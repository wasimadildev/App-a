import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Channel List UK | 28,000+ Channels | IPTV Subscription 4K",
  description:
    "Full IPTV channel list for UK subscribers. Sky Sports, BT Sport, BBC, ITV, Channel 4, international channels & more. 28,000+ channels available on all plans.",
  alternates: {
    canonical: "https://iptvsubscription4k.com/channels",
  },
};

const channelCategories = [
  {
    name: "UK Sports Channels",
    channels: [
      "Sky Sports Premier League",
      "Sky Sports Main Event",
      "Sky Sports Football",
      "Sky Sports Cricket",
      "Sky Sports F1",
      "Sky Sports Golf",
      "Sky Sports Racing",
      "Sky Sports News",
      "BT Sport 1",
      "BT Sport 2",
      "BT Sport 3",
      "TNT Sports 1",
      "TNT Sports 2",
      "TNT Sports 3",
      "Premier Sports 1",
      "Premier Sports 2",
      "Viaplay Sports",
      "MUTV",
      "LFC TV",
      "DAZN 1",
    ],
  },
  {
    name: "UK Entertainment",
    channels: [
      "BBC One",
      "BBC Two",
      "ITV One",
      "ITV Two",
      "Channel 4",
      "Channel 5",
      "Sky One",
      "Sky Atlantic",
      "Sky Witness",
      "Gold",
      "Dave",
      "Comedy Central",
      "E4",
      "Film4",
      "More4",
      "W",
      "Alibi",
      "Really",
      "Yesterday",
      "Drama",
    ],
  },
  {
    name: "Movies & Premium",
    channels: [
      "Sky Cinema Premiere",
      "Sky Cinema Select",
      "Sky Cinema Hits",
      "Sky Cinema Greats",
      "Sky Cinema Family",
      "Sky Cinema Action",
      "Sky Cinema Thriller",
      "Netflix",
      "Disney+",
      "Prime Video",
      "HBO",
      "HBO 2",
      "HBO 3",
      "Starzplay",
      "Paramount+",
      "Apple TV+",
      "MGM",
      "TCM",
      "AMC",
      "Sundance TV",
    ],
  },
  {
    name: "News & Documentaries",
    channels: [
      "Sky News",
      "BBC News",
      "ITV News",
      "CNN International",
      "Fox News",
      "Bloomberg",
      "CNBC",
      "Al Jazeera",
      "BBC Parliament",
      "National Geographic",
      "Nat Geo Wild",
      "Discovery Channel",
      "Discovery Science",
      "Discovery History",
      "Discovery Turbo",
      "Animal Planet",
      "History Channel",
      "BBC Earth",
      "CGTN",
      "France 24",
    ],
  },
  {
    name: "Kids & Family",
    channels: [
      "CBBC",
      "CBeebies",
      "Nickelodeon",
      "Nick Jr",
      "Nicktoons",
      "Cartoon Network",
      "Disney Channel",
      "Disney XD",
      "Disney Junior",
      "Boomerang",
      "Pop",
      "Tiny Pop",
      "Kix",
      "Cartoonito",
      "Baby TV",
      "Milkshake",
      "Sky Kids",
      "Nick Jr 2",
    ],
  },
  {
    name: "International",
    channels: [
      "Zee TV",
      "Star Plus",
      "Sony TV",
      "Colors TV",
      "Geo TV",
      "ARY Digital",
      "Hum TV",
      "PTV Home",
      "TV One",
      "Apna Channel",
      "ATN",
      "B4U Movies",
      "B4U Music",
      "NDTV 24x7",
      "Times Now",
      "BBC Arabic",
      "TV5 Monde",
      "Rai 1",
      "RTL",
      "ProSieben",
    ],
  },
];

export default function ChannelsPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-[#475569] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#94A3B8]">IPTV Channel List</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            28,000+ IPTV Channels UK
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Every channel you could want — from Sky Sports and BT Sport to
            international content from 150+ countries. All available on our UK
            IPTV service with any subscription plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {channelCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#0E0E1A] border border-white/[0.06] rounded-2xl p-6"
            >
              <h2 className="text-lg font-bold text-white mb-4">{cat.name}</h2>
              <ul className="space-y-2">
                {cat.channels.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-center gap-2 text-sm text-[#94A3B8]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                    {ch}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#94A3B8] text-sm mb-6">
            And thousands more channels from the UK, US, Europe, Asia, Africa,
            and beyond. This is just a sample of our IPTV 28000 channels UK
            lineup.
          </p>
          <a
            href="https://wa.me/447380600578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-all"
          >
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
