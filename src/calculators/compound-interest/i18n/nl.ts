import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const nl: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Rente-op-rentecalculator",
    shortTitle: "Rente op rente",
    summary: "Zie hoe een inleg groeit met rente op rente, met een tabel van het saldo per jaar.",
    metaTitle: "Rente-op-rentecalculator – Eindwaarde berekenen",
    metaDescription:
      "Bereken rente op rente en de eindwaarde van een inleg bij jaarlijkse, driemaandelijkse, maandelijkse of dagelijkse bijschrijving, met een saldotabel per jaar.",
    keywords: ["rente op rente", "samengestelde rente", "eindwaarde", "sparen", "rentepercentage", "effectieve jaarrente", "vermogensgroei"],
    intro: [
      "Bij rente op rente ontvang je rente over eerder ontvangen rente én over de oorspronkelijke inleg, dus de groei versnelt na verloop van tijd.",
      "Vul een inleg, rente, looptijd en bijschrijvingsfrequentie in om de eindwaarde, de ontvangen rente en het saldo per jaar te zien.",
    ],
    howToUse: [
      "Vul de eerste inleg in.",
      "Vul de jaarlijkse rente en het aantal jaren in.",
      "Kies hoe vaak de rente wordt bijgeschreven.",
      "Lees de eindwaarde, de ontvangen rente en de effectieve jaarrente af.",
    ],
    formulas: [
      { title: "Eindwaarde", expression: "A = P × (1 + r ÷ n)^(n × t)", explanation: "P is de inleg, r de jaarrente als decimaal getal, n het aantal bijschrijvingen per jaar en t het aantal jaren." },
      { title: "Effectieve jaarrente", expression: "EAR = (1 + r ÷ n)ⁿ − 1", explanation: "De gelijkwaardige rente bij één bijschrijving per jaar, vaak APY genoemd." },
    ],
    examples: [
      {
        title: "$10.000 tegen 5%, maandelijks bijgeschreven, gedurende 10 jaar",
        steps: ["A = 10.000 × (1 + 0,05 ÷ 12)^120", "≈ $16.470,09"],
      },
      {
        title: "$1.000 tegen 10%, jaarlijks bijgeschreven, gedurende 2 jaar",
        steps: ["A = 1.000 × 1,1²", "= $1.210"],
      },
    ],
    assumptions: [
      "De rente blijft vast en er zijn geen verdere stortingen, opnames, belastingen of kosten.",
      "Rentes uit het verleden of uit advertenties bieden geen garantie voor toekomstige rendementen. Dit is geen financieel advies.",
      "Het kiezen van een valuta verandert alleen de opmaak.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen enkelvoudige rente en rente op rente?", answer: "Enkelvoudige rente krijg je alleen over de oorspronkelijke inleg. Bij rente op rente krijg je ook rente over de rente die je al hebt ontvangen." },
      { question: "Helpt het als de rente vaker wordt bijgeschreven?", answer: "Ja, een beetje. Maandelijkse bijschrijving geeft bij dezelfde nominale rente een hogere effectieve rente dan jaarlijkse bijschrijving." },
      { question: "Wat is de regel van 72?", answer: "Deel 72 door de jaarrente om te schatten in hoeveel jaar je geld verdubbelt. Bij 6% verdubbelt geld in ongeveer 12 jaar." },
    ],
    sourcesUsedFor: ["Formules voor rente op rente en eindwaarde."],
  },
  text: {
    principal: "Eerste inleg",
    rate: "Jaarlijkse rente",
    years: "Looptijd",
    frequency: "Rentebijschrijving",
    frequencies: { "1": "Jaarlijks", "2": "Halfjaarlijks", "4": "Per kwartaal", "12": "Maandelijks", "365": "Dagelijks" },
    future: "Eindwaarde",
    interest: "Ontvangen rente",
    effective: "Effectieve jaarrente",
    tableCaption: "Saldo aan het eind van elk jaar",
    tableColumns: { year: "Jaar", balance: "Saldo", interest: "Rente tot nu toe" },
    note: "Gaat uit van een vaste rente, geen verdere stortingen of opnames en geen belastingen of kosten.",
  },
};

export default nl;
