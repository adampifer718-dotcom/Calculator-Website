import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const nl: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Koffie-waterverhoudingcalculator",
    shortTitle: "Koffieverhouding",
    summary:
      "Bereken hoeveel gemalen koffie je nodig hebt voor een hoeveelheid water, of hoeveel water voor je koffie, voor filterkoffie, French press, espresso en cold brew.",
    metaTitle: "Koffie-waterverhoudingcalculator – gram per kop",
    metaDescription:
      "Bereken hoeveel gram koffie je gebruikt voor je water, of hoeveel water voor je koffie, met aanpasbare verhoudingen voor filter, French press, espresso en cold brew.",
    keywords: ["koffieverhouding", "verhouding koffie water", "hoeveel koffie per kop", "pour-over verhouding", "French press verhouding", "cold brew verhouding", "gram koffie", "espresso brew ratio"],
    intro: [
      "De verhouding tussen koffie en water is de eenvoudigste manier om je koffie elke keer hetzelfde te laten smaken. Je schrijft haar als 1 : n, dus n gram water voor elke gram gemalen koffie: bij 1:16 hoort bij 20 g koffie 320 g water. Een kleinere n geeft sterkere koffie.",
      "Kies een zetmethode om met een gangbare verhouding te beginnen, pas die aan je smaak aan, en de calculator berekent de koffie voor je water of het water voor je koffie, in gram, milliliter, fluid ounces of cups.",
    ],
    howToUse: [
      "Kies de zetmethode. De gangbare verhouding wordt ingevuld; pas die aan als je je koffie sterker of lichter wilt.",
      "Kies of je de koffie uit het water berekent of het water uit de koffie.",
      "Vul de hoeveelheid in en kies de eenheid. De uitkomst verschijnt in de eenheid die je voor het andere ingrediënt hebt gekozen.",
      "Weeg de koffie op een keukenweegschaal voor de meest constante resultaten.",
    ],
    formulas: [
      { title: "Koffie uit water", expression: "koffie (g) = water (g) ÷ n", explanation: "Voor een verhouding van 1 : n. Water telt als 1 g per mL." },
      { title: "Water uit koffie", expression: "water (g) = koffie (g) × n", explanation: "1 Amerikaanse cup = 8 US fl oz = 236,5882365 mL, en 1 oz = 28,349523125 g." },
      { title: "Sterkte in gram per liter", expression: "g/L = koffie (g) ÷ water (mL) × 1.000", explanation: "Een verhouding van 1:18 is ongeveer 55,6 g koffie per liter water." },
    ],
    examples: [
      { title: "Pour-over met 500 mL water bij 1:16", steps: ["500 mL water weegt 500 g", "Koffie = 500 ÷ 16 = 31,25 g"] },
      {
        title: "French press met 30 g koffie bij 1:12, water in cups",
        steps: ["Water = 30 × 12 = 360 g = 360 mL", "In Amerikaanse cups: 360 ÷ 236,588 ≈ 1,52 cups"],
      },
      {
        title: "Cold-brewconcentraat met 4 cups water bij 1:8",
        steps: ["4 Amerikaanse cups = 4 × 236,588 ≈ 946,35 mL water", "Koffie = 946,35 ÷ 8 ≈ 118,29 g, ongeveer 4,17 oz"],
      },
    ],
    assumptions: [
      "De verhoudingen per methode zijn gangbare vertrekpunten, geen regels. Smaak, branding, maalgraad en zettijd veranderen allemaal de beste verhouding.",
      "Water telt als 1 g per mL. Gemalen koffie houdt een deel van het water vast, dus je houdt iets minder gezette koffie over dan het water dat je gebruikt.",
      "Voor espresso geldt de verhouding als droge koffie ten opzichte van het gewicht van de drank in het kopje, zoals barista's die meestal beschrijven.",
      "Koffiehoeveelheden zijn op gewicht. Maatschepjes en lepels bevatten verschillende hoeveelheden, afhankelijk van maalgraad en branding, dus die worden niet omgerekend.",
    ],
    faqs: [
      {
        question: "Wat is de beste verhouding tussen koffie en water?",
        answer:
          "Er is niet één beste verhouding. Voor filterkoffie en pour-over beginnen veel mensen tussen 1:15 en 1:17 en passen dan aan; de vaak geciteerde Golden Cup-richtlijn van de Specialty Coffee Association komt uit op ongeveer 1:18. Smaakt de koffie slap, verlaag dan n; is ze te sterk, verhoog n dan.",
      },
      {
        question: "Hoeveel koffie heb ik nodig voor één kop?",
        answer:
          "Voor één Amerikaanse cup (ongeveer 237 mL) bij 1:16 gebruik je ongeveer 14,8 g koffie. Veel mokken bevatten meer dan een Amerikaanse cup, dus meet de inhoud van je mok voor een beter antwoord.",
      },
      {
        question: "Waarom koffie wegen in plaats van schepjes gebruiken?",
        answer:
          "Een schepje koffie kan heel verschillend wegen, afhankelijk van de boon, de branding en hoe fijn ze gemalen is. Als je zowel de koffie als het water weegt, kun je een kop die je lekker vond veel makkelijker herhalen.",
      },
    ],
    sourcesUsedFor: [
      "De vaak geciteerde Golden Cup-richtlijn van ongeveer 55 g koffie per liter water (ongeveer 1:18), alleen ter vergelijking vermeld.",
    ],
  },
  text: {
    method: "Zetmethode",
    methods: {
      drip: "Filterkoffie of pour-over",
      frenchPress: "French press",
      espresso: "Espresso",
      coldBrew: "Cold-brewconcentraat",
      custom: "Eigen verhouding",
    },
    ratio: "Verhouding 1 : n (water per gram koffie)",
    ratioHelp: {
      drip: "Gangbare verhoudingen voor filterkoffie en pour-over lopen van ongeveer 1:15 (sterker) tot 1:17 (lichter). Pas aan naar smaak.",
      frenchPress: "Een gangbare verhouding voor French press is ongeveer 1:12. Pas aan naar smaak.",
      espresso: "Bij espresso is de verhouding meestal koffie ten opzichte van het gewicht van de drank in het kopje; ongeveer 1:2 is een gangbaar vertrekpunt.",
      coldBrew: "Ongeveer 1:8 geeft een concentraat dat je meestal verdunt voor het drinken.",
      custom: "Gram water voor elke gram gemalen koffie.",
    },
    solve: "Bereken",
    solveOptions: { coffee: "Koffie uit water", water: "Water uit koffie" },
    water: "Hoeveelheid water",
    waterUnit: "Eenheid van water",
    waterUnits: { mL: "Milliliter (mL)", g: "Gram (g)", floz: "Amerikaanse fluid ounces (fl oz)", cup: "Amerikaanse cups" },
    coffee: "Hoeveelheid gemalen koffie",
    coffeeUnit: "Eenheid van koffie",
    coffeeUnits: { g: "Gram (g)", oz: "Ounce (oz)" },
    coffeeNeeded: "Benodigde gemalen koffie",
    waterNeeded: "Benodigd water",
    caption: "Bij een verhouding van {ratio}: {coffee} koffie op {water} water.",
    ratioText: "1:{n}",
    ratioOut: "Verhouding koffie tot water",
    coffeeG: "Koffie in gram",
    coffeeOz: "Koffie in ounces",
    waterMl: "Water in mL (= gram)",
    waterFloz: "Water in Amerikaanse fluid ounces",
    waterCups: "Water in Amerikaanse cups",
    strength: "Koffie per liter water",
    cupsUnit: "cups",
    notes: {
      golden:
        "Ter vergelijking: de veel geciteerde Golden Cup-richtlijn van de Specialty Coffee Association is ongeveer 55 g koffie per liter water, ruwweg 1:18. Zie elke verhouding als vertrekpunt en pas aan naar smaak.",
      espresso:
        "Bij espresso vergelijkt de verhouding meestal de droge koffie met het gewicht van de afgewerkte drank, niet met het water dat erdoor wordt geperst, dus de getoonde hoeveelheid is het beoogde drankgewicht.",
      coldBrew: "Cold-brewconcentraat is sterk; je verdunt het meestal naar smaak met water of melk voor het drinken.",
      water: "Water telt als 1 g per mL. Er blijft wat water in het koffiedik achter, dus de gezette koffie is iets minder dan het gebruikte water.",
    },
  },
};

export default nl;
