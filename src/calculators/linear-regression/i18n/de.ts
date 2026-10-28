import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const de: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Rechner für lineare Regression",
    shortTitle: "Lineare Regression",
    summary: "Passen Sie eine Ausgleichsgerade ŷ = a + bx nach der Methode der kleinsten Quadrate an gepaarte Daten an – mit r², Standardfehler der Steigung, t-Test und Prognosen.",
    metaTitle: "Rechner für lineare Regression – Ausgleichsgerade und r²",
    metaDescription: "Fügen Sie gepaarte X- und Y-Daten ein und erhalten Sie die Ausgleichsgerade ŷ = a + bx, r und r², den Standardfehler der Steigung, t, p-Wert und eine Prognose.",
    keywords: ["lineare Regression berechnen", "Methode der kleinsten Quadrate", "Ausgleichsgerade", "Regressionsgerade", "Steigung", "Achsenabschnitt", "Bestimmtheitsmaß", "Standardfehler der Steigung"],
    intro: [
      "Die einfache lineare Regression sucht die Gerade, die eine Variable Y am besten aus einer anderen Variable X vorhersagt. Die Gerade nach der gewöhnlichen Methode der kleinsten Quadrate ist diejenige, bei der die Summe der quadrierten senkrechten Abstände zwischen den Punkten und der Geraden möglichst klein ist.",
      "Geben Sie gepaarte Beobachtungen ein. Der Rechner liefert die Gleichung ŷ = a + bx, den Anteil der Streuung, den die Gerade erklärt (r²), den Standardfehler der Steigung mit einem t-Test, ob die Steigung null sein könnte, und optional eine Prognose. Wenn Sie nur die Stärke des Zusammenhangs brauchen, liefert der Korrelationsrechner Pearsons r und Spearmans ρ allein.",
    ],
    howToUse: [
      "Geben Sie die X-Werte (Prädiktor) in das erste Feld ein, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      "Geben Sie die zugehörigen Y-Werte (Zielgröße) in derselben Reihenfolge in das zweite Feld ein. Sie brauchen mindestens 3 Paare.",
      "Geben Sie optional einen x-Wert ein, um den prognostizierten Wert ŷ zu erhalten.",
      "Lesen Sie die Gleichung ab und prüfen Sie dann r² und den p-Wert der Steigung.",
    ],
    formulas: [
      {
        title: "Steigung und Achsenabschnitt",
        expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄",
        explanation: "Die Ausgleichsgerade verläuft immer durch den Mittelwertpunkt (x̄, ȳ).",
      },
      {
        title: "Residuenstandardfehler",
        expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]",
        explanation: "Der typische senkrechte Abstand der Punkte von der Geraden, in Einheiten von Y. Zwei Freiheitsgrade werden durch a und b verbraucht.",
      },
      {
        title: "Standardfehler und t-Test der Steigung",
        expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  df = n − 2",
        explanation: "Der zweiseitige p-Wert aus der Student-t-Verteilung prüft die Nullhypothese, dass die wahre Steigung 0 ist.",
      },
      {
        title: "Bestimmtheitsmaß",
        expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²",
        explanation: "Der Anteil der Streuung von Y, den die Gerade erklärt. Bei der einfachen Regression ist er gleich dem Quadrat von Pearsons r.",
      },
    ],
    examples: [
      {
        title: "Wöchentliche Lernstunden und Prüfungsergebnisse",
        steps: ["x̄ = 4,5, ȳ = 66,125; Σ(x − x̄)² = 42 und Σ(x − x̄)(y − ȳ) = 171,5", "b = 171,5 ÷ 42 ≈ 4,08333 und a = 66,125 − 4,08333 × 4,5 = 47,75", "r² ≈ 0,9935; SE(b) ≈ 0,1349, t ≈ 30,28 bei 6 Freiheitsgraden, p ≈ 8,6 × 10⁻⁸"],
      },
      {
        title: "Gebrauchtwagenpreis nach Alter",
        steps: ["Der Preis sinkt mit steigendem Alter, daher ist die Steigung negativ: b ≈ −1.245,26 pro Jahr.", "a ≈ 24.998,8, der geschätzte Preis eines Neuwagens.", "Bei 5 Jahren: ŷ ≈ 24.998,78 − 1.245,26 × 5 ≈ 18.772,5"],
      },
      {
        title: "Kalibriergerade für einen Sensor",
        steps: ["b = 5510 ÷ 1750 ≈ 3,14857 Signaleinheiten pro Konzentrationseinheit", "a ≈ 2,28571, das Signal einer Blindprobe", "r² ≈ 0,9990, und der Residuenstandardfehler beträgt etwa 2,08"],
      },
    ],
    assumptions: [
      "Der Zusammenhang ist über den Bereich der Daten annähernd linear. Ein gekrümmtes Muster erfordert ein anderes Modell, auch wenn r² hoch aussieht.",
      "Der p-Wert und die Standardfehler setzen unabhängige Beobachtungen mit annähernd normalverteilten Residuen konstanter Streuung voraus.",
      "X gilt als fehlerfrei gemessen; nur die senkrechten Abstände werden minimiert. Vertauscht man X und Y, ergibt sich eine andere Gerade.",
      "Ausreißer und Punkte mit extremen X-Werten können die Gerade stark beeinflussen. Prognosen außerhalb des beobachteten X-Bereichs sind Extrapolationen.",
    ],
    faqs: [
      {
        question: "Worin unterscheidet sich das vom Korrelationskoeffizienten?",
        answer: "Die Korrelation liefert eine Zahl für Stärke und Richtung eines linearen Zusammenhangs und behandelt X und Y gleich. Die Regression liefert eine Gleichung, die Y aus X vorhersagt, mit einer Steigung in Einheiten von Y pro Einheit von X. Verwenden Sie den Korrelationsrechner, wenn Sie nur r brauchen.",
      },
      {
        question: "Was bedeutet der p-Wert der Steigung?",
        answer: "Er ist die Wahrscheinlichkeit, eine mindestens so weit von 0 entfernte Steigung zu erhalten, wenn sich Y in Wahrheit nicht linear mit X ändert. Ein kleiner p-Wert (zum Beispiel unter 0,05) spricht für einen echten linearen Trend; über dessen Größe oder Bedeutung sagt er nichts aus.",
      },
      {
        question: "Warum müssen sich die X-Werte unterscheiden?",
        answer: "Die Steigung wird durch die Streuung der X-Werte geteilt. Sind alle X-Werte gleich, ist diese Streuung null und jede senkrechte Gerade würde passen, sodass sich keine Steigung berechnen lässt.",
      },
    ],
    sourcesUsedFor: [
      "Die Ausgleichsgerade nach der Methode der kleinsten Quadrate, ihre Steigung und ihr Achsenabschnitt sowie das Bestimmtheitsmaß.",
      "Die Standardabweichung (der Standardfehler) der Steigung einer linearen Kleinste-Quadrate-Anpassung.",
    ],
  },
  text: {
    x: "X-Werte (Prädiktor)",
    xHelp: "Ein Wert pro Beobachtung, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche. Verwenden Sie das Dezimalkomma; ein Komma mit folgendem Leerzeichen trennt ebenfalls Werte.",
    y: "Y-Werte (Zielgröße)",
    yHelp: "Ein Wert pro Beobachtung, in derselben Reihenfolge wie die X-Werte.",
    x0: "Prognose für y bei x =",
    x0Help: "Optional. Ein x-Wert, für den ŷ aus der angepassten Geraden geschätzt wird.",
    errors: {
      empty: "Geben Sie mindestens eine Zahl ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Verwenden Sie das Dezimalkomma und trennen Sie die Werte durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    tooBig: "{value} ist zu groß. Jede Zahl darf betragsmäßig höchstens {max} sein.",
    tooFew: "Geben Sie mindestens {min} Wertepaare ein.",
    countMismatch: "Geben Sie zu jedem X-Wert einen Y-Wert ein: Sie haben {x} und {y}.",
    xCount: { zero: "{n} X-Werte", one: "{n} X-Wert", two: "{n} X-Werte", few: "{n} X-Werte", many: "{n} X-Werte", other: "{n} X-Werte" },
    yCount: { zero: "{n} Y-Werte", one: "{n} Y-Wert", two: "{n} Y-Werte", few: "{n} Y-Werte", many: "{n} Y-Werte", other: "{n} Y-Werte" },
    pairCount: { zero: "{n} Paaren", one: "{n} Paar", two: "{n} Paaren", few: "{n} Paaren", many: "{n} Paaren", other: "{n} Paaren" },
    constantX: "Alle X-Werte sind gleich, daher lässt sich keine Gerade anpassen. Mindestens zwei X-Werte müssen sich unterscheiden.",
    equationLabel: "Regressionsgerade",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Kleinste-Quadrate-Anpassung aus {count}.",
    slope: "Steigung (b)",
    intercept: "Achsenabschnitt (a)",
    rSquared: "Bestimmtheitsmaß (r²)",
    r: "Korrelationskoeffizient (r)",
    slopeSe: "Standardfehler der Steigung",
    tStat: "t-Statistik der Steigung",
    tInfinite: "Unendlich (perfekte Anpassung)",
    df: "Freiheitsgrade (n − 2)",
    pValue: "Zweiseitiger p-Wert (H₀: Steigung = 0)",
    residualSe: "Residuenstandardfehler",
    prediction: "Prognostiziertes ŷ bei x = {x0}",
    notDefined: "Nicht definiert (alle Y-Werte sind gleich)",
    perfectNote: "Die Punkte liegen genau auf einer Geraden, daher sind die Residuen und die Standardfehler 0 und der p-Wert ist 0.",
    constantYNote: "Alle Y-Werte sind gleich, daher ist die Gerade waagerecht (Steigung 0), und r, r² sowie der Test der Steigung sind nicht definiert.",
    extrapolationNote: "Der x-Wert liegt außerhalb des Datenbereichs. Prognosen jenseits der beobachteten X-Werte (Extrapolation) können stark danebenliegen, wenn sich der Zusammenhang ändert.",
    note: "Der p-Wert setzt voraus, dass die Residuen unabhängig und annähernd normalverteilt mit konstanter Streuung sind. Eine gute Anpassung zeigt nicht, dass X die Ursache von Y ist.",
  },
};

export default de;
