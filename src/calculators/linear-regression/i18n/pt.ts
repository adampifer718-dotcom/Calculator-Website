import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const pt: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Calculadora de regressão linear",
    shortTitle: "Regressão linear",
    summary:
      "Ajuste uma reta de mínimos quadrados ŷ = a + bx a dados emparelhados, com r², o erro padrão do declive, um teste t e previsões.",
    metaTitle: "Calculadora de regressão linear – Mínimos quadrados e r²",
    metaDescription:
      "Cole dados emparelhados X e Y para obter a reta de mínimos quadrados ŷ = a + bx, r e r², o erro padrão do declive, a estatística t, o valor-p e uma previsão.",
    keywords: ["regressão linear", "mínimos quadrados", "reta de melhor ajuste", "equação de regressão", "declive", "ordenada na origem", "r ao quadrado", "erro padrão do declive"],
    intro: [
      "A regressão linear simples encontra a reta que melhor prevê uma variável, Y, a partir de outra, X. A reta dos mínimos quadrados ordinários é aquela que torna a soma dos quadrados das distâncias verticais entre os pontos e a reta o mais pequena possível.",
      "Introduza observações emparelhadas e a calculadora devolve a equação ŷ = a + bx, a parte da variação que a reta explica (r²), o erro padrão do declive com um teste t para saber se o declive pode ser zero, e uma previsão opcional. Se só precisar da força da relação, a Calculadora do coeficiente de correlação dá o r de Pearson e o ρ de Spearman em separado.",
    ],
    howToUse: [
      "Escreva os valores de X (a variável preditora) na primeira caixa, separados por vírgulas, espaços ou mudanças de linha.",
      "Escreva os valores de Y correspondentes (a variável resposta) na segunda caixa, pela mesma ordem. Precisa de pelo menos 3 pares.",
      "Se quiser, introduza um valor de x para obter o ŷ previsto.",
      "Consulte a equação e verifique depois o r² e o valor-p do declive.",
    ],
    formulas: [
      {
        title: "Declive e ordenada na origem",
        expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄",
        explanation: "A reta dos mínimos quadrados passa sempre pelo ponto das médias (x̄, ȳ).",
      },
      {
        title: "Erro padrão residual",
        expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]",
        explanation: "A distância vertical típica dos pontos à reta, nas unidades de Y. Os parâmetros a e b consomem dois graus de liberdade.",
      },
      {
        title: "Erro padrão e teste t do declive",
        expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  gl = n − 2",
        explanation: "O valor-p bilateral da distribuição t de Student testa a hipótese nula de que o verdadeiro declive é 0.",
      },
      {
        title: "Coeficiente de determinação",
        expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²",
        explanation: "A fração da variação de Y que a reta explica. Na regressão simples, é igual ao quadrado do r de Pearson.",
      },
    ],
    examples: [
      {
        title: "Horas de estudo semanais e notas de exame",
        steps: [
          "x̄ = 4,5, ȳ = 66,125; Σ(x − x̄)² = 42 e Σ(x − x̄)(y − ȳ) = 171,5",
          "b = 171,5 ÷ 42 ≈ 4,08333 e a = 66,125 − 4,08333 × 4,5 = 47,75",
          "r² ≈ 0,9935; SE(b) ≈ 0,1349, t ≈ 30,28 com 6 gl, p ≈ 8,6 × 10⁻⁸",
        ],
      },
      {
        title: "Preço de carros usados em função da idade",
        steps: [
          "O preço desce à medida que a idade aumenta, pelo que o declive é negativo: b ≈ −1 245,26 por ano.",
          "a ≈ 24 998,8, o preço estimado de um carro novo.",
          "Aos 5 anos: ŷ ≈ 24 998,78 − 1 245,26 × 5 ≈ 18 772,5",
        ],
      },
      {
        title: "Reta de calibração de um sensor",
        steps: [
          "b = 5 510 ÷ 1 750 ≈ 3,14857 unidades de sinal por unidade de concentração",
          "a ≈ 2,28571, o sinal de um branco",
          "r² ≈ 0,9990 e o erro padrão residual é de cerca de 2,08",
        ],
      },
    ],
    assumptions: [
      "A relação é aproximadamente linear no intervalo dos dados. Um padrão curvo exige outro modelo, mesmo quando o r² parece elevado.",
      "O valor-p e os erros padrão pressupõem observações independentes com resíduos aproximadamente normais e de dispersão constante.",
      "Considera-se que X é medido sem erro; só se minimizam as distâncias verticais. Trocar X e Y dá uma reta diferente.",
      "Os valores atípicos e os pontos com valores de X extremos podem puxar fortemente a reta. As previsões fora do intervalo de X observado são extrapolações.",
    ],
    faqs: [
      {
        question: "Em que é que isto difere do coeficiente de correlação?",
        answer: "A correlação dá um único número para a força e o sentido de uma relação linear e trata X e Y da mesma forma. A regressão dá uma equação que prevê Y a partir de X, com o declive em unidades de Y por unidade de X. Use a Calculadora do coeficiente de correlação se só precisar do r.",
      },
      {
        question: "O que significa o valor-p do declive?",
        answer: "É a probabilidade de obter um declive pelo menos tão afastado de 0 se, na realidade, Y não variasse linearmente com X. Um valor-p pequeno (por exemplo, abaixo de 0,05) sugere uma tendência linear real; nada diz sobre a dimensão ou a importância dessa tendência.",
      },
      {
        question: "Porque é que os valores de X têm de ser diferentes?",
        answer: "O declive divide pela dispersão dos valores de X. Se todos os X forem iguais, essa dispersão é zero e qualquer reta vertical serviria, pelo que não é possível calcular um declive.",
      },
    ],
    sourcesUsedFor: [
      "A reta dos mínimos quadrados, o seu declive e ordenada na origem, e o coeficiente de determinação.",
      "O desvio padrão (erro padrão) do declive de um ajuste linear por mínimos quadrados.",
    ],
  },
  text: {
    x: "Valores de X (preditora)",
    xHelp: "Um valor por observação, separados por vírgulas, espaços ou mudanças de linha.",
    y: "Valores de Y (resposta)",
    yHelp: "Um valor por observação, pela mesma ordem dos valores de X.",
    x0: "Prever y para x =",
    x0Help: "Opcional. Um valor de x para o qual estimar ŷ a partir da reta ajustada.",
    errors: {
      empty: "Introduza pelo menos um número.",
      tooMany: "Introduza, no máximo, {max} números.",
      notNumber: "«{token}» não é um número. Separe os valores com vírgulas, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    tooBig: "{value} é demasiado grande. Cada número pode ter, no máximo, {max} em valor absoluto.",
    tooFew: "Introduza pelo menos {min} pares de valores.",
    countMismatch: "Introduza um valor de Y para cada valor de X: tem {x} e {y}.",
    xCount: { zero: "{n} valores de X", one: "{n} valor de X", two: "{n} valores de X", few: "{n} valores de X", many: "{n} valores de X", other: "{n} valores de X" },
    yCount: { zero: "{n} valores de Y", one: "{n} valor de Y", two: "{n} valores de Y", few: "{n} valores de Y", many: "{n} valores de Y", other: "{n} valores de Y" },
    pairCount: { zero: "{n} pares", one: "{n} par", two: "{n} pares", few: "{n} pares", many: "{n} pares", other: "{n} pares" },
    constantX: "Todos os valores de X são iguais, pelo que não é possível ajustar uma reta. Pelo menos dois valores de X têm de ser diferentes.",
    equationLabel: "Reta de regressão",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Ajuste por mínimos quadrados a {count}.",
    slope: "Declive (b)",
    intercept: "Ordenada na origem (a)",
    rSquared: "Coeficiente de determinação (r²)",
    r: "Coeficiente de correlação (r)",
    slopeSe: "Erro padrão do declive",
    tStat: "Estatística t do declive",
    tInfinite: "Infinita (ajuste perfeito)",
    df: "Graus de liberdade (n − 2)",
    pValue: "Valor-p bilateral (H₀: declive = 0)",
    residualSe: "Erro padrão residual",
    prediction: "ŷ previsto para x = {x0}",
    notDefined: "Não definido (todos os valores de Y são iguais)",
    perfectNote: "Os pontos estão exatamente sobre uma reta, pelo que os resíduos e os erros padrão são 0 e o valor-p é 0.",
    constantYNote: "Todos os valores de Y são iguais, pelo que a reta é horizontal (declive 0) e r, r² e o teste do declive não estão definidos.",
    extrapolationNote:
      "O valor de x está fora do intervalo dos dados. As previsões para lá dos valores de X observados (extrapolação) podem ficar muito longe da realidade se a relação mudar.",
    note: "O valor-p pressupõe que os resíduos são independentes e aproximadamente normais, com dispersão constante. Um bom ajuste não demonstra que X causa Y.",
  },
};

export default pt;
