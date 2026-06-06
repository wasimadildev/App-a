import Script from "next/script";

const siteUrl = "https://www.streamvault.co.uk";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StreamVault IPTV UK",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
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
      "https://www.facebook.com/StreamVaultUK",
      "https://twitter.com/StreamVaultUK",
      "https://www.instagram.com/StreamVaultUK",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StreamVault IPTV",
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
    name: "StreamVault IPTV Pro Subscription",
    description:
      "Access 28,000+ live TV channels including UK, US, Sports, Movies and International content in HD and 4K Ultra HD quality.",
    brand: {
      "@type": "Brand",
      name: "StreamVault",
    },
    image: `${siteUrl}/og-image.jpg`,
    url: siteUrl,
    offers: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "9.00",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "19.00",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
      {
        "@type": "Offer",
        name: "Unlimited Plan",
        price: "29.00",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
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
          text: "StreamVault is rated the UK's #1 IPTV subscription service with 28,000+ live channels, 4K Ultra HD quality, and 99.9% uptime. Trusted by over 50,000 UK households.",
        },
      },
      {
        "@type": "Question",
        name: "How do I set up IPTV on Amazon Firestick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. Install the Downloader app from the Amazon App Store. 2. Enable Apps from Unknown Sources in Firestick settings. 3. Open Downloader and enter your StreamVault APK URL. 4. Install and open the app. 5. Enter your login credentials. Setup takes under 2 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free IPTV trial in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, StreamVault offers a free 24-hour trial with full access to all 28,000+ channels in HD and 4K quality. No credit card required to start your free trial.",
        },
      },
      {
        "@type": "Question",
        name: "How much does IPTV cost in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StreamVault IPTV plans start from £9/month for the Starter plan, £19/month for Pro with 4K access, and £29/month for the Unlimited plan with 5 simultaneous connections. Yearly plans save up to 40%.",
        },
      },
      {
        "@type": "Question",
        name: "Does StreamVault IPTV include Sky Sports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, StreamVault includes all Sky Sports channels, BT Sport, TNT Sports, and Premier Sports in Full HD and 4K quality as part of all subscription plans.",
        },
      },
      {
        "@type": "Question",
        name: "Which devices does StreamVault IPTV support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StreamVault works on Amazon Firestick, Android TV, Smart TV (Samsung, LG), Apple TV, iPhone, iPad, Android phones, MAG boxes, Windows PC, and Mac. One subscription works across all your devices.",
        },
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "StreamVault IPTV UK",
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

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
