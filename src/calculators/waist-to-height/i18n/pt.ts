import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const pt: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Calculadora da relação cintura-altura",
    shortTitle: "Relação cintura-altura",
    summary:
      "Divida o perímetro da cintura pela altura para obter a relação cintura-altura e veja em que faixa de referência do NICE para adultos se situa.",
    metaTitle: "Relação cintura-altura – WHtR e faixas do NICE",
    metaDescription:
      "Calcule a sua relação cintura-altura em cm ou polegadas, compare-a com as faixas do NICE para adultos e veja a cintura que corresponde a metade da altura.",
    keywords: ["relação cintura-altura", "WHtR", "índice cintura-altura", "adiposidade central", "cintura menos de metade da altura", "gordura abdominal", "perímetro da cintura"],
    intro: [
      "A relação cintura-altura (WHtR) é o perímetro da cintura dividido pela altura. É uma forma simples de estimar quanta gordura se acumula na zona central do corpo, a chamada adiposidade central, que está associada à diabetes tipo 2, à hipertensão arterial e à doença cardíaca.",
      "No Reino Unido, o NICE sugere que os adultos com um IMC inferior a 35 usem esta relação em conjunto com o IMC, com a mensagem simples de manter a cintura abaixo de metade da altura. Esta calculadora mostra a sua relação, a faixa de referência do NICE em que se situa e a cintura que corresponde a uma relação de 0,5.",
    ],
    howToUse: [
      "Escolha centímetros ou polegadas. Use a mesma unidade nas duas medidas.",
      "Meça a cintura a meio caminho entre a costela mais baixa e o topo do osso da anca, depois de expirar normalmente, com a fita nivelada e justa.",
      "Meça a sua altura sem sapatos.",
      "Consulte a sua relação, a faixa de referência e a cintura correspondente a uma relação de 0,5.",
    ],
    formulas: [
      {
        title: "Relação cintura-altura",
        expression: "WHtR = perímetro da cintura ÷ altura",
        explanation: "Ambas na mesma unidade, pelo que as unidades se anulam e a relação é a mesma em cm e em polegadas.",
      },
      {
        title: "Faixas de referência do NICE para adultos",
        expression: "0,4 a 0,49: sem aumento do risco para a saúde\n0,5 a 0,59: risco aumentado para a saúde\n0,6 ou mais: risco elevado para a saúde",
        explanation: "Para adultos com um IMC inferior a 35. São faixas de referência, e não um diagnóstico.",
      },
      {
        title: "Cintura a metade da altura",
        expression: "cintura para uma relação de 0,5 = altura ÷ 2",
        explanation: "O limiar por trás do conselho de manter a cintura abaixo de metade da altura.",
      },
    ],
    examples: [
      {
        title: "Cintura de 84 cm, altura de 172 cm",
        steps: ["WHtR = 84 ÷ 172 ≈ 0,49", "0,49 está na faixa de 0,4 a 0,49", "Metade da altura é 172 ÷ 2 = 86 cm, pelo que a cintura está 2 cm abaixo"],
      },
      {
        title: "Cintura de 38 in, altura de 68 in",
        steps: ["WHtR = 38 ÷ 68 ≈ 0,56", "0,56 está na faixa de 0,5 a 0,59", "Metade da altura é 34 in, pelo que a cintura está 4 in acima"],
      },
      {
        title: "Cintura de 104 cm, altura de 168 cm",
        steps: ["WHtR = 104 ÷ 168 ≈ 0,62", "0,62 está na faixa de 0,6 ou mais", "Uma relação de 0,6 corresponderia a uma cintura de 168 × 0,6 = 100,8 cm"],
      },
    ],
    assumptions: [
      "O resultado é uma estimativa, e não um conselho médico nem um diagnóstico, e esta calculadora ainda não foi revista por profissionais. Fale com um médico ou enfermeiro sobre o que as suas medidas significam para si.",
      "As faixas provêm da norma do NICE para adultos com um IMC inferior a 35, de qualquer sexo ou etnia, e são apresentadas apenas como referência. O NICE não as usa em adultos com um IMC de 35 ou mais, porque a sua relação é quase sempre elevada.",
      "A calculadora usa as faixas para adultos. Não se destina a crianças e jovens, nem à gravidez, sem aconselhamento clínico.",
      "Pequenas diferenças no local e na firmeza com que se coloca a fita alteram a relação, por isso meça sempre da mesma forma se estiver a acompanhar a evolução.",
    ],
    faqs: [
      {
        question: "Qual é uma relação cintura-altura saudável?",
        answer:
          "O NICE descreve uma relação de 0,4 a 0,49 como sem aumento do risco para a saúde em adultos com um IMC inferior a 35. A regra simples é manter a cintura abaixo de metade da altura.",
      },
      {
        question: "Em que difere do IMC?",
        answer:
          "O IMC compara o peso com a altura e não indica onde se acumula a gordura. A relação cintura-altura olha para a cintura, pelo que reflete a gordura na zona central, que está mais estreitamente associada a alguns riscos para a saúde. O NICE sugere usar as duas.",
      },
      {
        question: "Como se compara com a relação cintura-anca?",
        answer:
          "Ambas avaliam a gordura à volta da cintura. A relação cintura-anca divide pelo perímetro da anca e tem limiares diferentes para mulheres e homens, enquanto a relação cintura-altura divide pela altura e usa as mesmas faixas para todos.",
      },
    ],
    sourcesUsedFor: [
      "As faixas da relação cintura-altura em adultos (0,4 a 0,49, 0,5 a 0,59, 0,6 ou mais) e a sua utilização em adultos com um IMC inferior a 35.",
      "A mensagem ao público de manter a cintura abaixo de metade da altura (uma relação inferior a 0,5).",
    ],
  },
  text: {
    unit: "Unidade",
    units: { cm: "Centímetros (cm)", in: "Polegadas (in)" },
    waist: "Perímetro da cintura",
    waistHelp: "Meça a meio caminho entre o bordo inferior da costela mais baixa e o topo do osso da anca, depois de expirar normalmente.",
    height: "Altura",
    heightHelp: "A sua altura em pé, sem sapatos, na mesma unidade da cintura.",
    errors: {
      implausible: "Uma relação cintura-altura de {ratio} é muito improvável. Verifique se as duas medidas usam a mesma unidade.",
    },
    ratio: "Relação cintura-altura",
    caption: "Cintura {waist} ÷ altura {height}.",
    band: "Faixa de referência do NICE para adultos (apenas referência, não é um diagnóstico)",
    bands: {
      below: "Abaixo de 0,4: abaixo da faixa mais baixa da norma",
      healthy: "0,4 a 0,49: sem aumento do risco para a saúde",
      increased: "0,5 a 0,59: risco aumentado para a saúde",
      high: "0,6 ou mais: risco elevado (ainda mais aumentado) para a saúde",
    },
    waistHalf: "Cintura com uma relação de 0,5 (metade da altura)",
    waistHigh: "Cintura com uma relação de 0,6",
    difference: "A sua cintura em comparação com metade da altura",
    notes: {
      rounding: "A faixa é escolhida a partir da relação arredondada a duas casas decimais, tal como apresentada.",
      below:
        "As faixas do NICE começam em 0,4. Uma relação mais baixa pode indicar um erro de medição ou de unidade, ou uma constituição muito magra; não constitui uma faixa própria.",
      scope:
        "O NICE usa estas faixas em adultos com um IMC inferior a 35, de qualquer sexo ou etnia. Não se destinam a adultos com um IMC de 35 ou mais, à gravidez, nem a crianças e jovens, que devem ser avaliados por um profissional de saúde.",
      reference: "Isto é uma comparação de referência, e não um diagnóstico. Fale com um médico ou enfermeiro sobre o que o seu resultado significa para si.",
    },
  },
};

export default pt;
