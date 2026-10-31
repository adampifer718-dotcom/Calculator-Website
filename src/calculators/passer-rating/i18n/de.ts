import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const de: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "Passer-Rating-Rechner (NFL)",
    shortTitle: "Passer Rating",
    summary: "Berechnen Sie das NFL-Passer-Rating eines Quarterbacks aus Passversuchen, angekommenen Pässen, Yards, Touchdowns und Interceptions – mit den vier Komponenten und der NCAA-Effizienz.",
    metaTitle: "Passer-Rating-Rechner (NFL) – QB-Rating und NCAA",
    metaDescription: "Ermitteln Sie das NFL-Passer-Rating (0 bis 158,3) aus der Passstatistik eines Quarterbacks, sehen Sie alle vier Komponenten und vergleichen Sie die NCAA-Formel.",
    keywords: ["Passer Rating", "Quarterback Rating", "QB-Rating berechnen", "NFL Passer Rating Formel", "158,3", "NCAA Passing Efficiency", "American Football Statistik"],
    intro: [
      "Das Passer Rating ist seit 1973 das offizielle Maß der NFL für das Passspiel eines Quarterbacks. Es kombiniert vier Quoten: Anteil angekommener Pässe, Yards pro Versuch, Touchdowns pro Versuch und Interceptions pro Versuch. Jeder Teil ist auf einen Bereich begrenzt, daher reicht das Rating von 0 bis zum perfekten Wert von 158,3.",
      "Geben Sie die Passstatistik eines Spiels, einer Saison oder einer Karriere ein, um das Rating, den Wert jeder Komponente und den Anteil der Versuche zu erhalten, die angekommen sind, zu Touchdowns führten oder abgefangen wurden. Der Rechner zeigt außerdem die NCAA Passing Efficiency, die im College Football auf einer anderen Skala verwendet wird.",
    ],
    howToUse: [
      "Geben Sie die Passversuche, die angekommenen Pässe und die Passing Yards ein. Yards können negativ sein.",
      "Geben Sie die Touchdown-Pässe und Interceptions ein.",
      "Lesen Sie das Passer Rating ab und prüfen Sie in der Komponententabelle, welche Teile ihre Grenzen erreicht haben.",
    ],
    formulas: [
      {
        title: "Die vier Komponenten",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Jede Komponente wird vor dem Addieren auf 0 bis 2,375 begrenzt.",
      },
      { title: "Passer Rating", expression: "Rating = (a + b + c + d) ÷ 6 × 100", explanation: "Stehen alle Komponenten auf 2,375, beträgt das Rating 9,5 ÷ 6 × 100 ≈ 158,3, das Maximum." },
      { title: "NCAA Passing Efficiency", expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att", explanation: "Die Formel des College Football. Sie hat keine Grenzen und kann daher weit über 200 oder unter 0 liegen." },
    ],
    examples: [
      {
        title: "23 von 34 für 287 Yards, 2 TD, 1 INT",
        steps: ["a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603", "c = 2 ÷ 34 × 20 ≈ 1,1765; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397", "Rating = 6,0588 ÷ 6 × 100 ≈ 101,0"],
      },
      {
        title: "30 von 41 für 402 Yards, 5 TD, 0 INT",
        steps: ["a ≈ 2,1585 und c ≈ 2,4390 liegen über 2,375 und zählen daher jeweils als 2,375", "b ≈ 1,7012; d = 2,375", "Rating = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5"],
      },
      {
        title: "12 von 28 für 96 Yards, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429; b ≈ 0,1071; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036, zählt also als 0", "Rating = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "Der Rechner verwendet die NFL-Formel in ihrer veröffentlichten Form. Im College Football gilt die eigene NCAA-Effizienzformel, die unter dem Rating angezeigt wird.",
      "Das Rating misst nur das Passspiel. Sacks, Läufe, Fumbles, Spielsituation und die Qualität der Receiver und Gegner bleiben unberücksichtigt.",
      "Durch die Grenzen von 0 bis 2,375 wirken sich sehr hohe oder sehr niedrige Werte in einem Bereich ab einem Punkt nicht mehr auf das Rating aus, sodass zwei recht unterschiedliche Passstatistiken dasselbe Rating haben können.",
      "Das angezeigte Rating ist wie in offiziellen Statistiken auf eine Dezimalstelle gerundet.",
    ],
    faqs: [
      { question: "Was ist ein perfektes Passer Rating?", answer: "158,3. Dafür braucht es eine Quote angekommener Pässe von mindestens 77,5 %, mindestens 12,5 Yards pro Versuch, Touchdowns bei mindestens 11,875 % der Versuche und keine Interceptions, sodass jede Komponente 2,375 erreicht." },
      { question: "Was ist ein gutes Passer Rating?", answer: "Die Formel wurde so ausgelegt, dass 66,7 einem durchschnittlichen Passer der 1960er-Jahre entsprach. Das Passspiel ist seitdem effizienter geworden, daher liegen die Ligadurchschnitte heute bei etwa 90, und ein Rating über 100 gilt allgemein als sehr gut." },
      { question: "Ist das Passer Rating dasselbe wie QBR?", answer: "Nein. Das Passer Rating verwendet nur die fünf Zahlen aus der Statistik. ESPNs Total QBR ist ein separates, proprietäres Maß, das auch Spielkontext, Läufe und Sacks berücksichtigt." },
    ],
    sourcesUsedFor: [
      "Die vier NFL-Komponenten, ihre Grenzen von 0 bis 2,375, die Skalierung ÷ 6 × 100 und das Maximum von 158,3.",
      "Die NCAA-Effizienzformel (8,4 × Yards + 330 × TD + 100 × angekommene Pässe − 200 × INT) ÷ Versuche.",
    ],
  },
  text: {
    attempts: "Passversuche",
    completions: "Angekommene Pässe (Completions)",
    yards: "Passing Yards",
    yardsHelp: "Gesamte Passing Yards; der Wert kann negativ sein.",
    touchdowns: "Touchdown-Pässe",
    interceptions: "Interceptions",
    errors: {
      completions: "Es kann nicht mehr angekommene Pässe als Versuche geben.",
      touchdowns: "Es kann nicht mehr Touchdown-Pässe als angekommene Pässe geben.",
      interceptions: "Es kann nicht mehr Interceptions als unvollständige Pässe (Versuche minus angekommene Pässe) geben.",
    },
    rating: "NFL-Passer-Rating",
    caption: "{cmp} von {att} für {yds} Yards, {td} TD, {int} INT.",
    ncaa: "NCAA Passing Efficiency",
    completionPct: "Quote angekommener Pässe",
    yardsPerAttempt: "Yards pro Versuch",
    tdPct: "Touchdown-Quote",
    intPct: "Interception-Quote",
    table: {
      caption: "Komponenten des Passer Ratings (jeweils auf 0–2,375 begrenzt)",
      component: "Komponente",
      raw: "Vor der Begrenzung",
      used: "Verwendet",
    },
    components: {
      a: "a: angekommene Pässe pro Versuch",
      b: "b: Yards pro Versuch",
      c: "c: Touchdowns pro Versuch",
      d: "d: Interceptions pro Versuch",
    },
    notes: {
      clamped: "Mindestens eine Komponente hat die Grenze 0 oder 2,375 erreicht, daher verändern bessere (oder schlechtere) Werte in diesem Bereich das Rating nicht mehr.",
      perfect: "Dies ist ein perfektes Passer Rating von 158,3, der höchste Wert, den die NFL-Formel zulässt.",
      scale: "Das NFL- und das NCAA-Rating verwenden unterschiedliche Skalen und lassen sich nicht miteinander vergleichen.",
    },
  },
};

export default de;
