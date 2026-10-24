import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const pt: CalculatorTranslation<TdeeText> = {
  content: {
    title: "Calculadora de TDEE (gasto energético diário total)",
    shortTitle: "TDEE",
    summary:
      "Estime o gasto energético diário total a partir da TMB de Mifflin-St Jeor e de um multiplicador de atividade, com todos os níveis de atividade lado a lado.",
    metaTitle: "Calculadora de TDEE – Gasto energético diário total",
    metaDescription:
      "Estime o seu gasto energético diário total em kcal e kJ a partir da TMB de Mifflin-St Jeor e do nível de atividade, com uma tabela dos cinco níveis.",
    keywords: ["TDEE", "gasto energético diário total", "calorias de manutenção", "calorias por dia", "multiplicador de atividade", "Mifflin-St Jeor", "nível de atividade física"],
    intro: [
      "O gasto energético diário total (TDEE, do inglês total daily energy expenditure) é uma estimativa de toda a energia que gasta num dia: a energia necessária em repouso mais a energia do movimento, do exercício e da digestão dos alimentos. É muitas vezes designado por calorias de manutenção.",
      "Esta calculadora estima primeiro a sua taxa metabólica basal com a equação de Mifflin-St Jeor, a mesma usada pela Calculadora de metabolismo basal, e depois multiplica-a por um fator correspondente ao seu nível de atividade. Os cinco multiplicadores, de 1,2 a 1,9, são convenções muito utilizadas, por isso encare o resultado como uma estimativa de partida.",
    ],
    howToUse: [
      "Escolha unidades métricas ou imperiais.",
      "Escolha o sexo usado na equação e introduza a sua idade, o seu peso e a sua altura.",
      "Escolha o nível de atividade que melhor corresponde a uma semana típica.",
      "Consulte o TDEE estimado, a TMB em que se baseia e a tabela que compara todos os níveis de atividade.",
    ],
    formulas: [
      {
        title: "Taxa metabólica basal (Mifflin-St Jeor)",
        expression: "TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × idade (anos) + s\ns = +5 para homens, −161 para mulheres",
        explanation: "Energia gasta em repouso absoluto, em kcal por dia.",
      },
      {
        title: "Gasto energético diário total",
        expression: "TDEE = TMB × multiplicador de atividade\nsedentário 1,2 · ligeiro 1,375 · moderado 1,55 · muito ativo 1,725 · extremamente ativo 1,9",
        explanation: "O multiplicador aumenta a energia de repouso para ter em conta a atividade diária. Estes valores são convenções comuns, não foram medidos para si.",
      },
      {
        title: "Variação semanal aproximada",
        expression: "0,5 kg por semana ≈ 0,5 × 7 700 ÷ 7 = 550 kcal/dia",
        explanation: "Uma regra prática que considera que 1 kg de peso corporal equivale a cerca de 7 700 kcal. A variação real de peso raramente a segue com exatidão.",
      },
      { title: "Unidades de energia", expression: "1 kcal = 4,184 kJ", explanation: "A caloria termoquímica." },
    ],
    examples: [
      {
        title: "Mulher, 35 anos, 68 kg, 168 cm, moderadamente ativa",
        steps: [
          "TMB = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1 394 kcal/dia",
          "TDEE = 1 394 × 1,55 = 2 160,7 ≈ 2 161 kcal/dia",
          "Em quilojoules: 2 160,7 × 4,184 ≈ 9 040 kJ/dia",
        ],
      },
      {
        title: "Homem, 45 anos, 190 lb, 5 ft 10 in, sedentário",
        steps: [
          "190 lb = 86,18 kg; 5 ft 10 in = 70 in = 177,8 cm",
          "TMB = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1 753 kcal/dia",
          "TDEE = 1 753,08 × 1,2 ≈ 2 104 kcal/dia; o valor para perder 0,5 kg por semana (≈ 1 554 kcal/dia) fica abaixo da TMB, pelo que aparece um aviso",
        ],
      },
    ],
    assumptions: [
      "O resultado é uma estimativa, não um aconselhamento médico nem nutricional, e esta calculadora ainda não foi revista por profissionais. Fale com um médico ou um nutricionista antes de alterar a sua alimentação.",
      "A equação de Mifflin-St Jeor foi desenvolvida para adultos saudáveis. Não é adequada para crianças, gravidez, amamentação nem doenças que afetem o metabolismo, e a TMB de cada pessoa pode diferir dela em 10 % ou mais.",
      "Os multiplicadores de atividade (1,2 a 1,9) são convenções muito utilizadas para grandes grupos de estilo de vida. A escolha do nível é subjetiva, e o erro no TDEE é maior do que o erro na TMB.",
      "Os valores de ±0,5 kg por semana usam a regra prática aproximada de 7 700 kcal por kg. Na prática, a variação de peso depende da água, da composição corporal e da adaptação, e abranda com o tempo.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre a TMB e o TDEE?",
        answer: "A TMB é a energia gasta em repouso absoluto. O TDEE acrescenta a energia do movimento diário, do exercício e da digestão, pelo que é sempre superior à TMB.",
      },
      {
        question: "Que nível de atividade devo escolher?",
        answer: "Escolha o nível que corresponde a uma semana normal, não à sua melhor semana. Se estiver entre dois níveis, a tabela mostra ambos para poder usar um valor intermédio. A maioria das pessoas com trabalho de secretária é sedentária ou ligeiramente ativa.",
      },
      {
        question: "Porque é que o meu TDEE é diferente do da minha pulseira de atividade?",
        answer: "As pulseiras e os relógios estimam a atividade a partir do movimento e da frequência cardíaca, enquanto esta calculadora usa um único multiplicador genérico. Ambos são estimativas; acompanhar o peso e a ingestão ao longo de várias semanas é a melhor forma de conhecer o seu verdadeiro nível de manutenção.",
      },
    ],
    sourcesUsedFor: [
      "A equação de Mifflin-St Jeor para o gasto energético em repouso, partilhada com a Calculadora de metabolismo basal.",
      "Estimativa do gasto energético total como o gasto energético em repouso multiplicado por um nível de atividade física.",
    ],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiais (lb, ft, in)" },
    sex: "Sexo usado na equação",
    sexHelp: "A equação de Mifflin-St Jeor tem constantes diferentes para homens e mulheres.",
    sexes: { male: "Homem", female: "Mulher" },
    age: "Idade",
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pés)",
    heightIn: "Altura (polegadas)",
    heightZero: "Introduza uma altura superior a 0.",
    activity: "Nível de atividade",
    activityHelp: "Escolha a descrição mais próxima de uma semana típica. Os multiplicadores são convenções aproximadas, não medições.",
    activities: {
      sedentary: "Sedentário (pouco ou nenhum exercício)",
      light: "Ligeiramente ativo (exercício ligeiro 1–3 dias por semana)",
      moderate: "Moderadamente ativo (exercício 3–5 dias por semana)",
      very: "Muito ativo (exercício intenso 6–7 dias por semana)",
      extra: "Extremamente ativo (trabalho físico ou treino duas vezes por dia)",
    },
    activityShort: {
      sedentary: "Sedentário",
      light: "Ligeiramente ativo",
      moderate: "Moderadamente ativo",
      very: "Muito ativo",
      extra: "Extremamente ativo",
    },
    tdee: "Gasto energético diário total",
    caption: "TMB {bmr} kcal/dia × multiplicador de atividade {factor}.",
    bmr: "Taxa metabólica basal (Mifflin-St Jeor)",
    kj: "TDEE em quilojoules",
    multiplier: "Multiplicador de atividade",
    lose: "Perda de cerca de 0,5 kg (1,1 lb) por semana",
    gain: "Ganho de cerca de 0,5 kg (1,1 lb) por semana",
    kcalDay: "kcal/dia",
    kjDay: "kJ/dia",
    table: {
      caption: "TDEE estimado para cada nível de atividade",
      level: "Nível de atividade",
      factor: "Multiplicador",
      kcal: "kcal/dia",
      kj: "kJ/dia",
    },
    notes: {
      estimate:
        "Uma estimativa para adultos saudáveis. O gasto energético real pode diferir dela em várias centenas de kcal por dia; não é uma prescrição de dieta.",
      rule: "Os valores de ±0,5 kg por semana usam a regra prática aproximada de que 1 kg de peso corporal equivale a cerca de 7 700 kcal (550 kcal por dia para 0,5 kg por semana). A variação real de peso não a segue com rigor.",
      belowBmr:
        "O valor para perder peso fica abaixo da sua TMB estimada. Não se recomenda comer abaixo da TMB sem o aconselhamento de um médico ou de um nutricionista.",
    },
  },
};

export default pt;
