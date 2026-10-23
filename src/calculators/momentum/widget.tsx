"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMomentumEngine } from "./engine";
import type { MomentumText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MomentumText }) {
  const engine = useMemo(() => makeMomentumEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
