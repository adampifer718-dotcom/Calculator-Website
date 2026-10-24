import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { linearRegressionEngine, makeLinearRegressionEngine } from "./engine";

export const linearRegression = defineCalculator({
  id: "linear-regression",
  slug: "linear-regression-calculator",
  status: "published",
  title: "Linear Regression Calculator",
  shortTitle: "Linear regression",
  category: "statistics",
  collections: ["education-research", "software-data"],
  summary: "Fit a least-squares line ŷ = a + bx to paired data, with r², the slope's standard error, a t test and predictions.",
  metaTitle: "Linear Regression Calculator – Least-Squares Line & r²",
  metaDescription: "Paste paired X and Y data to get the least-squares line ŷ = a + bx, r and r², the slope's standard error, t statistic, p-value and a prediction.",
  keywords: ["linear regression", "least squares", "line of best fit", "regression equation", "slope", "intercept", "r squared", "standard error of the slope"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Introductory Statistics, 12.3 The Regression Equation",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-statistics/pages/12-3-the-regression-equation",
      usedFor: "The least-squares line, its slope and intercept, and the coefficient of determination.",
    },
    {
      title: "Dataplot Reference Manual: LINEAR SLOPE STANDARD DEVIATION",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/lineslsd.htm",
      usedFor: "The standard deviation (standard error) of the slope of a linear least-squares fit.",
    },
  ],
  intro: [
    "Simple linear regression finds the straight line that best predicts one variable, Y, from another, X. The ordinary least-squares line is the one that makes the sum of squared vertical distances between the points and the line as small as possible.",
    "Enter paired observations and the calculator returns the equation ŷ = a + bx, how much of the variation the line explains (r²), the standard error of the slope with a t test of whether the slope could be zero, and an optional prediction. If you only need the strength of the relationship, the Correlation Coefficient Calculator gives Pearson's r and Spearman's ρ on their own.",
  ],
  howToUse: [
    "Type the X values (the predictor) in the first box, separated by commas, spaces or new lines.",
    "Type the matching Y values (the response) in the second box, in the same order. You need at least 3 pairs.",
    "Optionally enter an x value to get the predicted ŷ.",
    "Read the equation, then check r² and the p-value for the slope.",
  ],
  formulas: [
    { title: "Slope and intercept", expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄", explanation: "The least-squares line always passes through the point of means (x̄, ȳ)." },
    { title: "Residual standard error", expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]", explanation: "The typical vertical distance of the points from the line, in units of Y. Two degrees of freedom are used up by a and b." },
    { title: "Standard error and t test of the slope", expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  df = n − 2", explanation: "The two-tailed p-value from Student's t distribution tests the null hypothesis that the true slope is 0." },
    { title: "Coefficient of determination", expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²", explanation: "The share of the variation in Y that the line accounts for. In simple regression it equals the square of Pearson's r." },
  ],
  examples: [
    {
      title: "Weekly study hours and exam scores",
      inputs: { x: "1, 2, 3, 4, 5, 6, 7, 8", y: "52, 55, 61, 64, 68, 73, 75, 81", x0: null },
      steps: ["x̄ = 4.5, ȳ = 66.125; Σ(x − x̄)² = 42 and Σ(x − x̄)(y − ȳ) = 171.5", "b = 171.5 ÷ 42 ≈ 4.08333 and a = 66.125 − 4.08333 × 4.5 = 47.75", "r² ≈ 0.9935; SE(b) ≈ 0.1349, t ≈ 30.28 with 6 df, p ≈ 8.6 × 10⁻⁸"],
      expectedPrimary: "ŷ = 47.75 + 4.08333x",
    },
    {
      title: "Used-car price by age",
      inputs: { x: "1, 3, 4, 6, 8, 10, 12", y: "23900, 21500, 19800, 17200, 15100, 12400, 10300", x0: 5 },
      steps: ["The price falls as the age rises, so the slope is negative: b ≈ −1,245.26 per year.", "a ≈ 24,998.8, the estimated price of a new car.", "At 5 years: ŷ ≈ 24,998.78 − 1,245.26 × 5 ≈ 18,772.5"],
      expectedPrimary: "ŷ = 24,998.8 − 1,245.26x",
    },
    {
      title: "Calibration line for a sensor",
      inputs: { x: "0, 10, 20, 30, 40, 50", y: "3, 35, 62, 98, 127, 161", x0: null },
      steps: ["b = 5510 ÷ 1750 ≈ 3.14857 signal units per unit of concentration", "a ≈ 2.28571, the signal of a blank", "r² ≈ 0.9990 and the residual standard error is about 2.08"],
      expectedPrimary: "ŷ = 2.28571 + 3.14857x",
    },
  ],
  assumptions: [
    "The relationship is roughly linear over the range of the data. A curved pattern needs a different model even when r² looks high.",
    "The p-value and standard errors assume independent observations with residuals that are roughly normal and have constant spread.",
    "X is treated as measured without error; only vertical distances are minimized. Swapping X and Y gives a different line.",
    "Outliers and points with extreme X values can pull the line strongly. Predictions outside the observed X range are extrapolations.",
  ],
  faqs: [
    { question: "How is this different from the correlation coefficient?", answer: "Correlation gives one number for the strength and direction of a linear relationship and treats X and Y alike. Regression gives an equation that predicts Y from X, with its slope in units of Y per unit of X. Use the Correlation Coefficient Calculator if r is all you need." },
    { question: "What does the p-value for the slope mean?", answer: "It is the probability of getting a slope at least this far from 0 if, in truth, Y did not change linearly with X. A small p-value (for example below 0.05) suggests a real linear trend; it says nothing about how large or important the trend is." },
    { question: "Why must the X values differ?", answer: "The slope divides by the spread of the X values. If every X is the same, that spread is zero and any vertical line could fit, so no slope can be calculated." },
  ],
  related: ["correlation-coefficient-calculator", "standard-deviation-calculator", "p-value-calculator"],
  updated: "2026-10-24",
  engine: linearRegressionEngine,
  text,
  makeEngine: makeLinearRegressionEngine,
  translations,
});
