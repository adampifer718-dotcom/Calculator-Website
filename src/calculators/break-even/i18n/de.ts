import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const de: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Break-even-Rechner",
    shortTitle: "Break-even",
    summary: "Ermitteln Sie, wie viele Einheiten Sie verkaufen müssen, um Ihre Fixkosten zu decken, und den Break-even-Umsatz.",
    metaTitle: "Break-even-Rechner – Menge und Umsatz",
    metaDescription: "Berechnen Sie Ihren Break-even-Punkt in Stück und Umsatz aus Fixkosten, Preis pro Einheit und variablen Kosten pro Einheit – mit Deckungsbeitrag.",
    keywords: ["Break-even-Punkt berechnen", "Gewinnschwelle", "Deckungsbeitrag", "Fixkosten", "variable Kosten", "Break-even-Analyse", "Gewinnschwellenmenge"],
    intro: [
      "Der Break-even-Punkt (die Gewinnschwelle) ist erreicht, wenn der Gesamtumsatz den Gesamtkosten entspricht – es gibt also weder Gewinn noch Verlust.",
      "Jede verkaufte Einheit trägt ihren Preis abzüglich der variablen Kosten zur Deckung der Fixkosten bei. Sind diese gedeckt, ist jeder weitere Verkauf Gewinn.",
    ],
    howToUse: [
      "Geben Sie Ihre Fixkosten für den Zeitraum ein.",
      "Geben Sie den Verkaufspreis pro Einheit ein.",
      "Geben Sie die variablen Kosten pro Einheit ein.",
      "Lesen Sie die Menge und den Umsatz ab, die zum Erreichen der Gewinnschwelle nötig sind.",
    ],
    formulas: [
      { title: "Break-even-Menge", expression: "Menge = Fixkosten ÷ (Preis − variable Kosten)", explanation: "Der Nenner ist der Deckungsbeitrag pro Einheit." },
      { title: "Break-even-Umsatz", expression: "Umsatz = Menge × Preis", explanation: "Gleichbedeutend: Fixkosten ÷ Deckungsbeitragsquote." },
    ],
    examples: [
      { title: "10.000 $ Fixkosten, 50 $ Preis, 30 $ variable Kosten", steps: ["Deckungsbeitrag = 50 $ − 30 $ = 20 $", "Menge = 10.000 ÷ 20 = 500"] },
      { title: "2.500 $ Fixkosten, 12 $ Preis, 4,50 $ variable Kosten", steps: ["Deckungsbeitrag = 7,50 $", "Menge = 2.500 ÷ 7,5 ≈ 333,33, also 334 Einheiten"] },
    ],
    assumptions: [
      "Preis und variable Kosten pro Einheit bleiben bei jeder Menge konstant.",
      "Die Fixkosten beziehen sich auf denselben Zeitraum wie die geplanten Verkäufe.",
      "Steuern und Finanzierungskosten sind nicht enthalten, es sei denn, Sie rechnen sie zu den Fixkosten hinzu.",
    ],
    faqs: [
      {
        question: "Was ist der Deckungsbeitrag?",
        answer: "Preis minus variable Kosten pro Einheit: der Betrag, den jeder Verkauf zur Deckung der Fixkosten und zum Gewinn beiträgt.",
      },
      {
        question: "Was ist, wenn die variablen Kosten höher als der Preis sind?",
        answer: "Dann verlieren Sie bei jedem Verkauf Geld und können bei diesem Preis die Gewinnschwelle nie erreichen.",
      },
      {
        question: "Wie ermittle ich die Menge für einen Zielgewinn?",
        answer: "Addieren Sie den Zielgewinn zu den Fixkosten und teilen Sie durch den Deckungsbeitrag.",
      },
    ],
    sourcesUsedFor: ["Kosten-Volumen-Gewinn-Analyse und Formeln für den Break-even-Punkt."],
  },
  text: {
    fixed: "Fixkosten",
    fixedHelp: "Kosten, die sich mit der Menge nicht ändern, z. B. Miete und Gehälter.",
    price: "Preis pro Einheit",
    variable: "Variable Kosten pro Einheit",
    variableHelp: "Material, Verpackung und andere Kosten pro Einheit.",
    variableTooHigh: "Die variablen Kosten müssen unter dem Preis liegen, sonst erreichen Sie die Gewinnschwelle nie.",
    units: "Break-even-Menge",
    unitsSuffix: "Einheiten",
    caption: "Aufgerundet auf {count} ganze Einheiten.",
    revenue: "Break-even-Umsatz",
    contribution: "Deckungsbeitrag pro Einheit",
    ratio: "Deckungsbeitragsquote",
  },
};

export default de;
