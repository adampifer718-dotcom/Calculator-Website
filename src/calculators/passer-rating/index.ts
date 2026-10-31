import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePasserRatingEngine, passerRatingEngine } from "./engine";

export const passerRating = defineCalculator({
  id: "passer-rating",
  slug: "passer-rating-calculator",
  status: "published",
  title: "NFL Passer Rating Calculator",
  shortTitle: "Passer Rating",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Calculate a quarterback's NFL passer rating from attempts, completions, yards, touchdowns and interceptions, with the four components and the NCAA efficiency.",
  metaTitle: "NFL Passer Rating Calculator – QB Rating and NCAA",
  metaDescription: "Work out the NFL passer rating (0 to 158.3) from a quarterback's passing line, see all four components, and compare the NCAA passing efficiency formula.",
  keywords: ["passer rating", "quarterback rating", "QB rating calculator", "NFL passer rating formula", "158.3", "NCAA passing efficiency", "passer efficiency rating"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "NFL's Passer Rating",
      publisher: "Pro Football Hall of Fame",
      url: "https://profootballhof.com/news/nfl-s-passer-rating",
      usedFor: "The four NFL components, their 0 to 2.375 limits, the ÷ 6 × 100 scaling and the 158.3 maximum.",
    },
    {
      title: "Passer rating",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Passer_rating",
      usedFor: "The NCAA passing efficiency formula (8.4 × yards + 330 × TD + 100 × completions − 200 × INT) ÷ attempts.",
    },
  ],
  intro: [
    "The passer rating is the NFL's official measure of a quarterback's passing, used since 1973. It combines four rates: completion percentage, yards per attempt, touchdowns per attempt and interceptions per attempt. Each part is limited to a range, so the rating runs from 0 to a perfect 158.3.",
    "Enter a passing line for a game, a season or a career to get the rating, the value of each component and the share of attempts that were completions, touchdowns and interceptions. The calculator also shows the NCAA passing efficiency, which college football uses on a different scale.",
  ],
  howToUse: [
    "Enter the pass attempts, completions and passing yards. Yards can be negative.",
    "Enter the touchdown passes and interceptions.",
    "Read the passer rating and check the component table to see which parts hit their limits.",
  ],
  formulas: [
    {
      title: "The four components",
      expression: "a = (Cmp ÷ Att − 0.3) × 5\nb = (Yds ÷ Att − 3) × 0.25\nc = TD ÷ Att × 20\nd = 2.375 − INT ÷ Att × 25",
      explanation: "Each component is limited to between 0 and 2.375 before they are added.",
    },
    { title: "Passer rating", expression: "rating = (a + b + c + d) ÷ 6 × 100", explanation: "With every component at 2.375 the rating is 9.5 ÷ 6 × 100 ≈ 158.3, the maximum." },
    { title: "NCAA passing efficiency", expression: "(8.4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att", explanation: "College football's formula. It has no limits, so it can go far above 200 or below 0." },
  ],
  examples: [
    {
      title: "23 of 34 for 287 yards, 2 TD, 1 INT",
      inputs: { attempts: 34, completions: 23, yards: 287, touchdowns: 2, interceptions: 1 },
      steps: ["a = (23 ÷ 34 − 0.3) × 5 ≈ 1.8824; b = (287 ÷ 34 − 3) × 0.25 ≈ 1.3603", "c = 2 ÷ 34 × 20 ≈ 1.1765; d = 2.375 − 1 ÷ 34 × 25 ≈ 1.6397", "Rating = 6.0588 ÷ 6 × 100 ≈ 101.0"],
      expectedPrimary: 100.98039215686273,
    },
    {
      title: "30 of 41 for 402 yards, 5 TD, 0 INT",
      inputs: { attempts: 41, completions: 30, yards: 402, touchdowns: 5, interceptions: 0 },
      steps: ["a ≈ 2.1585 and c ≈ 2.4390 are above 2.375, so each counts as 2.375", "b ≈ 1.7012; d = 2.375", "Rating = (2.375 + 1.7012 + 2.375 + 2.375) ÷ 6 × 100 ≈ 143.5"],
      expectedPrimary: 143.49593495934957,
    },
    {
      title: "12 of 28 for 96 yards, 0 TD, 3 INT",
      inputs: { attempts: 28, completions: 12, yards: 96, touchdowns: 0, interceptions: 3 },
      steps: ["a ≈ 0.6429; b ≈ 0.1071; c = 0", "d = 2.375 − 3 ÷ 28 × 25 ≈ −0.3036, so it counts as 0", "Rating = 0.75 ÷ 6 × 100 = 12.5"],
      expectedPrimary: 12.5,
    },
  ],
  assumptions: [
    "The calculator uses the NFL formula as published. College football uses the separate NCAA efficiency formula shown below the rating.",
    "The rating measures passing only. It ignores sacks, rushing, fumbles, game situation and the quality of the receivers and opposition.",
    "The 0 to 2.375 limits mean that very high or very low figures in one area stop affecting the rating, so two quite different passing lines can share a rating.",
    "The displayed rating is rounded to one decimal, as in official statistics.",
  ],
  faqs: [
    { question: "What is a perfect passer rating?", answer: "158.3. It needs a completion rate of at least 77.5%, at least 12.5 yards per attempt, touchdowns on at least 11.875% of attempts and no interceptions, so every component reaches 2.375." },
    { question: "What is a good passer rating?", answer: "The formula was designed so that 66.7 matched an average passer of the 1960s. Passing has become more efficient since, so league averages are now around 90 and a rating above 100 is generally considered very good." },
    { question: "Is passer rating the same as QBR?", answer: "No. The passer rating uses only the five numbers on the stat sheet. ESPN's Total QBR is a separate, proprietary measure that also considers game context, rushing and sacks." },
  ],
  related: ["era-calculator", "percentage-calculator", "weighted-average-calculator"],
  updated: "2026-10-28",
  engine: passerRatingEngine,
  text,
  makeEngine: makePasserRatingEngine,
  translations,
});
