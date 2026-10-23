import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { forceEngine, makeForceEngine } from "./engine";

export const force = defineCalculator({
  id: "force",
  slug: "force-calculator",
  status: "published",
  title: "Force Calculator (F = ma)",
  shortTitle: "Force",
  category: "physics",
  collections: ["education-research", "manufacturing-operations"],
  summary: "Solve Newton's second law for force, mass or acceleration in newtons, pounds-force, kilograms, pounds or g.",
  metaTitle: "Force Calculator (F = ma) – Solve for Force, Mass or a",
  metaDescription: "Solve F = ma for force, mass or acceleration. Use N, kN, lbf or dyn, kg, g, lb or t, and m/s², ft/s² or g, and see the result in every unit.",
  keywords: ["force calculator", "f = ma", "newton's second law", "newtons", "pound-force", "mass", "acceleration", "net force"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "University Physics Volume 1, 5.3 Newton's Second Law",
      publisher: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law",
      usedFor: "Newton's second law: net external force equals mass times acceleration.",
    },
    {
      title: "Pound-force (IEC 62720 unit definition, citing NIST SP 811)",
      publisher: "International Electrotechnical Commission (IEC) Electropedia",
      url: "https://electropedia.org/cdd/iec62720/iec62720.nsf/Units/0112-2---62720%23UAA696",
      usedFor: "1 lbf = 4.4482216152605 N, from the pound and standard gravity 9.80665 m/s².",
    },
  ],
  intro: [
    "Newton's second law links three quantities: the net force on an object, its mass and the acceleration that results. Push twice as hard and the acceleration doubles; push something twice as heavy with the same force and it accelerates half as much.",
    "Choose the value you want to find and enter the other two. The calculator handles metric and US units, shows the answer in every unit of its kind, and gives the weight equivalent of the force: the mass that would press on a scale with that force under standard gravity.",
  ],
  howToUse: [
    "Choose what to find: force, mass or acceleration.",
    "Enter the two known values and pick a unit for each.",
    "Pick the unit you want the answer in from the unit list of the value you are finding.",
    "Read the result, its other units, and the weight equivalent of the force.",
  ],
  formulas: [
    { title: "Force", expression: "F = m × a", explanation: "Net force equals mass times acceleration. 1 N accelerates 1 kg at 1 m/s²." },
    { title: "Mass", expression: "m = F ÷ a", explanation: "Divide the force by the acceleration it produces." },
    { title: "Acceleration", expression: "a = F ÷ m", explanation: "Divide the net force by the mass." },
    { title: "Unit factors", expression: "1 lbf = 0.45359237 kg × 9.80665 m/s² = 4.4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9.80665 m/s²", explanation: "Exact by definition. The weight equivalent is |F| ÷ 9.80665 m/s²." },
  ],
  examples: [
    {
      title: "Force to accelerate a 1,350 kg car at 2.8 m/s²",
      inputs: { solve: "force", mass: 1350, massUnit: "kg", acceleration: 2.8, accelerationUnit: "ms2", forceUnit: "kN" },
      steps: ["F = 1,350 kg × 2.8 m/s² = 3,780 N", "3,780 N ÷ 1,000 = 3.78 kN"],
      expectedPrimary: 3.78,
    },
    {
      title: "Mass of a crate that a 600 N push accelerates at 1.5 m/s²",
      inputs: { solve: "mass", force: 600, forceUnit: "N", acceleration: 1.5, accelerationUnit: "ms2", massUnit: "kg" },
      steps: ["m = 600 N ÷ 1.5 m/s²", "= 400 kg"],
      expectedPrimary: 400,
    },
    {
      title: "Acceleration of a 20 lb cart pulled with 30 lbf, in g",
      inputs: { solve: "acceleration", force: 30, forceUnit: "lbf", mass: 20, massUnit: "lb", accelerationUnit: "g" },
      steps: ["30 lbf = 133.4466 N and 20 lb = 9.0718 kg", "a = 133.4466 ÷ 9.0718 ≈ 14.71 m/s²", "14.71 ÷ 9.80665 = 1.5 g, because one pound-force is the weight of one pound at standard gravity"],
      expectedPrimary: 1.5,
    },
  ],
  assumptions: [
    "F is the net force: the vector sum of every force on the object, including friction and drag. The tool treats force and acceleration along one line, so a negative value means the opposite direction.",
    "Mass is constant. Rockets that burn fuel, or other systems that gain or lose mass, need the momentum form of the law.",
    "Classical mechanics applies, which is accurate for speeds far below the speed of light.",
    "The acceleration unit g and the weight equivalent use standard gravity, 9.80665 m/s². Local gravity differs slightly.",
  ],
  faqs: [
    { question: "What is a newton?", answer: "The SI unit of force. One newton accelerates a 1 kg mass at 1 m/s². On Earth, a 1 kg object weighs about 9.81 N." },
    { question: "What is the difference between pounds and pounds-force?", answer: "A pound (lb) is a unit of mass; a pound-force (lbf) is the weight of one pound under standard gravity, 4.4482216152605 N. They share a name, which is why 1 lbf on 1 lb gives exactly 1 g." },
    { question: "Why is my answer negative?", answer: "A negative force or acceleration points in the opposite direction to the one you chose as positive, such as a braking force against the direction of travel." },
  ],
  related: ["acceleration-calculator", "momentum-calculator", "kinetic-energy-calculator"],
  updated: "2026-10-22",
  engine: forceEngine,
  text,
  makeEngine: makeForceEngine,
  translations,
});
