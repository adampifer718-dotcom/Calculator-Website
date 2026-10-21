import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const fr: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Calculateur de moyenne, médiane et mode",
    shortTitle: "Moyenne, médiane, mode",
    summary: "Trouvez la moyenne, la médiane, le mode, l’étendue et la somme d’une liste de nombres.",
    metaTitle: "Calculateur de moyenne, médiane et mode – Tendance centrale",
    metaDescription: "Calculez la moyenne, la médiane, le mode, l’étendue et la somme d’une série. Collez des nombres séparés par des points-virgules, espaces ou retours à la ligne.",
    keywords: ["calcul moyenne", "médiane", "mode statistique", "moyenne médiane mode", "étendue", "série statistique", "tendance centrale"],
    intro: [
      "La moyenne, la médiane et le mode sont trois façons de décrire le centre d’une série de données. Ils peuvent différer fortement lorsque les données sont asymétriques ou comportent des valeurs aberrantes.",
      "Collez ou saisissez vos nombres pour obtenir les trois, ainsi que l’étendue et la somme.",
    ],
    howToUse: [
      "Saisissez vos nombres, séparés par des points-virgules, des espaces ou des retours à la ligne.",
      "Consultez la moyenne, la médiane, le mode, l’étendue et la somme.",
    ],
    formulas: [
      { title: "Moyenne", expression: "moyenne = somme des valeurs ÷ nombre de valeurs", explanation: "La moyenne arithmétique." },
      { title: "Médiane", expression: "La valeur centrale une fois les données triées ; la moyenne des deux valeurs centrales si l’effectif est pair", explanation: "Peu sensible aux valeurs aberrantes." },
      { title: "Mode", expression: "La ou les valeurs les plus fréquentes", explanation: "Une série peut avoir plusieurs modes ou aucun." },
    ],
    examples: [
      {
        title: "2, 4, 4, 5, 7, 9",
        steps: ["Somme = 31 ; moyenne = 31 ÷ 6 ≈ 5,17", "Médiane = (4 + 5) ÷ 2 = 4,5 ; mode = 4"],
      },
      {
        title: "10, 20, 30",
        steps: ["Moyenne = 60 ÷ 3 = 20", "Médiane = 20 ; aucun mode"],
      },
    ],
    assumptions: [
      "Accepte jusqu’à 10 000 nombres.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Quand utiliser la médiane plutôt que la moyenne ?", answer: "Lorsque les données sont asymétriques ou comportent des valeurs aberrantes, comme les revenus ou les prix immobiliers : la médiane est moins influencée par les valeurs extrêmes." },
      { question: "Peut-il y avoir plusieurs modes ?", answer: "Oui. Si plusieurs valeurs sont à égalité pour la fréquence la plus élevée, ce sont toutes des modes." },
      { question: "Et si aucun nombre ne se répète ?", answer: "Dans ce cas, il n’y a pas de mode." },
    ],
    sourcesUsedFor: ["Définitions de la moyenne, de la médiane et du mode."],
  },
  text: {
    data: "Série de données",
    dataHelp: "Séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne (par exemple 1,5 ; 2,25 ; 3). Utilisez la virgule décimale ; une virgule suivie d’une espace sépare aussi les valeurs.",
    errors: {
      empty: "Saisissez au moins un nombre.",
      tooMany: "Saisissez au maximum {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Utilisez la virgule décimale et séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    mean: "Moyenne",
    caption: "{count} valeurs.",
    median: "Médiane",
    mode: "Mode",
    modes: "Modes",
    noMode: "Aucun mode (chaque valeur n’apparaît qu’une fois)",
    range: "Étendue",
    sum: "Somme",
  },
};

export default fr;
