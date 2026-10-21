import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const pt: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Calculadora da relação cintura-anca",
    shortTitle: "Relação cintura-anca",
    summary:
      "Divida o perímetro da cintura pelo perímetro da anca para obter a relação cintura-anca e compare-a com o limiar da OMS para mulheres ou homens.",
    metaTitle: "Calculadora da relação cintura-anca – RCA e limiar da OMS",
    metaDescription:
      "Calcule a sua relação cintura-anca a partir das medidas da cintura e da anca em cm ou polegadas e compare-a com o limiar da OMS para mulheres e homens.",
    keywords: ["relação cintura-anca", "calculadora RCA", "índice cintura-anca", "perímetro da cintura", "gordura abdominal", "forma do corpo", "relação cintura-anca OMS"],
    intro: [
      "A relação cintura-anca (RCA) compara o tamanho da cintura com o tamanho da anca. Uma relação mais alta significa que uma maior parte da gordura corporal se concentra à volta do abdómen, o que a investigação associou a um risco maior de diabetes tipo 2 e de doença cardíaca.",
      "Introduza as duas medidas na mesma unidade para obter a sua relação. A calculadora compara-a depois com o limiar usado numa consulta de peritos da Organização Mundial da Saúde: 0,90 para homens e 0,85 para mulheres.",
    ],
    howToUse: [
      "Escolha centímetros ou polegadas. As duas medidas têm de usar a mesma unidade.",
      "Meça a cintura a meio caminho entre a costela mais baixa e o topo do osso da anca, no fim de uma expiração normal.",
      "Meça a anca à volta da parte mais larga das nádegas, com a fita nivelada e justa, mas sem apertar.",
      "Escolha feminino ou masculino para selecionar o limiar e consulte a sua relação.",
    ],
    formulas: [
      {
        title: "Relação cintura-anca",
        expression: "RCA = perímetro da cintura ÷ perímetro da anca",
        explanation: "As unidades anulam-se, pelo que a relação é a mesma em centímetros e em polegadas.",
      },
      {
        title: "Limiar da OMS",
        expression: "RCA ≥ 0,90 (homens)   ·   RCA ≥ 0,85 (mulheres)",
        explanation: "A partir destes valores, a consulta de peritos da OMS descreve o risco de complicações metabólicas como substancialmente aumentado.",
      },
    ],
    examples: [
      {
        title: "Mulher, cintura de 82 cm e anca de 100 cm",
        steps: ["RCA = 82 ÷ 100 = 0,82", "O limiar da OMS para mulheres é 0,85", "0,82 está abaixo do limiar"],
      },
      {
        title: "Homem, cintura de 97 cm e anca de 101 cm",
        steps: ["RCA = 97 ÷ 101 ≈ 0,96", "O limiar da OMS para homens é 0,90", "0,96 está no limiar ou acima dele"],
      },
      {
        title: "Mulher a medir em polegadas, cintura de 34 in e anca de 40 in",
        steps: ["RCA = 34 ÷ 40 = 0,85", "O limiar para mulheres é 0,85 ou mais", "A relação está exatamente no limiar"],
      },
    ],
    assumptions: [
      "Este resultado é uma estimativa, e não um conselho médico nem um diagnóstico, e esta calculadora não foi revista por profissionais. Fale com um profissional de saúde sobre os seus riscos para a saúde.",
      "Os locais de medição seguem o protocolo da OMS: a cintura a meio caminho entre o bordo inferior da última costela e o topo da crista ilíaca, e a anca na parte mais larga das nádegas. Medir noutro sítio altera a relação.",
      "Os limiares de 0,90 e 0,85 são pontos de referência gerais da consulta de peritos da OMS. Os limiares adequados variam com a população e a etnia, e não se destinam a crianças nem à gravidez.",
      "A relação é arredondada a duas casas decimais antes de ser comparada com o limiar.",
    ],
    faqs: [
      {
        question: "Porque é que a relação cintura-anca é importante?",
        answer:
          "É um indicador simples de onde se acumula a gordura corporal. A gordura à volta do abdómen está mais associada a problemas metabólicos do que a gordura nas ancas e nas coxas, e a relação capta essa diferença.",
      },
      {
        question: "A relação cintura-anca é melhor do que o IMC?",
        answer:
          "Medem coisas diferentes. O IMC relaciona o peso com a altura, mas nada diz sobre onde se acumula a gordura, enquanto a relação cintura-anca ignora o peso total. Os profissionais de saúde costumam analisar várias medidas em conjunto.",
      },
      {
        question: "Faz diferença usar centímetros ou polegadas?",
        answer: "Não. A relação não tem unidade, pelo que obtém o mesmo resultado em ambos os casos, desde que as duas medidas usem a mesma unidade.",
      },
    ],
    sourcesUsedFor: [
      "Os limiares da relação cintura-anca de 0,90 para homens e 0,85 para mulheres para um risco substancialmente aumentado de complicações metabólicas, e os locais de medição.",
    ],
  },
  text: {
    unit: "Unidade",
    units: { cm: "Centímetros (cm)", in: "Polegadas (in)" },
    waist: "Perímetro da cintura",
    waistHelp: "Meça a meio caminho entre a costela mais baixa e o topo do osso da anca (crista ilíaca), no fim de uma expiração normal.",
    hip: "Perímetro da anca",
    hipHelp: "Meça à volta da parte mais larga das nádegas, com a fita nivelada.",
    sex: "Sexo",
    sexHelp: "Usado apenas para escolher o limiar da OMS, que é diferente para mulheres e homens.",
    sexes: { female: "Feminino", male: "Masculino" },
    errors: {
      implausible: "Uma relação cintura-anca de {ratio} está fora do intervalo observado em adultos. Verifique se as duas medidas usam a mesma unidade.",
    },
    ratio: "Relação cintura-anca",
    caption: "Cintura {waist} ÷ anca {hip}.",
    comparison: "Comparação com o limiar da OMS",
    atOrAbove: "No limiar ou acima",
    below: "Abaixo do limiar",
    cutoff: "Limiar da OMS para {sex}",
    waistAtCutoff: "Cintura com que se atingiria o limiar",
    notes: {
      above:
        "Uma relação de {cutoff} ou mais em {sex} é o nível que a consulta de peritos da OMS associou a um risco substancialmente aumentado de complicações metabólicas. É um marcador de rastreio, e não um diagnóstico.",
      below:
        "A relação está abaixo do limiar da OMS de {cutoff} para {sex}. Outros fatores, como o peso, a atividade física, a tensão arterial e os antecedentes familiares, também influenciam o risco para a saúde.",
      rounding: "A relação é arredondada a duas casas decimais antes de ser comparada com o limiar.",
      advice: "Isto é uma estimativa, e não um conselho médico. Fale com um profissional de saúde sobre os seus resultados.",
    },
    sexNames: { female: "mulheres", male: "homens" },
  },
};

export default pt;
