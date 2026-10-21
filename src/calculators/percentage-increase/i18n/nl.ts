import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const nl: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Procentuele-stijgingcalculator",
    shortTitle: "Procentuele stijging",
    summary: "Bereken de procentuele stijging of daling tussen een oorspronkelijke en een nieuwe waarde.",
    metaTitle: "Procentuele stijging berekenen – Verandering in procenten",
    metaDescription:
      "Bereken de procentuele stijging of daling tussen twee getallen. Zie de procentuele en absolute verandering en de formule, met uitgewerkte voorbeelden.",
    keywords: ["procentuele verandering", "procentuele stijging", "procentuele daling", "stijging in procenten berekenen", "groeipercentage", "procentueel verschil"],
    intro: [
      "Vul een oorspronkelijke en een nieuwe waarde in om te zien hoeveel die in procenten is veranderd. Een positief resultaat is een stijging, een negatief resultaat een daling.",
      "Dit wordt vaak gebruikt voor loonsverhogingen, prijswijzigingen, omzetgroei en betere toetscijfers.",
    ],
    howToUse: [
      "Vul de oorspronkelijke (begin)waarde in.",
      "Vul de nieuwe waarde in.",
      "Lees de procentuele verandering af, de absolute verandering en de nieuwe waarde als percentage van de oorspronkelijke.",
    ],
    formulas: [
      {
        title: "Procentuele verandering",
        expression: "Verandering % = (nieuwe waarde − oorspronkelijke waarde) ÷ |oorspronkelijke waarde| × 100",
        explanation:
          "De verandering wordt afgezet tegen de grootte van de oorspronkelijke waarde. Door de absolute waarde te gebruiken blijft het teken zinvol als de oorspronkelijke waarde negatief is.",
      },
      {
        title: "Absolute verandering",
        expression: "Verandering = nieuwe waarde − oorspronkelijke waarde",
        explanation: "Het verschil, in dezelfde eenheden als de invoer.",
      },
    ],
    examples: [
      {
        title: "Van 80 naar 100",
        steps: ["Verandering = 100 − 80 = 20", "20 ÷ 80 × 100 = stijging van 25%"],
      },
      {
        title: "Van 250 naar 200",
        steps: ["Verandering = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20%, een daling van 20%"],
      },
      {
        title: "Van −50 naar −25",
        steps: ["Verandering = −25 − (−50) = 25", "25 ÷ |−50| × 100 = stijging van 50%"],
      },
    ],
    assumptions: [
      "De oorspronkelijke waarde mag niet 0 zijn, omdat een verandering vanaf nul geen gedefinieerd percentage heeft.",
      "Is de oorspronkelijke waarde negatief, dan wordt de verandering gedeeld door de absolute waarde ervan.",
      "Resultaten worden afgerond weergegeven. De berekeningen gebruiken de volledige precisie.",
    ],
    faqs: [
      {
        question: "Hoe bereken je een procentuele stijging?",
        answer: "Trek de oorspronkelijke waarde af van de nieuwe waarde, deel de uitkomst door de oorspronkelijke waarde en vermenigvuldig met 100. Van 50 naar 65 is (65 − 50) ÷ 50 × 100 = 30%.",
      },
      {
        question: "Hoe bereken je een procentuele daling?",
        answer: "Met dezelfde formule. Een negatieve uitkomst is een daling. Van 120 naar 90 is (90 − 120) ÷ 120 × 100 = −25%.",
      },
      {
        question: "Kom je na een stijging van 50% en een daling van 50% weer uit op de beginwaarde?",
        answer: "Nee. 100 plus 50% is 150, en 150 min 50% is 75. Elke verandering wordt gemeten vanaf een andere beginwaarde.",
      },
      {
        question: "Wat als de oorspronkelijke waarde nul is?",
        answer: "Dan is de procentuele verandering niet gedefinieerd, omdat je niet door nul kunt delen. Geef in plaats daarvan de absolute verandering.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Oorspronkelijke waarde",
    originalHelp: "De beginwaarde. Die mag niet 0 zijn.",
    newValue: "Nieuwe waarde",
    newValueHelp: "De waarde na de verandering.",
    originalZero: "De oorspronkelijke waarde mag niet 0 zijn. Een verandering vanaf 0 heeft geen percentage.",
    primary: "Procentuele verandering",
    noChange: "De waarden zijn gelijk, dus er is geen verandering.",
    increase: "Een stijging van {from} naar {to}.",
    decrease: "Een daling van {from} naar {to}.",
    absolute: "Absolute verandering",
    ratio: "Nieuwe waarde als % van de oorspronkelijke",
    formula: "Formule: ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "De oorspronkelijke waarde is negatief, dus de verandering wordt afgezet tegen de absolute waarde ervan.",
  },
};

export default nl;
