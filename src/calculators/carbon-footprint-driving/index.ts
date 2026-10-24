import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { carCo2Engine, makeCarCo2Engine } from "./engine";

export const carbonFootprintDriving = defineCalculator({
  id: "carbon-footprint-driving",
  slug: "car-co2-calculator",
  status: "published",
  title: "Car CO₂ Emissions Calculator",
  shortTitle: "Car CO₂ emissions",
  category: "ecology",
  collections: ["environment-energy"],
  summary: "Estimate the tailpipe CO₂ from driving a gasoline or diesel car, from the distance and fuel economy or the fuel used, per trip and per year.",
  metaTitle: "Car CO₂ Emissions Calculator – Driving Carbon Footprint",
  metaDescription: "Estimate the tailpipe CO₂ of a gasoline or diesel car trip from distance and mpg or L/100 km, using US EPA factors, with per-km, per-mile and yearly totals.",
  keywords: ["car CO2 calculator", "driving carbon footprint", "CO2 per mile", "CO2 per km", "gasoline CO2 per gallon", "diesel CO2 per liter", "vehicle emissions", "fuel emissions"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Greenhouse Gas Emissions from a Typical Passenger Vehicle",
      publisher: "United States Environmental Protection Agency",
      url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
      usedFor: "The tailpipe emission factors of 8,887 g CO₂ per gallon of gasoline and 10,180 g CO₂ per gallon of diesel.",
    },
  ],
  intro: [
    "Burning fuel turns its carbon into carbon dioxide. Because almost all the carbon in gasoline or diesel ends up as CO₂, the tailpipe emissions of a car depend mainly on how much fuel it burns, whatever the make or model.",
    "This calculator works out the fuel used from the distance and your car's fuel economy (or takes the fuel amount directly) and multiplies it by the US EPA's emission factor. A gallon of gasoline produces about 8.9 kg of CO₂, which is more than the fuel weighs, because most of the mass comes from oxygen in the air.",
  ],
  howToUse: [
    "Choose whether to start from the distance and fuel economy, or from the amount of fuel used.",
    "Enter the distance and your car's fuel economy in mpg (US or UK), L/100 km or km/L, or enter the fuel used.",
    "Choose gasoline, diesel or a custom emission factor in kg of CO₂ per liter.",
    "Optionally enter how many times a year you make the trip to see the yearly total.",
  ],
  formulas: [
    { title: "CO₂ emitted", expression: "CO₂ = fuel used × emission factor", explanation: "With the fuel in liters and the factor in kg CO₂ per liter." },
    { title: "Fuel used", expression: "fuel = distance ÷ mpg × liters per gallon, or distance × L/100 km ÷ 100", explanation: "1 US gallon = 3.785411784 L, 1 imperial gallon = 4.54609 L and 1 mile = 1.609344 km exactly. For km/L, fuel = distance ÷ km/L." },
    { title: "EPA factors per liter", expression: "gasoline 8.887 ÷ 3.785411784 ≈ 2.3477 kg/L; diesel 10.180 ÷ 3.785411784 ≈ 2.6893 kg/L", explanation: "The EPA's per-gallon figures converted exactly to liters." },
  ],
  examples: [
    {
      title: "A 250 mile trip at 30 mpg in a gasoline car",
      inputs: { method: "distance", distance: 250, distanceUnit: "mi", economy: 30, economyUnit: "mpgUs", fuelType: "gasoline", trips: null },
      steps: ["Fuel = 250 ÷ 30 = 8.333 US gallons", "CO₂ = 8.333 × 8.887 kg ≈ 74.06 kg", "That is about 296 g of CO₂ per mile"],
      expectedPrimary: 74.05833333333335,
    },
    {
      title: "400 km in a diesel car using 6.5 L/100 km",
      inputs: { method: "distance", distance: 400, distanceUnit: "km", economy: 6.5, economyUnit: "l100km", fuelType: "diesel", trips: null },
      steps: ["Fuel = 400 × 6.5 ÷ 100 = 26 L", "Factor = 10.180 ÷ 3.785411784 ≈ 2.6893 kg CO₂/L", "CO₂ = 26 × 2.6893 ≈ 69.92 kg, about 174.8 g per km"],
      expectedPrimary: 69.92105881815472,
    },
    {
      title: "A 45 L tank of gasoline, filled 52 times a year",
      inputs: { method: "fuel", fuelAmount: 45, fuelUnit: "L", fuelType: "gasoline", trips: 52 },
      steps: ["CO₂ per tank = 45 × 2.3477 ≈ 105.65 kg", "Per year = 105.65 × 52 ≈ 5,494 kg, about 5.49 metric tons"],
      expectedPrimary: 105.64636631880893,
    },
  ],
  assumptions: [
    "Only tailpipe CO₂ is counted. Methane and nitrous oxide from the exhaust, refrigerant leaks and the upstream emissions from extracting, refining and transporting the fuel are not included, so the full footprint is higher.",
    "The gasoline and diesel factors are the US EPA's figures. Fuels blended with ethanol or biodiesel, and fuels in other countries, can differ slightly; use a custom factor if you have a better one.",
    "Electric cars are outside the scope of this calculator: they emit nothing at the tailpipe, and their footprint depends on the electricity mix where they are charged.",
    "The result is only as good as the fuel economy you enter. Real-world consumption is often worse than official test figures, especially in cold weather, at high speed and on short trips.",
  ],
  faqs: [
    { question: "How can a gallon of gasoline produce more than a gallon's weight of CO₂?", answer: "Each carbon atom in the fuel joins two oxygen atoms from the air. Oxygen is heavier than carbon, so the CO₂ weighs about 3.7 times as much as the carbon it contains (44 ÷ 12): a US gallon of gasoline weighs roughly 2.8 kg but produces almost 8.9 kg of CO₂." },
    { question: "Why does diesel have a higher factor than gasoline?", answer: "Diesel is denser and contains more carbon per liter, so burning a liter releases more CO₂. Diesel cars often use less fuel for the same trip, which can offset the higher factor." },
    { question: "Does this include the emissions from making the car or the fuel?", answer: "No. It covers only the CO₂ coming out of the exhaust while driving. Manufacturing the car and producing and delivering the fuel add further emissions that need a full life-cycle assessment." },
  ],
  related: ["fuel-cost-calculator", "electricity-cost-calculator", "wind-turbine-calculator"],
  updated: "2026-10-24",
  engine: carCo2Engine,
  text,
  makeEngine: makeCarCo2Engine,
  translations,
});
