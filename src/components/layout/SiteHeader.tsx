import Link from "next/link";
import { CALCULATORS } from "@/calculators/registry";
import { SITE } from "@/lib/site";
import { HeaderSearch } from "./HeaderSearch";
import { LogoMark } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { navGroups } from "./nav-data";

const LINK = "focus-ring rounded-md px-3 py-2 hover:bg-neutral-100 hover:text-ink-900";

export function SiteHeader() {
  const groups = navGroups();
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-2 rounded-md font-semibold text-ink-900">
          <LogoMark />
          <span className="text-lg tracking-tight">{SITE.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-neutral-700">
            <li>
              <MegaMenu groups={groups} total={CALCULATORS.length} />
            </li>
            <li>
              <Link href="/calculators" className={LINK}>
                All calculators
              </Link>
            </li>
            <li>
              <Link href="/about" className={LINK}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden w-64 lg:block">
          <HeaderSearch id="header-search" label="Site search" />
        </div>
        <MobileMenu groups={groups} />
      </div>
    </header>
  );
}
