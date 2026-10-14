"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeConfidenceIntervalEngine } from "./engine";
import type { ConfidenceIntervalText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ConfidenceIntervalText }) {
  const engine = useMemo(() => makeConfidenceIntervalEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
