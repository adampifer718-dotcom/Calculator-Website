import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const nl: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Taille-heupverhoudingcalculator",
    shortTitle: "Taille-heupverhouding",
    summary: "Deel je tailleomtrek door je heupomtrek voor de taille-heupverhouding en vergelijk die met de WHO-grenswaarde voor vrouwen of mannen.",
    metaTitle: "Taille-heupverhouding berekenen – WHR en WHO-grens",
    metaDescription:
      "Bereken je taille-heupverhouding uit je taille- en heupomtrek in cm of inch, en zie hoe die zich verhoudt tot de WHO-grenswaarde voor vrouwen en mannen.",
    keywords: ["taille-heupverhouding", "WHR berekenen", "taille heup ratio", "tailleomtrek", "buikvet", "lichaamsvorm", "WHO taille-heupverhouding"],
    intro: [
      "De taille-heupverhouding (WHR, waist-to-hip ratio) vergelijkt de omvang van je taille met die van je heupen. Een hogere verhouding betekent dat meer van je lichaamsvet rond de buik zit, wat in onderzoek in verband is gebracht met een hoger risico op diabetes type 2 en hart- en vaatziekten.",
      "Vul beide maten in dezelfde eenheid in om je verhouding te krijgen. De calculator vergelijkt die daarna met de grenswaarde uit een expertconsultatie van de Wereldgezondheidsorganisatie (WHO): 0,90 voor mannen en 0,85 voor vrouwen.",
    ],
    howToUse: [
      "Kies centimeter of inch. Beide maten moeten dezelfde eenheid hebben.",
      "Meet je taille halverwege je onderste rib en de bovenkant van je heupbot, aan het eind van een normale uitademing.",
      "Meet je heupen rond het breedste deel van je billen, met het meetlint horizontaal en strak maar niet knellend.",
      "Kies vrouw of man om de grenswaarde te bepalen en lees je verhouding af.",
    ],
    formulas: [
      {
        title: "Taille-heupverhouding",
        expression: "WHR = tailleomtrek ÷ heupomtrek",
        explanation: "De eenheden vallen tegen elkaar weg, dus de verhouding is in centimeter en inch gelijk.",
      },
      {
        title: "WHO-grenswaarde",
        expression: "WHR ≥ 0,90 (mannen)   ·   WHR ≥ 0,85 (vrouwen)",
        explanation: "Bij of boven deze waarden beschrijft de WHO-expertconsultatie het risico op metabole complicaties als aanzienlijk verhoogd.",
      },
    ],
    examples: [
      {
        title: "Vrouw, taille 82 cm en heupen 100 cm",
        steps: ["WHR = 82 ÷ 100 = 0,82", "De WHO-grenswaarde voor vrouwen is 0,85", "0,82 ligt onder de grenswaarde"],
      },
      {
        title: "Man, taille 97 cm en heupen 101 cm",
        steps: ["WHR = 97 ÷ 101 ≈ 0,96", "De WHO-grenswaarde voor mannen is 0,90", "0,96 ligt op of boven de grenswaarde"],
      },
      {
        title: "Vrouw die in inch meet, taille 34 in en heupen 40 in",
        steps: ["WHR = 34 ÷ 40 = 0,85", "De grenswaarde voor vrouwen is 0,85 of meer", "De verhouding ligt precies op de grenswaarde"],
      },
    ],
    assumptions: [
      "Dit resultaat is een schatting, geen medisch advies of diagnose, en deze calculator is niet professioneel beoordeeld. Bespreek je gezondheidsrisico's met een zorgprofessional.",
      "De meetpunten volgen het WHO-protocol: de taille halverwege de onderrand van de onderste rib en de bovenkant van de bekkenkam, en de heupen op het breedste deel van de billen. Elders meten verandert de verhouding.",
      "De grenswaarden van 0,90 en 0,85 zijn algemene referentiepunten uit de WHO-expertconsultatie. Passende grenswaarden verschillen per bevolkingsgroep en etniciteit, en ze zijn niet bedoeld voor kinderen of tijdens de zwangerschap.",
      "De verhouding wordt op twee decimalen afgerond voordat ze met de grenswaarde wordt vergeleken.",
    ],
    faqs: [
      {
        question: "Waarom is de taille-heupverhouding belangrijk?",
        answer: "Het is een eenvoudige aanwijzing voor waar lichaamsvet wordt opgeslagen. Vet rond de buik hangt sterker samen met metabole problemen dan vet op de heupen en dijen, en de verhouding brengt dat verschil in beeld.",
      },
      {
        question: "Is de taille-heupverhouding beter dan de BMI?",
        answer: "Ze meten verschillende dingen. De BMI zet gewicht af tegen lengte, maar zegt niets over waar het vet zit, terwijl de taille-heupverhouding het totale gewicht negeert. Zorgprofessionals kijken vaak naar meerdere maten samen.",
      },
      {
        question: "Maakt het uit of ik centimeter of inch gebruik?",
        answer: "Nee. De verhouding heeft geen eenheid, dus je krijgt hoe dan ook hetzelfde resultaat, zolang beide maten dezelfde eenheid hebben.",
      },
    ],
    sourcesUsedFor: [
      "De grenswaarden voor de taille-heupverhouding van 0,90 voor mannen en 0,85 voor vrouwen voor een aanzienlijk verhoogd risico op metabole complicaties, en de meetpunten.",
    ],
  },
  text: {
    unit: "Eenheid",
    units: { cm: "Centimeter (cm)", in: "Inch (in)" },
    waist: "Tailleomtrek",
    waistHelp: "Meet halverwege de onderste rib en de bovenkant van het heupbot (bekkenkam), aan het eind van een normale uitademing.",
    hip: "Heupomtrek",
    hipHelp: "Meet rond het breedste deel van de billen, met het meetlint horizontaal.",
    sex: "Geslacht",
    sexHelp: "Wordt alleen gebruikt om de WHO-grenswaarde te kiezen, die voor vrouwen en mannen verschilt.",
    sexes: { female: "Vrouw", male: "Man" },
    errors: {
      implausible: "Een taille-heupverhouding van {ratio} valt buiten het bereik dat bij volwassenen voorkomt. Controleer of beide maten dezelfde eenheid hebben.",
    },
    ratio: "Taille-heupverhouding",
    caption: "Taille {waist} ÷ heup {hip}.",
    comparison: "Vergeleken met de WHO-grenswaarde",
    atOrAbove: "Op of boven de grenswaarde",
    below: "Onder de grenswaarde",
    cutoff: "WHO-grenswaarde voor {sex}",
    waistAtCutoff: "Tailleomtrek waarbij je de grenswaarde bereikt",
    notes: {
      above: "Een verhouding van {cutoff} of meer voor {sex} is het niveau dat de WHO-expertconsultatie in verband bracht met een aanzienlijk verhoogd risico op metabole complicaties. Het is een screeningsmarker, geen diagnose.",
      below: "De verhouding ligt onder de WHO-grenswaarde van {cutoff} voor {sex}. Ook andere factoren, zoals gewicht, beweging, bloeddruk en familiegeschiedenis, beïnvloeden het gezondheidsrisico.",
      rounding: "De verhouding wordt op twee decimalen afgerond voordat ze met de grenswaarde wordt vergeleken.",
      advice: "Dit is een schatting, geen medisch advies. Bespreek je resultaten met een zorgprofessional.",
    },
    sexNames: { female: "vrouwen", male: "mannen" },
  },
};

export default nl;
