"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { compoundInterestEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={compoundInterestEngine} />;
}
