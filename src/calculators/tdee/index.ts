import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeTdeeEngine, tdeeEngine } from "./engine";

export const tdee = defineCalculator({
  id: "tdee",
  slug: "tdee-calculator",
  status: "published",
  title: "TDEE Calculator",
  shortTitle: "TDEE",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Estimate total daily energy expenditure from the Mifflin–St Jeor BMR and an activity multiplier, with every activity level side by side.",
  metaTitle: "TDEE Calculator – Total Daily Energy Expenditure",
  metaDescription: "Estimate your total daily energy expenditure in kcal and kJ from the Mifflin–St Jeor BMR and an activity level, with a table of all five levels.",
  keywords: ["tdee", "total daily energy expenditure", "maintenance calories", "calories per day", "activity multiplier", "mifflin st jeor", "physical activity level"],
  addedOn: "2026-10-24",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241–247",
      publisher: "The American Journal of Clinical Nutrition",
      url: "https://doi.org/10.1093/ajcn/51.2.241",
      usedFor: "The Mifflin–St Jeor equation for resting energy expenditure, shared with the BMR Calculator.",
    },
    {
      title: "REE-Mifflin St.Jeor equation, Total EE, Physical Activity Level (PAL)",
      publisher: "National Cancer Institute, Division of Cancer Control and Population Sciences",
      url: "https://cancercontrol.cancer.gov/brp/research/group-evaluated-measures/adopt/ree-pal",
      usedFor: "Estimating total energy expenditure as resting energy expenditure multiplied by a physical activity level.",
    },
  ],
  intro: [
    "Total daily energy expenditure (TDEE) is an estimate of all the energy you use in a day: the energy needed at rest plus the energy for movement, exercise and digesting food. It is often called your maintenance calories.",
    "This calculator first estimates your basal metabolic rate with the Mifflin–St Jeor equation, the same one used by the BMR Calculator, and then multiplies it by a factor for your activity level. The five multipliers from 1.2 to 1.9 are widely used conventions, so treat the result as a starting estimate.",
  ],
  howToUse: [
    "Choose metric or imperial units.",
    "Choose the sex used in the equation and enter your age, weight and height.",
    "Pick the activity level that best matches a typical week.",
    "Read your estimated TDEE, the BMR it is based on and the table comparing all activity levels.",
  ],
  formulas: [
    { title: "Basal metabolic rate (Mifflin–St Jeor)", expression: "BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + s\ns = +5 for males, −161 for females", explanation: "Energy used at complete rest, in kcal per day." },
    { title: "Total daily energy expenditure", expression: "TDEE = BMR × activity multiplier\nsedentary 1.2 · light 1.375 · moderate 1.55 · very active 1.725 · extra active 1.9", explanation: "The multiplier scales resting energy up for daily activity. These values are common conventions, not measured for you." },
    { title: "Rough weekly change", expression: "0.5 kg per week ≈ 0.5 × 7,700 ÷ 7 = 550 kcal/day", explanation: "A rule of thumb that treats 1 kg of body weight as about 7,700 kcal. Real weight change rarely follows it exactly." },
    { title: "Energy units", expression: "1 kcal = 4.184 kJ", explanation: "The thermochemical calorie." },
  ],
  examples: [
    {
      title: "Female, 35 years, 68 kg, 168 cm, moderately active",
      inputs: { units: "metric", sex: "female", age: 35, weightKg: 68, heightCm: 168, activity: "moderate" },
      steps: ["BMR = 10 × 68 + 6.25 × 168 − 5 × 35 − 161 = 1,394 kcal/day", "TDEE = 1,394 × 1.55 = 2,160.7 ≈ 2,161 kcal/day", "In kilojoules: 2,160.7 × 4.184 ≈ 9,040 kJ/day"],
      expectedPrimary: 2160.7,
    },
    {
      title: "Male, 45 years, 190 lb, 5 ft 10 in, sedentary",
      inputs: { units: "imperial", sex: "male", age: 45, weightLb: 190, heightFt: 5, heightIn: 10, activity: "sedentary" },
      steps: [
        "190 lb = 86.18 kg; 5 ft 10 in = 70 in = 177.8 cm",
        "BMR = 10 × 86.18 + 6.25 × 177.8 − 5 × 45 + 5 ≈ 1,753 kcal/day",
        "TDEE = 1,753.08 × 1.2 ≈ 2,104 kcal/day; the 0.5 kg-a-week loss figure (≈ 1,554 kcal/day) is below BMR, so a note appears",
      ],
      expectedPrimary: 2103.6906036,
    },
  ],
  assumptions: [
    "The result is an estimate, not medical or dietary advice, and this calculator has not yet been professionally reviewed. Talk to a doctor or registered dietitian before changing what you eat.",
    "The Mifflin–St Jeor equation was developed for healthy adults. It is not suitable for children, pregnancy, breastfeeding or conditions that affect metabolism, and individual BMR can differ from it by 10% or more.",
    "The activity multipliers (1.2 to 1.9) are widely used conventions for broad lifestyle groups. Choosing a level is subjective, and the error in TDEE is larger than the error in BMR.",
    "The ±0.5 kg per week figures use the rough 7,700 kcal per kg rule of thumb. Weight change in practice depends on water, body composition and adaptation, and slows over time.",
  ],
  faqs: [
    { question: "What is the difference between BMR and TDEE?", answer: "BMR is the energy used at complete rest. TDEE adds the energy for daily movement, exercise and digestion, so it is always higher than BMR." },
    { question: "Which activity level should I choose?", answer: "Pick the level that matches an ordinary week, not your best week. If you are between two levels, the table shows both so you can use a value in between. Most people with desk jobs are sedentary or lightly active." },
    { question: "Why is my TDEE different from my fitness tracker?", answer: "Trackers estimate activity from movement and heart rate, while this calculator uses one broad multiplier. Both are estimates; tracking your weight and intake over several weeks shows your real maintenance level best." },
  ],
  related: ["bmr-calculator", "bmi-calculator", "calories-burned-calculator"],
  updated: "2026-10-24",
  engine: tdeeEngine,
  text,
  makeEngine: makeTdeeEngine,
  translations,
});
