"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeVolumeShapesEngine } from "./engine";
import type { VolumeShapesText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: VolumeShapesText }) {
  const engine = useMemo(() => makeVolumeShapesEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
