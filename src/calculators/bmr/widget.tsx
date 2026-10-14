"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { bmrEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={bmrEngine} />;
}
