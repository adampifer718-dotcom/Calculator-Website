"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRoiEngine } from "./engine";
import type { RoiText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RoiText }) {
  const engine = useMemo(() => makeRoiEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
