"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBodyFatEngine } from "./engine";
import type { BodyFatText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BodyFatText }) {
  const engine = useMemo(() => makeBodyFatEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
