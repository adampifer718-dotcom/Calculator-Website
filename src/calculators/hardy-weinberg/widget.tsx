"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeHardyWeinbergEngine } from "./engine";
import type { HardyWeinbergText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: HardyWeinbergText }) {
  const engine = useMemo(() => makeHardyWeinbergEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
