import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const de: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Korrelationsrechner",
    shortTitle: "Korrelation",
    summary: "Messen Sie mit Pearsons r, Spearmans ρ, r² und einem Signifikanztest, wie stark zwei Zahlenlisten zusammenhängen.",
    metaTitle: "Korrelationsrechner – Pearson r und Spearman ρ",
    metaDescription: "Fügen Sie gepaarte X- und Y-Daten ein und erhalten Sie Pearsons r, r², t-Statistik und p-Wert, Spearmans Rangkorrelation und die Stichprobenkovarianz.",
    keywords: ["Korrelationskoeffizient berechnen", "Pearson Korrelation", "Spearman Rangkorrelation", "Bestimmtheitsmaß r²", "Kovarianz", "linearer Zusammenhang", "Streudiagramm"],
    intro: [
      "Ein Korrelationskoeffizient fasst in einer Zahl zwischen −1 und +1 zusammen, wie genau zwei gemessene Größen einem geradlinigen Muster folgen. Werte nahe +1 bedeuten, dass größere X-Werte mit größeren Y-Werten einhergehen; Werte nahe −1 bedeuten das Gegenteil; Werte nahe 0 bedeuten, dass kaum ein lineares Muster vorliegt.",
      "Geben Sie gepaarte Beobachtungen ein, etwa Übungsstunden und Testergebnisse. Der Rechner liefert Pearsons r mit r², einen t-Test, ob die Korrelation null sein könnte, Spearmans Rangkorrelation für monotone, aber gekrümmte Muster und die Stichprobenkovarianz.",
    ],
    howToUse: [
      "Geben Sie die X-Werte in das erste Feld ein, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche.",
      "Geben Sie die zugehörigen Y-Werte in derselben Reihenfolge in das zweite Feld ein. Beide Listen brauchen gleich viele Werte, mindestens 3.",
      "Lesen Sie Pearsons r und r² ab und prüfen Sie dann am p-Wert, ob das Muster leicht durch Zufall entstanden sein könnte.",
      "Vergleichen Sie r mit Spearmans ρ. Liegt ρ deutlich näher an ±1 als r, deutet das auf einen gekrümmten, aber durchgehend steigenden oder fallenden Zusammenhang hin.",
    ],
    formulas: [
      { title: "Pearsons r", expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]", explanation: "Die Summe der Kreuzprodukte der Abweichungen, skaliert mit der Streuung jeder Liste. Sie reicht von −1 bis +1." },
      { title: "Signifikanztest", expression: "t = r·√[(n − 2) ÷ (1 − r²)], df = n − 2", explanation: "Der zweiseitige p-Wert ergibt sich aus der Student-t-Verteilung. Getestet wird die Nullhypothese, dass die Korrelation in der Grundgesamtheit 0 ist." },
      { title: "Spearmans ρ", expression: "ρ = Pearsons r der Ränge", explanation: "Jede Liste wird durch ihre Ränge ersetzt; gleiche Werte erhalten den Durchschnitt der Ränge, die sie belegen." },
      { title: "Stichprobenkovarianz", expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)", explanation: "Die unskalierte gemeinsame Streuung, in Einheiten von X mal Einheiten von Y." },
    ],
    examples: [
      {
        title: "Übungsstunden und Testpunkte",
        steps: ["x̄ = 6, ȳ = 65,1667; Σ Kreuzprodukte = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333", "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928", "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 bei 4 Freiheitsgraden, p ≈ 0,0000785"],
      },
      {
        title: "Außentemperatur und wöchentliche Heizkosten",
        steps: ["Die Kosten sinken mit steigender Temperatur, daher sind die Kreuzprodukte überwiegend negativ.", "r ≈ −0,9924 und r² ≈ 0,9849", "Beide Listen haben genau die umgekehrte Reihenfolge, daher ist Spearmans ρ = −1."],
      },
      {
        title: "Ein gekrümmtes, aber stets steigendes Muster (y = x²)",
        steps: ["Pearsons r ≈ 0,9789, weil die Punkte von einer Geraden abweichen.", "Die Ränge von x und y sind identisch, daher ist Spearmans ρ = 1."],
      },
    ],
    assumptions: [
      "Pearsons r misst nur den linearen Zusammenhang. Ein starker gekrümmter Zusammenhang kann ein mäßiges r ergeben; Spearmans ρ erfasst jedes durchgehend steigende oder fallende Muster.",
      "Der p-Wert setzt voraus, dass die Paare unabhängig sind und die Daten für Pearsons r annähernd bivariat normalverteilt sind. Ausreißer können r stark verändern.",
      "Die Einstufung der Stärke ist eine gängige Faustregel (|r| unter 0,1 vernachlässigbar, ab 0,1 schwach, ab 0,4 mäßig, ab 0,7 stark, ab 0,9 sehr stark). Was als stark gilt, unterscheidet sich je nach Fachgebiet.",
      "Korrelation bedeutet keine Kausalität: Ein dritter Faktor, Zufall oder umgekehrte Kausalität können einen Zusammenhang erklären.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen r und r²?", answer: "r zeigt Richtung und Stärke eines linearen Musters. r² ist der Anteil der Streuung von Y, den eine Ausgleichsgerade auf X erklärt; r = 0,8 bedeutet also r² = 0,64 bzw. 64 %." },
      { question: "Wann sollte ich Spearman statt Pearson verwenden?", answer: "Verwenden Sie Spearmans ρ, wenn die Daten Ränge sind, wenn der Zusammenhang monoton, aber nicht geradlinig ist, oder wenn Ausreißer Pearsons r verzerren könnten." },
      { question: "Warum brauchen die Listen mindestens drei Werte und etwas Streuung?", answer: "Durch zwei Punkte passt jede Gerade perfekt, und der Test braucht n − 2 ≥ 1 Freiheitsgrade. Sind alle X- oder alle Y-Werte gleich, teilt die Formel durch null, und r ist nicht definiert." },
    ],
    sourcesUsedFor: [
      "Test, ob r von null verschieden ist, mit n − 2 Freiheitsgraden.",
      "Definition des Korrelationskoeffizienten als Maß für den linearen Zusammenhang zwischen −1 und +1.",
    ],
  },
  text: {
    x: "X-Werte",
    xHelp: "Ein Wert pro Beobachtung, getrennt durch Semikolons, Leerzeichen oder Zeilenumbrüche. Verwenden Sie das Dezimalkomma; ein Komma mit folgendem Leerzeichen trennt ebenfalls Werte.",
    y: "Y-Werte",
    yHelp: "Ein Wert pro Beobachtung, in derselben Reihenfolge wie die X-Werte.",
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
    constantX: "Alle X-Werte sind gleich, daher ist die Korrelation nicht definiert. Mindestens zwei X-Werte müssen sich unterscheiden.",
    constantY: "Alle Y-Werte sind gleich, daher ist die Korrelation nicht definiert. Mindestens zwei Y-Werte müssen sich unterscheiden.",
    pearson: "Pearson-Korrelationskoeffizient (r)",
    caption: "Berechnet aus {count}.",
    rSquared: "Bestimmtheitsmaß (r²)",
    tStat: "t-Statistik",
    tInfinite: "Unendlich (perfekte Korrelation)",
    df: "Freiheitsgrade (n − 2)",
    pValue: "Zweiseitiger p-Wert (H₀: keine Korrelation)",
    spearman: "Spearman-Rangkorrelation (ρ)",
    covariance: "Stichprobenkovarianz",
    strength: "Stärke und Richtung (Faustregel)",
    describe: "{strength}, {direction}",
    strengths: { negligible: "Vernachlässigbar", weak: "Schwach", moderate: "Mäßig", strong: "Stark", veryStrong: "Sehr stark", perfect: "Perfekt" },
    directions: { positive: "positiv", negative: "negativ", none: "ohne Richtung" },
    perfectNote: "Die Punkte liegen genau auf einer Geraden, daher ist |r| = 1 und der p-Wert 0.",
    smallNote: "Bei nur wenigen Paaren kann selbst ein großes r zufällig entstehen. Prüfen Sie den p-Wert.",
    note: "Die Korrelation misst, wie eng zwei Variablen gemeinsam variieren. Sie zeigt nicht, dass die eine die andere verursacht.",
  },
};

export default de;
