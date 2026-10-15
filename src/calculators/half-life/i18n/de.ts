import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const de: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Halbwertszeitrechner",
    shortTitle: "Halbwertszeit",
    summary: "Lösen Sie den exponentiellen Zerfall nach der Restmenge, der Anfangsmenge, der Halbwertszeit oder der verstrichenen Zeit.",
    metaTitle: "Halbwertszeitrechner – Restmenge und Zerfallszeit",
    metaDescription: "Lösen Sie N = N₀(1/2)^(t/T) nach Restmenge, Anfangsmenge, Halbwertszeit oder verstrichener Zeit – mit Zerfallskonstante und mittlerer Lebensdauer.",
    keywords: ["Halbwertszeit berechnen", "radioaktiver Zerfall", "exponentieller Zerfall", "Zerfallskonstante", "mittlere Lebensdauer", "Radiokarbonmethode", "C14-Datierung", "Kinetik erster Ordnung"],
    intro: [
      "Die Halbwertszeit ist die Zeit, in der die Hälfte einer zerfallenden Menge verschwindet. Nach einer Halbwertszeit sind noch 50 % übrig, nach zwei 25 %, nach drei 12,5 % und so weiter.",
      "Dieselbe Regel beschreibt radioaktive Isotope und jeden anderen Vorgang mit einem Zerfall erster Ordnung. Geben Sie drei der vier Werte ein, um den fehlenden zu bestimmen. Der Rechner zeigt außerdem die Zerfallskonstante, die mittlere Lebensdauer und den verbleibenden Anteil.",
    ],
    howToUse: [
      "Wählen Sie, was Sie berechnen möchten: die Restmenge, die Anfangsmenge, die Halbwertszeit oder die verstrichene Zeit.",
      "Geben Sie die übrigen Werte ein. Mengen und Zeiten können in beliebigen Einheiten angegeben werden, solange die beiden Werte eines Paares übereinstimmen.",
      "Lesen Sie das Ergebnis in denselben Einheiten ab, zusammen mit der Anzahl der Halbwertszeiten und der Zerfallskonstante.",
    ],
    formulas: [
      { title: "Zerfallsgesetz", expression: "N = N₀ × (1/2)^(t ÷ T½)", explanation: "N₀ ist die Anfangsmenge, t die verstrichene Zeit und T½ die Halbwertszeit." },
      {
        title: "Halbwertszeit und verstrichene Zeit",
        expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)",
        explanation: "Das mit Logarithmen umgestellte Zerfallsgesetz.",
      },
      {
        title: "Zerfallskonstante und mittlere Lebensdauer",
        expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2",
        explanation: "λ ist der Anteil, der pro Zeiteinheit zerfällt; τ ist die mittlere Lebensdauer, etwa 1,4427 Halbwertszeiten.",
      },
    ],
    examples: [
      {
        title: "40 g Cobalt-60 nach 15,81 Jahren (T½ = 5,27 Jahre)",
        steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 Halbwertszeiten", "N = 40 × (1/2)³ = 5 g"],
      },
      {
        title: "Halbwertszeit, wenn 1.200 Impulse in 36 Stunden auf 150 sinken",
        steps: ["N₀ ÷ N = 1.200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 Stunden"],
      },
      {
        title: "Alter einer Probe mit 30 % verbliebenem Kohlenstoff-14 (T½ = 5.730 Jahre)",
        steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5.730 × log₂(3,333) ≈ 9.952,8 Jahre"],
      },
    ],
    assumptions: [
      "Der Zerfall ist von erster Ordnung: Die Halbwertszeit bleibt gleich, egal wie viel Material noch vorhanden ist.",
      "Große Proben folgen der Kurve sehr genau; bei nur wenigen Atomen ist der Zerfall zufällig, und das Ergebnis ist nur ein Mittelwert.",
      "Dies ist ein allgemeines mathematisches Werkzeug. Es gibt keine Hinweise zu Medikamenten, Dosierung oder Strahlenschutz; wenden Sie sich dafür an qualifizierte Fachleute.",
    ],
    faqs: [
      {
        question: "Spielt die Zeiteinheit eine Rolle?",
        answer: "Nur insofern, als Halbwertszeit und verstrichene Zeit dieselbe Einheit haben müssen. Geben Sie beide in Tagen oder beide in Jahren ein, dann erscheint das Ergebnis in dieser Einheit.",
      },
      {
        question: "Wie viel ist nach 10 Halbwertszeiten noch übrig?",
        answer: "(1/2)¹⁰ = 1/1.024, also knapp 0,1 % der Anfangsmenge.",
      },
      {
        question: "Was ist der Unterschied zwischen Halbwertszeit und mittlerer Lebensdauer?",
        answer: "Nach der Halbwertszeit ist die Hälfte des Materials zerfallen. Die mittlere Lebensdauer ist die durchschnittliche Zeit, bis ein einzelnes Atom zerfällt. Sie ist länger: etwa das 1,4427-Fache der Halbwertszeit.",
      },
    ],
    sourcesUsedFor: ["Zerfall erster Ordnung, Definition der Halbwertszeit und λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Gesuchter Wert",
    solveOptions: { N: "Restmenge (N)", N0: "Anfangsmenge (N₀)", T: "Halbwertszeit (T½)", t: "Verstrichene Zeit (t)" },
    initial: "Anfangsmenge (N₀)",
    remaining: "Restmenge (N)",
    amountHelp: "Beliebige Einheit (Gramm, Atome, Becquerel …), solange N und N₀ dieselbe verwenden.",
    halfLife: "Halbwertszeit (T½)",
    elapsed: "Verstrichene Zeit (t)",
    timeHelp: "Beliebige Zeiteinheit, solange t und T½ dieselbe verwenden.",
    remainingTooLarge: "Die Restmenge darf nicht größer sein als die Anfangsmenge (N ≤ N₀).",
    remainingMustDrop: "Zur Berechnung der Halbwertszeit muss die Restmenge kleiner sein als die Anfangsmenge.",
    timeMustBePositive: "Zur Berechnung der Halbwertszeit muss die verstrichene Zeit größer als 0 sein.",
    tooManyHalfLives: "Das sind zu viele Halbwertszeiten: Die Anfangsmenge wäre zu groß für die Anzeige.",
    results: { N: "Restmenge", N0: "Anfangsmenge", T: "Halbwertszeit", t: "Verstrichene Zeit" },
    amountCaption: "In derselben Einheit wie die andere Menge.",
    timeCaption: "In derselben Zeiteinheit wie der andere Zeitwert.",
    percentRemaining: "Verbleibender Anteil (N ÷ N₀)",
    halfLives: "Anzahl der Halbwertszeiten (t ÷ T½)",
    decayConstant: "Zerfallskonstante λ = ln 2 ÷ T½ (pro Zeiteinheit)",
    meanLifetime: "Mittlere Lebensdauer τ = 1 ÷ λ (Zeiteinheit)",
    note: "Setzt einen einfachen exponentiellen Zerfall (erster Ordnung) mit konstanter Halbwertszeit voraus.",
  },
};

export default de;
