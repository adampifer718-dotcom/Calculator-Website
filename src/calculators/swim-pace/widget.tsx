"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSwimPaceEngine } from "./engine";
import type { SwimPaceText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SwimPaceText }) {
  const engine = useMemo(() => makeSwimPaceEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
