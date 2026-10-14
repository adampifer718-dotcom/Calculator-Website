import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const fr: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Calculateur de temps de doublement",
    shortTitle: "Temps de doublement",
    summary: "Déterminez le temps de doublement (temps de génération) et le taux de croissance d’une population en croissance exponentielle.",
    metaTitle: "Calculateur de temps de doublement – Temps de génération",
    metaDescription: "Calculez le temps de doublement, le nombre de générations et le taux de croissance d’une population, par exemple de bactéries en culture, à partir des effectifs initial et final.",
    keywords: ["temps de doublement", "temps de génération", "croissance bactérienne", "croissance exponentielle", "taux de croissance", "calcul nombre de générations"],
    intro: [
      "Pendant une croissance exponentielle, une population double à un rythme constant. Le temps de doublement (ou temps de génération) est la durée de chaque doublement.",
      "Saisissez les effectifs initial et final ainsi que le temps écoulé entre les deux.",
    ],
    howToUse: [
      "Saisissez l’effectif initial.",
      "Saisissez l’effectif final, qui doit être plus élevé.",
      "Saisissez le temps écoulé et choisissez l’unité.",
      "Consultez le temps de doublement, le nombre de générations et le taux de croissance.",
    ],
    formulas: [
      { title: "Générations", expression: "n = log₂(N ÷ N₀)", explanation: "Le nombre de doublements nécessaires pour passer de N₀ à N." },
      { title: "Temps de doublement", expression: "g = t ÷ n", explanation: "Le temps écoulé divisé par le nombre de générations." },
      { title: "Constante de croissance", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Utilisée dans N = N₀ × e^(k·t)." },
    ],
    examples: [
      {
        title: "De 1 000 à 64 000 cellules en 6 heures",
        steps: ["N ÷ N₀ = 64, donc n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 heure"],
      },
      {
        title: "De 500 à 2 000 en 90 minutes",
        steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minutes"],
      },
    ],
    assumptions: [
      "Suppose une croissance exponentielle constante, comme la phase exponentielle d’une culture ; les phases de latence, stationnaire et de déclin ne sont pas modélisées.",
      "Les effectifs peuvent être des cellules, des unités formant colonie, des mesures de densité optique ou toute grandeur à croissance exponentielle.",
    ],
    faqs: [
      { question: "Qu’est-ce que le temps de génération ?", answer: "Le temps nécessaire pour qu’une population double, souvent environ 20 minutes pour E. coli dans des conditions de laboratoire idéales." },
      { question: "Pourquoi utiliser des logarithmes ?", answer: "La croissance exponentielle multiplie la population par 2 à chaque génération ; log₂ compte donc le nombre de doublements." },
      { question: "Cela fonctionne-t-il pour l’argent ou les populations humaines ?", answer: "Les calculs sont les mêmes pour toute croissance exponentielle régulière, mais les populations réelles croissent rarement à un taux constant." },
    ],
    sourcesUsedFor: ["Temps de génération et croissance exponentielle des populations bactériennes."],
  },
  text: {
    initial: "Effectif initial (N₀)",
    final: "Effectif final (N)",
    time: "Temps écoulé",
    unit: "Unité de temps",
    units: { minutes: "Minutes", hours: "Heures", days: "Jours" },
    unitWords: { minutes: "minutes", hours: "heures", days: "jours" },
    perUnit: { minutes: "par minute", hours: "par heure", days: "par jour" },
    notGrowth: "Pour qu’il y ait croissance, l’effectif final doit être supérieur à l’effectif initial.",
    doubling: "Temps de doublement",
    generations: "Nombre de doublements (générations)",
    rate: "Constante de croissance (k)",
    fold: "Facteur de multiplication (N ÷ N₀)",
    note: "Suppose une croissance exponentielle régulière sur toute la période, comme la phase exponentielle d’une culture bactérienne.",
  },
};

export default fr;
