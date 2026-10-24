import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dnaConcentrationEngine, makeDnaConcentrationEngine } from "./engine";

export const dnaConcentration = defineCalculator({
  id: "dna-concentration",
  slug: "dna-concentration-calculator",
  status: "published",
  title: "DNA and RNA Concentration Calculator",
  shortTitle: "DNA concentration",
  category: "biology",
  collections: ["education-research", "healthcare"],
  summary: "Turn an A260 absorbance reading into a DNA or RNA concentration in ng/µL, with the total yield and A260/A280 and A260/A230 ratios.",
  metaTitle: "DNA & RNA Concentration Calculator – A260 to ng/µL",
  metaDescription: "Convert A260 readings to DNA or RNA concentration in ng/µL using the 50, 33 and 40 µg/mL factors, with dilution, total yield and purity ratios.",
  keywords: ["dna concentration", "rna concentration", "a260", "nucleic acid quantification", "260/280 ratio", "260/230 ratio", "spectrophotometer", "ng/µl"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Spectrophotometric measurement of DNA concentration (Bench guide: Analyzing DNA)",
      publisher: "QIAGEN",
      url: "https://www.qiagen.com/az/knowledge-and-support/knowledge-hub/bench-guide/plasmid/analyzing-dna/spectrophotometric-measurement-of-dna-concentration",
      usedFor: "Measuring nucleic acid concentration from the absorbance at 260 nm with standard conversion factors.",
    },
    {
      title: "Technical bulletin: 260/280 and 260/230 ratios (NanoDrop spectrophotometers)",
      publisher: "Thermo Fisher Scientific (copy hosted by the University of Maryland)",
      url: "https://agtc.umd.edu/files/Note-on-the-260_280-and-260_230-Ratios.pdf",
      usedFor: "The commonly cited purity values of about 1.8 (DNA) and 2.0 (RNA) for A260/A280, and 2.0–2.2 for A260/A230.",
    },
  ],
  intro: [
    "Nucleic acids absorb ultraviolet light most strongly near 260 nm. Within the linear range of a spectrophotometer, the absorbance A260 is proportional to the concentration, so a single reading and a conversion factor give the amount of DNA or RNA in a sample.",
    "The standard factors are 50 µg/mL per A260 unit for double-stranded DNA, 33 for single-stranded DNA and 40 for RNA, at a 1 cm path length. This calculator applies the factor, the dilution and the path length, and adds the total yield and the A260/A280 and A260/A230 purity ratios.",
  ],
  howToUse: [
    "Choose the sample type, or enter your own conversion factor (for example one calculated for a short oligonucleotide).",
    "Enter the blank-corrected A260 reading and the path length of the cuvette or instrument.",
    "Enter the dilution factor if you diluted the sample before measuring it.",
    "Optionally add A280, A230 and the stock volume to get purity ratios and the total amount of nucleic acid.",
  ],
  formulas: [
    { title: "Concentration", expression: "c (ng/µL) = A260 ÷ path length (cm) × factor × dilution factor", explanation: "The factor is 50 for dsDNA, 33 for ssDNA and 40 for RNA, in µg/mL per absorbance unit at 1 cm. 1 µg/mL equals 1 ng/µL." },
    { title: "Total yield", expression: "amount (µg) = c (ng/µL) × volume (µL) ÷ 1000", explanation: "The concentration of the undiluted stock times its volume." },
    { title: "Purity ratios", expression: "A260/A280 and A260/A230", explanation: "About 1.8 (DNA) and 2.0 (RNA) are commonly cited for A260/A280, and 2.0–2.2 for A260/A230. These are rules of thumb, not strict limits." },
  ],
  examples: [
    {
      title: "Diluted plasmid DNA in a 1 cm cuvette",
      inputs: { type: "dsDNA", a260: 0.65, pathLength: 1, dilution: 10, a280: 0.36, a230: null, volume: 50 },
      steps: ["0.65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL", "In 50 µL: 325 × 50 ÷ 1000 = 16.25 µg", "A260/A280 = 0.65 ÷ 0.36 ≈ 1.81"],
      expectedPrimary: 325,
    },
    {
      title: "An RNA sample diluted 1 in 20",
      inputs: { type: "rna", a260: 0.42, pathLength: 1, dilution: 20, a280: 0.21, a230: 0.2, volume: 30 },
      steps: ["0.42 × 40 µg/mL × 20 = 336 ng/µL", "A260/A280 = 0.42 ÷ 0.21 = 2.00", "A260/A230 = 0.42 ÷ 0.20 = 2.10", "In 30 µL: 336 × 30 ÷ 1000 = 10.08 µg"],
      expectedPrimary: 336,
    },
    {
      title: "Single-stranded DNA in a 2 mm cuvette",
      inputs: { type: "ssDNA", a260: 0.18, pathLength: 0.2, dilution: 1, a280: null, a230: null, volume: null },
      steps: ["Normalize to 1 cm: 0.18 ÷ 0.2 = 0.9", "0.9 × 33 µg/mL × 1 = 29.7 ng/µL"],
      expectedPrimary: 29.7,
    },
  ],
  assumptions: [
    "The A260 reading is blank-corrected and within the linear range of the instrument.",
    "The standard factors are averages. A short oligonucleotide's absorbance depends on its base sequence, so a sequence-specific factor (entered as custom) is more accurate.",
    "Absorbance counts all nucleic acids and free nucleotides. Contaminating RNA in a DNA sample, or DNA in an RNA sample, raises the result.",
    "The purity ratios are commonly cited reference values, not pass/fail limits. They shift with the pH and ionic strength of the solution and the blank used.",
  ],
  faqs: [
    { question: "Why is ng/µL the same as µg/mL?", answer: "Both multiply the top and the bottom of the unit by 1,000: a microgram is 1,000 nanograms and a millilitre is 1,000 microlitres. So 325 µg/mL and 325 ng/µL describe the same concentration." },
    { question: "What does a low A260/A280 ratio mean?", answer: "Proteins and phenol absorb near 280 nm, so a ratio well below about 1.8 for DNA or 2.0 for RNA often points to such contaminants. The ratio says nothing about whether the nucleic acid is intact." },
    { question: "Do I need the path length?", answer: "Only if it is not 1 cm. The factors assume a 1 cm path. Many micro-volume instruments measure over a shorter path but already report the absorbance normalized to 1 cm, in which case you keep the default of 1." },
  ],
  related: ["molarity-calculator", "dilution-calculator", "molar-mass-calculator"],
  updated: "2026-10-24",
  engine: dnaConcentrationEngine,
  text,
  makeEngine: makeDnaConcentrationEngine,
  translations,
});
