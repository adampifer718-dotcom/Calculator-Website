"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeProbabilityEventsEngine } from "./engine";
import type { ProbabilityEventsText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ProbabilityEventsText }) {
  const engine = useMemo(() => makeProbabilityEventsEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
