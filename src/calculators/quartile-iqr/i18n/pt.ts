import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const pt: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Calculadora de quartis e amplitude interquartil",
    shortTitle: "Quartis",
    summary: "Obtenha os quartis, a amplitude interquartil, o resumo de cinco números, as barreiras de 1,5 × AIQ e os outliers de um conjunto de dados, com dois métodos de quartis comuns.",
    metaTitle: "Calculadora de quartis – AIQ, resumo de 5 números e outliers",
    metaDescription:
      "Obtenha Q1, a mediana, Q3 e a amplitude interquartil de uma lista de números, com o resumo de cinco números, as barreiras de 1,5 × AIQ e eventuais outliers.",
    keywords: ["quartis", "amplitude interquartil", "AIQ", "resumo de cinco números", "Q1 e Q3", "outliers", "diagrama de extremos e quartis", "regra 1,5 AIQ"],
    intro: [
      "Os quartis dividem os dados ordenados em quatro grupos de tamanho aproximadamente igual. O primeiro quartil Q1 tem um quarto dos valores abaixo dele, a mediana Q2 tem metade e o terceiro quartil Q3 tem três quartos. A amplitude interquartil, AIQ = Q3 − Q1, é a dispersão da metade central dos dados e, ao contrário da amplitude total, quase não é afetada por alguns valores extremos.",
      "Cole uma lista de números para obter a AIQ, o resumo de cinco números usado nos diagramas de extremos e quartis e as barreiras de 1,5 × AIQ que assinalam possíveis outliers. São oferecidos dois métodos de quartis porque os manuais, as calculadoras e o software não estão todos de acordo; para a média e a moda, use a Calculadora de média, mediana e moda.",
    ],
    howToUse: [
      "Cole ou escreva pelo menos 4 números, separados por ponto e vírgula, espaços ou mudanças de linha. Não precisam de estar ordenados.",
      "Escolha o método de quartis: inclusivo, para coincidir com QUARTIL.INCL do Excel, NumPy e R, ou mediana das metades, para coincidir com uma TI-83 ou com muitos manuais escolares.",
      "Consulte a AIQ, os quartis e as barreiras.",
      "Verifique na lista de outliers os valores fora das barreiras.",
    ],
    formulas: [
      {
        title: "Inclusivo (interpolação linear)",
        expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)",
        explanation: "x₍₀₎ ≤ x₍₁₎ ≤ … são os valores ordenados, contados a partir de 0, com p = 0,25 para Q1 e 0,75 para Q3. É o tipo 7 de Hyndman e Fan, a predefinição do R e do NumPy e a função QUARTIL.INCL do Excel.",
      },
      {
        title: "Mediana das metades",
        expression: "Q1 = mediana da metade inferior\nQ3 = mediana da metade superior",
        explanation: "Com um número ímpar de valores, a própria mediana fica de fora de ambas as metades. É o método das calculadoras TI-83 e TI-84.",
      },
      {
        title: "Amplitude interquartil e barreiras",
        expression: "AIQ = Q3 − Q1\nbarreira inferior = Q1 − 1,5 × AIQ\nbarreira superior = Q3 + 1,5 × AIQ",
        explanation: "Os valores fora das barreiras são assinalados como possíveis outliers; são os pontos desenhados à parte num diagrama de extremos e quartis.",
      },
    ],
    examples: [
      {
        title: "Onze tempos de entrega em minutos, método inclusivo",
        steps: [
          "n = 11, pelo que h = 10 × 0,25 = 2,5 para Q1: a meio entre 17 e 18, Q1 = 17,5",
          "h = 10 × 0,75 = 7,5 para Q3: a meio entre 26 e 29, Q3 = 27,5",
          "AIQ = 27,5 − 17,5 = 10; as barreiras são 2,5 e 42,5, pelo que 58 é um outlier",
        ],
      },
      {
        title: "Os mesmos dados com o método da mediana das metades",
        steps: [
          "A mediana é 22; deixe-a de fora, o que dá as metades 12, 15, 17, 18, 21 e 24, 26, 29, 31, 58",
          "Q1 = 17 e Q3 = 29",
          "AIQ = 29 − 17 = 12; as barreiras são −1 e 47, pelo que 58 continua a ser um outlier",
        ],
      },
      {
        title: "Oito leituras de pH, método inclusivo",
        steps: [
          "h = 7 × 0,25 = 1,75: Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325",
          "h = 7 × 0,75 = 5,25: Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65",
          "AIQ = 6,65 − 4,325 = 2,325, com barreiras 0,8375 e 10,1375: não há outliers",
        ],
      },
    ],
    assumptions: [
      "Não existe uma definição única e consensual de quartil. Os dois métodos aqui apresentados são os mais comuns; outros, como QUARTIL.EXC do Excel, podem dar valores ligeiramente diferentes em conjuntos de dados pequenos.",
      "A regra de 1,5 × AIQ é uma convenção para assinalar valores que merecem uma segunda análise. Não prova que um valor seja um erro.",
      "São aceites até 10 000 números. Os resultados são apresentados com até 10 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Porque é que calculadoras diferentes dão quartis diferentes?",
        answer: "Porque há várias definições. Para 1, 2, 3, 4, 5, 6, o método inclusivo dá Q1 = 2,25, enquanto o método da mediana das metades dá Q1 = 2. Em conjuntos de dados grandes, os métodos dão valores muito próximos.",
      },
      {
        question: "O que é o resumo de cinco números?",
        answer: "O mínimo, Q1, a mediana, Q3 e o máximo. Em conjunto, descrevem o centro, a dispersão e a amplitude dos dados, e são exatamente o que um diagrama de extremos e quartis desenha.",
      },
      {
        question: "A mediana das metades é o mesmo que as charneiras de Tukey?",
        answer: "Não exatamente. As charneiras de Tukey incluem a mediana em ambas as metades quando o número de valores é ímpar, enquanto o método da TI-83 aqui usado a deixa de fora. Com um número par de valores, são iguais.",
      },
    ],
    sourcesUsedFor: [
      "As barreiras interiores Q1 − 1,5 × AIQ e Q3 + 1,5 × AIQ para assinalar outliers.",
      "As diferentes definições de quantis amostrais comparadas por Hyndman e Fan (1996), incluindo a interpolação linear.",
    ],
  },
  text: {
    data: "Dados",
    dataHelp: "Pelo menos 4 números, separados por ponto e vírgula, espaços ou mudanças de linha. Use a vírgula como separador decimal. A ordem não importa.",
    errors: {
      empty: "Introduza pelo menos 4 números.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    tooFew: "Introduza pelo menos 4 números para obter os quartis; introduziu {count}.",
    method: "Método de quartis",
    methods: {
      inclusive: "Inclusivo, interpolação linear (QUARTIL.INCL do Excel, NumPy, tipo 7 do R)",
      exclusive: "Mediana das metades, sem a mediana (estilo TI-83)",
    },
    methodHelp: "Diferentes manuais e programas definem os quartis de forma ligeiramente diferente. Os resultados podem diferir em conjuntos de dados pequenos.",
    iqr: "Amplitude interquartil (AIQ)",
    caption: "Q3 − Q1 para {count}, com o método {method}.",
    methodShort: { inclusive: "inclusivo", exclusive: "da mediana das metades" },
    valueCount: { zero: "{n} valores", one: "{n} valor", two: "{n} valores", few: "{n} valores", many: "{n} valores", other: "{n} valores" },
    min: "Mínimo",
    q1: "Primeiro quartil (Q1)",
    median: "Mediana (Q2)",
    q3: "Terceiro quartil (Q3)",
    max: "Máximo",
    lowerFence: "Barreira inferior (Q1 − 1,5 × AIQ)",
    upperFence: "Barreira superior (Q3 + 1,5 × AIQ)",
    outliers: "Outliers",
    noOutliers: "Nenhum",
    moreOutliers: "{list} e mais {count}",
    outlierCount: "Número de outliers",
    summaryTable: "Resumo de cinco números",
    colStatistic: "Estatística",
    colValue: "Valor",
    noOutliersNote: "Nenhum valor fica fora das barreiras, pelo que os dados não têm outliers segundo a regra de 1,5 × AIQ.",
    outliersNote: "Os valores abaixo da barreira inferior ou acima da barreira superior são assinalados como possíveis outliers. Verifique-os antes de eliminar o que quer que seja: um outlier pode ser uma observação real e importante.",
  },
};

export default pt;
