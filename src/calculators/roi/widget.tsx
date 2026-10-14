"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { roiEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={roiEngine} />;
}
