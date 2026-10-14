import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { electricityCostEngine, makeElectricityCostEngine } from "./engine";

export const electricityCost = defineCalculator({
  id: "electricity-cost",
  slug: "electricity-cost-calculator",
  status: "published",
  title: "Electricity Cost Calculator",
  shortTitle: "Electricity Cost",
  category: "other",
  collections: ["environment-energy", "personal-finance", "manufacturing-operations"],
  summary: "Work out how much an appliance costs to run from its wattage, hours of use and your electricity price.",
  metaTitle: "Electricity Cost Calculator – Appliance Running Cost",
  metaDescription: "Calculate the electricity used in kWh and the running cost of any appliance or device per day, per period and per year from its wattage and your rate.",
  keywords: ["electricity cost", "kwh", "energy cost", "appliance", "power", "watts", "electric bill", "running cost"],
  popularRank: 19,
  addedOn: "2026-10-14",
  sources: [{"title": "Electricity explained: Measuring electricity", "publisher": "U.S. Energy Information Administration", "url": "https://www.eia.gov/energyexplained/electricity/measuring-electricity.php", "usedFor": "Definition of watts, kilowatt-hours and how electricity use is billed."}],
  intro: ["Electricity is billed by the kilowatt-hour (kWh): using 1,000 watts for one hour. Multiply energy used by your price per kWh to get the cost.", "Find the wattage on the appliance label and your rate on your electricity bill."],
  howToUse: ["Enter the power rating in watts.", "Enter how many hours a day it runs and for how many days.", "Enter your price per kWh.", "Read the cost and energy used."],
  formulas: [
    { title: "Energy", expression: "kWh = watts × hours per day × days ÷ 1,000", explanation: "Converts watt-hours to kilowatt-hours." },
    { title: "Cost", expression: "cost = kWh × price per kWh", explanation: "Uses your tariff's energy rate." },
  ],
  examples: [
    {
      title: "A 100 W device, 5 hours a day for 30 days at $0.15/kWh",
      inputs: {"power": 100, "hours": 5, "days": 30, "rate": 0.15, "currency": "USD"},
      steps: ["100 × 5 × 30 ÷ 1,000 = 15 kWh", "15 × $0.15 = $2.25"],
      expectedPrimary: 2.25,
    },
    {
      title: "A 1,500 W heater, 1 hour a day for 30 days at $0.20/kWh",
      inputs: {"power": 1500, "hours": 1, "days": 30, "rate": 0.2, "currency": "USD"},
      steps: ["1,500 × 1 × 30 ÷ 1,000 = 45 kWh", "45 × $0.20 = $9.00"],
      expectedPrimary: 9,
    },
  ],
  assumptions: ["Assumes the device draws its full rated power while on. Thermostats, cycling and variable loads usually use less.", "Fixed charges, taxes, time-of-use rates and standby power are not included.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "What is a kilowatt-hour?", answer: "The energy used by a 1,000-watt device running for one hour." },
    { question: "Where do I find an appliance's wattage?", answer: "On its rating label or in the manual. If only amps are given, multiply by the voltage for an approximate wattage." },
    { question: "How do I lower running costs?", answer: "Use efficient appliances, reduce hours of use and check whether your tariff has cheaper off-peak rates." },
  ],
  related: ["ohms-law-calculator", "fuel-cost-calculator", "rainwater-harvesting-calculator"],
  updated: "2026-10-14",
  engine: electricityCostEngine,
  text,
  makeEngine: makeElectricityCostEngine,
  translations,
});
