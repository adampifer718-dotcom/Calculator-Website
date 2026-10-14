"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { molarityEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={molarityEngine} />;
}
