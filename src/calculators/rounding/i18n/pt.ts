import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const pt: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Calculadora de arredondamentos",
    shortTitle: "Arredondamento",
    summary: "Arredonde um número a casas decimais, às unidades, às dezenas, centenas ou milhares, ou a qualquer incremento, com seis métodos de arredondamento exatos.",
    metaTitle: "Calculadora de arredondamentos – Casas decimais e mais",
    metaDescription:
      "Arredonde qualquer número de forma exata a casas decimais, dezenas, centenas ou a um incremento como 0,05, por excesso, por defeito, bancário ou por truncatura.",
    keywords: ["arredondar números", "arredondar casas decimais", "arredondamento bancário", "arredondamento por excesso", "arredondamento por defeito", "truncatura", "arredondar a 0,05", "arredondar às centenas"],
    intro: [
      "Arredondar substitui um número por outro próximo e mais simples: 3,14159 passa a 3,14, um preço de 19,97 passa a 19,95 em passos de 5 cêntimos e 87 654 passa a 88 000 ao milhar mais próximo. Esta calculadora arredonda a um número de casas decimais, às unidades, à dezena, centena ou milhar mais próxima, ou a qualquer incremento que escolher.",
      "Trabalha com os algarismos que escreve e não com uma aproximação binária, pelo que 1,005 arredonda mesmo para 1,01 com o método «metade para cima», um caso em que muitas folhas de cálculo e linguagens de programação dão 1,00. Seis métodos cobrem o arredondamento escolar, o arredondamento bancário e o arredondamento sempre por excesso, por defeito ou em direção ao zero. Para arredondar a algarismos significativos, use a Calculadora de algarismos significativos.",
    ],
    howToUse: [
      "Escreva o número exatamente como o tem. Todos os algarismos são mantidos.",
      "Escolha a que arredondar: casas decimais, unidades, 10, 100, 1000 ou um incremento personalizado, como 0,05 ou 0,25.",
      "Escolha o método de arredondamento. «Metade para cima» é o ensinado na maioria das escolas; «metade para par» é comum em finanças e estatística.",
      "Consulte o número arredondado, quanto se afastou do original e os dois candidatos entre os quais foi escolhido.",
    ],
    formulas: [
      {
        title: "Arredondamento a um incremento",
        expression: "k = x ÷ q\narredondado = round(k) × q",
        explanation: "q é o incremento: 0,01 para 2 casas decimais, 1 para as unidades, 10, 100, 1000 ou o seu próprio valor. O método decide como round() trata k.",
      },
      {
        title: "Regras de desempate",
        expression: "Metade para cima: 2,5 → 3, −2,5 → −3\nMetade para par: 2,5 → 2, 3,5 → 4\nMetade para baixo: 2,5 → 2, −2,5 → −2",
        explanation: "Só diferem quando o número está exatamente a meio entre dois candidatos. Nos outros casos, os três arredondam para o mais próximo.",
      },
      {
        title: "Arredondamento dirigido",
        expression: "Teto: 2,1 → 3, −2,9 → −2\nChão: 2,9 → 2, −2,1 → −3\nTruncatura: 2,9 → 2, −2,9 → −2",
        explanation: "O teto vai sempre em direção a +∞, o chão em direção a −∞ e a truncatura limita-se a eliminar os algarismos a mais (em direção ao zero).",
      },
      {
        title: "Aritmética decimal exata",
        expression: "1,005 = 1005 × 10⁻³ exatamente",
        explanation: "O número e o incremento são convertidos em inteiros pela mesma potência de 10 e divididos de forma exata, pelo que nenhum erro de arredondamento binário pode alterar um empate.",
      },
    ],
    examples: [
      {
        title: "Arredondar 1,005 a 2 casas decimais, metade para cima",
        steps: ["Os candidatos são 1,00 e 1,01", "A parte eliminada, 0,005, é exatamente metade de 0,01", "O método «metade para cima» afasta o empate do zero: 1,01"],
      },
      {
        title: "Arredondar 7,325 a 2 casas decimais com arredondamento bancário",
        steps: ["Os candidatos são 7,32 e 7,33", "7,325 está exatamente a meio", "O método «metade para par» escolhe o candidato cujo último algarismo é par: 7,32"],
      },
      {
        title: "Arredondar 3,38 horas ao quarto de hora mais próximo",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 arredonda para 14", "14 × 0,25 = 3,50 horas"],
      },
    ],
    assumptions: [
      "O número é arredondado exatamente como foi escrito, com até 40 algarismos significativos. Nada é convertido em vírgula flutuante binária.",
      "Os métodos «metade para cima» e «metade para baixo» são simétricos em relação ao zero: −2,5 com metade para cima dá −3. O teto e o chão não são simétricos.",
      "Quando o valor arredondado é zero, é apresentado como 0, sem sinal.",
      "Os resultados são apresentados com tantas casas decimais quanto o passo de arredondamento, pelo que arredondar 2,5 a 2 casas decimais mostra 2,50.",
    ],
    faqs: [
      {
        question: "O que é o arredondamento bancário?",
        answer: "É o método «metade para par»: um empate exato vai para o vizinho par, pelo que 2,5 passa a 2 e 3,5 passa a 4. Em muitos valores, os empates arredondam para cima e para baixo com a mesma frequência, o que evita um pequeno enviesamento para cima nos totais.",
      },
      {
        question: "Porque é que a minha folha de cálculo arredonda 1,005 para 1,00?",
        answer: "A maior parte do software guarda os números em binário, onde 1,005 é na verdade 1,00499999999999989…, ligeiramente abaixo do empate. Esta calculadora trabalha com os próprios algarismos decimais, pelo que 1,005 está exatamente a meio e o método «metade para cima» dá 1,01.",
      },
      {
        question: "Como arredondo um preço aos 5 cêntimos mais próximos?",
        answer: "Escolha «Incremento personalizado mais próximo» e introduza 0,05. Por exemplo, com «metade para cima», 19,97 passa a 19,95 e 19,98 passa a 20,00.",
      },
    ],
    sourcesUsedFor: [
      "Definições dos métodos de arredondamento (metade para cima, metade para par, metade para baixo, teto, chão e truncatura) usadas para verificar os resultados.",
      "A regra de arredondamento de metade para par em empates exatos, usada na prática metrológica.",
    ],
  },
  text: {
    number: "Número",
    numberHelp: "Escreva o número exatamente; todos os algarismos são mantidos, pelo que 1,005 continua a ser 1,005. Use a vírgula como separador decimal. É aceite a notação e, como 2,5e-3.",
    invalid: "Introduza um número como 1234,5678, -0,125 ou 2,5e-3.",
    tooLong: "Introduza no máximo 40 algarismos significativos, com um expoente entre -40 e 40.",
    target: "Arredondar a",
    targets: {
      places: "Casas decimais",
      whole: "Unidade mais próxima",
      tens: "Dezena mais próxima",
      hundreds: "Centena mais próxima",
      thousands: "Milhar mais próximo",
      increment: "Incremento personalizado mais próximo",
    },
    places: "Casas decimais",
    increment: "Incremento",
    incrementHelp: "Arredonda a um múltiplo deste valor, por exemplo 0,05 para preços em passos de 5 cêntimos ou 0,25 para quartos de hora.",
    incrementInvalid: "Introduza um incremento positivo, como 0,05; 0,25 ou 5.",
    method: "Método de arredondamento",
    methods: {
      halfUp: "Metade para cima (empates para longe do zero)",
      halfEven: "Metade para par (arredondamento bancário)",
      halfDown: "Metade para baixo (empates em direção ao zero)",
      ceiling: "Sempre por excesso (teto)",
      floor: "Sempre por defeito (chão)",
      truncate: "Truncatura (em direção ao zero)",
    },
    rounded: "Número arredondado",
    caption: "{original} arredondado com o método: {method}.",
    methodShort: {
      halfUp: "metade para cima",
      halfEven: "metade para par",
      halfDown: "metade para baixo",
      ceiling: "sempre por excesso (teto)",
      floor: "sempre por defeito (chão)",
      truncate: "truncatura",
    },
    difference: "Diferença (arredondado − original)",
    lower: "Candidato inferior (chão)",
    upper: "Candidato superior (teto)",
    exact: "O número já corresponde exatamente a este arredondamento, pelo que o seu valor não muda.",
    tie: "O número está exatamente a meio entre os dois candidatos, pelo que decide a regra de desempate do método.",
    negativeNote: "Nos números negativos, «sempre por excesso» vai em direção a +∞ (−2,5 passa a −2) e «sempre por defeito» em direção a −∞ (−2,5 passa a −3).",
  },
};

export default pt;
