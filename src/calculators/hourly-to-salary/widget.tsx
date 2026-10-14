"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { hourlyToSalaryEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={hourlyToSalaryEngine} />;
}
