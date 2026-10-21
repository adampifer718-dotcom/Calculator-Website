import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const nl: CalculatorTranslation<TipText> = {
  content: {
    title: "Fooicalculator",
    shortTitle: "Fooi",
    summary: "Bereken de fooi, het totaalbedrag en wat ieder betaalt als je de rekening deelt.",
    metaTitle: "Fooicalculator – fooi berekenen en rekening delen",
    metaDescription:
      "Bereken de fooi voor elke rekening en elk fooipercentage, het totaal inclusief fooi en hoeveel ieder betaalt als je de rekening gelijk verdeelt.",
    keywords: ["fooi", "fooi berekenen", "rekening delen", "restaurant", "fooipercentage", "servicekosten"],
    intro: [
      "Vul de rekening en een fooipercentage in om de fooi en het totaal te zien. Vul het aantal personen in om het bedrag gelijk te verdelen.",
      "Gewoonten verschillen per land en per soort dienst, dus kies het percentage dat past.",
    ],
    howToUse: [
      "Vul het bedrag van de rekening in.",
      "Vul het fooipercentage in.",
      "Vul in met hoeveel personen je de rekening deelt.",
      "Lees de fooi, het totaal en het bedrag per persoon af.",
    ],
    formulas: [
      {
        title: "Fooi",
        expression: "Fooi = rekening × fooi% ÷ 100",
        explanation: "Sommige mensen geven fooi over het bedrag zonder btw; vul in wat jij wilt.",
      },
      { title: "Verdelen", expression: "Per persoon = (rekening + fooi) ÷ personen", explanation: "Een gelijke verdeling." },
    ],
    examples: [
      { title: "Rekening van $80, 18% fooi, 4 personen", steps: ["Fooi = $80 × 0,18 = $14,40", "Totaal = $94,40; ieder betaalt $23,60"] },
      { title: "Rekening van $45, 20% fooi, 1 persoon", steps: ["Fooi = $45 × 0,20 = $9", "Totaal = $54"] },
    ],
    assumptions: [
      "De rekening wordt gelijk verdeeld; bedragen worden alleen voor de weergave op centen afgerond.",
      "De gekozen valuta verandert alleen de opmaak.",
    ],
    faqs: [
      {
        question: "Hoeveel fooi moet ik geven?",
        answer: "Dat hangt af van de lokale gewoonte en de service. In de VS is 15–20% in restaurants gebruikelijk; in Nederland en België is fooi meestal kleiner of al bij de prijs inbegrepen.",
      },
      {
        question: "Geef ik fooi over het bedrag voor of na btw?",
        answer: "Allebei komt voor. Vul het bedrag zonder of met btw in als rekening, wat jij het liefst hebt.",
      },
      {
        question: "Hoe verdeel ik een rekening ongelijk?",
        answer: "Bereken eerst ieders deel van de rekening apart en pas daarna op elk deel het fooipercentage toe.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Bedrag van de rekening",
    percent: "Fooipercentage",
    people: "Verdelen over",
    tip: "Fooi",
    total: "Totaal inclusief fooi",
    each: "Ieder betaalt",
    tipEach: "Fooi per persoon",
  },
};

export default nl;
