import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const nl: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Taille-lengteverhoudingcalculator",
    shortTitle: "Taille-lengteverhouding",
    summary: "Deel je tailleomtrek door je lengte voor de taille-lengteverhouding, en zie in welke referentieband voor volwassenen van NICE die valt.",
    metaTitle: "Taille-lengteverhouding berekenen – WHtR en NICE-banden",
    metaDescription:
      "Bereken je taille-lengteverhouding in cm of inch, vergelijk die met de NICE-referentiebanden voor volwassenen en zie welke tailleomtrek gelijk is aan je halve lengte.",
    keywords: ["taille-lengteverhouding", "whtr", "taille lengte ratio", "buikvet meten", "tailleomtrek", "centrale adipositas", "taille minder dan halve lengte"],
    intro: [
      "De taille-lengteverhouding (WHtR) is je tailleomtrek gedeeld door je lengte. Het is een eenvoudige manier om te schatten hoeveel vet er rond het midden van het lichaam zit, centrale adipositas genoemd, wat in verband wordt gebracht met diabetes type 2, hoge bloeddruk en hart- en vaatziekten.",
      "In het Verenigd Koninkrijk raadt NICE volwassenen met een BMI onder 35 aan deze verhouding naast de BMI te gebruiken, met de eenvoudige boodschap je taille kleiner te houden dan de helft van je lengte. Deze calculator toont je verhouding, de NICE-referentieband waarin die valt en de tailleomtrek die bij een verhouding van 0,5 hoort.",
    ],
    howToUse: [
      "Kies centimeter of inch. Gebruik voor beide metingen dezelfde eenheid.",
      "Meet je taille halverwege je onderste rib en de bovenkant van je heupbeen, na normaal uitademen, met het meetlint horizontaal en strak aanliggend.",
      "Meet je lengte zonder schoenen.",
      "Lees je verhouding af, de referentieband en de tailleomtrek bij een verhouding van 0,5.",
    ],
    formulas: [
      { title: "Taille-lengteverhouding", expression: "WHtR = tailleomtrek ÷ lengte", explanation: "Beide in dezelfde eenheid, dus de eenheden vallen weg en de verhouding is in cm en inch gelijk." },
      { title: "NICE-referentiebanden voor volwassenen", expression: "0,4 tot 0,49: geen verhoogd gezondheidsrisico\n0,5 tot 0,59: verhoogd gezondheidsrisico\n0,6 of meer: hoog gezondheidsrisico", explanation: "Voor volwassenen met een BMI onder 35. Dit zijn referentiebanden, geen diagnose." },
      { title: "Taille bij je halve lengte", expression: "taille bij een verhouding van 0,5 = lengte ÷ 2", explanation: "De grens achter het advies om je taille onder de helft van je lengte te houden." },
    ],
    examples: [
      {
        title: "Taille 84 cm, lengte 172 cm",
        steps: ["WHtR = 84 ÷ 172 ≈ 0,49", "0,49 valt in de band 0,4 tot 0,49", "De halve lengte is 172 ÷ 2 = 86 cm, dus de taille zit er 2 cm onder"],
      },
      {
        title: "Taille 38 in, lengte 68 in",
        steps: ["WHtR = 38 ÷ 68 ≈ 0,56", "0,56 valt in de band 0,5 tot 0,59", "De halve lengte is 34 in, dus de taille zit er 4 in boven"],
      },
      {
        title: "Taille 104 cm, lengte 168 cm",
        steps: ["WHtR = 104 ÷ 168 ≈ 0,62", "0,62 valt in de band 0,6 of meer", "Een verhouding van 0,6 zou een taille van 168 × 0,6 = 100,8 cm zijn"],
      },
    ],
    assumptions: [
      "Het resultaat is een schatting, geen medisch advies of diagnose, en deze calculator is nog niet professioneel beoordeeld. Bespreek met een arts of verpleegkundige wat je metingen voor jou betekenen.",
      "De banden komen uit de NICE-richtlijn voor volwassenen met een BMI onder 35, ongeacht geslacht of etniciteit, en worden alleen ter referentie getoond. NICE gebruikt ze niet voor volwassenen met een BMI van 35 of meer, omdat hun verhouding vrijwel altijd hoog is.",
      "De calculator gebruikt de banden voor volwassenen. Hij is niet bedoeld voor kinderen en jongeren, of tijdens de zwangerschap, zonder medisch advies.",
      "Kleine verschillen in waar en hoe strak het meetlint zit, veranderen de verhouding, dus meet elke keer op dezelfde manier als je hem bijhoudt.",
    ],
    faqs: [
      { question: "Wat is een gezonde taille-lengteverhouding?", answer: "NICE beschrijft een verhouding van 0,4 tot 0,49 als geen verhoogd gezondheidsrisico voor volwassenen met een BMI onder 35. De eenvoudige regel is je taille kleiner te houden dan de helft van je lengte." },
      { question: "Hoe verschilt het van de BMI?", answer: "De BMI vergelijkt gewicht met lengte en kan niet zien waar vet wordt opgeslagen. De taille-lengteverhouding kijkt naar de taille, dus geeft vet rond het midden weer, dat sterker samenhangt met sommige gezondheidsrisico's. NICE raadt aan beide te gebruiken." },
      { question: "Hoe verhoudt het zich tot de taille-heupverhouding?", answer: "Beide kijken naar vet rond de taille. De taille-heupverhouding deelt door de heupomtrek en heeft verschillende grenswaarden voor vrouwen en mannen, terwijl de taille-lengteverhouding door de lengte deelt en voor iedereen dezelfde banden gebruikt." },
    ],
    sourcesUsedFor: [
      "De banden voor de taille-lengteverhouding bij volwassenen (0,4 tot 0,49, 0,5 tot 0,59, 0,6 of meer) en het gebruik ervan bij volwassenen met een BMI onder 35.",
      "De publieksboodschap om de taille onder de helft van de lengte te houden (een verhouding onder 0,5).",
    ],
  },
  text: {
    unit: "Eenheid",
    units: { cm: "Centimeter (cm)", in: "Inch (in)" },
    waist: "Tailleomtrek",
    waistHelp: "Meet halverwege de onderkant van je onderste rib en de bovenkant van je heupbeen, na normaal uitademen.",
    height: "Lengte",
    heightHelp: "Je lengte staand zonder schoenen, in dezelfde eenheid als de taille.",
    errors: {
      implausible: "Een taille-lengteverhouding van {ratio} is zeer onwaarschijnlijk. Controleer of beide metingen dezelfde eenheid gebruiken.",
    },
    ratio: "Taille-lengteverhouding",
    caption: "Taille {waist} ÷ lengte {height}.",
    band: "NICE-referentieband voor volwassenen (alleen ter referentie, geen diagnose)",
    bands: {
      below: "Onder 0,4: onder de laagste band uit de richtlijn",
      healthy: "0,4 tot 0,49: geen verhoogd gezondheidsrisico",
      increased: "0,5 tot 0,59: verhoogd gezondheidsrisico",
      high: "0,6 of meer: hoog (verder verhoogd) gezondheidsrisico",
    },
    waistHalf: "Taille bij een verhouding van 0,5 (je halve lengte)",
    waistHigh: "Taille bij een verhouding van 0,6",
    difference: "Je taille vergeleken met je halve lengte",
    notes: {
      rounding: "De band wordt gekozen op basis van de verhouding afgerond op twee decimalen, zoals weergegeven.",
      below: "De NICE-banden beginnen bij 0,4. Een lagere verhouding kan wijzen op een meet- of eenheidsfout, of op een zeer slank postuur; het is geen eigen band.",
      scope: "NICE gebruikt deze banden voor volwassenen met een BMI onder 35, ongeacht geslacht of etniciteit. Ze zijn niet bedoeld voor volwassenen met een BMI van 35 of meer, tijdens de zwangerschap, of voor kinderen en jongeren, die door een zorgverlener moeten worden beoordeeld.",
      reference: "Dit is een vergelijking ter referentie, geen diagnose. Bespreek met een arts of verpleegkundige wat je resultaat voor jou betekent.",
    },
  },
};

export default nl;
