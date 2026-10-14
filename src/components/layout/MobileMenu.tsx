"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HeaderSearch } from "./HeaderSearch";
import type { NavGroup } from "./nav-data";

export function MobileMenu({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu after navigating.
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
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="ml-auto lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring inline-flex size-10 items-center justify-center rounded-lg text-ink-900 hover:bg-neutral-100"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-16 border-b border-neutral-200 bg-white px-4 pt-4 pb-6 shadow-lg sm:px-6">
          <HeaderSearch id="mobile-search" label="Menu search" />
          <nav aria-label="Mobile" className="mt-4 max-h-[calc(100vh-11rem)] overflow-y-auto">
            <ul className="grid gap-1">
              {groups.map((group) => (
                <li key={group.slug}>
                  <details className="group rounded-lg open:bg-neutral-50">
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-neutral-100 [&::-webkit-details-marker]:hidden">
                      <span>
                        {group.name} <span className="text-sm font-normal text-neutral-500">({group.count})</span>
                      </span>
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-neutral-500 group-open:rotate-180">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <ul className="pb-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="focus-ring block rounded-lg px-6 py-2 text-sm text-neutral-700 hover:text-brand-700 aria-[current=page]:font-semibold aria-[current=page]:text-brand-700"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={group.href} onClick={() => setOpen(false)} className="focus-ring block rounded-lg px-6 py-2 text-sm font-medium text-brand-700">
                          View {group.name} category
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              ))}
              {[
                { name: "All calculators", href: "/calculators" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="focus-ring block rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-neutral-100 aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
