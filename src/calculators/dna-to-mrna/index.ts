import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dnaToMrnaEngine, makeDnaToMrnaEngine } from "./engine";

export const dnaToMrna = defineCalculator({
  id: "dna-to-mrna",
  slug: "dna-to-mrna-calculator",
  status: "published",
  title: "DNA to mRNA and Protein Translator",
  shortTitle: "DNA to mRNA",
  category: "biology",
  collections: ["education-research", "healthcare"],
  summary: "Transcribe a DNA sequence into mRNA and translate it into a protein with the standard genetic code, with the complementary strand and GC content.",
  metaTitle: "DNA to mRNA Calculator – Transcribe and Translate",
  metaDescription: "Turn a coding or template DNA strand into mRNA, then into a protein in one- and three-letter codes using the standard genetic code, with GC content.",
  keywords: ["dna to mrna", "transcription", "translation", "codon", "genetic code", "reverse complement", "protein sequence", "amino acids", "gc content"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "The Genetic Codes (transl_table=1, the standard code)",
      publisher: "National Center for Biotechnology Information (NCBI)",
      url: "https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi",
      usedFor: "The codon table: which amino acid each of the 64 codons encodes, and the stop codons UAA, UAG and UGA.",
    },
    {
      title: "Biology 2e, Chapter 15: Genes and Proteins (15.1 The Genetic Code)",
      publisher: "OpenStax, Rice University",
      usedFor: "Transcription from the template strand, the mRNA matching the coding strand with U for T, and reading codons from a start codon to a stop codon.",
    },
  ],
  intro: [
    "A gene is copied into messenger RNA (transcription), and the mRNA is read three bases at a time to build a protein (translation). This tool does both steps for a DNA sequence you paste in, using the standard genetic code that most organisms share.",
    "The mRNA has the same sequence as the coding (sense) strand, with uracil (U) in place of thymine (T). If you have the template (antisense) strand instead, the mRNA is its reverse complement. You also get the complementary DNA strand, the protein in one-letter and three-letter codes, the number of codons and the GC content.",
  ],
  howToUse: [
    "Paste the DNA sequence. Upper or lower case both work, and spaces, line breaks and position numbers from a sequence file are skipped.",
    "Say whether the sequence is the coding strand or the template strand. Both are read 5′→3′, as sequences are normally written.",
    "Choose where translation starts: at the first base, or at the first AUG start codon in the mRNA.",
    "Choose whether translation stops at the first stop codon, or reads through and marks each stop with *.",
  ],
  formulas: [
    { title: "Transcription (coding strand)", expression: "mRNA = coding strand with T → U", explanation: "The mRNA is built against the template strand, so it matches the coding strand base for base, except that RNA uses U instead of T." },
    { title: "Transcription (template strand)", expression: "mRNA = reverse complement of the template, with T → U", explanation: "Each base is paired (A–U, T–A, C–G, G–C) and the result is reversed so it reads 5′→3′." },
    { title: "Translation", expression: "codon (3 bases) → amino acid, from the start to the first UAA, UAG or UGA", explanation: "Codons are looked up in the standard genetic code (NCBI translation table 1). AUG codes for methionine and is the usual start codon." },
    { title: "GC content", expression: "GC % = (G + C) ÷ total bases × 100", explanation: "The share of bases in the DNA that are guanine or cytosine. It is the same for both strands." },
  ],
  examples: [
    {
      title: "A coding strand translated from the first AUG",
      inputs: { sequence: "GCATGCCGTGGAAATAGC", strand: "coding", frame: "aug", stops: "stop" },
      steps: [
        "Replace T with U: GCAUGCCGUGGAAAUAGC.",
        "The first AUG starts at base 3, so the reading frame is AUG CCG UGG AAA UAG, with one base (C) left over.",
        "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = stop.",
        "Protein: MPWK (Met-Pro-Trp-Lys).",
      ],
      expectedPrimary: "GC AUG CCG UGG AAA UAG C",
    },
    {
      title: "A template strand",
      inputs: { sequence: "TCACTTAGCCAT", strand: "template", frame: "first", stops: "stop" },
      steps: [
        "Reverse complement of TCACTTAGCCAT: ATGGCTAAGTGA.",
        "Replace T with U: AUG GCU AAG UGA.",
        "AUG = Met, GCU = Ala, AAG = Lys, UGA = stop, giving MAK.",
      ],
      expectedPrimary: "AUG GCU AAG UGA",
    },
    {
      title: "Reading through stop codons",
      inputs: { sequence: "atg taa cag tgg tag", strand: "coding", frame: "first", stops: "readThrough" },
      steps: [
        "Upper case, spaces removed and T → U: AUG UAA CAG UGG UAG.",
        "AUG = Met, UAA = stop, CAG = Gln, UGG = Trp, UAG = stop.",
        "With read-through, the protein is shown as M*QW*.",
      ],
      expectedPrimary: "AUG UAA CAG UGG UAG",
    },
  ],
  assumptions: [
    "The standard genetic code (NCBI translation table 1) is used. Mitochondria and some microbes use other codes, in which a few codons mean something different.",
    "The sequence is treated as one continuous coding region. Introns, splicing, RNA editing and other processing in real genes are not modelled.",
    "Only AUG is used as a start codon when you start at the first AUG; the rare alternative start codons are ignored.",
    "Both strands are entered and shown 5′→3′. The complementary strand is shown as the reverse complement, so it also reads 5′→3′.",
  ],
  faqs: [
    { question: "Which strand should I choose?", answer: "Most databases list the coding (sense) strand, whose sequence matches the mRNA apart from U for T. Choose the template (antisense) strand only if your sequence is the one the RNA polymerase reads, the strand complementary to the mRNA." },
    { question: "Why does the protein stop early?", answer: "Translation ends at the first stop codon (UAA, UAG or UGA) in the reading frame. If you expected a longer protein, check that you chose the right strand and starting point, or switch to read-through to see where the stops are." },
    { question: "What are the bases left over at the end?", answer: "Codons are three bases long. If the number of bases after the start is not a multiple of three, the last one or two bases cannot form a codon, so they are not translated." },
  ],
  related: ["punnett-square-calculator", "dna-concentration-calculator", "hardy-weinberg-calculator"],
  updated: "2026-10-28",
  engine: dnaToMrnaEngine,
  text,
  makeEngine: makeDnaToMrnaEngine,
  translations,
});
