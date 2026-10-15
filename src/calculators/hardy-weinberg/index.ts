import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { hardyWeinbergEngine, makeHardyWeinbergEngine } from "./engine";

export const hardyWeinberg = defineCalculator({
  id: "hardy-weinberg",
  slug: "hardy-weinberg-calculator",
  status: "published",
  title: "Hardy–Weinberg Equilibrium Calculator",
  shortTitle: "Hardy–Weinberg",
  category: "biology",
  collections: ["education-research"],
  summary: "Find allele and genotype frequencies from a recessive trait's frequency, or test genotype counts against equilibrium.",
  metaTitle: "Hardy–Weinberg Calculator – Allele Frequencies & χ² Test",
  metaDescription: "Get p, q, p², 2pq and q² from the share of people with a recessive trait, or test observed AA, Aa and aa counts with a chi-square test.",
  keywords: ["hardy-weinberg", "allele frequency", "genotype frequency", "p2 2pq q2", "carrier frequency", "population genetics", "chi-square"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Biology 2e, 19.1 Population Evolution",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/biology-2e/pages/19-1-population-evolution",
      usedFor: "The Hardy–Weinberg principle, p² + 2pq + q² = 1 and its assumptions.",
    },
  ],
  intro: [
    "The Hardy–Weinberg principle says that, without evolutionary forces at work, allele and genotype frequencies stay constant from one generation to the next. For a gene with two alleles, A with frequency p and a with frequency q, the genotypes then occur in the proportions p², 2pq and q².",
    "Use the first mode when you know how common a recessive trait is, for example to estimate how many people carry it. Use the second mode to check whether genotype counts from a sample fit the proportions the principle predicts.",
  ],
  howToUse: [
    "Pick a starting point: the recessive phenotype frequency or genotype counts.",
    "For the phenotype mode, enter the share of individuals showing the recessive trait as a percent.",
    "For the counts mode, enter how many AA, Aa and aa individuals you observed.",
    "Read the allele frequencies, the genotype table and, for counts, the chi-square result.",
  ],
  formulas: [
    { title: "Equilibrium proportions", expression: "p + q = 1;  p² + 2pq + q² = 1", explanation: "p² is the AA share, 2pq the Aa share and q² the aa share." },
    { title: "From the recessive phenotype", expression: "q = √q²;  p = 1 − q", explanation: "Only aa individuals show a recessive trait, so their share equals q²." },
    { title: "From genotype counts", expression: "p = (2·AA + Aa) ÷ (2N)", explanation: "Each individual carries two alleles; N is the total number of individuals." },
    { title: "Chi-square test", expression: "χ² = Σ (O − E)² ÷ E;  p-value = erfc(√(χ² ÷ 2))", explanation: "E = p²N, 2pqN and q²N. With 1 degree of freedom the p-value has this closed form." },
  ],
  examples: [
    {
      title: "A recessive condition in 1 of 2,500 people",
      inputs: { mode: "phenotype", q2: 0.04 },
      steps: ["q² = 0.0004, so q = 0.02 and p = 0.98", "2pq = 2 × 0.98 × 0.02 = 0.0392", "About 3.92% of people, roughly 1 in 25.5, are carriers"],
      expectedPrimary: 3.92,
    },
    {
      title: "A recessive trait seen in 9% of a population",
      inputs: { mode: "phenotype", q2: 9 },
      steps: ["q = √0.09 = 0.3 and p = 0.7", "p² = 49%, 2pq = 42%, q² = 9%"],
      expectedPrimary: 42,
    },
    {
      title: "Testing 298 AA, 489 Aa and 213 aa",
      inputs: { mode: "counts", countAA: 298, countAa: 489, countaa: 213 },
      steps: ["N = 1,000 and p = (2 × 298 + 489) ÷ 2,000 = 0.5425", "Expected counts ≈ 294.31, 496.39 and 209.31", "χ² ≈ 0.2215, p-value ≈ 0.638: consistent with equilibrium"],
      expectedPrimary: 0.5425,
    },
  ],
  assumptions: [
    "The model assumes a large, randomly mating population with no mutation, migration or selection acting on the gene.",
    "The phenotype mode assumes one gene with two alleles, complete dominance and a population already in equilibrium.",
    "The phenotype frequency is entered as a percent (0–100), not as a fraction between 0 and 1.",
    "The chi-square test is an approximation that works best when every expected count is at least 5.",
  ],
  faqs: [
    { question: "Why can't I just count the dominant phenotype?", answer: "People with AA and Aa look the same, so the dominant phenotype mixes two genotypes. The recessive phenotype is pure aa, which is why q² is the starting point." },
    { question: "What does a small p-value mean?", answer: "Below 0.05, the observed genotype counts differ more than chance alone would usually explain. Possible causes include inbreeding, selection, migration, population structure or genotyping errors." },
    { question: "Why does the test have only 1 degree of freedom?", answer: "There are three genotype classes. One degree is lost because the counts must add up to N, and another because the allele frequency p is estimated from the same data." },
  ],
  related: ["doubling-time-calculator", "p-value-calculator", "percentage-calculator"],
  updated: "2026-10-15",
  engine: hardyWeinbergEngine,
  text,
  makeEngine: makeHardyWeinbergEngine,
  translations,
});
