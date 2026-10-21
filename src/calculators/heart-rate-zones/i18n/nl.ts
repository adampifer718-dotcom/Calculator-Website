import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const nl: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Hartslagzonecalculator",
    shortTitle: "Hartslagzones",
    summary:
      "Schat je maximale hartslag op basis van je leeftijd en bekijk vijf trainingszones in slagen per minuut, als percentage van het maximum of met de Karvonen-methode.",
    metaTitle: "Hartslagzonecalculator – maximale hartslag en zones",
    metaDescription:
      "Schat je maximale hartslag met 220 − leeftijd of de Tanaka-formule en krijg vijf trainingszones in bpm, als percentage van het maximum of volgens Karvonen.",
    keywords: ["hartslagzones", "streefhartslag", "maximale hartslag", "Karvonen-formule", "trainingszones", "vetverbrandingszone", "hartslagreserve"],
    intro: [
      "Hartslagzones verdelen de inspanning tijdens het sporten in banden op basis van je maximale hartslag. Trainen in een bepaalde zone helpt je om rustige duurlopen, gelijkmatige ritten of zware intervallen te doseren zonder te gissen.",
      "Deze calculator schat je maximale hartslag op basis van je leeftijd, of gebruikt een maximum dat je hebt gemeten, en zet die om in vijf zones in slagen per minuut. Ook zie je de bereiken voor matige en zware inspanning die de American Heart Association aanbeveelt.",
    ],
    howToUse: [
      "Vul je leeftijd in en kies een formule voor de maximale hartslag.",
      "Ken je je echte maximum uit een inspanningstest, vul dat dan in; het vervangt de formule.",
      "Wil je de Karvonen-methode gebruiken, vul dan je rusthartslag in en kies Karvonen als zonemethode.",
      "Lees je geschatte maximum en het bpm-bereik van elke zone af in de tabel.",
    ],
    formulas: [
      { title: "Maximale hartslag (Fox)", expression: "HRmax = 220 − leeftijd", explanation: "De traditionele vuistregel." },
      {
        title: "Maximale hartslag (Tanaka)",
        expression: "HRmax = 208 − 0,7 × leeftijd",
        explanation: "Uit een analyse van 351 studies uit 2001; geeft voor oudere volwassenen hogere waarden dan 220 − leeftijd.",
      },
      {
        title: "Percentage van het maximum",
        expression: "doel = HRmax × intensiteit",
        explanation: "Elke zone beslaat 10 procentpunten, van 50–60% (zone 1) tot 90–100% (zone 5).",
      },
      {
        title: "Karvonen (hartslagreserve)",
        expression: "doel = HRrust + intensiteit × (HRmax − HRrust)",
        explanation: "De hartslagreserve is HRmax − HRrust. Deze methode geeft bij lage intensiteit hogere doelwaarden dan de methode met een percentage van het maximum.",
      },
    ],
    examples: [
      {
        title: "Leeftijd 40 met 220 − leeftijd",
        steps: ["HRmax = 220 − 40 = 180 bpm", "Zone 2 (60–70%) = 108–126 bpm", "AHA-bereik matig (50–70%) = 90–126 bpm; zwaar (70–85%) = 126–153 bpm"],
      },
      {
        title: "Leeftijd 55 met de Tanaka-formule",
        steps: [
          "HRmax = 208 − 0,7 × 55 = 169,5 bpm, weergegeven als 170 bpm",
          "Zone 3 (70–80%) = 118,65–135,6, afgerond 119–136 bpm",
          "220 − leeftijd zou 165 bpm geven, iets lager",
        ],
      },
      {
        title: "Leeftijd 30, rusthartslag 60 bpm, Karvonen",
        steps: [
          "HRmax = 220 − 30 = 190 bpm; hartslagreserve = 190 − 60 = 130 bpm",
          "Ondergrens zone 3 = 60 + 0,7 × 130 = 151 bpm; bovengrens = 60 + 0,8 × 130 = 164 bpm",
          "Zone 3 is dus 151–164 bpm",
        ],
      },
    ],
    assumptions: [
      "Deze uitkomsten zijn schattingen, geen medisch advies, en deze calculator is niet professioneel beoordeeld.",
      "Leeftijdsformules beschrijven gemiddelden van de bevolking. De echte maximale hartslag van een persoon kan 10 bpm of meer van de schatting afwijken, dus een gemeten maximum is nauwkeuriger.",
      "Medicijnen zoals bètablokkers, maar ook hitte, uitdroging, cafeïne en ziekte, beïnvloeden de hartslag. Zones op basis van een geschat maximum passen misschien niet bij jou.",
      "Heb je een hartaandoening, andere gezondheidsproblemen of klachten zoals pijn op de borst of duizeligheid, overleg dan met een arts voordat je zwaar gaat sporten.",
      "De zonenamen en de banden van 10 punten zijn een gangbare afspraak; coaches en apparaten gebruiken verschillende zonesystemen.",
    ],
    faqs: [
      {
        question: "Welke formule voor de maximale hartslag moet ik gebruiken?",
        answer:
          "220 − leeftijd is eenvoudig en wordt veel gebruikt. De Tanaka-formule, 208 − 0,7 × leeftijd, is afgeleid uit een veel grotere dataset en geeft hogere waarden voor oudere volwassenen. Geen van beide vervangt een maximum dat tijdens een begeleide inspanningstest is gemeten.",
      },
      {
        question: "Wat is de Karvonen-methode?",
        answer:
          "Die bepaalt de doelwaarden op basis van de hartslagreserve, het verschil tussen je maximale hartslag en je rusthartslag. Omdat je rusthartslag wordt meegenomen, past de methode vaak beter bij mensen met een lage rusthartslag dan een gewoon percentage van het maximum.",
      },
      {
        question: "Welke hartslag hoort bij matige inspanning?",
        answer:
          "De American Heart Association noemt ongeveer 50–70% van de maximale hartslag voor activiteit met matige intensiteit en ongeveer 70–85% voor zware activiteit. De calculator toont beide bereiken in slagen per minuut.",
      },
    ],
    sourcesUsedFor: [
      "De vergelijking 208 − 0,7 × leeftijd voor de maximale hartslag.",
      "Streefbereiken van ongeveer 50–70% van de maximale hartslag voor matige en ongeveer 70–85% voor zware activiteit, en de schatting 220 − leeftijd.",
    ],
  },
  text: {
    age: "Leeftijd",
    ageSuffix: "jaar",
    formula: "Formule voor maximale hartslag",
    formulas: { fox: "220 − leeftijd", tanaka: "208 − 0,7 × leeftijd (Tanaka)" },
    formulaHelp: "Beide formules schatten een gemiddelde voor mensen van jouw leeftijd. De versie van Tanaka geeft hogere waarden voor oudere volwassenen.",
    measuredMax: "Gemeten maximale hartslag",
    measuredMaxHelp: "Optioneel. Ken je je maximum uit een inspanningstest, vul het dan hier in; het vervangt de formule.",
    resting: "Rusthartslag",
    restingHelp: "Optioneel, maar nodig voor de Karvonen-methode. Tel je pols een volle minuut lang na het wakker worden, voordat je opstaat.",
    method: "Zonemethode",
    methods: { percentMax: "Percentage van de maximale hartslag", karvonen: "Karvonen (hartslagreserve)" },
    methodHelp: "Karvonen past de percentages toe op het verschil tussen je maximale hartslag en je rusthartslag en telt daarna de rusthartslag er weer bij op.",
    errors: {
      restingRequired: "Vul je rusthartslag in om de Karvonen-methode te gebruiken.",
      restingTooHigh: "De rusthartslag moet lager zijn dan de maximale hartslag ({max} bpm).",
    },
    maxHr: "Geschatte maximale hartslag",
    maxHrMeasured: "Maximale hartslag (gemeten)",
    captionFormula: "Geschat met {formula} voor leeftijd {age}.",
    captionMeasured: "Je gemeten maximum, gebruikt in plaats van een formule.",
    zonesCaption: "Hartslagzones voor training",
    zonesCaptionKarvonen: "Hartslagzones voor training (Karvonen)",
    columns: { zone: "Zone", intensity: "Intensiteit", heartRate: "Hartslag" },
    zoneNames: ["Zone 1 – zeer licht", "Zone 2 – licht", "Zone 3 – matig", "Zone 4 – zwaar", "Zone 5 – maximaal"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} bpm",
    ahaModerate: "AHA matige intensiteit ({range} van max.)",
    ahaVigorous: "AHA zware intensiteit ({range} van max.)",
    reserve: "Hartslagreserve",
    notes: {
      aha: "De American Heart Association adviseert ongeveer 50–70% van de maximale hartslag voor matige activiteit en ongeveer 70–85% voor zware activiteit. Deze bereiken worden weergegeven als percentage van de maximale hartslag.",
      restingIgnored: "De rusthartslag wordt alleen door de Karvonen-methode gebruikt.",
      estimate: "Formules geven gemiddelden van de bevolking; je echte maximum kan 10 bpm of meer afwijken. Medicijnen zoals bètablokkers verlagen de hartslag.",
      doctor: "Heb je een hartaandoening of andere gezondheidszorgen, overleg dan met een arts voordat je zwaar gaat sporten.",
    },
  },
};

export default nl;
