"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { breakEvenEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={breakEvenEngine} />;
}
