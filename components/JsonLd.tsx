const siteUrl = "https://iptvsubscription4k.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IPTV Subscription 4K",
  url: siteUrl,
  logo: `${siteUrl}/images/Logo.png`,
  description:
    "UK's leading IPTV subscription service with 28,000+ channels in HD and 4K quality.",
  foundingDate: "2022",
  areaServed: "GB",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-7380-600578",
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: "Mo-Su 00:00-24:00",
  },
  sameAs: [
    "https://www.facebook.com/iptvsubscription4k",
    "https://twitter.com/iptvsubscription4k",
    "https://www.instagram.com/iptvsubscription4k",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IPTV Subscription 4K",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const product = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Subscription 4K Pro Subscription",
  description:
    "Access 28,000+ live TV channels including UK, US, Sports, Movies and International content in HD and 4K Ultra HD quality.",
  brand: {
    "@type": "Brand",
    name: "IPTV Subscription 4K",
  },
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  offers: [
    {
      "@type": "Offer",
      name: "Basic Plan",
      price: "15.00",
      priceCurrency: "GBP",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "GBP",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "0",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnShippingFees: "https://schema.org/FreeReturn",
      },
    },
    {
      "@type": "Offer",
      name: "Standard Plan",
      price: "35.00",
      priceCurrency: "GBP",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "GBP",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "0",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnShippingFees: "https://schema.org/FreeReturn",
      },
    },
    {
      "@type": "Offer",
      name: "Premium Plan",
      price: "49.00",
      priceCurrency: "GBP",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "GBP",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "0",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnShippingFees: "https://schema.org/FreeReturn",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "10847",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best IPTV subscription in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Subscription 4K is rated the UK's #1 IPTV subscription service with 28,000+ live channels, 4K Ultra HD quality, and 99.9% uptime. Trusted by over 50,000 UK households.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up IPTV on Amazon Firestick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Install the Downloader app from the Amazon App Store. 2. Enable Apps from Unknown Sources in Firestick settings. 3. Open Downloader and enter your IPTV Subscription 4K APK URL. 4. Install and open the app. 5. Enter your login credentials. Setup takes under 2 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free IPTV trial in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IPTV Subscription 4K offers a free 24-hour trial with full access to all 28,000+ channels in HD and 4K quality. No credit card required to start your free trial.",
      },
    },
    {
      "@type": "Question",
      name: "How much does IPTV cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Subscription 4K plans start from £15/month for the Basic plan, £35/month for Standard with 4K access, and £49/month for the Premium plan.",
      },
    },
    {
      "@type": "Question",
      name: "Does IPTV Subscription 4K include Sky Sports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IPTV Subscription 4K includes all Sky Sports channels, BT Sport, TNT Sports, and Premier Sports in Full HD and 4K quality as part of all subscription plans.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices does IPTV Subscription 4K support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Subscription 4K works on Amazon Firestick, Android TV, Smart TV (Samsung, LG), Apple TV, iPhone, iPad, Android phones, MAG boxes, Windows PC, and Mac. One subscription works across all your devices.",
      },
    },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IPTV Subscription 4K UK",
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: "+447380600578",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "10847",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James T." },
      datePublished: "2026-03-15",
      reviewBody:
        "Best IPTV service I have used in the UK. Sky Sports streams perfectly in 4K, zero buffering.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah K." },
      datePublished: "2026-04-02",
      reviewBody:
        "Incredible value for money. My kids love the channels and setup on Firestick took 2 minutes.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IPTV Pricing",
      item: `${siteUrl}/#pricing`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Free Trial",
      item: `${siteUrl}/free-trial`,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
