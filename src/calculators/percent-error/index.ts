import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { percentErrorEngine, makePercentErrorEngine } from "./engine";

export const percentError = defineCalculator({
  id: "percent-error",
  slug: "percent-error-calculator",
  status: "published",
  title: "Percent Error Calculator",
  shortTitle: "Percent error",
  category: "math",
  collections: ["education-research"],
  summary: "Compare a measured value with the true value as a percent error, with the absolute and signed relative error.",
  metaTitle: "Percent Error Calculator – Measured vs. True Value",
  metaDescription: "Calculate percent error between a measured and a true value, with the absolute error, signed relative error and whether you over- or underestimated.",
  keywords: ["percent error", "percentage error", "relative error", "absolute error", "experimental value", "accepted value", "lab report", "accuracy"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Percent Error (CHEM 0106: Chemistry of the Environment, section 1.3)",
      publisher: "LibreTexts Chemistry, University of Pittsburgh at Bradford",
      url: "https://chem.libretexts.org/Courses/University_of_Pittsburgh_at_Bradford/CHEM_0106%3A_Chemistry_of_the_Environment/01%3A_Measurement/1.03%3A_Percent_Error",
      usedFor: "Definition of percent error as the absolute error divided by the accepted value, times 100%.",
    },
  ],
  intro: [
    "Percent error tells you how far a measurement landed from the value it should have been, as a share of that true value. It is a standard way to report accuracy in lab work.",
    "Enter what you measured and the accepted value. Besides the percent error, the calculator shows the raw size of the error and whether your result came out too high or too low.",
  ],
  howToUse: [
    "Enter your measured (experimental) value.",
    "Enter the true (accepted or theoretical) value in the same unit. It must not be 0.",
    "Read the percent error. A smaller percentage means a more accurate measurement.",
    "Use the signed relative error or the direction line to see whether you overestimated or underestimated.",
  ],
  formulas: [
    { title: "Percent error", expression: "percent error = |measured − true| ÷ |true| × 100%", explanation: "The size of the error as a percentage of the true value. It is always zero or positive." },
    { title: "Absolute error", expression: "absolute error = |measured − true|", explanation: "The error in the original unit of measurement." },
    { title: "Signed relative error", expression: "relative error = (measured − true) ÷ |true| × 100%", explanation: "Positive when the measurement is too high, negative when it is too low." },
  ],
  examples: [
    {
      title: "Measuring gravitational acceleration with a pendulum",
      inputs: { measured: 9.62, trueValue: 9.81 },
      steps: ["Absolute error = |9.62 − 9.81| = 0.19 m/s²", "Percent error = 0.19 ÷ 9.81 × 100% ≈ 1.9368%", "The signed relative error is about −1.9368%, so the measurement is low."],
      expectedPrimary: (Math.abs(9.62 - 9.81) / 9.81) * 100,
    },
    {
      title: "Timing the speed of sound",
      inputs: { measured: 342.5, trueValue: 343 },
      steps: ["Absolute error = |342.5 − 343| = 0.5 m/s", "Percent error = 0.5 ÷ 343 × 100% ≈ 0.1458%"],
      expectedPrimary: (0.5 / 343) * 100,
    },
    {
      title: "A negative reference value: the zinc electrode potential",
      inputs: { measured: -0.79, trueValue: -0.76 },
      steps: ["Absolute error = |−0.79 − (−0.76)| = 0.03 V", "Percent error = 0.03 ÷ |−0.76| × 100% ≈ 3.9474%", "The measurement is below the accepted value, so the signed relative error is about −3.9474%."],
      expectedPrimary: (Math.abs(-0.79 + 0.76) / 0.76) * 100,
    },
  ],
  assumptions: [
    "Both values use the same unit. Percent error has no unit, but the absolute error is in the unit you entered.",
    "The true value is divided as an absolute value, so the percent error stays positive even when the reference value is negative.",
    "Percent error is not meaningful for quantities on interval scales whose zero is arbitrary, such as temperatures in °C or °F, unless you have a reason to compare against that zero. Kelvin avoids the problem.",
  ],
  faqs: [
    { question: "Can percent error be negative?", answer: "With the usual definition, no, because it uses the absolute value of the difference. Some courses keep the sign to show the direction; that version is shown here as the signed relative error." },
    { question: "What is a good percent error?", answer: "It depends on the experiment and the equipment. In many school labs a few percent is considered good, while precision measurements aim for far less. Ask what tolerance your course or method expects." },
    { question: "What is the difference between percent error and percent difference?", answer: "Percent error compares a measurement with a known true value. Percent difference compares two measurements with each other, usually dividing by their average, when neither is the reference." },
  ],
  related: ["significant-figures-calculator", "percentage-calculator", "percentage-increase-calculator", "standard-deviation-calculator"],
  updated: "2026-10-15",
  engine: percentErrorEngine,
  text,
  makeEngine: makePercentErrorEngine,
  translations,
});
