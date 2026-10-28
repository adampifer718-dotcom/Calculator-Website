"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDnaToMrnaEngine } from "./engine";
import type { DnaToMrnaText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DnaToMrnaText }) {
  const engine = useMemo(() => makeDnaToMrnaEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
