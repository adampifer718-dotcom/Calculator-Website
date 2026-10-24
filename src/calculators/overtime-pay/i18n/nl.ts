import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const nl: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Overurencalculator",
    shortTitle: "Overuren",
    summary: "Bereken het brutoloon van een week met overuren, inclusief anderhalf keer het uurloon, een eventueel deel tegen dubbel tarief en het effectieve uurloon.",
    metaTitle: "Overurencalculator – overuren tegen 150% en 200%",
    metaDescription:
      "Bereken je bruto weekloon met overuren: gewoon loon tot 40 uur of je eigen grens, 150% voor overuren, eventueel 200% en het effectieve uurloon.",
    keywords: ["overuren berekenen", "overwerk uitbetaling", "overwerktoeslag", "150 procent", "dubbel tarief", "weekloon", "FLSA overuren", "40 uur"],
    intro: [
      "Overwerkloon beloont uren boven een normale werkweek met een hoger tarief. Volgens de Amerikaanse federale Fair Labor Standards Act moeten werknemers die eronder vallen en niet zijn vrijgesteld, minstens anderhalf keer hun gewone uurloon krijgen voor elk uur boven 40 in een werkweek.",
      "Deze calculator splitst een week in gewone uren en overuren, past je overwerkfactor toe en kan een deel van de overuren tegen dubbel tarief uitbetalen als je werkgever of contract daarin voorziet. Pas de grens of de factoren aan zodat ze passen bij de regels die voor jou gelden.",
    ],
    howToUse: [
      "Kies de valuta en vul je gewone uurloon in.",
      "Vul alle uren in die je in de week hebt gewerkt.",
      "Laat de grens op 40 uur en de factor op 1,5 staan voor de Amerikaanse federale regel, of pas ze aan aan je contract of de lokale wetgeving.",
      "Vul in hoeveel overuren tegen dubbel tarief worden betaald, als dat zo is. Ze tellen mee binnen de overuren.",
      "Lees het totale brutoloon af, de verdeling tussen gewoon loon en overwerkloon, en het effectieve uurloon.",
    ],
    formulas: [
      {
        title: "Gewone uren en overuren",
        expression: "gewoon = min(H, T); overuren = max(0, H − T)",
        explanation: "H is het aantal gewerkte uren in de week en T de grens voor gewone uren.",
      },
      {
        title: "Brutoloon",
        expression: "loon = gewoon × r + (overuren − D) × r × m + D × r × d",
        explanation: "r is het uurloon, m de overwerkfactor, D het aantal uren tegen dubbel tarief en d de factor voor dubbel tarief.",
      },
      {
        title: "Effectief uurloon",
        expression: "effectief = loon ÷ H",
        explanation: "Het gemiddelde bedrag per gewerkt uur, inclusief de overwerktoeslag.",
      },
    ],
    examples: [
      {
        title: "46 uur tegen $22 per uur",
        steps: ["Gewoon loon = 40 × $22 = $880", "Overuren = 6 u × $22 × 1,5 = $198", "Totaal = $880 + $198 = $1.078"],
      },
      {
        title: "52 uur tegen $18,50 met 4 uur dubbel tarief",
        steps: [
          "Gewoon loon = 40 × $18,50 = $740",
          "Overuren = 12, waarvan 8 tegen anderhalf keer: 8 × $27,75 = $222",
          "Dubbel tarief = 4 × $37 = $148",
          "Totaal = $740 + $222 + $148 = $1.110, ongeveer $21,35 per gewerkt uur",
        ],
      },
      {
        title: "Contract van 37,5 uur met overuren tegen 1,25×",
        steps: ["Gewoon loon = 37,5 × £16 = £600", "Overuren = 6,5 u × £16 × 1,25 = £130", "Totaal = £730"],
      },
    ],
    assumptions: [
      "Dit is een schatting van het brutoloon, vóór loonheffing, sociale premies, voorzieningen en andere inhoudingen. Het is geen juridisch of fiscaal advies en is niet professioneel gecontroleerd.",
      "Regels voor overwerk verschillen per land, staat en contract. Op sommige plaatsen gelden overuren na een vast aantal uren per dag, of dubbel tarief na langere diensten; deze tool past alleen een weekgrens toe en de uren tegen dubbel tarief die je invult.",
      "Volgens de Amerikaanse federale regel kan het gewone uurloon ook bonussen, provisies en ploegentoeslagen omvatten. Hier is het gewone uurloon het uurbedrag dat je invult.",
      "Vrijgestelde werknemers, zoals veel managers en professionals in loondienst met een vast salaris, hebben mogelijk helemaal geen recht op overwerkloon.",
    ],
    faqs: [
      {
        question: "Wat betekent anderhalf keer het uurloon?",
        answer: "Elk overuur wordt betaald tegen 1,5 keer het gewone uurloon. Bij $20 per uur levert een overuur $30 op, dus de toeslag is $10 bovenop het gewone loon.",
      },
      {
        question: "Mag mijn werkgever uren middelen over twee weken?",
        answer: "Volgens de Amerikaanse federale regel niet. Elke werkweek is een vaste periode van 168 uur die op zichzelf staat, dus 50 uur in de ene week en 30 in de volgende betekent nog steeds 10 overuren in de eerste week.",
      },
      {
        question: "Worden uren tegen dubbel tarief bij de overuren opgeteld?",
        answer: "Nee. In deze calculator zijn de uren tegen dubbel tarief een deel van de overuren. Als je 12 overuren hebt gewerkt en 4 daarvan tegen dubbel tarief, worden de andere 8 betaald tegen de overwerkfactor.",
      },
    ],
    sourcesUsedFor: [
      "De Amerikaanse federale regel: werknemers die eronder vallen en niet zijn vrijgesteld, krijgen voor uren boven 40 in een werkweek minstens anderhalf keer het gewone uurloon.",
      "De werkweek als vaste periode van 168 uur, het verbod op het middelen van uren over meerdere weken, en hoe het gewone uurloon wordt bepaald.",
    ],
  },
  text: {
    rate: "Gewoon uurloon",
    rateHelp: "Het normale tarief voor één uur werk, vóór een eventuele overwerktoeslag.",
    hours: "Totaal gewerkte uren in de week",
    threshold: "Grens voor gewone uren",
    thresholdHelp: "Uren die tegen het gewone tarief worden betaald voordat overuren beginnen. Volgens de Amerikaanse federale regel is dat 40 uur per werkweek.",
    multiplier: "Overwerkfactor",
    multiplierHelp: "1,5 is anderhalf keer het uurloon (150%).",
    doubleHours: "Uren tegen dubbel tarief (optioneel)",
    doubleHoursHelp: "Uren die tegen het hogere dubbele tarief worden betaald. Ze maken deel uit van de overuren en komen er niet bovenop. Laat leeg of vul 0 in als er geen zijn.",
    doubleMultiplier: "Factor voor dubbel tarief",
    errors: {
      doubleExceeds: "Het aantal uren tegen dubbel tarief kan niet groter zijn dan het aantal overuren ({overtime} u).",
    },
    grossPay: "Totaal brutoloon",
    caption: "{hours} u tegen {rate} per uur, met overuren na {threshold} u tegen {multiplier}× het gewone uurloon.",
    regularPay: "Gewoon loon",
    overtimePay: "Overwerkloon",
    doublePay: "Loon tegen dubbel tarief",
    regularHours: "Gewone uren",
    overtimeHours: "Overuren (inclusief dubbel tarief)",
    overtimeRate: "Uurloon voor overuren",
    doubleRate: "Uurloon tegen dubbel tarief",
    effectiveRate: "Effectief uurloon",
    notes: {
      noOvertime: "De gewerkte uren komen niet boven de grens, dus er zijn geen overuren verschuldigd.",
      gross: "De bedragen zijn brutoloon, vóór belastingen en inhoudingen.",
      rules: "Regels voor overwerk hangen af van het land, de staat en de arbeidsovereenkomst; op sommige plaatsen gelden ook overuren per dag.",
    },
  },
};

export default nl;
