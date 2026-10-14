"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { doublingTimeEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={doublingTimeEngine} />;
}
