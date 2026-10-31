"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeOeeEngine } from "./engine";
import type { OeeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: OeeText }) {
  const engine = useMemo(() => makeOeeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
