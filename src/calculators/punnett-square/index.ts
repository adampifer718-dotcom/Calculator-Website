import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePunnettEngine, punnettEngine } from "./engine";

export const punnettSquare = defineCalculator({
  id: "punnett-square",
  slug: "punnett-square-calculator",
  status: "published",
  title: "Punnett Square Calculator",
  shortTitle: "Punnett square",
  category: "biology",
  collections: ["education-research"],
  summary: "Cross two parents for one or two genes and get the Punnett square, genotype and phenotype ratios, and the chance of each trait.",
  metaTitle: "Punnett Square Calculator – Genotype & Phenotype Ratios",
  metaDescription: "Enter two parent genotypes such as AaBb × AaBb to build the Punnett square and get genotype ratios, phenotype ratios and the probability of each trait.",
  keywords: ["punnett square", "monohybrid cross", "dihybrid cross", "genotype ratio", "phenotype ratio", "mendelian genetics", "9:3:3:1", "test cross"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Biology 2e, 12.3 Laws of Inheritance",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance",
      usedFor: "Dominance, segregation, independent assortment and the 9 : 3 : 3 : 1 ratio of a dihybrid cross.",
    },
  ],
  intro: [
    "A Punnett square lists every gamete one parent can make along one side and every gamete of the other parent along the other side. Each square in the grid is one equally likely combination, so counting squares gives the expected share of each offspring genotype.",
    "This calculator handles one gene (a monohybrid cross such as Aa × aa) or two genes (a dihybrid cross such as AaBb × AaBb). It draws the grid and turns it into genotype ratios, phenotype ratios and the probability of each combination of traits.",
  ],
  howToUse: [
    "Pick a letter for each gene. Write the dominant allele in upper case and the recessive allele in lower case.",
    "Type parent 1's genotype, for example Aa for one gene or AaBb for two genes.",
    "Type parent 2's genotype with the same letters, for example aa or Aabb.",
    "Read the phenotype ratio, then check the grid and the tables for each genotype and its probability.",
  ],
  formulas: [
    { title: "Gametes", expression: "gametes per parent = 2ⁿ for n genes", explanation: "Each gamete carries one allele of every gene. With two genes a parent such as AaBb makes AB, Ab, aB and ab in equal shares." },
    { title: "Probability of a genotype", expression: "P = squares with that genotype ÷ total squares", explanation: "A one-gene cross has 4 squares and a two-gene cross has 16, all equally likely." },
    { title: "Product rule", expression: "P(A_ and B_) = P(A_) × P(B_)", explanation: "With independent assortment the genes behave separately. For AaBb × AaBb, 3/4 × 3/4 = 9/16 of offspring show both dominant traits." },
  ],
  examples: [
    {
      title: "Two heterozygous parents, one gene",
      inputs: { parent1: "Aa", parent2: "Aa" },
      steps: ["Each parent makes A and a gametes in equal numbers.", "The grid gives AA, Aa, Aa and aa: a genotype ratio of 1 : 2 : 1.", "AA and Aa both show the dominant trait, so the phenotype ratio is 3 : 1 (75% and 25%)."],
      expectedPrimary: "3 : 1",
    },
    {
      title: "A classic dihybrid cross",
      inputs: { parent1: "AaBb", parent2: "AaBb" },
      steps: ["Each parent makes four gametes: AB, Ab, aB and ab.", "The 4 × 4 grid has 16 squares and 9 different genotypes.", "Grouped by traits: 9 A_B_, 3 A_bb, 3 aaB_ and 1 aabb, so the ratio is 9 : 3 : 3 : 1."],
      expectedPrimary: "9 : 3 : 3 : 1",
    },
    {
      title: "Test cross with a double recessive",
      inputs: { parent1: "AaBb", parent2: "aabb" },
      steps: ["Parent 2 can only make ab gametes, so each offspring shows the alleles it got from parent 1.", "Parent 1's four gametes are equally likely, so the four phenotypes appear in a 1 : 1 : 1 : 1 ratio, 25% each."],
      expectedPrimary: "1 : 1 : 1 : 1",
    },
  ],
  assumptions: [
    "Complete dominance: one dominant allele is enough to show the dominant trait. Incomplete dominance, codominance and multiple alleles (such as ABO blood groups) are not modelled.",
    "With two genes, they are assumed to assort independently. Linked genes on the same chromosome do not follow these ratios.",
    "Each gene has exactly two alleles and is not sex-linked. Every gamete combination is assumed equally likely to survive.",
    "The results are probabilities for each offspring. A small number of offspring can differ from the expected ratio purely by chance.",
  ],
  faqs: [
    { question: "What is the difference between genotype and phenotype ratios?", answer: "The genotype ratio counts the allele combinations, such as AA : Aa : aa = 1 : 2 : 1. The phenotype ratio counts the visible traits. With complete dominance AA and Aa look the same, so the same cross gives a 3 : 1 phenotype ratio." },
    { question: "Why does the grid show the same gamete twice for some parents?", answer: "A parent such as AA makes only A gametes, but the grid keeps one row or column per allele so that every square has the same probability. Duplicate headers simply mean that gamete is twice as likely." },
    { question: "Can I enter three genes?", answer: "Not here. A three-gene cross needs 64 squares, and it is easier to multiply the one-gene probabilities with the product rule. Run each gene through the calculator separately and multiply the chances you need." },
  ],
  related: ["hardy-weinberg-calculator", "probability-calculator", "permutations-combinations-calculator"],
  updated: "2026-10-24",
  engine: punnettEngine,
  text,
  makeEngine: makePunnettEngine,
  translations,
});
