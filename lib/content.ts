import type { Locale } from "./locales";

// ─── Region-specific site identity ───

export const siteName: Record<Locale, string> = {
  uk: "IPTV Subscription 4K",
  us: "IPTV Subscription 4K US",
  nl: "IPTV Subscription 4K Nederland",
  eu: "IPTV Subscription 4K Europe",
};

export const siteDescription: Record<Locale, string> = {
  uk: "Best IPTV Subscription UK 2026 | 28,000+ Channels | IPTV Subscription 4K",
  us: "Best IPTV Subscription USA 2026 | 20,000+ Channels | IPTV Subscription 4K",
  nl: "Beste IPTV Abonnement Nederland 2026 | 25.000+ Zenders | IPTV Subscription 4K",
  eu: "Best IPTV Subscription Europe 2026 | 25,000+ Channels | IPTV Subscription 4K",
};

// ─── Hero section ───

export const heroContent: Record<Locale, { headline: string; subheadline: string }> = {
  uk: {
    headline: "Stream Without Limits.",
    subheadline:
      "IPTV Subscription 4K is the UK's best IPTV subscription service, delivering 28,000+ live channels in Full HD and 4K Ultra HD quality. Stream Sky Sports, BT Sport, Premier League, movies, and 150+ international channels on your Firestick, Smart TV, or any device.",
  },
  us: {
    headline: "Cut the Cord. Stream Everything.",
    subheadline:
      "IPTV Subscription 4K US delivers 20,000+ live channels in Full HD and 4K. Watch ESPN, FOX Sports, NFL, NBA, MLB, UFC PPV, movies, and international channels on Firestick, Smart TV, or any device. Zero buffering. Cancel anytime.",
  },
  nl: {
    headline: "Stream zonder Grenzen.",
    subheadline:
      "IPTV Subscription 4K Nederland is de beste IPTV-dienst van Nederland met 25.000+ live zenders in Full HD en 4K. Kijk NPO, RTL, ESPN, Eredivisie, films en internationale zenders op je Firestick, Smart TV of elk apparaat.",
  },
  eu: {
    headline: "Stream Without Borders.",
    subheadline:
      "IPTV Subscription 4K Europe delivers 25,000+ live channels across the continent in Full HD and 4K. Watch Premier League, La Liga, Serie A, Bundesliga, international news, movies, and local channels on any device.",
  },
};

// ─── Pricing ───

export interface PriceTier {
  name: string;
  description: string;
  price: number;
  yearlyPrice: number;
  channels: string;
  features: string[];
  featured: boolean;
}

