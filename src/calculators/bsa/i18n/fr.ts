import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const fr: CalculatorTranslation<BsaText> = {
  content: {
    title: "Calculateur de surface corporelle",
    shortTitle: "Surface corporelle",
    summary: "Estimez la surface corporelle en m² à partir de la taille et du poids avec la formule de Mosteller, comparée aux formules de Du Bois, de Haycock et de Gehan-George.",
    metaTitle: "Calculateur de surface corporelle – Mosteller et Du Bois",
    metaDescription:
      "Estimez la surface corporelle (SC) en m² et en ft² à partir de la taille et du poids, avec Mosteller et les formules de Du Bois, Haycock et Gehan-George.",
    keywords: ["surface corporelle", "calcul surface corporelle", "formule de Mosteller", "formule de Du Bois", "formule de Haycock", "Gehan George", "surface corporelle m2", "SC"],
    intro: [
      "La surface corporelle (SC) est la surface totale de la peau, exprimée en mètres carrés. En médecine, elle sert à rapporter certaines mesures à la corpulence, comme l’index cardiaque ou la filtration rénale. La mesurer directement n’est pas pratique : on l’estime donc à partir de la taille et du poids.",
      "Ce calculateur utilise la formule de Mosteller comme résultat principal, car elle est simple et largement utilisée. Les formules de Du Bois, de Haycock et de Gehan-George sont affichées à côté, pour voir à quel point les estimations diffèrent.",
    ],
    howToUse: [
      "Saisissez le poids et choisissez les kilogrammes ou les livres.",
      "Saisissez la taille et choisissez les centimètres ou les pouces.",
      "Lisez l’estimation de Mosteller en m² et en ft², et comparez les quatre formules dans le tableau.",
    ],
    formulas: [
      { title: "Mosteller", expression: "SC = √(taille × poids ÷ 3600)", explanation: "Taille en cm, poids en kg, résultat en m²." },
      { title: "Du Bois et Du Bois", expression: "SC = 0,007184 × poids^0,425 × taille^0,725", explanation: "La plus ancienne des quatre, ajustée sur un petit groupe de personnes en 1916." },
      { title: "Haycock", expression: "SC = 0,024265 × poids^0,5378 × taille^0,3964", explanation: "Ajustée sur des mesures allant du nourrisson à l’adulte." },
      { title: "Gehan et George", expression: "SC = 0,0235 × poids^0,51456 × taille^0,42246", explanation: "Ajustée sur un groupe plus large de 401 personnes." },
      { title: "Pieds carrés", expression: "ft² = m² ÷ 0,09290304", explanation: "1 ft = 0,3048 m exactement, donc 1 ft² = 0,09290304 m²." },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: ["Mosteller : √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²", "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan-George ≈ 1,854 m²", "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²"],
      },
      {
        title: "82 kg, 168 cm",
        steps: ["Mosteller : √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²", "Du Bois donne environ 1,919 m², la plus faible des quatre", "Haycock donne environ 1,979 m², la plus élevée"],
      },
      {
        title: "165 lb, 64 in",
        steps: ["165 lb × 0,45359237 = 74,84 kg ; 64 in × 2,54 = 162,56 cm", "Mosteller : √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²", "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²"],
      },
    ],
    assumptions: [
      "Le résultat est une estimation, et non un avis médical, et ce calculateur n’a pas encore été vérifié par un professionnel. Ne l’utilisez jamais pour calculer la dose d’un médicament sans confirmation par un clinicien qualifié.",
      "Les quatre formules sont des ajustements statistiques sur des groupes de personnes mesurées il y a des décennies. Elles peuvent différer entre elles, et de la surface réelle d’une personne, de plusieurs pour cent, surtout pour les personnes très petites, très grandes ou très lourdes.",
      "Les poids de 0,5 à 500 kg et les tailles de 30 à 260 cm sont acceptés. Les hôpitaux peuvent utiliser une autre formule, ou un poids ajusté, pour les enfants ou les personnes en situation d’obésité.",
      "Les livres sont converties avec 1 lb = 0,45359237 kg et les pouces avec 1 in = 2,54 cm, deux valeurs exactes.",
    ],
    faqs: [
      {
        question: "Quelle est une surface corporelle typique ?",
        answer: "Chez l’adulte, elle se situe généralement entre environ 1,6 et 2,2 m², selon la taille et le poids. Les valeurs des enfants sont bien plus faibles, et les formules divergent davantage à ces tailles.",
      },
      {
        question: "Quelle formule utiliser ?",
        answer: "Mosteller est la plus courante, car elle est facile à calculer et concorde bien avec les autres pour la plupart des adultes. Les services et les protocoles précisent souvent une formule : utilisez celle de votre équipe soignante.",
      },
      {
        question: "Pourquoi les formules donnent-elles des résultats différents ?",
        answer: "Chacune a été ajustée sur un groupe de personnes différent, avec une méthode différente de mesure de la surface de la peau. Les écarts sont généralement faibles pour les adultes de corpulence moyenne et plus importants pour les personnes en dehors de la plage sur laquelle elles ont été établies.",
      },
    ],
    sourcesUsedFor: [
      "La formule de Mosteller SC = √(taille en cm × poids en kg ÷ 3600).",
      "Les constantes de Du Bois 0,007184 × poids^0,425 × taille^0,725.",
      "La formule de Haycock 0,024265 × poids^0,5378 × taille^0,3964.",
      "La formule de Gehan-George 0,0235 × poids^0,51456 × taille^0,42246.",
    ],
  },
  text: {
    weight: "Poids",
    weightUnit: "Unité de poids",
    weightUnits: { kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    height: "Taille",
    heightUnit: "Unité de taille",
    heightUnits: { cm: "Centimètres (cm)", in: "Pouces (in)" },
    errors: {
      weightRange: "Saisissez un poids compris entre {min} et {max}.",
      heightRange: "Saisissez une taille comprise entre {min} et {max}.",
    },
    bsa: "Surface corporelle (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Surface corporelle (Mosteller) en pieds carrés",
    spread: "Écart entre les quatre formules",
    table: {
      caption: "Surface corporelle selon la formule",
      formula: "Formule",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: { mosteller: "Mosteller (1987)", duBois: "Du Bois et Du Bois (1916)", haycock: "Haycock et al. (1978)", gehanGeorge: "Gehan et George (1970)" },
    notes: {
      estimate: "Chaque formule est une estimation ajustée sur un groupe limité de personnes ; elles peuvent différer entre elles, et d’une surface mesurée, de plusieurs pour cent, surtout aux extrêmes de corpulence.",
      dosing: "N’utilisez pas ce résultat pour calculer la dose d’un médicament. Les doses fondées sur la surface corporelle doivent être calculées et vérifiées par un clinicien qualifié.",
    },
  },
};

export default fr;
