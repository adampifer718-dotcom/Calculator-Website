import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const pt: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Calculadora de erro percentual",
    shortTitle: "Erro percentual",
    summary: "Compare um valor medido com o valor verdadeiro sob a forma de erro percentual, com o erro absoluto e o erro relativo com sinal.",
    metaTitle: "Calculadora de erro percentual – Valor medido vs. verdadeiro",
    metaDescription:
      "Calcule o erro percentual entre um valor medido e um valor verdadeiro, com o erro absoluto, o erro relativo com sinal e se sobrestimou ou subestimou.",
    keywords: ["erro percentual", "percentagem de erro", "erro relativo", "erro absoluto", "valor experimental", "valor de referência", "relatório de laboratório", "exatidão"],
    intro: [
      "O erro percentual indica a que distância uma medição ficou do valor que deveria ter dado, em proporção desse valor verdadeiro. É uma forma habitual de indicar a exatidão em trabalhos de laboratório.",
      "Introduza o que mediu e o valor aceite. Além do erro percentual, a calculadora mostra a dimensão bruta do erro e se o seu resultado ficou acima ou abaixo do esperado.",
    ],
    howToUse: [
      "Introduza o valor medido (experimental).",
      "Introduza o valor verdadeiro (aceite ou teórico) na mesma unidade. Não pode ser 0.",
      "Consulte o erro percentual. Uma percentagem menor significa uma medição mais exata.",
      "Use o erro relativo com sinal ou a linha de sentido para ver se sobrestimou ou subestimou.",
    ],
    formulas: [
      {
        title: "Erro percentual",
        expression: "erro percentual = |medido − verdadeiro| ÷ |verdadeiro| × 100%",
        explanation: "A dimensão do erro em percentagem do valor verdadeiro. É sempre nula ou positiva.",
      },
      { title: "Erro absoluto", expression: "erro absoluto = |medido − verdadeiro|", explanation: "O erro na unidade de medida original." },
      {
        title: "Erro relativo com sinal",
        expression: "erro relativo = (medido − verdadeiro) ÷ |verdadeiro| × 100%",
        explanation: "Positivo quando a medição é demasiado alta, negativo quando é demasiado baixa.",
      },
    ],
    examples: [
      {
        title: "Medir a aceleração da gravidade com um pêndulo",
        steps: [
          "Erro absoluto = |9,62 − 9,81| = 0,19 m/s²",
          "Erro percentual = 0,19 ÷ 9,81 × 100% ≈ 1,9368%",
          "O erro relativo com sinal é de cerca de −1,9368%, pelo que a medição ficou abaixo.",
        ],
      },
      {
        title: "Cronometrar a velocidade do som",
        steps: ["Erro absoluto = |342,5 − 343| = 0,5 m/s", "Erro percentual = 0,5 ÷ 343 × 100% ≈ 0,1458%"],
      },
      {
        title: "Um valor de referência negativo: o potencial do elétrodo de zinco",
        steps: [
          "Erro absoluto = |−0,79 − (−0,76)| = 0,03 V",
          "Erro percentual = 0,03 ÷ |−0,76| × 100% ≈ 3,9474%",
          "A medição está abaixo do valor aceite, pelo que o erro relativo com sinal é de cerca de −3,9474%.",
        ],
      },
    ],
    assumptions: [
      "Ambos os valores usam a mesma unidade. O erro percentual não tem unidade, mas o erro absoluto vem na unidade que introduziu.",
      "O valor verdadeiro entra na divisão em valor absoluto, pelo que o erro percentual se mantém positivo mesmo quando o valor de referência é negativo.",
      "O erro percentual não tem significado para grandezas em escalas de intervalo cujo zero é arbitrário, como temperaturas em °C ou °F, a menos que tenha uma razão para comparar com esse zero. O kelvin evita o problema.",
    ],
    faqs: [
      {
        question: "O erro percentual pode ser negativo?",
        answer:
          "Com a definição habitual, não, porque usa o valor absoluto da diferença. Alguns cursos mantêm o sinal para mostrar o sentido; essa versão é apresentada aqui como erro relativo com sinal.",
      },
      {
        question: "O que é um bom erro percentual?",
        answer:
          "Depende da experiência e do equipamento. Em muitos laboratórios escolares, alguns pontos percentuais são considerados um bom resultado, enquanto as medições de precisão procuram muito menos. Informe-se sobre a tolerância esperada no seu curso ou método.",
      },
      {
        question: "Qual é a diferença entre erro percentual e diferença percentual?",
        answer:
          "O erro percentual compara uma medição com um valor verdadeiro conhecido. A diferença percentual compara duas medições entre si, normalmente dividindo pela sua média, quando nenhuma é a referência.",
      },
    ],
    sourcesUsedFor: ["Definição do erro percentual como o erro absoluto dividido pelo valor aceite, multiplicado por 100%."],
  },
  text: {
    measured: "Valor medido",
    measuredHelp: "O valor experimental ou observado.",
    trueValue: "Valor verdadeiro",
    trueHelp: "O valor aceite, teórico ou de referência. Não pode ser 0.",
    trueZero: "O valor verdadeiro não pode ser 0, porque o erro percentual divide por ele.",
    percentError: "Erro percentual",
    absoluteError: "Erro absoluto |medido − verdadeiro|",
    relativeError: "Erro relativo com sinal",
    direction: "Sentido",
    over: "A medição está acima do valor verdadeiro (sobrestimativa).",
    under: "A medição está abaixo do valor verdadeiro (subestimativa).",
    exact: "A medição é igual ao valor verdadeiro.",
    note: "O erro percentual usa a dimensão do erro, pelo que nunca é negativo. O erro relativo com sinal mantém o sentido.",
  },
};

export default pt;