export const pricing: Record<Locale, PriceTier[]> = {
  uk: [
    {
      name: "Basic",
      description: "1 Month Subscription",
      price: 15,
      yearlyPrice: 15,
      channels: "15,000+",
      features: [
        "15,000+ Live Channels",
        "UK, US & International Channels",
        "HD Quality Streaming",
        "All World Sports Channels",
        "Netflix, Prime Video, HBO, Apple TV+",
      ],
      featured: false,
    },
    {
      name: "Standard",
      description: "6 Months Subscription",
      price: 35,
      yearlyPrice: 35,
      channels: "20,000+",
      features: [
        "20,000+ Live Channels",
        "All Sky Sports & BT Sports",
        "4K Ultra HD Quality",
        "Netflix, Prime Video & More",
        "Movies, Series & VOD",
      ],
      featured: true,
    },
    {
      name: "Premium",
      description: "1 Year Subscription",
      price: 49,
      yearlyPrice: 49,
      channels: "40,000+",
      features: [
        "40,000+ Live Channels",
        "50,000+ Movies & Shows VOD",
        "All Premium Sports Channels",
        "Netflix, Prime Video, All 4K",
        "Series Daily Update",
        "Anything Added on Demand",
      ],
      featured: false,
    },
  ],
  us: [
    {
      name: "Basic",
      description: "1 Month Subscription",
      price: 19,
      yearlyPrice: 19,
      channels: "10,000+",
      features: [
        "10,000+ Live Channels",
        "US, UK & International Channels",
        "HD Quality Streaming",
        "ESPN, FOX, NBC, CBS Sports",
        "Netflix, Prime Video, HBO, Apple TV+",
      ],
      featured: false,
    },
    {
      name: "Standard",
      description: "6 Months Subscription",
      price: 39,
      yearlyPrice: 39,
      channels: "15,000+",
      features: [
        "15,000+ Live Channels",
        "NFL, NBA, MLB, NHL, UFC",
        "4K Ultra HD Quality",
        "All Premium Movie Channels",
        "Netflix, Prime Video & More",
      ],
      featured: true,
    },
    {
      name: "Premium",
      description: "1 Year Subscription",
      price: 59,
      yearlyPrice: 59,
      channels: "25,000+",
      features: [
        "25,000+ Live Channels",
        "40,000+ Movies & Shows VOD",
        "All US & UK Premium Sports",
        "PPV Events Included",
        "4K Ultra HD on All Channels",
        "5 Simultaneous Connections",
      ],
      featured: false,
    },
  ],
  nl: [
    {
      name: "Basis",
      description: "1 Maand Abonnement",
      price: 17,
      yearlyPrice: 17,
      channels: "15.000+",
      features: [
        "15.000+ Live Zenders",
        "Nederlandse & Internationale Zenders",
        "HD Kwaliteit Streaming",
        "ESPN, Ziggo Sport & meer",
        "Netflix, Prime Video, HBO, Apple TV+",
      ],
      featured: false,
    },
    {
      name: "Standaard",
      description: "6 Maanden Abonnement",
      price: 39,
      yearlyPrice: 39,
      channels: "20.000+",
      features: [
        "20.000+ Live Zenders",
        "Eredivisie, Formule 1 & Champions League",
        "4K Ultra HD Kwaliteit",
        "Alle Premium Filmzenders",
        "Netflix, Prime Video & meer",
      ],
      featured: true,
    },
    {
      name: "Premium",
      description: "1 Jaar Abonnement",
      price: 55,
      yearlyPrice: 55,
      channels: "35.000+",
      features: [
        "35.000+ Live Zenders",
        "50.000+ Films & Series VOD",
        "Alle Sportzenders in 4K",
        "Nederlandse & Internationale Content",
        "Dagelijkse Serie Updates",
        "5 Apparaten Tegelijkertijd",
      ],
      featured: false,
    },
  ],
  eu: [
    {
      name: "Basic",
      description: "1 Month Subscription",
      price: 15,
      yearlyPrice: 15,
      channels: "15,000+",
      features: [
        "15,000+ Live Channels",
        "European & International Channels",
        "HD Quality Streaming",
        "Premier League, La Liga, Serie A",
        "Netflix, Prime Video, HBO, Apple TV+",
      ],
      featured: false,
    },
    {
      name: "Standard",
      description: "6 Months Subscription",
      price: 35,
      yearlyPrice: 35,
      channels: "20,000+",
      features: [
        "20,000+ Live Channels",
        "All Major European Sports",
        "4K Ultra HD Quality",
        "Multi-Language EPG Guide",
        "Netflix, Prime Video & More",
      ],
      featured: true,
    },
    {
      name: "Premium",
      description: "1 Year Subscription",
      price: 49,
      yearlyPrice: 49,
      channels: "35,000+",
      features: [
        "35,000+ Live Channels",
        "45,000+ Movies & Shows VOD",
        "All Premium Sports in 4K",
        "Channels from 50+ Countries",
        "Series Daily Update",
        "5 Simultaneous Connections",
      ],
      featured: false,
    },
  ],
};

// ─── Channel categories ───

interface ChannelGroup {
  name: string;
  channels: string[];
}

