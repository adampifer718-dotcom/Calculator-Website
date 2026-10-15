import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeVolumeShapesEngine, volumeShapesEngine } from "./engine";

export const volumeShapes = defineCalculator({
  id: "volume-shapes",
  slug: "volume-calculator",
  status: "published",
  title: "Volume Calculator",
  shortTitle: "Volume",
  category: "math",
  collections: ["education-research", "construction-engineering"],
  summary: "Find the volume of a cube, box, cylinder, sphere, hemisphere, cone or square pyramid, with the result in liters, cubic meters and US gallons.",
  metaTitle: "Volume Calculator – Cylinder, Sphere, Cone and More",
  metaDescription: "Calculate the volume of a cube, box, cylinder, sphere, hemisphere, cone or square pyramid in mm, cm, m, in or ft, plus liters and US gallons.",
  keywords: ["volume calculator", "volume of a cylinder", "volume of a sphere", "volume of a cone", "cubic feet", "cubic meters", "liters", "pyramid volume"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prealgebra (OpenStax), Appendix C: Geometric Formulas",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra/pages/c-geometric-formulas",
      usedFor: "Volume formulas for the rectangular solid, cylinder, sphere and cone.",
    },
    {
      title: "NIST Handbook 44, Appendix C: General Tables of Units of Measurement",
      publisher: "National Institute of Standards and Technology (NIST)",
      usedFor: "The US gallon of 231 cubic inches (3.785411784 L) and the inch of 2.54 cm.",
    },
  ],
  intro: [
    "Volume is the amount of space a solid takes up. This calculator covers seven common solids, from a simple cube to a cone or a square pyramid, so you can size a tank, a planter, a box or a homework shape.",
    "Pick a shape and a length unit, then type the dimensions it needs. The answer appears in that unit cubed and is also converted to liters, cubic meters and US gallons, which helps when you need to know how much liquid or material fits inside.",
  ],
  howToUse: [
    "Choose the shape.",
    "Choose the unit you measured in. All dimensions must use the same unit.",
    "Enter the dimensions shown for that shape. Use the radius, which is half the diameter, for round shapes.",
    "Read the volume and its conversions to liters, cubic meters and US gallons.",
  ],
  formulas: [
    { title: "Cube and rectangular box", expression: "V = a³\nV = l × w × h", explanation: "A cube has three equal edges a; a box multiplies its length, width and height." },
    { title: "Cylinder and cone", expression: "V = πr²h\nV = 1/3 πr²h", explanation: "A cone holds exactly one third of the cylinder with the same base radius r and height h." },
    { title: "Sphere and hemisphere", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "A hemisphere is half of a sphere of radius r." },
    { title: "Square pyramid", expression: "V = 1/3 a²h", explanation: "One third of the base area a² times the perpendicular height h." },
    { title: "Unit conversions", expression: "1 m³ = 1,000 L\n1 US gal = 3.785411784 L", explanation: "The volume in your unit cubed is converted to cubic meters using the exact length factor, then to liters and gallons." },
  ],
  examples: [
    {
      title: "A cylindrical water tank 1.2 m tall with a 0.5 m radius",
      inputs: { shape: "cylinder", unit: "m", radius: 0.5, height: 1.2 },
      steps: ["V = π × 0.5² × 1.2", "= π × 0.3 ≈ 0.94248 m³", "0.94248 m³ × 1,000 ≈ 942.48 L, about 248.98 US gal"],
      expectedPrimary: 0.9424777960769379,
    },
    {
      title: "A ball with a 4-inch radius",
      inputs: { shape: "sphere", unit: "in", radius: 4 },
      steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268.08 in³", "That is about 4.39 L or 1.16 US gal"],
      expectedPrimary: 268.082573106329,
    },
    {
      title: "A square pyramid with a 9 cm base and 15 cm height",
      inputs: { shape: "pyramid", unit: "cm", baseSide: 9, height: 15 },
      steps: ["Base area = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0.405 L"],
      expectedPrimary: 405,
    },
  ],
  assumptions: [
    "Shapes are ideal: edges are straight, round shapes are perfectly circular, and the cylinder, cone and pyramid are right (the apex or top sits directly above the center of the base).",
    "The result is the space enclosed by the outer dimensions. For a container with thick walls, measure the inside to find how much it holds.",
    "US gallons are liquid gallons of 3.785411784 L. Imperial gallons are not shown.",
  ],
  faqs: [
    { question: "How do I find the volume if I only know the diameter?", answer: "Divide the diameter by two to get the radius, then enter the radius. A 30 cm wide pot has a radius of 15 cm." },
    { question: "How many liters are in a cubic meter?", answer: "Exactly 1,000. One liter is the volume of a cube 10 cm on each side, so 1,000 cm³ make 1 L." },
    { question: "Why is a cone one third of a cylinder?", answer: "A cone narrows steadily to a point, and adding up its circular slices from base to tip gives exactly one third of πr²h. The same reasoning makes a pyramid one third of the box with the same base and height." },
  ],
  related: ["surface-area-calculator", "concrete-calculator", "volume-converter"],
  updated: "2026-10-15",
  engine: volumeShapesEngine,
  text,
  makeEngine: makeVolumeShapesEngine,
  translations,
});
