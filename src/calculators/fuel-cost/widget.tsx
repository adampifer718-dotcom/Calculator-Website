"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { fuelCostEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={fuelCostEngine} />;
}
