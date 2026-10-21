import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const fr: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Convertisseur de poids",
    shortTitle: "Poids",
    summary: "Convertissez entre milligrammes, grammes, kilogrammes, tonnes, onces, livres et stones.",
    metaTitle: "Convertisseur de poids – kg, lb, oz, g et stone",
    metaDescription:
      "Convertissez un poids entre kilogrammes, grammes, milligrammes, tonnes, livres, onces et stones grâce à la définition internationale exacte de la livre.",
    keywords: ["convertisseur de poids", "convertir kg en livres", "livres en kg", "onces en grammes", "conversion lb kg", "stone en kg", "conversion de masse"],
    intro: [
      "Convertissez un poids entre unités métriques et impériales. Au sens strict, il s’agit d’unités de masse, ce qu’indiquent les balances.",
      "La livre est définie comme valant exactement 0,45359237 kg : toutes les conversions sont donc exactes avant l’arrondi à l’affichage.",
    ],
    howToUse: [
      "Saisissez la valeur.",
      "Choisissez l’unité de départ et l’unité d’arrivée.",
      "Lisez le résultat et le tableau complet.",
    ],
    formulas: [
      {
        title: "Conversion via le kilogramme",
        expression: "résultat = valeur × (kg par unité de départ) ÷ (kg par unité d’arrivée)",
        explanation: "Chaque unité est définie comme un nombre fixe de kilogrammes.",
      },
      {
        title: "Facteurs clés",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1 000 kg",
        explanation: "Il s’agit d’onces avoirdupois, utilisées pour les aliments et le poids corporel.",
      },
    ],
    examples: [
      { title: "150 livres en kilogrammes", steps: ["150 × 0,45359237", "≈ 68,04 kg"] },
      { title: "1 kilogramme en livres", steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"] },
    ],
    assumptions: [
      "Les onces sont des onces avoirdupois ; les onces troy (utilisées pour les métaux précieux) ne sont pas incluses.",
      "Les tonnes sont des tonnes métriques (1 000 kg), et non des tonnes courtes américaines ni des tonnes longues britanniques.",
    ],
    faqs: [
      { question: "Combien de livres y a-t-il dans un kilogramme ?", answer: "Environ 2,2046 livres." },
      { question: "Combien d’onces y a-t-il dans une livre ?", answer: "Exactement 16 onces avoirdupois." },
      { question: "Combien vaut un stone ?", answer: "14 livres, soit environ 6,35 kg." },
    ],
    sourcesUsedFor: ["Définition exacte de la livre et des unités apparentées en kilogrammes."],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: { mg: "Milligrammes", g: "Grammes", kg: "Kilogrammes", t: "Tonnes métriques", oz: "Onces (avoirdupois)", lb: "Livres", st: "Stones" },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans chaque unité de masse",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les résultats sont affichés avec 10 chiffres significatifs.",
  },
};

export default fr;
