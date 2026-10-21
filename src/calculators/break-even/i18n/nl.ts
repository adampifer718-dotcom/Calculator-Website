import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const nl: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Break-evencalculator",
    shortTitle: "Break-even",
    summary: "Bereken hoeveel eenheden je moet verkopen om je vaste kosten te dekken, en de omzet bij het break-evenpunt.",
    metaTitle: "Break-evencalculator – Aantal eenheden en omzet",
    metaDescription:
      "Bereken je break-evenpunt in eenheden en omzet uit vaste kosten, prijs per eenheid en variabele kosten per eenheid, met de dekkingsbijdrage.",
    keywords: ["break-even berekenen", "break-evenpunt", "dekkingsbijdrage", "vaste kosten", "variabele kosten", "kostprijs", "ondernemen"],
    intro: [
      "Het break-evenpunt is het punt waarop de totale omzet gelijk is aan de totale kosten: er is geen winst en geen verlies.",
      "Elke verkochte eenheid draagt haar prijs min de variabele kosten bij aan de vaste kosten. Zodra die gedekt zijn, is elke verdere verkoop winst.",
    ],
    howToUse: [
      "Vul je vaste kosten voor de periode in.",
      "Vul de verkoopprijs per eenheid in.",
      "Vul de variabele kosten per eenheid in.",
      "Lees af hoeveel eenheden en hoeveel omzet je nodig hebt om quitte te spelen.",
    ],
    formulas: [
      { title: "Eenheden bij break-even", expression: "eenheden = vaste kosten ÷ (prijs − variabele kosten)", explanation: "De noemer is de dekkingsbijdrage per eenheid." },
      { title: "Omzet bij break-even", expression: "omzet = eenheden × prijs", explanation: "Of, gelijkwaardig: vaste kosten ÷ dekkingsbijdrage als percentage van de prijs." },
    ],
    examples: [
      {
        title: "$10.000 vast, prijs $50, variabel $30",
        steps: ["Dekkingsbijdrage = $50 − $30 = $20", "Eenheden = 10.000 ÷ 20 = 500"],
      },
      {
        title: "$2.500 vast, prijs $12, variabel $4,50",
        steps: ["Dekkingsbijdrage = $7,50", "Eenheden = 2.500 ÷ 7,5 ≈ 333,33, dus 334 eenheden"],
      },
    ],
    assumptions: [
      "Prijs en variabele kosten per eenheid blijven bij elk volume gelijk.",
      "De vaste kosten gelden voor dezelfde periode als de verkopen die je plant.",
      "Belastingen en financieringskosten zijn niet meegenomen, tenzij je ze bij de vaste kosten optelt.",
    ],
    faqs: [
      { question: "Wat is de dekkingsbijdrage?", answer: "Prijs min variabele kosten per eenheid: het bedrag dat elke verkoop bijdraagt aan de vaste kosten en de winst." },
      { question: "Wat als de variabele kosten hoger zijn dan de prijs?", answer: "Dan verlies je op elke verkoop geld, dus bij die prijs bereik je nooit het break-evenpunt." },
      { question: "Hoe bereken ik het aantal eenheden voor een winstdoel?", answer: "Tel de beoogde winst op bij de vaste kosten en deel door de dekkingsbijdrage per eenheid." },
    ],
    sourcesUsedFor: ["Kosten-volume-winstanalyse en formules voor het break-evenpunt."],
  },
  text: {
    fixed: "Vaste kosten",
    fixedHelp: "Kosten die niet met het volume veranderen, zoals huur en salarissen.",
    price: "Prijs per eenheid",
    variable: "Variabele kosten per eenheid",
    variableHelp: "Materialen, verpakking en andere kosten per eenheid.",
    variableTooHigh: "De variabele kosten moeten lager zijn dan de prijs, anders bereik je nooit het break-evenpunt.",
    units: "Volume bij break-even",
    unitsSuffix: "eenheden",
    caption: "Rond af naar {count} hele eenheden.",
    revenue: "Omzet bij break-even",
    contribution: "Dekkingsbijdrage per eenheid",
    ratio: "Dekkingsbijdrage in % van de prijs",
  },
};

export default nl;
