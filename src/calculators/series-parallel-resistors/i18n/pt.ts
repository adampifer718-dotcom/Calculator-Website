import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const pt: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Calculadora de resistências em série e em paralelo",
    shortTitle: "Resistências em série/paralelo",
    summary: "Calcule a resistência total de até 50 resistências ligadas em série ou em paralelo, bem como a condutância em paralelo.",
    metaTitle: "Resistências em série e em paralelo – Total em Ω",
    metaDescription:
      "Some até 50 resistências em série ou em paralelo para obter a resistência equivalente em Ω, kΩ ou MΩ e a condutância total em siemens.",
    keywords: ["calculadora de resistências", "resistências em série", "resistências em paralelo", "resistência equivalente", "resistência total", "condutância", "siemens", "ohms"],
    intro: [
      "Quando as resistências são ligadas uma a seguir à outra, em série, a mesma corrente percorre cada uma delas e as resistências simplesmente somam-se. Quando são ligadas lado a lado, em paralelo, cada uma fica sujeita à mesma tensão e a corrente divide-se entre elas, pelo que o conjunto oferece menos resistência do que qualquer resistência isolada.",
      "Introduza uma lista de valores de resistência para obter os dois totais de uma só vez. Escolha a ligação que está a montar para que seja o resultado principal e indique a unidade em que escreveu os valores. Os totais são apresentados na unidade mais fácil de ler e também em ohms.",
    ],
    howToUse: [
      "Escolha se escreveu os valores em ohms, quilo-ohms ou mega-ohms.",
      "Escolha série ou paralelo para definir qual dos totais é o resultado principal.",
      "Introduza de 1 a 50 resistências, separadas por ponto e vírgula, espaços ou mudanças de linha.",
      "Consulte a resistência total, o total da outra ligação e a condutância em paralelo em siemens.",
    ],
    formulas: [
      { title: "Série", expression: "R_total = R₁ + R₂ + … + Rₙ", explanation: "A mesma corrente percorre todas as resistências, pelo que as quedas de tensão se somam." },
      {
        title: "Paralelo",
        expression: "1 ÷ R_total = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ",
        explanation: "Cada resistência fica sujeita à tensão total, pelo que as correntes (e as condutâncias) se somam.",
      },
      { title: "Condutância", expression: "G = 1 ÷ R, em siemens (S)", explanation: "A condutância total em paralelo é a soma das condutâncias individuais." },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω e 1 kΩ em série",
        steps: ["R_total = 220 + 470 + 1000 = 1690 Ω", "Apresentado como 1,69 kΩ", "Em paralelo, as mesmas três dariam cerca de 130,325 Ω"],
      },
      {
        title: "4,7 kΩ, 10 kΩ e 22 kΩ em paralelo",
        steps: [
          "G = 1/4700 + 1/10 000 + 1/22 000 ≈ 0,000358221 S",
          "R_total = 1 ÷ 0,000358221 ≈ 2791,58 Ω",
          "Apresentado como 2,79158 kΩ, menos do que a resistência mais pequena (4,7 kΩ)",
        ],
      },
      {
        title: "Três resistências iguais de 330 Ω em paralelo",
        steps: ["Resistências iguais em paralelo: R_total = R ÷ n", "330 ÷ 3 = 110 Ω", "Em série dariam 990 Ω"],
      },
    ],
    assumptions: [
      "As resistências são ideais: os seus valores não variam com a temperatura, a corrente ou a frequência, e os fios de ligação não têm resistência.",
      "Todas as resistências formam uma única cadeia em série ou um único grupo em paralelo. Em redes mistas, combine cada grupo passo a passo e introduza os totais parciais.",
      "As resistências reais têm uma tolerância (muitas vezes ±1% ou ±5%), pelo que um total medido pode diferir do calculado.",
      "Os resultados são apresentados com 6 algarismos significativos na unidade legível e com 12 algarismos significativos em ohms.",
    ],
    faqs: [
      {
        question: "Porque é que a resistência em paralelo é menor do que cada uma das resistências?",
        answer:
          "Cada resistência acrescentada em paralelo dá à corrente mais um caminho, o que aumenta a condutância total. A resistência total, que é o seu inverso, desce assim abaixo do menor valor individual. Duas resistências de 1 kΩ em paralelo dão 500 Ω.",
      },
      {
        question: "Há um atalho para duas resistências em paralelo?",
        answer:
          "Sim: R_total = (R₁ × R₂) ÷ (R₁ + R₂), o produto a dividir pela soma. Para 6 Ω e 3 Ω, isso dá 18 ÷ 9 = 2 Ω. Com mais de duas resistências, some antes os inversos.",
      },
      {
        question: "O que é um siemens?",
        answer:
          "O siemens (S) é a unidade SI de condutância, o inverso do ohm. Uma resistência de 100 Ω tem uma condutância de 0,01 S. Substitui o nome antigo «mho».",
      },
    ],
    sourcesUsedFor: ["Resistência equivalente de resistências em série (a soma) e em paralelo (o inverso da soma dos inversos)."],
  },
  text: {
    unit: "Unidade dos valores",
    unitOptions: { ohm: "Ω (ohms)", kohm: "kΩ (quilo-ohms)", megohm: "MΩ (mega-ohms)" },
    connection: "Ligação",
    connectionHelp: "Escolha qual dos totais apresentar como resultado principal. O outro aparece por baixo.",
    connectionOptions: { series: "Série", parallel: "Paralelo" },
    values: "Resistências",
    valuesHelp: "De 1 a 50 valores, separados por ponto e vírgula, espaços ou mudanças de linha. Cada um tem de ser maior do que 0.",
    errors: {
      empty: "Introduza pelo menos uma resistência.",
      tooMany: "Introduza no máximo {max} resistências.",
      notNumber: "«{token}» não é um número. Separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    maxCount: "Introduza no máximo {max} resistências.",
    notPositive: "Todas as resistências têm de ser maiores do que 0 ({value} não é).",
    tooBig: "{value} é demasiado grande. Cada valor pode ser no máximo {max}.",
    series: "Resistência total em série",
    parallel: "Resistência total em paralelo",
    seriesOhms: "Resistência em série em ohms",
    parallelOhms: "Resistência em paralelo em ohms",
    conductance: "Condutância total em paralelo",
    count: {
      zero: "{n} resistências",
      one: "{n} resistência",
      two: "{n} resistências",
      few: "{n} resistências",
      many: "{n} resistências",
      other: "{n} resistências",
    },
    caption: "Ligação em {connection}: {count}.",
    connectionWords: { series: "série", parallel: "paralelo" },
    single: "Com uma única resistência, os totais em série e em paralelo são simplesmente o valor dessa resistência.",
    parallelNote: "Um total em paralelo é sempre menor do que a resistência mais pequena do grupo ({smallest}).",
    table: "Cada resistência",
    resistorColumn: "Resistência",
    ohmsColumn: "Valor",
    conductanceColumn: "Condutância",
    resistorLabel: "R{i}",
  },
};

export default pt;
