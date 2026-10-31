import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeWaterFootprintEngine, waterFootprintEngine } from "./engine";

export const waterFootprint = defineCalculator({
  id: "water-footprint",
  slug: "shower-water-calculator",
  status: "published",
  title: "Shower Water Use Calculator",
  shortTitle: "Shower water use",
  category: "ecology",
  collections: ["environment-energy", "personal-finance"],
  summary: "Estimate how much water your household's showers use in a year, the energy and cost of heating it, and what a lower-flow shower head would save.",
  metaTitle: "Shower Water Use Calculator – Gallons, Liters and kWh",
  metaDescription: "Estimate yearly shower water use from flow rate, shower length and frequency, plus water-heating energy and cost, and the savings from a low-flow head.",
  keywords: ["shower water calculator", "shower water usage", "gallons per shower", "low-flow shower head savings", "WaterSense shower head", "shower energy cost", "liters per shower", "water footprint"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "WaterSense Specification for Showerheads: Supporting Statement",
      publisher: "US Environmental Protection Agency, WaterSense",
      url: "https://www.epa.gov/sites/default/files/2017-01/documents/ws-products-support-statement-showerheads.pdf",
      usedFor: "The WaterSense maximum of 2.0 gallons per minute and the 2.5 gpm federal maximum flow for shower heads.",
    },
    {
      title: "DOE Showerhead Enforcement Guidance (March 4, 2011)",
      publisher: "US Department of Energy, Office of the General Counsel",
      url: "https://www.energy.gov/gc/articles/doe-showerhead-enforcement-guidance-march-4-2011",
      usedFor: "The federal maximum water use of 2.5 gallons per minute for shower heads.",
    },
    {
      title: "Specific Heat",
      publisher: "HyperPhysics, Georgia State University",
      url: "https://hyperphysics.gsu.edu/hbase/thermo/spht.html",
      usedFor: "The specific heat of water, 1 cal/(g·°C) = 4.186 J/(g·°C).",
    },
  ],
  intro: [
    "Showers are one of the larger uses of water in most homes, and because the water is heated, they are also a noticeable part of the energy bill. How much they use depends on just a few things: the flow rate of the shower head, how long each shower lasts and how often people shower.",
    "Enter those figures to estimate the water used per shower, per week and per year. Add the water temperatures and your energy price to estimate the energy and cost of heating it, and enter a second flow rate to see what a different shower head would save.",
  ],
  howToUse: [
    "Enter the flow rate of your shower head in US gallons or liters per minute. If you do not know it, time how long it takes to fill a bucket of known size and divide.",
    "Enter the length of a typical shower, the showers per person per week and the number of people.",
    "Optionally enter the flow rate of a shower head you are considering, to see the savings.",
    "To estimate the energy, keep the energy option on and enter the inlet and shower temperatures, the heater efficiency and, if you like, your price per kWh.",
  ],
  formulas: [
    { title: "Water per year", expression: "V(year) = flow × minutes × showers per week × people × 52.1775", explanation: "52.1775 is the number of weeks in an average Gregorian year (365.2425 ÷ 7). The result is in the unit of the flow rate: gallons or liters." },
    { title: "Heating energy", expression: "E (kWh) = V (L) × 1 kg/L × 4.186 kJ/(kg·K) × (T(shower) − T(inlet)) ÷ 3,600 ÷ efficiency", explanation: "4.186 kJ warms 1 kg of water by 1 °C, and 3,600 kJ is 1 kWh. The efficiency is entered as a percentage and used as a fraction." },
    { title: "Savings", expression: "saved = V(current) − V(new)", explanation: "The energy and cost saved follow from the saved water with the same formula." },
  ],
  examples: [
    {
      title: "One person, 8-minute daily showers at 2.5 gpm",
      inputs: { flow: 2.5, flowUnit: "gpm", minutes: 8, showersPerWeek: 7, people: 1, newFlow: null, energy: "no" },
      steps: ["Per shower = 2.5 × 8 = 20 gal", "Per week = 20 × 7 = 140 gal", "Per year = 140 × 52.1775 = 7,304.85 gal, about 27,652 L"],
      expectedPrimary: 7304.85,
    },
    {
      title: "Three people, 9 L/min, switching to a 6 L/min head",
      inputs: { flow: 9, flowUnit: "lpm", minutes: 6, showersPerWeek: 5, people: 3, newFlow: 6, energy: "yes", tempUnit: "C", inletTemp: 15, showerTemp: 38, efficiency: 90, currency: "EUR", price: null },
      steps: [
        "Per week = 9 × 6 × 5 × 3 = 810 L, so per year = 810 × 52.1775 ≈ 42,263.78 L",
        "Heating energy = 42,263.78 × 4.186 × (38 − 15) ÷ 3,600 ÷ 0.90 ≈ 1,256 kWh per year",
        "With 6 L/min: 540 × 52.1775 ≈ 28,175.85 L, saving about 14,088 L and 419 kWh a year",
      ],
      expectedPrimary: 42263.775,
    },
    {
      title: "Two people, 10-minute showers, heater in °F and an energy price",
      inputs: { flow: 2.5, flowUnit: "gpm", minutes: 10, showersPerWeek: 7, people: 2, newFlow: 1.8, energy: "yes", tempUnit: "F", inletTemp: 55, showerTemp: 100, efficiency: 90, currency: "USD", price: 0.16 },
      steps: [
        "Per year = 2.5 × 10 × 7 × 2 × 52.1775 = 18,262.125 gal ≈ 69,130 L",
        "Temperature rise = (100 − 55) × 5/9 = 25 K, so energy ≈ 69,130 × 4.186 × 25 ÷ 3,600 ÷ 0.90 ≈ 2,233 kWh, costing about $357 a year",
        "A 1.8 gpm head saves about 5,113 gal and about $100 a year",
      ],
      expectedPrimary: 18262.125,
    },
  ],
  assumptions: [
    "The flow rate is taken as constant for the whole shower. Real flow depends on water pressure and on how far the tap is opened, so a measured flow is better than the rated one.",
    "A year is 52.1775 weeks (365.2425 ÷ 7). Weeks away from home or seasonal changes in habits are not modelled.",
    "The energy estimate heats all of the shower water from the inlet temperature to the shower temperature. It ignores heat lost from pipes and the storage tank, so real use is usually somewhat higher.",
    "Water and sewer charges are not included in the cost; only the energy for heating is priced.",
  ],
  faqs: [
    { question: "How much water does a shower head use?", answer: "In the United States new shower heads may use at most 2.5 gallons (about 9.5 liters) per minute. Heads with the EPA's WaterSense label use 2.0 gallons per minute or less. Older heads can use more, so measuring yours is the best way to know." },
    { question: "How can I measure my shower's flow rate?", answer: "Hold a bucket of known size under the shower at your normal setting and time how long it takes to fill. Divide the volume by the time in minutes; for example, 10 liters in 75 seconds is 10 ÷ 1.25 = 8 L/min." },
    { question: "What saves more: a shorter shower or a low-flow head?", answer: "Both reduce water use in proportion. Going from 10 to 8 minutes saves 20%, the same as going from 2.5 to 2.0 gpm. The calculator shows the effect of each, so you can try both." },
  ],
  related: ["rainwater-harvesting-calculator", "electricity-cost-calculator", "car-co2-calculator"],
  updated: "2026-10-28",
  engine: waterFootprintEngine,
  text,
  makeEngine: makeWaterFootprintEngine,
  translations,
});
