import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const pt: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Calculadora de consumo de água no duche",
    shortTitle: "Água no duche",
    summary:
      "Estime quanta água gastam os duches da sua casa num ano, a energia e o custo de a aquecer e quanto pouparia um chuveiro de caudal reduzido.",
    metaTitle: "Consumo de água no duche – Litros, galões e kWh",
    metaDescription:
      "Estime a água gasta por ano nos duches pelo caudal, duração e frequência, com a energia e o custo de a aquecer e a poupança de um chuveiro de caudal reduzido.",
    keywords: ["consumo de água no duche", "litros por duche", "caudal do chuveiro", "chuveiro de caudal reduzido", "poupança de água", "custo de aquecer água", "pegada hídrica"],
    intro: [
      "Os duches são um dos maiores consumos de água na maioria das casas e, como a água é aquecida, também têm um peso visível na fatura de energia. O consumo depende de poucos fatores: o caudal do chuveiro, a duração de cada duche e a frequência com que as pessoas tomam duche.",
      "Introduza esses valores para estimar a água gasta por duche, por semana e por ano. Junte as temperaturas da água e o preço da energia para estimar a energia e o custo de a aquecer, e introduza um segundo caudal para ver quanto pouparia com outro chuveiro.",
    ],
    howToUse: [
      "Introduza o caudal do seu chuveiro em galões americanos ou litros por minuto. Se não o souber, cronometre quanto tempo demora a encher um balde de capacidade conhecida e divida.",
      "Introduza a duração de um duche típico, os duches por pessoa por semana e o número de pessoas.",
      "Se quiser, introduza o caudal de um chuveiro que esteja a considerar, para ver a poupança.",
      "Para estimar a energia, mantenha a opção de energia ativada e introduza as temperaturas de entrada e do duche, o rendimento do aquecedor e, se quiser, o preço por kWh.",
    ],
    formulas: [
      {
        title: "Água por ano",
        expression: "V(ano) = caudal × minutos × duches por semana × pessoas × 52,1775",
        explanation:
          "52,1775 é o número de semanas de um ano gregoriano médio (365,2425 ÷ 7). O resultado vem na unidade do caudal: galões ou litros.",
      },
      {
        title: "Energia de aquecimento",
        expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(duche) − T(entrada)) ÷ 3600 ÷ rendimento",
        explanation:
          "4,186 kJ aquecem 1 kg de água em 1 °C, e 3600 kJ são 1 kWh. O rendimento é introduzido em percentagem e usado como fração.",
      },
      {
        title: "Poupança",
        expression: "poupado = V(atual) − V(novo)",
        explanation: "A energia e o custo poupados obtêm-se a partir da água poupada com a mesma fórmula.",
      },
    ],
    examples: [
      {
        title: "Uma pessoa, duches diários de 8 minutos a 2,5 gpm",
        steps: ["Por duche = 2,5 × 8 = 20 gal", "Por semana = 20 × 7 = 140 gal", "Por ano = 140 × 52,1775 = 7304,85 gal, cerca de 27 652 L"],
      },
      {
        title: "Três pessoas, 9 L/min, mudando para um chuveiro de 6 L/min",
        steps: [
          "Por semana = 9 × 6 × 5 × 3 = 810 L, pelo que por ano = 810 × 52,1775 ≈ 42 263,78 L",
          "Energia de aquecimento = 42 263,78 × 4,186 × (38 − 15) ÷ 3600 ÷ 0,90 ≈ 1256 kWh por ano",
          "Com 6 L/min: 540 × 52,1775 ≈ 28 175,85 L, poupando cerca de 14 088 L e 419 kWh por ano",
        ],
      },
      {
        title: "Duas pessoas, duches de 10 minutos, aquecedor em °F e preço da energia",
        steps: [
          "Por ano = 2,5 × 10 × 7 × 2 × 52,1775 = 18 262,125 gal ≈ 69 130 L",
          "Aumento de temperatura = (100 − 55) × 5/9 = 25 K, pelo que a energia ≈ 69 130 × 4,186 × 25 ÷ 3600 ÷ 0,90 ≈ 2233 kWh, com um custo de cerca de 357 US$ por ano",
          "Um chuveiro de 1,8 gpm poupa cerca de 5113 gal e cerca de 100 US$ por ano",
        ],
      },
    ],
    assumptions: [
      "O caudal é considerado constante durante todo o duche. O caudal real depende da pressão da água e de quanto se abre a torneira, pelo que um caudal medido é melhor do que o nominal.",
      "Um ano tem 52,1775 semanas (365,2425 ÷ 7). As semanas fora de casa e as mudanças sazonais de hábitos não são modeladas.",
      "A estimativa de energia aquece toda a água do duche desde a temperatura de entrada até à temperatura do duche. Ignora o calor perdido nas canalizações e no depósito, pelo que o consumo real costuma ser um pouco maior.",
      "As tarifas de água e de saneamento não estão incluídas no custo; só a energia de aquecimento tem preço.",
    ],
    faqs: [
      {
        question: "Quanta água gasta um chuveiro?",
        answer:
          "Nos Estados Unidos, os chuveiros novos podem gastar no máximo 2,5 galões (cerca de 9,5 litros) por minuto. Os chuveiros com o rótulo WaterSense da EPA gastam 2,0 galões por minuto ou menos. Os chuveiros mais antigos podem gastar mais, pelo que medir o seu é a melhor forma de saber.",
      },
      {
        question: "Como posso medir o caudal do meu chuveiro?",
        answer:
          "Segure um balde de capacidade conhecida debaixo do chuveiro na sua posição habitual e cronometre quanto tempo demora a encher. Divida o volume pelo tempo em minutos; por exemplo, 10 litros em 75 segundos dão 10 ÷ 1,25 = 8 L/min.",
      },
      {
        question: "O que poupa mais: um duche mais curto ou um chuveiro de caudal reduzido?",
        answer:
          "Ambos reduzem o consumo de água proporcionalmente. Passar de 10 para 8 minutos poupa 20 %, o mesmo que passar de 2,5 para 2,0 gpm. A calculadora mostra o efeito de cada um, para que possa experimentar os dois.",
      },
    ],
    sourcesUsedFor: [
      "O máximo WaterSense de 2,0 galões por minuto e o caudal máximo federal de 2,5 gpm para chuveiros.",
      "O consumo máximo federal de água de 2,5 galões por minuto para chuveiros.",
      "O calor específico da água, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Caudal do chuveiro",
    flowHelp:
      "2,5 galões americanos por minuto (cerca de 9,5 L/min) é o máximo federal dos EUA para chuveiros novos; os chuveiros com rótulo WaterSense gastam 2,0 gpm (cerca de 7,6 L/min) ou menos. Pode medir o seu cronometrando quanto tempo demora a encher um balde.",
    flowUnit: "Unidade de caudal",
    flowUnits: { gpm: "Galões americanos por minuto (gpm)", lpm: "Litros por minuto (L/min)" },
    minutes: "Minutos por duche",
    showersPerWeek: "Duches por semana, por pessoa",
    people: "Número de pessoas",
    newFlow: "Novo caudal a comparar (opcional)",
    newFlowHelp: "O caudal de um chuveiro que esteja a considerar, na mesma unidade indicada acima.",
    energy: "Estimar a energia de aquecimento da água",
    energyOptions: { yes: "Sim", no: "Não" },
    tempUnit: "Unidade de temperatura",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Temperatura de entrada da água fria",
    inletTempHelp: "A temperatura da água que entra no aquecedor. 15 °C (59 °F) é um exemplo típico; varia com o clima e a estação do ano.",
    showerTemp: "Temperatura do duche",
    showerTempHelp: "A temperatura da água misturada à saída do chuveiro. 38 °C (cerca de 100 °F) é um duche confortável típico.",
    efficiency: "Rendimento do aquecedor de água",
    efficiencyHelp:
      "A parte da energia consumida que acaba como calor na água. 90 % é um exemplo; os esquentadores a gás mais antigos costumam ter menos e as bombas de calor podem ficar bem acima de 100 %.",
    price: "Preço da energia por kWh (opcional)",
    priceHelp: "O seu preço por kWh de eletricidade, ou de gás convertido em kWh, para o custo anual.",
    errors: {
      showerAboveInlet: "A temperatura do duche tem de ser superior à temperatura de entrada.",
      inletRange: "Introduza uma temperatura de entrada entre 0 °C (32 °F) e 40 °C (104 °F).",
      showerRange: "Introduza uma temperatura do duche de no máximo 60 °C (140 °F).",
    },
    annual: "Água dos duches por ano",
    caption: "{flow} × {minutes} min × {showers} duches por semana × {people} × {weeks} semanas por ano.",
    annualOther: "Água dos duches por ano noutras unidades",
    perWeek: "Água dos duches por semana",
    perShower: "Água por duche",
    energyYear: "Energia de aquecimento da água por ano",
    costYear: "Custo de aquecimento da água por ano",
    newAnnual: "Água por ano com o novo caudal",
    waterSaved: "Água poupada por ano",
    energySaved: "Energia poupada por ano",
    costSaved: "Custo poupado por ano",
    peopleCount: {
      zero: "{n} pessoas",
      one: "{n} pessoa",
      two: "{n} pessoas",
      few: "{n} pessoas",
      many: "{n} pessoas",
      other: "{n} pessoas",
    },
    notes: {
      weeks: "Considera-se que um ano tem 52,1775 semanas (365,2425 dias ÷ 7, o ano gregoriano médio).",
      energy:
        "Energia de aquecimento = litros × 1 kg/L × 4,186 kJ/(kg·K) × aumento de temperatura ÷ 3600 ÷ rendimento. O calor perdido nas canalizações e no depósito não está incluído.",
      moreWater: "O novo caudal é superior ao atual, pelo que a poupança é negativa: gastaria mais água.",
    },
  },
};

export default pt;
