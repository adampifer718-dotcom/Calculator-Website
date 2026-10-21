import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const pt: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Calculadora de diluições (C₁V₁ = C₂V₂)",
    shortTitle: "Diluições",
    summary: "Resolva C₁V₁ = C₂V₂ para obter o volume de solução-mãe, a concentração final, o volume final ou a concentração da solução-mãe.",
    metaTitle: "Calculadora de diluições – C1V1 = C2V2",
    metaDescription:
      "Resolva C1V1 = C2V2 para qualquer valor: volume de solução-mãe necessário, concentração final, volume final ou concentração da solução-mãe.",
    keywords: ["calculadora de diluições", "c1v1=c2v2", "fórmula de diluição", "solução-mãe", "concentração", "preparar soluções", "química"],
    intro: [
      "Ao diluir uma solução, a quantidade de soluto não se altera, pelo que C₁V₁ = C₂V₂.",
      "Escolha a incógnita e introduza os outros três valores para planear uma diluição.",
    ],
    howToUse: [
      "Escolha o que pretende calcular; normalmente, o volume de solução-mãe necessário.",
      "Introduza os outros três valores com as mesmas unidades de ambos os lados.",
      "Consulte o resultado e quanto solvente deve acrescentar.",
    ],
    formulas: [
      {
        title: "Equação de diluição",
        expression: "C₁ × V₁ = C₂ × V₂",
        explanation: "C₁ e V₁ são a concentração e o volume da solução-mãe; C₂ e V₂, os valores finais.",
      },
      { title: "Solvente a acrescentar", expression: "solvente = V₂ − V₁", explanation: "Acrescente solvente suficiente para atingir o volume final." },
    ],
    examples: [
      {
        title: "Preparar 100 mL a 0,5 M a partir de uma solução-mãe 2 M",
        steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL de solução-mãe, mais 75 mL de solvente"],
      },
      {
        title: "10 mL a 1 M diluídos até 250 mL",
        steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"],
      },
    ],
    assumptions: [
      "As concentrações têm de estar na mesma unidade, e os volumes também.",
      "Pressupõe que os volumes são aditivos, uma boa aproximação para soluções aquosas diluídas.",
    ],
    faqs: [
      {
        question: "O que significa C1V1 = C2V2?",
        answer: "Que a quantidade de soluto antes da diluição é igual à de depois: o produto da concentração pelo volume mantém-se constante.",
      },
      { question: "Posso usar percentagens ou mg/mL?", answer: "Sim, desde que C₁ e C₂ estejam na mesma unidade." },
      { question: "O que é o fator de diluição?", answer: "A razão C₁ ÷ C₂. Uma diluição de 1:10 reduz a concentração dez vezes." },
    ],
    sourcesUsedFor: ["Relação de diluição C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Calcular",
    solveOptions: {
      v1: "Volume de solução-mãe necessário (V₁)",
      c2: "Concentração final (C₂)",
      v2: "Volume final (V₂)",
      c1: "Concentração da solução-mãe (C₁)",
    },
    c1: "Concentração da solução-mãe (C₁)",
    v1: "Volume de solução-mãe (V₁)",
    c2: "Concentração final (C₂)",
    v2: "Volume final (V₂)",
    tooConcentrated: "Uma diluição não pode estar mais concentrada do que a solução-mãe (C₂ ≤ C₁).",
    stockTooLarge: "O volume de solução-mãe não pode ultrapassar o volume final (V₁ ≤ V₂).",
    results: {
      c1: "Concentração da solução-mãe (C₁)",
      v1: "Volume de solução-mãe necessário (V₁)",
      c2: "Concentração final (C₂)",
      v2: "Volume final (V₂)",
    },
    caption: "Nas mesmas unidades dos valores correspondentes.",
    solvent: "Solvente a acrescentar (V₂ − V₁)",
    factor: "Fator de diluição (C₁ ÷ C₂)",
    note: "Use a mesma unidade de concentração para C₁ e C₂, e a mesma unidade de volume para V₁ e V₂.",
  },
};

export default pt;
