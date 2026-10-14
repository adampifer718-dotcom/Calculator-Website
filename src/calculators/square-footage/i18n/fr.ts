import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const fr: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Calculateur de surface en pieds carrés",
    shortTitle: "Surface en pieds carrés",
    summary: "Calculez la surface d’un rectangle, d’un cercle ou d’un triangle en pieds carrés, mètres carrés et yards carrés.",
    metaTitle: "Calculateur de surface – Pieds carrés (pi²) et m²",
    metaDescription:
      "Calculez la surface en pieds carrés d’un rectangle, d’un cercle ou d’un triangle à partir de pieds, pouces, yards, mètres ou centimètres, avec m² et yards carrés.",
    keywords: ["pieds carrés", "calcul surface", "surface d’une pièce", "calcul m2", "convertir pieds carrés en m2", "surface au sol", "revêtement de sol"],
    intro: [
      "La surface en pieds carrés est l’aire d’une surface mesurée en pieds carrés. Elle sert pour les revêtements de sol, la peinture, le carrelage, la moquette et les annonces immobilières.",
      "Mesurez chaque dimension, choisissez la forme et l’unité, et le calculateur convertit la surface en pieds carrés, mètres carrés et yards carrés.",
    ],
    howToUse: [
      "Choisissez la forme : rectangle, cercle ou triangle.",
      "Sélectionnez l’unité dans laquelle vous avez mesuré.",
      "Saisissez les dimensions et, si nécessaire, le nombre de surfaces identiques.",
      "Lisez la surface en pieds carrés, mètres carrés et yards carrés.",
    ],
    formulas: [
      { title: "Rectangle", expression: "Surface = longueur × largeur", explanation: "À utiliser pour les pièces carrées et rectangulaires." },
      { title: "Cercle", expression: "Surface = π × (diamètre ÷ 2)²", explanation: "La moitié du diamètre correspond au rayon." },
      { title: "Triangle", expression: "Surface = base × hauteur ÷ 2", explanation: "La hauteur se mesure perpendiculairement à la base." },
      {
        title: "Conversion d’unités",
        expression: "1 pi = 12 po = 0,3048 m\n1 pi² = 0,09290304 m²\n1 yd² = 9 pi²",
        explanation: "Les surfaces se convertissent avec le carré du facteur de longueur.",
      },
    ],
    examples: [
      { title: "Une pièce de 12 pi × 15 pi", steps: ["Surface = 12 × 15 = 180 pi²", "180 × 0,09290304 = 16,72 m²"] },
      { title: "Une pièce de 4 m × 3,5 m", steps: ["Surface = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 pi²"] },
      { title: "Une terrasse circulaire de 10 pi de diamètre", steps: ["Rayon = 10 ÷ 2 = 5 pi", "Surface = π × 5² = 78,54 pi²"] },
    ],
    assumptions: [
      "Les mesures sont prises à angle droit et la forme est régulière.",
      "Pour les pièces en L ou irrégulières, divisez l’espace en rectangles et additionnez les résultats.",
      "Prévoyez du matériau supplémentaire (souvent 5 à 10 %) pour les découpes et les chutes ; ce calculateur donne uniquement la surface exacte.",
    ],
    faqs: [
      { question: "Comment calculer une surface en pieds carrés ?", answer: "Multipliez la longueur par la largeur en pieds. Une pièce de 10 pi sur 12 pi mesure 120 pieds carrés." },
      {
        question: "Comment convertir des mètres carrés en pieds carrés ?",
        answer: "Divisez par 0,09290304, ou multipliez par environ 10,764. Ainsi, 20 m² valent environ 215,3 pi².",
      },
      { question: "Comment mesurer une pièce en L ?", answer: "Divisez-la en deux rectangles, calculez la surface de chacun, puis additionnez-les." },
    ],
    sourcesUsedFor: ["Facteurs exacts de conversion des longueurs (1 pi = 0,3048 m, 1 po = 2,54 cm)."],
  },
  text: {
    shape: "Forme",
    shapes: { rectangle: "Rectangle ou carré", circle: "Cercle", triangle: "Triangle" },
    unit: "Unité de mesure",
    units: { ft: "Pieds (ft)", in: "Pouces (in)", yd: "Yards (yd)", m: "Mètres (m)", cm: "Centimètres (cm)" },
    length: "Longueur",
    width: "Largeur",
    diameter: "Diamètre",
    base: "Base",
    height: "Hauteur",
    quantity: "Nombre de surfaces",
    quantityHelp: "Pour plusieurs pièces ou éléments identiques.",
    area: "Surface",
    quantityCaption: "Total pour {count} surfaces identiques.",
    sqM: "Mètres carrés",
    sqYd: "Yards carrés",
    sqUnit: "Surface en {unit}²",
    sqFtSuffix: "pi²",
    sqYdSuffix: "yd²",
  },
};

export default fr;
