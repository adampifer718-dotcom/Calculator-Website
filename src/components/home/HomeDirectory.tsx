"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useId, useMemo, useState } from "react";
import type { CategorySlug } from "@/calculators/framework/types";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { normalize } from "@/lib/search";

export interface DirectoryCategory {
  slug: CategorySlug;
  name: string;
  href: string;
  count: number;
  calculators: { slug: string; title: string; href: string }[];
}

/**
 * Compact homepage directory: a single "Browse all calculators" button that
 * expands a panel with name search and category filters. The links stay in
 * the HTML while collapsed (the panel is only hidden), so crawlers and
 * in-page find still reach every calculator.
 */
export function HomeDirectory({ categories, total, allHref, allLabel }: { categories: DirectoryCategory[]; total: number; allHref: string; allLabel: string }) {
  const t = useTranslations("home");
  const td = useTranslations("directory");
  const id = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("");

  const groups = useMemo(() => {
    const words = normalize(query).split(" ").filter(Boolean);
    return categories
      .filter((c) => !category || c.slug === category)
      .map((c) => ({ ...c, calculators: c.calculators.filter((calc) => words.every((w) => normalize(calc.title).includes(w))) }))
      .filter((c) => c.calculators.length > 0);
  }, [categories, category, query]);
  const shown = groups.reduce((sum, g) => sum + g.calculators.length, 0);
  const filtering = query.trim() !== "" || category !== "";
  const status = !filtering
    ? td("showingAll", { count: total })
    : shown === 0
      ? query.trim()
        ? td("noQueryMatch", { query: query.trim() })
        : td("noFilterMatch")
      : query.trim()
        ? td("filteredQuery", { shown, total, query: query.trim() })
        : td("filtered", { shown, total });

  const chip = (active: boolean) =>
    `focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-1 transition-colors ${
      active ? "bg-brand-700 text-white ring-brand-700" : "bg-white text-ink-800 ring-line hover:bg-brand-50 hover:text-brand-800"
    }`;

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-lead`}
        data-home-directory-toggle
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex w-full items-center gap-4 p-5 text-start transition-colors hover:bg-brand-50/60 sm:p-6"
      >
        <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-5">
            <path d="M4 6h16M4 12h16M4 18h10" />
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span id={`${id}-title`} className="block text-lg font-extrabold text-ink-900">{t("directoryToggle")}</span>
          <span id={`${id}-lead`} className="mt-0.5 block text-sm text-neutral-600">{t("directoryLead", { count: total, categories: categories.length })}</span>
        </span>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`size-6 shrink-0 rounded-full bg-cream p-0.5 text-brand-700 ring-1 ring-line transition-transform ${open ? "rotate-180" : ""}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      <div id={`${id}-panel`} hidden={!open} data-home-directory-panel className="border-t border-line bg-cream/40 p-5 sm:p-6">
        <div className="max-w-md">
          <label htmlFor="home-directory-search" className="mb-1.5 block text-sm font-semibold text-ink-800">
            {td("search")}
          </label>
          <input
            id="home-directory-search"
            type="search"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={td("searchPlaceholder")}
            className="block h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm font-medium text-ink-900 placeholder:font-normal placeholder:text-neutral-500 hover:border-neutral-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/70 focus:outline-none"
          />
        </div>
        <div role="group" aria-label={td("category")} className="mt-4 flex flex-wrap gap-2">
          <button type="button" aria-pressed={category === ""} onClick={() => setCategory("")} className={chip(category === "")}>
            {td("allCategories")} <span className={category === "" ? "text-brand-100" : "text-neutral-500"}>{total}</span>
          </button>
          {categories.map((c) => (
            <button key={c.slug} type="button" aria-pressed={category === c.slug} onClick={() => setCategory(category === c.slug ? "" : c.slug)} className={chip(category === c.slug)}>
              {c.name} <span className={category === c.slug ? "text-brand-100" : "text-neutral-500"}>{c.count}</span>
            </button>
          ))}
        </div>
        <p role="status" className="mt-4 text-sm text-neutral-700" data-home-directory-status>
          {status}
        </p>
        <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <section key={group.slug} aria-labelledby={`${id}-${group.slug}`}>
              <h3 id={`${id}-${group.slug}`}>
                <Link href={group.href} className="focus-ring flex items-center gap-2.5 rounded-lg font-bold text-ink-900 hover:text-brand-700">
                  <CategoryIcon category={group.slug} size="sm" />
                  {group.name}
                </Link>
              </h3>
              <ul className="mt-2.5 space-y-1.5 border-s-2 border-line ps-4 text-sm">
                {group.calculators.map((calc) => (
                  <li key={calc.slug}>
                    <Link href={calc.href} className="focus-ring rounded text-neutral-700 hover:text-brand-700 hover:underline">
                      {calc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Link href={allHref} className="focus-ring btn-primary mt-6 h-11 px-5 text-sm">
          {allLabel}
        </Link>
      </div>
    </div>
  );
}
