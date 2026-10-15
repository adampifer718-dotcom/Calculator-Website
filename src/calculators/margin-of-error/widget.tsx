"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMarginOfErrorEngine } from "./engine";
import type { MarginOfErrorText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MarginOfErrorText }) {
  const engine = useMemo(() => makeMarginOfErrorEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
