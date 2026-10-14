import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from "@/i18n/config";
import { routing } from "@/i18n/routing";

const intl = createMiddleware(routing);

/**
 * Locale routing. The only automatic redirect is from the bare homepage "/"
 * to a language the visitor previously chose in the language selector
 * (stored in a cookie). Deep links are never redirected, and browser or IP
 * language is never used to switch language.
 */
export default function proxy(request: NextRequest) {
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
