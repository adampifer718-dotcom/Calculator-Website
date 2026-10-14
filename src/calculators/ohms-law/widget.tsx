"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeOhmsLawEngine } from "./engine";
import type { OhmsLawText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: OhmsLawText }) {
  const engine = useMemo(() => makeOhmsLawEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