export const channelGroups: Record<Locale, ChannelGroup[]> = {
  uk: [
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
        "BBC One", "BBC Two", "ITV One", "ITV Two", "Channel 4",
        "Channel 5", "Sky One", "Sky Atlantic", "Sky Witness",
        "Gold", "Dave", "Comedy Central", "E4", "Film4", "More4",
        "W", "Alibi", "Really", "Yesterday", "Drama",
      ],
    },
    {
      name: "Movies & Premium",
      channels: [
        "Sky Cinema Premiere", "Sky Cinema Select", "Sky Cinema Hits",
        "Sky Cinema Greats", "Sky Cinema Family", "Sky Cinema Action",
        "Sky Cinema Thriller", "Netflix", "Disney+", "Prime Video",
        "HBO", "HBO 2", "HBO 3", "Starzplay", "Paramount+",
        "Apple TV+", "MGM", "TCM", "AMC", "Sundance TV",
      ],
    },
    {
      name: "News & Documentaries",
      channels: [
        "Sky News", "BBC News", "ITV News", "CNN International",
        "Fox News", "Bloomberg", "CNBC", "Al Jazeera",
        "National Geographic", "Nat Geo Wild", "Discovery Channel",
        "Discovery Science", "History Channel", "BBC Earth",
      ],
    },
    {
      name: "Kids & Family",
      channels: [
        "CBBC", "CBeebies", "Nickelodeon", "Nick Jr", "Nicktoons",
        "Cartoon Network", "Disney Channel", "Disney XD",
        "Boomerang", "Pop", "Tiny Pop", "Kix", "Cartoonito",
        "Baby TV", "Milkshake", "Sky Kids",
      ],
    },
    {
      name: "International",
      channels: [
        "Zee TV", "Star Plus", "Sony TV", "Colors TV", "Geo TV",
        "ARY Digital", "Hum TV", "PTV Home", "Apna Channel",
        "B4U Movies", "B4U Music", "TV5 Monde", "Rai 1", "RTL",
        "ProSieben", "France 24", "DW", "Euronews",
      ],
    },
  ],
  us: [
    {
      name: "US Sports Channels",
      channels: [
        "ESPN", "ESPN 2", "ESPN News", "FOX Sports 1",
        "FOX Sports 2", "NBC Sports Network", "CBS Sports Network",
        "NFL Network", "NFL RedZone", "NBA TV", "MLB Network",
        "NHL Network", "Golf Channel", "Tennis Channel",
        "ESPN U", "SEC Network", "ACC Network", "Big Ten Network",
        "UFC Fight Pass", "DAZN US",
      ],
    },
    {
      name: "US Entertainment",
      channels: [
        "ABC", "CBS", "NBC", "FOX", "PBS", "The CW",
        "AMC", "TBS", "TNT", "USA Network", "FX", "FXX",
        "Comedy Central", "Bravo", "E!", "MTV", "VH1",
        "Food Network", "HGTV", "TLC",
      ],
    },
    {
      name: "Movies & Premium",
      channels: [
        "HBO", "HBO 2", "HBO Signature", "HBO Family",
        "Showtime", "Starz", "Cinemax", "Netflix", "Prime Video",
        "Disney+", "Hulu", "Paramount+", "Apple TV+",
        "Peacock", "Max", "MGM+", "AMC+", "FX Movie Channel",
      ],
    },
    {
      name: "News & Documentaries",
      channels: [
        "CNN", "CNN International", "FOX News", "MSNBC",
        "ABC News", "CBS News", "NBC News", "Bloomberg",
        "CNBC", "C-SPAN", "National Geographic",
        "Discovery Channel", "History Channel", "A&E",
        "Animal Planet", "Science Channel",
      ],
    },
    {
      name: "Kids & Family",
      channels: [
        "Disney Channel", "Disney XD", "Disney Junior",
        "Nickelodeon", "Nick Jr", "Nicktoons",
        "Cartoon Network", "Boomerang", "PBS Kids",
        "Universal Kids", "Baby First TV",
      ],
    },
  ],
  nl: [
    {
      name: "Nederlandse Sportzenders",
      channels: [
        "ESPN 1", "ESPN 2", "ESPN 3", "ESPN 4",
        "Ziggo Sport Totaal", "Ziggo Sport Select",
        "Ziggo Sport 24", "NOS Sport", "Eredivisie Live",
        "Viaplay Sport NL", "F1 TV",
      ],
    },
    {
      name: "Nederlandse Zenders",
      channels: [
        "NPO 1", "NPO 2", "NPO 3", "RTL 4", "RTL 5",
        "RTL 7", "RTL 8", "SBS 6", "Net 5", "Veronica",
        "MTV NL", "Comedy Central NL",
      ],
    },
    {
      name: "Films & Premium",
      channels: [
        "Netflix", "Prime Video NL", "Disney+", "HBO Max",
        "Videoland", "SkyShowtime", "Viaplay",
        "Film1", "Film1 Premiere", "Film1 Action",
      ],
    },
    {
      name: "Nieuws & Documentaires",
      channels: [
        "NOS Nieuws", "RTL Nieuws", "EenVandaag",
        "National Geographic NL", "Discovery NL",
        "History Channel NL", "Animal Planet NL",
      ],
    },
    {
      name: "Internationale Zenders",
      channels: [
        "BBC One", "CNN", "Euronews", "France 24",
        "DW", "TV5 Monde", "Rai 1", "RTL DE",
        "ProSieben", "Sat 1",
      ],
    },
  ],
  eu: [
    {
      name: "European Sports Channels",
      channels: [
        "Sky Sports Premier League", "Sky Sports Football",
        "BT Sport 1", "BT Sport 2", "TNT Sports",
        "ESPN Europe", "Eurosport 1", "Eurosport 2",
        "DAZN 1", "DAZN 2", "Sport1 (DE)", "Sport1+",
        "MUTV", "LFC TV", "Chelsea TV",
      ],
    },
    {
      name: "European Entertainment",
      channels: [
        "BBC One", "BBC Two", "ITV", "Channel 4",
        "RTL (DE)", "ProSieben", "Sat 1", "Rai 1",
        "France 2", "TF1", "TVE 1", "Antena 3",
      ],
    },
    {
      name: "News & Documentaries",
      channels: [
        "BBC News", "CNN International", "Euronews",
        "France 24", "DW", "Al Jazeera", "Sky News",
        "National Geographic", "Discovery Channel",
        "History Channel", "BBC Earth",
      ],
    },
  ],
};

