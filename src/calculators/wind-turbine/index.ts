import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeWindTurbineEngine, windTurbineEngine } from "./engine";

export const windTurbine = defineCalculator({
  id: "wind-turbine",
  slug: "wind-turbine-calculator",
  status: "published",
  title: "Wind Turbine Power Calculator",
  shortTitle: "Wind turbine power",
  category: "ecology",
  collections: ["environment-energy"],
  summary: "Estimate a wind turbine's power output from its rotor diameter, the wind speed, air density and power coefficient, with a rough annual energy figure.",
  metaTitle: "Wind Turbine Power Calculator – Output in kW and kWh",
  metaDescription: "Find a wind turbine's power from rotor diameter, wind speed, air density and power coefficient, check it against the Betz limit and estimate yearly kWh.",
  keywords: ["wind turbine calculator", "wind power formula", "wind turbine output", "swept area", "power coefficient", "Betz limit", "capacity factor", "wind energy kWh"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Power in the wind",
      publisher: "Queen Mary University of London, School of Physical and Chemical Sciences",
      url: "https://ph.qmul.ac.uk/sites/default/files/u75/Power%20in%20the%20wind.pdf",
      usedFor: "The power in the wind, P = ½ρAv³, the power coefficient and the Betz limit of 16/27.",
    },
    {
      title: "Properties of the atmosphere",
      publisher: "University of Cambridge, Department of Engineering",
      url: "https://www-mdp.eng.cam.ac.uk/web/library/enginfo/aerothermal_dvd_only/aero/atmos/atmos.html",
      usedFor: "The International Standard Atmosphere sea-level air density of 1.225 kg/m³.",
    },
  ],
  intro: [
    "A wind turbine turns part of the kinetic energy of moving air into electricity. The power available depends on how much air passes through the circle swept by the blades, how dense that air is and, above all, how fast it moves: the power grows with the cube of the wind speed, so doubling the speed gives eight times the power.",
    "Enter the rotor diameter, the wind speed and the turbine's power coefficient to estimate its output. You can also cap the result at the generator's rated power and add a capacity factor for a rough yearly energy figure.",
  ],
  howToUse: [
    "Enter the rotor diameter in meters or feet.",
    "Enter the wind speed at hub height and choose its unit.",
    "Keep the standard air density of 1.225 kg/m³, or enter a value for your altitude and temperature.",
    "Enter the power coefficient Cp. 0.40 is a fair value for a good modern turbine; it cannot exceed the Betz limit of about 0.593.",
    "Optionally enter the rated power to cap the output, and a capacity factor to estimate the energy over a year.",
  ],
  formulas: [
    { title: "Swept area", expression: "A = π × (D ÷ 2)²", explanation: "D is the rotor diameter. An 80 m rotor sweeps about 5,027 m²." },
    { title: "Turbine power", expression: "P = ½ × ρ × A × v³ × Cp", explanation: "ρ is the air density in kg/m³, v the wind speed in m/s and Cp the power coefficient. The result is in watts." },
    { title: "Betz limit", expression: "Cp ≤ 16/27 ≈ 0.593", explanation: "An ideal rotor can capture at most 16/27 of the power in the wind passing through it. Real turbines capture less, typically well below 0.5 even at their best operating point." },
    { title: "Annual energy (rough)", expression: "E = P × 8,760 h × capacity factor", explanation: "P is the output, capped at the rated power if one is given. The capacity factor accounts for the time the wind is weaker." },
  ],
  examples: [
    {
      title: "80 m rotor in a 10 m/s wind",
      inputs: { diameter: 80, diameterUnit: "m", speed: 10, speedUnit: "ms", density: 1.225, cp: 0.4, ratedPower: null, capacityFactor: null },
      steps: ["A = π × 40² ≈ 5,026.55 m²", "P = 0.5 × 1.225 × 5,026.55 × 10³ × 0.40 ≈ 1,231,504 W", "Output ≈ 1,231.50 kW, about 1.23 MW"],
      expectedPrimary: 1231.504320207199,
    },
    {
      title: "Small 10 ft turbine in a 12 mph breeze",
      inputs: { diameter: 10, diameterUnit: "ft", speed: 12, speedUnit: "mph", density: 1.225, cp: 0.35, ratedPower: null, capacityFactor: null },
      steps: ["D = 10 × 0.3048 = 3.048 m, so A ≈ 7.297 m²", "v = 12 × 0.44704 = 5.364 m/s", "P = 0.5 × 1.225 × 7.297 × 5.364³ × 0.35 ≈ 241 W, about 0.24 kW"],
      expectedPrimary: 0.24147759149327602,
    },
    {
      title: "100 m rotor rated at 2,500 kW, 12 m/s wind, 35% capacity factor",
      inputs: { diameter: 100, diameterUnit: "m", speed: 12, speedUnit: "ms", density: 1.225, cp: 0.45, ratedPower: 2500, capacityFactor: 35 },
      steps: [
        "A = π × 50² ≈ 7,853.98 m²",
        "Rotor power = 0.5 × 1.225 × 7,853.98 × 12³ × 0.45 ≈ 3,740.69 kW, more than the 2,500 kW rating",
        "Output is capped at 2,500 kW",
        "Annual energy ≈ 2,500 × 8,760 × 0.35 = 7,665,000 kWh",
      ],
      expectedPrimary: 2500,
    },
  ],
  assumptions: [
    "The wind speed is steady and uniform across the rotor. Real wind varies by the second and with height, and because power depends on the cube of the speed, the average power is higher than the power at the average speed.",
    "The power coefficient is treated as constant. In reality it changes with wind speed, and each turbine has its own power curve, cut-in speed and cut-out speed.",
    "The annual energy is a rough estimate using the formula above, not a site assessment. Planning a real installation needs measured wind data and the manufacturer's power curve.",
    "Generator, gearbox and electrical losses are assumed to be included in the power coefficient you enter.",
  ],
  faqs: [
    { question: "What is the Betz limit?", answer: "It is the theoretical maximum share of the wind's power that any rotor can extract, 16/27 or about 59.3%. If a rotor slowed the air to a stop, no more air could flow through it, so some energy must always be left in the wind leaving the turbine." },
    { question: "Why does wind speed matter so much?", answer: "The power in the wind grows with the cube of the speed. A site with an average wind of 7 m/s has about 31% more power available ((7 ÷ 6.4)³ ≈ 1.31) than one with 6.4 m/s, so small differences in location and tower height make a big difference." },
    { question: "What capacity factor should I use?", answer: "It depends strongly on the site, the tower height and the turbine, so there is no single right value. Use measured wind data for your site, or published figures for similar turbines in your region. Small turbines in sheltered spots often reach much lower values than large turbines on open, windy sites." },
  ],
  related: ["electricity-cost-calculator", "kinetic-energy-calculator", "rainwater-harvesting-calculator"],
  updated: "2026-10-24",
  engine: windTurbineEngine,
  text,
  makeEngine: makeWindTurbineEngine,
  translations,
});
