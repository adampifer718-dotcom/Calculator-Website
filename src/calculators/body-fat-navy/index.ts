import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { bodyFatEngine, makeBodyFatEngine } from "./engine";

export const bodyFatNavy = defineCalculator({
  id: "body-fat-navy",
  slug: "body-fat-calculator",
  status: "published",
  title: "Body Fat Calculator",
  shortTitle: "Body Fat",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Estimate body fat percentage from height and neck, waist and hip measurements with the US Navy circumference method.",
  metaTitle: "Body Fat Calculator – US Navy Tape Method",
  metaDescription: "Estimate body fat percentage from a tape measure using the US Navy circumference equations, in cm or inches, with fat and lean mass from your weight.",
  keywords: ["body fat", "body fat percentage", "navy body fat", "tape test", "circumference method", "lean body mass", "fat mass"],
  addedOn: "2026-10-24",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "Hodgdon JA, Beckett MB. Prediction of Percent Body Fat for U.S. Navy Men from Body Circumferences and Height (Report No. 84-11)",
      publisher: "Naval Health Research Center (DTIC)",
      url: "https://apps.dtic.mil/sti/pdfs/ADA143890.pdf",
      usedFor: "The circumference method for men, from neck and abdomen circumference and height, and its accuracy against underwater weighing.",
    },
    {
      title: "How the military measures body composition",
      publisher: "Human Performance Resources by CHAMP (HPRC), Uniformed Services University",
      url: "https://hprc-online.org/physical-fitness/training-performance/how-military-measures-body-composition",
      usedFor: "Background on the military tape-test method and where the neck, waist and hip measurements are taken.",
    },
  ],
  intro: [
    "Body fat percentage is the share of your body weight that is fat. Laboratory methods measure it directly, but a tape measure gives a quick estimate.",
    "This calculator uses the US Navy circumference method developed by Hodgdon and Beckett in 1984. It needs your height and your neck and waist measurements, plus your hips for the women's equation. Add your weight to see how much of it is fat mass and how much is lean mass.",
  ],
  howToUse: [
    "Choose centimetres or inches and the sex used in the equation.",
    "Enter your height and your neck and waist circumferences (and hip circumference for the women's equation).",
    "Optionally enter your weight to split it into fat mass and lean mass.",
    "Read the estimated body fat percentage.",
  ],
  formulas: [
    { title: "Men (lengths in inches)", expression: "%BF = 86.010 × log₁₀(waist − neck) − 70.041 × log₁₀(height) + 36.76", explanation: "The waist is measured around the abdomen at the navel." },
    { title: "Women (lengths in inches)", expression: "%BF = 163.205 × log₁₀(waist + hip − neck) − 97.684 × log₁₀(height) − 78.387", explanation: "The waist is measured at its narrowest point and the hips at their widest." },
    { title: "Centimetres", expression: "length (in) = length (cm) ÷ 2.54", explanation: "Centimetre measurements are converted to inches before the equations are applied." },
    { title: "Fat and lean mass", expression: "fat mass = weight × %BF ÷ 100\nlean mass = weight − fat mass", explanation: "Lean mass here means everything except fat: muscle, bone, organs and water." },
  ],
  examples: [
    {
      title: "Male, 178 cm tall, neck 38 cm, waist 88 cm, weight 80 kg",
      inputs: { unit: "cm", sex: "male", height: 178, neck: 38, waist: 88, weight: 80, weightUnit: "kg" },
      steps: ["In inches: height 70.08, neck 14.96, waist 34.65", "86.010 × log₁₀(19.69) − 70.041 × log₁₀(70.08) + 36.76 ≈ 18.8%", "Fat mass ≈ 80 × 0.188 = 15.0 kg; lean mass ≈ 65.0 kg"],
      expectedPrimary: 18.80195307052,
    },
    {
      title: "Female, 65 in tall, neck 13 in, waist 29 in, hip 39 in, weight 140 lb",
      inputs: { unit: "in", sex: "female", height: 65, neck: 13, waist: 29, hip: 39, weight: 140, weightUnit: "lb" },
      steps: ["waist + hip − neck = 29 + 39 − 13 = 55 in", "163.205 × log₁₀(55) − 97.684 × log₁₀(65) − 78.387 ≈ 28.6%", "Fat mass ≈ 140 × 0.2856 = 40.0 lb; lean mass ≈ 100.0 lb"],
      expectedPrimary: 28.556264408607,
    },
  ],
  assumptions: [
    "The result is an estimate, not medical advice, and this calculator has not yet been professionally reviewed. Talk to a health professional about what your body fat means for you.",
    "The equations were developed on adult US Navy personnel. They are typically within about 3–4 percentage points of laboratory measurements and can be less accurate for very muscular, very lean or older people, and in pregnancy.",
    "Small measuring errors change the result noticeably, especially at the waist. Measure carefully and consistently.",
    "No health categories are shown, because no single classification table was verified for this page.",
  ],
  faqs: [
    { question: "How accurate is the Navy method?", answer: "For most adults it lands within a few percentage points of methods such as underwater weighing, but individual errors can be larger. It is best used to follow changes over time with the same measuring technique." },
    { question: "Why does the women's equation use the hips?", answer: "Women tend to carry more fat around the hips and thighs, so adding the hip circumference improved the fit of the equation for women." },
    { question: "Why does height lower the estimate?", answer: "A taller person with the same waist and neck has relatively less girth for their frame, so the equation subtracts a term based on height." },
  ],
  related: ["bmi-calculator", "waist-to-hip-ratio-calculator", "tdee-calculator"],
  updated: "2026-10-24",
  engine: bodyFatEngine,
  text,
  makeEngine: makeBodyFatEngine,
  translations,
});
