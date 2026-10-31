import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { eraEngine, makeEraEngine } from "./engine";

export const era = defineCalculator({
  id: "era",
  slug: "era-calculator",
  status: "published",
  title: "Baseball ERA Calculator",
  shortTitle: "ERA",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Calculate a pitcher's earned run average from earned runs and innings pitched, with WHIP, K/9 and BB/9, for 9-inning baseball or 7-inning games.",
  metaTitle: "ERA Calculator – Earned Run Average, WHIP and K/9",
  metaDescription: "Work out a pitcher's earned run average from earned runs and innings plus outs, with WHIP, strikeouts and walks per nine, for 9- or 7-inning games.",
  keywords: ["ERA calculator", "earned run average", "baseball ERA", "softball ERA", "WHIP calculator", "K/9", "BB/9", "innings pitched"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Earned Run Average (ERA)",
      publisher: "MLB.com glossary",
      url: "https://www.mlb.com/glossary/standard-stats/earned-run-average",
      usedFor: "The definition of an earned run and ERA = 9 × earned runs ÷ innings pitched.",
    },
    {
      title: "Walks And Hits Per Inning Pitched (WHIP)",
      publisher: "MLB.com glossary",
      url: "https://www.mlb.com/glossary/standard-stats/walks-and-hits-per-inning-pitched",
      usedFor: "WHIP = (walks + hits) ÷ innings pitched, with hit batters and errors not counted.",
    },
  ],
  intro: [
    "Earned run average (ERA) is the number of earned runs a pitcher gives up per full game. It scales a pitcher's runs allowed to a standard game length, so starters and relievers with very different workloads can be compared.",
    "Enter the earned runs and the innings pitched to get the ERA. Innings are entered as whole innings plus extra outs, because each out is a third of an inning. Add hits, walks and strikeouts to also see WHIP, K/9 and BB/9. Choose 7 innings for softball and many youth leagues.",
  ],
  howToUse: [
    "Enter the earned runs allowed.",
    "Enter the complete innings pitched and choose 0, 1 or 2 extra outs. A box score's 5.1 means 5 innings and 1 out.",
    "Choose 9 innings per game for baseball or 7 for softball and many youth leagues.",
    "Optionally enter hits, walks and strikeouts, then read the ERA and the other rates.",
  ],
  formulas: [
    { title: "Innings pitched", expression: "IP = whole innings + extra outs ÷ 3", explanation: "Each out is one third of an inning, so 6.2 in box-score notation is 6⅔ = 6.667 innings." },
    { title: "Earned run average", expression: "ERA = earned runs × innings per game ÷ IP", explanation: "Innings per game is 9 in baseball; 7 is used for softball and many youth leagues." },
    { title: "WHIP", expression: "WHIP = (walks + hits) ÷ IP", explanation: "Base runners allowed per inning through hits and walks." },
    { title: "Per-nine rates", expression: "K/9 = strikeouts × 9 ÷ IP\nBB/9 = walks × 9 ÷ IP", explanation: "Strikeouts and walks per nine innings." },
  ],
  examples: [
    {
      title: "3 earned runs in 6⅔ innings",
      inputs: { earnedRuns: 3, innings: 6, outs: "2", gameLength: "9", hits: 7, walks: 2, strikeouts: 8 },
      steps: ["IP = 6 + 2 ÷ 3 = 6.667", "ERA = 3 × 9 ÷ 6.667 = 4.05", "WHIP = (2 + 7) ÷ 6.667 = 1.35; K/9 = 8 × 9 ÷ 6.667 = 10.8"],
      expectedPrimary: 4.05,
    },
    {
      title: "A season: 61 earned runs in 187⅓ innings",
      inputs: { earnedRuns: 61, innings: 187, outs: "1", gameLength: "9", hits: 158, walks: 45, strikeouts: 201 },
      steps: ["IP = 187 + 1 ÷ 3 = 187.333", "ERA = 61 × 9 ÷ 187.333 ≈ 2.93", "WHIP = (45 + 158) ÷ 187.333 ≈ 1.08; K/9 ≈ 9.66; BB/9 ≈ 2.16"],
      expectedPrimary: 2.9306049822064058,
    },
    {
      title: "Softball: 4 earned runs in a 7-inning complete game",
      inputs: { earnedRuns: 4, innings: 7, outs: "0", gameLength: "7", hits: 5, walks: 3, strikeouts: null },
      steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4.00", "WHIP = (3 + 5) ÷ 7 ≈ 1.14"],
      expectedPrimary: 4,
    },
  ],
  assumptions: [
    "Earned runs are whatever the official scorer recorded. Runs that score because of an error or a passed ball are unearned and should not be included.",
    "Innings are entered as whole innings plus outs, rather than as a decimal like 6.2, because in box scores the digit after the point counts outs, not tenths.",
    "ERA depends on the defense behind the pitcher, the ballpark and the league, so compare pitchers within the same league and season where you can.",
    "K/9 and BB/9 always use 9 innings, as is usual, even when 7 innings per game is selected for the ERA.",
  ],
  faqs: [
    { question: "What does 6.2 innings pitched mean?", answer: "It means 6 innings and 2 outs, or 6⅔ innings, not 6.2 as a decimal. Each out is a third of an inning, so the digit after the point can only be 0, 1 or 2. Enter 6 innings and 2 extra outs here." },
    { question: "What is a good ERA?", answer: "It depends on the league and era. In recent Major League Baseball seasons the league average has been around 4.00, and an ERA under 3.00 over a full season is generally considered excellent." },
    { question: "Why does softball use 7 innings?", answer: "Softball games, and many high school and youth baseball games, are scheduled for seven innings, so ERA is scaled to a seven-inning game to show runs allowed per full game in that format." },
  ],
  related: ["passer-rating-calculator", "percentage-calculator", "weighted-average-calculator"],
  updated: "2026-10-28",
  engine: eraEngine,
  text,
  makeEngine: makeEraEngine,
  translations,
});
