import Link from "next/link";
import { activeCategories } from "@/calculators/registry";
import { categoryPath } from "@/calculators/categories";
import { SITE } from "@/lib/site";
import { HeaderSearch } from "./HeaderSearch";
import { LogoMark } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const categories = activeCategories().map((c) => ({ name: c.name, href: categoryPath(c.slug) }));
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-2 rounded-md font-semibold text-ink-900">
          <LogoMark />
          <span className="text-lg tracking-tight">{SITE.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-neutral-700">
            <li>
              <Link href="/calculators" className="focus-ring rounded-md px-3 py-2 hover:bg-neutral-100 hover:text-ink-900">
                All calculators
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="focus-ring rounded-md px-3 py-2 hover:bg-neutral-100 hover:text-ink-900">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto hidden w-56 lg:block">
          <HeaderSearch id="header-search" label="Site search" />
        </div>
        <MobileMenu links={[{ name: "All calculators", href: "/calculators" }, ...categories, { name: "About", href: "/about" }]} />
      </div>
    </header>
  );
}
