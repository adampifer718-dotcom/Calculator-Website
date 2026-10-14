import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { CALCULATORS, activeCategories, calculatorPath, calculatorsInCategory } from "@/calculators/registry";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";

const FOOTER_LINKS_PER_CATEGORY = 6;

export function SiteFooter() {
  const categories = activeCategories();
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-md font-semibold text-ink-900">
            <LogoMark className="size-7" />
            {SITE.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">
            {CALCULATORS.length} free calculators with the formula, assumptions and worked examples shown for every result.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/calculators" className="focus-ring rounded text-neutral-700 hover:text-brand-700">All calculators</Link></li>
            <li><Link href="/about" className="focus-ring rounded text-neutral-700 hover:text-brand-700">About & methodology</Link></li>
          </ul>
        </div>
        {categories.map((category) => (
          <nav key={category.slug} aria-label={category.name}>
            <h2 className="text-sm font-semibold text-ink-900">
              <Link href={categoryPath(category.slug)} className="focus-ring rounded hover:text-brand-700">
                {category.name}
              </Link>
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {calculatorsInCategory(category.slug).slice(0, FOOTER_LINKS_PER_CATEGORY).map((c) => (
                <li key={c.slug}>
                  <Link href={calculatorPath(c.slug)} className="focus-ring rounded text-neutral-700 hover:text-brand-700">
                    {c.title}
                  </Link>
                </li>
              ))}
              {category.count > FOOTER_LINKS_PER_CATEGORY && (
                <li>
                  <Link href={categoryPath(category.slug)} className="focus-ring rounded font-medium text-brand-700 hover:text-brand-800">
                    All {category.count} {category.name} calculators
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-neutral-100">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-neutral-500 sm:px-6">
          Results are estimates for general information and are not financial, tax or legal advice. Pay figures are gross amounts before taxes and deductions.
        </p>
      </div>
    </footer>
  );
}
