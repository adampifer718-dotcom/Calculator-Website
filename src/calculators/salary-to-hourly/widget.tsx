"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSalaryToHourlyEngine } from "./engine";
import type { SalaryToHourlyText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SalaryToHourlyText }) {
  const engine = useMemo(() => makeSalaryToHourlyEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
