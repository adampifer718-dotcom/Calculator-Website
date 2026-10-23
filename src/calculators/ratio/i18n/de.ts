import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const de: CalculatorTranslation<RatioText> = {
  content: {
    title: "Verhältnisrechner",
    shortTitle: "Verhältnis",
    summary: "Kürzen Sie ein Verhältnis aus zwei oder drei Gliedern, lösen Sie eine Verhältnisgleichung nach einem fehlenden Glied auf oder teilen Sie einen Betrag in einem bestimmten Verhältnis auf.",
    metaTitle: "Verhältnisrechner – kürzen, auflösen und aufteilen",
    metaDescription: "Kürzen Sie Verhältnisse mit ganzen oder Dezimalzahlen, finden Sie das fehlende Glied in A : B = C : x oder teilen Sie einen Betrag im Verhältnis auf.",
    keywords: ["Verhältnis berechnen", "Verhältnis kürzen", "Verhältnisgleichung", "Dreisatz", "fehlendes Glied", "im Verhältnis aufteilen", "Verhältnis 1 zu n"],
    intro: [
      "Ein Verhältnis vergleicht Mengen: 3 : 4 bedeutet drei Teile des einen auf je vier Teile des anderen. Verhältnisse begegnen Ihnen in Rezepten, beim Anmischen von Beton oder Farbe, bei Kartenmaßstäben, Bildschirmformaten und beim Aufteilen von Kosten.",
      "Dieser Rechner erledigt die drei häufigsten Aufgaben. Er kürzt ein Verhältnis aus zwei oder drei Gliedern auf die kleinsten ganzen Zahlen, auch wenn die Glieder Dezimalzahlen sind; er löst eine Verhältnisgleichung A : B = C : x nach dem fehlenden Glied auf; und er teilt einen Betrag in Anteile auf, die einem Verhältnis folgen.",
    ],
    howToUse: [
      "Wählen Sie die Aufgabe.",
      "Zum Kürzen oder Aufteilen geben Sie zwei oder drei positive Glieder ein. Lassen Sie das dritte Glied für ein zweiteiliges Verhältnis leer.",
      "Um ein fehlendes Glied zu finden, geben Sie A, B und C aus A : B = C : x ein.",
      "Zum Aufteilen geben Sie zusätzlich den aufzuteilenden Betrag ein und lesen dann den Anteil jedes Teils in der Tabelle ab.",
    ],
    formulas: [
      { title: "Kürzen", expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)", explanation: "g ist der größte gemeinsame Teiler der Glieder. Dezimalzahlen werden zuerst mit derselben Zehnerpotenz multipliziert, damit sie ganzzahlig werden: Aus 1,5 : 2,25 wird 150 : 225." },
      { title: "Fehlendes Glied", expression: "A : B = C : x  ⇒  x = B × C ÷ A", explanation: "Zwei Verhältnisse sind gleich, wenn ihre Kreuzprodukte gleich sind: A × x = B × C. A darf nicht 0 sein." },
      { title: "Betrag aufteilen", expression: "Anteil von Teil i = Betrag × Glied i ÷ (Summe der Glieder)", explanation: "Jeder Teil erhält den Bruchteil des Gesamtbetrags, den sein Glied an der Summe aller Glieder ausmacht." },
      { title: "Form 1 : n", expression: "A : B = 1 : (B ÷ A)", explanation: "Teilt man jedes Glied durch das erste, erhält man ein Einheitsverhältnis, praktisch für Maßstäbe und Mischanleitungen." },
    ],
    examples: [
      {
        title: "1,5 : 2,25 : 3 kürzen",
        steps: ["Jedes Glied mit 100 multiplizieren: 150 : 225 : 300", "Der größte gemeinsame Teiler ist 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Rezept umrechnen: 4 Eier brauchen 7 dl Milch; wie viel Milch für 10 Eier?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl Milch"],
      },
      {
        title: "700 im Verhältnis 2 : 3 : 5 aufteilen",
        steps: ["Teile insgesamt = 2 + 3 + 5 = 10, ein Teil ist also 700 ÷ 10 = 70", "Anteile: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350", "Probe: 140 + 210 + 350 = 700"],
      },
    ],
    assumptions: [
      "Die Glieder zum Kürzen und Aufteilen müssen positiv sein. Dezimalzahlen werden exakt aus den eingegebenen Ziffern verarbeitet, mit bis zu 40 Ziffern pro Glied.",
      "Der Modus für das fehlende Glied akzeptiert beliebige Zahlen, auch negative, solange A nicht 0 ist.",
      "Anteile werden mit bis zu 4 Nachkommastellen angezeigt und nicht auf ganze Einheiten gerundet. Bei Geld oder Personen müssen Sie den letzten Anteil daher eventuell von Hand anpassen.",
    ],
    faqs: [
      { question: "Wie kürze ich ein Verhältnis mit Dezimalzahlen?", answer: "Multiplizieren Sie alle Glieder mit derselben Zehnerpotenz, bis sie ganzzahlig sind, und teilen Sie dann durch ihren größten gemeinsamen Teiler. Aus 0,6 : 0,8 wird 6 : 8, gekürzt 3 : 4." },
      { question: "Was ist der Unterschied zwischen einem Verhältnis und einem Bruch?", answer: "Ein Bruch vergleicht einen Teil mit dem Ganzen, ein Verhältnis kann dagegen Teile untereinander vergleichen. In einer Klasse mit 12 Mädchen und 18 Jungen ist das Verhältnis von Mädchen zu Jungen 2 : 3, der Anteil der Mädchen aber 12/30 = 2/5." },
      { question: "Wie teile ich eine Rechnung in einem Verhältnis auf?", answer: "Wählen Sie „Betrag im Verhältnis aufteilen“ und geben Sie die Rechnung und den Verhältnisanteil jeder Person ein. Bei 90 im Verhältnis 1 : 2 sind das 3 Teile zu je 30, die Anteile betragen also 30 und 60." },
    ],
    sourcesUsedFor: ["Definition einer Verhältnisgleichung und ihre Auflösung nach einem unbekannten Glied."],
  },
  text: {
    mode: "Aufgabe",
    modes: {
      simplify: "Verhältnis kürzen",
      missing: "Fehlendes Glied finden (A : B = C : x)",
      divide: "Betrag im Verhältnis aufteilen",
    },
    termA: "Erstes Glied (A)",
    termB: "Zweites Glied (B)",
    termC: "Drittes Glied (optional)",
    termHelp: "Eine positive Zahl. Dezimalzahlen wie 1,5 sind erlaubt.",
    termInvalid: "Geben Sie eine positive Zahl wie 4 oder 1,5 ein.",
    termTooLong: "Geben Sie höchstens 40 Ziffern ein.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Löst A : B = C : x nach x auf.",
    propAZero: "A darf nicht 0 sein, weil x = B × C ÷ A.",
    amount: "Aufzuteilender Betrag",
    amountHelp: "Eine beliebige Menge: Geld, Gramm, Liter, Personen oder Minuten.",
    simplified: "Gekürztes Verhältnis",
    simplifiedCaption: "{original} in den kleinsten ganzen Zahlen.",
    decimalValue: "Dezimalwert (A ÷ B)",
    oneToN: "Form 1 : n",
    totalParts: "Teile insgesamt",
    missingTerm: "Fehlendes Glied x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Vollständige Verhältnisgleichung",
    ratioValue: "Verhältniswert (B ÷ A)",
    shares: "Anteile",
    sharesCaption: "{amount} aufgeteilt im Verhältnis {ratio}.",
    sharesTable: "So wird der Betrag aufgeteilt",
    colPart: "Teil",
    colTerm: "Verhältnisglied",
    colShare: "Anteil",
    colPercent: "Prozent vom Gesamtbetrag",
    partN: "Teil {n}",
    decimalNote: "Dezimalglieder werden zuerst mit derselben Zehnerpotenz multipliziert, damit sie ganzzahlig werden, und dann durch ihren größten gemeinsamen Teiler geteilt.",
  },
};

export default de;
