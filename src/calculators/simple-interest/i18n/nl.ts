import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const nl: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Enkelvoudige-rentecalculator",
    shortTitle: "Enkelvoudige rente",
    summary: "Bereken de enkelvoudige rente en het totale bedrag dat je verschuldigd bent of ontvangt, op basis van hoofdsom, jaarrente en looptijd.",
    metaTitle: "Enkelvoudige rente berekenen – I = Prt",
    metaDescription:
      "Bereken enkelvoudige rente met I = Prt voor een looptijd in jaren, maanden of dagen, en zie het totaalbedrag, de rente per jaar en de rente per maand.",
    keywords: ["enkelvoudige rente", "I = Prt", "renteformule", "hoofdsom", "rentepercentage", "rente berekenen", "totaalbedrag"],
    intro: [
      "Enkelvoudige rente wordt alleen over het oorspronkelijke bedrag berekend. De rente is elk jaar even hoog, dus het totaal groeit in een rechte lijn in plaats van als een sneeuwbal.",
      "Ze wordt gebruikt bij veel kortlopende leningen, sommige autoleningen, obligaties met een vaste coupon en rekenopgaven op school. Vul de hoofdsom in, het jaarlijkse rentepercentage en hoe lang het geld wordt geleend of belegd.",
    ],
    howToUse: [
      "Kies de valuta waarin je de bedragen wilt zien.",
      "Vul de hoofdsom in: het geleende of ingelegde bedrag.",
      "Vul het jaarlijkse rentepercentage in.",
      "Vul de looptijd in en kies jaren, maanden of dagen.",
      "Lees de rente af, het totaalbedrag en de rente per jaar en per maand.",
    ],
    formulas: [
      {
        title: "Enkelvoudige rente",
        expression: "I = P × r × t",
        explanation: "P is de hoofdsom, r de jaarrente als decimaal getal (5% = 0,05) en t de looptijd in jaren.",
      },
      { title: "Totaalbedrag", expression: "A = P + I = P × (1 + r × t)", explanation: "Wat je aan het eind terugbetaalt of in bezit hebt." },
      {
        title: "Tijd omrekenen",
        expression: "t = maanden ÷ 12, of t = dagen ÷ 365",
        explanation: "Maanden en dagen worden eerst omgerekend naar jaren voordat de formule wordt toegepast.",
      },
    ],
    examples: [
      { title: "$2.500 tegen 4,2% gedurende 3 jaar", steps: ["I = 2.500 × 0,042 × 3", "= $315", "A = 2.500 + 315 = $2.815"] },
      { title: "$8.000 tegen 6,5% gedurende 18 maanden", steps: ["t = 18 ÷ 12 = 1,5 jaar", "I = 8.000 × 0,065 × 1,5", "= $780"] },
      { title: "$1.200 tegen 9% gedurende 90 dagen", steps: ["t = 90 ÷ 365 ≈ 0,2466 jaar", "I = 1.200 × 0,09 × 90 ÷ 365", "≈ $26,63"] },
    ],
    assumptions: [
      "De rente is enkelvoudig: ze wordt nooit bij de hoofdsom opgeteld, dus er wordt geen rente op rente opgebouwd.",
      "Dagen worden omgerekend met een jaar van 365 dagen. Sommige geldverstrekkers en geldmarkten rekenen met een jaar van 360 dagen, wat bij hetzelfde aantal dagen iets meer rente oplevert.",
      "Het rentepercentage staat vast voor de hele periode. Kosten, belastingen en vervroegd aflossen zijn niet meegenomen.",
      "De gekozen valuta verandert alleen de opmaak. Dit is geen financieel advies.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen enkelvoudige rente en rente op rente?",
        answer: "Enkelvoudige rente wordt altijd over de beginhoofdsom berekend. Bij samengestelde rente wordt de rente van elke periode bij het saldo opgeteld, zodat je later ook rente krijgt over eerder ontvangen rente en het totaal sneller groeit.",
      },
      {
        question: "Hoe vind ik het rentepercentage als ik de rente ken?",
        answer: "Herschrijf de formule: r = I ÷ (P × t). Bijvoorbeeld $90 rente op $1.000 over 2 jaar betekent r = 90 ÷ 2.000 = 0,045, oftewel 4,5% per jaar.",
      },
      {
        question: "Waarom wijkt het bedrag van mijn geldverstrekker voor een aantal dagen iets af?",
        answer: "Geldverstrekkers delen soms door 360 in plaats van 365, of tellen de werkelijke dagen in een schrikkeljaar. Delen door 360 verhoogt de rente met ongeveer 1,4%.",
      },
    ],
    sourcesUsedFor: ["De formule voor enkelvoudige rente I = Prt en de betekenis van elke variabele."],
  },
  text: {
    principal: "Hoofdsom",
    principalHelp: "Het geleende of ingelegde bedrag.",
    rate: "Jaarlijks rentepercentage",
    time: "Looptijd",
    timeUnit: "Tijdseenheid",
    timeUnits: { years: "Jaren", months: "Maanden", days: "Dagen" },
    tooLong: "Gebruik een looptijd van hoogstens 100 jaar.",
    interest: "Enkelvoudige rente",
    caption: "Rente over {principal} tegen {rate} per jaar, zonder rente op rente.",
    total: "Totaalbedrag (hoofdsom + rente)",
    perYear: "Rente per jaar",
    perMonth: "Rente per maand",
    timeInYears: "Looptijd in jaren",
    notes: {
      simple: "Enkelvoudige rente wordt alleen over de hoofdsom berekend; rente levert zelf geen rente op.",
      days: "Dagen worden omgerekend met een jaar van 365 dagen. Sommige geldverstrekkers rekenen met 360 dagen, wat iets meer rente oplevert.",
    },
  },
};

export default nl;
