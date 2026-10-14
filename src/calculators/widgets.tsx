"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";

// Each widget takes its own text type; the registry stores them type-erased.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WidgetProps = { locale: Locale; text: any };

/**
 * Interactive form for each calculator, code-split so a page only loads the
 * engine it renders. Forms are still server-rendered with their default
 * result. Add one entry per calculator in the registry (enforced by tests).
 */
export const WIDGETS: Record<string, ComponentType<WidgetProps>> = {
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
  "length-converter": dynamic(() => import("./length-converter/widget")),
  "weight-converter": dynamic(() => import("./weight-converter/widget")),
  "temperature-converter": dynamic(() => import("./temperature-converter/widget")),
  "speed-distance-time-calculator": dynamic(() => import("./speed-distance-time/widget")),
  "ohms-law-calculator": dynamic(() => import("./ohms-law/widget")),
  "kinetic-energy-calculator": dynamic(() => import("./kinetic-energy/widget")),
  "molarity-calculator": dynamic(() => import("./molarity/widget")),
  "dilution-calculator": dynamic(() => import("./dilution/widget")),
  "doubling-time-calculator": dynamic(() => import("./doubling-time/widget")),
  "rainwater-harvesting-calculator": dynamic(() => import("./rainwater-harvesting/widget")),
  "recipe-scaler": dynamic(() => import("./recipe-scaler/widget")),
  "running-pace-calculator": dynamic(() => import("./running-pace/widget")),
  "bmr-calculator": dynamic(() => import("./bmr/widget")),
  "electricity-cost-calculator": dynamic(() => import("./electricity-cost/widget")),
  "loan-payment-calculator": dynamic(() => import("./loan-payment/widget")),
  "break-even-calculator": dynamic(() => import("./break-even/widget")),
  "profit-margin-calculator": dynamic(() => import("./profit-margin/widget")),
  "fuel-cost-calculator": dynamic(() => import("./fuel-cost/widget")),
  "mean-median-mode-calculator": dynamic(() => import("./mean-median-mode/widget")),
  "standard-deviation-calculator": dynamic(() => import("./standard-deviation/widget")),
};

export function CalculatorWidget({ slug, locale, text }: { slug: string; locale: Locale; text: unknown }) {
  const Widget = WIDGETS[slug];
  return Widget ? <Widget locale={locale} text={text} /> : null;
}
