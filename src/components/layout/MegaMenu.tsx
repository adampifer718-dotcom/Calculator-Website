"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { NavCollection, NavGroup } from "./nav-data";

const ITEMS_PER_GROUP = 3;

/** Desktop "Calculators" menu listing every category and collection available in the current language. */
export function MegaMenu({ groups, collections, total, allHref }: { groups: NavGroup[]; collections: NavCollection[]; total: number; allHref: string }) {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mega-menu"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring-light inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-sm xl:px-3 font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white aria-expanded:bg-white aria-expanded:text-brand-800"
      >
        {t("calculators")}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div id="mega-menu" className="absolute inset-x-0 top-16 border-b border-line bg-white shadow-lift">
          <div className="mx-auto grid max-h-[calc(100vh-5rem)] max-w-7xl gap-8 overflow-y-auto px-6 py-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
            <div>
              <h2 className="mb-4 eyebrow text-accent-700">{t("categories")}</h2>
              <ul className="grid gap-x-6 gap-y-5 lg:grid-cols-4">
                {groups.map((group) => (
                  <li key={group.slug}>
                    <Link href={group.href} onClick={() => setOpen(false)} className="focus-ring group flex items-center gap-2.5 rounded-md">
                      <CategoryIcon category={group.slug} />
                      <span>
                        <span className="block font-semibold text-ink-900 group-hover:text-brand-700">{group.name}</span>
                        <span className="block text-xs text-neutral-500">{tc("calculatorCount", { count: group.count })}</span>
                      </span>
                    </Link>
                    <ul className="mt-3 space-y-1.5 border-s border-neutral-200 ps-3 text-sm">
                      {group.items.slice(0, ITEMS_PER_GROUP).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="focus-ring rounded text-neutral-700 hover:text-brand-700 aria-[current=page]:font-semibold aria-[current=page]:text-brand-700"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      {group.count > ITEMS_PER_GROUP && (
                        <li>
                          <Link href={group.href} onClick={() => setOpen(false)} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                            {t("viewAll", { count: group.count })}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-neutral-100 pt-4 text-sm">
                <Link href={allHref} onClick={() => setOpen(false)} className="focus-ring rounded font-semibold text-brand-700 hover:underline">
                  {t("browseAll", { count: total })}
                </Link>
              </p>
            </div>
            <div className="border-neutral-100 lg:border-s lg:ps-6">
              <h2 className="mb-4 eyebrow text-accent-700">{t("collections")}</h2>
              <ul className="space-y-1.5 text-sm">
                {collections.map((collection) => (
                  <li key={collection.href}>
                    <Link href={collection.href} onClick={() => setOpen(false)} className="focus-ring flex justify-between gap-3 rounded text-neutral-700 hover:text-brand-700">
                      <span>{collection.name}</span>
                      <span className="text-neutral-400">{collection.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
