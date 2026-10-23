"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDrywallEngine } from "./engine";
import type { DrywallText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DrywallText }) {
  const engine = useMemo(() => makeDrywallEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
