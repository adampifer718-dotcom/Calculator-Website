import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const pt: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Calculadora de doses de receitas",
    shortTitle: "Doses de receitas",
    summary: "Aumente ou reduza as quantidades dos ingredientes de uma receita para qualquer número de doses.",
    metaTitle: "Calculadora de doses de receitas – Ajustar ingredientes",
    metaDescription:
      "Ajuste qualquer receita a um novo número de doses. Cole a lista de ingredientes e obtenha as quantidades ajustadas, apresentadas em frações práticas para a cozinha.",
    keywords: ["receita", "ajustar receita", "doses", "ingredientes", "cozinha", "pastelaria", "duplicar receita", "meia receita"],
    intro: [
      "Ajustar uma receita significa multiplicar todas as quantidades pelo mesmo fator: o novo número de doses dividido pelo número de doses original.",
      "Cole a lista de ingredientes e cada quantidade é recalculada e apresentada, sempre que possível, como uma fração habitual.",
    ],
    howToUse: [
      "Introduza quantas doses a receita rende.",
      "Introduza quantas doses pretende.",
      "Cole os ingredientes, um por linha, começando pela quantidade.",
      "Consulte o fator de escala e a lista ajustada.",
    ],
    formulas: [
      { title: "Fator de escala", expression: "fator = doses pretendidas ÷ doses originais", explanation: "Por exemplo, 6 ÷ 4 = 1,5." },
      {
        title: "Nova quantidade",
        expression: "nova quantidade = quantidade original × fator",
        explanation: "Aplicado a todos os ingredientes que começam por uma quantidade.",
      },
    ],
    examples: [
      { title: "Uma receita de 4 doses para 6", steps: ["Fator = 6 ÷ 4 = 1,5", "2 chávenas → 3 chávenas; 3/4 chávena → 1 1/8 chávenas"] },
      { title: "Uma receita de 8 doses para 2", steps: ["Fator = 2 ÷ 8 = 0,25", "4 ovos → 1 ovo"] },
    ],
    assumptions: [
      "As quantidades têm de estar no início da linha, como números inteiros, decimais, frações (1/2), números mistos (1 1/2) ou símbolos como ½.",
      "As unidades não são convertidas; as quantidades ajustadas mantêm a unidade original.",
      "Os tempos de cozedura, o tamanho das formas, os fermentos e os temperos nem sempre variam de forma linear; ajuste a gosto e verifique o ponto de cozedura.",
    ],
    faqs: [
      { question: "Como faço meia receita?", answer: "Use um fator de 0,5, definindo as doses pretendidas como metade das originais." },
      { question: "E os ovos?", answer: "Arredonde para o ovo inteiro mais próximo, ou bata um ovo e use parte dele a peso." },
      {
        question: "Os tempos de forno mudam?",
        answer: "Muitas vezes, sim. Formas maiores ou mais pequenas alteram o tempo de cozedura, por isso verifique mais cedo e ajuste.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "A receita rende (doses)",
    desired: "Quero servir (doses)",
    ingredients: "Ingredientes (um por linha)",
    ingredientsHelp: "Comece cada linha pela quantidade, por exemplo “1 1/2 chávenas de farinha”. As linhas sem quantidade são mantidas tal como estão.",
    defaultIngredients:
      "2 chávenas de farinha\n1 1/2 colher de chá de fermento em pó\n3/4 chávena de açúcar\n2 ovos\n1 chávena de leite\nSal q.b.",
    factor: "Fator de escala",
    caption: "Multiplique todas as quantidades por {factor}.",
    tableCaption: "Ingredientes ajustados",
    original_: "Original",
    scaled: "Ajustado",
    note: "Ingredientes inteiros, como os ovos, podem precisar de arredondamento. Os tempos de forno e o tamanho das formas não variam na mesma proporção.",
  },
};

export default pt;
