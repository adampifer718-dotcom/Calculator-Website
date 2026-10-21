import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const pt: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Calculadora de percentagens",
    shortTitle: "Percentagens",
    summary: "Calcule X% de um número, que percentagem um número representa de outro, ou o total a partir de uma parte e de uma percentagem.",
    metaTitle: "Calculadora de percentagens – Percentagem de um número",
    metaDescription:
      "Calculadora de percentagens gratuita. Calcule X% de Y, descubra que percentagem X representa de Y ou encontre o total quando X é Y% dele, com fórmulas e exemplos.",
    keywords: ["percentagem", "calcular percentagem", "% de um número", "que percentagem", "fração", "proporção", "matemática"],
    intro: [
      "Esta calculadora responde às três perguntas mais comuns sobre percentagens. Escolha uma pergunta, introduza dois números e a resposta é atualizada à medida que escreve.",
      "As percentagens exprimem uma parte em cada cem, pelo que 25% significa 25 em cada 100.",
    ],
    howToUse: [
      "Escolha a pergunta a que quer responder.",
      "Introduza os dois valores conhecidos. São permitidos números negativos e decimais.",
      "Consulte o resultado e a fórmula usada para o obter.",
    ],
    formulas: [
      { title: "Quanto é X% de Y?", expression: "Resultado = X ÷ 100 × Y", explanation: "Converta a percentagem num número decimal e multiplique." },
      {
        title: "X é que percentagem de Y?",
        expression: "Percentagem = X ÷ Y × 100",
        explanation: "Divida a parte pelo total e multiplique por 100. Y não pode ser 0.",
      },
      { title: "X é Y% de quanto?", expression: "Total = X ÷ (Y ÷ 100)", explanation: "Divida a parte pela percentagem em forma decimal. Y não pode ser 0." },
    ],
    examples: [
      { title: "Quanto é 20% de 150?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "45 é que percentagem de 180?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25%"] },
      { title: "30 é 12% de que número?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "Os resultados são apresentados com 4 a 6 casas decimais, no máximo. Os cálculos usam a precisão total.",
      "A divisão por zero não tem resposta, pelo que o total (ou a percentagem) não pode ser 0 na segunda e na terceira perguntas.",
    ],
    faqs: [
      {
        question: "Como calculo a percentagem de um número?",
        answer: "Divida a percentagem por 100 e multiplique pelo número. Por exemplo, 15% de 80 é 0,15 × 80 = 12.",
      },
      {
        question: "Como descubro que percentagem um número representa de outro?",
        answer: "Divida a parte pelo total e multiplique por 100. Por exemplo, 18 em 24 é 18 ÷ 24 × 100 = 75%.",
      },
      {
        question: "Uma percentagem pode ser superior a 100%?",
        answer: "Sim. Um valor maior do que o total representa mais de 100% dele. Por exemplo, 300 é 150% de 200.",
      },
      {
        question: "Como calculo o aumento percentual entre dois números?",
        answer: "Use a calculadora de aumento percentual, que divide a variação pelo valor inicial e multiplica por 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Pergunta",
    modes: { percentOf: "Quanto é X% de Y?", whatPercent: "X é que % de Y?", findWhole: "X é Y% de quanto?" },
    percentX: "Percentagem (X)",
    valueY: "Valor (Y)",
    partX: "Parte (X)",
    wholeY: "Total (Y)",
    percentY: "Percentagem (Y)",
    wholeZero: "O total não pode ser 0.",
    percentZero: "A percentagem não pode ser 0.",
    percentResult: "Percentagem",
    percentCaption: "{part} é {percent} de {whole}.",
    percentFormula: "Fórmula: {part} ÷ {whole} × 100.",
    wholeResult: "Valor total",
    wholeCaption: "{part} é {percent} de {whole}.",
    wholeFormula: "Fórmula: {part} ÷ ({percent} ÷ 100).",
    result: "Resultado",
    resultCaption: "{percent} de {value} é {result}.",
    minus: "{value} menos {percent}",
    plus: "{value} mais {percent}",
    resultFormula: "Fórmula: {percent} ÷ 100 × {value}.",
  },
};

export default pt;
