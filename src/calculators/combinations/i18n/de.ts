import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const digits = { zero: "{n} Stellen", one: "{n} Stelle", two: "{n} Stellen", few: "{n} Stellen", many: "{n} Stellen", other: "{n} Stellen" };

const de: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Rechner für Permutationen und Kombinationen",
    shortTitle: "Permutationen & Kombinationen",
    summary: "Zählen Sie exakt, auf wie viele Arten sich r von n Objekten auswählen oder anordnen lassen: nCr, nPr und beide Anzahlen mit Wiederholung.",
    metaTitle: "Rechner für Permutationen und Kombinationen – nCr, nPr",
    metaDescription: "Berechnen Sie nCr und nPr exakt für n bis 10.000, dazu Kombinationen und Permutationen mit Wiederholung – riesige Ergebnisse in wissenschaftlicher Notation.",
    keywords: ["Permutationen berechnen", "Kombinationen berechnen", "nCr", "nPr", "n über k", "Binomialkoeffizient", "Kombination mit Wiederholung", "Kombinatorik", "Fakultät"],
    intro: [
      "Wie viele verschiedene 4er-Ausschüsse kann ein Verein mit 12 Mitgliedern bilden? Auf wie viele Arten lassen sich 3 Preise unter 25 Teilnehmenden vergeben? Solche Fragen sind Abzählprobleme, und die Antwort hängt davon ab, ob die Reihenfolge eine Rolle spielt.",
      "Eine Kombination zählt Auswahlen, bei denen die Reihenfolge keine Rolle spielt: Der Ausschuss {Ana, Ben, Cy} ist in jeder Reihenfolge derselbe. Eine Permutation zählt Anordnungen, bei denen die Reihenfolge zählt: erster, zweiter und dritter Preis sind verschiedene Ergebnisse. Dieser Rechner liefert beide exakt, dazu die Varianten, bei denen Objekte mehrfach gewählt werden können.",
    ],
    howToUse: [
      "Geben Sie n ein, die Anzahl der verschiedenen Objekte, aus denen Sie wählen (0 bis 10.000).",
      "Geben Sie r ein, wie viele Sie auswählen (0 bis n).",
      "Lesen Sie nCr für ungeordnete Auswahlen und nPr für geordnete Anordnungen ab.",
      "Verwenden Sie die Ergebnisse mit Wiederholung, wenn dasselbe Objekt erneut gewählt werden kann, etwa Eiskugeln (Kombinationen) oder Ziffern einer PIN (Permutationen).",
    ],
    formulas: [
      { title: "Kombinationen", expression: "nCr = n! ÷ (r! × (n − r)!)", explanation: "Auswahlen von r Objekten aus n ohne Beachtung der Reihenfolge." },
      { title: "Permutationen", expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)", explanation: "Geordnete Anordnungen von r Objekten aus n. nPr = nCr × r!" },
      { title: "Kombinationen mit Wiederholung", expression: "C(n + r − 1, r)", explanation: "Auswahlen von r Objekten aus n Sorten, wenn eine Sorte mehrfach gewählt werden kann (die Abzählung „Stars and Bars“)." },
      { title: "Permutationen mit Wiederholung", expression: "nʳ", explanation: "Geordnete Folgen der Länge r, bei denen jede Position jedes der n Objekte sein kann." },
    ],
    examples: [
      {
        title: "4er-Ausschüsse aus einem Verein mit 12 Mitgliedern",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11.880 ÷ 24", "= 495 verschiedene Ausschüsse"],
      },
      {
        title: "Gold, Silber und Bronze unter 25 Teilnehmenden",
        steps: ["Bei Medaillen zählt die Reihenfolge: 25P3 = 25 × 24 × 23 = 13.800", "Bekämen die 3 Gewinner gleiche Preise: 25C3 = 13.800 ÷ 3! = 2.300", "Das Hauptergebnis zeigt 2.300; die Anzahl der Permutationen steht darunter"],
      },
      {
        title: "100 von 200 Objekten auswählen",
        steps: ["200C100 = 200! ÷ (100! × 100!)", "Der exakte Wert hat 59 Stellen und beginnt mit 9.054.851.465…", "Angezeigt als 9,054851 × 10⁵⁸ (59 Stellen)"],
      },
    ],
    assumptions: [
      "Die n Objekte sind voneinander verschieden. Für Anordnungen von Objekten mit Doppelungen (etwa die Buchstaben von BANANA) braucht man eine andere Formel.",
      "Alle vier Ergebnisse werden exakt mit ganzzahliger Arithmetik berechnet. Ergebnisse mit mehr als 30 Stellen werden in wissenschaftlicher Notation angezeigt, auf 7 signifikante Stellen gerundet und mit der vollständigen Stellenzahl.",
      "Per Konvention gilt 0! = 1, also nC0 = nP0 = 1: Nichts auszuwählen zählt als eine Möglichkeit.",
      "n ist auf 10.000 begrenzt, damit die Berechnung schnell bleibt; nʳ kann dann bis zu 40.001 Stellen haben.",
    ],
    faqs: [
      { question: "Woran erkenne ich, ob ich eine Permutation oder eine Kombination brauche?", answer: "Fragen Sie, ob das Vertauschen zweier ausgewählter Objekte ein anderes Ergebnis ergibt. Wenn ja, wie bei Sitzplätzen, Ranglisten oder Passwörtern, verwenden Sie eine Permutation. Wenn nicht, wie bei einer Hand Spielkarten oder einer Gruppe von Personen, verwenden Sie eine Kombination." },
      { question: "Warum ist nCr gleich nC(n − r)?", answer: "r Objekte zum Mitnehmen auszuwählen ist dasselbe, wie n − r Objekte zum Zurücklassen auszuwählen. Zum Beispiel entspricht die Wahl von 3 aus 10 Personen für ein Team (120 Möglichkeiten) der Wahl der 7, die nicht dabei sind (ebenfalls 120 Möglichkeiten)." },
      { question: "Was bedeutet „mit Wiederholung“?", answer: "Es bedeutet, dass ein Objekt mehr als einmal gewählt werden kann. Eine 4-stellige PIN nutzt Permutationen mit Wiederholung: 10⁴ = 10.000 Codes. 3 Kugeln aus 5 Eissorten zu wählen, wobei zwei Kugeln dieselbe Sorte haben dürfen, nutzt Kombinationen mit Wiederholung: C(7, 3) = 35." },
    ],
    sourcesUsedFor: ["Das Multiplikationsprinzip und die Formeln für Permutationen und Kombinationen von n verschiedenen Objekten."],
  },
  text: {
    n: "Anzahl der Objekte (n)",
    nHelp: "Eine ganze Zahl von 0 bis 10.000.",
    r: "Ausgewählte Objekte (r)",
    rHelp: "Eine ganze Zahl von 0 bis n.",
    rTooLarge: "r darf nicht größer als n ({n}) sein. Sie können nicht mehr verschiedene Objekte auswählen, als vorhanden sind.",
    combinations: "Kombinationen, nCr (ohne Reihenfolge)",
    permutations: "Permutationen, nPr (mit Reihenfolge)",
    combinationsRepeat: "Kombinationen mit Wiederholung, C(n + r − 1, r)",
    permutationsRepeat: "Permutationen mit Wiederholung, nʳ",
    digits,
    large: "{value} ({digits})",
    caption: "Möglichkeiten, {r} von {n} Objekten ohne Beachtung der Reihenfolge auszuwählen.",
    largeNote: "Ergebnisse mit mehr als 30 Stellen werden in wissenschaftlicher Notation angezeigt, auf 7 signifikante Stellen gerundet und mit der exakten Stellenzahl.",
    zeroRepeat: "Mit n = 0 und r = 0 gibt es genau eine Möglichkeit, nichts auszuwählen, daher ist jede Anzahl 1.",
  },
};

export default de;
