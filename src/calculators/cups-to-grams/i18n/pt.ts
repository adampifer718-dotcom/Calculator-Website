import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const pt: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Conversor de chávenas para gramas",
    shortTitle: "Chávenas para gramas",
    summary: "Converta chávenas em gramas e gramas em chávenas para farinha, açúcar, manteiga e outros ingredientes de pastelaria, cada um com a sua própria densidade.",
    metaTitle: "Chávenas para gramas – Farinha, açúcar, manteiga e mais",
    metaDescription:
      "Converta chávenas em gramas e gramas em chávenas para 18 ingredientes de pastelaria com a densidade de cada um, com chávenas dos EUA, métricas e imperiais.",
    keywords: ["chávenas para gramas", "gramas para chávenas", "quantos gramas tem uma chávena", "chávena de farinha em gramas", "chávena de açúcar em gramas", "equivalências de pastelaria", "medidas de cozinha"],
    intro: [
      "Uma chávena mede volume, mas uma chávena de farinha pesa muito menos do que uma chávena de mel. Por isso, para converter entre chávenas e gramas é preciso a densidade de cada ingrediente.",
      "Escolha o ingrediente e a chávena que a sua receita usa. As receitas norte-americanas usam uma chávena de 236,6 mL, enquanto muitas receitas australianas, neozelandesas e canadianas usam uma chávena métrica de 250 mL.",
    ],
    howToUse: [
      "Escolha de chávenas para gramas ou de gramas para chávenas.",
      "Escolha o ingrediente.",
      "Escolha o tamanho de chávena usado na receita.",
      "Introduza a quantidade e consulte o resultado e a tabela por chávena.",
    ],
    formulas: [
      { title: "De chávenas para gramas", expression: "gramas = chávenas × volume da chávena (mL) × densidade (g/mL)", explanation: "Densidade = gramas numa chávena dos EUA ÷ 236,588 mL." },
      { title: "De gramas para chávenas", expression: "chávenas = gramas ÷ (volume da chávena (mL) × densidade (g/mL))", explanation: "A mesma relação, resolvida em ordem ao número de chávenas." },
    ],
    examples: [
      {
        title: "2 chávenas dos EUA de farinha de trigo comum",
        steps: ["Uma chávena dos EUA de farinha de trigo comum pesa 120 g", "2 × 120 g = 240 g (cerca de 8,47 oz)"],
      },
      {
        title: "500 g de açúcar branco em chávenas dos EUA",
        steps: ["Uma chávena dos EUA de açúcar branco pesa 198 g", "500 ÷ 198 ≈ 2,53 chávenas, um pouco mais de 2 chávenas e meia"],
      },
    ],
    assumptions: [
      "Os ingredientes secos são deitados na chávena com uma colher e rasados, sem mergulhar a chávena no pacote nem os peneirar.",
      "Os pesos são valores típicos; a marca da farinha, o tamanho do grão do açúcar, a humidade e a temperatura podem alterá-los em vários pontos percentuais.",
      "A manteiga é medida sólida e bem compactada; os líquidos, à temperatura ambiente.",
    ],
    faqs: [
      {
        question: "Porque é que uma chávena de farinha pesa menos do que uma de açúcar?",
        answer: "As partículas de farinha retêm mais ar e são menos densas, pelo que o mesmo volume contém menos massa. É por isso que cada ingrediente precisa da sua própria conversão.",
      },
      {
        question: "Que tamanho de chávena devo escolher?",
        answer: "Use a chávena dos EUA para receitas norte-americanas e a chávena métrica de 250 mL para a maioria das receitas australianas, neozelandesas e canadianas. As receitas britânicas antigas podem usar a chávena imperial, que é maior.",
      },
      { question: "É melhor pesar do que usar chávenas?", answer: "Sim, em pastelaria. Uma balança de cozinha evita as variações que dependem da forma como se enche a chávena." },
    ],
    sourcesUsedFor: [
      "Gramas por chávena de farinhas, açúcares, manteiga, óleo, mel, xarope de ácer, cacau, flocos de aveia, pepitas de chocolate e amido de milho.",
      "Peso de uma chávena de leite gordo e de arroz branco de grão longo cru.",
      "O tamanho da chávena dos EUA (8 onças líquidas norte-americanas) e da onça líquida imperial.",
    ],
  },
  text: {
    direction: "Converter",
    directions: { toGrams: "Chávenas para gramas", toCups: "Gramas para chávenas" },
    ingredient: "Ingrediente",
    ingredients: {
      flourAllPurpose: "Farinha de trigo comum",
      flourBread: "Farinha para pão",
      flourWholeWheat: "Farinha de trigo integral",
      flourAlmond: "Farinha de amêndoa",
      sugarGranulated: "Açúcar branco",
      sugarBrown: "Açúcar mascavado (calcado)",
      sugarPowdered: "Açúcar em pó",
      butter: "Manteiga",
      oil: "Óleo vegetal",
      honey: "Mel",
      mapleSyrup: "Xarope de ácer",
      cocoa: "Cacau em pó (sem açúcar)",
      oats: "Flocos de aveia",
      chocolateChips: "Pepitas de chocolate",
      cornstarch: "Amido de milho (maisena)",
      rice: "Arroz branco (cru)",
      milk: "Leite (gordo)",
      water: "Água",
    },
    cup: "Tamanho da chávena",
    cups: {
      us: "Chávena dos EUA (236,6 mL)",
      metric: "Chávena métrica (250 mL)",
      usLegal: "Chávena da rotulagem nutricional dos EUA (240 mL)",
      imperial: "Chávena imperial (284,1 mL)",
    },
    cupHelp: "As receitas norte-americanas usam a chávena dos EUA; as australianas, neozelandesas e canadianas costumam usar a chávena métrica de 250 mL.",
    amountCups: "Quantidade em chávenas",
    amountGrams: "Quantidade em gramas",
    cupsUnit: "chávenas",
    grams: "Peso",
    gramsCaption: "{amount} × {cup} de {ingredient}.",
    cupsResult: "Volume em chávenas",
    cupsCaption: "{amount} g de {ingredient}. Medida: {cup}.",
    ounces: "Em onças",
    milliliters: "Volume em mililitros",
    kitchen: "Medida de cozinha mais próxima",
    density: "Densidade",
    tableCaption: "Peso de uma chávena de cada ingrediente ({cup})",
    tableIngredient: "Ingrediente",
    tableGrams: "Gramas",
    notes: {
      method: "Os pesos pressupõem que os ingredientes são deitados na chávena com uma colher e rasados. Tirar a farinha diretamente do pacote com a chávena compacta-a e pode acrescentar 20–30 %.",
      sources: "As densidades são valores típicos da tabela de pesos de ingredientes da King Arthur Baking e do USDA FoodData Central; variam consoante a marca e as condições.",
    },
  },
};

export default pt;
