import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const fr: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Calculateur de dilution (C₁V₁ = C₂V₂)",
    shortTitle: "Dilution",
    summary: "Résolvez C₁V₁ = C₂V₂ pour trouver le volume de solution mère, la concentration finale, le volume final ou la concentration de la solution mère.",
    metaTitle: "Calculateur de dilution – C1V1 = C2V2",
    metaDescription: "Résolvez l’équation de dilution C1V1 = C2V2 pour n’importe quelle valeur : volume de solution mère nécessaire, concentration finale, volume final ou concentration mère.",
    keywords: ["calcul dilution", "C1V1 = C2V2", "solution mère", "concentration", "préparer une solution", "facteur de dilution", "chimie"],
    intro: [
      "Lorsque vous diluez une solution, la quantité de soluté reste la même ; on a donc C₁V₁ = C₂V₂.",
      "Choisissez l’inconnue et saisissez les trois autres valeurs pour préparer une dilution.",
    ],
    howToUse: [
      "Choisissez ce que vous voulez calculer, le plus souvent le volume de solution mère nécessaire.",
      "Saisissez les trois autres valeurs, en utilisant les mêmes unités de part et d’autre.",
      "Consultez le résultat et la quantité de solvant à ajouter.",
    ],
    formulas: [
      { title: "Équation de dilution", expression: "C₁ × V₁ = C₂ × V₂", explanation: "C₁ et V₁ sont la concentration et le volume de la solution mère ; C₂ et V₂, ceux de la solution finale." },
      { title: "Solvant à ajouter", expression: "solvant = V₂ − V₁", explanation: "Ajoutez suffisamment de solvant pour atteindre le volume final." },
    ],
    examples: [
      {
        title: "Préparer 100 mL à 0,5 M à partir d’une solution mère à 2 M",
        steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL de solution mère, plus 75 mL de solvant"],
      },
      {
        title: "10 mL à 1 M dilués jusqu’à 250 mL",
        steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"],
      },
    ],
    assumptions: [
      "Les concentrations doivent être exprimées dans une même unité, et les volumes dans une même unité.",
      "Suppose que les volumes s’additionnent, ce qui est une bonne approximation pour les solutions aqueuses diluées.",
    ],
    faqs: [
      { question: "Que signifie C1V1 = C2V2 ?", answer: "La quantité de soluté avant dilution est égale à la quantité après dilution : le produit de la concentration par le volume est constant." },
      { question: "Puis-je utiliser des pourcentages ou des mg/mL ?", answer: "Oui, à condition que C₁ et C₂ soient exprimées dans la même unité." },
      { question: "Qu’est-ce que le facteur de dilution ?", answer: "Le rapport C₁ ÷ C₂. Une dilution au 1:10 divise la concentration par dix." },
    ],
    sourcesUsedFor: ["Relation de dilution C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Calculer",
    solveOptions: { v1: "Volume de solution mère nécessaire (V₁)", c2: "Concentration finale (C₂)", v2: "Volume final (V₂)", c1: "Concentration de la solution mère (C₁)" },
    c1: "Concentration de la solution mère (C₁)",
    v1: "Volume de solution mère (V₁)",
    c2: "Concentration finale (C₂)",
    v2: "Volume final (V₂)",
    tooConcentrated: "Une dilution ne peut pas être plus concentrée que la solution mère (C₂ ≤ C₁).",
    stockTooLarge: "Le volume de solution mère ne peut pas dépasser le volume final (V₁ ≤ V₂).",
    results: { c1: "Concentration de la solution mère (C₁)", v1: "Volume de solution mère nécessaire (V₁)", c2: "Concentration finale (C₂)", v2: "Volume final (V₂)" },
    caption: "Dans les mêmes unités que les valeurs correspondantes saisies.",
    solvent: "Solvant à ajouter (V₂ − V₁)",
    factor: "Facteur de dilution (C₁ ÷ C₂)",
    note: "Utilisez la même unité de concentration pour C₁ et C₂, et la même unité de volume pour V₁ et V₂.",
  },
};

export default fr;
