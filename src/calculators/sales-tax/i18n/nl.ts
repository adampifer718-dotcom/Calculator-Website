import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const nl: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Btw- en omzetbelastingcalculator",
    shortTitle: "Omzetbelasting",
    summary: "Tel omzetbelasting op bij een prijs of bereken de prijs zonder belasting uit een totaal waarin de belasting al zit.",
    metaTitle: "Btw- en omzetbelastingcalculator – Belasting erbij of eraf",
    metaDescription:
      "Bereken de omzetbelasting en de totaalprijs, of haal de belasting uit een totaal inclusief belasting om de oorspronkelijke prijs te vinden. Voor elk tarief en elke valuta.",
    keywords: ["btw berekenen", "btw eraf halen", "omzetbelasting", "prijs inclusief btw", "prijs exclusief btw", "sales tax"],
    intro: [
      "Vul een prijs en een belastingtarief in om de belasting en het totaal dat je betaalt te zien. Schakel over naar belasting eraf halen om de prijs vóór belasting te vinden uit het totaal op een kassabon.",
      "Dezelfde berekeningen werken voor btw en GST, die ook als percentage bovenop de prijs komen.",
    ],
    howToUse: [
      "Kies of je belasting wilt optellen bij een prijs of eraf wilt halen van een totaal.",
      "Vul het bedrag en het belastingtarief in procenten in.",
      "Lees de belasting, het totaal en de prijs vóór belasting af.",
    ],
    formulas: [
      {
        title: "Belasting erbij",
        expression: "Belasting = prijs × tarief ÷ 100\nTotaal = prijs + belasting",
        explanation: "Vermenigvuldig de prijs met het tarief als decimaal getal.",
      },
      {
        title: "Belasting eraf",
        expression: "Prijs zonder belasting = totaal ÷ (1 + tarief ÷ 100)",
        explanation: "Delen door 1 plus het tarief maakt de belasting ongedaan. Het percentage van het totaal aftrekken geeft niet de juiste uitkomst.",
      },
    ],
    examples: [
      { title: "$100 met 8,25% belasting", steps: ["Belasting = $100 × 0,0825 = $8,25", "Totaal = $100 + $8,25 = $108,25"] },
      { title: "Een totaal van $54 inclusief 8% belasting", steps: ["Prijs = $54 ÷ 1,08 = $50", "Belasting = $54 − $50 = $4"] },
    ],
    assumptions: [
      "Het tarief is één percentage over het hele bedrag. Op sommige plaatsen worden producten anders belast of komen er lokale belastingen bij.",
      "Resultaten worden alleen bij weergave op centen afgerond.",
      "Het kiezen van een valuta verandert alleen de weergave.",
    ],
    faqs: [
      {
        question: "Hoe bereken je omzetbelasting?",
        answer: "Vermenigvuldig de prijs met het belastingtarief als decimaal getal. Bij een tarief van 7% is $50 × 0,07 = $3,50 belasting.",
      },
      {
        question: "Hoe haal ik de belasting uit een totaal?",
        answer: "Deel het totaal door 1 plus het tarief. Een totaal van $107 met 7% belasting is $107 ÷ 1,07 = $100 vóór belasting.",
      },
      { question: "Werkt btw op dezelfde manier?", answer: "Ja. Btw en GST zijn percentages van de prijs, dus dezelfde formules gelden." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Berekening",
    modes: { add: "Belasting optellen bij een prijs", remove: "Belasting uit een totaal halen" },
    amount: "Bedrag",
    amountHelp: "Prijs vóór belasting of, als je belasting eraf haalt, het totaal inclusief belasting.",
    rate: "Belastingtarief",
    beforeTax: "Prijs vóór belasting",
    beforeTaxCaption: "Het totaal gedeeld door (1 + belastingtarief).",
    taxIncluded: "Inbegrepen belasting",
    total: "Totaal inclusief belasting",
    totalCaption: "De prijs plus de belasting.",
    tax: "Belasting",
  },
};

export default nl;