// ─── FAQ ───

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqContent: Record<Locale, FAQItem[]> = {
  uk: [
    {
      question: "What is the best IPTV subscription in the UK?",
      answer:
        "IPTV Subscription 4K is rated the UK's number one IPTV subscription service with 28,000+ live channels, 4K Ultra HD quality, and 99.9% uptime. Trusted by over 50,000 UK households.",
    },
    {
      question: "Which devices are supported for IPTV UK?",
      answer:
        "IPTV Subscription 4K works on Amazon Firestick & Fire TV, Android TV, Apple TV, Smart TVs (Samsung, LG, Sony), iPhones, iPads, Android phones, Windows and Mac computers, and MAG boxes.",
    },
    {
      question: "Is there a free IPTV trial in the UK?",
      answer:
        "Yes! We offer a free 24-hour trial with full access to all 28,000+ channels. No credit card required.",
    },
    {
      question: "Can I watch Sky Sports without a subscription through IPTV?",
      answer:
        "Absolutely. All Sky Sports channels, BT Sport, TNT Sports, and Premier Sports are included in every plan. Watch Premier League, Champions League, F1, and UFC without expensive Sky contracts.",
    },
    {
      question: "What internet speed do I need for IPTV?",
      answer:
        "For HD streaming you need at least 25Mbps. For 4K IPTV, we recommend 50Mbps or higher. Most UK fibre connections meet these requirements.",
    },
  ],
  us: [
    {
      question: "What is the best IPTV subscription in the USA?",
      answer:
        "IPTV Subscription 4K US is a top-rated IPTV service with 20,000+ live channels, 4K streaming, and 99.9% uptime. Trusted by thousands of US households.",
    },
    {
      question: "What devices are supported for IPTV in the US?",
      answer:
        "Works on Amazon Firestick, Android TV, Apple TV, Smart TVs (Samsung, LG, Sony), iPhones, iPads, Android phones, Windows, Mac, and MAG boxes.",
    },
    {
      question: "Can I watch NFL, NBA, MLB, NHL, and UFC?",
      answer:
        "Yes! All major US sports are covered including NFL RedZone, NBA TV, MLB Network, NHL Network, UFC PPV events, plus ESPN, FOX Sports, and NBC Sports channels.",
    },
    {
      question: "Is there a free IPTV trial in the US?",
      answer:
        "Yes. Try our service free for 24 hours with full access to all channels. No credit card required.",
    },
    {
      question: "How much does IPTV cost in the US?",
      answer:
        "Plans start from $19/month for Basic, $39 for 6 months (Standard), and $59 for the Premium annual plan. Cancel anytime, no contracts.",
    },
  ],
  nl: [
    {
      question: "Wat is het beste IPTV abonnement in Nederland?",
      answer:
        "IPTV Subscription 4K Nederland is de beste IPTV-dienst met 25.000+ live zenders, 4K Ultra HD kwaliteit en 99.9% uptime. Vertrouwd door duizenden Nederlandse huishoudens.",
    },
    {
      question: "Op welke apparaten werkt IPTV in Nederland?",
      answer:
        "IPTV werkt op Amazon Firestick, Android TV, Apple TV, Smart TV (Samsung, LG, Sony), iPhone, iPad, Android telefoons, Windows PC, Mac en MAG boxes.",
    },
    {
      question: "Kan ik Eredivisie en Formule 1 kijken via IPTV?",
      answer:
        "Ja! Alle Eredivisie wedstrijden, Formule 1, Champions League, Premier League en meer zijn beschikbaar in HD en 4K kwaliteit via ESPN, Ziggo Sport en Viaplay.",
    },
    {
      question: "Is er een gratis IPTV proefperiode in Nederland?",
      answer:
        "Ja, u kunt onze dienst 24 uur gratis uitproberen met volledige toegang tot alle zenders. Geen creditcard nodig.",
    },
    {
      question: "Hoe betaal ik voor IPTV in Nederland?",
      answer:
        "Wij accepteren iDEAL, creditcard en cryptocurrency. Alle prijzen zijn in euro's (€) inclusief BTW. Geen verborgen kosten.",
    },
  ],
  eu: [
    {
      question: "What is the best IPTV subscription in Europe?",
      answer:
        "IPTV Subscription 4K Europe delivers 25,000+ live channels from across the continent in HD and 4K quality. Trusted by customers in 50+ countries.",
    },
    {
      question: "Which European channels are available?",
      answer:
        "We offer channels from the UK, Germany, France, Italy, Spain, Netherlands, and more. Including Premier League, La Liga, Serie A, Bundesliga, and Ligue 1 coverage.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Works on Amazon Firestick, Android TV, Apple TV, Smart TVs, iPhone, iPad, Android phones, Windows, Mac, and MAG boxes.",
    },
    {
      question: "Is there a free trial available in Europe?",
      answer:
        "Yes. Try our service free for 24 hours with full access to all channels. No credit card required.",
    },
    {
      question: "Can I pay in euros?",
      answer:
        "Yes. All European pricing is in euros (€). We accept credit card, PayPal, and cryptocurrency. Prices include VAT where applicable.",
    },
  ],
};

