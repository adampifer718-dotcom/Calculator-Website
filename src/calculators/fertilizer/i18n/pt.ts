import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const pt: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Calculadora de fertilizantes (N-P-K)",
    shortTitle: "Fertilizantes (N-P-K)",
    summary:
      "Calcule quanto de um fertilizante N-P-K deve espalhar para fornecer uma dose de azoto, anidrido fosfórico ou óxido de potássio num relvado, horta ou campo.",
    metaTitle: "Fertilizantes (N-P-K) – Quantidade de produto por dose",
    metaDescription:
      "Calcule quanto fertilizante aplicar a partir da fórmula N-P-K, da dose de nutriente por área e da área, com o azoto, o fósforo e o potássio que fornece.",
    keywords: ["calculadora de fertilizantes", "calculadora NPK", "dose de adubo", "kg N por hectare", "P2O5 para P", "K2O para K", "quanto adubo aplicar"],
    intro: [
      "As embalagens de fertilizante indicam três números, como 10-10-10 ou 46-0-0. São as percentagens em peso de azoto (N), anidrido fosfórico (P₂O₅) e óxido de potássio (K₂O). Os boletins de análise de terra e os guias de cultivo costumam recomendar uma quantidade de nutriente por área, e não uma quantidade de produto, pelo que é preciso converter uma na outra.",
      "Introduza a fórmula do produto, escolha o nutriente a que se refere a recomendação e introduza a dose e a área. A calculadora dá a quantidade de produto a espalhar e as quantidades dos três nutrientes que fornece, incluindo o fósforo e o potássio elementares.",
    ],
    howToUse: [
      "Introduza os três números da fórmula do fertilizante indicados na embalagem, por exemplo 10, 20 e 10 para um produto 10-20-10.",
      "Escolha o nutriente a que se refere a dose recomendada: azoto, anidrido fosfórico (P₂O₅) ou óxido de potássio (K₂O).",
      "Introduza a dose recomendada e a sua unidade, por exemplo 1 lb por 1000 ft² ou 120 kg por hectare.",
      "Introduza a área e a sua unidade. A quantidade de produto é apresentada em libras para doses em libras e em quilogramas para doses métricas.",
    ],
    formulas: [
      {
        title: "Produto necessário",
        expression: "produto = dose × área ÷ (fórmula % ÷ 100)",
        explanation: "A fórmula % é o número da embalagem para o nutriente escolhido. A dose e a área são primeiro convertidas para uma unidade comum.",
      },
      {
        title: "Nutrientes fornecidos",
        expression: "N = produto × N%;  P₂O₅ = produto × P₂O₅%;  K₂O = produto × K₂O%",
        explanation: "Cada percentagem é o número correspondente da fórmula ÷ 100.",
      },
      {
        title: "Fósforo e potássio elementares",
        expression: "P = P₂O₅ × 0,4364;  K = K₂O × 0,8302",
        explanation:
          "Os fatores são as frações mássicas 2P ÷ P₂O₅ e 2K ÷ K₂O, calculadas a partir das massas atómicas padrão (P 30,973762, K 39,0983, O 15,999).",
      },
    ],
    examples: [
      {
        title: "10-10-10 num relvado de 5000 ft² a 1 lb de N por 1000 ft²",
        steps: [
          "Azoto necessário = 1 × 5000 ÷ 1000 = 5 lb",
          "Produto = 5 ÷ 0,10 = 50 lb de 10-10-10",
          "Fornece também 5 lb de P₂O₅ (≈ 2,18 lb de P) e 5 lb de K₂O (≈ 4,15 lb de K)",
        ],
      },
      {
        title: "Ureia (46-0-0) a 120 kg de N por hectare em 2,5 ha",
        steps: ["Azoto necessário = 120 × 2,5 = 300 kg", "Produto = 300 ÷ 0,46 ≈ 652,17 kg de ureia"],
      },
      {
        title: "15-30-15 a 6 g de anidrido fosfórico por m² num canteiro de 25 m²",
        steps: ["Anidrido fosfórico necessário = 6 × 25 = 150 g", "Produto = 150 ÷ 0,30 = 500 g = 0,5 kg", "Fornece também 75 g de N e 75 g de K₂O"],
      },
    ],
    assumptions: [
      "Isto é apenas aritmética. Baseie a dose numa análise de terra e nas recomendações locais, e siga o rótulo do produto e as regras locais sobre a utilização de fertilizantes, as épocas de aplicação e o escoamento.",
      "A fórmula é considerada a percentagem garantida em peso de N, P₂O₅ e K₂O, tal como impressa nos rótulos. Nos produtos líquidos cuja fórmula é indicada em peso, é preciso usar o peso e não o volume.",
      "As quantidades pressupõem uma distribuição uniforme por toda a área. A regulação do distribuidor e as sobreposições afetam o que é efetivamente aplicado.",
    ],
    faqs: [
      {
        question: "Porque se indicam o fósforo e o potássio como P₂O₅ e K₂O?",
        answer:
          "É uma convenção de rotulagem antiga. A fórmula exprime o fósforo como o óxido P₂O₅ e o potássio como K₂O, embora o produto não contenha esses óxidos enquanto tal. Multiplique por cerca de 0,436 e 0,830 para obter as quantidades elementares.",
      },
      {
        question: "E se a recomendação incluir vários nutrientes?",
        answer:
          "Calcule a quantidade de produto para o nutriente de que mais precisa e depois verifique os outros nutrientes que fornece. Se ficarem demasiado altos ou baixos, um produto com outra proporção, ou produtos separados para cada nutriente, poderá ser mais adequado.",
      },
      {
        question: "Como converto lb por acre em kg por hectare?",
        answer:
          "1 lb por acre equivale a cerca de 1,121 kg por hectare, porque uma libra são 0,45359237 kg e um acre são cerca de 0,4047 ha. Pode introduzir a dose em qualquer das unidades, e a calculadora faz a conversão.",
      },
    ],
    sourcesUsedFor: [
      "A leitura da fórmula como percentagem em peso de N, P₂O₅ e K₂O, e a divisão da dose de nutriente pela fração da fórmula.",
      "A fórmula do fertilizante como N-P₂O₅-K₂O garantido, e os fatores de conversão de P₂O₅ para P e de K₂O para K.",
      "As massas atómicas do fósforo, do potássio e do oxigénio usadas para calcular os fatores de óxido para elemento.",
    ],
  },
  text: {
    gradeN: "Fórmula: azoto (N)",
    gradeNHelp: "O primeiro número da embalagem, em percentagem em peso. Em 10-20-10 é 10.",
    gradeP: "Fórmula: anidrido fosfórico (P₂O₅)",
    gradePHelp: "O segundo número da embalagem. Os rótulos exprimem o fósforo como anidrido fosfórico (P₂O₅), e não como P elementar.",
    gradeK: "Fórmula: óxido de potássio (K₂O)",
    gradeKHelp: "O terceiro número da embalagem. Os rótulos exprimem o potássio como óxido de potássio (K₂O), e não como K elementar.",
    nutrient: "Nutriente a que se refere a dose",
    nutrients: { N: "Azoto (N)", P2O5: "Anidrido fosfórico (P₂O₅)", K2O: "Óxido de potássio (K₂O)" },
    rate: "Dose de nutriente pretendida",
    rateHelp: "A quantidade do nutriente escolhido a aplicar por unidade de área, normalmente indicada num boletim de análise de terra ou numa recomendação local.",
    rateUnit: "Unidade da dose",
    rateUnits: { lb1000ft2: "lb por 1000 ft²", lbAcre: "lb por acre", kgHa: "kg por hectare", gM2: "g por m²" },
    area: "Área a fertilizar",
    areaUnit: "Unidade de área",
    areaUnits: { ft2: "Pés quadrados (ft²)", m2: "Metros quadrados (m²)", acre: "Acres", ha: "Hectares (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "acres", ha: "ha" },
    errors: {
      zeroGrade: "Este produto não contém o nutriente escolhido. Escolha outro nutriente ou um produto com um número diferente de zero para ele.",
      gradeSum: "Os três números da fórmula somam mais de 100 %. Verifique o rótulo.",
    },
    product: "Fertilizante necessário",
    caption: "{rate} de {nutrient} ÷ {grade} num produto {label}, em {area}.",
    productOther: "Produto necessário noutras unidades",
    productRate: "Dose de produto",
    applied: {
      N: "Azoto (N) aplicado",
      P2O5: "Anidrido fosfórico (P₂O₅) aplicado",
      K2O: "Óxido de potássio (K₂O) aplicado",
      P: "Fósforo elementar (P) aplicado",
      K: "Potássio elementar (K) aplicado",
    },
    notes: {
      others:
        "A mesma quantidade de produto fornece também os outros nutrientes da sua fórmula, indicados abaixo. Se as doses que atingem não forem as de que precisa, use produtos separados para cada nutriente.",
      elemental: "As quantidades elementares usam P = P₂O₅ × {p} e K = K₂O × {k}, a partir das massas atómicas padrão.",
    },
  },
};

export default pt;
