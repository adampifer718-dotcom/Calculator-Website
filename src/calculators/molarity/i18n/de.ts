import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const de: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Molaritätsrechner",
    shortTitle: "Molarität",
    summary: "Berechnen Sie die Stoffmengenkonzentration einer Lösung aus der Masse des gelösten Stoffs, der molaren Masse und dem Volumen.",
    metaTitle: "Molaritätsrechner – Stoffmengenkonzentration (mol/L)",
    metaDescription: "Berechnen Sie die Molarität in mol/L aus der Masse des gelösten Stoffs, seiner molaren Masse und dem Volumen der Lösung – mit Stoffmenge und Millimolar.",
    keywords: ["Molarität berechnen", "Stoffmengenkonzentration", "mol/L", "Stoffmenge berechnen", "molare Masse", "Konzentration Chemie", "Lösung herstellen"],
    intro: [
      "Die Molarität ist die Stoffmenge des gelösten Stoffs in Mol pro Liter Lösung. Sie ist im Chemielabor die gebräuchlichste Angabe der Konzentration.",
      "Geben Sie die abgewogene Masse, die molare Masse des gelösten Stoffs und das Endvolumen der Lösung ein.",
    ],
    howToUse: [
      "Geben Sie die Masse des gelösten Stoffs in Gramm ein.",
      "Geben Sie seine molare Masse in g/mol ein.",
      "Geben Sie das Endvolumen der Lösung ein und wählen Sie Liter oder Milliliter.",
      "Lesen Sie die Molarität und die Stoffmenge des gelösten Stoffs ab.",
    ],
    formulas: [
      { title: "Stoffmenge", expression: "n = Masse ÷ molare Masse", explanation: "Ergibt die Stoffmenge in Mol aus der Masse in Gramm." },
      { title: "Molarität", expression: "M = n ÷ V", explanation: "V ist das Volumen der Lösung in Litern." },
    ],
    examples: [
      { title: "58,44 g NaCl in 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g Glucose in 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "Das Volumen ist das Endvolumen der Lösung, nachdem sich der Stoff gelöst hat.",
      "Die molare Masse muss für die genau verwendete Form gelten, einschließlich eventuellen Kristallwassers.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Molarität und Molalität?",
        answer: "Die Molarität ist die Stoffmenge pro Liter Lösung, die Molalität die Stoffmenge pro Kilogramm Lösungsmittel.",
      },
      {
        question: "Wie stelle ich eine 1-molare Lösung her?",
        answer: "Lösen Sie die molare Masse des Stoffs in Gramm auf und füllen Sie mit Lösungsmittel auf, bis das Gesamtvolumen 1 Liter beträgt.",
      },
      { question: "Was bedeutet mM?", answer: "Millimolar: ein Tausendstel Mol pro Liter." },
    ],
    sourcesUsedFor: ["Definition der Molarität und der Zusammenhang zwischen Masse und Stoffmenge."],
  },
  text: {
    mass: "Masse des gelösten Stoffs",
    molarMass: "Molare Masse",
    molarMassHelp: "Aus dem Periodensystem, z. B. NaCl = 58,44 g/mol.",
    volume: "Volumen der Lösung",
    volumeUnit: "Volumeneinheit",
    volumeUnits: { L: "Liter (L)", mL: "Milliliter (mL)" },
    molarity: "Molarität",
    amount: "Stoffmenge des gelösten Stoffs",
    millimolar: "In Millimolar",
    note: "Das Volumen ist das Endvolumen der Lösung, nicht das Volumen des zugegebenen Lösungsmittels.",
  },
};

export default de;
