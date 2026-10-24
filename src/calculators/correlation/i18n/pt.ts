import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const pt: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Calculadora do coeficiente de correlação",
    shortTitle: "Correlação",
    summary: "Meça a intensidade com que duas listas de números variam em conjunto, com o r de Pearson, o ρ de Spearman, r² e um teste de significância.",
    metaTitle: "Calculadora de correlação – r de Pearson e ρ de Spearman",
    metaDescription:
      "Cole dados X e Y emparelhados para obter o r de Pearson, r², a estatística t e o valor-p, a correlação de postos de Spearman e a covariância amostral.",
    keywords: ["coeficiente de correlação", "r de Pearson", "ró de Spearman", "correlação de postos", "coeficiente de determinação", "covariância", "relação linear", "diagrama de dispersão"],
    intro: [
      "Um coeficiente de correlação resume, num único número entre −1 e +1, até que ponto duas grandezas medidas seguem um padrão em linha reta. Valores perto de +1 significam que a valores maiores de X correspondem valores maiores de Y; valores perto de −1 significam o contrário; valores perto de 0 significam que há pouco padrão linear.",
      "Introduza observações emparelhadas, como horas de prática e resultados de testes. A calculadora devolve o r de Pearson com r², um teste t para saber se a correlação pode ser nula, a correlação de postos de Spearman para padrões monótonos mas curvos e a covariância amostral.",
    ],
    howToUse: [
      "Escreva os valores de X na primeira caixa, separados por ponto e vírgula, espaços ou mudanças de linha.",
      "Escreva os valores de Y correspondentes na segunda caixa, pela mesma ordem. As duas listas têm de ter o mesmo número de valores, pelo menos 3.",
      "Consulte o r de Pearson e r² e verifique o valor-p para ver se o padrão pode facilmente dever-se ao acaso.",
      "Compare r com o ρ de Spearman. Um ρ muito mais próximo de ±1 do que r sugere uma relação curva, mas consistentemente crescente ou decrescente.",
    ],
    formulas: [
      {
        title: "r de Pearson",
        expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]",
        explanation: "A soma dos produtos cruzados dos desvios, escalada pela dispersão de cada lista. Varia entre −1 e +1.",
      },
      {
        title: "Teste de significância",
        expression: "t = r·√[(n − 2) ÷ (1 − r²)], gl = n − 2",
        explanation: "O valor-p bilateral vem da distribuição t de Student. Testa a hipótese nula de que a correlação na população é 0.",
      },
      {
        title: "ρ de Spearman",
        expression: "ρ = r de Pearson dos postos",
        explanation: "Cada lista é substituída pelos seus postos; os valores empatados recebem a média dos postos que ocupam.",
      },
      {
        title: "Covariância amostral",
        expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)",
        explanation: "A variação conjunta sem escala, em unidades de X vezes unidades de Y.",
      },
    ],
    examples: [
      {
        title: "Horas de prática e resultados em testes",
        steps: [
          "x̄ = 6, ȳ = 65,1667; Σ produtos cruzados = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333",
          "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928",
          "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 com 4 gl, p ≈ 0,0000785",
        ],
      },
      {
        title: "Temperatura exterior e custo semanal de aquecimento",
        steps: [
          "O custo desce à medida que a temperatura sobe, pelo que os produtos cruzados são maioritariamente negativos.",
          "r ≈ −0,9924 e r² ≈ 0,9849",
          "As duas listas têm a mesma ordem invertida, pelo que o ρ de Spearman = −1.",
        ],
      },
      {
        title: "Um padrão curvo mas sempre crescente (y = x²)",
        steps: ["O r de Pearson ≈ 0,9789, porque os pontos se afastam de uma linha reta.", "Os postos de x e de y são idênticos, pelo que o ρ de Spearman = 1."],
      },
    ],
    assumptions: [
      "O r de Pearson mede apenas a associação linear. Uma relação curva forte pode dar um r modesto; o ρ de Spearman capta qualquer padrão consistentemente crescente ou decrescente.",
      "O valor-p pressupõe que os pares são independentes e, para o r de Pearson, que os dados seguem aproximadamente uma distribuição normal bivariada. Os outliers podem alterar muito r.",
      "As classificações de intensidade são uma regra prática comum (|r| abaixo de 0,1 desprezável, 0,1 fraca, 0,4 moderada, 0,7 forte, 0,9 muito forte). As várias áreas divergem no que consideram forte.",
      "Correlação não implica causalidade: um terceiro fator, o acaso ou uma causalidade inversa podem explicar uma associação.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre r e r²?",
        answer: "r indica a direção e a intensidade de um padrão linear. r² é a proporção da variação de Y explicada por um ajuste linear em função de X, pelo que r = 0,8 significa r² = 0,64, ou seja, 64%.",
      },
      {
        question: "Quando devo usar Spearman em vez de Pearson?",
        answer: "Use o ρ de Spearman quando os dados forem postos, quando a relação for monótona mas não retilínea, ou quando houver outliers que possam distorcer o r de Pearson.",
      },
      {
        question: "Porque é que as listas têm de ter pelo menos três valores e alguma variação?",
        answer: "Com dois pontos, qualquer reta se ajusta perfeitamente, e o teste precisa de n − 2 ≥ 1 graus de liberdade. Se todos os valores de X ou todos os de Y forem iguais, a fórmula divide por zero e r fica indefinido.",
      },
    ],
    sourcesUsedFor: [
      "Teste para saber se r difere de zero, com n − 2 graus de liberdade.",
      "Definição do coeficiente de correlação como medida de associação linear entre −1 e +1.",
    ],
  },
  text: {
    x: "Valores de X",
    xHelp: "Um valor por observação, separados por ponto e vírgula, espaços ou mudanças de linha. Use a vírgula como separador decimal.",
    y: "Valores de Y",
    yHelp: "Um valor por observação, pela mesma ordem dos valores de X.",
    errors: {
      empty: "Introduza pelo menos um número.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    tooBig: "{value} é demasiado grande. Cada número pode ter, no máximo, {max} em valor absoluto.",
    tooFew: "Introduza pelo menos {min} pares de valores.",
    countMismatch: "Introduza um valor de Y para cada valor de X: tem {x} e {y}.",
    xCount: { zero: "{n} valores de X", one: "{n} valor de X", two: "{n} valores de X", few: "{n} valores de X", many: "{n} valores de X", other: "{n} valores de X" },
    yCount: { zero: "{n} valores de Y", one: "{n} valor de Y", two: "{n} valores de Y", few: "{n} valores de Y", many: "{n} valores de Y", other: "{n} valores de Y" },
    pairCount: { zero: "{n} pares", one: "{n} par", two: "{n} pares", few: "{n} pares", many: "{n} pares", other: "{n} pares" },
    constantX: "Todos os valores de X são iguais, pelo que a correlação é indefinida. Pelo menos dois valores de X têm de ser diferentes.",
    constantY: "Todos os valores de Y são iguais, pelo que a correlação é indefinida. Pelo menos dois valores de Y têm de ser diferentes.",
    pearson: "Coeficiente de correlação de Pearson (r)",
    caption: "Com base em {count}.",
    rSquared: "Coeficiente de determinação (r²)",
    tStat: "Estatística t",
    tInfinite: "Infinita (correlação perfeita)",
    df: "Graus de liberdade (n − 2)",
    pValue: "Valor-p bilateral (H₀: sem correlação)",
    spearman: "Correlação de postos de Spearman (ρ)",
    covariance: "Covariância amostral",
    strength: "Intensidade e direção (regra prática)",
    describe: "{strength}, {direction}",
    strengths: { negligible: "Desprezável", weak: "Fraca", moderate: "Moderada", strong: "Forte", veryStrong: "Muito forte", perfect: "Perfeita" },
    directions: { positive: "positiva", negative: "negativa", none: "sem direção" },
    perfectNote: "Os pontos estão exatamente sobre uma reta, pelo que |r| = 1 e o valor-p é 0.",
    smallNote: "Com poucos pares, mesmo um r elevado pode surgir por acaso. Verifique o valor-p.",
    note: "A correlação mede até que ponto duas variáveis variam em conjunto. Não mostra que uma seja a causa da outra.",
  },
};

export default pt;
