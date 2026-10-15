"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeWaistToHipEngine } from "./engine";
import type { WaistToHipText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: WaistToHipText }) {
  const engine = useMemo(() => makeWaistToHipEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
