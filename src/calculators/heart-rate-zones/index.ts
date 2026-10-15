import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { heartRateZonesEngine, makeHeartRateZonesEngine } from "./engine";

export const heartRateZones = defineCalculator({
  id: "heart-rate-zones",
  slug: "heart-rate-zone-calculator",
  status: "published",
  title: "Heart Rate Zone Calculator",
  shortTitle: "Heart Rate Zones",
  category: "sports",
  collections: ["fitness-sports", "healthcare"],
  summary: "Estimate your maximum heart rate from your age and see five training zones in beats per minute, by percent of maximum or with the Karvonen method.",
  metaTitle: "Heart Rate Zone Calculator – Max HR and Training Zones",
  metaDescription: "Estimate maximum heart rate with 220 − age or the Tanaka formula and get five training zones in bpm, using percent of max or the Karvonen method.",
  keywords: ["heart rate zones", "target heart rate", "maximum heart rate", "Karvonen formula", "training zones", "fat burning zone", "heart rate reserve"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Age-predicted maximal heart rate revisited (Tanaka H, Monahan KD, Seals DR. J Am Coll Cardiol. 2001;37(1):153–156)",
      publisher: "Journal of the American College of Cardiology (PubMed record)",
      url: "https://pubmed.ncbi.nlm.nih.gov/11153730/",
      usedFor: "The 208 − 0.7 × age equation for maximum heart rate.",
    },
    {
      title: "Target heart rate and physical activity",
      publisher: "American Heart Association",
      url: "https://www.heart.org/-/media/Files/Affiliates/WSA/Oregon/OR-Hard-Hats-Physical/TTentPhysicalActivityHeartRate.pdf",
      usedFor: "Target ranges of about 50–70% of maximum heart rate for moderate and about 70–85% for vigorous activity, and the 220 − age estimate.",
    },
  ],
  expertReview: { area: "medical", status: "pending" },
  intro: [
    "Heart rate zones divide exercise intensity into bands based on your maximum heart rate. Training in a given zone helps you pace easy runs, steady rides or hard intervals without guessing.",
    "This calculator estimates your maximum heart rate from your age, or uses a maximum you measured, and turns it into five zones in beats per minute. It also shows the moderate and vigorous ranges suggested by the American Heart Association.",
  ],
  howToUse: [
    "Enter your age and choose a formula for the maximum heart rate.",
    "If you know your real maximum from an exercise test, enter it; it replaces the formula.",
    "To use the Karvonen method, enter your resting heart rate and choose Karvonen as the zone method.",
    "Read your estimated maximum and the bpm range of each zone in the table.",
  ],
  formulas: [
    { title: "Maximum heart rate (Fox)", expression: "HRmax = 220 − age", explanation: "The traditional rule of thumb." },
    { title: "Maximum heart rate (Tanaka)", expression: "HRmax = 208 − 0.7 × age", explanation: "From a 2001 analysis of 351 studies; it gives higher values than 220 − age for older adults." },
    { title: "Percent of maximum", expression: "target = HRmax × intensity", explanation: "Each zone spans 10 percentage points, from 50–60% (zone 1) to 90–100% (zone 5)." },
    {
      title: "Karvonen (heart rate reserve)",
      expression: "target = HRrest + intensity × (HRmax − HRrest)",
      explanation: "The heart rate reserve is HRmax − HRrest. This method gives higher targets at low intensities than the percent-of-maximum method.",
    },
  ],
  examples: [
    {
      title: "Age 40 with 220 − age",
      inputs: { age: 40, formula: "fox", measuredMax: null, resting: null, method: "percentMax" },
      steps: ["HRmax = 220 − 40 = 180 bpm", "Zone 2 (60–70%) = 108–126 bpm", "AHA moderate range (50–70%) = 90–126 bpm; vigorous (70–85%) = 126–153 bpm"],
      expectedPrimary: 180,
    },
    {
      title: "Age 55 with the Tanaka formula",
      inputs: { age: 55, formula: "tanaka", measuredMax: null, resting: null, method: "percentMax" },
      steps: ["HRmax = 208 − 0.7 × 55 = 169.5 bpm, shown as 170 bpm", "Zone 3 (70–80%) = 118.65–135.6, rounded to 119–136 bpm", "220 − age would give 165 bpm, slightly lower"],
      expectedPrimary: 169.5,
    },
    {
      title: "Age 30, resting heart rate 60 bpm, Karvonen",
      inputs: { age: 30, formula: "fox", measuredMax: null, resting: 60, method: "karvonen" },
      steps: ["HRmax = 220 − 30 = 190 bpm; reserve = 190 − 60 = 130 bpm", "Zone 3 low = 60 + 0.7 × 130 = 151 bpm; high = 60 + 0.8 × 130 = 164 bpm", "So zone 3 is 151–164 bpm"],
      expectedPrimary: 190,
    },
  ],
  assumptions: [
    "These results are estimates, not medical advice, and this calculator has not been professionally reviewed.",
    "Age formulas describe population averages. An individual's real maximum heart rate can differ from the estimate by 10 bpm or more, so a measured maximum is more accurate.",
    "Medicines such as beta blockers, as well as heat, dehydration, caffeine and illness, change heart rate. Zones based on an estimated maximum may not suit you.",
    "If you have a heart condition, other health problems or symptoms such as chest pain or dizziness, talk to a doctor before starting vigorous exercise.",
    "Zone names and the 10-point bands are a common convention; coaches and devices use several different zone systems.",
  ],
  faqs: [
    {
      question: "Which maximum heart rate formula should I use?",
      answer: "220 − age is simple and widely used. The Tanaka formula, 208 − 0.7 × age, was fitted to a much larger set of data and gives higher values for older adults. Neither replaces a maximum measured during a supervised exercise test.",
    },
    {
      question: "What is the Karvonen method?",
      answer: "It sets targets from the heart rate reserve, the gap between your maximum and resting heart rates. Because it takes your resting rate into account, it can fit people with a low resting heart rate better than a plain percent of maximum.",
    },
    {
      question: "What heart rate is moderate exercise?",
      answer: "The American Heart Association gives about 50–70% of maximum heart rate for moderate-intensity activity and about 70–85% for vigorous activity. The calculator shows both ranges in beats per minute.",
    },
  ],
  related: ["running-pace-calculator", "one-rep-max-calculator", "bmr-calculator"],
  updated: "2026-10-15",
  engine: heartRateZonesEngine,
  text,
  makeEngine: makeHeartRateZonesEngine,
  translations,
});
