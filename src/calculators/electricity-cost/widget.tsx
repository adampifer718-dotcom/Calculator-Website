"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { electricityCostEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={electricityCostEngine} />;
}
