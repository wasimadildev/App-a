import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/locales";

const COOKIE_NAME = "NEXT_LOCALE";

function getLocale(request: NextRequest): string {
  // 1. Check cookie
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (cookie && locales.includes(cookie as typeof locales[number])) {
    return cookie;
  }

  // 2. Check Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang
      .split(",")
      .map((l) => l.split(";")[0].trim().toLowerCase());

    for (const lang of preferred) {
      if (lang.startsWith("nl")) return "nl";
      if (lang === "en-us" || lang === "en-us") return "us";
      if (lang === "en-gb" || lang.startsWith("en-gb")) return "uk";
      if (lang.startsWith("en")) return "uk";
    }
  }

  // 3. Default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname === "/manifest.json" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  ) {
    return;
  }

  // If already on a locale path, let it through
  const pathSegments = pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0 && locales.includes(pathSegments[0] as typeof locales[number])) {
    return;
  }

  const locale = getLocale(request);

  // If the user prefers a non-UK locale, redirect
  if (locale !== "uk") {
    const url = new URL(`/${locale}${pathname}`, request.url);
    url.search = request.nextUrl.search;
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE_NAME, locale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    return response;
  }

  // UK stays at root — just set cookie
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, "uk", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
