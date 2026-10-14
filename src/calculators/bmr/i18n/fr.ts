import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const fr: CalculatorTranslation<BmrText> = {
  content: {
    title: "Calculateur de métabolisme de base",
    shortTitle: "Métabolisme de base",
    summary: "Estimez votre métabolisme de base (calories dépensées au repos) avec l’équation de Mifflin-St Jeor.",
    metaTitle: "Calculateur de métabolisme de base – Équation de Mifflin-St Jeor",
    metaDescription: "Estimez votre métabolisme de base (MB) en kcal et en kJ par jour avec l’équation de Mifflin-St Jeor, en unités métriques ou impériales.",
    keywords: ["métabolisme de base", "calcul métabolisme de base", "MB", "BMR", "dépense énergétique au repos", "Mifflin St Jeor", "besoin calorique"],
    intro: [
      "Le métabolisme de base (MB) est l’énergie que votre corps consomme au repos complet pour assurer ses fonctions vitales. C’est le point de départ pour estimer vos besoins caloriques quotidiens.",
      "Ce calculateur utilise l’équation de Mifflin-St Jeor, une estimation largement utilisée pour les adultes en bonne santé.",
    ],
    howToUse: [
      "Choisissez les unités métriques ou impériales.",
      "Choisissez le sexe utilisé dans l’équation et saisissez votre âge.",
      "Saisissez votre poids et votre taille.",
      "Consultez votre métabolisme de base estimé en kcal et en kJ par jour.",
    ],
    formulas: [
      {
        title: "Mifflin-St Jeor",
        expression: "MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge (années) + s\ns = +5 pour les hommes, −161 pour les femmes",
        explanation: "Résultat en kilocalories par jour.",
      },
      { title: "Unités d’énergie", expression: "1 kcal = 4,184 kJ", explanation: "La calorie thermochimique." },
    ],
    examples: [
      {
        title: "Homme, 30 ans, 80 kg, 180 cm",
        steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1 125 − 150 + 5 = 1 780 kcal/jour"],
      },
      {
        title: "Femme, 25 ans, 60 kg, 165 cm",
        steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1 345 kcal/jour"],
      },
    ],
    assumptions: [
      "Destiné aux adultes en bonne santé. Ne convient pas aux enfants, aux femmes enceintes ni aux personnes atteintes d’une affection qui modifie le métabolisme.",
      "Les équations estiment des moyennes ; le métabolisme de base d’une personne peut s’en écarter de 10 % ou plus.",
      "Ceci ne constitue pas un avis médical ou diététique. Consultez un professionnel de santé ou un diététicien.",
    ],
    faqs: [
      { question: "Quelle est la différence entre le métabolisme de base et les besoins caloriques quotidiens ?", answer: "Le métabolisme de base ne couvre que le repos. Les besoins quotidiens y ajoutent l’énergie de l’activité physique et de la digestion ; ils sont donc plus élevés." },
      { question: "Pourquoi l’équation tient-elle compte du sexe ?", answer: "L’étude d’origine a ajusté des constantes distinctes pour les hommes et les femmes, car la composition corporelle diffère en moyenne." },
      { question: "Pourquoi le métabolisme de base diminue-t-il avec l’âge ?", answer: "La masse musculaire et le métabolisme tendent à diminuer avec l’âge, ce que traduit le terme −5 × âge." },
    ],
    sourcesUsedFor: ["L’équation de Mifflin-St Jeor et ses coefficients."],
  },
  text: {
    units: "Unités",
    unitOptions: { metric: "Métriques (kg, cm)", imperial: "Impériales (lb, ft, in)" },
    sex: "Sexe utilisé dans l’équation",
    sexHelp: "L’équation utilise des constantes distinctes pour les hommes et les femmes.",
    sexes: { male: "Homme", female: "Femme" },
    age: "Âge",
    weight: "Poids",
    height: "Taille",
    heightFt: "Taille (pieds)",
    heightIn: "Taille (pouces)",
    heightZero: "Saisissez une taille supérieure à 0.",
    bmr: "Métabolisme de base",
    caption: "Énergie dépensée estimée au repos complet.",
    kj: "En kilojoules",
    kcalDay: "kcal/jour",
    kjDay: "kJ/jour",
    note: "Estimation pour les adultes en bonne santé. Les résultats individuels peuvent varier de 10 % ou plus ; il ne s’agit pas d’une prescription diététique ou thérapeutique.",
  },
};

export default fr;
