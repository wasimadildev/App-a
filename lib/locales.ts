export const locales = ["uk", "us", "nl", "eu"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

export const localeConfig: Record<
  Locale,
  {
    path: string;
    hrefLang: string;
    label: string;
    labelShort: string;
    currency: string;
    currencySymbol: string;
    flag: string;
  }
> = {
  uk: {
    path: "/",
    hrefLang: "en-gb",
    label: "United Kingdom",
    labelShort: "UK",
    currency: "GBP",
    currencySymbol: "£",
    flag: "🇬🇧",
  },
  us: {
    path: "/us",
    hrefLang: "en-us",
    label: "United States",
    labelShort: "US",
    currency: "USD",
    currencySymbol: "$",
    flag: "🇺🇸",
  },
  nl: {
    path: "/nl",
    hrefLang: "nl-nl",
    label: "Nederland",
    labelShort: "NL",
    currency: "EUR",
    currencySymbol: "€",
    flag: "🇳🇱",
  },
  eu: {
    path: "/eu",
    hrefLang: "en",
    label: "Europe",
    labelShort: "EU",
    currency: "EUR",
    currencySymbol: "€",
    flag: "🇪🇺",
  },
};

export const siteUrl = "https://www.iptvsubscription4k.com";

export function localizedUrl(locale: Locale, path: string = "/") {
  const prefix = localeConfig[locale].path;
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  if (prefix === "/") return `${siteUrl}${normalizedPath}`;
  return `${siteUrl}${prefix}${normalizedPath}`;
}
