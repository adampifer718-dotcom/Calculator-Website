"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRecipeScalerEngine } from "./engine";
import type { RecipeScalerText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RecipeScalerText }) {
  const engine = useMemo(() => makeRecipeScalerEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
