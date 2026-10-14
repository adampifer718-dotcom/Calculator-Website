"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { sigFigEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={sigFigEngine} />;
}
