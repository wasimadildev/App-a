import { MetadataRoute } from "next";
import { locales, localeConfig, siteUrl } from "@/lib/locales";
import { blogContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = localeConfig[locale].path;
    const lastMod = new Date();

    entries.push(
      {
        url: `${siteUrl}${prefix}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: locale === "uk" ? 1.0 : 0.9,
      },
      {
        url: `${siteUrl}${prefix}/pricing`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${siteUrl}${prefix}/free-trial`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${siteUrl}${prefix}/channels`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${siteUrl}${prefix}/setup-guide`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${siteUrl}${prefix}/contact`,
        lastModified: lastMod,
        changeFrequency: "yearly",
        priority: 0.5,
      },
      {
        url: `${siteUrl}${prefix}/blog`,
        lastModified: lastMod,
        changeFrequency: "daily",
        priority: 0.7,
      }
    );

    const posts = blogContent[locale];
    if (posts) {
      for (const post of posts) {
        entries.push({
          url: `${siteUrl}${prefix}/blog/${post.slug}`,
          lastModified: lastMod,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return entries;
}
