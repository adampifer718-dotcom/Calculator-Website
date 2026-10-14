"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDoublingTimeEngine } from "./engine";
import type { DoublingTimeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DoublingTimeText }) {
  const engine = useMemo(() => makeDoublingTimeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
