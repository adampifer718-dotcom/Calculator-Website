"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePercentErrorEngine } from "./engine";
import type { PercentErrorText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PercentErrorText }) {
  const engine = useMemo(() => makePercentErrorEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
