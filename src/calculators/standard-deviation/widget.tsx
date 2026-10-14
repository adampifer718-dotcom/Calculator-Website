"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { standardDeviationEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={standardDeviationEngine} />;
}
