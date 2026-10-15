import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { accelerationEngine, makeAccelerationEngine } from "./engine";

export const acceleration = defineCalculator({
  id: "acceleration",
  slug: "acceleration-calculator",
  status: "published",
  title: "Acceleration Calculator",
  shortTitle: "Acceleration",
  category: "physics",
  collections: ["education-research"],
  summary: "Find acceleration from a change in velocity, from distance and time, or from force and mass, in m/s², ft/s² and g.",
  metaTitle: "Acceleration Calculator – From Speed, Distance or Force",
  metaDescription: "Calculate acceleration from a velocity change over time, from distance and time, or from force and mass (a = F/m). Results in m/s², ft/s² and g.",
  keywords: ["acceleration calculator", "acceleration formula", "m/s2", "deceleration", "g-force", "a = F/m", "0 to 60", "kinematics"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "University Physics Volume 1 (OpenStax), 3.3 Average and Instantaneous Acceleration",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/university-physics-volume-1/pages/3-3-average-and-instantaneous-acceleration",
      usedFor: "Definition of average acceleration as the change in velocity divided by the elapsed time, and its SI unit m/s².",
    },
    {
      title: "Physics (OpenStax), Chapter 4 Key Equations",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/physics/pages/4-key-equations",
      usedFor: "Newton's second law, F = ma.",
    },
    {
      title: "Standard gravity (Glossary of Meteorology)",
      publisher: "American Meteorological Society",
      url: "https://glossary.ametsoc.org/wiki/standard-gravity/",
      usedFor: "The standard acceleration of gravity, 9.80665 m/s².",
    },
  ],
  intro: [
    "Acceleration is how quickly velocity changes. A car that goes from rest to 100 km/h in 8 seconds gains about 3.5 meters per second of speed every second, which is written 3.5 m/s².",
    "This calculator works out acceleration in three ways: from a starting and final velocity over a time, from the distance covered in a time, or from the net force on an object and its mass. The answer is shown in m/s², in ft/s² and as a multiple of standard gravity g.",
  ],
  howToUse: [
    "Choose what you know: a change in velocity, a distance and a time, or a force and a mass.",
    "Pick the units for velocity and distance where they are asked for. Time is always in seconds, force in newtons and mass in kilograms.",
    "Enter the values. A negative velocity means motion in the opposite direction.",
    "Read the acceleration. A negative result means the object is slowing down.",
  ],
  formulas: [
    { title: "From a change in velocity", expression: "a = (v − v₀) ÷ t", explanation: "The average acceleration over the time t, where v₀ is the starting velocity and v the final one." },
    { title: "From distance and time", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Valid when the acceleration stays constant over the whole interval." },
    { title: "From force and mass", expression: "a = F ÷ m", explanation: "Newton's second law, with the net force F in newtons and the mass m in kilograms." },
    { title: "Unit conversions", expression: "1 ft/s² = 0.3048 m/s²\n1 g = 9.80665 m/s²", explanation: "Velocities are converted to m/s first (1 km/h = 1/3.6 m/s, 1 mph = 0.44704 m/s)." },
  ],
  examples: [
    {
      title: "A car going from 0 to 100 km/h in 8 seconds",
      inputs: { mode: "velocity", speedUnit: "kmh", v0: 0, v: 100, time: 8 },
      steps: ["100 km/h = 100 ÷ 3.6 ≈ 27.778 m/s", "a = (27.778 − 0) ÷ 8 ≈ 3.472 m/s²", "That is about 0.354 g"],
      expectedPrimary: 3.4722222222222223,
    },
    {
      title: "Braking from 60 mph to a stop in 4 seconds",
      inputs: { mode: "velocity", speedUnit: "mph", v0: 60, v: 0, time: 4 },
      steps: ["60 mph = 60 × 0.44704 = 26.8224 m/s", "a = (0 − 26.8224) ÷ 4 = −6.7056 m/s²", "The minus sign shows deceleration of about 0.684 g"],
      expectedPrimary: -6.7056,
    },
    {
      title: "A 450 N push on a 75 kg sled",
      inputs: { mode: "force", force: 450, mass: 75 },
      steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      expectedPrimary: 6,
    },
  ],
  assumptions: [
    "Motion is along a straight line, and velocities and forces in the opposite direction are entered as negative values.",
    "The change-in-velocity method gives the average acceleration over the interval. The distance-and-time method assumes the acceleration is constant.",
    "The force-and-mass method uses the net force, after friction, drag and other opposing forces have been subtracted.",
  ],
  faqs: [
    { question: "What does a negative acceleration mean?", answer: "It means the acceleration points in the negative direction. For an object moving forward, that means it is slowing down, which is often called deceleration." },
    { question: "What is 1 g?", answer: "It is the standard acceleration of gravity, defined as exactly 9.80665 m/s² (about 32.17 ft/s²). Expressing an acceleration in g compares it with the pull of gravity at Earth's surface." },
    { question: "Why is acceleration measured in m/s²?", answer: "Acceleration is a change in velocity (m/s) per unit of time (s), so its unit is meters per second per second, written m/s²." },
  ],
  related: ["speed-distance-time-calculator", "kinetic-energy-calculator", "speed-converter"],
  updated: "2026-10-15",
  engine: accelerationEngine,
  text,
  makeEngine: makeAccelerationEngine,
  translations,
});
