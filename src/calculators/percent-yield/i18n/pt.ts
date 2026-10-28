import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentYieldText } from "../text/en";

const pt: CalculatorTranslation<PercentYieldText> = {
  content: {
    title: "Calculadora de rendimento percentual",
    shortTitle: "Rendimento percentual",
    summary:
      "Calcule o rendimento percentual de uma reação a partir do rendimento real e do teórico, ou obtenha o rendimento teórico a partir das moles e de uma equação acertada.",
    metaTitle: "Calculadora de rendimento percentual – Real vs. teórico",
    metaDescription:
      "Calcule o rendimento percentual a partir do rendimento real e teórico, ou obtenha o teórico a partir das moles do reagente limitante, coeficientes e fórmula.",
    keywords: ["rendimento percentual", "rendimento teórico", "rendimento real", "reagente limitante", "estequiometria", "rendimento da reação", "laboratório de química"],
    intro: [
      "O rendimento teórico é a quantidade de produto que uma equação acertada prevê quando o reagente limitante é totalmente consumido. O rendimento real é o que efetivamente recolhe. O rendimento percentual compara os dois e mostra a eficiência da reação e do tratamento posterior.",
      "Se já souber o rendimento teórico, introduza as duas massas. Caso contrário, introduza as moles do reagente limitante, os coeficientes da equação acertada e a fórmula ou a massa molar do produto, e a calculadora determina primeiro o rendimento teórico.",
    ],
    howToUse: [
      "Escolha se conhece o rendimento teórico ou se pretende calculá-lo a partir das moles.",
      "Escolha a unidade de massa e introduza o rendimento real que recolheu.",
      "Introduza o rendimento teórico, ou as moles do reagente limitante, os dois coeficientes e a fórmula do produto (ou a sua massa molar).",
      "Consulte o rendimento percentual, o rendimento teórico e a massa perdida.",
    ],
    formulas: [
      {
        title: "Rendimento percentual",
        expression: "rendimento percentual = rendimento real ÷ rendimento teórico × 100 %",
        explanation: "Os dois rendimentos têm de estar na mesma unidade, para que as unidades se anulem.",
      },
      {
        title: "Rendimento teórico a partir das moles",
        expression: "teórico (g) = n(limitante) × (coeficiente do produto ÷ coeficiente do reagente) × M(produto)",
        explanation: "A razão entre os coeficientes converte as moles do reagente limitante em moles de produto; a massa molar converte as moles em gramas.",
      },
      {
        title: "Massa perdida",
        expression: "perda = rendimento teórico − rendimento real",
        explanation: "Também apresentada como fração do rendimento teórico, que é igual a 100 % menos o rendimento percentual.",
      },
    ],
    examples: [
      {
        title: "Cristais recuperados numa síntese de laboratório",
        steps: ["Rendimento percentual = 4,25 g ÷ 5,6 g × 100 %", "≈ 75,89 %", "Massa perdida = 5,6 − 4,25 = 1,35 g"],
      },
      {
        title: "Aspirina a partir de 0,0200 mol de ácido salicílico",
        steps: [
          "Uma molécula de ácido salicílico dá uma de aspirina, pelo que a razão é 1 ÷ 1.",
          "M(C9H8O4) = 9 × 12,011 + 8 × 1,008 + 4 × 15,999 = 180,159 g/mol",
          "Rendimento teórico = 0,0200 × 180,159 ≈ 3,6032 g",
          "Rendimento percentual = 2,95 ÷ 3,6032 × 100 % ≈ 81,87 %",
        ],
      },
      {
        title: "Amoníaco quando o hidrogénio é o reagente limitante",
        steps: [
          "N₂ + 3 H₂ → 2 NH₃, pelo que 0,90 mol H₂ × 2 ÷ 3 = 0,60 mol NH₃",
          "Rendimento teórico = 0,60 × 17,031 = 10,2186 g",
          "Rendimento percentual = 8,1 ÷ 10,2186 × 100 % ≈ 79,27 %",
        ],
      },
    ],
    assumptions: [
      "O reagente limitante é conhecido. Se não tiver a certeza, calcule o produto que cada reagente poderia formar; o que der menos produto é o limitante.",
      "A equação está acertada e dá um produto principal. Os produtos secundários não são contabilizados.",
      "As massas molares calculadas a partir de uma fórmula usam as massas atómicas padrão abreviadas da IUPAC. Os resultados só são tão precisos quanto as massas que medir.",
      "O rendimento real deve corresponder ao produto seco e purificado. Solvente ou impurezas fazem o rendimento parecer maior do que é.",
    ],
    faqs: [
      {
        question: "O rendimento percentual pode ser superior a 100 %?",
        answer: "Não para um produto puro e seco, porque a massa não pode ser criada. Um resultado acima de 100 % significa normalmente que o produto ainda está húmido, contém impurezas ou reagente de partida que não reagiu, ou que uma massa foi medida ou registada incorretamente.",
      },
      {
        question: "Porque é que o meu rendimento é inferior ao esperado?",
        answer: "As reações secundárias consomem reagentes, muitas reações param antes de estarem completas e perde-se sempre algum produto ao filtrar, transferir ou recristalizar. Rendimentos bem abaixo de 100 % são normais, sobretudo em sínteses com vários passos.",
      },
      {
        question: "Uso moles ou gramas?",
        answer: "O rendimento percentual compara massas (ou moles) do produto, e a unidade anula-se. Para calcular o rendimento teórico precisa de moles, porque os coeficientes de uma equação acertada relacionam quantidades em moles, não em gramas.",
      },
    ],
    sourcesUsedFor: ["Definições de rendimento teórico, real e percentual, e de reagente limitante."],
  },
  text: {
    mode: "Rendimento teórico",
    modes: { direct: "Conheço-o", stoichiometry: "Calculá-lo a partir das moles" },
    unit: "Unidade de massa",
    actual: "Rendimento real",
    actualHelp: "A massa de produto que efetivamente recolheu (idealmente seco e puro).",
    theoretical: "Rendimento teórico",
    theoreticalHelp: "A massa de produto que a equação acertada prevê, na mesma unidade do rendimento real.",
    moles: "Moles do reagente limitante",
    molesHelp: "O reagente que se esgota primeiro. Divida a sua massa pela sua massa molar para obter as moles.",
    reactantCoef: "Coeficiente do reagente limitante",
    productCoef: "Coeficiente do produto",
    coefHelp: "Da equação acertada. Em N₂ + 3 H₂ → 2 NH₃, o H₂ tem 3 e o NH₃ tem 2.",
    massSource: "Massa molar do produto a partir de",
    massSources: { formula: "Fórmula química", molarMass: "Valor da massa molar" },
    formula: "Fórmula do produto",
    formulaHelp:
      "Os símbolos dos elementos distinguem maiúsculas de minúsculas, por exemplo C9H8O4 ou Ca(OH)2. A massa molar é calculada a partir das massas atómicas padrão.",
    molarMass: "Massa molar do produto",
    formulaErrors: {
      empty: "Introduza uma fórmula química.",
      tooLong: "A fórmula é demasiado longa. Use, no máximo, 200 caracteres.",
      invalidChar:
        "Carácter inválido “{token}” na posição {position}. Use apenas símbolos de elementos, números, parênteses e pontos de hidrato.",
      lowercase:
        "Letra minúscula inesperada “{token}” na posição {position}. Os símbolos dos elementos começam por maiúscula, por exemplo Na ou Cl.",
      unknownElement: "Símbolo de elemento desconhecido “{token}” na posição {position}.",
      noStandardWeight: "{token} (posição {position}) não tem massa atómica padrão, pelo que não é possível calcular a sua massa molar.",
      unclosed: "Parênteses desequilibrados: o “{token}” na posição {position} nunca é fechado.",
      unexpectedClose: "Parênteses desequilibrados: o “{token}” na posição {position} não tem parêntese de abertura correspondente.",
      mismatched: "Parênteses não correspondentes: o “{token}” na posição {position} não corresponde ao parêntese que fecha.",
      emptyGroup: "O grupo entre parênteses que começa na posição {position} está vazio.",
      zeroCount: "O índice na posição {position} é zero. Os índices têm de ser números inteiros iguais ou superiores a 1.",
      misplacedNumber: "O número na posição {position} não está associado a um elemento nem a um grupo.",
      misplacedDot: "O ponto de hidrato na posição {position} tem de ficar entre duas partes da fórmula, por exemplo CuSO4·5H2O.",
      tooManyAtoms: "A fórmula tem demasiados átomos. Use, no máximo, 1 000 000 de átomos no total.",
    },
    result: "Rendimento percentual",
    caption: "Rendimento real ÷ rendimento teórico × 100",
    theoreticalResult: "Rendimento teórico",
    productMoles: "Moles teóricas de produto",
    molarMassUsed: "Massa molar do produto usada",
    loss: "Massa perdida (teórico − real)",
    excess: "Massa acima do rendimento teórico",
    lossPercent: "Fração do rendimento teórico perdida",
    excessPercent: "Fração acima do rendimento teórico",
    notes: {
      over100:
        "Um rendimento acima de 100 % não é fisicamente possível para um produto puro e seco. Significa normalmente que o produto ainda está húmido ou contém impurezas ou restos de reagentes, ou que uma massa ou quantidade foi medida incorretamente.",
      zero: "Não foi recolhido produto, pelo que o rendimento é 0 %.",
      general:
        "As razões típicas para um rendimento inferior a 100 % são reações secundárias, reações que não chegam a estar completas e produto perdido durante a transferência, a filtração ou a purificação.",
    },
  },
};

export default pt;
