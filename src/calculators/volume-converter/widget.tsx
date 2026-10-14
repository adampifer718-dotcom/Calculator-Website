"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeVolumeConverterEngine } from "./engine";
import type { VolumeConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: VolumeConverterText }) {
  const engine = useMemo(() => makeVolumeConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
