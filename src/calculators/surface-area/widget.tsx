"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSurfaceAreaEngine } from "./engine";
import type { SurfaceAreaText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SurfaceAreaText }) {
  const engine = useMemo(() => makeSurfaceAreaEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
