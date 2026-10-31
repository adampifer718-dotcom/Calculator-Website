import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const pt: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Calculadora de percentagem do custo de alimentos",
    shortTitle: "Percentagem do custo de alimentos",
    summary:
      "Calcule a percentagem do custo de alimentos de um prato ou de todo um período a partir do inventário e das vendas, e o preço de carta que atinge um custo de alimentos pretendido.",
    metaTitle: "Custo de alimentos (%) – Custo do prato e preço de carta",
    metaDescription:
      "Calcule a percentagem do custo de alimentos de um prato ou período pelo inventário, compras e vendas, com o lucro bruto e o preço de carta para o seu objetivo.",
    keywords: ["custo de alimentos", "percentagem do custo de alimentos", "food cost", "custo por prato", "preço de carta", "custo das mercadorias vendidas", "restauração"],
    intro: [
      "A percentagem do custo de alimentos é a parte do preço de carta, ou das vendas de comida de um restaurante, que é gasta nos ingredientes. É um dos números mais acompanhados na restauração, porque mostra rapidamente se os preços acompanham o que custa comprar a comida.",
      "Use o modo de prato para analisar um único item da carta a partir do custo por prato e do preço, e para encontrar o preço que dá um custo de alimentos pretendido. Use o modo de período para calcular o custo de alimentos de uma semana ou de um mês a partir das contagens de inventário, das compras e das vendas de comida.",
    ],
    howToUse: [
      "Escolha a moeda e se está a trabalhar num prato ou num período inteiro.",
      "Para um prato, introduza o custo por prato (o custo de todos os ingredientes de uma dose) e o preço de carta sem impostos.",
      "Para um período, introduza o valor da comida em stock no início e no fim, a comida comprada entretanto e as vendas de comida do mesmo período.",
      "Se quiser, introduza uma percentagem de custo de alimentos pretendida para obter um preço de carta sugerido, ou as vendas de que o custo de alimentos do período precisaria.",
    ],
    formulas: [
      {
        title: "Custo de alimentos (%) de um prato",
        expression: "custo de alimentos % = custo por prato ÷ preço de carta × 100",
        explanation: "O preço de carta é o preço antes de impostos sobre as vendas.",
      },
      {
        title: "Preço de carta para um objetivo",
        expression: "preço = custo por prato ÷ (objetivo % ÷ 100)",
        explanation: "Por exemplo, um prato de 4,20 US$ com um objetivo de 28 % dá 4,20 ÷ 0,28 = 15,00 US$.",
      },
      {
        title: "Custo de alimentos (%) de um período",
        expression: "CMV = inventário inicial + compras − inventário final;  custo de alimentos % = CMV ÷ vendas de comida × 100",
        explanation: "O CMV é o custo da comida consumida durante o período, quer tenha sido vendida, desperdiçada ou oferecida.",
      },
      {
        title: "Lucro bruto e margem",
        expression: "lucro bruto = preço − custo de alimentos;  margem % = lucro bruto ÷ preço × 100",
        explanation: "Esta margem só desconta o custo de alimentos; a mão de obra e os custos gerais ainda têm de ser pagos a partir dela.",
      },
    ],
    examples: [
      {
        title: "Um prato de 14 US$ com um custo por prato de 4,20 US$, objetivo de 28 %",
        steps: [
          "Custo de alimentos = 4,20 ÷ 14 × 100 = 30 %",
          "Lucro bruto = 14 − 4,20 = 9,80 US$, uma margem de 70 %",
          "Preço para 28 % = 4,20 ÷ 0,28 = 15,00 US$",
        ],
      },
      {
        title: "Um prato de massa de 12,50 € que custa 3,85 € a preparar",
        steps: ["Custo de alimentos = 3,85 ÷ 12,50 × 100 = 30,8 %", "Preço para um objetivo de 30 % = 3,85 ÷ 0,30 ≈ 12,83 €"],
      },
      {
        title: "Um mês a partir das contagens de inventário",
        steps: [
          "CMV = 9200 + 14 600 − 8100 = 15 700 US$",
          "Custo de alimentos = 15 700 ÷ 48 500 × 100 ≈ 32,37 %",
          "Lucro bruto na comida = 48 500 − 15 700 = 32 800 US$; a 30 %, o mesmo CMV exigiria cerca de 52 333 US$ de vendas",
        ],
      },
    ],
    assumptions: [
      "Todos os montantes estão numa só moeda e excluem impostos sobre as vendas. O inventário é valorizado ao custo.",
      "O modo de período pressupõe que as contagens de inventário são feitas exatamente no início e no fim do mesmo período a que se referem as vendas, e que as compras incluem apenas comida (não bebidas nem consumíveis, a menos que os queira incluir).",
      "Não existe uma única percentagem de custo de alimentos correta. Cita-se muitas vezes um intervalo de 28 a 35 por cento do preço de venda, mas o valor adequado depende do tipo de restaurante, dos seus preços e dos seus outros custos.",
    ],
    faqs: [
      {
        question: "Qual é uma boa percentagem de custo de alimentos?",
        answer:
          "Citam-se muitas vezes valores de cerca de 28 a 35 por cento, mas não existe um objetivo universal. Um restaurante com custos elevados de pessoal ou de renda pode precisar de um custo de alimentos mais baixo, enquanto um espaço com ingredientes de gama alta e menos pessoal pode funcionar com um valor mais alto.",
      },
      {
        question: "Porque é que o custo de alimentos do período difere do custo dos pratos?",
        answer:
          "O valor do período inclui tudo o que saiu do stock: desperdício, deterioração, refeições do pessoal, doses excessivas e furtos, além da comida que foi vendida. Compará-lo com o custo previsto dos pratos é uma boa forma de encontrar essas perdas.",
      },
      {
        question: "Devo incluir os impostos sobre as vendas no preço de carta?",
        answer:
          "Não. Use o preço sem impostos, porque os impostos sobre as vendas são cobrados para o Estado e não são receita do negócio.",
      },
    ],
    sourcesUsedFor: [
      "Custo de alimentos % = custo da dose ÷ preço de carta × 100, e o intervalo muitas vezes citado de 28 a 35 por cento do preço de venda.",
      "Custo de alimentos % do período = (inventário inicial + compras − inventário final) ÷ vendas de comida × 100.",
    ],
  },
  text: {
    mode: "Calcular para",
    modes: { dish: "Um prato", period: "Um período (inventário)" },
    plateCost: "Custo por prato",
    plateCostHelp: "O custo de todos os ingredientes de uma dose, incluindo a guarnição e os acompanhamentos.",
    menuPrice: "Preço de carta",
    menuPriceHelp: "O preço de venda do prato, sem impostos sobre as vendas.",
    beginInventory: "Inventário inicial",
    beginInventoryHelp: "O valor da comida em stock no início do período.",
    purchases: "Compras de comida",
    purchasesHelp: "O valor da comida comprada durante o período.",
    endInventory: "Inventário final",
    endInventoryHelp: "O valor da comida em stock no fim do período.",
    sales: "Vendas de comida",
    salesHelp: "Vendas líquidas de comida no mesmo período, sem impostos sobre as vendas.",
    target: "Custo de alimentos pretendido em % (opcional)",
    targetHelp: "A percentagem de custo de alimentos que pretende atingir, para obter um preço de carta sugerido ou as vendas que implica.",
    errors: {
      inventory: "O inventário final não pode ser superior ao inventário inicial mais as compras.",
    },
    foodCost: "Percentagem do custo de alimentos",
    captionDish: "Custo por prato {cost} ÷ preço de carta {price}.",
    captionPeriod: "Custo das mercadorias vendidas {cogs} ÷ vendas de comida {sales}.",
    grossProfitPlate: "Lucro bruto por prato",
    grossProfitPeriod: "Lucro bruto na comida no período",
    margin: "Margem de contribuição após o custo de alimentos",
    suggestedPrice: "Preço de carta sugerido para o objetivo",
    salesAtTarget: "Vendas de comida necessárias para o objetivo",
    cogs: "Custo das mercadorias vendidas (comida)",
    notes: {
      margin: "Esta margem só desconta o custo de alimentos. A mão de obra, a renda e os outros custos ainda têm de sair dela.",
      rounding:
        "O preço sugerido é o preço com o qual este custo por prato iguala a percentagem pretendida. Os preços de carta são muitas vezes arredondados para um valor conveniente.",
      above100: "O custo de alimentos é superior ao preço de venda, pelo que cada venda perde dinheiro só com os ingredientes.",
    },
  },
};

export default pt;
