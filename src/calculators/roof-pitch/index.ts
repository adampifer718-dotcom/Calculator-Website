import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeRoofPitchEngine, roofPitchEngine } from "./engine";

export const roofPitch = defineCalculator({
  id: "roof-pitch",
  slug: "roof-pitch-calculator",
  status: "published",
  title: "Roof Pitch Calculator",
  shortTitle: "Roof pitch",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Turn a roof's rise and run, or its angle, into pitch per 12, degrees, slope percent and rafter length.",
  metaTitle: "Roof Pitch Calculator – X in 12, Angle and Rafter Length",
  metaDescription: "Convert rise and run or a roof angle into pitch in inches per 12, degrees and percent slope, plus the rafter multiplier and rafter length.",
  keywords: ["roof pitch", "roof slope", "rise over run", "4/12 pitch", "roof angle", "rafter length", "pitch multiplier"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Measuring Roof Slope and Pitch",
      publisher: "International Association of Certified Home Inspectors (InterNACHI)",
      url: "https://www.nachi.org/roof-slope-pitch",
      usedFor: "Expressing roof slope as rise per 12 units of run, and the meaning of run.",
    },
  ],
  intro: [
    "Roof steepness is usually given as rise per 12 of run: a 6-in-12 roof climbs 6 inches for every 12 inches it extends horizontally. The same slope can also be described as an angle in degrees or as a percent.",
    "Enter a rise and run you measured, or an angle from a plan, and the calculator gives all three forms. Add the roof's horizontal run to get the rafter length from the wall line to the ridge.",
  ],
  howToUse: [
    "Choose whether you know the rise and run or the angle.",
    "Enter the rise and run in the same unit, or the angle in degrees.",
    "Optionally enter the roof run, which is half the building span, to get the rafter length.",
    "Read the pitch in 12, the angle, the slope percent and the rafter values.",
  ],
  formulas: [
    { title: "Pitch per 12", expression: "pitch = 12 × rise ÷ run", explanation: "Scales the slope to a 12-unit run." },
    { title: "Angle", expression: "θ = arctan(rise ÷ run)", explanation: "In the other direction, rise ÷ run = tan θ." },
    { title: "Slope percent", expression: "slope = 100 × rise ÷ run", explanation: "A 12-in-12 roof is a 100% slope at 45°." },
    { title: "Rafter length", expression: "rafter = roof run × √(1 + (rise ÷ run)²)", explanation: "Pythagoras: the square root is the rafter multiplier." },
  ],
  examples: [
    {
      title: "6 inches of rise over 12 inches of run",
      inputs: { mode: "riseRun", unit: "in", rise: 6, run: 12, roofRun: null },
      steps: ["pitch = 12 × 6 ÷ 12 = 6 in 12", "θ = arctan(0.5) ≈ 26.57°, slope 50%", "multiplier = √1.25 ≈ 1.1180"],
      expectedPrimary: "6 in 12",
    },
    {
      title: "5 ft of rise over 8 ft, with a 14 ft roof run",
      inputs: { mode: "riseRun", unit: "ft", rise: 5, run: 8, roofRun: 14 },
      steps: ["pitch = 12 × 5 ÷ 8 = 7.5 in 12", "multiplier = √(1 + 0.625²) ≈ 1.1792", "rafter = 14 × 1.1792 ≈ 16.509 ft"],
      expectedPrimary: "7.5 in 12",
    },
    {
      title: "A 30° roof",
      inputs: { mode: "angle", unit: "in", angle: 30, roofRun: null },
      steps: ["rise ÷ run = tan 30° ≈ 0.5774", "pitch = 12 × 0.5774 ≈ 6.93 in 12", "slope ≈ 57.74%"],
      expectedPrimary: "6.93 in 12",
    },
  ],
  assumptions: [
    "This is geometry only. Rafter sizing, structural design, minimum slopes for a roofing material and local building codes need a qualified professional.",
    "Rise and run must be in the same unit. The rafter length uses the unit you choose and does not include overhang, ridge board or cutting allowance.",
    "The roof is treated as a flat plane with a straight rafter from the wall line to the ridge.",
  ],
  faqs: [
    { question: "What does a 4/12 pitch mean?", answer: "The roof rises 4 units for every 12 units of horizontal run, which is about 18.43° or a 33.3% slope." },
    { question: "Is pitch the same as slope?", answer: "In everyday use, yes. Strictly, some carpenters define pitch as total rise divided by the full span, which is half the rise-per-run slope. This calculator uses rise per 12 of run." },
    { question: "How do I measure the rise and run?", answer: "Hold a level horizontally against the roof or a rafter, mark 12 inches along it, and measure straight down from that mark to the roof surface. That vertical distance is the rise per 12." },
  ],
  related: ["pythagorean-theorem-calculator", "slope-calculator", "square-footage-calculator"],
  updated: "2026-10-15",
  engine: roofPitchEngine,
  text,
  makeEngine: makeRoofPitchEngine,
  translations,
});
