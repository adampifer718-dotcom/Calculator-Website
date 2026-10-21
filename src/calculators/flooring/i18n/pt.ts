import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const pt: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Calculadora de pavimento",
    shortTitle: "Pavimento",
    summary: "Calcule quantas caixas de pavimento laminado, vinílico em réguas ou de madeira deve comprar a partir das medidas da divisão, de uma margem de desperdício e da área por caixa, com custo opcional.",
    metaTitle: "Calculadora de pavimento – Caixas de laminado",
    metaDescription:
      "Calcule as caixas de pavimento a comprar para uma divisão retangular ou em L, com margem de desperdício, área por caixa e um preço opcional por área.",
    keywords: ["calcular pavimento laminado", "quanto pavimento preciso", "pavimento vinílico", "flutuante", "caixas de pavimento", "desperdício de pavimento", "soalho", "orçamento de pavimento"],
    intro: [
      "O pavimento é vendido em caixas, e cada caixa cobre uma área fixa. Para saber quantas comprar, precisa da área do chão, de uma margem para as peças perdidas nos cortes e da área indicada na caixa.",
      "Esta calculadora junta tudo isto para uma divisão retangular ou em forma de L composta por dois retângulos, arredonda para caixas inteiras e, se introduzir um preço, estima o custo. Se precisar apenas da área de uma divisão, a calculadora de pés quadrados dá-lha sem caixas nem desperdício.",
    ],
    howToUse: [
      "Escolha unidades dos EUA (pés) ou métricas (metros).",
      "Introduza o comprimento e a largura da divisão. Para uma divisão em forma de L, introduza primeiro o retângulo principal e o mais pequeno como segunda zona.",
      "Defina a margem de desperdício: cerca de 10 % para uma colocação reta e cerca de 15 % para padrões na diagonal ou em espinha.",
      "Introduza a área por caixa indicada na embalagem e, se quiser, o preço por pé quadrado ou por metro quadrado.",
    ],
    formulas: [
      { title: "Área do pavimento", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "O segundo retângulo é opcional; deixe-o em 0 para uma divisão retangular simples." },
      { title: "Área com desperdício", expression: "A_w = A × (1 + desperdício ÷ 100)", explanation: "O extra cobre os recortes junto às paredes, os erros de corte e as réguas danificadas." },
      { title: "Caixas", expression: "caixas = ⌈A_w ÷ área por caixa⌉", explanation: "Arredonda-se para cima porque o pavimento é vendido em caixas inteiras." },
      { title: "Custo", expression: "custo = caixas × área por caixa × preço por área", explanation: "Paga caixas inteiras, pelo que o custo usa a área das caixas que compra." },
    ],
    examples: [
      {
        title: "Quarto de 14 ft × 12 ft com caixas de 20 ft²",
        steps: ["Área = 14 × 12 = 168 ft²", "Com 10 % de desperdício: 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, pelo que deve comprar 10 caixas (200 ft²)"],
      },
      {
        title: "Sala em forma de L com colocação em espinha, em unidades métricas",
        steps: ["Área = 5 × 4 + 2 × 1,5 = 23 m²", "Com 15 % de desperdício: 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, pelo que deve comprar 13 caixas"],
      },
      {
        title: "Escritório em casa com preço por pé quadrado",
        steps: ["Área = 12 × 10 = 120 ft²; com 10 % de desperdício, 132 ft²", "132 ÷ 23,4 ≈ 5,64, pelo que deve comprar 6 caixas que cobrem 140,4 ft²", "Custo = 140,4 ft² × 3,49 US$ ≈ 490,00 US$"],
      },
    ],
    assumptions: [
      "A divisão é um retângulo ou dois retângulos que não se sobrepõem. Meça outras formas como vários retângulos e some-os.",
      "As margens de desperdício são regras práticas. O comprimento das réguas, a forma da divisão e o método do instalador alteram o que se perde, por isso consulte as indicações do fabricante do seu produto.",
      "Roupeiros embutidos, vãos de portas e zonas sob móveis fixos só são incluídos se os acrescentar às medidas.",
      "O custo não inclui a base isolante, os rodapés, os perfis de transição, a cola nem a mão de obra.",
    ],
    faqs: [
      {
        question: "Quanto pavimento a mais devo comprar?",
        answer: "Uma margem habitual é de cerca de 10 % para uma colocação reta numa divisão simples. As colocações na diagonal, em espinha e em espinha húngara, ou as divisões com muitos cantos, precisam normalmente de cerca de 15 % ou mais.",
      },
      {
        question: "Porque convém guardar caixas de reserva?",
        answer: "As réguas que sobram permitem substituir mais tarde peças danificadas por outras do mesmo lote de fabrico, com cor e acabamento iguais.",
      },
      {
        question: "Como meço uma divisão em forma de L?",
        answer: "Divida o chão em dois retângulos que não se sobreponham, meça o comprimento e a largura de cada um e introduza-os como a divisão e a segunda zona.",
      },
    ],
    sourcesUsedFor: ["O pé internacional exato (0,3048 m), usado para converter entre pés quadrados e metros quadrados."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft, ft²)", metric: "Métricas (m, m²)" },
    length: "Comprimento da divisão",
    width: "Largura da divisão",
    length2: "Comprimento da segunda zona",
    width2: "Largura da segunda zona",
    secondHelp: "Opcional. Para uma divisão em forma de L, divida-a em dois retângulos e introduza aqui o segundo. Caso contrário, deixe ambos os valores em 0.",
    waste: "Margem de desperdício",
    wasteHelp: "Extra para cortes, recortes e peças danificadas. Cerca de 10 % serve para uma colocação reta; use cerca de 15 % para padrões na diagonal ou em espinha.",
    coverage: "Área por caixa",
    coverageHelp: "A área coberta por uma caixa, indicada na caixa ou na página do produto.",
    price: "Preço por unidade de área",
    priceHelp: "Opcional. O preço do pavimento por pé quadrado ou por metro quadrado.",
    errors: {
      secondPair: "Introduza o comprimento e a largura da segunda zona, ou deixe ambos em 0.",
    },
    boxes: "Caixas necessárias",
    caption: "{area} mais {waste} de desperdício, a {coverage} por caixa.",
    floorArea: "Área do pavimento",
    areaWithWaste: "Área com desperdício",
    areaBought: "Área das caixas compradas",
    leftover: "Sobra após a instalação",
    otherUnit: "Área do pavimento noutras unidades",
    cost: "Custo do pavimento (caixas inteiras)",
    costWithWaste: "Custo da área com desperdício",
    notes: {
      squareFootage: "Precisa apenas da área de uma divisão? A calculadora de pés quadrados dá a área sem caixas nem desperdício.",
      extras: "Não estão incluídos a base isolante, os rodapés, os perfis de transição nem a cola.",
    },
  },
};

export default pt;
