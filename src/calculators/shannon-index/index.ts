import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeShannonIndexEngine, shannonIndexEngine } from "./engine";

export const shannonIndex = defineCalculator({
  id: "shannon-index",
  slug: "shannon-diversity-calculator",
  status: "published",
  title: "Shannon Diversity Index Calculator",
  shortTitle: "Shannon diversity index",
  category: "ecology",
  collections: ["education-research", "environment-energy", "agriculture-gardening"],
  summary: "Calculate the Shannon diversity index H′, Pielou's evenness, the effective number of species and Simpson's indices from counts of individuals per species.",
  metaTitle: "Shannon Diversity Index Calculator – H′ and Evenness",
  metaDescription: "Find the Shannon index H′ from species counts in ln, log2 or log10, with Pielou's evenness J′, effective species number and Simpson's diversity indices.",
  keywords: ["shannon index", "shannon-wiener index", "species diversity", "biodiversity index", "pielou evenness", "simpson index", "species richness", "ecology", "effective number of species"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Student Handout 1A: calculating biodiversity indices (Shannon and Simpson)",
      publisher: "University of Florida, Department of Entomology and Nematology",
      url: "https://entnemdept.ufl.edu/hodges/ProtectUs/lp_webfolder/9_12_grade/Student_Handout_1A.pdf",
      usedFor: "The Shannon index H′ = −Σ pᵢ ln pᵢ with pᵢ = nᵢ ÷ N, and a worked example of the Shannon and Simpson indices.",
    },
    {
      title: "Biodiversity sampling exercise",
      publisher: "University of Kentucky",
      url: "https://www.uky.edu/~tmute2/GEI-Web/GEI/GEI10/Biodiversity_Sampling_Exercise.doc",
      usedFor: "Simpson's index from counts, Σ n(n − 1) ÷ (N(N − 1)).",
    },
    {
      title: "A comparison of three diversity indices based on their components of richness and evenness (DeJong, Oikos 26, 1975)",
      publisher: "Oikos, copy hosted by the University of California, Davis",
      url: "https://dejong.ucdavis.edu/sites/g/files/dgvnsk8456/files/files/page/1%20DeJong%20%20Species%20Diversity%20Oikos%201975.pdf",
      usedFor: "Evenness as H′ divided by its maximum, log S, which is reached when all species are equally abundant.",
    },
  ],
  intro: [
    "The Shannon index H′ (also called Shannon–Wiener or Shannon–Weaver) measures the diversity of a community from how many individuals of each species you counted. It rises with the number of species and with how evenly the individuals are spread among them, and it is 0 when only one species is present.",
    "This calculator gives H′ in the logarithm base you choose, Pielou's evenness J′, the effective number of species, and Simpson's index with its Gini–Simpson and inverse forms, plus a table of each species' proportion of the total.",
  ],
  howToUse: [
    "Enter the number of individuals counted for each species, one count per species, separated by commas, spaces or new lines.",
    "Choose the logarithm base. The natural log is the most common in ecology; base 2 gives H′ in bits.",
    "Read H′ and the other indices. Zero counts are allowed but ignored, and the result says how many there were.",
  ],
  formulas: [
    { title: "Shannon index", expression: "H′ = −Σ pᵢ log pᵢ, with pᵢ = nᵢ ÷ N", explanation: "nᵢ is the count of species i and N the total count. Only species with nᵢ > 0 are included." },
    { title: "Pielou's evenness", expression: "J′ = H′ ÷ log S", explanation: "S is the number of species present. J′ runs from near 0 (one species dominates) to 1 (all species equally common), and needs S ≥ 2." },
    { title: "Effective number of species", expression: "D₁ = base^H′ (e^H′ for the natural log)", explanation: "The number of equally common species that would give the same H′. It does not depend on the base." },
    { title: "Simpson's index", expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini–Simpson = 1 − D; inverse = 1 ÷ D", explanation: "D is the chance that two individuals drawn at random without replacement belong to the same species." },
  ],
  examples: [
    {
      title: "Six bird species along a transect",
      inputs: { counts: "42, 27, 15, 9, 5, 2", base: "e" },
      steps: [
        "N = 100, so the proportions are 0.42, 0.27, 0.15, 0.09, 0.05 and 0.02.",
        "H′ = −(0.42 ln 0.42 + 0.27 ln 0.27 + … + 0.02 ln 0.02) ≈ 1.4472.",
        "J′ = 1.4472 ÷ ln 6 ≈ 0.808; effective number e^1.4472 ≈ 4.25 species.",
        "Simpson's D = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2,728 ÷ 9,900 ≈ 0.2756.",
      ],
      expectedPrimary: 1.4471804111294126,
    },
    {
      title: "Quadrat counts with absent species, in bits",
      inputs: { counts: "12 0 30 8 0 25 5", base: "2" },
      steps: [
        "The two zeros are ignored: S = 5 species and N = 80 individuals.",
        "H′ = −Σ pᵢ log₂ pᵢ ≈ 2.0478 bits.",
        "J′ = 2.0478 ÷ log₂ 5 ≈ 0.882.",
      ],
      expectedPrimary: 2.047774181190933,
    },
    {
      title: "A community dominated by one species, base 10",
      inputs: { counts: "60 25 10 5", base: "10" },
      steps: ["p = 0.60, 0.25, 0.10, 0.05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0.4487.", "Effective number 10^0.4487 ≈ 2.81 species."],
      expectedPrimary: 0.44867574738500343,
    },
  ],
  assumptions: [
    "The counts are a random sample of the community, and every individual was identified to species. Rare species are easily missed in small samples, which lowers H′.",
    "H′ uses the observed proportions directly, without the small-sample bias corrections some studies apply.",
    "Values in different logarithm bases differ by a constant factor (H′ in bits = H′ in nats ÷ ln 2), so compare only indices in the same base.",
    "Simpson's index here uses the finite-sample form nᵢ(nᵢ − 1) ÷ (N(N − 1)). Some texts use Σ pᵢ² instead, which gives slightly different values for small samples.",
  ],
  faqs: [
    { question: "What is a high Shannon index?", answer: "There is no fixed scale: H′ grows with the number of species and the evenness, and its maximum is log S. That is why evenness J′ (H′ ÷ log S) and the effective number of species are often easier to interpret and compare." },
    { question: "Why are zero counts ignored?", answer: "A species with no individuals has pᵢ = 0, and the term pᵢ log pᵢ tends to 0 as pᵢ shrinks, so it adds nothing to H′. It also does not count towards the species richness S." },
    { question: "How is the Shannon index different from Simpson's?", answer: "Both combine richness and evenness, but Simpson's index weights the common species more heavily, while H′ is more sensitive to rare species. Reporting both, or the effective numbers of species, gives a fuller picture." },
  ],
  related: ["mean-median-mode-calculator", "hardy-weinberg-calculator", "log-calculator"],
  updated: "2026-10-28",
  engine: shannonIndexEngine,
  text,
  makeEngine: makeShannonIndexEngine,
  translations,
});
