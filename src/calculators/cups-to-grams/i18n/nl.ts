import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const nl: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Cups naar gram omrekenen",
    shortTitle: "Cups naar gram",
    summary: "Reken cups om naar gram en gram naar cups voor bloem, suiker, boter en andere bakingrediënten, elk met een eigen dichtheid.",
    metaTitle: "Cups naar gram omrekenen – Bloem, suiker, boter en meer",
    metaDescription:
      "Reken cups om naar gram en gram naar cups voor 18 bakingrediënten met een eigen dichtheid per ingrediënt, voor Amerikaanse, metrische en imperiale cups.",
    keywords: ["cups naar gram", "gram naar cups", "cup bloem in gram", "cup suiker in gram", "bakken omrekenen", "metrische cup", "maatbeker"],
    intro: [
      "Een cup meet volume, maar een cup bloem weegt veel minder dan een cup honing. Om tussen cups en gram om te rekenen heb je daarom de dichtheid van het specifieke ingrediënt nodig.",
      "Kies het ingrediënt en de cup die je recept gebruikt. Amerikaanse recepten gebruiken een cup van 236,6 mL, terwijl veel Australische, Nieuw-Zeelandse en Canadese recepten een metrische cup van 250 mL gebruiken.",
    ],
    howToUse: [
      "Kies cups naar gram of gram naar cups.",
      "Kies het ingrediënt.",
      "Kies de cupmaat die het recept gebruikt.",
      "Vul de hoeveelheid in en lees het resultaat en de tabel per cup af.",
    ],
    formulas: [
      { title: "Cups naar gram", expression: "gram = cups × cupvolume (mL) × dichtheid (g/mL)", explanation: "Dichtheid = gram in één Amerikaanse cup ÷ 236,588 mL." },
      { title: "Gram naar cups", expression: "cups = gram ÷ (cupvolume (mL) × dichtheid (g/mL))", explanation: "Hetzelfde verband, opgelost naar het aantal cups." },
    ],
    examples: [
      {
        title: "2 Amerikaanse cups bloem voor alle doeleinden",
        steps: ["Eén Amerikaanse cup bloem weegt 120 g", "2 × 120 g = 240 g (ongeveer 8,47 oz)"],
      },
      {
        title: "500 g kristalsuiker in Amerikaanse cups",
        steps: ["Eén Amerikaanse cup kristalsuiker weegt 198 g", "500 ÷ 198 ≈ 2,53 cups, iets meer dan 2 1/2 cup"],
      },
    ],
    assumptions: [
      "Droge ingrediënten worden met een lepel in de cup geschept en afgestreken, niet met de cup uitgeschept of gezeefd.",
      "De gewichten zijn gangbare waarden; het merk bloem, de korrelgrootte van suiker, luchtvochtigheid en temperatuur kunnen ze enkele procenten veranderen.",
      "Boter wordt vast en aangedrukt gemeten; vloeistoffen op kamertemperatuur.",
    ],
    faqs: [
      { question: "Waarom weegt een cup bloem minder dan een cup suiker?", answer: "Bloemdeeltjes houden meer lucht vast en zijn minder dicht, dus hetzelfde volume bevat minder massa. Daarom heeft elk ingrediënt een eigen omrekening nodig." },
      { question: "Welke cupmaat moet ik kiezen?", answer: "Gebruik de Amerikaanse cup voor Amerikaanse recepten en de metrische cup van 250 mL voor de meeste Australische, Nieuw-Zeelandse en Canadese recepten. Oudere Britse recepten kunnen de grotere imperiale cup gebruiken." },
      { question: "Is wegen beter dan cups gebruiken?", answer: "Ja, bij het bakken wel. Een keukenweegschaal voorkomt de verschillen die ontstaan door hoe de cup wordt gevuld." },
    ],
    sourcesUsedFor: [
      "Gram per cup voor bloemsoorten, suikers, boter, olie, honing, ahornsiroop, cacao, havermout, chocoladestukjes en maizena.",
      "Portiegewichten voor één cup volle melk en ongekookte langkorrelige witte rijst.",
      "De grootte van de Amerikaanse cup (8 US fluid ounces) en de imperiale fluid ounce.",
    ],
  },
  text: {
    direction: "Omrekenen",
    directions: { toGrams: "Cups naar gram", toCups: "Gram naar cups" },
    ingredient: "Ingrediënt",
    ingredients: {
      flourAllPurpose: "Bloem voor alle doeleinden (tarwebloem)",
      flourBread: "Broodbloem",
      flourWholeWheat: "Volkorenmeel",
      flourAlmond: "Amandelmeel",
      sugarGranulated: "Kristalsuiker",
      sugarBrown: "Bruine suiker (aangedrukt)",
      sugarPowdered: "Poedersuiker",
      butter: "Boter",
      oil: "Plantaardige olie",
      honey: "Honing",
      mapleSyrup: "Ahornsiroop",
      cocoa: "Cacaopoeder (ongezoet)",
      oats: "Havervlokken",
      chocolateChips: "Chocoladestukjes",
      cornstarch: "Maizena (maiszetmeel)",
      rice: "Witte rijst (ongekookt)",
      milk: "Melk (vol)",
      water: "Water",
    },
    cup: "Cupmaat",
    cups: {
      us: "Amerikaanse cup (236,6 mL)",
      metric: "Metrische cup (250 mL)",
      usLegal: "Amerikaanse voedingsetiket-cup (240 mL)",
      imperial: "Imperiale cup (284,1 mL)",
    },
    cupHelp: "Amerikaanse recepten gebruiken de Amerikaanse cup; Australische, Nieuw-Zeelandse en Canadese recepten meestal de metrische cup van 250 mL.",
    amountCups: "Hoeveelheid in cups",
    amountGrams: "Hoeveelheid in gram",
    cupsUnit: "cups",
    grams: "Gewicht",
    gramsCaption: "{amount} × {cup} {ingredient}.",
    cupsResult: "Volume in cups",
    cupsCaption: "{amount} g {ingredient}, gemeten met de {cup}.",
    ounces: "In ounces",
    milliliters: "Volume in milliliter",
    kitchen: "Dichtstbijzijnde keukenmaat",
    density: "Dichtheid",
    tableCaption: "Gewicht van één cup van elk ingrediënt ({cup})",
    tableIngredient: "Ingrediënt",
    tableGrams: "Gram",
    notes: {
      method: "De gewichten gaan ervan uit dat ingrediënten met een lepel in de cup worden geschept en afgestreken. Bloem rechtstreeks uit de zak scheppen drukt hem aan en kan 20–30% extra geven.",
      sources: "Dichtheden zijn gangbare waarden uit de ingrediëntengewichtstabel van King Arthur Baking en USDA FoodData Central; merken en omstandigheden verschillen.",
    },
  },
};

export default nl;
