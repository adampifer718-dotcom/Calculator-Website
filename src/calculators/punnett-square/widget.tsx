"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePunnettEngine } from "./engine";
import type { PunnettText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PunnettText }) {
  const engine = useMemo(() => makePunnettEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
