import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { bmiEngine, makeBmiEngine } from "./engine";

export const bmi = defineCalculator({
  id: "bmi",
  slug: "bmi-calculator",
  status: "published",
  title: "BMI Calculator",
  shortTitle: "BMI",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Calculate body mass index from height and weight in metric or imperial units.",
  metaTitle: "BMI Calculator – Body Mass Index for Adults",
  metaDescription: "Calculate your body mass index (BMI) from height and weight in kg and cm or lb, feet and inches, with the adult BMI category and healthy weight range.",
  keywords: ["bmi", "body mass index", "healthy weight", "overweight", "weight", "height", "obesity"],
  popularRank: 19,
  addedOn: "2026-10-14",
  featured: true,
  sources: [
    {
      "title": "Obesity and overweight (fact sheet)",
      "publisher": "World Health Organization",
      "url": "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
      "usedFor": "Adult BMI definition and category cut-offs."
    },
    {
      "title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811",
      "publisher": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/pml/special-publication-811",
      "usedFor": "Exact pound and inch conversion factors."
    }
  ],
  expertReview: { area: "medical", status: "pending" },
  intro: ["Body mass index (BMI) compares weight with height. It is a quick screening measure for adults, not a diagnosis.", "Enter your height and weight in metric or imperial units to see your BMI, the adult category and the weight range that corresponds to a healthy BMI for your height."],
  howToUse: ["Choose metric or imperial units.", "Enter your weight and height.", "Read your BMI, category and healthy weight range."],
  formulas: [
    { title: "BMI", expression: "BMI = weight (kg) ÷ height (m)²", explanation: "Imperial units are converted with 1 lb = 0.45359237 kg and 1 in = 2.54 cm." },
    { title: "Adult categories", expression: "Under 18.5: underweight\n18.5–24.9: healthy weight\n25–29.9: overweight\n30 or more: obesity", explanation: "World Health Organization categories for adults." },
  ],
  examples: [
    {
      title: "70 kg, 175 cm",
      inputs: {"units": "metric", "weightKg": 70, "heightCm": 175},
      steps: ["Height = 1.75 m", "BMI = 70 ÷ 1.75² ≈ 22.9, healthy weight"],
      expectedPrimary: 70/1.75**2,
    },
    {
      title: "180 lb, 5 ft 10 in",
      inputs: {"units": "imperial", "weightLb": 180, "heightFt": 5, "heightIn": 10},
      steps: ["180 lb = 81.65 kg; 70 in = 1.778 m", "BMI = 81.65 ÷ 1.778² ≈ 25.8, overweight"],
      expectedPrimary: (180*0.45359237)/(70*0.0254)**2,
    },
  ],
  assumptions: ["For adults aged 18 and over. Children and teens use age- and sex-specific percentiles.", "BMI does not measure body fat directly and can misclassify athletes, older adults and pregnant people.", "This is not medical advice. Talk to a healthcare professional about your health."],
  faqs: [
    { question: "What is a healthy BMI?", answer: "For most adults, 18.5 to 24.9." },
    { question: "Is BMI accurate?", answer: "It is a useful screening tool for populations, but it does not distinguish muscle from fat or account for where fat is stored." },
    { question: "Does BMI work for children?", answer: "Not with adult categories. Children's BMI is compared with growth charts for their age and sex." },
  ],
  related: ["percentage-calculator", "percentage-increase-calculator", "tip-calculator"],
  updated: "2026-10-14",
  engine: bmiEngine,
  text,
  makeEngine: makeBmiEngine,
  translations,
});
