"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFeedConversionRatioEngine } from "./engine";
import type { FeedConversionRatioText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FeedConversionRatioText }) {
  const engine = useMemo(() => makeFeedConversionRatioEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
