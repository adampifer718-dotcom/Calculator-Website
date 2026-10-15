import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const fr: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Calculateur de note finale",
    shortTitle: "Note finale",
    summary: "Calculez la note dont vous avez besoin à l’examen final pour obtenir la note globale visée dans un cours.",
    metaTitle: "Calculateur de note finale – Note requise à l’examen final",
    metaDescription:
      "Calculez la note nécessaire à l’examen final pour atteindre une note de cours visée, à partir de votre note actuelle et du poids de l’examen final.",
    keywords: ["note finale", "examen final", "quelle note au final", "note nécessaire", "moyenne du cours", "note pondérée", "note d’examen"],
    intro: [
      "En fin de cours, la grande question est souvent de savoir quelle note il vous faut à l’examen final. Votre note globale est une moyenne pondérée : votre note actuelle en représente une partie et l’examen final le reste.",
      "Saisissez votre note actuelle, le poids de l’examen final et la note globale que vous visez. Le calculateur donne la note à obtenir à l’examen final pour y parvenir, ainsi que la meilleure et la pire note globale possibles.",
    ],
    howToUse: [
      "Saisissez votre note actuelle dans le cours, en pourcentage.",
      "Saisissez le poids de l’examen final, tel qu’indiqué dans votre plan de cours.",
      "Saisissez la note globale que vous souhaitez obtenir.",
      "Lisez la note nécessaire à l’examen final, ainsi que la note globale avec un score parfait ou nul.",
    ],
    formulas: [
      { title: "Note nécessaire à l’examen final", expression: "nécessaire = (visée − actuelle × (1 − w)) ÷ w", explanation: "w est le poids de l’examen final exprimé en fraction (30 % = 0,3). Les notes sont des pourcentages." },
      { title: "Note globale", expression: "globale = actuelle × (1 − w) + final × w", explanation: "La note du cours comme moyenne pondérée de votre note actuelle et de l’examen final." },
    ],
    examples: [
      {
        title: "78 % actuellement, examen final à 25 %, objectif 80 %",
        steps: ["w = 0,25, donc la note actuelle compte pour 0,75", "nécessaire = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86 %"],
      },
      {
        title: "91 % actuellement, examen final à 40 %, objectif 90 %",
        steps: ["nécessaire = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5 %"],
      },
      {
        title: "65 % actuellement, examen final à 20 %, objectif 75 %",
        steps: ["nécessaire = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115 %", "Plus de 100 % : cet objectif exige des points bonus"],
      },
    ],
    assumptions: [
      "Votre note actuelle reflète déjà toutes les autres parties du cours, qui comptent ensemble pour 100 % moins le poids de l’examen final.",
      "Les notes sont des pourcentages. Les seuils des notes en lettres, les arrondis et les ajustements de notes varient selon l’enseignant et ne sont pas appliqués.",
      "Certains cours retirent la note la plus basse, laissent l’examen final remplacer un partiel ou exigent une note minimale à l’examen final. Vérifiez ces règles dans votre plan de cours.",
    ],
    faqs: [
      {
        question: "Comment connaître ma note actuelle ?",
        answer: "Le site du cours ou votre enseignant l’indique généralement. Sinon, faites la moyenne pondérée de toutes vos notes jusqu’ici, avec les coefficients du plan de cours, sans compter l’examen final.",
      },
      {
        question: "Que signifie un besoin de plus de 100 % ?",
        answer: "Même un score parfait à l’examen final ne porterait pas votre note globale jusqu’à l’objectif. Il reste peut-être atteignable avec des points bonus ; sinon, visez un objectif plus bas.",
      },
      {
        question: "Et si le résultat est de 0 % ou moins ?",
        answer: "Votre objectif est alors déjà assuré : même sans aucun point à l’examen final, votre note globale reste égale ou supérieure à l’objectif. Vérifiez que vous pouvez ne pas passer l’examen, car certains cours exigent de s’y présenter.",
      },
    ],
    sourcesUsedFor: ["Comment une note de cours est la moyenne pondérée des éléments listés dans le plan de cours, examen final compris."],
  },
  text: {
    current: "Note actuelle",
    currentHelp: "Votre note dans le cours jusqu’ici, avant l’examen final.",
    weight: "Poids de l’examen final",
    weightHelp: "La part de la note globale que représente l’examen final, en pourcentage. Consultez votre plan de cours.",
    desired: "Note globale souhaitée",
    weightTooHigh: "L’examen final doit valoir moins de 100 % de la note ; sinon, votre note actuelle ne compte pas.",
    needed: "Note nécessaire à l’examen final",
    caption: "Pour terminer avec {desired} lorsque l’examen final compte pour {weight} et que vous avez {current} actuellement.",
    ifFull: "Note globale si vous obtenez 100 % à l’examen final",
    ifZero: "Note globale si vous obtenez 0 % à l’examen final",
    currentShare: "Part de la note actuelle dans la note globale",
    notes: {
      over: "Il vous faudrait plus de 100 % à l’examen final. Ce n’est possible qu’avec des points bonus ; sinon, cet objectif est hors de portée.",
      secured: "Cette note vous est déjà acquise : même un score de 0 % à l’examen final vous maintient au niveau de votre objectif ou au-dessus.",
      rounding: "Les enseignants peuvent arrondir ou ajuster les notes, ou pondérer l’examen final différemment. Consultez votre plan de cours.",
    },
  },
};

export default fr;
