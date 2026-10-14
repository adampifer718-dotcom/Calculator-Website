"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { squareRootEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={squareRootEngine} />;
}
