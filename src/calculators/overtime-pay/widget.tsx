"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeOvertimePayEngine } from "./engine";
import type { OvertimePayText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: OvertimePayText }) {
  const engine = useMemo(() => makeOvertimePayEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
