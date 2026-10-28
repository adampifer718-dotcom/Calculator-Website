import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSolarPanelOutputEngine, solarPanelOutputEngine } from "./engine";

export const solarPanelOutput = defineCalculator({
  id: "solar-panel-output",
  slug: "solar-panel-calculator",
  status: "published",
  title: "Solar Panel Output Calculator",
  shortTitle: "Solar panel output",
  category: "ecology",
  collections: ["environment-energy", "personal-finance"],
  summary: "Estimate how many kilowatt-hours a set of solar panels produces per day, month and year, and how big a system would cover your electricity use.",
  metaTitle: "Solar Panel Output Calculator – kWh per Day and Year",
  metaDescription: "Estimate solar panel output in kWh per day, month and year from panel watts, peak sun hours and system losses, and size a system to match your yearly use.",
  keywords: ["solar panel calculator", "solar panel output", "solar kWh per year", "peak sun hours", "solar system size", "how many solar panels", "PV system losses", "solar energy estimate"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "PVWatts Version 5 Manual (NREL/TP-6A20-62641)",
      publisher: "National Renewable Energy Laboratory (NREL), via OSTI",
      url: "https://www.osti.gov/biblio/1158421",
      usedFor: "The PVWatts model and its default total system losses of 14%.",
    },
  ],
  intro: [
    "A solar panel's rating tells you how much power it produces under standard test conditions: full sunlight of 1,000 watts per square meter at a cell temperature of 25 °C. Real output depends on how much sunlight actually reaches the panels over a day, which is usually summarized as peak sun hours, and on losses in the rest of the system.",
    "Enter the panel rating, the number of panels, your peak sun hours and the system losses to estimate the energy produced per day, month and year. Add your annual electricity use to see the share the system covers and how many panels would cover all of it.",
  ],
  howToUse: [
    "Enter the rating of one panel in watts, as printed on its label or data sheet, and the number of panels.",
    "Enter the peak sun hours for your site. The default of 4.5 is only an example; look up a value for your location, or use a solar resource tool.",
    "Keep the default 14% system losses, or enter your own estimate for inverter, wiring, heat, dirt and shading losses.",
    "Optionally enter your yearly electricity use in kWh from your bills to see the share covered and the system size needed.",
  ],
  formulas: [
    { title: "Daily energy", expression: "E(day) = rating (W) × panels ÷ 1,000 × peak sun hours × (1 − losses ÷ 100)", explanation: "Rating × panels ÷ 1,000 is the system size in kW. Multiplying by peak sun hours gives kWh at full rated output, and the loss factor reduces it to what reaches your home." },
    { title: "Annual and monthly energy", expression: "E(year) = E(day) × 365;  E(month) = E(year) ÷ 12", explanation: "The monthly figure is an average. Real output is higher in summer and lower in winter." },
    { title: "System size for your use", expression: "size (kW) = annual use ÷ (365 × peak sun hours × (1 − losses ÷ 100))", explanation: "The panels needed are this size × 1,000 ÷ panel rating, rounded up to a whole panel." },
  ],
  examples: [
    {
      title: "Ten 400 W panels with 4.5 peak sun hours",
      inputs: { panelWatts: 400, panels: 10, sunHours: 4.5, losses: 14, annualUsage: null },
      steps: ["System size = 400 × 10 ÷ 1,000 = 4 kW", "Daily energy = 4 × 4.5 × (1 − 0.14) = 15.48 kWh", "Annual energy = 15.48 × 365 = 5,650.2 kWh"],
      expectedPrimary: 5650.2,
    },
    {
      title: "Sixteen 350 W panels, 5.2 sun hours, 11,000 kWh used per year",
      inputs: { panelWatts: 350, panels: 16, sunHours: 5.2, losses: 14, annualUsage: 11000 },
      steps: [
        "System size = 350 × 16 ÷ 1,000 = 5.6 kW",
        "Daily energy = 5.6 × 5.2 × 0.86 = 25.0432 kWh, so 25.0432 × 365 ≈ 9,140.77 kWh per year",
        "Share covered = 9,140.77 ÷ 11,000 ≈ 83.1%",
        "Size needed = 11,000 ÷ (365 × 5.2 × 0.86) ≈ 6.74 kW, or 6,739 ÷ 350 ≈ 19.25, rounded up to 20 panels",
      ],
      expectedPrimary: 9140.768,
    },
    {
      title: "Six 450 W panels in a cloudier place with 10% losses",
      inputs: { panelWatts: 450, panels: 6, sunHours: 3.2, losses: 10, annualUsage: null },
      steps: ["System size = 450 × 6 ÷ 1,000 = 2.7 kW", "Daily energy = 2.7 × 3.2 × 0.90 = 7.776 kWh", "Annual energy = 7.776 × 365 = 2,838.24 kWh"],
      expectedPrimary: 2838.24,
    },
  ],
  assumptions: [
    "Peak sun hours depend on your location, the tilt and direction of the panels, shading and the season. The figure you enter is used as a year-round average. For a real estimate, use a local solar resource tool such as NREL's PVWatts.",
    "The 14% loss default is a commonly used value that covers losses such as the inverter, wiring, soiling, mismatch and availability. Your system may lose more or less.",
    "Panel output also falls with high cell temperatures and slowly with age. These effects are only included to the extent they are part of the loss figure you enter.",
    "The share of use covered compares yearly totals only. It does not account for when the energy is produced and when it is used, or for battery storage and grid export rules.",
  ],
  faqs: [
    { question: "What are peak sun hours?", answer: "They express a day's solar energy as the number of hours of full sunlight at 1,000 W/m² that would deliver the same energy. A site that receives 5 kWh per square meter on a day has 5 peak sun hours, even though the sun is up for much longer." },
    { question: "Why is the output lower than rating × hours?", answer: "Panel ratings are measured in ideal laboratory conditions. In use, energy is lost in the inverter and wiring, to heat, dust and shading, and through small differences between panels. The loss percentage accounts for these together." },
    { question: "How many panels do I need?", answer: "Enter your annual electricity use. The calculator divides it by the energy one kW of panels produces in a year at your sun hours and losses, then converts that size into whole panels of the rating you entered." },
  ],
  related: ["wind-turbine-calculator", "electricity-cost-calculator", "battery-life-calculator"],
  updated: "2026-10-28",
  engine: solarPanelOutputEngine,
  text,
  makeEngine: makeSolarPanelOutputEngine,
  translations,
});
