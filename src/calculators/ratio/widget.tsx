"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRatioEngine } from "./engine";
import type { RatioText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RatioText }) {
  const engine = useMemo(() => makeRatioEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
