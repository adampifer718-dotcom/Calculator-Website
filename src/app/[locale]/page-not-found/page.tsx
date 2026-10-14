import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NotFound from "../not-found";

/**
 * Localized 404 page, prerendered once per language. The proxy serves its
 * HTML with HTTP status 404 for unknown URLs, so visitors get a complete
 * server-rendered page in their language, with or without JavaScript.
 * Calling notFound() inside the [locale] root layout's tree does not
 * server-render the not-found UI under Cache Components (the HTML is an empty
 * error shell), which is why this page renders the content directly.
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound");
  return { title: t("title"), robots: { index: false, follow: true } };
}

export default function PageNotFound() {
  return <NotFound />;
}
