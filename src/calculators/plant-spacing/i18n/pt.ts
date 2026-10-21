import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const pt: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Calculadora de compasso de plantação",
    shortTitle: "Compasso de plantação",
    summary:
      "Conte quantas plantas cabem num canteiro retangular com um dado espaçamento, em linhas retas ou num padrão triangular desfasado.",
    metaTitle: "Calculadora de compasso de plantação – Plantas por canteiro",
    metaDescription:
      "Saiba quantas plantas cabem num canteiro para um dado espaçamento entre plantas e entre linhas, em quadrícula ou triangular, e quantas plantas por m² ou ft².",
    keywords: ["compasso de plantação", "espaçamento entre plantas", "quantas plantas", "plantas por metro quadrado", "plantação triangular", "canteiro de horta", "densidade de plantação"],
    intro: [
      "Os pacotes de sementes e as etiquetas das plantas indicam um espaçamento recomendado. Transformá-lo num número de plantas para um canteiro concreto é aritmética simples, mas é fácil esquecer que as plantas exteriores também precisam de espaço.",
      "Esta calculadora mantém cada planta a pelo menos meio espaçamento da borda do canteiro, para que as plantas da periferia tenham o mesmo espaço que as do meio. Funciona para linhas retas e para o padrão triangular (desfasado), em que cada linha é deslocada meio espaçamento.",
    ],
    howToUse: [
      "Escolha a unidade e introduza o comprimento e a largura do canteiro.",
      "Escolha linhas retas ou um padrão triangular.",
      "Introduza o espaçamento entre plantas e, no caso das linhas, o espaçamento entre linhas.",
      "Veja quantas plantas cabem, a densidade de plantação e a disposição das linhas.",
    ],
    formulas: [
      {
        title: "Linhas retas",
        expression: "plantas = ⌊L ÷ s⌋ × ⌊W ÷ r⌋",
        explanation:
          "L e W são o comprimento e a largura do canteiro, s o espaçamento na linha e r o espaçamento entre linhas. Com meio espaçamento livre em cada borda, uma linha de comprimento L leva ⌊L ÷ s⌋ plantas.",
      },
      {
        title: "Linhas triangulares",
        expression: "h = s × √3 ÷ 2\nlinhas = ⌊(W − s) ÷ h⌋ + 1 (0 se W < s)",
        explanation: "Cada planta fica à mesma distância s das vizinhas, pelo que as linhas ficam apenas a cerca de 0,866 s umas das outras.",
      },
      {
        title: "Plantas numa disposição triangular",
        expression: "linhas completas: ⌊L ÷ s⌋ plantas\nlinhas desfasadas: max(0, ⌊L ÷ s − 0,5⌋) plantas",
        explanation: "As linhas alternam, começando por uma linha completa; as linhas desfasadas são deslocadas meio espaçamento e podem levar menos uma planta.",
      },
      {
        title: "Densidade",
        expression: "densidade = plantas ÷ (L × W)",
        explanation: "Apresentada por metro quadrado nas unidades métricas e por pé quadrado nas unidades dos EUA.",
      },
    ],
    examples: [
      {
        title: "Pimentos num canteiro de 12 ft × 4 ft, a 18 in de distância em linhas a 2 ft",
        steps: ["Plantas por linha: ⌊12 ÷ 1,5⌋ = 8", "Linhas: ⌊4 ÷ 2⌋ = 2", "Total: 8 × 2 = 16 plantas, ou 16 ÷ 48 ft² ≈ 0,33 por ft²"],
      },
      {
        title: "Alfaces num canteiro de 300 cm × 120 cm, em triângulo a 40 cm",
        steps: [
          "Distância entre linhas: 40 × √3 ÷ 2 ≈ 34,64 cm",
          "Linhas: ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "Linhas completas: ⌊300 ÷ 40⌋ = 7; linha desfasada: ⌊7,5 − 0,5⌋ = 7",
          "Total: 2 × 7 + 1 × 7 = 21 plantas",
        ],
      },
      {
        title: "Cenouras numa caixa de 48 in × 24 in, a 3 in em cada sentido",
        steps: ["Plantas por linha: ⌊48 ÷ 3⌋ = 16", "Linhas: ⌊24 ÷ 3⌋ = 8", "Total: 16 × 8 = 128 plantas em 8 ft², ou seja, 16 por ft²"],
      },
    ],
    assumptions: [
      "O canteiro é um retângulo sem caminhos, bordaduras ou obstáculos no interior. Meça apenas a área plantada.",
      "As plantas ficam a pelo menos meio espaçamento de cada borda, pelo que canteiros ou caminhos vizinhos partilham a folga. Se o canteiro estiver encostado a uma parede, poderá caber mais alguma planta.",
      "As linhas seguem o comprimento do canteiro. As recomendações de espaçamento variam com a variedade, o solo e o clima; siga o pacote de sementes ou o aconselhamento técnico local.",
      "As contagens referem-se à disposição final das plantas. Semeie a mais e desbaste, ou compre algumas plantas de reserva, para compensar perdas.",
    ],
    faqs: [
      {
        question: "O espaçamento triangular permite mais plantas?",
        answer:
          "Em canteiros grandes, sim: com o mesmo espaçamento, cabem cerca de 15% mais plantas, porque as linhas ficam mais próximas. Em canteiros pequenos, as linhas desfasadas podem perder uma planta no fim, pelo que o ganho pode ser menor ou até negativo.",
      },
      {
        question: "Porque existe uma margem nas bordas?",
        answer:
          "Uma planta precisa de espaço em todos os lados. Manter meio espaçamento livre em cada borda dá às plantas da periferia o mesmo espaço que às outras, e dois canteiros lado a lado ficam a um espaçamento completo de distância.",
      },
      {
        question: "O que significa plantas por pé quadrado?",
        answer:
          "É o número de plantas dividido pela área do canteiro. É útil para comparar disposições ou para as tabelas da horta em quadrados (square-foot gardening), que indicam um número de plantas por pé quadrado.",
      },
    ],
    sourcesUsedFor: ["Contexto sobre o espaçamento equidistante (em bloco) de plantas e linhas em canteiros de horta."],
  },
  text: {
    unit: "Unidade",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Comprimento do canteiro",
    width: "Largura do canteiro",
    pattern: "Padrão de plantação",
    patterns: { grid: "Linhas (quadrícula)", triangular: "Triangular (desfasado)" },
    spacing: "Espaçamento entre plantas",
    spacingHelp: "A distância recomendada entre plantas, indicada no pacote de sementes ou na etiqueta da planta.",
    rowSpacing: "Espaçamento entre linhas",
    errors: { tooMany: "Este espaçamento é demasiado pequeno para o canteiro: daria mais de mil milhões de plantas." },
    plants: "Plantas que cabem",
    caption: "Cada planta fica a pelo menos meio espaçamento de todas as bordas do canteiro.",
    rows: "Linhas",
    perRow: "Plantas por linha",
    perRowOffset: "Plantas por linha (completa / desfasada)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Área do canteiro",
    densityMetric: "Plantas por metro quadrado",
    densityImperial: "Plantas por pé quadrado",
    notes: {
      tooSmall: "O canteiro é demasiado pequeno para este espaçamento: não cabe nem uma planta com meio espaçamento livre em cada borda.",
      triangular: "Num padrão triangular, cada linha é desfasada meio espaçamento e as linhas ficam a 0,866 (√3/2) espaçamentos umas das outras.",
    },
  },
};

export default pt;
