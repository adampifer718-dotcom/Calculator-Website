import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePotentialEnergyEngine, potentialEnergyEngine } from "./engine";

export const potentialEnergy = defineCalculator({
  id: "potential-energy",
  slug: "potential-energy-calculator",
  status: "published",
  title: "Potential Energy Calculator",
  shortTitle: "Potential Energy",
  category: "physics",
  collections: ["education-research", "environment-energy"],
  summary: "Work out gravitational potential energy (m·g·h) or the energy stored in a spring (½·k·x²), or solve either formula for the missing value.",
  metaTitle: "Potential Energy Calculator – PE = mgh and ½kx²",
  metaDescription: "Calculate gravitational potential energy from mass, height and gravity, or elastic energy in a spring, and solve for mass, height, k or x in any unit.",
  keywords: ["potential energy calculator", "gravitational potential energy", "PE = mgh", "elastic potential energy", "spring energy", "1/2 kx^2", "joules", "energy stored"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "University Physics Volume 1 (OpenStax), 8.1 Potential Energy of a System",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/university-physics-volume-1/pages/8-1-potential-energy-of-a-system",
      usedFor: "Gravitational potential energy near Earth's surface (mgh), elastic potential energy of a spring (½kx²) and the choice of the zero level.",
    },
    {
      title: "Moon Fact Sheet",
      publisher: "NASA Space Science Data Coordinated Archive (NSSDC)",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html",
      usedFor: "The Moon's surface gravity, 1.62 m/s².",
    },
    {
      title: "Mars Fact Sheet",
      publisher: "NASA Space Science Data Coordinated Archive (NSSDC)",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html?embed=true",
      usedFor: "The mean surface gravity of Mars, 3.73 m/s².",
    },
  ],
  intro: [
    "Potential energy is energy stored because of where something is or how it is deformed. Lift a 12 kg box onto a 2.5 m platform and you store about 294 joules in it, which it gives back as motion if it falls. Squeeze a spring and it stores energy that it releases when let go.",
    "This calculator handles both kinds. For gravity it uses PE = m·g·h, with Earth, Moon, Mars or a custom gravity. For a spring it uses PE = ½·k·x². You can also solve either formula backwards for the mass, height, spring constant or displacement.",
  ],
  howToUse: [
    "Choose gravitational or elastic potential energy.",
    "Choose what you want to find. The field for that value disappears.",
    "Enter the other values and pick their units. For gravity, choose a planet or enter your own value.",
    "Read the result in your chosen unit, along with the same value in the other units.",
  ],
  formulas: [
    { title: "Gravitational potential energy", expression: "PE = m × g × h", explanation: "m in kilograms, g in m/s² and h in meters give PE in joules. h is measured from a reference level you choose." },
    { title: "Elastic potential energy", expression: "PE = ½ × k × x²", explanation: "k is the spring constant in N/m and x the stretch or compression from the relaxed length in meters." },
    { title: "Solving backwards", expression: "m = PE ÷ (g·h)   h = PE ÷ (m·g)\nk = 2·PE ÷ x²   x = √(2·PE ÷ k)", explanation: "The same formulas rearranged for the unknown." },
    { title: "Energy units", expression: "1 kJ = 1,000 J   1 Wh = 3,600 J   1 kWh = 3,600,000 J\n1 ft·lbf = 1.3558179483314 J", explanation: "A foot-pound is 0.3048 m × 4.4482216152605 N, both exact." },
  ],
  examples: [
    {
      title: "Lifting a 12 kg box onto a 2.5 m platform",
      inputs: { mode: "gravitational", gSolve: "energy", mass: 12, massUnit: "kg", height: 2.5, heightUnit: "m", gravity: "earth", energyUnit: "J" },
      steps: ["PE = m × g × h", "= 12 × 9.80665 × 2.5", "= 294.1995 J (about 0.29 kJ)"],
      expectedPrimary: 294.1995,
    },
    {
      title: "How high could 1 kWh lift a 1,000 kg car?",
      inputs: { mode: "gravitational", gSolve: "height", mass: 1000, massUnit: "kg", gravity: "earth", gEnergy: 1, energyUnit: "kWh", heightUnit: "m" },
      steps: ["1 kWh = 3,600,000 J", "h = PE ÷ (m × g) = 3,600,000 ÷ (1,000 × 9.80665)", "≈ 367.10 m"],
      expectedPrimary: 367.0978366720542,
    },
    {
      title: "A 400 N/m spring compressed by 15 cm",
      inputs: { mode: "elastic", eSolve: "energy", k: 400, x: 15, xUnit: "cm", energyUnit: "J" },
      steps: ["15 cm = 0.15 m", "PE = ½ × 400 × 0.15²", "= 200 × 0.0225 = 4.5 J"],
      expectedPrimary: 4.5,
    },
  ],
  assumptions: [
    "Gravity is treated as constant over the height, which is accurate near a planet's surface. For heights of hundreds of kilometers, the decrease of gravity with distance matters.",
    "Earth uses standard gravity, 9.80665 m/s², which is exact by definition. Real gravity varies slightly with latitude and altitude. The Moon and Mars values are mean surface values from NASA fact sheets.",
    "The spring is ideal: it follows Hooke's law and is not stretched beyond its elastic limit. Friction, air resistance and energy lost as heat are ignored.",
  ],
  faqs: [
    { question: "Where should I measure the height from?", answer: "From any level you choose as zero, such as the floor, the ground or a table top. Potential energy depends on that choice, but the change in energy between two heights does not, and that change is what matters in practice." },
    { question: "How is potential energy related to kinetic energy?", answer: "When an object falls without air resistance, its potential energy turns into kinetic energy. A 12 kg box dropped from 2.5 m reaches the floor with about 294 J of kinetic energy, moving at √(2gh) ≈ 7.0 m/s." },
    { question: "Does it matter whether a spring is stretched or compressed?", answer: "No. The energy depends on x², so stretching or compressing an ideal spring by the same distance stores the same energy." },
  ],
  related: ["kinetic-energy-calculator", "force-calculator", "electricity-cost-calculator"],
  updated: "2026-10-22",
  engine: potentialEnergyEngine,
  text,
  makeEngine: makePotentialEnergyEngine,
  translations,
});
