import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const fr: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Calculateur de circonférence",
    shortTitle: "Circonférence",
    summary: "Calculez la circonférence d’un cercle à partir de son rayon, de son diamètre ou de son aire, ainsi que les autres mesures.",
    metaTitle: "Calculateur de circonférence – Rayon, diamètre ou aire",
    metaDescription:
      "Calculez la circonférence d’un cercle à partir de son rayon, de son diamètre ou de son aire, et obtenez les autres mesures grâce à la formule C = 2πr.",
    keywords: ["circonférence", "périmètre d’un cercle", "calcul circonférence", "rayon", "diamètre", "aire d’un disque", "pi"],
    intro: [
      "La circonférence est la longueur du contour d’un cercle. Elle vaut π fois le diamètre, ou 2π fois le rayon.",
      "Saisissez la mesure que vous connaissez et le calculateur trouve les autres, dans la même unité.",
    ],
    howToUse: [
      "Choisissez la mesure que vous connaissez.",
      "Saisissez sa valeur.",
      "Consultez la circonférence, le rayon, le diamètre et l’aire.",
    ],
    formulas: [
      { title: "Circonférence", expression: "C = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "À partir de l’aire", expression: "r = √(A ÷ π)", explanation: "Utilisez ensuite C = 2πr." },
    ],
    examples: [
      { title: "Rayon de 5", steps: ["C = 2 × π × 5", "≈ 31,415927"] },
      { title: "Diamètre de 10", steps: ["C = π × 10", "≈ 31,415927"] },
    ],
    assumptions: [
      "Les résultats utilisent la précision complète de π et sont affichés avec 6 décimales.",
      "L’aire est exprimée dans l’unité carrée de votre saisie.",
    ],
    faqs: [
      {
        question: "Comment calculer la circonférence à partir du diamètre ?",
        answer: "Multipliez le diamètre par π. Un diamètre de 20 cm donne environ 62,83 cm.",
      },
      { question: "Comment trouver le rayon à partir de la circonférence ?", answer: "Divisez la circonférence par 2π." },
      {
        question: "Quelle est la différence entre circonférence et aire ?",
        answer: "La circonférence est la longueur du contour du cercle ; l’aire est la surface qu’il délimite.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Mesure connue",
    options: { radius: "Rayon", diameter: "Diamètre", area: "Aire" },
    radius: "Rayon (r)",
    diameter: "Diamètre (d)",
    area: "Aire (A)",
    circumference: "Circonférence",
    caption: "Dans la même unité que votre saisie.",
    radiusOut: "Rayon",
    diameterOut: "Diamètre",
    areaOut: "Aire",
  },
};

export default fr;
