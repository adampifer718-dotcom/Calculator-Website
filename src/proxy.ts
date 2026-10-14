import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "@/i18n/config";
import { localizePath, stripLocale } from "@/i18n/paths";
import { NOT_FOUND_SEGMENT, publishedPaths } from "@/i18n/published-paths";
import { routing } from "@/i18n/routing";

const intl = createMiddleware(routing);
const PUBLISHED = publishedPaths();
/** Marks the proxy's own request for the 404 page so it is not treated as unknown again. */
const INTERNAL_HEADER = "x-calcnest-not-found";

/**
 * The localized 404 page with HTTP status 404. Its prerendered HTML is
 * fetched from this server and returned with the right status; if that fails
 * the request is rewritten to the page instead (same content).
 */
async function notFoundResponse(request: NextRequest, locale: Locale): Promise<NextResponse> {
  const url = request.nextUrl.clone();
  url.pathname = localizePath(locale, `/${NOT_FOUND_SEGMENT}`);
  url.search = "";
  try {
    const page = await fetch(url, { headers: { [INTERNAL_HEADER]: "1" }, cache: "no-store" });
    if (page.ok) {
      return new NextResponse(page.body, {
        status: 404,
        headers: { "content-type": page.headers.get("content-type") ?? "text/html; charset=utf-8", "cache-control": "private, no-store" },
      });
    }
  } catch {
    // Fall through to a rewrite.
  }
  return NextResponse.rewrite(url, { status: 404 });
}

/**
 * Locale routing. The only automatic redirect is from the bare homepage "/"
 * to a language the visitor previously chose in the language selector
 * (stored in a cookie). Deep links are never redirected, and browser or IP
 * language is never used to switch language.
 *
 * Unknown URLs are rewritten to the localized 404 page with status 404, so
 * the response is a complete server-rendered page in the visitor's language.
 */
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (request.headers.get(INTERNAL_HEADER) === "1") return intl(request);
  // "/en/..." is redirected to the unprefixed URL by the locale middleware.
  if (pathname.split("/")[1] !== DEFAULT_LOCALE && !PUBLISHED.has(pathname.replace(/(.)\/$/, "$1"))) {
    return notFoundResponse(request, stripLocale(pathname).locale);
  }
  if (request.nextUrl.pathname === "/") {
    const chosen = request.cookies.get(LOCALE_COOKIE)?.value;
    if (isLocale(chosen) && chosen !== DEFAULT_LOCALE) {
      const url = request.nextUrl.clone();
      url.pathname = `/${chosen}`;
      return NextResponse.redirect(url, 307);
    }
  }
  return intl(request);
}

export const config = {
  // Everything except Next internals, metadata/static files and the search index.
  matcher: ["/((?!_next|_vercel|search-index|sitemap.xml|robots.txt|icon.svg|.*\\..*).*)"],
};
