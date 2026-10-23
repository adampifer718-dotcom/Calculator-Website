"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePhEngine } from "./engine";
import type { PhText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PhText }) {
  const engine = useMemo(() => makePhEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
