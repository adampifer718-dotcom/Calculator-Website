"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCapRateEngine } from "./engine";
import type { CapRateText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CapRateText }) {
  const engine = useMemo(() => makeCapRateEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
