import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeWaistToHeightEngine, waistToHeightEngine } from "./engine";

export const waistToHeight = defineCalculator({
  id: "waist-to-height",
  slug: "waist-to-height-ratio-calculator",
  status: "published",
  title: "Waist-to-Height Ratio Calculator",
  shortTitle: "Waist-to-Height Ratio",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Divide your waist by your height to get the waist-to-height ratio, and see which NICE adult reference band it falls in.",
  metaTitle: "Waist-to-Height Ratio Calculator – WHtR and NICE Bands",
  metaDescription: "Work out your waist-to-height ratio in cm or inches, compare it with the NICE adult reference bands, and see the waist size that equals half your height.",
  keywords: ["waist to height ratio", "WHtR", "waist height ratio calculator", "central adiposity", "waist less than half height", "NICE waist to height", "belly fat measure"],
  addedOn: "2026-10-28",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "Overweight and obesity management (NICE guideline NG246), section: Identifying and assessing overweight, obesity and central adiposity",
      publisher: "National Institute for Health and Care Excellence (NICE)",
      url: "https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity",
      usedFor: "The adult waist-to-height ratio bands (0.4 to 0.49, 0.5 to 0.59, 0.6 or more) and their use for adults with a BMI under 35.",
    },
    {
      title: "Keep the size of your waist to less than half of your height, NICE recommends",
      publisher: "National Institute for Health and Care Excellence (NICE)",
      url: "https://www.nice.org.uk/news/articles/keep-the-size-of-your-waist-to-less-than-half-of-your-height-nice--recommends",
      usedFor: "The public message to keep the waist below half of the height (a ratio under 0.5).",
    },
  ],
  intro: [
    "The waist-to-height ratio (WHtR) is your waist circumference divided by your height. It is a simple way to estimate how much fat is carried around the middle of the body, known as central adiposity, which is linked with type 2 diabetes, high blood pressure and heart disease.",
    "In the UK, NICE suggests that adults with a BMI under 35 use this ratio alongside BMI, with the simple message of keeping your waist to less than half your height. This calculator shows your ratio, the NICE reference band it falls in and the waist size that matches a ratio of 0.5.",
  ],
  howToUse: [
    "Choose centimeters or inches. Use the same unit for both measurements.",
    "Measure your waist halfway between your lowest rib and the top of your hip bone, after breathing out normally, with the tape level and snug.",
    "Measure your height without shoes.",
    "Read your ratio, the reference band and the waist size for a ratio of 0.5.",
  ],
  formulas: [
    { title: "Waist-to-height ratio", expression: "WHtR = waist circumference ÷ height", explanation: "Both in the same unit, so the units cancel and the ratio is the same in cm and inches." },
    { title: "NICE adult reference bands", expression: "0.4 to 0.49: no increased health risk\n0.5 to 0.59: increased health risk\n0.6 or more: high health risk", explanation: "For adults with a BMI under 35. These are reference bands, not a diagnosis." },
    { title: "Waist at half your height", expression: "waist for a ratio of 0.5 = height ÷ 2", explanation: "The threshold behind the advice to keep your waist below half your height." },
  ],
  examples: [
    {
      title: "Waist 84 cm, height 172 cm",
      inputs: { unit: "cm", waist: 84, height: 172 },
      steps: ["WHtR = 84 ÷ 172 ≈ 0.49", "0.49 is in the 0.4 to 0.49 band", "Half the height is 172 ÷ 2 = 86 cm, so the waist is 2 cm under it"],
      expectedPrimary: 0.4883720930232558,
    },
    {
      title: "Waist 38 in, height 68 in",
      inputs: { unit: "in", waist: 38, height: 68 },
      steps: ["WHtR = 38 ÷ 68 ≈ 0.56", "0.56 is in the 0.5 to 0.59 band", "Half the height is 34 in, so the waist is 4 in above it"],
      expectedPrimary: 0.5588235294117647,
    },
    {
      title: "Waist 104 cm, height 168 cm",
      inputs: { unit: "cm", waist: 104, height: 168 },
      steps: ["WHtR = 104 ÷ 168 ≈ 0.62", "0.62 is in the 0.6 or more band", "A ratio of 0.6 would be a waist of 168 × 0.6 = 100.8 cm"],
      expectedPrimary: 0.6190476190476191,
    },
  ],
  assumptions: [
    "The result is an estimate, not medical advice or a diagnosis, and this calculator has not yet been professionally reviewed. Talk to a doctor or nurse about what your measurements mean for you.",
    "The bands come from the NICE guideline for adults with a BMI under 35, of any sex or ethnicity, and are shown for reference only. NICE does not use them for adults with a BMI of 35 or more, because their ratio is almost always high.",
    "The calculator uses the adult bands. It is not meant for children and young people, or during pregnancy, without clinical advice.",
    "Small differences in where and how tightly the tape is placed change the ratio, so measure the same way each time if you are tracking it.",
  ],
  faqs: [
    { question: "What is a healthy waist-to-height ratio?", answer: "NICE describes a ratio of 0.4 to 0.49 as showing no increased health risk for adults with a BMI under 35. The simple rule is to keep your waist to less than half your height." },
    { question: "How is it different from BMI?", answer: "BMI compares weight with height and cannot tell where fat is stored. The waist-to-height ratio looks at the waist, so it reflects fat around the middle, which is more closely linked with some health risks. NICE suggests using both." },
    { question: "How does it compare with the waist-to-hip ratio?", answer: "Both look at fat around the waist. The waist-to-hip ratio divides by hip size and has different cut-offs for women and men, while the waist-to-height ratio divides by height and uses the same bands for everyone." },
  ],
  related: ["waist-to-hip-ratio-calculator", "bmi-calculator", "body-fat-calculator"],
  updated: "2026-10-28",
  engine: waistToHeightEngine,
  text,
  makeEngine: makeWaistToHeightEngine,
  translations,
});
