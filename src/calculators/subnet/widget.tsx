"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSubnetEngine } from "./engine";
import type { SubnetText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SubnetText }) {
  const engine = useMemo(() => makeSubnetEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
