"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { pValueEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={pValueEngine} />;
}
