"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { tipEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={tipEngine} />;
}
