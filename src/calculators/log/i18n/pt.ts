import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const pt: CalculatorTranslation<LogText> = {
  content: {
    title: "Calculadora de logaritmos",
    shortTitle: "Logaritmo",
    summary: "Calcule logaritmos na base 10, na base e (logaritmo natural), na base 2 ou em qualquer outra base.",
    metaTitle: "Calculadora de logaritmos – Logaritmo em qualquer base",
    metaDescription:
      "Calcule o logaritmo na base 10, o logaritmo natural (ln), o logaritmo na base 2 ou em qualquer base, com a fórmula de mudança de base e exemplos resolvidos.",
    keywords: ["calculadora de logaritmos", "logaritmo", "logaritmo natural", "ln", "logaritmo na base 2", "log10", "mudança de base"],
    intro: [
      "Um logaritmo responde à pergunta: a que potência é preciso elevar a base para obter este número? log₁₀(1000) = 3 porque 10³ = 1000.",
      "Escolha uma base habitual ou introduza a sua. São também apresentados os logaritmos natural, decimal e binário.",
    ],
    howToUse: [
      "Introduza um número positivo x.",
      "Escolha a base, ou selecione «Outra base» e introduza-a.",
      "Consulte o logaritmo e os valores de ln, log₁₀ e log₂.",
    ],
    formulas: [
      { title: "Definição", expression: "log_b(x) = y  significa  bʸ = x", explanation: "O número e a base têm de ser positivos, e a base não pode ser 1." },
      { title: "Mudança de base", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Qualquer logaritmo pode ser calculado a partir de logaritmos naturais." },
    ],
    examples: [
      {
        title: "log₁₀ de 1000",
        steps: ["10³ = 1000", "Logo, log₁₀(1000) = 3"],
      },
      {
        title: "log₂ de 8",
        steps: ["2³ = 8", "Logo, log₂(8) = 3"],
      },
      {
        title: "Logaritmo na base 3 de 81",
        steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, porque 3⁴ = 81"],
      },
    ],
    assumptions: [
      "Os logaritmos só estão definidos para números positivos e bases positivas diferentes de 1.",
      "Os resultados são apresentados com 12 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre log e ln?",
        answer: "log indica normalmente a base 10 e ln indica a base e (aproximadamente 2,71828), ou seja, o logaritmo natural ou neperiano.",
      },
      {
        question: "Porque não posso calcular o logaritmo de um número negativo?",
        answer: "Nenhuma potência real de uma base positiva dá um número negativo ou zero, pelo que o logaritmo não está definido nos números reais.",
      },
      {
        question: "Para que serve o logaritmo na base 2?",
        answer: "Conta duplicações e surge na informática, por exemplo para saber quantos bits são necessários para representar um valor.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Número (x)",
    base: "Base",
    bases: { ten: "10 (logaritmo decimal)", e: "e (logaritmo natural, ln)", two: "2 (logaritmo binário)", custom: "Outra base" },
    customBase: "Base personalizada (b)",
    baseOne: "A base não pode ser 1.",
    primaryNatural: "Logaritmo de x",
    primaryBase: "Logaritmo na base {base} de x",
    caption: "{base} elevado a esta potência é igual a {value}.",
    ln: "Logaritmo natural (ln x)",
    log10: "Logaritmo decimal (log₁₀ x)",
    log2: "Logaritmo binário (log₂ x)",
  },
};

export default pt;
