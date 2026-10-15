"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAprApyEngine } from "./engine";
import type { AprApyText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AprApyText }) {
  const engine = useMemo(() => makeAprApyEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
