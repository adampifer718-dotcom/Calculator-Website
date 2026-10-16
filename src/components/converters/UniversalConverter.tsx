"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import type { ConverterGroup } from "@/converters/types";
import { ConverterWidget, type ConverterLabels } from "./ConverterWidget";

export interface UniversalOption {
  id: string;
  group: ConverterGroup;
  title: string;
  shortTitle: string;
  href: string;
  labels: ConverterLabels;
}

const SELECT =
  "block h-12 w-full max-w-md appearance-none rounded-[0.875rem] border border-neutral-300 bg-white bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat ps-3.5 pe-10 text-base font-semibold text-ink-900 hover:border-neutral-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/70 focus:outline-none rtl:bg-[left_0.75rem_center]";
const CHEVRON = `bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%23626a7c'%3E%3Cpath%20fill-rule='evenodd'%20d='M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.4a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z'/%3E%3C/svg%3E")]`;

/** Pick any measurement, then convert with the same widget the dedicated pages use. */
export function UniversalConverter({ options, groupNames, initial }: { options: UniversalOption[]; groupNames: Record<string, string>; initial: string }) {
  const t = useTranslations("converters");
  const id = useId();
  const [selected, setSelected] = useState(initial);
  const option = options.find((o) => o.id === selected) ?? options[0];
  const groups = [...new Set(options.map((o) => o.group))];
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end gap-x-4 gap-y-2">
        <div className="min-w-0 grow">
          <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-800">
            {t("measurement")}
          </label>
          <select id={id} value={option.id} onChange={(e) => setSelected(e.target.value)} className={`${SELECT} ${CHEVRON}`}>
            {groups.map((group) => (
              <optgroup key={group} label={groupNames[group]}>
                {options
                  .filter((o) => o.group === group)
                  .map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
        <Link href={option.href} className="focus-ring rounded text-sm font-bold text-brand-700 hover:underline">
          {t("openConverter", { name: option.shortTitle })}
        </Link>
      </div>
      <ConverterWidget key={option.id} specId={option.id} labels={option.labels} />
    </div>
  );
}
