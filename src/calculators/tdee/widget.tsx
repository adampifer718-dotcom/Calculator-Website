"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTdeeEngine } from "./engine";
import type { TdeeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TdeeText }) {
  const engine = useMemo(() => makeTdeeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
