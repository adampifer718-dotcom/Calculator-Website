import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const fr: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Calculateur de note d’examen",
    shortTitle: "Note d’examen",
    summary: "Transformez un nombre de bonnes réponses ou de points en pourcentage et en note sous forme de lettre.",
    metaTitle: "Calculateur de note d’examen – Pourcentage et note en lettre",
    metaDescription: "Obtenez le pourcentage de réussite et la note en lettre d’un examen à partir du nombre de bonnes ou de mauvaises réponses, ou des points obtenus sur le total possible.",
    keywords: ["calcul note examen", "pourcentage de réussite", "note sur 100", "calcul note contrôle", "note en lettre", "résultat de test"],
    intro: [
      "Indiquez le nombre de questions ou de points de l’épreuve et combien vous en avez réussi ou manqué. Le calculateur affiche le pourcentage obtenu et la note en lettre correspondante.",
      "Il convient aux interrogations, aux examens et aux devoirs notés en points.",
    ],
    howToUse: [
      "Saisissez le nombre total de questions ou de points.",
      "Indiquez si vous connaissez le nombre de bonnes réponses ou de mauvaises réponses.",
      "Saisissez ce nombre et consultez le pourcentage et la note en lettre.",
    ],
    formulas: [
      { title: "Pourcentage obtenu", expression: "Note % = points obtenus ÷ total des points × 100", explanation: "Points obtenus = total − points perdus lorsque vous connaissez le nombre de mauvaises réponses." },
      { title: "Note en lettre", expression: "A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F < 60 %", explanation: "Un barème courant aux États-Unis. Les établissements peuvent utiliser des notes avec plus et moins ou d’autres seuils." },
    ],
    examples: [
      {
        title: "45 bonnes réponses sur 50",
        steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90 %, soit un A"],
      },
      {
        title: "7 mauvaises réponses sur 30",
        steps: ["Bonnes réponses = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67 %, soit un C"],
      },
    ],
    assumptions: [
      "Toutes les questions ont la même valeur, sauf si vous saisissez des points.",
      "Les notes en lettre suivent le barème courant aux États-Unis ; vérifiez le système de notation de votre établissement.",
      "Les points partiels peuvent être saisis sous forme décimale.",
    ],
    faqs: [
      { question: "Comment calculer le pourcentage d’un examen ?", answer: "Divisez les points obtenus par le total possible, puis multipliez par 100. 18 sur 20 donne 90 %." },
      { question: "À quelle note correspond 75 % ?", answer: "Selon le barème courant aux États-Unis, 75 % correspond à un C." },
      { question: "Puis-je utiliser des points plutôt que des questions ?", answer: "Oui. Saisissez le total des points et les points obtenus ; la formule est la même." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Nombre total de questions ou de points",
    mode: "Je connais le nombre de",
    modes: { correct: "Bonnes réponses (points obtenus)", wrong: "Mauvaises réponses (points perdus)" },
    correct: "Bonnes réponses ou points obtenus",
    wrong: "Mauvaises réponses ou points perdus",
    overTotal: "Ne peut pas dépasser le total.",
    grade: "Note",
    caption: "{earned} sur {total}.",
    letter: "Note en lettre (barème de A à F)",
    lost: "Points perdus",
    note: "Les notes en lettre suivent le barème courant A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F en dessous de 60 %. Le barème de votre établissement peut différer.",
  },
};

export default fr;
