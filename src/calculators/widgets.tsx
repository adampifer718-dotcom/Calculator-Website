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
};

export function CalculatorWidget({ slug }: { slug: string }) {
  const Widget = WIDGETS[slug];
  return Widget ? <Widget /> : null;
}
