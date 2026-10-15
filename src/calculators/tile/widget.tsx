"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTileEngine } from "./engine";
import type { TileText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TileText }) {
  const engine = useMemo(() => makeTileEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
