"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { slopeEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={slopeEngine} />;
}
