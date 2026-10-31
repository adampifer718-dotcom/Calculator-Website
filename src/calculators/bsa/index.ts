import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { bsaEngine, makeBsaEngine } from "./engine";

export const bsa = defineCalculator({
  id: "bsa",
  slug: "body-surface-area-calculator",
  status: "published",
  title: "Body Surface Area Calculator",
  shortTitle: "Body Surface Area",
  category: "health",
  collections: ["healthcare"],
  summary: "Estimate body surface area in m² from height and weight with the Mosteller formula, compared with the Du Bois, Haycock and Gehan–George formulas.",
  metaTitle: "Body Surface Area Calculator – Mosteller and Du Bois",
  metaDescription: "Estimate body surface area (BSA) in m² and ft² from height and weight, using the Mosteller formula with Du Bois, Haycock and Gehan–George side by side.",
  keywords: ["body surface area", "BSA calculator", "Mosteller formula", "Du Bois formula", "Haycock formula", "Gehan George", "BSA m2", "surface area of the body"],
  addedOn: "2026-10-28",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "Mosteller RD. Simplified calculation of body-surface area. N Engl J Med. 1987;317(17):1098",
      publisher: "The New England Journal of Medicine (PubMed record)",
      url: "https://pubmed.ncbi.nlm.nih.gov/3657876/",
      usedFor: "The Mosteller formula BSA = √(height in cm × weight in kg ÷ 3600).",
    },
    {
      title: "Body Surface Area (Du Bois Method), citing Du Bois D, Du Bois EF. Arch Intern Med. 1916;17:863–871",
      publisher: "MSD Manual Professional Version, medical calculators",
      url: "https://msdmanuals.com/medical-calculators/BodySurfaceArea-en.htm",
      usedFor: "The Du Bois constants 0.007184 × weight^0.425 × height^0.725.",
    },
    {
      title: "Haycock GB, Schwartz GJ, Wisotsky DH. Geometric method for measuring body surface area: a height-weight formula validated in infants, children, and adults. J Pediatr. 1978;93(1):62–66",
      publisher: "US EPA HERO database record",
      url: "https://heronext.epa.gov/reference/1060493",
      usedFor: "The Haycock formula 0.024265 × weight^0.5378 × height^0.3964.",
    },
    {
      title: "Gehan EA, George SL. Estimation of human body surface area from height and weight. Cancer Chemother Rep. 1970;54(4):225–235",
      publisher: "US EPA HERO database record",
      url: "https://heronext.epa.gov/reference/1060475",
      usedFor: "The Gehan–George formula 0.0235 × weight^0.51456 × height^0.42246.",
    },
  ],
  intro: [
    "Body surface area (BSA) is the total area of the skin, given in square meters. It is used in medicine to scale some measurements, such as cardiac index or kidney filtration, to body size. Measuring it directly is impractical, so it is estimated from height and weight.",
    "This calculator uses the Mosteller formula as its main result because it is simple and widely used. The Du Bois, Haycock and Gehan–George formulas are shown alongside it so you can see how much the estimates differ.",
  ],
  howToUse: [
    "Enter the weight and choose kilograms or pounds.",
    "Enter the height and choose centimeters or inches.",
    "Read the Mosteller estimate in m² and ft², and compare the four formulas in the table.",
  ],
  formulas: [
    { title: "Mosteller", expression: "BSA = √(height × weight ÷ 3600)", explanation: "Height in cm, weight in kg, result in m²." },
    { title: "Du Bois and Du Bois", expression: "BSA = 0.007184 × weight^0.425 × height^0.725", explanation: "The oldest of the four, fitted to a small group of people in 1916." },
    { title: "Haycock", expression: "BSA = 0.024265 × weight^0.5378 × height^0.3964", explanation: "Fitted to measurements from infants to adults." },
    { title: "Gehan and George", expression: "BSA = 0.0235 × weight^0.51456 × height^0.42246", explanation: "Fitted to a larger group of 401 people." },
    { title: "Square feet", expression: "ft² = m² ÷ 0.09290304", explanation: "1 ft = 0.3048 m exactly, so 1 ft² = 0.09290304 m²." },
  ],
  examples: [
    {
      title: "70 kg, 175 cm",
      inputs: { weight: 70, weightUnit: "kg", height: 175, heightUnit: "cm" },
      steps: ["Mosteller: √(175 × 70 ÷ 3600) = √3.4028 ≈ 1.84 m²", "Du Bois ≈ 1.848 m², Haycock ≈ 1.847 m², Gehan–George ≈ 1.854 m²", "1.8447 m² ÷ 0.09290304 ≈ 19.86 ft²"],
      expectedPrimary: 1.8446619684315546,
    },
    {
      title: "82 kg, 168 cm",
      inputs: { weight: 82, weightUnit: "kg", height: 168, heightUnit: "cm" },
      steps: ["Mosteller: √(168 × 82 ÷ 3600) = √3.8267 ≈ 1.96 m²", "Du Bois gives about 1.919 m², the lowest of the four", "Haycock gives about 1.979 m², the highest"],
      expectedPrimary: 1.9561867668161612,
    },
    {
      title: "165 lb, 64 in",
      inputs: { weight: 165, weightUnit: "lb", height: 64, heightUnit: "in" },
      steps: ["165 lb × 0.45359237 = 74.84 kg; 64 in × 2.54 = 162.56 cm", "Mosteller: √(162.56 × 74.84 ÷ 3600) ≈ 1.84 m²", "Du Bois ≈ 1.802 m², Haycock ≈ 1.859 m²"],
      expectedPrimary: 1.838359472848913,
    },
  ],
  assumptions: [
    "The result is an estimate, not medical advice, and this calculator has not yet been professionally reviewed. Never use it to work out a medicine dose without confirmation by a qualified clinician.",
    "All four formulas are statistical fits to groups of people measured decades ago. They can differ from each other and from a person's real surface area by several percent, especially for very small, very tall or very heavy people.",
    "Weights from 0.5 to 500 kg and heights from 30 to 260 cm are accepted. Hospitals may use a different formula, or an adjusted weight, for children or people with obesity.",
    "Pounds are converted with 1 lb = 0.45359237 kg and inches with 1 in = 2.54 cm, both exact.",
  ],
  faqs: [
    { question: "What is a typical body surface area?", answer: "For adults it is usually between about 1.6 and 2.2 m², depending on height and weight. Values for children are much smaller, and the formulas differ more at those sizes." },
    { question: "Which formula should I use?", answer: "Mosteller is the most common because it is easy to calculate and agrees well with the others for most adults. Clinics and protocols often specify a formula, so use the one your care team uses." },
    { question: "Why do the formulas give different answers?", answer: "Each was fitted to a different group of people with a different method of measuring skin area. The differences are usually small for average adults and larger for people outside the range they were built on." },
  ],
  related: ["bmi-calculator", "bmr-calculator", "body-fat-calculator"],
  updated: "2026-10-28",
  engine: bsaEngine,
  text,
  makeEngine: makeBsaEngine,
  translations,
});
