import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const pt: CalculatorTranslation<RatioText> = {
  content: {
    title: "Calculadora de razões e proporções",
    shortTitle: "Razões",
    summary: "Simplifique uma razão de dois ou três termos, resolva uma proporção em ordem ao termo em falta ou divida uma quantia segundo uma razão.",
    metaTitle: "Calculadora de razões – Simplificar, resolver e dividir",
    metaDescription:
      "Simplifique razões com termos inteiros ou decimais, encontre o termo em falta em A : B = C : x ou divida uma quantia em duas ou três partes segundo uma razão.",
    keywords: ["calculadora de razões", "simplificar razão", "proporção", "regra de três simples", "termo em falta", "dividir segundo uma razão", "partes proporcionais", "razão 1 : n"],
    intro: [
      "Uma razão compara quantidades: 3 : 4 significa três partes de uma coisa por cada quatro partes de outra. As razões aparecem em receitas, na mistura de betão ou de tinta, nas escalas de mapas, no formato de ecrãs e na divisão de despesas.",
      "Esta calculadora faz as três tarefas mais pedidas. Reduz uma razão de dois ou três termos aos menores números inteiros, mesmo quando os termos são decimais; resolve uma proporção A : B = C : x em ordem ao termo em falta; e divide uma quantia em partes que seguem uma razão.",
    ],
    howToUse: [
      "Escolha a tarefa.",
      "Para simplificar ou dividir, introduza dois ou três termos positivos. Deixe o terceiro termo vazio para uma razão de duas partes.",
      "Para encontrar um termo em falta, introduza A, B e C de A : B = C : x.",
      "Para dividir, introduza também a quantia a repartir e consulte na tabela a parte que cabe a cada termo.",
    ],
    formulas: [
      {
        title: "Simplificação",
        expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)",
        explanation: "g é o máximo divisor comum dos termos. Os termos decimais são primeiro multiplicados pela mesma potência de 10 para se tornarem inteiros: 1,5 : 2,25 passa a 150 : 225.",
      },
      {
        title: "Termo em falta",
        expression: "A : B = C : x  ⇒  x = B × C ÷ A",
        explanation: "Duas razões são iguais quando os produtos cruzados são iguais, A × x = B × C. A não pode ser 0.",
      },
      {
        title: "Divisão de uma quantia",
        expression: "parte i = quantia × termo i ÷ (soma dos termos)",
        explanation: "Cada parte recebe a fração do total que o seu termo representa na soma de todos os termos.",
      },
      {
        title: "Forma 1 : n",
        expression: "A : B = 1 : (B ÷ A)",
        explanation: "Dividir todos os termos pelo primeiro dá uma razão unitária, útil para escalas e instruções de mistura.",
      },
    ],
    examples: [
      {
        title: "Simplificar 1,5 : 2,25 : 3",
        steps: ["Multiplique todos os termos por 100: 150 : 225 : 300", "O máximo divisor comum é 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Ajustar uma receita: 4 ovos levam 7 dl de leite; quanto leite para 10 ovos?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl de leite"],
      },
      {
        title: "Repartir 700 na razão 2 : 3 : 5",
        steps: ["Total de partes = 2 + 3 + 5 = 10, pelo que uma parte vale 700 ÷ 10 = 70", "Partes: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350", "Verificação: 140 + 210 + 350 = 700"],
      },
    ],
    assumptions: [
      "Para simplificar e dividir, os termos da razão têm de ser positivos. Os decimais são tratados de forma exata a partir dos algarismos que escrever, até 40 algarismos por termo.",
      "O modo de termo em falta aceita quaisquer números, incluindo negativos, desde que A não seja 0.",
      "As partes são apresentadas com até 4 casas decimais e não são arredondadas a unidades inteiras, pelo que, para dinheiro ou pessoas, poderá ter de ajustar a última parte manualmente.",
    ],
    faqs: [
      {
        question: "Como simplifico uma razão com decimais?",
        answer: "Multiplique todos os termos pela mesma potência de 10 até serem números inteiros e depois divida-os pelo máximo divisor comum. 0,6 : 0,8 passa a 6 : 8, que se simplifica para 3 : 4.",
      },
      {
        question: "Qual é a diferença entre uma razão e uma fração?",
        answer: "Uma fração compara uma parte com o todo, enquanto uma razão pode comparar partes entre si. Numa turma de 12 raparigas e 18 rapazes, a razão entre raparigas e rapazes é 2 : 3, mas a fração de raparigas é 12/30 = 2/5.",
      },
      {
        question: "Como divido uma conta segundo uma razão?",
        answer: "Escolha «Dividir uma quantia segundo uma razão» e introduza o valor da conta e o termo da razão de cada pessoa. Para 90 divididos na razão 1 : 2, o total são 3 partes de 30, pelo que as partes são 30 e 60.",
      },
    ],
    sourcesUsedFor: ["Definição de proporção e resolução em ordem a um termo desconhecido."],
  },
  text: {
    mode: "Tarefa",
    modes: {
      simplify: "Simplificar uma razão",
      missing: "Encontrar um termo em falta (A : B = C : x)",
      divide: "Dividir uma quantia segundo uma razão",
    },
    termA: "Primeiro termo (A)",
    termB: "Segundo termo (B)",
    termC: "Terceiro termo (opcional)",
    termHelp: "Um número positivo. São permitidos decimais como 1,5.",
    termInvalid: "Introduza um número positivo, como 4 ou 1,5.",
    termTooLong: "Introduza no máximo 40 algarismos.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Resolve A : B = C : x em ordem a x.",
    propAZero: "A não pode ser 0, porque x = B × C ÷ A.",
    amount: "Quantia a dividir",
    amountHelp: "Qualquer quantidade: dinheiro, gramas, litros, pessoas ou minutos.",
    simplified: "Razão simplificada",
    simplifiedCaption: "{original} reduzida aos menores termos inteiros.",
    decimalValue: "Valor decimal (A ÷ B)",
    oneToN: "Forma 1 : n",
    totalParts: "Total de partes",
    missingTerm: "Termo em falta x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Proporção completa",
    ratioValue: "Valor da razão (B ÷ A)",
    shares: "Partes",
    sharesCaption: "{amount} dividido na razão {ratio}.",
    sharesTable: "Como a quantia é repartida",
    colPart: "Parte",
    colTerm: "Termo da razão",
    colShare: "Valor",
    colPercent: "Percentagem do total",
    partN: "Parte {n}",
    decimalNote: "Os termos decimais são primeiro multiplicados pela mesma potência de 10 para se tornarem inteiros e depois divididos pelo máximo divisor comum.",
  },
};

export default pt;
