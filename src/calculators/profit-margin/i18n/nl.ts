import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const nl: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Winstmargecalculator",
    shortTitle: "Winstmarge",
    summary: "Bereken de winst, de winstmarge en de opslag op basis van de kostprijs en de verkoopprijs.",
    metaTitle: "Winstmargecalculator – Marge en opslag berekenen",
    metaDescription:
      "Bereken de brutowinst, de winstmarge en het opslagpercentage op basis van kostprijs en verkoopprijs, en begrijp het verschil tussen marge en opslag.",
    keywords: ["winstmarge", "marge berekenen", "opslag", "brutomarge", "opslagpercentage", "verkoopprijs berekenen"],
    intro: [
      "Marge en opslag beschrijven allebei de winst, maar ten opzichte van een andere basis. De marge zet de winst af tegen de verkoopprijs, de opslag tegen de kostprijs.",
      "Vul in wat een artikel je kost en voor welke prijs je het verkoopt.",
    ],
    howToUse: ["Vul de kostprijs in.", "Vul de verkoopprijs in.", "Lees de winst, de marge en de opslag af."],
    formulas: [
      { title: "Winst", expression: "winst = prijs − kostprijs", explanation: "Brutowinst per artikel of voor een hele bestelling." },
      { title: "Marge", expression: "marge = winst ÷ prijs × 100", explanation: "Het deel van de prijs dat winst is." },
      { title: "Opslag", expression: "opslag = winst ÷ kostprijs × 100", explanation: "Hoeveel er bovenop de kostprijs is gezet." },
    ],
    examples: [
      { title: "Kostprijs $60, prijs $100", steps: ["Winst = $40", "Marge = 40 ÷ 100 = 40%; opslag = 40 ÷ 60 ≈ 66,67%"] },
      { title: "Kostprijs $25, prijs $40", steps: ["Winst = $15", "Marge = 15 ÷ 40 = 37,5%"] },
    ],
    assumptions: [
      "Dit is de brutomarge: alleen de kostprijs die je invult telt mee, geen overheadkosten of belastingen.",
      "Het kiezen van een valuta verandert alleen de weergave.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen marge en opslag?",
        answer: "De marge deelt de winst door de prijs, de opslag deelt de winst door de kostprijs. Een opslag van 50% komt overeen met een marge van 33,3%.",
      },
      {
        question: "Kan de marge hoger zijn dan 100%?",
        answer: "Nee. De marge is een deel van de verkoopprijs, dus die is hooguit 100% (als de kostprijs nul is).",
      },
      {
        question: "Hoe bepaal ik een prijs voor een gewenste marge?",
        answer: "Prijs = kostprijs ÷ (1 − gewenste marge). Voor een marge van 40% bij een kostprijs van $60 is de prijs 60 ÷ 0,6 = $100.",
      },
    ],
    sourcesUsedFor: ["Definities van brutowinst en marge."],
  },
  text: {
    cost: "Kostprijs",
    price: "Verkoopprijs (omzet)",
    margin: "Winstmarge",
    caption: "Winst als percentage van de verkoopprijs.",
    profit: "Winst",
    loss: "Verlies",
    markup: "Opslag",
    undefinedMarkup: "Niet gedefinieerd bij een kostprijs van nul",
  },
};

export default nl;
