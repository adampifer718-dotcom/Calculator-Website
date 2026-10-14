import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const de: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Zinseszinsrechner",
    shortTitle: "Zinseszins",
    summary: "Sehen Sie, wie eine Einlage durch Zinseszins wächst – mit einer Tabelle des Guthabens Jahr für Jahr.",
    metaTitle: "Zinseszinsrechner – Endkapital berechnen",
    metaDescription: "Berechnen Sie Zinseszins und Endkapital einer Einlage bei jährlicher, vierteljährlicher, monatlicher oder täglicher Verzinsung – mit Guthabentabelle pro Jahr.",
    keywords: ["Zinseszins berechnen", "Zinseszinsrechner", "Endkapital", "Sparrechner", "Effektivzins", "Zinsrechner", "Kapitalwachstum"],
    intro: [
      "Beim Zinseszins werden nicht nur auf die ursprüngliche Einlage, sondern auch auf bereits erhaltene Zinsen Zinsen gezahlt, sodass das Wachstum mit der Zeit zunimmt.",
      "Geben Sie Einlage, Zinssatz, Laufzeit und Zinsperiode ein, um das Endkapital, die erzielten Zinsen und das Guthaben für jedes Jahr zu sehen.",
    ],
    howToUse: [
      "Geben Sie die Anfangseinlage ein.",
      "Geben Sie den jährlichen Zinssatz und die Anzahl der Jahre ein.",
      "Wählen Sie, wie oft die Zinsen gutgeschrieben werden.",
      "Lesen Sie Endkapital, erzielte Zinsen und effektiven Jahreszins ab.",
    ],
    formulas: [
      {
        title: "Endkapital",
        expression: "A = P × (1 + r ÷ n)^(n × t)",
        explanation: "P ist die Einlage, r der Jahreszins als Dezimalzahl, n die Anzahl der Zinsperioden pro Jahr und t die Anzahl der Jahre.",
      },
      {
        title: "Effektiver Jahreszins",
        expression: "EAR = (1 + r ÷ n)ⁿ − 1",
        explanation: "Der gleichwertige Zinssatz bei einmal jährlicher Verzinsung, oft auch als Rendite p. a. (APY) bezeichnet.",
      },
    ],
    examples: [
      { title: "10.000 $ zu 5 % bei monatlicher Verzinsung über 10 Jahre", steps: ["A = 10.000 × (1 + 0,05 ÷ 12)^120", "≈ 16.470,09 $"] },
      { title: "1.000 $ zu 10 % bei jährlicher Verzinsung über 2 Jahre", steps: ["A = 1.000 × 1,1²", "= 1.210 $"] },
    ],
    assumptions: [
      "Der Zinssatz bleibt fest, und es gibt keine weiteren Einzahlungen, Auszahlungen, Steuern oder Gebühren.",
      "Frühere oder beworbene Zinssätze garantieren keine künftigen Erträge. Dies ist keine Finanzberatung.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen einfachen Zinsen und Zinseszins?",
        answer: "Einfache Zinsen werden nur auf die ursprüngliche Einlage gezahlt. Zinseszinsen werden auch auf bereits erhaltene Zinsen gezahlt.",
      },
      {
        question: "Bringt eine häufigere Verzinsung mehr?",
        answer: "Ja, etwas. Monatliche Verzinsung ergibt beim gleichen Nominalzins einen höheren effektiven Zinssatz als jährliche Verzinsung.",
      },
      {
        question: "Was ist die 72er-Regel?",
        answer: "Teilen Sie 72 durch den Jahreszins, um die Jahre bis zur Verdopplung zu schätzen. Bei 6 % verdoppelt sich das Geld in etwa 12 Jahren.",
      },
    ],
    sourcesUsedFor: ["Formeln für Zinseszins und Endkapital."],
  },
  text: {
    principal: "Anfangseinlage",
    rate: "Jährlicher Zinssatz",
    years: "Laufzeit",
    frequency: "Verzinsung",
    frequencies: { "1": "Jährlich", "2": "Halbjährlich", "4": "Vierteljährlich", "12": "Monatlich", "365": "Täglich" },
    future: "Endkapital",
    interest: "Erzielte Zinsen",
    effective: "Effektiver Jahreszins",
    tableCaption: "Guthaben am Ende jedes Jahres",
    tableColumns: { year: "Jahr", balance: "Guthaben", interest: "Zinsen bisher" },
    note: "Annahmen: fester Zinssatz, keine weiteren Ein- oder Auszahlungen sowie keine Steuern oder Gebühren.",
  },
};

export default de;
