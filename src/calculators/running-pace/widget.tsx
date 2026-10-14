"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRunningPaceEngine } from "./engine";
import type { RunningPaceText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RunningPaceText }) {
  const engine = useMemo(() => makeRunningPaceEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
