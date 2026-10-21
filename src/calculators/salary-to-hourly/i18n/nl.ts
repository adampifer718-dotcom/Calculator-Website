import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const nl: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Salaris naar uurloon omrekenen",
    shortTitle: "Salaris naar uurloon",
    summary: "Reken een bruto jaar-, maand-, halfmaand- of ander salaris om naar een uurloon op basis van je eigen werkrooster.",
    metaTitle: "Salaris naar uurloon omrekenen – Elke betaalperiode",
    metaDescription:
      "Reken je salaris om naar een uurloon. Vul je bruto jaar-, maand-, halfmaand-, week- of dagloon in, plus je uren, werkdagen en betaalde weken per jaar.",
    keywords: ["salaris naar uurloon", "uurloon berekenen", "jaarsalaris naar uurloon", "maandsalaris per uur", "bruto uurloon", "salaris omrekenen"],
    intro: [
      "Deze calculator rekent brutoloon uit elke gangbare betaalperiode om naar het equivalent per uur. Hij laat ook zien wat hetzelfde loon per jaar, maand, halve maand, twee weken, week en werkdag oplevert.",
      "Het resultaat hangt af van het rooster dat je invult. Een salaris van $60.000 komt neer op ongeveer $28,85 per uur bij 40 uur per week gedurende 52 weken, maar op ongeveer $30,77 per uur bij 37,5 uur per week.",
    ],
    howToUse: [
      "Vul je brutoloon in, vóór belastingen en inhoudingen.",
      "Kies hoe vaak je dat bedrag krijgt: per jaar, per maand, per halve maand, per twee weken, per week, per dag of per uur.",
      "Stel je betaalde uren per week, werkdagen per week en betaalde weken per jaar in. Standaard is dat 40 uur, 5 dagen en 52 weken.",
      "Lees het equivalent per uur af en het volledige overzicht per betaalperiode. De resultaten worden bijgewerkt terwijl je typt.",
    ],
    formulas: [
      {
        title: "Het bedrag omrekenen naar een jaarbedrag",
        expression:
          "Jaarloon = bedrag × perioden per jaar\nPer jaar = 1, Per maand = 12, Per halve maand = 24, Per twee weken = 26\nPer week = weken per jaar\nPer dag = werkdagen per week × weken per jaar\nPer uur = uren per week × weken per jaar",
        explanation:
          "Jaar-, maand-, halfmaand- en tweewekelijks loon gebruiken een vast aantal kalenderperioden. Week-, dag- en uurloon worden omgerekend met het rooster dat je invult.",
      },
      {
        title: "Delen door de betaalde uren",
        expression: "Uren per jaar = uren per week × weken per jaar\nEquivalent per uur = jaarloon ÷ uren per jaar",
        explanation: "Het equivalent per uur verdeelt het brutojaarloon gelijk over alle betaalde uren van het jaar.",
      },
      {
        title: "Andere betaalperioden",
        expression: "Loon per periode = jaarloon ÷ perioden per jaar",
        explanation: "De overzichtstabel deelt het jaarbedrag door het aantal perioden van elk type. Waarden worden alleen bij weergave afgerond.",
      },
    ],
    examples: [
      {
        title: "Fulltime jaarsalaris van $60.000",
        steps: ["Uren per jaar = 40 × 52 = 2.080", "Per uur = $60.000 ÷ 2.080 = $28,846…"],
      },
      {
        title: "$4.500 per maand",
        steps: ["Jaarloon = $4.500 × 12 = $54.000", "Uren per jaar = 40 × 52 = 2.080", "Per uur = $54.000 ÷ 2.080 = $25,961…"],
      },
      {
        title: "$2.000 per twee weken bij 37,5 uur per week",
        steps: ["Jaarloon = $2.000 × 26 = $52.000", "Uren per jaar = 37,5 × 52 = 1.950", "Per uur = $52.000 ÷ 1.950 = $26,666…"],
      },
      {
        title: "$250 per dag, 4 dagen per week, 48 betaalde weken",
        steps: ["Jaarloon = $250 × 4 × 48 = $48.000", "Uren per jaar = 32 × 48 = 1.536", "Per uur = $48.000 ÷ 1.536 = $31,25"],
      },
    ],
    assumptions: [
      "Alle bedragen zijn bruto, vóór inkomstenbelasting, sociale premies, pensioenbijdragen en andere inhoudingen. Deze calculator schat geen belastingen of nettoloon.",
      "Maand-, halfmaand- en tweewekelijks loon worden omgerekend met 12, 24 en 26 perioden per jaar, ongeacht het aantal weken per jaar dat je invult.",
      "Week-, dag- en uurloon worden omgerekend met jouw weken per jaar, werkdagen per week en uren per week.",
      "Overuren, bonussen, provisies, secundaire arbeidsvoorwaarden en onbetaalde pauzes tellen niet mee, tenzij je ze bij het bedrag optelt.",
      "Het kiezen van een valuta verandert alleen het symbool en de weergave. Er wordt geen wisselkoers toegepast.",
      "Resultaten worden afgerond weergegeven. De berekeningen gebruiken de volledige precisie.",
    ],
    faqs: [
      {
        question: "Hoe reken ik mijn jaarsalaris om naar een uurloon?",
        answer:
          "Deel het jaarsalaris door het aantal betaalde uren in een jaar. Bij 40 uur per week gedurende 52 weken is dat 2.080 uur, dus een salaris van $50.000 komt neer op $50.000 ÷ 2.080 ≈ $24,04 per uur.",
      },
      {
        question: "Waarom wordt loon per twee weken vermenigvuldigd met 26 en niet met 2 × weken per jaar?",
        answer:
          "Bij betaling om de twee weken krijg je in een normaal jaar 26 betalingen. Maand-, halfmaand- en tweewekelijks loon liggen meestal vast per loonstrook, dus die worden omgerekend met een aantal kalenderperioden en niet met de betaalde weken die je invult.",
      },
      {
        question: "Wat is het verschil tussen per halve maand en per twee weken?",
        answer:
          "Loon per halve maand krijg je twee keer per maand, met 24 loonstroken per jaar. Loon per twee weken krijg je elke 14 dagen, met 26 loonstroken per jaar. Bij hetzelfde jaarsalaris is elke tweewekelijkse loonstrook lager dan een halfmaandelijkse.",
      },
      {
        question: "Is het uurloon mijn nettoloon?",
        answer:
          "Nee. Het resultaat is brutoloon vóór belastingen en inhoudingen. Je nettoloon hangt af van je fiscale situatie, je arbeidsvoorwaarden en de inhoudingen, en die schat deze calculator niet.",
      },
      {
        question: "Moet ik 52 weken per jaar gebruiken?",
        answer:
          "Gebruik 52 als je elke week van het jaar betaald krijgt, inclusief betaalde vakantie en feestdagen. Worden sommige weken niet betaald, vul dan alleen de betaalde weken in. Een kalenderjaar heeft ongeveer 52,14 weken; die waarde kun je ook invullen.",
      },
      {
        question: "Rekent het wijzigen van de valuta het bedrag om?",
        answer: "Nee. De valuta verandert alleen de weergave van de getallen. Vul de bedragen in de valuta in waarin je wordt betaald.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Brutoloon",
    amountHelp: "Loon vóór belastingen en inhoudingen.",
    period: "Betaalperiode",
    periodHelp: "Hoe vaak je het bedrag hierboven ontvangt.",
    primary: "Equivalent per uur",
    caption: "Brutoloon per uur, omgerekend vanuit de betaalperiode: {period}.",
    annual: "Brutojaarloon",
    annualHours: "Betaalde uren per jaar",
  },
};

export default nl;
