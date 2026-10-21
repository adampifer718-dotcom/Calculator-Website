import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const fr: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Calculateur de récupération d’eau de pluie",
    shortTitle: "Récupération d’eau de pluie",
    summary: "Estimez la quantité d’eau de pluie qu’une toiture peut récupérer à partir de sa surface, des précipitations et d’un coefficient de ruissellement.",
    metaTitle: "Calculateur de récupération d’eau de pluie – Volume collecté",
    metaDescription: "Estimez l’eau de pluie récupérée sur un toit, en litres ou en gallons US, selon la surface de captage, la hauteur de pluie et un coefficient de pertes.",
    keywords: ["récupération eau de pluie", "calcul cuve eau de pluie", "volume eau de pluie toiture", "dimensionner récupérateur", "pluviométrie toit", "coefficient de ruissellement"],
    intro: [
      "Chaque millimètre de pluie tombé sur un mètre carré de toiture représente un litre d’eau. Ce calculateur applique ce principe à votre toit et tient compte des pertes.",
      "Utilisez-le pour dimensionner un récupérateur ou une cuve, ou pour estimer la collecte annuelle à partir de la pluviométrie moyenne.",
    ],
    howToUse: [
      "Choisissez les unités métriques ou américaines.",
      "Saisissez la surface au sol de la toiture.",
      "Saisissez la hauteur de pluie pour la période qui vous intéresse.",
      "Ajustez le coefficient de ruissellement pour tenir compte des pertes et consultez le volume récupéré.",
    ],
    formulas: [
      { title: "Unités métriques", expression: "Litres = surface (m²) × pluie (mm) × coefficient de ruissellement", explanation: "1 mm de pluie sur 1 m² correspond à 1 litre." },
      { title: "Unités américaines", expression: "Gallons = surface (ft²) × pluie (in) × 0,6234 × coefficient de ruissellement", explanation: "0,6234 = 144 in³ ÷ 231 in³ par gallon US." },
    ],
    examples: [
      {
        title: "Toit de 100 m², 25 mm de pluie",
        steps: ["100 × 25 = 2 500 L de pluie", "2 500 × 0,8 = 2 000 L récupérés"],
      },
      {
        title: "Toit de 1 000 ft², 1 pouce de pluie",
        steps: ["1 000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal récupérés"],
      },
    ],
    assumptions: [
      "Le coefficient de ruissellement couvre les pertes dues à l’évaporation, aux éclaboussures, aux dispositifs de premier rinçage et aux débordements de gouttière. Il dépend du matériau de couverture et de la conception de l’installation ; consultez les recommandations locales.",
      "Utilisez la surface horizontale projetée du toit, et non la surface inclinée.",
      "Vérifiez la réglementation locale sur la collecte et l’usage de l’eau de pluie, et traitez-la avant de la boire.",
    ],
    faqs: [
      { question: "Combien d’eau fournit 1 pouce de pluie ?", answer: "Environ 0,623 gallon US par pied carré de toiture avant pertes, soit 623 gallons pour 1 000 ft²." },
      { question: "Quel coefficient de ruissellement utiliser ?", answer: "Les toitures lisses et dures perdent moins d’eau que les toitures rugueuses ou absorbantes. 0,8 est une valeur médiane prudente ; ajustez-la selon votre toit." },
      { question: "L’eau de pluie récupérée est-elle potable ?", answer: "Pas sans filtration et désinfection adaptées. Beaucoup l’utilisent plutôt pour le jardin et les toilettes." },
    ],
    sourcesUsedFor: ["Définitions du gallon US (231 in³) et du litre."],
  },
  text: {
    units: "Unités",
    unitOptions: { metric: "Métriques (m², mm, litres)", imperial: "Américaines (ft², pouces, gallons)" },
    area: "Surface de captage (toiture)",
    areaHelp: "La surface horizontale projetée du toit, et non la surface inclinée.",
    rainfall: "Hauteur de pluie",
    rainfallHelp: "Pour un orage, un mois ou une année.",
    coefficient: "Coefficient de ruissellement",
    coefficientHelp: "Part de la pluie qui atteint la cuve après pertes (de 0 à 1).",
    collected: "Eau récupérée",
    inLiters: "En litres",
    inGallons: "En gallons US",
    inCubic: "En mètres cubes",
    gallons: "gal US",
    note: "1 mm de pluie sur 1 m² correspond exactement à 1 litre ; 1 pouce de pluie sur 1 ft² correspond à 144 ÷ 231 ≈ 0,623 gallon US.",
  },
};

export default fr;
