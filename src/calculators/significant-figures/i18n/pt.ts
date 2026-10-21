import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

const pt: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Calculadora de algarismos significativos",
    shortTitle: "Algarismos significativos",
    summary: "Conte os algarismos significativos de um número ou arredonde um número ao número de algarismos significativos que escolher.",
    metaTitle: "Calculadora de algarismos significativos – Contar e arredondar",
    metaDescription:
      "Conte os algarismos significativos de qualquer número, incluindo decimais e notação e, ou arredonde a um número definido de algarismos com a notação científica.",
    keywords: ["algarismos significativos", "contar algarismos significativos", "arredondamento", "precisão", "química", "física", "notação científica"],
    intro: [
      "Os algarismos significativos mostram com que precisão se conhece um número. Esta calculadora conta-os segundo as regras habituais ou arredonda um número à precisão que escolher.",
      "Escreva o número exatamente como está, porque os zeros finais e a vírgula decimal alteram a contagem.",
    ],
    howToUse: [
      "Escolha se pretende contar ou arredondar.",
      "Escreva o número exatamente como está, incluindo os zeros finais.",
      "Para arredondar, introduza quantos algarismos significativos pretende manter.",
    ],
    formulas: [
      {
        title: "Regras de contagem",
        expression:
          "1. Os algarismos diferentes de zero são significativos.\n2. Os zeros entre algarismos diferentes de zero são significativos.\n3. Os zeros à esquerda nunca são significativos.\n4. Os zeros finais só são significativos se houver separador decimal.",
        explanation: "São as regras ensinadas na maioria das disciplinas de química e física.",
      },
      {
        title: "Arredondamento",
        expression: "Mantenha n algarismos a partir do primeiro algarismo diferente de zero e arredonde o último.",
        explanation: "A notação científica elimina qualquer ambiguidade quanto aos zeros finais.",
      },
    ],
    examples: [
      {
        title: "Quantos algarismos significativos tem 0,004050?",
        steps: ["Os zeros à esquerda 0,00 não contam", "Contam o 4, o 0, o 5 e o 0 final: 4 algarismos significativos"],
      },
      {
        title: "Arredondar 123 456 a 3 algarismos significativos",
        steps: ["Mantêm-se o 1, o 2 e o 3; o algarismo seguinte é 4, pelo que se arredonda por defeito", "123 000, ou 1,23 × 10⁵"],
      },
    ],
    assumptions: [
      "Os zeros finais de um número inteiro sem separador decimal são considerados não significativos.",
      "Os números são tratados com até 15 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Os zeros finais são significativos?",
        answer:
          "Só quando o número tem separador decimal. 2,50 tem 3 algarismos significativos, mas 250 tem 2, a não ser que se escreva com separador decimal final (na calculadora, «250,» ou «250.») ou como 2,50 × 10².",
      },
      {
        question: "Os zeros à esquerda são significativos?",
        answer: "Não. Em 0,0071 os zeros apenas posicionam a vírgula decimal, pelo que o número tem 2 algarismos significativos.",
      },
      {
        question: "Porquê usar a notação científica?",
        answer: "Mostra exatamente quais os algarismos significativos; assim, 1,20 × 10³ tem claramente 3.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Tarefa",
    tasks: { count: "Contar algarismos significativos", round: "Arredondar a algarismos significativos" },
    number: "Número",
    numberHelp:
      "Escreva-o exatamente como está, incluindo os zeros finais. Pode usar a vírgula decimal (0,004050) ou o ponto (0.004050); os espaços entre milhares, como em 1 200, são ignorados. É aceite a notação e, como 6,02e23.",
    invalid: "Introduza um número como 1200, 0,0045 ou 6,02e23.",
    zero: "Introduza um número diferente de zero.",
    tooLarge: "Introduza um número mais pequeno.",
    digits: "Algarismos significativos a manter",
    rounded: "Arredondado a {digits} algarismos significativos",
    scientific: "Notação científica",
    originalCount: "Algarismos significativos do original",
    roundNote: "Os zeros finais de um número inteiro como 123 000 são ambíguos; a notação científica mostra exatamente quais os algarismos significativos.",
    count: "Algarismos significativos",
    countCaption: "{number} tem {count} algarismos significativos.",
    countCaptionOne: "{number} tem 1 algarismo significativo.",
    inScientific: "Em notação científica",
    countNote:
      "Os zeros finais de um número inteiro sem separador decimal (como 1200) são considerados não significativos. Escreva «1200,» ou «1200.» para que sejam significativos.",
  },
};

export default pt;
