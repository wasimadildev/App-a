export interface Feature {
  title: string;
  description: string;
  icon: string;
  size: "large" | "small" | "full";
}

export const features: Feature[] = [
  {
    title: "28,000+ Live TV Channels UK",
    description:
      "Access every major UK channel plus international IPTV content. Sky Sports, BBC, ITV, Channel 4, BT Sport and thousands more — all included.",
    icon: "tv",
    size: "large",
  },
  {
    title: "Instant Activation",
    description: "Instant account setup, no waiting. Live in 2 minutes.",
    icon: "zap",
    size: "small",
  },
  {
    title: "99.9% Uptime",
    description:
      "UK-based servers with anti-freeze technology for buffer-free streaming.",
    icon: "activity",
    size: "small",
  },
  {
    title: "4K Ultra HD IPTV Streaming",
    description:
      "Our IPTV UK service delivers crystal-clear 4K and Full HD streams with zero buffering using our anti-freeze technology.",
    icon: "monitor",
    size: "large",
  },
  {
    title: "Compatible Devices",
    description:
      "Our IPTV Firestick UK setup takes under 2 minutes. Works on all Firestick models including 4K Max. One subscription. Every screen you own.",
    icon: "devices",
    size: "full",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "28,000+", label: "Live Channels" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150+", label: "Countries" },
  { value: "50,000+", label: "Happy Customers" },
];

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  featured: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For casual viewers — cheap IPTV subscription UK",
    monthlyPrice: 9,
    yearlyPrice: 6,
    features: [
      "1 device connection",
      "20,000+ channels",
      "Full HD quality",
      "7-day EPG guide",
      "Email support",
    ],
    featured: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    description: "For serious streamers — best value UK IPTV service",
    monthlyPrice: 19,
    yearlyPrice: 13,
    features: [
      "3 device connections",
      "28,000+ channels",
      "4K Ultra HD quality",
      "Full VOD library",
      "14-day EPG guide",
      "Priority support (24/7)",
      "Anti-freeze technology",
    ],
    featured: true,
    cta: "Subscribe Now",
  },
  {
    name: "Unlimited",
    description: "For power users — premium 4K IPTV UK",
    monthlyPrice: 29,
    yearlyPrice: 20,
    features: [
      "5 device connections",
      "28,000+ channels",
      "4K Ultra HD + HDR",
      "Complete VOD + PPV",
      "30-day EPG guide",
      "Dedicated account manager",
      "Custom parental controls",
      "VPN-friendly streaming",
    ],
    featured: false,
    cta: "Get Unlimited",
  },
];

