import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const es: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Calculadora de error porcentual",
    shortTitle: "Error porcentual",
    summary: "Compara un valor medido con el valor real mediante el error porcentual, con el error absoluto y el error relativo con signo.",
    metaTitle: "Calculadora de error porcentual – Valor medido y real",
    metaDescription:
      "Calcula el error porcentual entre un valor medido y uno real, con el error absoluto, el error relativo con signo y si has sobrestimado o subestimado.",
    keywords: [
      "error porcentual",
      "porcentaje de error",
      "error relativo",
      "error absoluto",
      "valor experimental",
      "valor aceptado",
      "informe de laboratorio",
      "exactitud",
    ],
    intro: [
      "El error porcentual indica cuánto se ha alejado una medida del valor que debería haber dado, como proporción de ese valor real. Es una forma habitual de expresar la exactitud en el trabajo de laboratorio.",
      "Introduce lo que has medido y el valor aceptado. Además del error porcentual, la calculadora muestra el tamaño del error sin más y si tu resultado ha salido demasiado alto o demasiado bajo.",
    ],
    howToUse: [
      "Introduce el valor medido (experimental).",
      "Introduce el valor real (aceptado o teórico) en la misma unidad. No puede ser 0.",
      "Consulta el error porcentual. Cuanto menor sea el porcentaje, más exacta es la medida.",
      "Usa el error relativo con signo o la línea de dirección para ver si has sobrestimado o subestimado.",
    ],
    formulas: [
      {
        title: "Error porcentual",
        expression: "error porcentual = |medido − real| ÷ |real| × 100 %",
        explanation: "El tamaño del error como porcentaje del valor real. Siempre es cero o positivo.",
      },
      { title: "Error absoluto", expression: "error absoluto = |medido − real|", explanation: "El error en la unidad de medida original." },
      {
        title: "Error relativo con signo",
        expression: "error relativo = (medido − real) ÷ |real| × 100 %",
        explanation: "Es positivo cuando la medida es demasiado alta y negativo cuando es demasiado baja.",
      },
    ],
    examples: [
      {
        title: "Medir la aceleración de la gravedad con un péndulo",
        steps: [
          "Error absoluto = |9,62 − 9,81| = 0,19 m/s²",
          "Error porcentual = 0,19 ÷ 9,81 × 100 % ≈ 1,9368 %",
          "El error relativo con signo es de aproximadamente −1,9368 %, así que la medida es baja.",
        ],
      },
      {
        title: "Cronometrar la velocidad del sonido",
        steps: ["Error absoluto = |342,5 − 343| = 0,5 m/s", "Error porcentual = 0,5 ÷ 343 × 100 % ≈ 0,1458 %"],
      },
      {
        title: "Un valor de referencia negativo: el potencial del electrodo de cinc",
        steps: [
          "Error absoluto = |−0,79 − (−0,76)| = 0,03 V",
          "Error porcentual = 0,03 ÷ |−0,76| × 100 % ≈ 3,9474 %",
          "La medida está por debajo del valor aceptado, así que el error relativo con signo es de aproximadamente −3,9474 %.",
        ],
      },
    ],
    assumptions: [
      "Ambos valores usan la misma unidad. El error porcentual no tiene unidad, pero el error absoluto está en la unidad que hayas introducido.",
      "Se divide entre el valor absoluto del valor real, así que el error porcentual sigue siendo positivo aunque el valor de referencia sea negativo.",
      "El error porcentual no tiene sentido para magnitudes en escalas de intervalo con un cero arbitrario, como las temperaturas en °C o °F, salvo que tengas un motivo para comparar con ese cero. Los kelvin evitan el problema.",
    ],
    faqs: [
      {
        question: "¿Puede ser negativo el error porcentual?",
        answer:
          "Con la definición habitual, no, porque usa el valor absoluto de la diferencia. Algunos cursos conservan el signo para mostrar la dirección; aquí esa versión aparece como error relativo con signo.",
      },
      {
        question: "¿Qué se considera un buen error porcentual?",
        answer:
          "Depende del experimento y del instrumental. En muchas prácticas escolares, unos pocos puntos porcentuales se consideran un buen resultado, mientras que las mediciones de precisión buscan mucho menos. Pregunta qué tolerancia espera tu curso o tu método.",
      },
      {
        question: "¿Qué diferencia hay entre el error porcentual y la diferencia porcentual?",
        answer:
          "El error porcentual compara una medida con un valor real conocido. La diferencia porcentual compara dos medidas entre sí, normalmente dividiendo entre su media, cuando ninguna es la referencia.",
      },
    ],
    sourcesUsedFor: ["Definición del error porcentual como el error absoluto dividido entre el valor aceptado, por 100 %."],
  },
  text: {
    measured: "Valor medido",
    measuredHelp: "El valor experimental u observado.",
    trueValue: "Valor real",
    trueHelp: "El valor aceptado, teórico o de referencia. No puede ser 0.",
    trueZero: "El valor real no puede ser 0, porque el error porcentual se divide entre él.",
    percentError: "Error porcentual",
    absoluteError: "Error absoluto |medido − real|",
    relativeError: "Error relativo con signo",
    direction: "Dirección",
    over: "La medida está por encima del valor real (sobrestimación).",
    under: "La medida está por debajo del valor real (subestimación).",
    exact: "La medida coincide con el valor real.",
    note: "El error porcentual usa el tamaño del error, así que nunca es negativo. El error relativo con signo conserva la dirección.",
  },
};

export default es;
