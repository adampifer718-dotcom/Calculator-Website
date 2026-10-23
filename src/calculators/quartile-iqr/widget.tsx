"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeQuartileEngine } from "./engine";
import type { QuartileText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: QuartileText }) {
  const engine = useMemo(() => makeQuartileEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
