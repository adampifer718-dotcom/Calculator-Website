import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const pt: CalculatorTranslation<BmrText> = {
  content: {
    title: "Calculadora de metabolismo basal (TMB)",
    shortTitle: "Metabolismo basal",
    summary: "Estime a sua taxa metabólica basal (as calorias que gasta em repouso) com a equação de Mifflin-St Jeor.",
    metaTitle: "Calculadora de metabolismo basal (TMB) – Gasto em repouso",
    metaDescription:
      "Estime a sua taxa metabólica basal (TMB) em kcal e kJ por dia com a equação de Mifflin-St Jeor, em unidades métricas ou imperiais.",
    keywords: ["metabolismo basal", "taxa metabólica basal", "calcular TMB", "calorias em repouso", "Mifflin-St Jeor", "gasto energético em repouso", "kcal por dia"],
    intro: [
      "A taxa metabólica basal (TMB) é a energia que o seu corpo consome em repouso absoluto para o manter vivo. É o ponto de partida para estimar as calorias de que precisa por dia.",
      "Esta calculadora usa a equação de Mifflin-St Jeor, uma estimativa muito utilizada para adultos saudáveis.",
    ],
    howToUse: [
      "Escolha unidades métricas ou imperiais.",
      "Escolha o sexo usado na equação e introduza a sua idade.",
      "Introduza o seu peso e a sua altura.",
      "Consulte a sua TMB estimada em kcal e kJ por dia.",
    ],
    formulas: [
      {
        title: "Mifflin-St Jeor",
        expression: "TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × idade (anos) + s\ns = +5 para homens, −161 para mulheres",
        explanation: "Resultado em quilocalorias por dia.",
      },
      { title: "Unidades de energia", expression: "1 kcal = 4,184 kJ", explanation: "A caloria termoquímica." },
    ],
    examples: [
      {
        title: "Homem, 30 anos, 80 kg, 180 cm",
        steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1125 − 150 + 5 = 1780 kcal/dia"],
      },
      {
        title: "Mulher, 25 anos, 60 kg, 165 cm",
        steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1345 kcal/dia"],
      },
    ],
    assumptions: [
      "Para adultos saudáveis. Não é adequada para crianças, grávidas nem pessoas com doenças que afetem o metabolismo.",
      "As equações estimam valores médios; a TMB de cada pessoa pode variar 10 % ou mais.",
      "Isto não constitui aconselhamento médico nem nutricional. Consulte um profissional de saúde ou um nutricionista.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre a TMB e as calorias diárias de que preciso?",
        answer: "A TMB cobre apenas o repouso. As necessidades diárias somam a energia da atividade física e da digestão, pelo que são maiores.",
      },
      {
        question: "Porque é que a equação tem em conta o sexo?",
        answer: "O estudo original ajustou constantes diferentes para homens e mulheres porque, em média, a composição corporal é diferente.",
      },
      {
        question: "Porque é que a TMB diminui com a idade?",
        answer: "A massa muscular e o ritmo metabólico tendem a diminuir com a idade, algo que o termo −5 × idade reflete.",
      },
    ],
    sourcesUsedFor: ["A equação de Mifflin-St Jeor e os seus coeficientes."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiais (lb, ft, in)" },
    sex: "Sexo usado na equação",
    sexHelp: "A equação tem constantes diferentes para homens e mulheres.",
    sexes: { male: "Homem", female: "Mulher" },
    age: "Idade",
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pés)",
    heightIn: "Altura (polegadas)",
    heightZero: "Introduza uma altura superior a 0.",
    bmr: "Taxa metabólica basal",
    caption: "Energia estimada que consome em repouso absoluto.",
    kj: "Em quilojoules",
    kcalDay: "kcal/dia",
    kjDay: "kJ/dia",
    note: "Uma estimativa para adultos saudáveis. Os resultados individuais podem variar 10 % ou mais; não é uma orientação de dieta nem de tratamento.",
  },
};

export default pt;
