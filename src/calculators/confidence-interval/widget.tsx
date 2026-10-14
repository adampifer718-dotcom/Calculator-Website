"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { confidenceIntervalEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={confidenceIntervalEngine} />;
}
