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
  "fraction-calculator": dynamic(() => import("./fraction/widget")),
  "gpa-calculator": dynamic(() => import("./gpa/widget")),
  "age-calculator": dynamic(() => import("./age/widget")),
  "date-duration-calculator": dynamic(() => import("./date-duration/widget")),
  "mortgage-calculator": dynamic(() => import("./mortgage/widget")),
  "concrete-calculator": dynamic(() => import("./concrete/widget")),
  "cups-to-grams-converter": dynamic(() => import("./cups-to-grams/widget")),
  "volume-converter": dynamic(() => import("./volume-converter/widget")),
  "quadratic-equation-calculator": dynamic(() => import("./quadratic/widget")),
  "gcf-lcm-calculator": dynamic(() => import("./gcf-lcm/widget")),
  "percent-error-calculator": dynamic(() => import("./percent-error/widget")),
  "z-score-calculator": dynamic(() => import("./z-score/widget")),
  "weighted-average-calculator": dynamic(() => import("./weighted-average/widget")),
  "simple-interest-calculator": dynamic(() => import("./simple-interest/widget")),
  "apr-to-apy-calculator": dynamic(() => import("./apr-apy/widget")),
  "unit-price-calculator": dynamic(() => import("./unit-price/widget")),
  "pizza-size-calculator": dynamic(() => import("./pizza-size/widget")),
  "download-time-calculator": dynamic(() => import("./download-time/widget")),
  "paint-calculator": dynamic(() => import("./paint/widget")),
  "area-converter": dynamic(() => import("./area-converter/widget")),
  "data-storage-converter": dynamic(() => import("./data-storage-converter/widget")),
  "one-rep-max-calculator": dynamic(() => import("./one-rep-max/widget")),
  "plant-spacing-calculator": dynamic(() => import("./plant-spacing/widget")),
  "density-calculator": dynamic(() => import("./density/widget")),
  "ideal-gas-law-calculator": dynamic(() => import("./ideal-gas-law/widget")),
  "half-life-calculator": dynamic(() => import("./half-life/widget")),
  "hardy-weinberg-calculator": dynamic(() => import("./hardy-weinberg/widget")),
  "roof-pitch-calculator": dynamic(() => import("./roof-pitch/widget")),
};

export function CalculatorWidget({ slug, locale, text }: { slug: string; locale: Locale; text: unknown }) {
  const Widget = WIDGETS[slug];
  return Widget ? <Widget locale={locale} text={text} /> : null;
}
