"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { salaryToHourlyEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={salaryToHourlyEngine} />;
}
