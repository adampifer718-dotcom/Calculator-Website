import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const pt: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Calculadora de placas de gesso cartonado",
    shortTitle: "Gesso cartonado",
    summary: "Estime quantas placas de gesso cartonado são necessárias para as paredes e, opcionalmente, o teto, descontando portas e janelas, com uma margem para desperdício.",
    metaTitle: "Calculadora de placas de gesso cartonado – Placas necessárias",
    metaDescription:
      "Calcule quantas placas de gesso cartonado de 4×8, 4×10 ou 4×12 ft (ou métricas) deve comprar para paredes e teto, descontando portas e janelas, com margem para desperdício.",
    keywords: ["gesso cartonado", "placas de gesso cartonado", "quantas placas de gesso", "pladur", "drywall", "massa para juntas", "placas para paredes e tetos", "orçamento de gesso cartonado"],
    intro: [
      "O gesso cartonado, também conhecido por drywall ou pela marca Pladur, é vendido em placas de tamanho fixo. Para saber quantas comprar, calcule a área das paredes (e do teto, se também o for revestir), retire as portas e as janelas, acrescente uma margem para os recortes e divida pela área de uma placa.",
      "Esta calculadora faz isso para os tamanhos de placa habituais nos EUA e métricos e arredonda para cima até placas inteiras. Dá também uma estimativa aproximada da massa para juntas pronta a usar necessária para acabar as juntas.",
    ],
    howToUse: [
      "Escolha unidades dos EUA (pés) ou unidades métricas (metros).",
      "Introduza o comprimento total das paredes a revestir e a sua altura. Para uma divisão inteira, o comprimento total é o perímetro.",
      "Escolha se inclui o teto; se o incluir, introduza o comprimento e a largura da divisão.",
      "Introduza o número de portas e janelas e ajuste os seus tamanhos típicos, se necessário.",
      "Escolha o tamanho da placa e uma margem para desperdício e consulte o número de placas a comprar.",
    ],
    formulas: [
      { title: "Área útil", expression: "A = L × H + comprimento do teto × largura do teto − aberturas", explanation: "L é o comprimento total das paredes e H a altura das paredes. As aberturas são as portas e as janelas multiplicadas pelas respetivas áreas." },
      { title: "Placas necessárias", expression: "placas = ⌈A × (1 + desperdício) ÷ área da placa⌉", explanation: "Arredondado para cima até uma placa inteira. Uma placa de 4 × 8 ft cobre 32 ft² e uma placa de 1,2 × 2,4 m cobre 2,88 m²." },
      { title: "Massa para juntas (aproximada)", expression: "massa ≈ A × 9 gal ÷ 1000 ft² (≈ 0,37 L/m²)", explanation: "Uma regra prática para massa pronta a usar; a ficha técnica do produto dá um valor mais preciso." },
    ],
    examples: [
      { title: "Paredes de uma divisão com 50 ft de parede e 8 ft de altura", steps: ["Área das paredes = 50 × 8 = 400 ft²", "Aberturas = 20 + 2 × 15 = 50 ft², pelo que a área útil é de 350 ft²", "Com 10% de desperdício: 385 ft² ÷ 32 ft² ≈ 12,03, pelo que deve comprar 13 placas"] },
      {
        title: "Divisão de 14 × 12 ft com paredes de 9 ft e teto, placas de 4 × 12",
        steps: [
          "Paredes = 52 × 9 = 468 ft²; teto = 14 × 12 = 168 ft²",
          "Aberturas = 2 × 20 + 2 × 15 = 70 ft², pelo que a área útil é de 566 ft²",
          "Com 12% de desperdício: 633,92 ft² ÷ 48 ft² ≈ 13,21, pelo que deve comprar 14 placas",
          "Massa para juntas ≈ 566 × 9 ÷ 1000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Divisão em unidades métricas com 15,6 m de parede, 2,6 m de altura e teto",
        steps: [
          "Paredes = 15,6 × 2,6 = 40,56 m²; teto = 4,5 × 3,3 = 14,85 m²",
          "Aberturas = 1,9 + 1,4 = 3,3 m², pelo que a área útil é de 52,11 m²",
          "Com 10% de desperdício: 57,32 m² ÷ 2,88 m² ≈ 19,9, pelo que deve comprar 20 placas",
        ],
      },
    ],
    assumptions: [
      "As paredes e os tetos são tratados como retângulos planos. Calcule à parte as empenas, os tetos inclinados e os sancas e acrescente-os ao comprimento das paredes ou como área de teto adicional.",
      "A contagem baseia-se na área. Uma disposição placa a placa pode exigir mais algumas placas, sobretudo quando a altura da parede não se ajusta ao comprimento da placa.",
      "Os tamanhos das portas e das janelas são valores típicos. Meça os seus para uma estimativa mais precisa.",
      "O valor da massa para juntas é aproximado, baseado numa regra prática de um fabricante para massa pronta a usar. Parafusos, fita e cantoneiras não são estimados.",
    ],
    faqs: [
      { question: "Que margem de desperdício devo prever para o gesso cartonado?", answer: "Cerca de 10% é habitual em divisões retangulares simples. Divisões com muitos cantos, aberturas, tetos inclinados ou troços de parede curtos produzem mais recortes, pelo que 15% ou mais é mais seguro nesses casos." },
      { question: "Devo usar placas mais compridas?", answer: "Placas mais compridas, como as de 4 × 12 ft, significam menos juntas para colocar fita e acabar, o que poupa tempo e massa. São mais pesadas e mais difíceis de transportar através de portas e escadas acima, pelo que se adequam a divisões amplas e a equipas de duas pessoas." },
      { question: "Devo descontar as janelas e as portas?", answer: "Sim, no cálculo da área. Muitos instaladores aplicam a placa por cima das aberturas pequenas e recortam-nas depois, pelo que a margem para desperdício cobre os recortes." },
    ],
    sourcesUsedFor: ["A regra prática de cerca de dois baldes de 4,5 galões de massa para juntas pronta a usar para acabar 1000 ft² de gesso cartonado."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft)", metric: "Métricas (m)" },
    length: "Comprimento total das paredes",
    lengthHelp: "Some as larguras de todas as paredes a revestir. Para uma divisão inteira, é o perímetro.",
    height: "Altura das paredes",
    ceiling: "Incluir o teto?",
    ceilingOptions: { no: "Não", yes: "Sim" },
    roomLength: "Comprimento da divisão (teto)",
    roomWidth: "Largura da divisão (teto)",
    doors: "Número de portas",
    doorArea: "Área de uma porta",
    windows: "Número de janelas",
    windowArea: "Área de uma janela",
    openingHelp: "Está preenchido um valor típico; meça o seu para uma estimativa mais precisa.",
    sheet: "Tamanho da placa",
    waste: "Margem para desperdício",
    wasteHelp: "Margem extra para recortes, erros e placas danificadas. Cerca de 10% serve para divisões retangulares simples; use mais se houver muitos cantos, aberturas ou tetos inclinados.",
    errors: { openings: "As portas e as janelas somam, pelo menos, a área total das paredes. Verifique as quantidades, os tamanhos das aberturas e as dimensões das paredes." },
    sheets: "Placas de gesso cartonado necessárias",
    caption: "{area} de placa mais {waste} de desperdício, em placas de {sheet} ({sheetArea} cada).",
    wallArea: "Área das paredes",
    ceilingArea: "Área do teto",
    openingArea: "Portas e janelas",
    netArea: "Área útil a revestir",
    areaWithWaste: "Área incluindo o desperdício",
    sheetArea: "Área de uma placa",
    compound: "Massa para juntas, aproximada (pronta a usar)",
    notes: {
      compound: "O valor da massa para juntas usa uma regra prática de cerca de 9 galões americanos (dois baldes de 4,5 galões) de massa pronta a usar por cada 1000 ft² de placa, o que corresponde a cerca de 0,37 L por m². A quantidade varia consoante o produto e o nível de acabamento, por isso consulte a ficha técnica do produto.",
      layout: "Isto é uma estimativa por área. Planear a disposição placa a placa, sobretudo em paredes altas e à volta das aberturas, pode alterar a contagem.",
      extras: "Não estão incluídos parafusos, fita nem cantoneiras.",
    },
  },
};

export default pt;
