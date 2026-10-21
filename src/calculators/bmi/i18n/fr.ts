import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const fr: CalculatorTranslation<BmiText> = {
  content: {
    title: "Calculateur d’IMC",
    shortTitle: "IMC",
    summary: "Calculez l’indice de masse corporelle à partir de la taille et du poids, en unités métriques ou impériales.",
    metaTitle: "Calculateur d’IMC – Indice de masse corporelle adulte",
    metaDescription:
      "Calculez votre IMC à partir de votre taille et de votre poids, en kg et cm ou en lb, pieds et pouces, avec la catégorie adulte et le poids santé.",
    keywords: ["calcul IMC", "indice de masse corporelle", "IMC adulte", "poids idéal", "surpoids", "obésité", "calculer son IMC"],
    intro: [
      "L’indice de masse corporelle (IMC) met en rapport le poids et la taille. C’est un outil de dépistage rapide pour les adultes, et non un diagnostic.",
      "Saisissez votre taille et votre poids en unités métriques ou impériales pour connaître votre IMC, la catégorie adulte correspondante et la fourchette de poids associée à un IMC normal pour votre taille.",
    ],
    howToUse: [
      "Choisissez les unités métriques ou impériales.",
      "Saisissez votre poids et votre taille.",
      "Consultez votre IMC, votre catégorie et votre fourchette de poids normal.",
    ],
    formulas: [
      {
        title: "IMC",
        expression: "IMC = poids (kg) ÷ taille (m)²",
        explanation: "Les unités impériales sont converties avec 1 lb = 0,45359237 kg et 1 po = 2,54 cm.",
      },
      {
        title: "Catégories pour les adultes",
        expression: "Moins de 18,5 : insuffisance pondérale\n18,5–24,9 : poids normal\n25–29,9 : surpoids\n30 ou plus : obésité",
        explanation: "Catégories de l’Organisation mondiale de la santé pour les adultes.",
      },
    ],
    examples: [
      { title: "70 kg, 175 cm", steps: ["Taille = 1,75 m", "IMC = 70 ÷ 1,75² ≈ 22,9, poids normal"] },
      { title: "180 lb, 5 pi 10 po", steps: ["180 lb = 81,65 kg ; 70 po = 1,778 m", "IMC = 81,65 ÷ 1,778² ≈ 25,8, surpoids"] },
    ],
    assumptions: [
      "Pour les adultes de 18 ans et plus. Pour les enfants et les adolescents, on utilise des percentiles selon l’âge et le sexe.",
      "L’IMC ne mesure pas directement la masse grasse et peut mal classer les sportifs, les personnes âgées et les femmes enceintes.",
      "Ceci ne constitue pas un avis médical. Parlez de votre santé avec un professionnel de santé.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un IMC normal ?", answer: "Pour la plupart des adultes, un IMC compris entre 18,5 et 24,9." },
      {
        question: "L’IMC est-il fiable ?",
        answer: "C’est un outil de dépistage utile à l’échelle d’une population, mais il ne distingue pas les muscles de la graisse et ne tient pas compte de la répartition des graisses.",
      },
      {
        question: "L’IMC s’applique-t-il aux enfants ?",
        answer: "Pas avec les catégories adultes. L’IMC des enfants se compare à des courbes de croissance selon l’âge et le sexe.",
      },
    ],
    sourcesUsedFor: ["Définition de l’IMC adulte et seuils des catégories.", "Facteurs exacts de conversion de la livre et du pouce."],
  },
  text: {
    units: "Unités",
    unitOptions: { metric: "Métriques (kg, cm)", imperial: "Impériales (lb, ft, in)" },
    weight: "Poids",
    height: "Taille",
    heightFt: "Taille (pieds)",
    heightIn: "Taille (pouces)",
    heightZero: "Saisissez une taille supérieure à 0.",
    primary: "Indice de masse corporelle",
    caption: "{category} (catégorie adulte).",
    category: "Catégorie",
    categories: { under: "Insuffisance pondérale", healthy: "Poids normal", over: "Surpoids", obese: "Obésité" },
    healthyRange: "Poids normal pour cette taille",
    range: "{low}–{high} {unit}",
    note: "Catégories adultes : moins de 18,5 insuffisance pondérale, 18,5–24,9 poids normal, 25–29,9 surpoids, 30 ou plus obésité. L’IMC ne s’applique pas de la même façon aux enfants, aux femmes enceintes ni aux personnes très musclées.",
  },
};

export default fr;
