import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const nl: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Molariteitscalculator",
    shortTitle: "Molariteit",
    summary: "Bereken de molaire concentratie van een oplossing uit de massa van de opgeloste stof, de molaire massa en het volume.",
    metaTitle: "Molariteitscalculator – molaire concentratie (mol/L)",
    metaDescription:
      "Bereken de molariteit in mol/L uit de massa van de opgeloste stof, de molaire massa en het volume van de oplossing, ook in mol en millimolair.",
    keywords: ["molariteit", "molaire concentratie", "mol/L", "mol", "oplossing", "scheikunde", "concentratie"],
    intro: [
      "Molariteit is het aantal mol opgeloste stof per liter oplossing. Het is de meest gebruikte manier om een concentratie uit te drukken in scheikundige laboratoria.",
      "Vul de afgewogen massa in, de molaire massa van de opgeloste stof en het eindvolume van de oplossing.",
    ],
    howToUse: [
      "Vul de massa van de opgeloste stof in gram in.",
      "Vul de molaire massa in g/mol in.",
      "Vul het eindvolume van de oplossing in en kies liter of milliliter.",
      "Lees de molariteit en het aantal mol opgeloste stof af.",
    ],
    formulas: [
      { title: "Mol", expression: "n = massa ÷ molaire massa", explanation: "Geeft het aantal mol uit het aantal gram." },
      { title: "Molariteit", expression: "M = n ÷ V", explanation: "V is het volume van de oplossing in liter." },
    ],
    examples: [
      { title: "58,44 g NaCl in 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g glucose in 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "Het volume is het eindvolume van de oplossing nadat de stof is opgelost.",
      "De molaire massa moet gelden voor de exacte vorm die je gebruikt, inclusief eventueel kristalwater.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen molariteit en molaliteit?",
        answer: "Molariteit is het aantal mol per liter oplossing; molaliteit is het aantal mol per kilogram oplosmiddel.",
      },
      {
        question: "Hoe maak ik een oplossing van 1 M?",
        answer: "Los één molaire massa in gram van de stof op en voeg oplosmiddel toe tot het totale volume 1 liter is.",
      },
      { question: "Wat betekent mM?", answer: "Millimolair: een duizendste mol per liter." },
    ],
    sourcesUsedFor: ["De definitie van molariteit en het verband tussen massa en aantal mol."],
  },
  text: {
    mass: "Massa van de opgeloste stof",
    molarMass: "Molaire massa",
    molarMassHelp: "Uit het periodiek systeem, bijv. NaCl = 58,44 g/mol.",
    volume: "Volume van de oplossing",
    volumeUnit: "Eenheid van volume",
    volumeUnits: { L: "Liter (L)", mL: "Milliliter (mL)" },
    molarity: "Molariteit",
    amount: "Hoeveelheid opgeloste stof",
    millimolar: "In millimolair",
    note: "Het volume is het eindvolume van de oplossing, niet het volume toegevoegd oplosmiddel.",
  },
};

export default nl;
