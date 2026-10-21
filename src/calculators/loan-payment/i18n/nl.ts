import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const nl: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Leningcalculator voor maandlasten",
    shortTitle: "Maandlasten lening",
    summary: "Bereken het maandbedrag, de totale rente en het aflossingsschema van een lening of hypotheek met vaste rente.",
    metaTitle: "Leningcalculator – maandbedrag en totale rente",
    metaDescription:
      "Bereken het maandbedrag van een lening of hypotheek met vaste rente, de totale rente en een aflossingsschema per jaar op basis van bedrag, jaarrente en looptijd.",
    keywords: ["lening", "hypotheek", "maandbedrag", "maandlasten", "aflossing", "rente", "jkp", "autolening", "persoonlijke lening"],
    intro: [
      "De meeste autoleningen, persoonlijke leningen en hypotheken met vaste rente worden afgelost in gelijke maandbedragen. Elke betaling dekt de rente van die maand en lost een deel van de schuld af.",
      "Vul het leenbedrag, de jaarrente en de looptijd in om het maandbedrag, de totale rente en het verloop van de restschuld per jaar te zien.",
    ],
    howToUse: [
      "Vul het geleende bedrag in.",
      "Vul de jaarlijkse rente (JKP) in.",
      "Vul de looptijd in jaren in.",
      "Lees het maandbedrag, de totale rente en het jaarschema af.",
    ],
    formulas: [
      {
        title: "Maandbedrag",
        expression: "M = P × r ÷ (1 − (1 + r)^(−n))",
        explanation: "P is het geleende bedrag, r de maandrente (JKP ÷ 12) en n het aantal maandelijkse betalingen.",
      },
      { title: "Zonder rente", expression: "M = P ÷ n", explanation: "Zonder rente wordt de lening gelijkmatig verdeeld." },
      {
        title: "Restschuld",
        expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r",
        explanation: "De restschuld na k betalingen, gebruikt voor het schema.",
      },
    ],
    examples: [
      {
        title: "$ 200.000 tegen 6% over 30 jaar",
        steps: ["r = 0,06 ÷ 12 = 0,005; n = 360", "M = 200.000 × 0,005 ÷ (1 − 1,005^−360) ≈ $ 1.199,10"],
      },
      { title: "$ 10.000 tegen 0% over 5 jaar", steps: ["n = 60 betalingen", "M = 10.000 ÷ 60 ≈ $ 166,67"] },
    ],
    assumptions: [
      "Vaste rente, gelijke maandbedragen en geen extra aflossingen.",
      "Onroerendgoedbelasting, verzekeringen, kosten, afsluitprovisie en hypotheekverzekeringen zijn niet meegerekend.",
      "Kredietverstrekkers kunnen de betalingen elke maand op centen afronden, waardoor de laatste betalingen iets kunnen afwijken. Dit is geen financieel advies.",
    ],
    faqs: [
      {
        question: "Hoe wordt het maandbedrag van een lening berekend?",
        answer: "Met de annuïteitenformule M = P × r ÷ (1 − (1 + r)^−n), waarbij r de maandrente is en n het aantal betalingen.",
      },
      {
        question: "Waarom bestaat een vroege betaling vooral uit rente?",
        answer: "Rente wordt berekend over de openstaande schuld, en die is aan het begin het hoogst. Naarmate de schuld daalt, gaat een groter deel van elke betaling naar aflossing.",
      },
      {
        question: "Bespaar ik geld met een kortere looptijd?",
        answer: "Meestal wel: de maandbedragen zijn hoger, maar je betaalt minder jaren rente, dus de totale rente is lager.",
      },
    ],
    sourcesUsedFor: ["De contante waarde van een annuïteit en de formule voor een lening met gelijke betalingen."],
  },
  text: {
    principal: "Leenbedrag",
    rate: "Jaarlijkse rente (JKP)",
    years: "Looptijd",
    termTooShort: "De looptijd moet minstens één maand zijn.",
    payment: "Maandbedrag",
    caption: "{count} maandelijkse betalingen tegen {rate} JKP.",
    total: "Totaal van de betalingen",
    interest: "Totale rente",
    tableCaption: "Aflossing per jaar",
    tableColumns: { year: "Jaar", principal: "Afgelost", interest: "Betaalde rente", balance: "Restschuld" },
    note: "Vaste rente met gelijke maandbedragen. Belastingen, verzekeringen, kosten en eventuele rentewijzigingen zijn niet meegerekend.",
  },
};

export default nl;
