import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeWaistToHipEngine, waistToHipEngine } from "./engine";

export const waistToHip = defineCalculator({
  id: "waist-to-hip",
  slug: "waist-to-hip-ratio-calculator",
  status: "published",
  title: "Waist-to-Hip Ratio Calculator",
  shortTitle: "Waist-to-Hip Ratio",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Divide your waist by your hip circumference to get the waist-to-hip ratio, and compare it with the WHO cut-off for women or men.",
  metaTitle: "Waist-to-Hip Ratio Calculator – WHR and WHO Cut-Off",
  metaDescription: "Calculate your waist-to-hip ratio from waist and hip measurements in cm or inches, and see how it compares with the WHO cut-off for women and men.",
  keywords: ["waist to hip ratio", "WHR calculator", "waist hip ratio", "waist circumference", "abdominal fat", "body shape", "WHO waist hip ratio"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Waist circumference and waist-hip ratio: report of a WHO expert consultation, Geneva, 8–11 December 2008",
      publisher: "World Health Organization",
      url: "https://who.int/publications/i/item/9789241501491",
      usedFor: "The waist–hip ratio cut-offs of 0.90 for men and 0.85 for women for substantially increased risk of metabolic complications, and the measurement sites.",
    },
  ],
  expertReview: { area: "medical", status: "pending" },
  intro: [
    "The waist-to-hip ratio (WHR) compares the size of your waist with the size of your hips. A higher ratio means more of your body fat sits around the abdomen, which research has linked with a higher risk of type 2 diabetes and heart disease.",
    "Enter both measurements in the same unit to get your ratio. The calculator then compares it with the cut-off used in a World Health Organization expert consultation: 0.90 for men and 0.85 for women.",
  ],
  howToUse: [
    "Choose centimeters or inches. Both measurements must use the same unit.",
    "Measure your waist midway between your lowest rib and the top of your hip bone, at the end of a normal breath out.",
    "Measure your hips around the widest part of your buttocks, keeping the tape level and snug but not tight.",
    "Choose female or male to select the cut-off, then read your ratio.",
  ],
  formulas: [
    { title: "Waist-to-hip ratio", expression: "WHR = waist circumference ÷ hip circumference", explanation: "The units cancel, so the ratio is the same in centimeters and inches." },
    {
      title: "WHO cut-off",
      expression: "WHR ≥ 0.90 (men)   ·   WHR ≥ 0.85 (women)",
      explanation: "At or above these values, the WHO expert consultation describes the risk of metabolic complications as substantially increased.",
    },
  ],
  examples: [
    {
      title: "Woman, waist 82 cm and hips 100 cm",
      inputs: { unit: "cm", waist: 82, hip: 100, sex: "female" },
      steps: ["WHR = 82 ÷ 100 = 0.82", "The WHO cut-off for women is 0.85", "0.82 is below the cut-off"],
      expectedPrimary: 0.82,
    },
    {
      title: "Man, waist 97 cm and hips 101 cm",
      inputs: { unit: "cm", waist: 97, hip: 101, sex: "male" },
      steps: ["WHR = 97 ÷ 101 ≈ 0.96", "The WHO cut-off for men is 0.90", "0.96 is at or above the cut-off"],
      expectedPrimary: 97 / 101,
    },
    {
      title: "Woman measuring in inches, waist 34 in and hips 40 in",
      inputs: { unit: "in", waist: 34, hip: 40, sex: "female" },
      steps: ["WHR = 34 ÷ 40 = 0.85", "The cut-off for women is 0.85 or more", "The ratio is exactly at the cut-off"],
      expectedPrimary: 0.85,
    },
  ],
  assumptions: [
    "This result is an estimate, not medical advice or a diagnosis, and this calculator has not been professionally reviewed. Talk to a healthcare professional about your health risks.",
    "Measurement sites follow the WHO protocol: the waist midway between the lower edge of the lowest rib and the top of the iliac crest, and the hips at the widest part of the buttocks. Measuring elsewhere changes the ratio.",
    "The 0.90 and 0.85 cut-offs are general reference points from the WHO expert consultation. Suitable cut-offs vary by population and ethnicity, and they are not meant for children or during pregnancy.",
    "The ratio is rounded to two decimals before it is compared with the cut-off.",
  ],
  faqs: [
    {
      question: "Why does the waist-to-hip ratio matter?",
      answer: "It is a simple indicator of where body fat is stored. Fat around the abdomen is more closely linked with metabolic problems than fat on the hips and thighs, and the ratio captures that difference.",
    },
    {
      question: "Is the waist-to-hip ratio better than BMI?",
      answer: "They measure different things. BMI relates weight to height but says nothing about where fat is carried, while the waist-to-hip ratio ignores total weight. Health professionals often look at several measures together.",
    },
    {
      question: "Does it matter whether I use centimeters or inches?",
      answer: "No. The ratio has no unit, so you get the same result either way, as long as both measurements use the same unit.",
    },
  ],
  related: ["bmi-calculator", "bmr-calculator", "heart-rate-zone-calculator"],
  updated: "2026-10-15",
  engine: waistToHipEngine,
  text,
  makeEngine: makeWaistToHipEngine,
  translations,
});
