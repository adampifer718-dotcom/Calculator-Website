import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const de: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Mittelwert-, Median- und Modusrechner",
    shortTitle: "Mittelwert, Median, Modus",
    summary: "Ermitteln Sie Mittelwert, Median, Modus, Spannweite und Summe einer Zahlenliste.",
    metaTitle: "Mittelwert-, Median- und Modusrechner – Lageparameter",
    metaDescription:
      "Berechnen Sie Mittelwert (Durchschnitt), Median, Modus, Spannweite und Summe eines Datensatzes. Fügen Sie Zahlen getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche ein.",
    keywords: ["Mittelwert berechnen", "Median berechnen", "Modus berechnen", "Durchschnitt berechnen", "Spannweite", "Lageparameter", "Statistik Rechner"],
    intro: [
      "Mittelwert, Median und Modus sind drei Möglichkeiten, die Mitte eines Datensatzes zu beschreiben. Bei schiefen Verteilungen oder Ausreißern können sie stark voneinander abweichen.",
      "Fügen Sie Ihre Zahlen ein oder tippen Sie sie, um alle drei Werte sowie Spannweite und Summe zu sehen.",
    ],
    howToUse: [
      "Geben Sie Ihre Zahlen ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      "Lesen Sie Mittelwert, Median, Modus, Spannweite und Summe ab.",
    ],
    formulas: [
      { title: "Mittelwert", expression: "Mittelwert = Summe der Werte ÷ Anzahl der Werte", explanation: "Das arithmetische Mittel." },
      {
        title: "Median",
        expression: "Der mittlere Wert der sortierten Daten; bei gerader Anzahl der Durchschnitt der beiden mittleren Werte",
        explanation: "Unempfindlich gegenüber Ausreißern.",
      },
      { title: "Modus", expression: "Der Wert bzw. die Werte, die am häufigsten vorkommen", explanation: "Ein Datensatz kann mehrere Modi oder keinen haben." },
    ],
    examples: [
      { title: "2, 4, 4, 5, 7, 9", steps: ["Summe = 31; Mittelwert = 31 ÷ 6 ≈ 5,17", "Median = (4 + 5) ÷ 2 = 4,5; Modus = 4"] },
      { title: "10, 20, 30", steps: ["Mittelwert = 60 ÷ 3 = 20", "Median = 20; kein Modus"] },
    ],
    assumptions: ["Es werden bis zu 10.000 Zahlen akzeptiert.", "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt."],
    faqs: [
      {
        question: "Wann sollte ich den Median statt des Mittelwerts verwenden?",
        answer: "Wenn die Daten schief verteilt sind oder Ausreißer enthalten, etwa bei Einkommen oder Immobilienpreisen; der Median wird von Extremwerten weniger beeinflusst.",
      },
      { question: "Kann es mehr als einen Modus geben?", answer: "Ja. Wenn mehrere Werte gleich häufig am häufigsten vorkommen, sind sie alle Modi." },
      { question: "Was ist, wenn sich keine Zahl wiederholt?", answer: "Dann gibt es keinen Modus." },
    ],
    sourcesUsedFor: ["Definitionen von Mittelwert, Median und Modus."],
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
    mean: "Mittelwert (Durchschnitt)",
    caption: "{count} Werte.",
    median: "Median",
    mode: "Modus",
    modes: "Modi",
    noMode: "Kein Modus (alle Werte kommen nur einmal vor)",
    range: "Spannweite",
    sum: "Summe",
  },
};

export default de;
