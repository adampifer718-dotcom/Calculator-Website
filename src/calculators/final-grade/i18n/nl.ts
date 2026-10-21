import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const nl: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Eindexamencijfercalculator",
    shortTitle: "Benodigd examencijfer",
    summary: "Bereken welke score je op je eindexamen nodig hebt om het eindcijfer voor het vak te halen dat je wilt.",
    metaTitle: "Eindexamencijfercalculator – benodigde score op het examen",
    metaDescription:
      "Bereken wat je op het eindexamen moet halen voor een gewenst eindcijfer, op basis van je huidige cijfer en hoe zwaar het examen meetelt.",
    keywords: ["eindcijfer", "eindexamen", "wat moet ik halen", "benodigd cijfer", "vakcijfer", "gewogen cijfer", "examenscore"],
    intro: [
      "Tegen het einde van een vak is de grote vraag vaak wat je op het eindexamen nodig hebt. Je eindcijfer is een gewogen gemiddelde: je huidige cijfer telt voor een deel mee en het eindexamen voor de rest.",
      "Vul je cijfer tot nu toe in, hoe zwaar het examen meetelt en het eindcijfer waar je op mikt. De calculator geeft de examenscore die je daarvoor nodig hebt en laat zien wat je hoogst en laagst mogelijke eindcijfer is.",
    ],
    howToUse: [
      "Vul je huidige cijfer voor het vak in als percentage.",
      "Vul de weging van het eindexamen in zoals die in je studiewijzer staat.",
      "Vul het eindcijfer in waarmee je wilt afsluiten.",
      "Lees de score af die je op het examen nodig hebt, en je eindcijfer bij een perfecte score of bij een score van nul.",
    ],
    formulas: [
      {
        title: "Benodigde score op het examen",
        expression: "nodig = (gewenst − huidig × (1 − w)) ÷ w",
        explanation: "w is de weging van het examen als fractie (30% = 0,3). Cijfers zijn percentages.",
      },
      {
        title: "Eindcijfer",
        expression: "eindcijfer = huidig × (1 − w) + examen × w",
        explanation: "Het vakcijfer als gewogen gemiddelde van wat je nu hebt en het eindexamen.",
      },
    ],
    examples: [
      {
        title: "Nu 78%, examen telt 25%, doel 80%",
        steps: ["w = 0,25, dus het huidige cijfer telt voor 0,75", "nodig = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86%"],
      },
      {
        title: "Nu 91%, examen telt 40%, doel 90%",
        steps: ["nodig = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5%"],
      },
      {
        title: "Nu 65%, examen telt 20%, doel 75%",
        steps: ["nodig = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115%", "Meer dan 100%, dus voor dit doel heb je extra punten nodig"],
      },
    ],
    assumptions: [
      "Je huidige cijfer omvat al alle andere onderdelen van het vak, en die tellen samen voor 100% min de weging van het examen.",
      "Cijfers zijn percentages. Grenzen voor lettercijfers, afronding en normering verschillen per docent en worden niet toegepast.",
      "Bij sommige vakken vervalt het laagste cijfer, kan het eindexamen een tussentoets vervangen of geldt een minimumscore voor het examen. Kijk in je studiewijzer of zulke regels gelden.",
    ],
    faqs: [
      {
        question: "Hoe kom ik achter mijn huidige cijfer?",
        answer:
          "Meestal staat het in de elektronische leeromgeving of kan je docent het je vertellen. Zo niet, neem dan het gewogen gemiddelde van al je cijfers tot nu toe, met de wegingen uit de studiewijzer en zonder het eindexamen.",
      },
      {
        question: "Wat betekent het als ik meer dan 100% nodig heb?",
        answer:
          "Zelfs met een perfecte score op het examen haal je het gewenste eindcijfer dan niet. Met extra punten lukt het misschien nog, maar kies anders een lager doel.",
      },
      {
        question: "En als de uitkomst 0% of minder is?",
        answer:
          "Dan heb je je doel al binnen: zelfs zonder punten op het examen blijft je eindcijfer op of boven het doel. Controleer wel of je het examen mag overslaan, want bij sommige vakken is deelname verplicht.",
      },
    ],
    sourcesUsedFor: ["Hoe een vakcijfer een gewogen gemiddelde is van de onderdelen in de studiewijzer, inclusief het eindexamen."],
  },
  text: {
    current: "Huidig cijfer",
    currentHelp: "Je cijfer voor het vak tot nu toe, vóór het eindexamen.",
    weight: "Weging van het eindexamen",
    weightHelp: "Hoeveel het examen meetelt in het eindcijfer, als percentage. Kijk in je studiewijzer.",
    desired: "Gewenst eindcijfer",
    weightTooHigh: "Het examen moet minder dan 100% van het cijfer bepalen; anders telt je huidige cijfer niet mee.",
    needed: "Benodigde score op het examen",
    caption: "Om af te sluiten met {desired} als het examen {weight} meetelt en je nu {current} hebt.",
    ifFull: "Eindcijfer als je 100% haalt op het examen",
    ifZero: "Eindcijfer als je 0% haalt op het examen",
    currentShare: "Aandeel van het huidige cijfer in het eindcijfer",
    notes: {
      over: "Je zou meer dan 100% op het examen moeten halen. Dat kan alleen met extra punten; anders is dit doel onhaalbaar.",
      secured: "Dit cijfer heb je al binnen: zelfs met 0% op het examen blijf je op of boven je doel.",
      rounding: "Docenten kunnen cijfers afronden of normeren, of het examen anders wegen. Kijk in je studiewijzer.",
    },
  },
};

export default nl;
