import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { kineticEnergyEngine, makeKineticEnergyEngine } from "./engine";

export const kineticEnergy = defineCalculator({
  id: "kinetic-energy",
  slug: "kinetic-energy-calculator",
  status: "published",
  title: "Kinetic Energy Calculator",
  shortTitle: "Kinetic Energy",
  category: "physics",
  collections: ["education-research", "environment-energy"],
  summary: "Calculate the kinetic energy of a moving object from its mass and speed.",
  metaTitle: "Kinetic Energy Calculator – KE = ½mv²",
  metaDescription: "Calculate kinetic energy from mass and speed in kg or lb and m/s, km/h or mph. Results in joules, kilojoules and watt-hours.",
  keywords: ["kinetic energy", "energy", "joules", "mass", "velocity", "physics", "1/2 mv2"],
  popularRank: 32,
  addedOn: "2026-10-14",
  sources: [{"title": "University Physics Volume 1, section 7.2: Kinetic Energy", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/university-physics-volume-1/pages/7-2-kinetic-energy", "usedFor": "Definition KE = ½mv²."}, {"title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811", "publisher": "National Institute of Standards and Technology", "url": "https://www.nist.gov/pml/special-publication-811", "usedFor": "Exact conversion factors for pounds, km/h and mph."}],
  intro: ["Kinetic energy is the energy an object has because it is moving. It grows with the square of speed, so doubling speed quadruples the energy.", "Enter the mass and speed in the units you have."],
  howToUse: ["Enter the mass and choose kilograms or pounds.", "Enter the speed and choose m/s, km/h or mph.", "Read the kinetic energy in joules and other units."],
  formulas: [
    { title: "Kinetic energy", expression: "KE = ½ × m × v²", explanation: "m in kilograms, v in meters per second, KE in joules." },
  ],
  examples: [
    {
      title: "1,000 kg at 20 m/s",
      inputs: {"mass": 1000, "massUnit": "kg", "velocity": 20, "velocityUnit": "m/s"},
      steps: ["KE = 0.5 × 1,000 × 20²", "= 200,000 J"],
      expectedPrimary: 200000,
    },
    {
      title: "1,500 kg car at 100 km/h",
      inputs: {"mass": 1500, "massUnit": "kg", "velocity": 100, "velocityUnit": "km/h"},
      steps: ["100 km/h ≈ 27.78 m/s", "KE = 0.5 × 1,500 × 27.78² ≈ 578,704 J"],
      expectedPrimary: 0.5*1500*(100/3.6)**2,
    },
  ],
  assumptions: ["Uses classical mechanics, accurate far below the speed of light.", "Rotational energy (for example, of wheels) is not included."],
  faqs: [
    { question: "Why does speed matter more than mass?", answer: "Kinetic energy depends on speed squared. Going from 50 to 100 km/h quadruples the energy." },
    { question: "What unit is kinetic energy measured in?", answer: "Joules (J). One joule is one kilogram meter squared per second squared." },
    { question: "Can kinetic energy be negative?", answer: "No. Mass is positive and speed is squared, so kinetic energy is zero or positive." },
  ],
  related: ["speed-distance-time-calculator", "ohms-law-calculator", "electricity-cost-calculator"],
  updated: "2026-10-14",
  engine: kineticEnergyEngine,
  text,
  makeEngine: makeKineticEnergyEngine,
  translations,
});
