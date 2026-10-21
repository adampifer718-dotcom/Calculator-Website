import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const nl: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Betrouwbaarheidsintervalcalculator",
    shortTitle: "Betrouwbaarheidsinterval",
    summary: "Bereken een betrouwbaarheidsinterval voor een gemiddelde uit het steekproefgemiddelde, de standaardafwijking en de steekproefgrootte.",
    metaTitle: "Betrouwbaarheidsinterval berekenen – Voor een gemiddelde",
    metaDescription:
      "Bereken een betrouwbaarheidsinterval voor een gemiddelde uit steekproefgemiddelde, standaardafwijking, steekproefgrootte en niveau, met foutmarge en z*.",
    keywords: ["betrouwbaarheidsinterval", "foutmarge", "standaardfout", "z-score", "95% betrouwbaarheid", "statistiek", "gemiddelde"],
    intro: [
      "Een betrouwbaarheidsinterval geeft een bereik van aannemelijke waarden voor een populatiegemiddelde. Een 95%-interval is zo opgebouwd dat 95% van de intervallen die op deze manier worden gemaakt het echte gemiddelde bevat.",
      "Vul het steekproefgemiddelde, de standaardafwijking, de steekproefgrootte en het betrouwbaarheidsniveau in.",
    ],
    howToUse: [
      "Vul het steekproefgemiddelde in.",
      "Vul de standaardafwijking en de steekproefgrootte in.",
      "Kies het betrouwbaarheidsniveau, bijvoorbeeld 95%.",
      "Lees het interval, de foutmarge en de kritieke waarde af.",
    ],
    formulas: [
      { title: "Betrouwbaarheidsinterval", expression: "BI = x̄ ± z* × σ ÷ √n", explanation: "z* is de kritieke waarde bij het betrouwbaarheidsniveau." },
      { title: "Kritieke waarde", expression: "z* = Φ⁻¹(1 − (1 − niveau) ÷ 2)", explanation: "Bij 95% is z* ≈ 1,96; bij 99% is z* ≈ 2,576." },
    ],
    examples: [
      {
        title: "Gemiddelde 100, σ 15, n 36, 95%",
        steps: ["SE = 15 ÷ √36 = 2,5", "FM = 1,96 × 2,5 ≈ 4,9", "BI ≈ 95,1 tot 104,9"],
      },
      {
        title: "Gemiddelde 50, σ 8, n 64, 99%",
        steps: ["SE = 8 ÷ √64 = 1", "FM = 2,576 × 1", "BI ≈ 47,42 tot 52,58"],
      },
    ],
    assumptions: [
      "Gebruikt de normale (z-)verdeling: geschikt als σ bekend is of de steekproef groot is (n ≥ 30). Kleine steekproeven met een geschatte σ vragen om een t-interval, dat breder is.",
      "Gaat uit van een aselecte steekproef van onafhankelijke waarnemingen.",
    ],
    faqs: [
      { question: "Wat betekent 95% betrouwbaarheid?", answer: "Als je de steekproef vele keren zou herhalen, zou ongeveer 95% van de intervallen het echte gemiddelde bevatten. Het is geen kans van 95% voor één specifiek interval." },
      { question: "Hoe maak ik het interval smaller?", answer: "Vergroot de steekproef of accepteer een lager betrouwbaarheidsniveau." },
      { question: "Wat is de foutmarge?", answer: "De helft van de breedte van het interval: z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Betrouwbaarheidsinterval voor een gemiddelde en kritieke z-waarden."],
  },
  text: {
    mean: "Steekproefgemiddelde (x̄)",
    sd: "Standaardafwijking (σ)",
    n: "Steekproefgrootte (n)",
    level: "Betrouwbaarheidsniveau",
    primary: "{level}-betrouwbaarheidsinterval",
    interval: "{lower} tot {upper}",
    margin: "Foutmarge",
    standardError: "Standaardfout",
    critical: "Kritieke waarde (z*)",
    note: "Gebruikt de normale (z-)verdeling, die uitgaat van een bekende standaardafwijking van de populatie of een grote steekproef (n ≥ 30).",
  },
};

export default nl;
