import { MetadataRoute } from "next";
import { locales, localeConfig, siteUrl } from "@/lib/locales";
import { blogPosts } from "@/lib/blog";

function absoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const staticPaths = [
    "/",
    "/pricing",
    "/free-trial",
    "/channels",
    "/setup-guide",
    "/contact",
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...locales
      .map((locale) => localeConfig[locale].path)
      .filter((path) => path !== "/"),
  ];

  return staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: lastMod,
    changeFrequency: path.includes("/blog/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/blog" || path.includes("/blog/") ? 0.7 : 0.8,
  }));
}
