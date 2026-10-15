"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDateAddEngine } from "./engine";
import type { DateAddText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DateAddText }) {
  const engine = useMemo(() => makeDateAddEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
