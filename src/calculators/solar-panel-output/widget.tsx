"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSolarPanelOutputEngine } from "./engine";
import type { SolarPanelOutputText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SolarPanelOutputText }) {
  const engine = useMemo(() => makeSolarPanelOutputEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
