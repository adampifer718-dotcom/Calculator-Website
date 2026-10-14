"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { percentageEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={percentageEngine} />;
}
