"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAreaShapesEngine } from "./engine";
import type { AreaShapesText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AreaShapesText }) {
  const engine = useMemo(() => makeAreaShapesEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
