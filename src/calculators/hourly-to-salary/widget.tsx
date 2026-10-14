"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeHourlyToSalaryEngine } from "./engine";
import type { HourlyToSalaryText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: HourlyToSalaryText }) {
  const engine = useMemo(() => makeHourlyToSalaryEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