// ─── Blog content ───

export interface BlogPostContent {
  slug: string;
  title: string;
  description: string;
  content?: string;
}

export const blogContent: Record<Locale, BlogPostContent[]> = {
  uk: [
    {
      slug: "best-iptv-firestick-uk-2026",
      title: "Best IPTV for Firestick UK 2026 — Complete Setup Guide",
      description:
        "Step-by-step guide to installing and using the best IPTV for Firestick UK. Compare providers, setup methods, and get the most from your Firestick.",
    },
    {
      slug: "iptv-vs-satellite-tv-uk",
      title: "IPTV vs Satellite TV in the UK — Which is Better in 2026?",
      description:
        "IPTV vs Sky TV UK — we compare costs, channel selection, quality, and flexibility. See why thousands are switching to IPTV in 2026.",
    },
    {
      slug: "watch-sky-sports-without-subscription",
      title: "How to Watch Sky Sports Without a Subscription in the UK",
      description:
        "Legal ways to watch Sky Sports cheap UK. IPTV alternatives that include all Premier League, F1, and UFC coverage without expensive contracts.",
    },
    {
      slug: "best-iptv-service-provider-uk-2026",
      title: "Best IPTV Service Provider UK 2026 — Top Premium IPTV Subscriptions Compared",
      description:
        "Compare the best IPTV service provider UK has to offer in 2026. We review premium IPTV subscriptions for channels, 4K quality, pricing, and reliability.",
    },
    {
      slug: "watch-premier-league-live-stream-uk-2026",
      title: "How to Watch Premier League Live Stream UK 2026 — Without Sky or BT Sport",
      description:
        "Watch every Premier League match live in the UK without an expensive Sky or BT Sport subscription. IPTV streaming guide for 2026/27 season in 4K.",
    },
    {
      slug: "iptv-on-smart-tv-uk-2026",
      title: "IPTV on Smart TV UK 2026 — Setup Guide for Samsung, LG & Sony",
      description:
        "Install IPTV on your Smart TV in minutes. Step-by-step guide for Samsung, LG, Sony, and Android TV. Stream 40,000+ channels in 4K on your TV.",
    },
    {
      slug: "cheapest-iptv-subscription-uk-2026",
      title: "Cheapest IPTV Subscription UK 2026 — Budget IPTV Plans That Actually Work",
      description:
        "Find the cheapest IPTV subscription UK families trust in 2026. Budget-friendly IPTV plans with real channels, 4K streaming, and reliable uptime from just £15.",
    },
  ],
  us: [
    {
      slug: "best-iptv-firestick-usa-2026",
      title: "Best IPTV for Firestick USA 2026 — Complete Setup Guide",
      description:
        "Step-by-step guide to installing and using the best IPTV for Firestick in the USA. Compare providers, setup methods, and get the most from your Firestick.",
    },
    {
      slug: "iptv-vs-cable-tv-usa",
      title: "IPTV vs Cable TV in the USA — Which is Better in 2026?",
      description:
        "IPTV vs cable TV USA — we compare costs, channel selection, quality, and flexibility. See why millions of Americans are cutting the cord in 2026.",
    },
    {
      slug: "watch-nfl-live-without-cable",
      title: "How to Watch NFL Live Without Cable in 2026",
      description:
        "Watch every NFL game live without a cable subscription. IPTV streaming guide for NFL Sunday Ticket, Monday Night Football, and Thursday Night Football in 4K.",
    },
    {
      slug: "best-iptv-service-provider-usa-2026",
      title: "Best IPTV Service Provider USA 2026 — Top Premium IPTV Subscriptions Compared",
      description:
        "Compare the best IPTV service provider USA has to offer in 2026. We review premium IPTV subscriptions for channels, 4K quality, pricing, and reliability.",
    },
    {
      slug: "cut-the-cord-iptv-usa-guide",
      title: "Cut the Cord in 2026 — How to Stream Everything with IPTV in the USA",
      description:
        "Complete guide to cutting the cord in the USA. Save $100+/month by switching to IPTV. Includes device recommendations, channel guides, and setup tips.",
    },
  ],
  nl: [
    {
      slug: "beste-iptv-firestick-nederland-2026",
      title: "Beste IPTV voor Firestick Nederland 2026 — Complete Installatiegids",
      description:
        "Stap-voor-stap handleiding voor het installeren van IPTV op je Firestick in Nederland. Vergelijk aanbieders en krijg het meeste uit je Firestick.",
    },
    {
      slug: "iptv-vs-kabel-tv-nederland",
      title: "IPTV vs Kabel TV in Nederland — Wat is Beter in 2026?",
      description:
        "IPTV vs Ziggo en KPN — we vergelijken kosten, zenderaanbod, kwaliteit en flexibiliteit. Ontdek waarom duizenden Nederlanders overstappen naar IPTV.",
    },
    {
      slug: "eredivisie-kijken-zonder-kabel",
      title: "Eredivisie Kijken Zonder Kabelabonnement in 2026",
      description:
        "Kijk elke Eredivisie wedstrijd live zonder duur kabelabonnement. IPTV streaming gids voor het 2026/27 seizoen in 4K kwaliteit.",
    },
  ],
  eu: [
    {
      slug: "best-iptv-service-europe-2026",
      title: "Best IPTV Service Europe 2026 — Top Premium IPTV Providers Compared",
      description:
        "Compare the best IPTV service providers in Europe for 2026. We review premium IPTV subscriptions across channel count, 4K quality, pricing, and reliability.",
    },
    {
      slug: "watch-premier-league-la-liga-serie-a-iptv-europe",
      title: "How to Watch Premier League, La Liga & Serie A with IPTV in Europe",
      description:
        "Watch all major European football leagues with one IPTV subscription. Premier League, La Liga, Serie A, Bundesliga, and Ligue 1 in 4K on any device.",
    },
    {
      slug: "iptv-legal-europe-2026-guide",
      title: "Is IPTV Legal in Europe? 2026 Guide to Legal IPTV Streaming",
      description:
        "Understanding IPTV legality across Europe. Country-by-country guide to legal IPTV streaming in the UK, Netherlands, Germany, France, Italy, and Spain.",
    },
  ],
};
