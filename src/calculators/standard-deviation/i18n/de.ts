import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const de: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Standardabweichungsrechner",
    shortTitle: "Standardabweichung",
    summary: "Berechnen Sie die Standardabweichung einer Stichprobe oder Grundgesamtheit, die Varianz und den Standardfehler eines Datensatzes.",
    metaTitle: "Standardabweichungsrechner – Stichprobe und Grundgesamtheit",
    metaDescription:
      "Berechnen Sie aus einer Zahlenliste die Standardabweichung (Stichprobe oder Grundgesamtheit), Varianz, Mittelwert und Standardfehler.",
    keywords: ["Standardabweichung berechnen", "Varianz berechnen", "Stichprobenstandardabweichung", "empirische Standardabweichung", "Streuung", "Standardfehler", "Statistik Rechner"],
    intro: [
      "Die Standardabweichung misst, wie stark Werte um den Mittelwert streuen. Ein kleiner Wert bedeutet, dass die Daten eng beieinanderliegen, ein großer, dass sie weit gestreut sind.",
      "Wählen Sie „Stichprobe“, wenn Ihre Daten nur ein Teil einer größeren Gruppe sind – das ist der Normalfall.",
    ],
    howToUse: [
      "Geben Sie Ihre Zahlen ein, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      "Wählen Sie Stichprobe oder Grundgesamtheit.",
      "Lesen Sie Standardabweichung, Varianz, Mittelwert und Standardfehler ab.",
    ],
    formulas: [
      {
        title: "Standardabweichung der Stichprobe",
        expression: "s = √(Σ(x − x̄)² ÷ (n − 1))",
        explanation: "Die Division durch n − 1 (Bessel-Korrektur) gleicht die Verzerrung aus, die beim Schätzen der Streuung aus einer Stichprobe entsteht.",
      },
      { title: "Standardabweichung der Grundgesamtheit", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "Verwenden Sie diese Formel, wenn Ihnen alle Mitglieder der Gruppe vorliegen." },
      { title: "Standardfehler des Mittelwerts", expression: "SE = s ÷ √n", explanation: "Gibt an, wie genau der Stichprobenmittelwert den Mittelwert der Grundgesamtheit schätzt." },
    ],
    examples: [
      { title: "Grundgesamtheit: 2, 4, 4, 4, 5, 5, 7, 9", steps: ["Mittelwert = 5; die Summe der quadrierten Abweichungen ist 32", "σ = √(32 ÷ 8) = 2"] },
      { title: "Stichprobe: 2, 4, 4, 4, 5, 5, 7, 9", steps: ["Die Summe der quadrierten Abweichungen ist 32", "s = √(32 ÷ 7) ≈ 2,138"] },
    ],
    assumptions: [
      "Es werden bis zu 10.000 Zahlen akzeptiert. Eine Stichprobe benötigt mindestens zwei.",
      "Es wird ein numerisch stabiles Zwei-Durchlauf-Verfahren verwendet.",
      "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      {
        question: "Sollte ich die Standardabweichung der Stichprobe oder der Grundgesamtheit verwenden?",
        answer: "Verwenden Sie die Stichprobe (n − 1), wenn Ihre Daten eine Stichprobe aus einer größeren Gruppe sind, und die Grundgesamtheit (n) nur, wenn Ihnen die gesamte Gruppe vorliegt.",
      },
      { question: "Was ist die Varianz?", answer: "Das Quadrat der Standardabweichung, in quadrierten Einheiten." },
      { question: "Was bedeutet eine Standardabweichung von 0?", answer: "Alle Werte sind identisch." },
    ],
    sourcesUsedFor: ["Formeln für die Standardabweichung von Stichprobe und Grundgesamtheit."],
  },
  text: {
    data: "Datensatz",
    dataHelp: "Trennen Sie die Werte durch Semikolons, Leerzeichen oder Zeilenumbrüche (zum Beispiel 1,5; 2,25; 3). Verwenden Sie das Dezimalkomma; ein Komma mit folgendem Leerzeichen trennt ebenfalls Werte.",
    errors: {
      empty: "Geben Sie mindestens eine Zahl ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Verwenden Sie das Dezimalkomma und trennen Sie die Werte durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    kind: "Art der Daten",
    kinds: { sample: "Stichprobe (durch n − 1 teilen)", population: "Gesamte Grundgesamtheit (durch n teilen)" },
    needTwo: "Eine Stichprobe benötigt mindestens zwei Werte.",
    sampleSd: "Standardabweichung der Stichprobe (s)",
    populationSd: "Standardabweichung der Grundgesamtheit (σ)",
    sampleVariance: "Varianz der Stichprobe (s²)",
    populationVariance: "Varianz der Grundgesamtheit (σ²)",
    mean: "Mittelwert",
    count: "Anzahl (n)",
    standardError: "Standardfehler des Mittelwerts",
  },
};

export default de;
