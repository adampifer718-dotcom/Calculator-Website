"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeProjectileMotionEngine } from "./engine";
import type { ProjectileMotionText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ProjectileMotionText }) {
  const engine = useMemo(() => makeProjectileMotionEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
