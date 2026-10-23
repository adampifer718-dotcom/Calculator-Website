"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeForceEngine } from "./engine";
import type { ForceText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ForceText }) {
  const engine = useMemo(() => makeForceEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
