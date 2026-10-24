"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDueDateEngine } from "./engine";
import type { DueDateText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DueDateText }) {
  const engine = useMemo(() => makeDueDateEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
