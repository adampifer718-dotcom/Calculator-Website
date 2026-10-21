import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const pt: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Calculadora de equações do segundo grau",
    shortTitle: "Equação do 2.º grau",
    summary:
      "Resolva ax² + bx + c = 0 e obtenha as raízes reais ou complexas, com o discriminante, o vértice e o eixo de simetria.",
    metaTitle: "Equações do 2.º grau – Raízes, vértice e discriminante",
    metaDescription:
      "Resolva qualquer equação do segundo grau ax² + bx + c = 0. Obtenha raízes reais ou complexas, o discriminante e o seu significado, o vértice e o eixo de simetria.",
    keywords: ["equação do segundo grau", "fórmula resolvente", "raízes", "discriminante", "vértice da parábola", "parábola", "raízes complexas", "álgebra"],
    intro: [
      "Uma equação do segundo grau tem a forma ax² + bx + c = 0, em que a não é zero. O seu gráfico é uma parábola e as raízes são os pontos em que essa parábola interseta o eixo dos x.",
      "Escreva os três coeficientes para obter as duas raízes de uma vez. Quando a parábola nunca chega ao eixo dos x, a calculadora indica o par de raízes complexas. Mostra também o discriminante, o vértice e o eixo de simetria.",
    ],
    howToUse: [
      "Reorganize a equação de modo que um dos membros seja 0; por exemplo, 3x² = 7x + 6 passa a 3x² − 7x − 6 = 0.",
      "Introduza a, b e c. Inclua os sinais negativos e use 0 para qualquer termo em falta.",
      "Consulte as raízes. As raízes reais são apresentadas da maior para a menor; as raízes complexas aparecem como parte real ± parte imaginária.",
      "Use o discriminante, o vértice e o eixo de simetria para esboçar a parábola ou verificar os seus cálculos.",
    ],
    formulas: [
      {
        title: "Fórmula resolvente",
        expression: "x = (−b ± √(b² − 4ac)) ÷ 2a",
        explanation: "Dá as duas raízes. O ± produz uma raiz com + e outra com −.",
      },
      {
        title: "Discriminante",
        expression: "D = b² − 4ac",
        explanation: "D > 0 dá duas raízes reais, D = 0 dá uma raiz dupla e D < 0 dá duas raízes complexas conjugadas.",
      },
      {
        title: "Forma estável usada no cálculo",
        expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q",
        explanation:
          "Algebricamente idêntica à fórmula resolvente, mas evita subtrair dois números quase iguais, o que faz perder precisão quando b² é muito maior do que 4ac.",
      },
      {
        title: "Raízes complexas",
        expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i",
        explanation: "Usada quando D < 0; i é a unidade imaginária, com i² = −1.",
      },
      {
        title: "Vértice e eixo",
        expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  eixo: x = h",
        explanation: "O vértice (h, k) é o ponto de viragem da parábola. k é igual ao valor de ax² + bx + c em x = h.",
      },
      {
        title: "Soma e produto das raízes",
        expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a",
        explanation: "As fórmulas de Viète. Também são válidas para raízes complexas.",
      },
    ],
    examples: [
      {
        title: "Duas raízes reais: 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, logo x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 e x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Uma raiz dupla: 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "A parábola apenas toca no eixo dos x no seu vértice (−1,5; 0)."],
      },
      {
        title: "Raízes complexas: x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Parte real: −(−2) ÷ 2 = 1", "Parte imaginária: √36 ÷ 2 = 3, logo x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "Os coeficientes são números reais. Equações com coeficientes complexos não são suportadas.",
      "Os resultados são apresentados com 10 algarismos significativos. Um discriminante que é zero a menos de um erro de arredondamento ínfimo é tratado como exatamente zero, pelo que é indicada a raiz dupla.",
      "Coeficientes muito grandes ou muito pequenos são calculados em vírgula flutuante de dupla precisão, pelo que os últimos algarismos de resultados extremos podem diferir da aritmética exata.",
    ],
    faqs: [
      {
        question: "E se a for 0?",
        answer:
          "Nesse caso não há termo em x² e a equação é linear: bx + c = 0, com a solução única x = −c ÷ b. A calculadora pede um a diferente de zero porque a fórmula resolvente dividiria por zero.",
      },
      {
        question: "O que significa um discriminante negativo?",
        answer:
          "A parábola nunca interseta o eixo dos x, pelo que não há soluções reais. As duas soluções são números complexos que diferem apenas no sinal da parte imaginária.",
      },
      {
        question: "Porque é que a calculadora não usa diretamente a fórmula dos manuais?",
        answer:
          "Quando b² é muito maior do que 4ac, −b + √D subtrai dois números quase iguais e perde algarismos. A forma estável calcula primeiro a raiz maior e obtém a menor a partir do produto das raízes, c ÷ a, o que mantém a precisão total.",
      },
    ],
    sourcesUsedFor: ["A fórmula resolvente e a forma como o discriminante prevê o número e o tipo de soluções."],
  },
  text: {
    a: "Coeficiente a",
    aHelp: "O número que multiplica x². Não pode ser 0.",
    b: "Coeficiente b",
    bHelp: "O número que multiplica x. Use 0 se não houver termo em x.",
    c: "Termo independente c",
    cHelp: "O número sem x. Use 0 se não existir.",
    aZero: "O coeficiente a não pode ser 0. Com a = 0, a equação é linear e não do segundo grau.",
    roots: "Raízes",
    twoRoots: "x₁ = {x1}, x₂ = {x2}",
    oneRoot: "x = {x} (raiz dupla)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Discriminante (b² − 4ac)",
    meaning: "O que significa o discriminante",
    meanings: {
      positive: "Positivo: duas raízes reais distintas",
      zero: "Zero: uma raiz real dupla",
      negative: "Negativo: nenhuma raiz real, duas raízes complexas conjugadas",
    },
    vertex: "Vértice (h, k)",
    vertexValue: "({h}; {k})",
    axis: "Eixo de simetria",
    axisValue: "x = {h}",
    sum: "Soma das raízes (−b/a)",
    product: "Produto das raízes (c/a)",
    opensUp: "A parábola tem a concavidade voltada para cima, pelo que o vértice é o seu ponto mais baixo.",
    opensDown: "A parábola tem a concavidade voltada para baixo, pelo que o vértice é o seu ponto mais alto.",
  },
};

export default pt;
