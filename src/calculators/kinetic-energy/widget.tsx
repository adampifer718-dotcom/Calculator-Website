"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeKineticEnergyEngine } from "./engine";
import type { KineticEnergyText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: KineticEnergyText }) {
  const engine = useMemo(() => makeKineticEnergyEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
