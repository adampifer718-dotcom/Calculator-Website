import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { CALCULATORS, activeCategories, activeCollections } from "@/calculators/registry";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";

const LINK = "focus-ring rounded text-neutral-700 hover:text-brand-700";

export function SiteFooter() {
  const categories = activeCategories();
  const collections = activeCollections();
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-md font-semibold text-ink-900">
            <LogoMark className="size-7" />
            {SITE.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">
            {CALCULATORS.length} free calculators with the formula, assumptions and worked examples shown for every result.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/calculators" className={LINK}>
                All calculators
              </Link>
            </li>
            <li>
              <Link href="/about" className={LINK}>
                About & methodology
              </Link>
            </li>
          </ul>
        </div>
        <nav aria-label="Categories">
          <h2 className="text-sm font-semibold text-ink-900">Categories</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={categoryPath(category.slug)} className={LINK}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Industry collections">
          <h2 className="text-sm font-semibold text-ink-900">Industry collections</h2>
          <ul className="mt-3 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link href={collectionPath(collection.slug)} className={LINK}>
                  {collection.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-neutral-100">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-neutral-500 sm:px-6">
          Results are estimates for general information and are not financial, tax, legal or medical advice. Pay figures are gross amounts before taxes and deductions.
        </p>
      </div>
    </footer>
  );
}
