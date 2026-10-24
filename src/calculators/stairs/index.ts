import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeStairsEngine, stairsEngine } from "./engine";

export const stairs = defineCalculator({
  id: "stairs",
  slug: "stair-calculator",
  status: "published",
  title: "Stair Calculator",
  shortTitle: "Stairs",
  category: "construction",
  collections: ["construction-engineering"],
  summary: "Work out the number of steps, riser height, total run, stair angle and stringer length from the floor-to-floor rise, with a 2R + T comfort check.",
  metaTitle: "Stair Calculator – Risers, Treads, Run and Stringer",
  metaDescription: "Find how many steps a stair needs from the total rise, plus the riser height, total run, angle, stringer length and a 2R + T comfort check, in inches or cm.",
  keywords: ["stair calculator", "stair riser calculator", "how many steps", "stair stringer length", "rise and run stairs", "tread depth", "stair angle", "staircase dimensions"],
  addedOn: "2026-10-24",
  expertReview: { area: "safety", status: "pending" },
  sources: [
    {
      title: "Residential Stairs",
      publisher: "Placer County, California, Building Services",
      url: "https://www.placer.ca.gov/DocumentCenter/View/3303/Residential-Stairs-PDF",
      usedFor: "The International Residential Code (R311.7.5) limits used as defaults: a maximum riser height of 7¾ in (196 mm) and a minimum tread depth of 10 in (254 mm).",
    },
    {
      title: "Stair calculator rule of thumb (Revit help)",
      publisher: "Autodesk",
      url: "https://help.autodesk.com/cloudhelp/2014/ENU/Revit/files/GUID-E9368E33-2F3C-4B58-9F40-4B852FDF8F4E.htm",
      usedFor: "The comfort rule of thumb 2 × riser + tread = 24–25 in, attributed to Architectural Graphic Standards.",
    },
  ],
  intro: [
    "A stair splits the height between two floors into equal steps. Each step has a riser (its height) and a tread (its depth). The number of risers depends on the total rise and the tallest riser you will accept; there is always one tread fewer than risers, because the top step is the upper floor itself.",
    "Enter the floor-to-floor rise, the maximum riser and the tread depth to get the number of steps, the exact riser height, the total run, the stair angle and the length of the stringer diagonal, with the traditional 2R + T comfort check. The defaults are the limits in the International Residential Code, but your local code may differ.",
  ],
  howToUse: [
    "Choose inches or centimeters.",
    "Measure the total rise from the finished floor at the bottom to the finished floor at the top.",
    "Check the maximum riser height and the tread depth. The defaults are the International Residential Code's 7¾ in maximum riser and 10 in minimum tread.",
    "Optionally enter a target riser height, and the horizontal space available to see whether the stair fits.",
    "Read the number of risers and the layout, then check everything against your local building code.",
  ],
  formulas: [
    { title: "Number of risers", expression: "n = ⌈total rise ÷ maximum riser⌉", explanation: "With a target riser height, n is the whole number nearest to total rise ÷ target." },
    { title: "Riser height and treads", expression: "riser = total rise ÷ n; treads = n − 1", explanation: "Every riser is the same height." },
    { title: "Total run and angle", expression: "run = treads × tread depth; angle = arctan(riser ÷ tread)", explanation: "The run is measured nosing to nosing, without any landing." },
    { title: "Stringer diagonal", expression: "stringer = √(total rise² + total run²)", explanation: "The straight line from the bottom to the top of the flight." },
    { title: "Comfort rule of thumb", expression: "24 in ≤ 2 × riser + tread ≤ 25 in", explanation: "About 61–63.5 cm. A traditional guideline for a comfortable stride, not a code rule." },
  ],
  examples: [
    {
      title: "108 in floor to floor with the IRC defaults",
      inputs: { unit: "in", riseIn: 108, maxRiserIn: 7.75, targetRiserIn: null, treadIn: 10, runLimitIn: null },
      steps: [
        "n = ⌈108 ÷ 7.75⌉ = ⌈13.94⌉ = 14 risers",
        "Riser = 108 ÷ 14 ≈ 7.714 in; 13 treads of 10 in give a run of 130 in",
        "Angle = arctan(7.714 ÷ 10) ≈ 37.6°; stringer = √(108² + 130²) ≈ 169.01 in",
        "2R + T ≈ 25.43 in, a little above the 24–25 in comfort range",
      ],
      expectedPrimary: 14,
    },
    {
      title: "252 cm rise with 24 cm treads",
      inputs: { unit: "cm", riseCm: 252, maxRiserCm: 19.6, targetRiserCm: null, treadCm: 24, runLimitCm: null },
      steps: [
        "n = ⌈252 ÷ 19.6⌉ = ⌈12.86⌉ = 13 risers",
        "Riser = 252 ÷ 13 ≈ 19.385 cm; 12 treads give a run of 288 cm",
        "2R + T ≈ 62.77 cm ≈ 24.71 in, within the comfort range",
      ],
      expectedPrimary: 13,
    },
    {
      title: "100 in rise, aiming for 7 in risers in a 130 in space",
      inputs: { unit: "in", riseIn: 100, maxRiserIn: 7.75, targetRiserIn: 7, treadIn: 10.5, runLimitIn: 130 },
      steps: [
        "n = round(100 ÷ 7) = round(14.29) = 14 risers of ≈ 7.143 in",
        "13 treads × 10.5 in = 136.5 in of run, 6.5 in more than the space available",
        "2R + T ≈ 24.79 in, within the comfort range",
      ],
      expectedPrimary: 14,
    },
  ],
  assumptions: [
    "This is a geometry estimate for a single straight flight with equal steps. Landings, winders, spiral stairs and the thickness of tread boards are not included.",
    "Building codes vary by jurisdiction and change over time, and they cover much more than step sizes: headroom, width, handrails, guards, nosings and the allowed variation between steps. The defaults are taken from the International Residential Code only as a starting point; check the code that applies where you build.",
    "The result has not been professionally reviewed and is not safety or engineering advice. Stairs are a common cause of falls, so have the design checked by your building department or a qualified professional before you build.",
    "The total rise should be measured between finished floor surfaces. Changing the floor finish later changes the top and bottom step heights.",
  ],
  faqs: [
    { question: "How many steps do I need for a 9 ft (108 in) rise?", answer: "With a maximum riser of 7¾ in you need ⌈108 ÷ 7.75⌉ = 14 risers of about 7.71 in each, and 13 treads. A lower maximum riser gives more, shallower steps and a longer stair." },
    { question: "Why are there fewer treads than risers?", answer: "The last riser lifts you onto the upper floor, which acts as the top step. So a flight with 14 risers has 13 treads, and the total run is 13 tread depths." },
    { question: "What is the 2R + T rule?", answer: "It is a traditional comfort guideline: two riser heights plus one tread depth should come to about 24–25 in (61–63.5 cm), roughly the length of a comfortable stride. It is not a code requirement, but stairs well outside the range tend to feel awkward." },
  ],
  related: ["roof-pitch-calculator", "pythagorean-theorem-calculator", "drywall-calculator"],
  updated: "2026-10-24",
  engine: stairsEngine,
  text,
  makeEngine: makeStairsEngine,
  translations,
});
