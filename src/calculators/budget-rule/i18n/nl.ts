import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const nl: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "50/30/20-budgetcalculator",
    shortTitle: "50/30/20-budget",
    summary: "Verdeel je maandelijkse netto-inkomen over noodzakelijke uitgaven, wensen en sparen met de 50/30/20-regel of een andere eenvoudige verdeling.",
    metaTitle: "50/30/20-budgetcalculator – Vaste lasten, wensen, sparen",
    metaDescription:
      "Verdeel je netto-inkomen met de budgetregel 50/30/20, 70/20/10 of 80/20, of met je eigen verdeling, en zie elk potje per maand en per jaar.",
    keywords: ["50/30/20-regel", "budgetcalculator", "vaste lasten wensen sparen", "70/20/10-budget", "80/20-budget", "maandbudget", "netto-inkomen"],
    intro: [
      "Een percentageregel is een snelle manier om met een budget te beginnen zonder tientallen categorieën bij te houden. De bekendste is 50/30/20: de helft van je netto-inkomen voor noodzakelijke uitgaven, 30% voor wensen en 20% voor sparen en het aflossen van schulden.",
      "Vul je maandelijkse inkomen na belasting in en kies een regel, of stel zelf drie percentages in. De calculator laat zien hoeveel er elke maand en over een jaar in elk potje gaat.",
    ],
    howToUse: [
      "Kies de valuta voor de bedragen.",
      "Vul je maandelijkse netto-inkomen in: wat er na belasting op je bankrekening binnenkomt.",
      "Kies een budgetregel, of kies Eigen verdeling en vul drie percentages in die samen 100% zijn.",
      "Lees het bedrag voor elk potje per maand en per jaar af.",
    ],
    formulas: [
      { title: "Bedrag per potje", expression: "potje = inkomen × aandeel ÷ 100", explanation: "Bij de 50/30/20-regel zijn de aandelen 50% voor noodzakelijke uitgaven, 30% voor wensen en 20% voor sparen." },
      { title: "Jaarbedrag", expression: "per jaar = per maand × 12", explanation: "Elk maandbedrag over twaalf maanden." },
      { title: "Eigen verdeling", expression: "noodzakelijk % + wensen % + sparen % = 100%", explanation: "Je eigen aandelen moeten het hele inkomen dekken, niet meer en niet minder." },
    ],
    examples: [
      {
        title: "$3.850 per maand met de 50/30/20-regel",
        steps: ["Noodzakelijk = 3.850 × 50% = $1.925", "Wensen = 3.850 × 30% = $1.155", "Sparen = 3.850 × 20% = $770"],
      },
      {
        title: "$5.200 per maand met de 70/20/10-regel",
        steps: ["Uitgaven = 5.200 × 70% = $3.640", "Sparen = 5.200 × 20% = $1.040", "Schulden aflossen of geven = 5.200 × 10% = $520"],
      },
      {
        title: "$2.900 per maand met een eigen verdeling van 55/25/20",
        steps: ["55 + 25 + 20 = 100%", "Noodzakelijk = 2.900 × 55% = $1.595", "Wensen = $725; sparen = $580"],
      },
    ],
    assumptions: [
      "Deze verdelingen zijn vuistregels, geen financieel advies. Ze houden geen rekening met je schulden, je woonplaats of je doelen.",
      "Inkomen betekent netto-inkomen na belasting en inhoudingen op je loon. Wordt pensioensparen al van je loon ingehouden, dan mag je dat meetellen in het spaarpotje.",
      "De 50/30/20-verdeling wordt meestal toegeschreven aan het boek All Your Worth (2005) van Elizabeth Warren en Amelia Warren Tyagi. De verdelingen 70/20/10 en 80/20 zijn informele varianten zonder één bron.",
      "Minimale aflossingen op schulden tellen meestal als noodzakelijke uitgaven; alles wat je boven het minimum betaalt, hoort bij sparen en aflossen.",
    ],
    faqs: [
      {
        question: "Wat telt als noodzakelijke uitgave?",
        answer: "Noodzakelijke uitgaven zijn rekeningen die je moeilijk kunt stoppen: huur of hypotheek, energie en water, basisboodschappen, verzekeringen, vervoer naar je werk en minimale aflossingen. Uit eten gaan, streamingdiensten, reizen en hobby's zijn wensen.",
      },
      {
        question: "Wat als mijn noodzakelijke uitgaven meer dan 50% zijn?",
        answer: "Dat komt vaak voor waar wonen duur is. Gebruik een eigen verdeling die je echte kosten weergeeft en zoek manieren om je vaste lasten op termijn te verlagen of je inkomen te verhogen. De regel is een streefdoel, geen examen waarvoor je slaagt of zakt.",
      },
      {
        question: "Gebruik ik bruto- of netto-inkomen?",
        answer: "Gebruik het netto-inkomen, het bedrag dat je na belasting overhoudt. De regel is bedoeld voor het geld dat je elke maand echt kunt uitgeven en sparen.",
      },
    ],
    sourcesUsedFor: [
      "Wat een budget is en waarom je inkomen afzet tegen uitgeven en sparen.",
      "De oorsprong van de 50/30/20-regel in het boek All Your Worth van Elizabeth Warren en Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Maandelijks netto-inkomen",
    incomeHelp: "Je loon na inkomstenbelasting en andere inhoudingen, voor één maand.",
    rule: "Budgetregel",
    rules: {
      "50-30-20": "50/30/20 (noodzakelijk, wensen, sparen)",
      "70-20-10": "70/20/10 (uitgaven, sparen, schulden of geven)",
      "80-20": "80/20 (uitgaven, sparen)",
      custom: "Eigen verdeling",
    },
    needsPct: "Noodzakelijk",
    wantsPct: "Wensen",
    savingsPct: "Sparen en schulden aflossen",
    customHelp: "De drie percentages moeten samen 100% zijn.",
    sumError: "De drie percentages zijn samen {sum}. Pas ze aan zodat ze samen 100% zijn.",
    buckets: {
      needs: "Noodzakelijke uitgaven",
      wants: "Wensen",
      savings: "Sparen en extra aflossen",
      spending: "Dagelijkse uitgaven (noodzakelijk en wensen)",
      savingsOnly: "Sparen",
      extra: "Schulden aflossen of geven",
    },
    primaryCaption: "{percent} van {income} per maand voor dit potje volgens de {rule}-regel.",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "eigen" },
    yearlyIncome: "Jaarlijks netto-inkomen",
    tableCaption: "Maand- en jaarbedragen per potje",
    tableColumns: { bucket: "Potje", share: "Aandeel", monthly: "Per maand", yearly: "Per jaar" },
    notes: {
      thumb: "Budgetregels zijn ruwe vertrekpunten, geen advies. Pas de verdeling aan je eigen kosten en doelen aan.",
      needs: "Noodzakelijke uitgaven zijn kosten die je moet betalen, zoals wonen, energie, boodschappen, verzekeringen en minimale aflossingen. Wensen zijn alles waarop je zou kunnen bezuinigen.",
    },
  },
};

export default nl;
