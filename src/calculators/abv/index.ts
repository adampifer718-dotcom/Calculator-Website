import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { abvEngine, makeAbvEngine } from "./engine";

export const abv = defineCalculator({
  id: "abv",
  slug: "abv-calculator",
  status: "published",
  title: "Alcohol by Volume (ABV) Calculator",
  shortTitle: "ABV from gravity",
  category: "food",
  collections: ["food-hospitality", "education-research"],
  summary: "Estimate the alcohol content of homebrewed beer, wine or cider from the original and final gravity, in specific gravity or degrees Plato.",
  metaTitle: "ABV Calculator – Alcohol by Volume from OG and FG",
  metaDescription: "Estimate the ABV of homebrew from original and final gravity (SG or °Plato) with the standard and alternative formulas, plus ABW and apparent attenuation.",
  keywords: ["ABV calculator", "alcohol by volume", "original gravity", "final gravity", "homebrew ABV", "hydrometer ABV", "degrees Plato", "apparent attenuation"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Alcohol by Volume Calculator Updated",
      publisher: "Brewer's Friend",
      url: "https://www.brewersfriend.com/2011/06/16",
      usedFor: "The standard formula ABV = (OG − FG) × 131.25, the alternative formula 76.08 (OG − FG) ÷ (1.775 − OG) × FG ÷ 0.794, and the worked example OG 1.092, FG 1.021.",
    },
    {
      title: "Plato To SG Conversion Chart",
      publisher: "Brewer's Friend",
      url: "https://www.brewersfriend.com/plato-to-sg-conversion-chart",
      usedFor: "The conversion SG = 1 + P ÷ (258.6 − (P ÷ 258.2) × 227.1).",
    },
    {
      title: "brewday ABV utilities documentation",
      publisher: "brewday project (Read the Docs)",
      url: "https://brewday.readthedocs.io/en/latest/api/utilities/abv.html",
      usedFor: "The origin of the alternative formula (Ritchie Products, Zymurgy 1995).",
    },
    {
      title: "Calculation ABV",
      publisher: "Grainfather help center",
      url: "https://help.grainfather.com/hc/en-us/articles/360014534317-Calculation-ABV",
      usedFor: "Converting between ABV and ABW with the specific gravity of the drink and the density of ethanol (about 0.789).",
    },
  ],
  intro: [
    "Yeast turns sugar into alcohol and carbon dioxide, and because alcohol is lighter than water, the density of a beer, wine or cider falls as it ferments. Homebrewers measure that density with a hydrometer or refractometer before and after fermentation, as the original gravity (OG) and the final gravity (FG).",
    "Enter the two readings, as specific gravity or in degrees Plato, to estimate the alcohol by volume. The calculator shows the common standard formula, an alternative formula that many brewers prefer for strong beers, an approximate alcohol by weight and the apparent attenuation.",
  ],
  howToUse: [
    "Choose whether your readings are in specific gravity (such as 1.050) or degrees Plato (such as 12 °P).",
    "Enter the original gravity, measured before the yeast was added.",
    "Enter the final gravity, measured when fermentation has finished.",
    "Read the ABV from the standard formula, and compare it with the alternative formula below it.",
  ],
  formulas: [
    { title: "Standard formula", expression: "ABV = (OG − FG) × 131.25", explanation: "The most widely used homebrewing estimate. For OG 1.050 and FG 1.010 it gives 0.040 × 131.25 = 5.25%." },
    { title: "Alternative formula", expression: "ABV = 76.08 × (OG − FG) ÷ (1.775 − OG) × FG ÷ 0.794", explanation: "Attributed to Ritchie Products (Zymurgy, 1995). It gives higher values than the standard formula for strong beers." },
    { title: "Plato to specific gravity", expression: "SG = 1 + P ÷ (258.6 − (P ÷ 258.2) × 227.1)", explanation: "Used when the readings are in degrees Plato. 12 °P is about 1.0484." },
    { title: "Alcohol by weight and attenuation", expression: "ABW ≈ ABV × 0.789 ÷ FG;  attenuation = (OG − FG) ÷ (OG − 1) × 100", explanation: "0.789 is the density of ethanol relative to water at 20 °C. Attenuation is apparent because alcohol lowers the hydrometer reading below the true remaining extract." },
  ],
  examples: [
    {
      title: "A pale ale from 1.050 to 1.010",
      inputs: { scale: "sg", og: 1.05, fg: 1.01 },
      steps: ["Drop = 1.050 − 1.010 = 0.040", "ABV = 0.040 × 131.25 = 5.25%", "Apparent attenuation = 0.040 ÷ 0.050 = 80%"],
      expectedPrimary: 5.25,
    },
    {
      title: "A strong ale from 1.092 to 1.021",
      inputs: { scale: "sg", og: 1.092, fg: 1.021 },
      steps: [
        "Standard: (1.092 − 1.021) × 131.25 ≈ 9.32%",
        "Alternative: 76.08 × 0.071 ÷ (1.775 − 1.092) × 1.021 ÷ 0.794 ≈ 10.17%",
        "The two formulas differ by almost one percentage point at this strength",
      ],
      expectedPrimary: 9.31875,
    },
    {
      title: "A lager measured in Plato: 12 °P to 2.5 °P",
      inputs: { scale: "plato", ogPlato: 12, fgPlato: 2.5 },
      steps: ["OG = 1 + 12 ÷ (258.6 − (12 ÷ 258.2) × 227.1) ≈ 1.04838", "FG = 1 + 2.5 ÷ (258.6 − (2.5 ÷ 258.2) × 227.1) ≈ 1.00975", "ABV = (1.04838 − 1.00975) × 131.25 ≈ 5.07%"],
      expectedPrimary: 5.069911199465911,
    },
  ],
  assumptions: [
    "This is a homebrewing estimate only. It is not suitable for legal or commercial labelling, which needs a calibrated laboratory method.",
    "No hydrometer temperature correction is applied. Correct your readings to the hydrometer's calibration temperature first.",
    "The readings are taken as true specific gravities. A refractometer reading taken after fermentation has started is distorted by alcohol and needs a separate correction.",
    "Added sugar at bottling, or any sugar added after the original gravity was measured, is not included.",
  ],
  faqs: [
    { question: "Which formula should I use?", answer: "For most beers between about 1.040 and 1.060 the two give very similar results. For stronger beers they diverge, and many brewers then prefer the alternative formula. Neither replaces a laboratory measurement." },
    { question: "What is the difference between ABV and ABW?", answer: "ABV is the volume of alcohol as a percentage of the drink's volume. ABW is its weight as a percentage of the drink's weight. Alcohol is lighter than water, so ABW is lower, roughly 80% of the ABV for a typical beer." },
    { question: "What is apparent attenuation?", answer: "It is the share of the original gravity above 1.000 that has disappeared during fermentation. It is called apparent because alcohol is less dense than water and makes the final reading lower than the true remaining sugar content." },
  ],
  related: ["percentage-calculator", "dilution-calculator", "recipe-scaler"],
  updated: "2026-10-28",
  engine: abvEngine,
  text,
  makeEngine: makeAbvEngine,
  translations,
});
