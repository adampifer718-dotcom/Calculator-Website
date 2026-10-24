import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const pt: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Calculadora de proporção de café e água",
    shortTitle: "Proporção de café",
    summary: "Calcule quanto café moído usar para uma dada quantidade de água, ou quanta água para o seu café, em filtro, cafeteira de êmbolo, espresso e cold brew.",
    metaTitle: "Calculadora de proporção de café e água – Gramas por chávena",
    metaDescription:
      "Saiba quantos gramas de café usar para a sua água, ou quanta água para o seu café, com proporções editáveis para filtro, êmbolo, espresso e cold brew.",
    keywords: ["proporção café água", "quanto café por chávena", "gramas de café", "café de filtro", "cafeteira de êmbolo", "cold brew", "receita de espresso", "rácio de café"],
    intro: [
      "A proporção entre café e água é a forma mais simples de o café saber sempre igual. Escreve-se 1 : n, o que significa n gramas de água por cada grama de café moído: a 1:16, 20 g de café correspondem a 320 g de água. Um n menor dá um café mais forte.",
      "Escolha um método de preparação para partir de uma proporção típica, ajuste-a ao seu gosto e a calculadora determina o café para a sua água ou a água para o seu café, em gramas, mililitros, onças fluidas ou chávenas.",
    ],
    howToUse: [
      "Escolha o método de preparação. A proporção típica é preenchida automaticamente; altere-a se preferir o café mais forte ou mais suave.",
      "Escolha se quer calcular o café a partir da água ou a água a partir do café.",
      "Introduza a quantidade e escolha a unidade. O resultado aparece na unidade escolhida para o outro ingrediente.",
      "Para resultados mais consistentes, pese o café numa balança de cozinha.",
    ],
    formulas: [
      { title: "Café a partir da água", expression: "café (g) = água (g) ÷ n", explanation: "Para uma proporção de 1 : n. Considera-se que a água tem 1 g por mL." },
      { title: "Água a partir do café", expression: "água (g) = café (g) × n", explanation: "1 chávena americana = 8 fl oz americanas = 236,5882365 mL, e 1 oz = 28,349523125 g." },
      { title: "Intensidade em gramas por litro", expression: "g/L = café (g) ÷ água (mL) × 1000", explanation: "Uma proporção de 1:18 corresponde a cerca de 55,6 g de café por litro de água." },
    ],
    examples: [
      { title: "Café de filtro manual com 500 mL de água a 1:16", steps: ["500 mL de água pesam 500 g", "Café = 500 ÷ 16 = 31,25 g"] },
      { title: "Cafeteira de êmbolo com 30 g de café a 1:12, água em chávenas", steps: ["Água = 30 × 12 = 360 g = 360 mL", "Em chávenas americanas: 360 ÷ 236,588 ≈ 1,52 chávenas"] },
      { title: "Concentrado de cold brew com 4 chávenas de água a 1:8", steps: ["4 chávenas americanas = 4 × 236,588 ≈ 946,35 mL de água", "Café = 946,35 ÷ 8 ≈ 118,29 g, cerca de 4,17 oz"] },
    ],
    assumptions: [
      "As proporções propostas para cada método são pontos de partida típicos, não regras. O gosto, o grau de torra, a moagem e o tempo de extração alteram a proporção ideal.",
      "Considera-se que a água tem 1 g por mL. O café moído retém alguma água, pelo que obtém um pouco menos de café preparado do que a água usada.",
      "No espresso, a proporção é a do café seco em relação ao peso da bebida na chávena, como os baristas costumam descrevê-la.",
      "As quantidades de café são em peso. As colheres e os doseadores levam quantidades diferentes consoante a moagem e a torra, pelo que não são convertidos.",
    ],
    faqs: [
      { question: "Qual é a melhor proporção de café e água?", answer: "Não existe uma única proporção ideal. Para café de filtro, muitas pessoas começam entre 1:15 e 1:17 e ajustam; a muito citada orientação Golden Cup da Specialty Coffee Association corresponde a cerca de 1:18. Se o café souber fraco, reduza n; se souber demasiado forte, aumente-o." },
      { question: "Quanto café preciso para uma chávena?", answer: "Para uma chávena americana (cerca de 237 mL) a 1:16, use cerca de 14,8 g de café. Muitas canecas levam mais do que uma chávena americana, por isso meça o volume da sua caneca para obter uma resposta melhor." },
      { question: "Porquê pesar o café em vez de usar colheres?", answer: "Uma colher de café pode pesar quantidades bastante diferentes consoante o grão, a torra e a finura da moagem. Pesar o café e a água torna muito mais fácil repetir uma chávena de que gostou." },
    ],
    sourcesUsedFor: ["A muito citada orientação Golden Cup de cerca de 55 g de café por litro de água (aproximadamente 1:18), indicada apenas para comparação."],
  },
  text: {
    method: "Método de preparação",
    methods: {
      drip: "Filtro (máquina ou manual)",
      frenchPress: "Cafeteira de êmbolo",
      espresso: "Espresso",
      coldBrew: "Concentrado de cold brew",
      custom: "Proporção personalizada",
    },
    ratio: "Proporção 1 : n (água por grama de café)",
    ratioHelp: {
      drip: "As proporções típicas para café de filtro vão de cerca de 1:15 (mais forte) a 1:17 (mais suave). Ajuste a gosto.",
      frenchPress: "Uma proporção típica para cafeteira de êmbolo é de cerca de 1:12. Ajuste a gosto.",
      espresso: "No espresso, a proporção costuma ser a do café em relação ao peso da bebida na chávena; cerca de 1:2 é um ponto de partida típico.",
      coldBrew: "Cerca de 1:8 dá um concentrado que normalmente se dilui antes de beber.",
      custom: "Gramas de água por cada grama de café moído.",
    },
    solve: "Calcular",
    solveOptions: { coffee: "Café a partir da água", water: "Água a partir do café" },
    water: "Quantidade de água",
    waterUnit: "Unidade da água",
    waterUnits: { mL: "Mililitros (mL)", g: "Gramas (g)", floz: "Onças fluidas americanas (fl oz)", cup: "Chávenas americanas" },
    coffee: "Quantidade de café moído",
    coffeeUnit: "Unidade do café",
    coffeeUnits: { g: "Gramas (g)", oz: "Onças (oz)" },
    coffeeNeeded: "Café moído necessário",
    waterNeeded: "Água necessária",
    caption: "Com uma proporção de {ratio}: {coffee} de café para {water} de água.",
    ratioText: "1:{n}",
    ratioOut: "Proporção de café e água",
    coffeeG: "Café em gramas",
    coffeeOz: "Café em onças",
    waterMl: "Água em mL (= gramas)",
    waterFloz: "Água em onças fluidas americanas",
    waterCups: "Água em chávenas americanas",
    strength: "Café por litro de água",
    cupsUnit: "chávenas",
    notes: {
      golden: "Para comparação, a muito citada orientação Golden Cup da Specialty Coffee Association é de cerca de 55 g de café por litro de água, aproximadamente 1:18. Encare qualquer proporção como ponto de partida e ajuste a gosto.",
      espresso: "No espresso, a proporção costuma comparar o café seco com o peso da bebida pronta, não com a água que passa por ele, pelo que a quantidade indicada é o peso de bebida pretendido.",
      coldBrew: "O concentrado de cold brew é forte; normalmente dilui-se com água ou leite, a gosto, antes de beber.",
      water: "Considera-se que a água tem 1 g por mL. Alguma água fica retida no café moído, pelo que o café preparado é um pouco menos do que a água usada.",
    },
  },
};

export default pt;