export interface Testimonial {
  initials: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: "JT",
    name: "James T.",
    location: "Manchester",
    rating: 5,
    quote:
      "The sports coverage is unbelievable. Every Premier League match in 4K with zero buffering. Best decision I've made this year.",
    gradient: "from-[#7C3AED] to-[#EC4899]",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    location: "London",
    rating: 5,
    quote:
      "Finally a service the whole family can use. The kids have their channels, I have mine. Perfect picture quality every time.",
    gradient: "from-[#EC4899] to-[#06B6D4]",
  },
  {
    initials: "MA",
    name: "Mohammed A.",
    location: "Birmingham",
    rating: 5,
    quote:
      "Over 150 countries of content — I can watch news and shows from back home in crystal clear quality. Absolutely incredible value.",
    gradient: "from-[#06B6D4] to-[#7C3AED]",
  },
  {
    initials: "CB",
    name: "Claire B.",
    location: "Edinburgh",
    rating: 5,
    quote:
      "99.9% uptime isn't just marketing. I've had zero issues in 6 months. Rock solid reliability, even during peak hours.",
    gradient: "from-[#7C3AED] to-[#F472B6]",
  },
  {
    initials: "RO",
    name: "Ryan O.",
    location: "Cardiff",
    rating: 5,
    quote:
      "Setup took 2 minutes on my Firestick. The Downloader app method was straightforward and I was watching in no time. So easy.",
    gradient: "from-[#F472B6] to-[#06B6D4]",
  },
  {
    initials: "PS",
    name: "Priya S.",
    location: "Leeds",
    rating: 5,
    quote:
      "The 4K quality is stunning. I didn't realise how much detail I was missing until I tried StreamVault on my OLED. Night and day difference.",
    gradient: "from-[#06B6D4] to-[#7C3AED]",
  },
  {
    initials: "DH",
    name: "David H.",
    location: "Bristol",
    rating: 5,
    quote:
      "£19 a month for everything? I was paying over £80 for Sky and still didn't get this many channels. The value is insane.",
    gradient: "from-[#7C3AED] to-[#EC4899]",
  },
  {
    initials: "EW",
    name: "Emma W.",
    location: "Liverpool",
    rating: 5,
    quote:
      "Had an issue at 2am and their live chat sorted it in 5 minutes. The 24/7 support is genuinely world-class. Highly recommended.",
    gradient: "from-[#EC4899] to-[#7C3AED]",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What is the best IPTV subscription in the UK?",
    answer:
      "StreamVault is rated the UK's number one IPTV subscription service with 28,000+ live channels, 4K Ultra HD quality, and 99.9% uptime. Trusted by over 50,000 UK households, we offer UK channels including Sky Sports, BT Sport, and BBC alongside 150+ international channel packages. Our service works on Amazon Firestick, Smart TVs, and all major devices with instant setup.",
  },
  {
    question: "Which devices are supported for IPTV UK?",
    answer:
      "StreamVault works on virtually every modern device: Amazon Firestick & Fire TV, Android TV boxes, Apple TV, Smart TVs (Samsung, LG, Sony), iPhones, iPads, Android phones and tablets, Windows and Mac computers, and MAG boxes. One IPTV Firestick UK subscription covers all your devices with simultaneous connections.",
  },
  {
    question: "How do I set up IPTV on Amazon Firestick?",
    answer:
      "Installing our IPTV on Firestick is simple: (1) Go to Settings > My Fire TV > Developer Options and enable 'Apps from Unknown Sources'. (2) Search for and install the 'Downloader' app from the Amazon App Store. (3) Open Downloader, enter your StreamVault installation URL, and download the APK. (4) Click install and launch the app. (5) Log in with your StreamVault credentials and start watching. The whole IPTV Firestick UK setup process takes about 2 minutes.",
  },
  {
    question: "Is there a free IPTV trial in the UK?",
    answer:
      "Yes! StreamVault offers a free 24-hour trial so you can test our best IPTV subscription UK service before committing. You get full access to all 28,000+ channels, including Sky Sports, movies, and 4K content. No credit card required for the trial period. Simply visit our free trial page to get started.",
  },
  {
    question: "Can I watch Sky Sports without a subscription through IPTV?",
    answer:
      "Absolutely. StreamVault includes all Sky Sports channels, BT Sport, TNT Sports, and Premier Sports in Full HD and 4K quality as part of every subscription plan. Watch Premier League, Champions League, Formula 1, UFC, and more without paying for expensive Sky contracts. Our IPTV subscription with Sky Sports UK starts from just £9/month.",
  },
  {
    question: "What is the EPG guide for IPTV channels?",
    answer:
      "The Electronic Program Guide (EPG) is an interactive TV schedule that shows you what's playing on every channel, now and in the future. Our EPG covers up to 30 days ahead, with search, filters, and reminders so you never miss your favourite shows. It's like having a premium Sky TV guide built into your cheap IPTV subscription UK plan.",
  },
  {
    question: "How many devices can stream simultaneously?",
    answer:
      "That depends on your plan. Starter allows 1 simultaneous connection, Pro allows 3, and Unlimited allows 5. All plans let you install the app on unlimited devices — you just can't stream on more than your plan's limit at the same time. Perfect for families or households with multiple TVs using our UK IPTV service.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, 100%. We use industry-standard 256-bit SSL encryption for all transactions. We partner with Stripe, one of the world's most trusted payment processors. Your payment details never touch our servers. We also support cryptocurrency payments for additional privacy. All prices are shown in GBP (£) with VAT included.",
  },
  {
    question: "What if I experience buffering on IPTV?",
    answer:
      "Buffering is rare on StreamVault thanks to our 99.9% uptime and CDN-optimised servers across the UK and Europe. If you do experience issues, try: (1) Checking your internet speed (25Mbps+ recommended for 4K IPTV UK). (2) Using a wired Ethernet connection instead of WiFi. (3) Selecting a different server in your account settings. Our 24/7 UK-based support team can also help optimise your setup.",
  },
  {
    question: "Can I cancel or upgrade my IPTV subscription anytime?",
    answer:
      "Absolutely. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your IPTV subscription UK plan at any time from your account dashboard. If you cancel, your access continues until the end of your billing period. We genuinely believe our best IPTV provider UK service is so good you won't want to leave.",
  },
];

export const devices = [
  "Amazon Firestick",
  "Smart TV",
  "Android TV",
  "Apple TV",
  "iPhone",
  "iPad",
  "Android Phone",
  "MAG Box",
  "Samsung TV",
  "LG WebOS",
  "Windows PC",
  "Mac",
];
