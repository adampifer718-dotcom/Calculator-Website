import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const nl: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Kortingscalculator",
    shortTitle: "Korting",
    summary: "Bereken de prijs na korting en hoeveel je bespaart uit een oorspronkelijke prijs en een kortingspercentage.",
    metaTitle: "Kortingscalculator – Prijs na korting en besparing",
    metaDescription:
      "Bereken de prijs na een procentuele korting en hoeveel je bespaart. Vul de oorspronkelijke prijs en het kortingspercentage in en zie direct het resultaat.",
    keywords: ["korting berekenen", "prijs na korting", "procent korting", "besparing", "kortingscode", "afprijzing", "uitverkoop"],
    intro: [
      "Vul de oorspronkelijke prijs en het kortingspercentage in om de prijs na korting en je besparing te zien.",
      "Handig bij uitverkoop, kortingsbonnen en het vergelijken van aanbiedingen.",
    ],
    howToUse: ["Vul de oorspronkelijke prijs in.", "Vul het kortingspercentage in.", "Lees de prijs na korting en het bespaarde bedrag af."],
    formulas: [
      { title: "Besparing", expression: "Besparing = prijs × korting % ÷ 100", explanation: "Het bedrag dat eraf gaat." },
      { title: "Prijs na korting", expression: "Prijs na korting = prijs − besparing = prijs × (1 − korting ÷ 100)", explanation: "Wat je betaalt vóór eventuele omzetbelasting." },
    ],
    examples: [
      {
        title: "$120 met 25% korting",
        steps: ["Besparing = $120 × 0,25 = $30", "Prijs na korting = $120 − $30 = $90"],
      },
      {
        title: "$59,99 met 15% korting",
        steps: ["Besparing = $59,99 × 0,15 = $9,00", "Prijs na korting ≈ $50,99"],
      },
    ],
    assumptions: [
      "Omzetbelasting is niet inbegrepen; gebruik de calculator voor omzetbelasting om die toe te voegen.",
      "Twee kortingen na elkaar vermenigvuldig je in plaats van ze op te tellen: eerst 20% en dan 10% korting is 28% korting, geen 30%.",
    ],
    faqs: [
      { question: "Hoe bereken ik een procentuele korting?", answer: "Vermenigvuldig de prijs met de korting als decimaal getal en trek dat af. 30% korting op $50 is $50 − $15 = $35." },
      { question: "Mag ik twee kortingen bij elkaar optellen?", answer: "Nee. Eerst 20% en dan 10% korting laat 0,8 × 0,9 = 72% van de prijs over, een totale korting van 28%." },
      { question: "Hoe vind ik de oorspronkelijke prijs uit een prijs na korting?", answer: "Deel de prijs na korting door (1 − korting ÷ 100). $60 na 25% korting was $60 ÷ 0,75 = $80." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Oorspronkelijke prijs",
    percent: "Korting",
    sale: "Prijs na korting",
    save: "Je bespaart",
    share: "Deel van de oorspronkelijke prijs",
  },
};

export default nl;
