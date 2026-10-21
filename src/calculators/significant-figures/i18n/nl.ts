import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

const nl: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Significante-cijferscalculator",
    shortTitle: "Significante cijfers",
    summary: "Tel de significante cijfers in een getal of rond een getal af op een gekozen aantal significante cijfers.",
    metaTitle: "Significante cijfers tellen en afronden",
    metaDescription:
      "Tel de significante cijfers in elk getal, ook bij decimalen en E-notatie, of rond af op een gekozen aantal significante cijfers met de wetenschappelijke notatie erbij.",
    keywords: ["significante cijfers", "significante cijfers tellen", "afronden", "nauwkeurigheid", "scheikunde", "natuurkunde", "meetwaarden"],
    intro: [
      "Significante cijfers laten zien hoe nauwkeurig een getal bekend is. Deze calculator telt ze volgens de standaardregels, of rondt een getal af op de nauwkeurigheid die je kiest.",
      "Typ het getal precies zoals het geschreven staat, want nullen aan het eind en een decimaalteken veranderen de telling.",
    ],
    howToUse: [
      "Kies of je wilt tellen of afronden.",
      "Typ het getal precies zoals het geschreven staat, inclusief eventuele nullen aan het eind.",
      "Vul bij afronden in hoeveel significante cijfers je wilt houden.",
    ],
    formulas: [
      {
        title: "Telregels",
        expression:
          "1. Cijfers die geen nul zijn, zijn significant.\n2. Nullen tussen andere cijfers zijn significant.\n3. Nullen vooraan zijn nooit significant.\n4. Nullen achteraan zijn alleen significant als er een decimaalteken staat.",
        explanation: "Dit zijn de regels die in de meeste scheikunde- en natuurkundelessen worden onderwezen.",
      },
      {
        title: "Afronden",
        expression: "Houd n cijfers vanaf het eerste cijfer dat geen nul is en rond het laatste af.",
        explanation: "Wetenschappelijke notatie neemt elke onduidelijkheid over nullen achteraan weg.",
      },
    ],
    examples: [
      {
        title: "Hoeveel significante cijfers heeft 0,004050?",
        steps: ["De nullen vooraan (0,00) tellen niet mee", "4, 0 en de 5 en 0 aan het eind tellen wel: 4 significante cijfers"],
      },
      {
        title: "Rond 123.456 af op 3 significante cijfers",
        steps: ["Houd 1, 2, 3; het volgende cijfer is 4, dus rond naar beneden af", "123.000, oftewel 1,23 × 10⁵"],
      },
    ],
    assumptions: [
      "Nullen achteraan in een geheel getal zonder decimaalteken gelden als niet significant.",
      "Getallen worden verwerkt met maximaal 15 significante cijfers.",
    ],
    faqs: [
      {
        question: "Zijn nullen aan het eind significant?",
        answer: "Alleen als het getal een decimaalteken heeft. 2,50 heeft 3 significante cijfers, maar 250 heeft er 2, tenzij je 250, (met komma) of 2,50 × 10² schrijft.",
      },
      {
        question: "Zijn nullen vooraan significant?",
        answer: "Nee. In 0,0071 bepalen de nullen alleen de plaats van de komma, dus het getal heeft 2 significante cijfers.",
      },
      {
        question: "Waarom wetenschappelijke notatie gebruiken?",
        answer: "Die laat precies zien welke cijfers significant zijn: 1,20 × 10³ heeft er duidelijk 3.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Taak",
    tasks: { count: "Significante cijfers tellen", round: "Afronden op significante cijfers" },
    number: "Getal",
    numberHelp:
      "Typ het getal precies zoals het geschreven staat, inclusief nullen aan het eind. Een decimale komma (0,004050) en een decimale punt (0.004050) kunnen allebei; duizendtalpunten zoals in 1.200 worden gelezen als 1200. E-notatie zoals 6,02e23 is toegestaan.",
    invalid: "Vul een getal in zoals 1200, 0,0045 of 6,02e23.",
    zero: "Vul een getal in dat niet nul is.",
    tooLarge: "Vul een kleiner getal in.",
    digits: "Aantal significante cijfers dat je houdt",
    rounded: "Afgerond op {digits} significante cijfers",
    scientific: "Wetenschappelijke notatie",
    originalCount: "Significante cijfers in het origineel",
    roundNote: "Nullen aan het eind van een geheel getal zoals 123.000 zijn dubbelzinnig; de wetenschappelijke notatie laat precies zien welke cijfers significant zijn.",
    count: "Significante cijfers",
    countCaption: "{number} heeft {count} significante cijfers.",
    countCaptionOne: "{number} heeft 1 significant cijfer.",
    inScientific: "In wetenschappelijke notatie",
    countNote: "Nullen aan het eind van een geheel getal zonder decimaalteken (zoals 1200) gelden als niet significant. Schrijf 1200, (met komma) om ze significant te maken.",
  },
};

export default nl;
