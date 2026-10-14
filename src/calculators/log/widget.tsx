"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeLogEngine } from "./engine";
import type { LogText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: LogText }) {
  const engine = useMemo(() => makeLogEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
