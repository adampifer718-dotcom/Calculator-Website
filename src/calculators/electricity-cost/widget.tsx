"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeElectricityCostEngine } from "./engine";
import type { ElectricityCostText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ElectricityCostText }) {
  const engine = useMemo(() => makeElectricityCostEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
