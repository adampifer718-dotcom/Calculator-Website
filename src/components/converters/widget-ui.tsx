"use client";

import { useState } from "react";

/** Shared field styles and controls of the converter widgets. */
export const FIELD =
  "block h-12 w-full rounded-[0.875rem] border border-neutral-300 bg-white px-3.5 text-base font-medium text-ink-900 shadow-[0_1px_2px_rgb(30_36_51/0.05)] transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-neutral-400 hover:border-neutral-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/70 focus:outline-none";
export const SELECT = `${FIELD} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%23626a7c'%3E%3Cpath%20fill-rule='evenodd'%20d='M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.4a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pe-10 rtl:bg-[left_0.75rem_center]`;
export const LABEL = "mb-1.5 block text-sm font-semibold text-ink-800";
export const GHOST_BUTTON =
  "focus-ring inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-bold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50";

export function CopyButton({ text, label, copiedLabel, disabled = false }: { text: string; label: string; copiedLabel: string; disabled?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" onClick={copy} disabled={disabled} className={GHOST_BUTTON}>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
        {copied ? <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M7 7V4.5A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5v7a1.5 1.5 0 0 1-1.5 1.5H13M4.5 7h7A1.5 1.5 0 0 1 13 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 15.5v-7A1.5 1.5 0 0 1 4.5 7Z" />}
      </svg>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
