import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const es: CalculatorTranslation<BayesText> = {
  content: {
    title: "Calculadora del teorema de Bayes",
    shortTitle: "Teorema de Bayes",
    summary: "Actualiza una probabilidad a priori con nueva evidencia y consulta el resultado en frecuencias naturales sobre 10.000 casos.",
    metaTitle: "Calculadora del teorema de Bayes – Probabilidad a posteriori",
    metaDescription:
      "Calcula P(A|B) con el valor a priori, la verosimilitud y la tasa de falsas alarmas. Obtén P(B), P(A|no B) y los verdaderos y falsos positivos en 10.000 casos.",
    keywords: ["teorema de Bayes", "regla de Bayes", "probabilidad a posteriori", "probabilidad condicional", "valor predictivo positivo", "falso positivo", "sensibilidad", "prevalencia"],
    intro: [
      "El teorema de Bayes indica cuánto creer en algo después de ver una evidencia. Combina lo probable que era la idea de partida (la probabilidad a priori) con cuánto más a menudo aparece la evidencia cuando la idea es cierta que cuando es falsa.",
      "El caso clásico es una prueba de cribado. Incluso una prueba que detecta la mayoría de los casos puede producir más falsas alarmas que positivos reales cuando la afección es rara. Introduce tres porcentajes para obtener la probabilidad actualizada y un desglose de 10.000 casos imaginarios que permite comprobar el resultado a mano con facilidad.",
    ],
    howToUse: [
      "Introduce la probabilidad a priori P(A): lo frecuente que es A antes de mirar la evidencia, como la prevalencia de una afección.",
      "Introduce P(B | A): con qué frecuencia aparece la evidencia cuando A es cierto, como la sensibilidad de una prueba.",
      "Introduce P(B | no A): con qué frecuencia aparece la evidencia de todos modos cuando A es falso, como la tasa de falsos positivos.",
      "Consulta P(A | B) y usa la tabla de 10.000 casos para ver de dónde salen los positivos.",
    ],
    formulas: [
      {
        title: "Teorema de Bayes",
        expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)",
        explanation: "La probabilidad a posteriori es la proporción de todos los casos con B que también tienen A.",
      },
      {
        title: "Probabilidad total",
        expression: "P(B) = P(B | A) · P(A) + P(B | no A) · (1 − P(A))",
        explanation: "B puede darse con A (verdaderos positivos) o sin A (falsos positivos).",
      },
      {
        title: "Resultado negativo",
        expression: "P(A | no B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))",
        explanation: "La probabilidad de que A siga siendo cierto cuando no se observa B (falsos negativos entre todos los negativos).",
      },
    ],
    examples: [
      {
        title: "Una prueba de cribado para una afección que tiene el 2 % de las personas",
        steps: [
          "De 10.000 personas, 200 tienen la afección y el 95 % de ellas da positivo: 190 verdaderos positivos.",
          "De las 9800 que no la tienen, el 8 % da positivo: 784 falsos positivos.",
          "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51 %",
        ],
      },
      {
        title: "Una palabra que delata el correo basura",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91 %"],
      },
      {
        title: "Una afección muy rara y una prueba precisa",
        steps: [
          "De 10.000 personas: 9,9 verdaderos positivos y 99,9 falsos positivos.",
          "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02 %, aunque la prueba acierta el 99 % de las veces.",
        ],
      },
    ],
    assumptions: [
      "Los tres porcentajes se toman como exactos. En la práctica, la sensibilidad y la tasa de falsos positivos de una prueba son estimaciones, y la probabilidad a priori depende de a quién se le hace la prueba.",
      "La probabilidad a priori debe describir el grupo del que procede el caso. Alguien a quien se le hace la prueba por tener síntomas tiene una probabilidad a priori mayor que una persona cualquiera de la población.",
      "Los ejemplos diagnósticos solo ilustran la aritmética. Interpretar el resultado de una prueba médica real requiere un profesional sanitario, que puede valorar los síntomas, los antecedentes y las pruebas de seguimiento.",
    ],
    faqs: [
      {
        question: "¿Por qué P(A | B) es tan baja si la prueba es precisa?",
        answer:
          "Cuando A es raro, los pocos casos reales quedan superados en número por las muchas personas sin A, e incluso una tasa de falsos positivos pequeña en ese grupo tan grande produce más falsas alarmas que verdaderos positivos.",
      },
      {
        question: "¿Cómo se corresponden la sensibilidad y la especificidad con los datos que se introducen?",
        answer: "La sensibilidad es P(B | A). La tasa de falsas alarmas P(B | no A) es el 100 % menos la especificidad, así que una especificidad del 97 % equivale a una tasa de falsas alarmas del 3 %.",
      },
      {
        question: "¿Qué muestra la tabla de 10.000 casos?",
        answer:
          "Convierte las probabilidades en recuentos esperados de verdaderos positivos, falsos positivos, falsos negativos y verdaderos negativos. P(A | B) es el número de verdaderos positivos dividido entre todos los positivos.",
      },
    ],
    sourcesUsedFor: [
      "Cómo se combinan la sensibilidad, la tasa de falsos positivos y la prevalencia en valores predictivos mediante una tabla de 2×2.",
      "Probabilidades condicionales leídas en una tabla de recuentos.",
    ],
  },
  text: {
    prior: "Probabilidad a priori P(A)",
    priorHelp: "Lo probable que es A antes de cualquier evidencia, por ejemplo lo frecuente que es una afección en el grupo al que se hace la prueba.",
    likelihood: "Verosimilitud P(B | A)",
    likelihoodHelp: "Con qué frecuencia aparece la evidencia B cuando A es cierto, por ejemplo la sensibilidad de una prueba (tasa de verdaderos positivos).",
    falseAlarm: "Tasa de falsas alarmas P(B | no A)",
    falseAlarmHelp: "Con qué frecuencia aparece B cuando A es falso, por ejemplo la tasa de falsos positivos de una prueba (el 100 % menos su especificidad).",
    zeroEvidence:
      "Con estos valores la evidencia B nunca puede darse (P(B) = 0), así que P(A | B) no está definida. Aumenta P(A) o una de las tasas por encima del 0 %.",
    posterior: "Probabilidad a posteriori P(A | B)",
    caption: "La probabilidad de que A sea cierto una vez observado B.",
    pB: "Probabilidad total de la evidencia P(B)",
    pNotAGivenB: "P(no A | B)",
    pAGivenNotB: "P(A | no B)",
    undefinedNotB: "No definida: B siempre ocurre, así que «no B» nunca se da",
    tableCaption: "Sobre 10.000 casos",
    tableColumns: { outcome: "Resultado", cases: "Casos" },
    rows: {
      tp: "Verdaderos positivos (A y B)",
      fp: "Falsos positivos (no A, pero B)",
      fn: "Falsos negativos (A, pero no B)",
      tn: "Verdaderos negativos (ni A ni B)",
    },
    liftNote: "Observar B multiplica las probabilidades relativas (odds) de A por {ratio} (la razón de verosimilitud P(B | A) ÷ P(B | no A)).",
    rareNote: "Cuando A es raro, la mayoría de los casos con B pueden seguir siendo falsas alarmas aunque la prueba sea precisa.",
    note: "Las cifras sobre 10.000 son recuentos esperados y pueden tener decimales.",
  },
};

export default es;
