"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDownloadTimeEngine } from "./engine";
import type { DownloadTimeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DownloadTimeText }) {
  const engine = useMemo(() => makeDownloadTimeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
