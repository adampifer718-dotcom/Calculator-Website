"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBsaEngine } from "./engine";
import type { BsaText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BsaText }) {
  const engine = useMemo(() => makeBsaEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
