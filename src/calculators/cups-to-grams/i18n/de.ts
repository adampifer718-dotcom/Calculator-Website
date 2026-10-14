import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const de: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Umrechner Tassen in Gramm",
    shortTitle: "Tassen in Gramm",
    summary: "Rechnen Sie Tassen in Gramm und Gramm in Tassen um – für Mehl, Zucker, Butter und andere Backzutaten, jeweils mit eigener Dichte.",
    metaTitle: "Umrechner Tassen in Gramm – Mehl, Zucker, Butter und mehr",
    metaDescription:
      "Rechnen Sie für 18 Backzutaten Cups in Gramm und Gramm in Cups um, mit der Dichte jeder Zutat und mit US-amerikanischen, metrischen und britischen Tassengrößen.",
    keywords: ["Tassen in Gramm", "Cups in Gramm", "Gramm in Cups", "1 Cup Mehl in Gramm", "Cup Zucker in Gramm", "amerikanische Rezepte umrechnen", "Backen Umrechnung"],
    intro: [
      "Eine Tasse (Cup) misst ein Volumen, doch eine Tasse Mehl wiegt viel weniger als eine Tasse Honig. Für die Umrechnung zwischen Tassen und Gramm braucht man daher die Dichte der jeweiligen Zutat.",
      "Wählen Sie die Zutat und die Tasse, die Ihr Rezept verwendet. US-Rezepte rechnen mit einer Tasse von 236,6 ml, viele australische, neuseeländische und kanadische Rezepte mit einer metrischen Tasse von 250 ml.",
    ],
    howToUse: [
      "Wählen Sie Tassen in Gramm oder Gramm in Tassen.",
      "Wählen Sie die Zutat.",
      "Wählen Sie die im Rezept verwendete Tassengröße.",
      "Geben Sie die Menge ein und lesen Sie das Ergebnis sowie die Tabelle pro Tasse ab.",
    ],
    formulas: [
      { title: "Tassen in Gramm", expression: "Gramm = Tassen × Tassenvolumen (ml) × Dichte (g/ml)", explanation: "Dichte = Gramm in einer US-Tasse ÷ 236,588 ml." },
      { title: "Gramm in Tassen", expression: "Tassen = Gramm ÷ (Tassenvolumen (ml) × Dichte (g/ml))", explanation: "Dieselbe Beziehung, nach der Anzahl der Tassen aufgelöst." },
    ],
    examples: [
      {
        title: "2 US-Tassen Weizenmehl (Type 405)",
        steps: ["Eine US-Tasse Weizenmehl wiegt 120 g", "2 × 120 g = 240 g (etwa 8,47 oz)"],
      },
      {
        title: "500 g Kristallzucker in US-Tassen",
        steps: ["Eine US-Tasse Kristallzucker wiegt 198 g", "500 ÷ 198 ≈ 2,53 Tassen, also etwas mehr als 2 1/2 Tassen"],
      },
    ],
    assumptions: [
      "Trockene Zutaten werden mit einem Löffel in die Tasse gefüllt und glatt gestrichen, nicht direkt geschöpft oder gesiebt.",
      "Die Gewichte sind typische Werte; Mehlsorte, Korngröße des Zuckers, Luftfeuchtigkeit und Temperatur können sie um mehrere Prozent verändern.",
      "Butter wird fest und angedrückt gemessen; Flüssigkeiten bei Zimmertemperatur.",
    ],
    faqs: [
      { question: "Warum wiegt eine Tasse Mehl weniger als eine Tasse Zucker?", answer: "Zwischen den Mehlpartikeln ist mehr Luft eingeschlossen, Mehl hat also eine geringere Dichte, und dasselbe Volumen enthält weniger Masse. Deshalb braucht jede Zutat ihre eigene Umrechnung." },
      { question: "Welche Tassengröße soll ich wählen?", answer: "Verwenden Sie für amerikanische Rezepte die US-Tasse und für die meisten australischen, neuseeländischen und kanadischen Rezepte die metrische Tasse von 250 ml. Ältere britische Rezepte verwenden mitunter die größere imperiale Tasse." },
      { question: "Ist Wiegen besser als Abmessen mit Tassen?", answer: "Ja, beim Backen schon. Eine Küchenwaage vermeidet die Schwankungen, die durch unterschiedliches Befüllen der Tasse entstehen." },
    ],
    sourcesUsedFor: [
      "Gramm pro Tasse für Mehlsorten, Zucker, Butter, Öl, Honig, Ahornsirup, Kakao, Haferflocken, Schokotropfen und Speisestärke.",
      "Portionsgewichte für eine Tasse Vollmilch und für ungekochten weißen Langkornreis.",
      "Die Größe der US-Tasse (8 US-Flüssigunzen) und der imperialen Flüssigunze.",
    ],
  },
  text: {
    direction: "Umrechnen",
    directions: { toGrams: "Tassen in Gramm", toCups: "Gramm in Tassen" },
    ingredient: "Zutat",
    ingredients: {
      flourAllPurpose: "Weizenmehl (Type 405)",
      flourBread: "Brotmehl (Type 550)",
      flourWholeWheat: "Weizenvollkornmehl",
      flourAlmond: "Mandelmehl",
      sugarGranulated: "Kristallzucker",
      sugarBrown: "Brauner Zucker (angedrückt)",
      sugarPowdered: "Puderzucker",
      butter: "Butter",
      oil: "Pflanzenöl",
      honey: "Honig",
      mapleSyrup: "Ahornsirup",
      cocoa: "Kakaopulver (ungesüßt)",
      oats: "Haferflocken",
      chocolateChips: "Schokotropfen",
      cornstarch: "Speisestärke (Maisstärke)",
      rice: "Weißer Reis (ungekocht)",
      milk: "Vollmilch",
      water: "Wasser",
    },
    cup: "Tassengröße",
    cups: {
      us: "US-Tasse (236,6 ml)",
      metric: "Metrische Tasse (250 ml)",
      usLegal: "US-Tasse für Nährwertangaben (240 ml)",
      imperial: "Imperiale Tasse (284,1 ml)",
    },
    cupHelp: "US-Rezepte verwenden die US-Tasse; australische, neuseeländische und kanadische Rezepte meist die metrische Tasse von 250 ml.",
    amountCups: "Menge in Tassen",
    amountGrams: "Menge in Gramm",
    cupsUnit: "Tassen",
    grams: "Gewicht",
    gramsCaption: "{ingredient}: {amount} × {cup}.",
    cupsResult: "Volumen in Tassen",
    cupsCaption: "{amount} g {ingredient}, gemessen mit: {cup}.",
    ounces: "In Unzen",
    milliliters: "Volumen in Millilitern",
    kitchen: "Nächstes Küchenmaß",
    density: "Dichte",
    tableCaption: "Gewicht einer Tasse jeder Zutat ({cup})",
    tableIngredient: "Zutat",
    tableGrams: "Gramm",
    notes: {
      method: "Die Gewichte setzen voraus, dass die Zutaten mit einem Löffel in die Tasse gefüllt und glatt gestrichen werden. Wird Mehl direkt aus der Tüte geschöpft, verdichtet es sich, was 20–30 % mehr ergeben kann.",
      sources: "Die Dichten sind typische Werte aus der Zutatengewichtstabelle von King Arthur Baking und aus USDA FoodData Central; Marken und Bedingungen variieren.",
    },
  },
};

export default de;
