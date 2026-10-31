import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const pt: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Calculadora de contagem de células (hemocitómetro)",
    shortTitle: "Contagem de células",
    summary:
      "Converta contagens no hemocitómetro em células por mL, com a viabilidade, o total de células vivas na amostra e o volume para semear um número-alvo de células.",
    metaTitle: "Contagem de células no hemocitómetro – Células por mL",
    metaDescription:
      "Calcule as células vivas e totais por mL a partir de contagens na câmara de Neubauer melhorada, com fator de diluição, viabilidade com azul de tripano e volume a semear.",
    keywords: ["hemocitómetro", "contagem de células", "células por ml", "câmara de neubauer", "azul de tripano", "viabilidade celular", "densidade celular"],
    intro: [
      "Um hemocitómetro é uma lâmina de vidro espessa com uma grelha de contagem gravada numa câmara de profundidade conhecida. Numa câmara de Neubauer melhorada, cada um dos nove quadrados grandes mede 1 mm × 1 mm e a câmara tem 0,1 mm de profundidade, pelo que o líquido sobre um quadrado grande é 0,1 µL, ou seja, um décimo de milésimo de mililitro.",
      "Assim, o número médio de células por quadrado grande, multiplicado por 10⁴ e pela diluição, dá o número de células por mL. Esta calculadora faz esse cálculo para as células vivas, junta as células mortas (coradas) para obter a contagem total e a viabilidade, e determina quantas células contém uma amostra e que volume retirar para semear um número definido de células.",
    ],
    howToUse: [
      "Conte as células vivas num certo número de quadrados grandes, por exemplo os quatro quadrados dos cantos, e introduza o total e o número de quadrados.",
      "Se corou as células, por exemplo com azul de tripano, introduza também as células mortas (coradas) contadas nos mesmos quadrados.",
      "Introduza o fator de diluição: 2 se misturou volumes iguais de células e de corante, 1 se as células não foram diluídas.",
      "Se quiser, introduza o volume da suspensão e o número de células que pretende semear.",
    ],
    formulas: [
      {
        title: "Concentração celular",
        expression: "células/mL = (células contadas ÷ quadrados grandes contados) × fator de diluição × 10⁴",
        explanation:
          "Um quadrado grande contém 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL, pelo que a contagem por quadrado vezes 10⁴ dá as células por mL.",
      },
      {
        title: "Viabilidade",
        expression: "viabilidade % = vivas ÷ (vivas + mortas) × 100",
        explanation: "A proporção das células contadas que excluem o corante.",
      },
      {
        title: "Total de células e volume a semear",
        expression: "total de células vivas = células vivas/mL × volume; volume a semear = células pretendidas ÷ células vivas/mL",
        explanation:
          "A concentração é extrapolada para toda a suspensão, ou reduzida ao volume que contém o número de células de que precisa.",
      },
    ],
    examples: [
      {
        title: "Contagem com azul de tripano nos quatro quadrados dos cantos",
        steps: [
          "Média por quadrado: 182 ÷ 4 = 45,5 células vivas.",
          "Células vivas/mL: 45,5 × 2 × 10⁴ = 910 000 = 9,1 × 10⁵.",
          "Viabilidade: 182 ÷ (182 + 14) = 92,9 %.",
          "Volume para 1 000 000 de células: 1 000 000 ÷ 910 000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Uma cultura densa diluída 1 para 10",
        steps: ["Média por quadrado: 95 ÷ 5 = 19 células.", "Células vivas/mL: 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Uma amostra escassa e não diluída",
        steps: [
          "Média por quadrado: 37 ÷ 4 = 9,25 células.",
          "Células vivas/mL: 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Com apenas 37 células contadas, só o erro de contagem é de cerca de ±16 % (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "A câmara é do tipo Neubauer melhorada, com quadrados grandes de 1 mm² e 0,1 mm de profundidade. Outras câmaras, como a de Fuchs–Rosenthal, ou contagens nos quadrados pequenos exigem outro fator.",
      "As células estão bem misturadas e a câmara foi enchida corretamente, sem transbordar nem bolhas.",
      "As células distribuem-se ao acaso, pelo que a contagem segue a estatística de Poisson: o erro relativo é de cerca de 1 ÷ √(células contadas). Contagens baixas são muito menos precisas, e as diferenças entre operadores acrescentam mais erro.",
      "A viabilidade por exclusão de corante é uma estimativa. As células que excluem o corante não estão necessariamente saudáveis, e o tempo de coloração afeta o resultado.",
    ],
    faqs: [
      {
        question: "Porque se multiplica por 10⁴?",
        answer:
          "Um quadrado grande tem 1 mm de lado e a câmara tem 0,1 mm de profundidade, pelo que contém 0,1 mm³. Isso equivale a 0,1 µL, ou 10⁻⁴ mL. Dividir as células por quadrado por 10⁻⁴ mL é o mesmo que multiplicá-las por 10⁴ por mL.",
      },
      {
        question: "Que fator de diluição devo usar com azul de tripano?",
        answer:
          "O volume total dividido pelo volume de suspensão celular. Volumes iguais de células e de azul de tripano (por exemplo, 10 µL + 10 µL) dão um fator de diluição de 2. Se o omitir, o resultado fica reduzido a metade.",
      },
      {
        question: "Quantas células devo contar?",
        answer:
          "Quanto mais células contar, menor é o erro de contagem, que é de cerca de 1 ÷ √(número contado). Contar algumas centenas de células em vários quadrados dá um erro de cerca de 5–6 %; contar 30 dá cerca de 18 %.",
      },
    ],
    sourcesUsedFor: [
      "Células por mL = contagem média por quadrado grande × fator de diluição × 10⁴, e a recomendação de voltar a contar com outra diluição fora de cerca de 20–50 células por quadrado.",
      "O erro de contagem ser aproximadamente a raiz quadrada do número de células contadas, e a sugestão de contar algumas centenas de células no total.",
    ],
  },
  text: {
    live: "Células vivas (não coradas) contadas",
    liveHelp: "O número total de células vivas em todos os quadrados grandes que contou.",
    dead: "Células mortas (coradas) contadas",
    deadHelp: "Opcional. Células que absorveram o corante, como o azul de tripano, nos mesmos quadrados. Usado para a contagem total e a viabilidade.",
    squares: "Quadrados grandes contados",
    squaresHelp:
      "Cada quadrado grande de uma câmara de Neubauer melhorada mede 1 mm × 1 mm × 0,1 mm de profundidade, ou seja, 0,1 µL. Normalmente contam-se os 4 quadrados dos cantos.",
    dilution: "Fator de diluição",
    dilutionHelp:
      "Volume total ÷ volume de suspensão celular. Para volumes iguais de células e de azul de tripano (1:1), introduza 2. Introduza 1 se não houver diluição.",
    volume: "Volume da amostra",
    volumeHelp: "Opcional. O volume da suspensão celular, para obter o número total de células vivas que contém.",
    target: "Células necessárias para semear",
    targetHelp: "Opcional. O número de células vivas que pretende semear, para obter o volume de suspensão a retirar.",
    errors: {
      noLiveForTarget: "Não foram contadas células vivas, pelo que não é possível calcular o volume necessário para semear.",
    },
    cellsPerMl: "{value} células/mL",
    cellsPerMlUnit: "células/mL",
    cellsUnit: "células",
    result: "Células vivas por mL",
    caption: "Células vivas ÷ quadrados contados × fator de diluição × 10⁴",
    totalPerMl: "Total de células por mL (vivas + mortas)",
    viability: "Viabilidade",
    averagePerSquare: "Média de células vivas por quadrado grande",
    totalLive: "Células vivas em {volume} mL",
    volumeNeeded: "Volume de suspensão para {target} células",
    volumeNeededUl: "O mesmo volume em µL",
    notes: {
      poisson:
        "Contou {count} células no total. Só a estatística de contagem dá um erro relativo de cerca de ±{cv} % (1 ÷ √contagem); contar mais células reduz esse erro. Contar algumas centenas de células no total é uma recomendação habitual.",
      density:
        "A média de {average} células vivas por quadrado está fora do intervalo de cerca de 20–50 células por quadrado muitas vezes recomendado para a contagem. Considere ajustar a diluição e contar de novo.",
      noCells: "Não foram contadas células vivas, pelo que a concentração de células vivas é zero. Verifique a amostra e a diluição.",
      exceedsSample: "O objetivo de sementeira exige mais células vivas do que as que existem no volume da amostra.",
      general:
        "Pressupõe uma câmara de Neubauer melhorada com 0,1 mm de profundidade e quadrados grandes de 1 mm². Outras câmaras, ou a contagem dos quadrados pequenos, exigem outro fator.",
    },
  },
};

export default pt;
