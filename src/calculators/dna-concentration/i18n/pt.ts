import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const pt: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "Calculadora de concentração de ADN e ARN",
    shortTitle: "Concentração de ADN",
    summary:
      "Converta uma leitura de absorvância A260 numa concentração de ADN ou ARN em ng/µL, com o rendimento total e as razões A260/A280 e A260/A230.",
    metaTitle: "Calculadora de concentração de ADN e ARN – A260 em ng/µL",
    metaDescription:
      "Converta leituras A260 em concentração de ADN ou ARN em ng/µL com os fatores 50, 33 e 40 µg/mL, com diluição, rendimento total e razões de pureza.",
    keywords: ["concentração de ADN", "concentração de ARN", "A260", "quantificação de ácidos nucleicos", "razão 260/280", "razão 260/230", "espetrofotómetro", "ng/µL"],
    intro: [
      "Os ácidos nucleicos absorvem a luz ultravioleta com mais intensidade perto dos 260 nm. Dentro da gama linear de um espetrofotómetro, a absorvância A260 é proporcional à concentração, pelo que uma única leitura e um fator de conversão dão a quantidade de ADN ou ARN numa amostra.",
      "Os fatores padrão são 50 µg/mL por unidade de A260 para ADN de cadeia dupla, 33 para ADN de cadeia simples e 40 para ARN, com um percurso ótico de 1 cm. Esta calculadora aplica o fator, a diluição e o percurso ótico, e acrescenta o rendimento total e as razões de pureza A260/A280 e A260/A230.",
    ],
    howToUse: [
      "Escolha o tipo de amostra ou introduza o seu próprio fator de conversão (por exemplo, um calculado para um oligonucleótido curto).",
      "Introduza a leitura A260 corrigida pelo branco e o percurso ótico da cuvete ou do aparelho.",
      "Introduza o fator de diluição se diluiu a amostra antes de a medir.",
      "Se quiser, acrescente A280, A230 e o volume da solução-mãe para obter as razões de pureza e a quantidade total de ácido nucleico.",
    ],
    formulas: [
      {
        title: "Concentração",
        expression: "c (ng/µL) = A260 ÷ percurso ótico (cm) × fator × fator de diluição",
        explanation: "O fator é 50 para ADN de cadeia dupla, 33 para ADN de cadeia simples e 40 para ARN, em µg/mL por unidade de absorvância a 1 cm. 1 µg/mL equivale a 1 ng/µL.",
      },
      {
        title: "Rendimento total",
        expression: "quantidade (µg) = c (ng/µL) × volume (µL) ÷ 1 000",
        explanation: "A concentração da solução-mãe não diluída multiplicada pelo seu volume.",
      },
      {
        title: "Razões de pureza",
        expression: "A260/A280 e A260/A230",
        explanation: "Para A260/A280 citam-se habitualmente cerca de 1,8 (ADN) e 2,0 (ARN), e para A260/A230 2,0–2,2. São regras práticas, não limites rigorosos.",
      },
    ],
    examples: [
      {
        title: "ADN plasmídico diluído numa cuvete de 1 cm",
        steps: [
          "0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL",
          "Em 50 µL: 325 × 50 ÷ 1 000 = 16,25 µg",
          "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81",
        ],
      },
      {
        title: "Uma amostra de ARN diluída 1 para 20",
        steps: [
          "0,42 × 40 µg/mL × 20 = 336 ng/µL",
          "A260/A280 = 0,42 ÷ 0,21 = 2,00",
          "A260/A230 = 0,42 ÷ 0,20 = 2,10",
          "Em 30 µL: 336 × 30 ÷ 1 000 = 10,08 µg",
        ],
      },
      {
        title: "ADN de cadeia simples numa cuvete de 2 mm",
        steps: ["Normalizar para 1 cm: 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "A leitura A260 está corrigida pelo branco e dentro da gama linear do aparelho.",
      "Os fatores padrão são médias. A absorvância de um oligonucleótido curto depende da sua sequência de bases, pelo que um fator específico da sequência (introduzido como personalizado) é mais exato.",
      "A absorvância conta todos os ácidos nucleicos e nucleótidos livres. ARN contaminante numa amostra de ADN, ou ADN numa amostra de ARN, aumenta o resultado.",
      "As razões de pureza são valores de referência habitualmente citados, não limites de aprovação ou rejeição. Variam com o pH e a força iónica da solução e com o branco usado.",
    ],
    faqs: [
      {
        question: "Porque é que ng/µL é o mesmo que µg/mL?",
        answer: "Ambas multiplicam o numerador e o denominador da unidade por 1 000: um micrograma são 1 000 nanogramas e um mililitro são 1 000 microlitros. Assim, 325 µg/mL e 325 ng/µL descrevem a mesma concentração.",
      },
      {
        question: "O que significa uma razão A260/A280 baixa?",
        answer: "As proteínas e o fenol absorvem perto dos 280 nm, pelo que uma razão bem abaixo de cerca de 1,8 para ADN ou 2,0 para ARN indica muitas vezes esses contaminantes. A razão nada diz sobre a integridade do ácido nucleico.",
      },
      {
        question: "Preciso do percurso ótico?",
        answer: "Só se não for de 1 cm. Os fatores pressupõem um percurso de 1 cm. Muitos aparelhos de microvolume medem com um percurso mais curto, mas já indicam a absorvância normalizada para 1 cm; nesse caso, mantenha o valor predefinido de 1.",
      },
    ],
    sourcesUsedFor: [
      "Medição da concentração de ácidos nucleicos a partir da absorvância a 260 nm com fatores de conversão padrão.",
      "Os valores de pureza habitualmente citados de cerca de 1,8 (ADN) e 2,0 (ARN) para A260/A280, e de 2,0–2,2 para A260/A230.",
    ],
  },
  text: {
    type: "Tipo de amostra",
    types: {
      dsDNA: "ADN de cadeia dupla (50 µg/mL por A260)",
      ssDNA: "ADN de cadeia simples (33 µg/mL por A260)",
      rna: "ARN (40 µg/mL por A260)",
      custom: "Fator de conversão personalizado",
    },
    sampleNames: { dsDNA: "ADN", ssDNA: "ADN", rna: "ARN" },
    factor: "Fator de conversão",
    factorHelp:
      "µg/mL de ácido nucleico que dão uma absorvância de 1,0 a 260 nm num percurso de 1 cm, por exemplo um valor calculado para um oligonucleótido específico.",
    a260: "Absorvância a 260 nm (A260)",
    a260Help: "A leitura corrigida pelo branco da amostra medida (eventualmente diluída).",
    pathLength: "Percurso ótico",
    pathLengthHelp: "1 cm numa cuvete padrão. Muitos aparelhos de microvolume já indicam valores normalizados para 1 cm; nesse caso, mantenha 1.",
    dilution: "Fator de diluição",
    dilutionHelp: "Volume total ÷ volume de amostra. Para 5 µL de amostra num total de 50 µL, introduza 10. Introduza 1 para uma amostra não diluída.",
    a280: "Absorvância a 280 nm (A280)",
    a230: "Absorvância a 230 nm (A230)",
    optionalHelp: "Opcional. Serve para calcular uma razão de pureza.",
    volume: "Volume da amostra",
    volumeHelp: "Opcional. Volume da solução-mãe não diluída, para estimar a quantidade total que contém.",
    result: "Concentração de ácido nucleico",
    caption: "A260 ÷ percurso ótico × fator de conversão × fator de diluição",
    ugPerMl: "A mesma concentração em µg/mL",
    factorUsed: "Fator de conversão usado",
    a260Normalized: "A260 por 1 cm de percurso",
    totalYield: "Quantidade total em {volume} µL",
    ratio280: "Razão A260/A280",
    ratio230: "Razão A260/A230",
    notes: {
      ratio280: {
        near: "A razão A260/A280 de {ratio} está próxima do valor de cerca de {reference} habitualmente citado para {sample} puro.",
        below:
          "A razão A260/A280 de {ratio} está abaixo do valor de cerca de {reference} habitualmente citado para {sample} puro. Razões mais baixas podem indicar proteínas, fenol ou outras substâncias que absorvem perto dos 280 nm.",
        above:
          "A razão A260/A280 de {ratio} está acima do valor de cerca de {reference} habitualmente citado para {sample} puro. Valores ligeiramente mais altos são comuns; no ADN, a presença de ARN na amostra pode aumentar a razão.",
      },
      ratio280Generic: "Como referência, citam-se habitualmente valores de A260/A280 de cerca de 1,8 para ADN puro e de cerca de 2,0 para ARN puro.",
      ratio230: "A razão A260/A230 de {ratio} está dentro ou acima do intervalo de 2,0–2,2 habitualmente citado para ácido nucleico puro.",
      ratio230Low:
        "A razão A260/A230 de {ratio} está abaixo do intervalo de 2,0–2,2 habitualmente citado para ácido nucleico puro. Valores mais baixos podem indicar sais, fenol, detergentes ou outras substâncias que absorvem perto dos 230 nm.",
      range:
        "A absorvância por cm está fora do intervalo aproximado de 0,1–1,0, em que as leituras de um espetrofotómetro de cuvete padrão são muitas vezes menos fiáveis. Verifique a gama especificada do seu aparelho e dilua ou concentre a amostra, se necessário.",
      general:
        "A absorvância a 260 nm conta da mesma forma todos os ácidos nucleicos e nucleótidos livres, pelo que não distingue ADN de ARN. As razões de pureza dependem também do pH e do branco usado.",
    },
  },
};

export default pt;
