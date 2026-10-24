import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const values = { zero: "{n} Werte", one: "{n} Wert", two: "{n} Werte", few: "{n} Werte", many: "{n} Werte", other: "{n} Werte" };

const de: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Quartils- und IQR-Rechner",
    shortTitle: "Quartile",
    summary: "Bestimmen Sie Quartile, Interquartilsabstand, Fünf-Punkte-Zusammenfassung, die Grenzen nach der 1,5 × IQR-Regel und Ausreißer eines Datensatzes – mit zwei gängigen Quartilsmethoden.",
    metaTitle: "Quartile und IQR berechnen – Boxplot-Werte und Ausreißer",
    metaDescription: "Bestimmen Sie Q1, Median, Q3 und den Interquartilsabstand einer Zahlenliste, mit Fünf-Punkte-Zusammenfassung, 1,5 × IQR-Grenzen und Ausreißern.",
    keywords: ["Quartile berechnen", "Interquartilsabstand", "IQR berechnen", "Fünf-Punkte-Zusammenfassung", "Q1 Q3", "Ausreißer bestimmen", "Boxplot", "1,5 IQR Regel"],
    intro: [
      "Quartile teilen sortierte Daten in vier etwa gleich große Gruppen. Unterhalb des ersten Quartils Q1 liegt ein Viertel der Werte, unterhalb des Medians Q2 die Hälfte und unterhalb des dritten Quartils Q3 drei Viertel. Der Interquartilsabstand IQR = Q3 − Q1 ist die Streuung der mittleren Hälfte der Daten und wird im Gegensatz zur Spannweite von einigen Extremwerten kaum beeinflusst.",
      "Fügen Sie eine Zahlenliste ein, um den IQR, die Fünf-Punkte-Zusammenfassung für Boxplots und die 1,5 × IQR-Grenzen zu erhalten, die mögliche Ausreißer markieren. Es werden zwei Quartilsmethoden angeboten, weil Lehrbücher, Taschenrechner und Software nicht übereinstimmen; für Mittelwert und Modus verwenden Sie den Mittelwert-, Median- und Modusrechner.",
    ],
    howToUse: [
      "Fügen Sie mindestens 4 Zahlen ein oder tippen Sie sie, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche. Sie müssen nicht sortiert sein.",
      "Wählen Sie die Quartilsmethode: inklusiv wie bei Excel QUARTILE.INKL, NumPy und R, oder Median der Hälften wie beim TI-83 und in vielen Schulbüchern.",
      "Lesen Sie den IQR, die Quartile und die Grenzen ab.",
      "Prüfen Sie in der Ausreißerliste, welche Werte außerhalb der Grenzen liegen.",
    ],
    formulas: [
      { title: "Inklusiv (lineare Interpolation)", expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)", explanation: "x₍₀₎ ≤ x₍₁₎ ≤ … sind die sortierten Werte, ab 0 gezählt; p = 0,25 für Q1 und 0,75 für Q3. Das ist Typ 7 nach Hyndman und Fan, die Voreinstellung in R und NumPy und Excels QUARTILE.INKL." },
      { title: "Median der Hälften", expression: "Q1 = Median der unteren Hälfte\nQ3 = Median der oberen Hälfte", explanation: "Bei einer ungeraden Anzahl von Werten wird der Median selbst aus beiden Hälften herausgelassen. Das ist die Methode der Taschenrechner TI-83 und TI-84." },
      { title: "Interquartilsabstand und Grenzen", expression: "IQR = Q3 − Q1\nuntere Grenze = Q1 − 1,5 × IQR\nobere Grenze = Q3 + 1,5 × IQR", explanation: "Werte außerhalb der Grenzen werden als mögliche Ausreißer markiert; es sind die Punkte, die in einem Boxplot einzeln eingezeichnet werden." },
    ],
    examples: [
      {
        title: "Elf Lieferzeiten in Minuten, inklusive Methode",
        steps: ["n = 11, also h = 10 × 0,25 = 2,5 für Q1: in der Mitte zwischen 17 und 18, Q1 = 17,5", "h = 10 × 0,75 = 7,5 für Q3: in der Mitte zwischen 26 und 29, Q3 = 27,5", "IQR = 27,5 − 17,5 = 10; die Grenzen sind 2,5 und 42,5, also ist 58 ein Ausreißer"],
      },
      {
        title: "Dieselben Daten mit der Methode Median der Hälften",
        steps: ["Der Median ist 22; ohne ihn ergeben sich die Hälften 12, 15, 17, 18, 21 und 24, 26, 29, 31, 58", "Q1 = 17 und Q3 = 29", "IQR = 29 − 17 = 12; die Grenzen sind −1 und 47, also ist 58 weiterhin ein Ausreißer"],
      },
      {
        title: "Acht pH-Messwerte, inklusive Methode",
        steps: ["h = 7 × 0,25 = 1,75: Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325", "h = 7 × 0,75 = 5,25: Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65", "IQR = 6,65 − 4,325 = 2,325, mit den Grenzen 0,8375 und 10,1375: keine Ausreißer"],
      },
    ],
    assumptions: [
      "Für Quartile gibt es keine einheitliche Definition. Die beiden Methoden hier sind die gebräuchlichsten; andere, etwa Excels QUARTILE.EXKL, können bei kleinen Datensätzen leicht abweichende Werte liefern.",
      "Die 1,5 × IQR-Regel ist eine Konvention, um Werte zu markieren, die einen zweiten Blick verdienen. Sie beweist nicht, dass ein Wert fehlerhaft ist.",
      "Es werden bis zu 10.000 Zahlen akzeptiert. Die Ergebnisse werden mit bis zu 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Warum liefern verschiedene Rechner unterschiedliche Quartile?", answer: "Weil es mehrere Definitionen gibt. Für 1, 2, 3, 4, 5, 6 ergibt die inklusive Methode Q1 = 2,25, die Methode Median der Hälften dagegen Q1 = 2. Bei großen Datensätzen stimmen die Methoden weitgehend überein." },
      { question: "Was ist die Fünf-Punkte-Zusammenfassung?", answer: "Minimum, Q1, Median, Q3 und Maximum. Zusammen beschreiben sie Lage, Streuung und Spannweite der Daten, und genau sie werden in einem Boxplot dargestellt." },
      { question: "Ist der Median der Hälften dasselbe wie Tukeys Angelpunkte (Hinges)?", answer: "Nicht ganz. Tukeys Angelpunkte beziehen den Median bei einer ungeraden Anzahl von Werten in beide Hälften ein, während die hier verwendete TI-83-Methode ihn weglässt. Bei einer geraden Anzahl von Werten sind sie gleich." },
    ],
    sourcesUsedFor: [
      "Die inneren Grenzen Q1 − 1,5 × IQR und Q3 + 1,5 × IQR zur Markierung von Ausreißern.",
      "Die verschiedenen Definitionen von Stichprobenquantilen nach Hyndman und Fan (1996), einschließlich der linearen Interpolation.",
    ],
  },
  text: {
    data: "Daten",
    dataHelp: "Mindestens 4 Zahlen, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche (zum Beispiel 3,2; 4,1; 4,4; 5). Verwenden Sie das Dezimalkomma; ein Komma mit folgendem Leerzeichen trennt ebenfalls Werte. Die Reihenfolge spielt keine Rolle.",
    errors: {
      empty: "Geben Sie mindestens 4 Zahlen ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Verwenden Sie das Dezimalkomma und trennen Sie die Werte durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    tooFew: "Für Quartile sind mindestens 4 Zahlen nötig; Sie haben {count} eingegeben.",
    method: "Quartilsmethode",
    methods: {
      inclusive: "Inklusiv, lineare Interpolation (Excel QUARTILE.INKL, NumPy, R Typ 7)",
      exclusive: "Median der Hälften, ohne Median (wie TI-83)",
    },
    methodHelp: "Lehrbücher und Programme definieren Quartile leicht unterschiedlich. Bei kleinen Datensätzen können die Ergebnisse abweichen.",
    iqr: "Interquartilsabstand (IQR)",
    caption: "Q3 − Q1 für {count}, nach der Methode „{method}“.",
    methodShort: { inclusive: "inklusiv", exclusive: "Median der Hälften" },
    valueCount: values,
    min: "Minimum",
    q1: "Erstes Quartil (Q1)",
    median: "Median (Q2)",
    q3: "Drittes Quartil (Q3)",
    max: "Maximum",
    lowerFence: "Untere Grenze (Q1 − 1,5 × IQR)",
    upperFence: "Obere Grenze (Q3 + 1,5 × IQR)",
    outliers: "Ausreißer",
    noOutliers: "Keine",
    moreOutliers: "{list} und {count} weitere",
    outlierCount: "Anzahl der Ausreißer",
    summaryTable: "Fünf-Punkte-Zusammenfassung",
    colStatistic: "Kennzahl",
    colValue: "Wert",
    noOutliersNote: "Kein Wert liegt außerhalb der Grenzen, die Daten haben nach der 1,5 × IQR-Regel also keine Ausreißer.",
    outliersNote: "Werte unterhalb der unteren oder oberhalb der oberen Grenze werden als mögliche Ausreißer markiert. Prüfen Sie sie, bevor Sie etwas entfernen: Ein Ausreißer kann eine echte, wichtige Beobachtung sein.",
  },
};

export default de;
