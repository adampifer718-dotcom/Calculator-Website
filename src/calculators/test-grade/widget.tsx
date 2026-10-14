"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { testGradeEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={testGradeEngine} />;
}
