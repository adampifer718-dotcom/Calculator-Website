import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { batteryLifeEngine, makeBatteryLifeEngine } from "./engine";

export const batteryLife = defineCalculator({
  id: "battery-life",
  slug: "battery-life-calculator",
  status: "published",
  title: "Battery Life Calculator",
  shortTitle: "Battery Life",
  category: "other",
  collections: ["manufacturing-operations", "environment-energy"],
  summary: "Estimate how long a battery will run a device from its capacity in mAh, Ah or Wh and the load in mA, A or W.",
  metaTitle: "Battery Life Calculator – Runtime from mAh, Ah or Wh",
  metaDescription: "Estimate battery runtime from capacity (mAh, Ah or Wh) and device load (mA, A or W), with usable depth of discharge, runtime in hours and days, and energy.",
  keywords: ["battery life calculator", "battery runtime", "mah to hours", "battery capacity", "watt hours", "amp hours", "depth of discharge", "how long will a battery last"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "PackSafe – Batteries",
      publisher: "Federal Aviation Administration (FAA)",
      url: "https://www.faa.gov/hazmat/packsafe/batteries",
      usedFor: "Battery energy in watt-hours as volts × amp-hours.",
    },
    {
      title: "PackSafe – Power Tools",
      publisher: "Federal Aviation Administration (FAA)",
      url: "https://www.faa.gov/hazmat/packsafe/power-tools",
      usedFor: "Converting a milliamp-hour rating to amp-hours by dividing by 1,000 before multiplying by the voltage.",
    },
    {
      title: "What is the Peukert Effect?",
      publisher: "Discover Battery",
      url: "https://discoverbattery.com/support/learning-center/battery-101/what-is-the-peukert-effect",
      usedFor: "That the usable capacity falls at higher discharge currents (the Peukert effect), which this calculator does not model.",
    },
  ],
  intro: [
    "A battery's capacity tells you how much charge (in milliamp-hours or amp-hours) or energy (in watt-hours) it stores. Dividing the part of that capacity you can actually use by what the device draws gives a first estimate of how long it will run.",
    "This calculator accepts capacity in mAh, Ah or Wh and a load in mA, A or W. When one is a charge and the other a power, it uses the battery voltage to convert between them. Use it to size a battery for a sensor, a camping light, a power bank or a backup supply.",
  ],
  howToUse: [
    "Enter the battery capacity and choose mAh, Ah or Wh.",
    "Enter the nominal battery voltage. It is needed when one value is in mAh or Ah and the other in W or Wh, and it lets the calculator show the energy.",
    "Enter the device's average load in mA, A or W.",
    "Set the usable capacity (80% by default) and read the runtime as hours and minutes, in decimal hours and in days.",
  ],
  formulas: [
    { title: "Runtime from charge", expression: "t (h) = capacity (mAh) ÷ load (mA) × usable fraction", explanation: "Amp-hours and amps work the same way. The usable fraction is the depth of discharge, for example 0.8." },
    { title: "Runtime from energy", expression: "t (h) = energy (Wh) ÷ load (W) × usable fraction", explanation: "Use this when the capacity is in watt-hours and the load in watts." },
    { title: "Charge to energy", expression: "Wh = mAh × V ÷ 1000", explanation: "V is the nominal battery voltage. In the same way, a load in watts draws W ÷ V amps." },
  ],
  examples: [
    {
      title: "3,000 mAh cell powering a 150 mA device",
      inputs: { capacity: 3000, capacityUnit: "mAh", voltage: 3.7, load: 150, loadUnit: "mA", depth: 80 },
      steps: ["Ideal runtime = 3,000 ÷ 150 = 20 h", "Usable runtime = 20 × 0.80 = 16 h", "Energy = 3,000 × 3.7 ÷ 1000 = 11.1 Wh"],
      expectedPrimary: "16:00",
    },
    {
      title: "100 Ah, 12 V lead-acid battery running a 45 W load to 50%",
      inputs: { capacity: 100, capacityUnit: "Ah", voltage: 12, load: 45, loadUnit: "W", depth: 50 },
      steps: ["Energy = 100 Ah × 12 V = 1,200 Wh", "Usable energy = 1,200 × 0.50 = 600 Wh", "Runtime = 600 ÷ 45 ≈ 13.33 h = 13 h 20 min"],
      expectedPrimary: "13:20",
    },
    {
      title: "74 Wh laptop battery at an 18 W average draw",
      inputs: { capacity: 74, capacityUnit: "Wh", voltage: null, load: 18, loadUnit: "W", depth: 90 },
      steps: ["Usable energy = 74 × 0.90 = 66.6 Wh", "Runtime = 66.6 ÷ 18 = 3.7 h", "0.7 h × 60 = 42 min, so about 3 h 42 min"],
      expectedPrimary: "3:42",
    },
  ],
  assumptions: [
    "The load is constant. For a device that switches between sleep and activity, enter its average current or power.",
    "The real capacity falls in the cold, as a battery ages and at high discharge rates (the Peukert effect, strongest in lead-acid batteries). These effects are not modelled, so heavy loads will run for less time than shown.",
    "Voltage conversions use the nominal voltage, although the voltage drops during discharge, and converter or inverter losses are not included unless you lower the usable capacity to allow for them.",
  ],
  faqs: [
    { question: "What usable capacity should I enter?", answer: "Lithium-ion packs can often use 80–90% of their rating, while lead-acid batteries last longer if they are regularly discharged only to about 50%. If you do not know, 80% is a cautious starting point for small electronics." },
    { question: "Why do I need the voltage?", answer: "Milliamp-hours measure charge, while watts and watt-hours measure power and energy. Converting between them needs the voltage: watt-hours equal amp-hours times volts. If the capacity is in mAh and the load in mA, the voltage is not needed for the runtime." },
    { question: "Why does my power bank deliver less than its mAh rating suggests?", answer: "Power banks are rated at the internal cell voltage of about 3.7 V, but USB output is 5 V or more, and the voltage converter loses some energy as heat. Compare in watt-hours and lower the usable capacity to allow for those losses." },
  ],
  related: ["electricity-cost-calculator", "ohms-law-calculator", "download-time-calculator"],
  updated: "2026-10-24",
  engine: batteryLifeEngine,
  text,
  makeEngine: makeBatteryLifeEngine,
  translations,
});
