import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeProteinConcentrationEngine, proteinConcentrationEngine } from "./engine";

export const proteinConcentration = defineCalculator({
  id: "protein-concentration",
  slug: "protein-concentration-calculator",
  status: "published",
  title: "Protein Concentration Calculator (A280)",
  shortTitle: "Protein concentration",
  category: "biology",
  collections: ["education-research", "healthcare"],
  summary: "Turn an A280 absorbance reading into a protein concentration in mg/mL and µM with the Beer–Lambert law, from a molar or mass extinction coefficient.",
  metaTitle: "Protein Concentration Calculator – A280 to mg/mL",
  metaDescription: "Convert A280 readings to protein concentration in mg/mL and µM using a molar or mass extinction coefficient, or estimate ε from Trp, Tyr and cystines.",
  keywords: ["protein concentration", "a280", "extinction coefficient", "beer-lambert law", "molar absorptivity", "e1%", "protein quantification", "mg/ml", "tryptophan tyrosine"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "How to measure and predict the molar absorption coefficient of a protein (Pace, Vajdos, Fee, Grimsley and Gray, Protein Science 4:2411–2423, 1995)",
      publisher: "Protein Science, via PubMed Central (NCBI)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2143013",
      usedFor: "The estimate ε₂₈₀ = 5,500 × Trp + 1,490 × Tyr + 125 × cystine for a folded protein in water, and its lower reliability for proteins without tryptophan.",
    },
    {
      title: "Protein measurements with the NanoDrop spectrophotometer (Protein A280)",
      publisher: "University of Wisconsin–Madison, Biomedical Engineering shared lab",
      url: "https://wwwtest.sharedlab.bme.wisc.edu/labs/1002A/equipment/NanoDrop/ProteinMeasurements.pdf",
      usedFor: "Calculating concentration from A280 with a mass extinction coefficient, and the rough reference that a 1 mg/mL protein solution gives an A280 of about 1.0 over 1 cm.",
    },
  ],
  intro: [
    "Proteins absorb ultraviolet light near 280 nm, mostly because of the aromatic amino acids tryptophan and tyrosine, with a small contribution from disulfide bonds (cystines). By the Beer–Lambert law, the absorbance is proportional to the concentration, the path length and an extinction coefficient that is specific to each protein.",
    "This calculator turns an A280 reading into a concentration. You can give a molar extinction coefficient ε with the molecular weight, a mass extinction coefficient (the absorbance of a 1 mg/mL solution), or the counts of Trp, Tyr and cystines in the sequence to estimate ε.",
  ],
  howToUse: [
    "Choose how you will supply the extinction coefficient.",
    "Enter the blank-corrected A280, the path length and the dilution factor if you diluted the sample before measuring it.",
    "Enter ε and the molecular weight, the mass extinction coefficient, or the numbers of tryptophans, tyrosines and disulfide bonds, plus the molecular weight.",
    "Optionally enter the stock volume to get the total amount of protein.",
  ],
  formulas: [
    { title: "Beer–Lambert law", expression: "c (M) = A × dilution ÷ (ε × l)", explanation: "A is the measured absorbance, ε the molar extinction coefficient in M⁻¹ cm⁻¹ and l the path length in cm." },
    { title: "Mass concentration", expression: "c (mg/mL) = c (M) × MW (g/mol)", explanation: "Moles per litre times grams per mole gives grams per litre, which equals milligrams per millilitre." },
    { title: "Mass extinction coefficient", expression: "c (mg/mL) = A × dilution ÷ (E0.1% × l), with E0.1% = ε ÷ MW", explanation: "E0.1% is the absorbance of a 1 mg/mL (0.1%) solution over 1 cm." },
    { title: "Estimated ε (Pace et al. 1995)", expression: "ε₂₈₀ = 5,500 × nTrp + 1,490 × nTyr + 125 × nCystine", explanation: "In M⁻¹ cm⁻¹, for a folded protein in water. A cystine is a disulfide bond between two cysteines." },
  ],
  examples: [
    {
      title: "From a known molar extinction coefficient",
      inputs: { mode: "molar", a280: 0.72, pathLength: 1, dilution: 1, epsilon: 43824, mw: 66463, volume: 2 },
      steps: [
        "c = 0.72 ÷ (43,824 × 1) = 1.643 × 10⁻⁵ M = 16.43 µM.",
        "mg/mL = 1.643 × 10⁻⁵ mol/L × 66,463 g/mol = 1.092 g/L = 1.092 mg/mL.",
        "In 2 mL: 1.092 × 2 ≈ 2.18 mg.",
      ],
      expectedPrimary: 1.0919441401971521,
    },
    {
      title: "Estimating ε from the sequence",
      inputs: { mode: "residues", a280: 0.5, pathLength: 1, dilution: 1, trp: 6, tyr: 3, cystine: 4, mw: 14307, volume: null },
      steps: [
        "ε = 5,500 × 6 + 1,490 × 3 + 125 × 4 = 37,970 M⁻¹ cm⁻¹.",
        "c = 0.5 ÷ 37,970 = 1.317 × 10⁻⁵ M = 13.17 µM.",
        "mg/mL = 1.317 × 10⁻⁵ × 14,307 ≈ 0.1884 mg/mL.",
      ],
      expectedPrimary: 0.18839873584408745,
    },
    {
      title: "With a mass extinction coefficient, a short path and a dilution",
      inputs: { mode: "mass", a280: 0.88, pathLength: 0.5, dilution: 4, e01: 1.45, mwOptional: null, volume: null },
      steps: ["Correct for the dilution: 0.88 × 4 = 3.52.", "mg/mL = 3.52 ÷ (1.45 × 0.5 cm) ≈ 4.855 mg/mL."],
      expectedPrimary: 4.855172413793103,
    },
  ],
  assumptions: [
    "The A280 reading is blank-corrected against the same buffer and lies within the linear range of the instrument. Many spectrophotometers lose linearity at high absorbance, so very concentrated samples should be diluted.",
    "The extinction coefficient applies to your protein in its buffer. Estimates from the amino acid composition are fairly reliable for proteins that contain tryptophan, and less reliable for proteins without it; measuring ε is better than predicting it.",
    "All substances that absorb at 280 nm are counted, including nucleic acids, some buffers and light scattered by aggregates. These make the result too high.",
    "The dilution factor is applied to the absorbance before the concentration is calculated, so the result is for the undiluted stock.",
  ],
  faqs: [
    { question: "Why is mg/mL equal to g/L?", answer: "A millilitre is one thousandth of a litre and a milligram is one thousandth of a gram, so the two thousandths cancel. That is why molarity (mol/L) times the molecular weight (g/mol) gives mg/mL directly." },
    { question: "What if I don't know the extinction coefficient?", answer: "If you know the sequence, count the tryptophans, tyrosines and disulfide bonds and use the estimate mode. For an unknown mixture, a mass extinction coefficient of about 1.0 is sometimes used as a rough guide, but the result can be off by a large factor." },
    { question: "Should I count cysteines or cystines?", answer: "Cystines: each disulfide bond between two cysteines counts once. Free cysteines (reduced thiols) absorb very little at 280 nm. For a fully reduced protein, enter 0 cystines." },
  ],
  related: ["dna-concentration-calculator", "molarity-calculator", "dilution-calculator"],
  updated: "2026-10-28",
  engine: proteinConcentrationEngine,
  text,
  makeEngine: makeProteinConcentrationEngine,
  translations,
});
