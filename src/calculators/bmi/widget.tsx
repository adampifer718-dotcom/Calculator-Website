"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { bmiEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={bmiEngine} />;
}
