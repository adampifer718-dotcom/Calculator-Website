import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { momentumEngine, makeMomentumEngine } from "./engine";

export const momentum = defineCalculator({
  id: "momentum",
  slug: "momentum-calculator",
  status: "published",
  title: "Momentum Calculator",
  shortTitle: "Momentum",
  category: "physics",
  collections: ["education-research"],
  summary: "Solve p = mv for momentum, mass or velocity, or find the impulse of a force and the velocity change it causes.",
  metaTitle: "Momentum Calculator – Solve p = mv and Impulse J = FΔt",
  metaDescription: "Find momentum, mass or velocity from p = mv in metric or US units, with kinetic energy, or work out the impulse of a force and the resulting Δv.",
  keywords: ["momentum", "linear momentum", "p = mv", "impulse", "impulse-momentum theorem", "kg m/s", "newton second", "velocity change"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "University Physics Volume 1, 9.2 Impulse and Collisions",
      publisher: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions",
      usedFor: "Impulse as force times the time it acts, and the impulse-momentum theorem J = Δp.",
    },
    {
      title: "University Physics Volume 1, 5.3 Newton's Second Law",
      publisher: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law",
      usedFor: "Net force as the rate of change of momentum.",
    },
  ],
  intro: [
    "Momentum measures how hard it is to stop a moving object. It is mass times velocity, so a slow truck and a fast baseball can both carry a lot of it. Because it has a direction, momentum can be negative when the motion is the other way.",
    "Use the first mode to find momentum, mass or velocity from the other two; the result also shows the kinetic energy. Use the impulse mode to see what a force acting for a short time does: the impulse equals the change in momentum, and with a mass it gives the change in velocity.",
  ],
  howToUse: [
    "Choose momentum (p = mv) or impulse (J = FΔt).",
    "For momentum, choose what to find and enter the other two values with their units. Use a negative velocity or momentum for motion in the opposite direction.",
    "For impulse, enter the average force and how long it acts. Add the mass if you want the velocity change.",
    "Read the result and the other units, including lb·ft/s and the kinetic energy.",
  ],
  formulas: [
    { title: "Momentum", expression: "p = m × v", explanation: "In kg·m/s. Solve for m = p ÷ v or v = p ÷ m." },
    { title: "Impulse", expression: "J = F × Δt = Δp", explanation: "An average force acting for a time changes the momentum by exactly the impulse, in N·s (the same as kg·m/s)." },
    { title: "Velocity change", expression: "Δv = J ÷ m", explanation: "The impulse divided by the mass it acts on." },
    { title: "Kinetic energy", expression: "KE = p² ÷ (2m)", explanation: "Equivalent to ½·m·v², in joules." },
  ],
  examples: [
    {
      title: "A 0.145 kg baseball at 40 m/s",
      inputs: { mode: "momentum", solve: "momentum", mass: 0.145, massUnit: "kg", velocity: 40, velocityUnit: "ms" },
      steps: ["p = 0.145 kg × 40 m/s = 5.8 kg·m/s", "≈ 41.95 lb·ft/s; KE = 5.8² ÷ (2 × 0.145) = 116 J"],
      expectedPrimary: 5.8,
    },
    {
      title: "Speed of a 60 kg skater carrying 900 kg·m/s",
      inputs: { mode: "momentum", solve: "velocity", momentum: 900, mass: 60, massUnit: "kg", velocityUnit: "kmh" },
      steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3.6 = 54 km/h"],
      expectedPrimary: 54,
    },
    {
      title: "A 250 N kick lasting 0.02 s on a 0.16 kg ball",
      inputs: { mode: "impulse", force: 250, forceUnit: "N", duration: 0.02, impulseMass: 0.16, massUnit: "kg" },
      steps: ["J = 250 N × 0.02 s = 5 N·s", "Δv = 5 ÷ 0.16 = 31.25 m/s"],
      expectedPrimary: 5,
    },
  ],
  assumptions: [
    "Motion and forces are along one straight line; the sign shows the direction. For motion in two or three dimensions, apply the formulas to each component.",
    "In impulse mode the force is the average force over the time interval. A force that changes during the impact gives the same impulse as its average.",
    "Classical mechanics applies, which is accurate for speeds far below the speed of light.",
  ],
  faqs: [
    { question: "What is the difference between momentum and kinetic energy?", answer: "Momentum (mv) is a vector and is conserved in every collision. Kinetic energy (½mv²) has no direction and is partly turned into heat and sound in most collisions." },
    { question: "Is N·s the same as kg·m/s?", answer: "Yes. A newton is a kg·m/s², so a newton-second is a kg·m/s. Impulse and momentum share the same unit." },
    { question: "Why do airbags and padding reduce injuries?", answer: "They make the stop take longer. The change in momentum is the same, so a longer time means a smaller average force, since F = Δp ÷ Δt." },
  ],
  related: ["force-calculator", "kinetic-energy-calculator", "acceleration-calculator"],
  updated: "2026-10-22",
  engine: momentumEngine,
  text,
  makeEngine: makeMomentumEngine,
  translations,
});
