import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const pt: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Calculadora do teorema de Pitágoras",
    shortTitle: "Teorema de Pitágoras",
    summary: "Calcule o lado em falta de um triângulo retângulo com a² + b² = c².",
    metaTitle: "Calculadora do teorema de Pitágoras – Lado em falta",
    metaDescription:
      "Calcule a hipotenusa ou um cateto em falta de um triângulo retângulo com o teorema de Pitágoras a² + b² = c², bem como a área e o perímetro do triângulo.",
    keywords: ["teorema de pitágoras", "pitágoras", "hipotenusa", "triângulo retângulo", "a2 + b2 = c2", "cateto"],
    intro: [
      "Num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos outros dois lados: a² + b² = c².",
      "Introduza dois lados para obter o terceiro. A calculadora mostra também a área e o perímetro do triângulo.",
    ],
    howToUse: [
      "Escolha se pretende calcular a hipotenusa ou um cateto.",
      "Introduza os dois lados conhecidos na mesma unidade.",
      "Consulte o lado em falta, a área e o perímetro.",
    ],
    formulas: [
      { title: "Hipotenusa", expression: "c = √(a² + b²)", explanation: "A hipotenusa é o lado mais comprido, oposto ao ângulo reto." },
      { title: "Cateto em falta", expression: "a = √(c² − b²)", explanation: "A hipotenusa tem de ser mais comprida do que o cateto conhecido." },
    ],
    examples: [
      { title: "Catetos de 3 e 4", steps: ["c = √(3² + 4²) = √25", "= 5"] },
      { title: "Hipotenusa 13, cateto 5", steps: ["a = √(13² − 5²) = √144", "= 12"] },
    ],
    assumptions: [
      "O triângulo tem um ângulo reto.",
      "Todos os lados usam a mesma unidade; os resultados são apresentados com 6 casas decimais.",
    ],
    faqs: [
      {
        question: "O teorema de Pitágoras funciona para todos os triângulos?",
        answer: "Não, apenas para triângulos retângulos. Os outros triângulos exigem a lei dos cossenos.",
      },
      { question: "O que é um terno pitagórico?", answer: "Três números inteiros que satisfazem a² + b² = c², como 3, 4, 5 ou 5, 12, 13." },
      { question: "Qual dos lados é a hipotenusa?", answer: "O lado mais comprido, oposto ao ângulo reto." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Calcular",
    modes: { hypotenuse: "Hipotenusa (c) a partir dos dois catetos", leg: "Um cateto a partir da hipotenusa e do outro cateto" },
    a: "Cateto a",
    b: "Cateto b",
    c: "Hipotenusa c",
    leg: "Cateto conhecido",
    legTooLong: "Um cateto tem de ser mais curto do que a hipotenusa.",
    missingLeg: "Cateto em falta",
    hypotenuse: "Hipotenusa (c)",
    area: "Área do triângulo",
    perimeter: "Perímetro",
  },
};

export default pt;
