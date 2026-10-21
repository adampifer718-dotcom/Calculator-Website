import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const de: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Verdopplungszeitrechner",
    shortTitle: "Verdopplungszeit",
    summary: "Ermitteln Sie die Verdopplungszeit (Generationszeit) und die Wachstumsrate einer exponentiell wachsenden Population.",
    metaTitle: "Verdopplungszeitrechner – Generationszeit und Wachstum",
    metaDescription:
      "Berechnen Sie aus Anfangs- und Endzahl die Verdopplungszeit, die Zahl der Generationen und die Wachstumsrate, etwa von Bakterien in einer Kultur.",
    keywords: ["Verdopplungszeit berechnen", "Generationszeit", "Bakterienwachstum", "exponentielles Wachstum", "Wachstumsrate", "Wachstumskonstante", "Biologie Rechner"],
    intro: [
      "Bei exponentiellem Wachstum verdoppelt sich eine Population in gleichbleibenden Abständen. Die Verdopplungszeit (oder Generationszeit) ist die Dauer einer solchen Verdopplung.",
      "Geben Sie die Anfangs- und Endzahl sowie die dazwischen verstrichene Zeit ein.",
    ],
    howToUse: [
      "Geben Sie die Anfangszahl ein.",
      "Geben Sie die Endzahl ein; sie muss größer sein.",
      "Geben Sie die verstrichene Zeit ein und wählen Sie die Einheit.",
      "Lesen Sie Verdopplungszeit, Generationen und Wachstumsrate ab.",
    ],
    formulas: [
      { title: "Generationen", expression: "n = log₂(N ÷ N₀)", explanation: "Die Anzahl der Verdopplungen, um von N₀ auf N zu kommen." },
      { title: "Verdopplungszeit", expression: "g = t ÷ n", explanation: "Verstrichene Zeit geteilt durch die Anzahl der Generationen." },
      { title: "Wachstumskonstante", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Wird in N = N₀ × e^(k·t) verwendet." },
    ],
    examples: [
      { title: "1.000 Zellen auf 64.000 in 6 Stunden", steps: ["N ÷ N₀ = 64, also n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 Stunde"] },
      { title: "500 auf 2.000 in 90 Minuten", steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 Minuten"] },
    ],
    assumptions: [
      "Es wird ein gleichbleibendes exponentielles Wachstum angenommen, etwa in der log-Phase einer Kultur; Lag-, stationäre und Absterbephase werden nicht modelliert.",
      "Gezählt werden können Zellen, koloniebildende Einheiten, optische Dichte als Näherung oder jede andere exponentiell wachsende Größe.",
    ],
    faqs: [
      {
        question: "Was ist die Generationszeit?",
        answer: "Die Zeit, in der sich eine Population verdoppelt – bei E. coli unter idealen Laborbedingungen oft etwa 20 Minuten.",
      },
      {
        question: "Warum werden Logarithmen verwendet?",
        answer: "Exponentielles Wachstum verdoppelt die Population in jeder Generation, daher zählt log₂ die Verdopplungen.",
      },
      {
        question: "Funktioniert das auch für Geld oder menschliche Bevölkerungen?",
        answer: "Die Mathematik ist für jedes gleichmäßige exponentielle Wachstum dieselbe, doch reale Bevölkerungen wachsen selten mit konstanter Rate.",
      },
    ],
    sourcesUsedFor: ["Generationszeit und exponentielles Wachstum von Bakterienpopulationen."],
  },
  text: {
    initial: "Anfangszahl (N₀)",
    final: "Endzahl (N)",
    time: "Verstrichene Zeit",
    unit: "Zeiteinheit",
    units: { minutes: "Minuten", hours: "Stunden", days: "Tage" },
    unitWords: { minutes: "Minuten", hours: "Stunden", days: "Tage" },
    perUnit: { minutes: "pro Minute", hours: "pro Stunde", days: "pro Tag" },
    notGrowth: "Für Wachstum muss die Endzahl größer als die Anfangszahl sein.",
    doubling: "Verdopplungszeit",
    generations: "Anzahl der Verdopplungen (Generationen)",
    rate: "Wachstumskonstante (k)",
    fold: "Vervielfachung (N ÷ N₀)",
    note: "Setzt ein gleichmäßiges exponentielles Wachstum über den gesamten Zeitraum voraus, etwa in der log-Phase einer Bakterienkultur.",
  },
};

export default de;
