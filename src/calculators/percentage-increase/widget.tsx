"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { percentageIncreaseEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={percentageIncreaseEngine} />;
}
