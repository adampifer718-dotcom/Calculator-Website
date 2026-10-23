"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTriangleEngine } from "./engine";
import type { TriangleText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TriangleText }) {
  const engine = useMemo(() => makeTriangleEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
