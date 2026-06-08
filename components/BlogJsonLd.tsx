interface BlogJsonLdProps {
  title: unknown;
  description: unknown;
  datePublished: string;
  slug: string;
}

const siteUrl = "https://iptvsubscription4k.com";

export default function BlogJsonLd({
  title,
  description,
  datePublished,
  slug,
}: BlogJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: String(title || ""),
    description: String(description || ""),
    url: `${siteUrl}/blog/${slug}`,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "IPTV Subscription 4K",
    },
    publisher: {
      "@type": "Organization",
      name: "IPTV Subscription 4K",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    image: `${siteUrl}/og-image.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
