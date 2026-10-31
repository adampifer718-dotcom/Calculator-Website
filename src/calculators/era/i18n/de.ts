import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const de: CalculatorTranslation<EraText> = {
  content: {
    title: "ERA-Rechner (Baseball)",
    shortTitle: "ERA",
    summary: "Berechnen Sie den Earned Run Average eines Pitchers aus Earned Runs und gepitchten Innings – mit WHIP, K/9 und BB/9, für Baseball mit 9 oder Spiele mit 7 Innings.",
    metaTitle: "ERA-Rechner – Earned Run Average, WHIP und K/9",
    metaDescription: "Ermitteln Sie den Earned Run Average aus Earned Runs, Innings und Outs – mit WHIP sowie Strikeouts und Walks pro neun Innings, für 9 oder 7 Innings.",
    keywords: ["ERA berechnen", "Earned Run Average", "Baseball ERA", "Softball ERA", "WHIP Rechner", "K/9", "BB/9", "Innings Pitched"],
    intro: [
      "Der Earned Run Average (ERA) ist die Zahl der Earned Runs, die ein Pitcher pro vollständigem Spiel zulässt. Er rechnet die zugelassenen Runs auf eine Standardspiellänge hoch, sodass Starter und Reliever mit sehr unterschiedlicher Belastung verglichen werden können.",
      "Geben Sie die Earned Runs und die gepitchten Innings ein, um den ERA zu erhalten. Innings werden als ganze Innings plus zusätzliche Outs eingegeben, weil jedes Out ein Drittel eines Innings ist. Ergänzen Sie Hits, Walks und Strikeouts, um auch WHIP, K/9 und BB/9 zu sehen. Wählen Sie 7 Innings für Softball und viele Jugendligen.",
    ],
    howToUse: [
      "Geben Sie die zugelassenen Earned Runs ein.",
      "Geben Sie die vollständig gepitchten Innings ein und wählen Sie 0, 1 oder 2 zusätzliche Outs. Die Angabe 5.1 in einem Box Score bedeutet 5 Innings und 1 Out.",
      "Wählen Sie 9 Innings pro Spiel für Baseball oder 7 für Softball und viele Jugendligen.",
      "Geben Sie optional Hits, Walks und Strikeouts ein und lesen Sie dann den ERA und die anderen Quoten ab.",
    ],
    formulas: [
      { title: "Gepitchte Innings", expression: "IP = ganze Innings + zusätzliche Outs ÷ 3", explanation: "Jedes Out ist ein Drittel eines Innings, daher sind 6.2 in Box-Score-Schreibweise 6⅔ = 6,667 Innings." },
      { title: "Earned Run Average", expression: "ERA = Earned Runs × Innings pro Spiel ÷ IP", explanation: "Im Baseball sind es 9 Innings pro Spiel; 7 werden für Softball und viele Jugendligen verwendet." },
      { title: "WHIP", expression: "WHIP = (Walks + Hits) ÷ IP", explanation: "Durch Hits und Walks zugelassene Baserunner pro Inning." },
      { title: "Quoten pro neun Innings", expression: "K/9 = Strikeouts × 9 ÷ IP\nBB/9 = Walks × 9 ÷ IP", explanation: "Strikeouts und Walks pro neun Innings." },
    ],
    examples: [
      {
        title: "3 Earned Runs in 6⅔ Innings",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Eine Saison: 61 Earned Runs in 187⅓ Innings",
        steps: ["IP = 187 + 1 ÷ 3 = 187,333", "ERA = 61 × 9 ÷ 187,333 ≈ 2,93", "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08; K/9 ≈ 9,66; BB/9 ≈ 2,16"],
      },
      {
        title: "Softball: 4 Earned Runs in einem kompletten Spiel über 7 Innings",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "Earned Runs sind das, was der offizielle Scorer erfasst hat. Runs, die durch einen Error oder einen Passed Ball zustande kommen, sind Unearned Runs und sollten nicht mitgezählt werden.",
      "Innings werden als ganze Innings plus Outs eingegeben statt als Dezimalzahl wie 6.2, weil die Ziffer nach dem Punkt im Box Score Outs zählt, nicht Zehntel.",
      "Der ERA hängt von der Defensive hinter dem Pitcher, dem Stadion und der Liga ab; vergleichen Sie Pitcher daher möglichst innerhalb derselben Liga und Saison.",
      "K/9 und BB/9 beziehen sich wie üblich immer auf 9 Innings, auch wenn für den ERA 7 Innings pro Spiel gewählt sind.",
    ],
    faqs: [
      { question: "Was bedeuten 6.2 gepitchte Innings?", answer: "Es bedeutet 6 Innings und 2 Outs, also 6⅔ Innings, nicht 6,2 als Dezimalzahl. Jedes Out ist ein Drittel eines Innings, daher kann die Ziffer nach dem Punkt nur 0, 1 oder 2 sein. Geben Sie hier 6 Innings und 2 zusätzliche Outs ein." },
      { question: "Was ist ein guter ERA?", answer: "Das hängt von Liga und Epoche ab. In den letzten Saisons der Major League Baseball lag der Ligadurchschnitt bei etwa 4,00, und ein ERA unter 3,00 über eine volle Saison gilt allgemein als hervorragend." },
      { question: "Warum hat Softball 7 Innings?", answer: "Softballspiele und viele Baseballspiele an Highschools und in Jugendligen sind auf sieben Innings angesetzt. Der ERA wird daher auf ein Spiel mit sieben Innings skaliert, um die zugelassenen Runs pro vollständigem Spiel in diesem Format zu zeigen." },
    ],
    sourcesUsedFor: [
      "Die Definition eines Earned Run und ERA = 9 × Earned Runs ÷ gepitchte Innings.",
      "WHIP = (Walks + Hits) ÷ gepitchte Innings, wobei getroffene Batter und Errors nicht zählen.",
    ],
  },
  text: {
    earnedRuns: "Zugelassene Earned Runs",
    earnedRunsHelp: "Runs, die ohne Hilfe eines Errors oder Passed Balls erzielt wurden, wie vom offiziellen Scorer entschieden.",
    innings: "Gepitchte Innings (ganze Innings)",
    inningsHelp: "Geben Sie hier vollständige Innings und zusätzliche Outs im nächsten Feld ein. 6⅔ Innings, im Box Score 6.2 geschrieben, sind 6 Innings und 2 Outs.",
    outs: "Zusätzliche Outs",
    outsOptions: { "0": "0 Outs", "1": "1 Out (⅓ Inning)", "2": "2 Outs (⅔ Inning)" },
    gameLength: "Innings pro Spiel",
    gameLengthHelp: "Verwenden Sie 9 für Profi- und die meisten College-Baseballspiele, 7 für Softball und viele Highschool- und Jugendligen.",
    gameLengths: { "9": "9 Innings (Baseball)", "7": "7 Innings (Softball, viele Jugendligen)" },
    hits: "Zugelassene Hits (optional)",
    walks: "Zugelassene Walks (optional)",
    walksHelp: "Bases on Balls. Getroffene Batter (Hit by Pitch) zählen nicht zum WHIP.",
    strikeouts: "Strikeouts (optional)",
    errors: {
      noInnings: "Geben Sie mindestens ein gepitchtes Out ein.",
    },
    era: "Earned Run Average (ERA)",
    caption: "{er} Earned Runs × {length} ÷ {ip} gepitchte Innings ({notation} in Box-Score-Schreibweise).",
    notation: "{whole}.{outs}",
    inningsNotation: "Gepitchte Innings (Baseball-Schreibweise)",
    inningsDecimal: "Gepitchte Innings als Dezimalzahl",
    totalOuts: "Erzielte Outs",
    whip: "WHIP (Walks + Hits pro Inning)",
    k9: "Strikeouts pro 9 Innings (K/9)",
    bb9: "Walks pro 9 Innings (BB/9)",
    kbb: "Verhältnis Strikeouts zu Walks",
    notes: {
      notation: "Im Box Score zählt die Ziffer nach dem Punkt Outs, nicht Zehntel: 6.1 bedeutet 6⅓ Innings und 6.2 bedeutet 6⅔ Innings.",
      whip: "Geben Sie Hits und Walks ein, um den WHIP zu sehen.",
      perNine: "K/9 und BB/9 beziehen sich unabhängig von der Spiellänge immer auf 9 Innings.",
    },
  },
};

export default de;
