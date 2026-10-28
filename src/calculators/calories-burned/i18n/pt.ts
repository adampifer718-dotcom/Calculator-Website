import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const pt: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Calculadora de calorias gastas",
    shortTitle: "Calorias gastas",
    summary:
      "Estime as calorias gastas a caminhar, correr, andar de bicicleta, nadar e noutras atividades a partir de valores MET, do peso corporal e da duração.",
    metaTitle: "Calculadora de calorias gastas – Método MET por atividade",
    metaDescription:
      "Estime as calorias gastas a caminhar, correr, pedalar, nadar e mais, a partir de valores MET publicados, do seu peso e do tempo de atividade.",
    keywords: ["calorias gastas", "calorias do exercício", "MET", "equivalente metabólico", "gasto energético", "compêndio de atividades físicas", "kcal por hora"],
    intro: [
      "Um MET (equivalente metabólico da tarefa) compara o custo energético de uma atividade com o de estar sentado em repouso. Caminhar a passo rápido corresponde a cerca de 4 MET, ou seja, gasta cerca de quatro vezes mais energia do que o repouso.",
      "Esta calculadora multiplica o valor MET de uma atividade pelo seu peso corporal e pelo tempo de atividade para estimar as calorias gastas. Escolha uma das atividades comuns, com valores do Compêndio de Atividades Físicas, ou introduza o seu próprio valor MET.",
    ],
    howToUse: [
      "Escolha uma atividade, ou escolha um valor MET personalizado e introduza-o.",
      "Introduza o seu peso corporal em quilogramas ou libras.",
      "Introduza quanto tempo durou a atividade, em horas e minutos.",
      "Consulte as calorias gastas estimadas, os quilojoules e o ritmo por hora.",
    ],
    formulas: [
      {
        title: "Método MET",
        expression: "kcal = MET × peso (kg) × tempo (h)",
        explanation: "Usa a convenção de que 1 MET corresponde a cerca de 1 kcal por quilograma de peso corporal por hora.",
      },
      {
        title: "Acima do repouso",
        expression: "kcal líquidas = (MET − 1) × peso (kg) × tempo (h)",
        explanation: "Exclui a energia que gastaria de qualquer forma em repouso.",
      },
      {
        title: "Unidades",
        expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ",
        explanation: "Fatores de conversão exatos.",
      },
    ],
    examples: [
      {
        title: "Caminhada rápida de 45 minutos com 70 kg",
        steps: [
          "Caminhada rápida (3,5 mph) = 4,3 MET",
          "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal",
          "Em quilojoules: 225,75 × 4,184 ≈ 945 kJ",
        ],
      },
      {
        title: "Corrida a 6 mph durante 1 h 30 min com 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1 200 kcal", "Cerca de 800 kcal por hora"],
      },
      {
        title: "Atividade personalizada de 6,5 MET durante 2 horas com 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Acima do repouso: (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "O resultado é uma estimativa, não um aconselhamento médico, e esta calculadora ainda não foi revista por profissionais. Consulte um médico antes de iniciar um novo programa de exercício.",
      "Os valores MET são médias populacionais para adultos. A condição física, a técnica, o terreno, a composição corporal e a temperatura alteram o gasto energético real, pelo que os resultados individuais variam.",
      "O cálculo usa a convenção de que 1 MET ≈ 1 kcal por kg por hora. O gasto energético em repouso medido varia de pessoa para pessoa, o que aumenta a incerteza.",
      "Os valores MET provêm do Compêndio de Atividades Físicas de 2011. A atualização de 2024 alterou algumas atividades, pelo que os valores de outras ferramentas podem diferir ligeiramente.",
    ],
    faqs: [
      {
        question: "O que é um MET?",
        answer: "Um MET é o custo energético de uma atividade em relação a estar sentado em repouso. Uma atividade de 6 MET gasta cerca de seis vezes a energia do repouso.",
      },
      {
        question: "Porque é que o peso corporal conta?",
        answer: "Mover um corpo mais pesado exige mais energia, por isso a mesma atividade durante o mesmo tempo gasta mais calorias numa pessoa mais pesada.",
      },
      {
        question: "Os valores das pulseiras de atividade são mais precisos?",
        answer: "As pulseiras acrescentam dados da frequência cardíaca, o que pode ajudar, mas também são estimativas. Ambos os métodos servem melhor para comparar atividades do que como valores exatos.",
      },
    ],
    sourcesUsedFor: [
      "Os valores MET das atividades listadas e a convenção de que 1 MET corresponde a cerca de 1 kcal por kg por hora.",
      "Contexto sobre a edição atual do Compêndio, que reviu alguns valores MET; consulte pacompendium.com para obter o valor mais recente de uma atividade.",
    ],
  },
  text: {
    activity: "Atividade",
    activityHelp: "Os valores MET são médias para adultos do Compêndio de Atividades Físicas.",
    activities: {
      walking: "Caminhar, 3,0 mph (4,8 km/h), em plano",
      brisk: "Caminhar a passo rápido, 3,5 mph (5,6 km/h)",
      hiking: "Caminhada em trilhos, corta-mato",
      run5: "Correr, 5 mph (8 km/h, 12 min/milha)",
      run6: "Correr, 6 mph (9,7 km/h, 10 min/milha)",
      cycleLeisure: "Ciclismo de lazer, menos de 10 mph (16 km/h)",
      cycleModerate: "Ciclismo, 12–13,9 mph (19–22 km/h), moderado",
      swimModerate: "Natação em piscina, crol, esforço ligeiro ou moderado",
      swimVigorous: "Natação em piscina, crol, rápido, esforço intenso",
      weightsLight: "Treino com pesos, esforço ligeiro ou moderado",
      weightsVigorous: "Treino com pesos, esforço intenso",
      yoga: "Ioga, hatha",
      tennis: "Ténis, em geral",
      soccer: "Futebol, informal",
      jumpRope: "Saltar à corda, ritmo moderado",
      gardening: "Jardinagem, em geral",
      custom: "Valor MET personalizado",
    },
    customMet: "Valor MET",
    customMetHelp: "Equivalente metabólico da atividade: 1 é estar sentado em repouso; caminhar a passo rápido é cerca de 4.",
    weight: "Peso corporal",
    weightRange: "Introduza um peso corporal entre 20 e 700 kg (cerca de 45 a 1 540 lb).",
    weightUnit: "Unidade de peso",
    weightUnits: { kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    hours: "Horas",
    minutes: "Minutos",
    timeZero: "Introduza uma duração superior a 0.",
    timeMax: "Introduza uma duração de 24 horas ou menos.",
    calories: "Calorias gastas",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "Em quilojoules",
    perHour: "Calorias por hora",
    metUsed: "Valor MET usado",
    aboveRest: "Acima do repouso (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate:
        "Os valores MET são médias para adultos; o seu gasto energético depende da condição física, da técnica, da composição corporal e das condições, e pode diferir bastante.",
      gross: "O total inclui a energia que gastaria em repouso durante o mesmo tempo. O valor «acima do repouso» exclui-a.",
    },
  },
};

export default pt;
