"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/**
 * Interactive form for each calculator, code-split so a page only loads the
 * engine it renders. Forms are still server-rendered with their default
 * result. Add one entry per calculator in the registry (enforced by tests).
 */
export const WIDGETS: Record<string, ComponentType> = {
  "salary-to-hourly-calculator": dynamic(() => import("./salary-to-hourly/widget")),
  "hourly-to-salary-calculator": dynamic(() => import("./hourly-to-salary/widget")),
  "percentage-calculator": dynamic(() => import("./percentage/widget")),
  "percentage-increase-calculator": dynamic(() => import("./percentage-increase/widget")),
  "roi-calculator": dynamic(() => import("./roi/widget")),
  "sales-tax-calculator": dynamic(() => import("./sales-tax/widget")),
  "square-footage-calculator": dynamic(() => import("./square-footage/widget")),
  "test-grade-calculator": dynamic(() => import("./test-grade/widget")),
  "log-calculator": dynamic(() => import("./log/widget")),
  "significant-figures-calculator": dynamic(() => import("./significant-figures/widget")),
  "scientific-notation-calculator": dynamic(() => import("./scientific-notation/widget")),
  "exponent-calculator": dynamic(() => import("./exponent/widget")),
  "square-root-calculator": dynamic(() => import("./square-root/widget")),
  "circumference-calculator": dynamic(() => import("./circumference/widget")),
  "slope-calculator": dynamic(() => import("./slope/widget")),
  "pythagorean-theorem-calculator": dynamic(() => import("./pythagorean/widget")),
  "p-value-calculator": dynamic(() => import("./p-value/widget")),
  "confidence-interval-calculator": dynamic(() => import("./confidence-interval/widget")),
  "bmi-calculator": dynamic(() => import("./bmi/widget")),
  "tip-calculator": dynamic(() => import("./tip/widget")),
  "discount-calculator": dynamic(() => import("./discount/widget")),
  "compound-interest-calculator": dynamic(() => import("./compound-interest/widget")),
};

export function CalculatorWidget({ slug }: { slug: string }) {
  const Widget = WIDGETS[slug];
  return Widget ? <Widget /> : null;
}
