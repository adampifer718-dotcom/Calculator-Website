import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { correlationEngine, makeCorrelationEngine } from "./engine";

export const correlation = defineCalculator({
  id: "correlation",
  slug: "correlation-coefficient-calculator",
  status: "published",
  title: "Correlation Coefficient Calculator",
  shortTitle: "Correlation",
  category: "statistics",
  collections: ["education-research", "software-data"],
  summary: "Measure how strongly two lists of numbers move together with Pearson's r, Spearman's ρ, r² and a significance test.",
  metaTitle: "Correlation Coefficient Calculator – Pearson r & Spearman",
  metaDescription: "Paste paired X and Y data to get Pearson's r, r², the t statistic and p-value, Spearman's rank correlation and the sample covariance.",
  keywords: ["correlation coefficient", "pearson r", "spearman rho", "rank correlation", "r squared", "covariance", "linear relationship", "scatter plot"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Introductory Statistics, 12.4 Testing the Significance of the Correlation Coefficient",
      publisher: "OpenStax",
      url: "https://openstax.org/books/introductory-statistics/pages/12-4-testing-the-significance-of-the-correlation-coefficient",
      usedFor: "Testing whether r differs from zero with n − 2 degrees of freedom.",
    },
    {
      title: "Dataplot Reference Manual: CORRELATION",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/correlat.htm",
      usedFor: "Definition of the correlation coefficient as a measure of linear association between −1 and +1.",
    },
  ],
  intro: [
    "A correlation coefficient sums up, in one number between −1 and +1, how closely two measured quantities follow a straight-line pattern. Values near +1 mean that larger X values go with larger Y values; values near −1 mean the opposite; values near 0 mean there is little linear pattern.",
    "Enter paired observations, such as hours of practice and test scores. The calculator returns Pearson's r with r², a t test of whether the correlation could be zero, Spearman's rank correlation for monotonic but curved patterns, and the sample covariance.",
  ],
  howToUse: [
    "Type the X values in the first box, separated by commas, spaces or new lines.",
    "Type the matching Y values in the second box, in the same order. Both lists need the same number of values, at least 3.",
    "Read Pearson's r and r², then check the p-value to see whether the pattern could easily be chance.",
    "Compare r with Spearman's ρ. A ρ much closer to ±1 than r suggests a curved but consistently rising or falling relationship.",
  ],
  formulas: [
    { title: "Pearson's r", expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]", explanation: "The sum of cross products of deviations, scaled by the spread of each list. It ranges from −1 to +1." },
    { title: "Significance test", expression: "t = r·√[(n − 2) ÷ (1 − r²)], df = n − 2", explanation: "The two-tailed p-value comes from Student's t distribution. It tests the null hypothesis that the population correlation is 0." },
    { title: "Spearman's ρ", expression: "ρ = Pearson's r of the ranks", explanation: "Each list is replaced by its ranks; tied values share the average of the ranks they cover." },
    { title: "Sample covariance", expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)", explanation: "The unscaled joint variation, in units of X times units of Y." },
  ],
  examples: [
    {
      title: "Practice hours and quiz scores",
      inputs: { x: "2, 4, 5, 7, 8, 10", y: "51, 58, 62, 69, 70, 81" },
      steps: ["x̄ = 6, ȳ = 65.1667; Σ cross products = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550.8333", "r = 151 ÷ √(42 × 550.8333) ≈ 0.9928", "t = 0.9928 × √(4 ÷ 0.01444) ≈ 16.52 with 4 df, p ≈ 0.0000785"],
      expectedPrimary: 0.9927552567394832,
    },
    {
      title: "Outdoor temperature and weekly heating cost",
      inputs: { x: "3, 8, 12, 15, 21, 26, 30", y: "410, 360, 300, 285, 210, 160, 150" },
      steps: ["The cost falls as the temperature rises, so the cross products are mostly negative.", "r ≈ −0.9924 and r² ≈ 0.9849", "Both lists have the same order reversed, so Spearman's ρ = −1."],
      expectedPrimary: -0.992430413741339,
    },
    {
      title: "A curved but always-rising pattern (y = x²)",
      inputs: { x: "1, 2, 3, 4, 5, 6", y: "1, 4, 9, 16, 25, 36" },
      steps: ["Pearson's r ≈ 0.9789, because the points bend away from a straight line.", "The ranks of x and y are identical, so Spearman's ρ = 1."],
      expectedPrimary: 0.978917263677818,
    },
  ],
  assumptions: [
    "Pearson's r measures linear association only. A strong curved relationship can give a modest r; Spearman's ρ captures any consistently rising or falling pattern.",
    "The p-value assumes the pairs are independent and, for Pearson's r, that the data are roughly bivariate normal. Outliers can change r a lot.",
    "The strength labels are a common rule of thumb (|r| below 0.1 negligible, 0.1 weak, 0.4 moderate, 0.7 strong, 0.9 very strong). Fields differ in what they call strong.",
    "Correlation does not imply causation: a third factor, chance or reverse causation can explain an association.",
  ],
  faqs: [
    { question: "What is the difference between r and r²?", answer: "r shows direction and strength of a linear pattern. r² is the share of the variation in Y that a straight-line fit on X accounts for, so r = 0.8 means r² = 0.64, or 64%." },
    { question: "When should I use Spearman instead of Pearson?", answer: "Use Spearman's ρ when the data are ranks, when the relationship is monotonic but not straight, or when outliers might distort Pearson's r." },
    { question: "Why must the lists have at least three values and some variation?", answer: "With two points any line fits perfectly, and the test needs n − 2 ≥ 1 degrees of freedom. If every X or every Y value is the same, the formula divides by zero and r is undefined." },
  ],
  related: ["standard-deviation-calculator", "p-value-calculator", "mean-median-mode-calculator"],
  updated: "2026-10-22",
  engine: correlationEngine,
  text,
  makeEngine: makeCorrelationEngine,
  translations,
});
