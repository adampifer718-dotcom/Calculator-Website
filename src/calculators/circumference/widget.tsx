"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCircumferenceEngine } from "./engine";
import type { CircumferenceText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CircumferenceText }) {
  const engine = useMemo(() => makeCircumferenceEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
