import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const es: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Calculadora de redondeo",
    shortTitle: "Redondeo",
    summary:
      "Redondea un número a decimales, a un entero, a la decena, centena o millar más cercanos o a cualquier incremento, con seis métodos de redondeo exactos.",
    metaTitle: "Calculadora de redondeo – Decimales, mitad al par y más",
    metaDescription:
      "Redondea con exactitud a decimales, decenas, centenas o un incremento como 0,05, con mitad hacia arriba, redondeo bancario, techo, suelo o truncamiento.",
    keywords: ["calculadora de redondeo", "redondear decimales", "redondear al más cercano", "redondeo bancario", "redondeo mitad al par", "redondeo hacia arriba", "función techo", "función suelo", "truncar", "redondear a 0,05"],
    intro: [
      "Redondear sustituye un número por otro cercano y más sencillo: 3,14159 pasa a 3,14, un precio de 19,97 pasa a 19,95 en pasos de 5 céntimos y 87.654 pasa a 88.000 al millar más cercano. Esta calculadora redondea a un número de decimales, a un entero, a la decena, centena o millar más cercanos, o a cualquier incremento que elijas.",
      "Trabaja con las cifras que escribes, no con una aproximación binaria, así que 1,005 se redondea de verdad a 1,01 con mitad hacia arriba, un caso en el que muchas hojas de cálculo y lenguajes de programación dan 1,00. Seis métodos cubren el redondeo escolar, el redondeo bancario y el redondeo siempre hacia arriba, hacia abajo o hacia cero. Para redondear a cifras significativas, usa la Calculadora de cifras significativas.",
    ],
    howToUse: [
      "Escribe el número tal como lo tienes. Se conservan todas las cifras.",
      "Elige a qué redondear: decimales, un entero, 10, 100, 1000 o un incremento propio, como 0,05 o 0,25.",
      "Elige el método de redondeo. Mitad hacia arriba es el que se enseña en la mayoría de los colegios; mitad al par es habitual en finanzas y estadística.",
      "Consulta el número redondeado, cuánto se ha alejado del original y los dos candidatos entre los que se ha elegido.",
    ],
    formulas: [
      {
        title: "Redondeo a un incremento",
        expression: "k = x ÷ q\nredondeado = round(k) × q",
        explanation:
          "q es el incremento: 0,01 para 2 decimales, 1 para un entero, 10, 100, 1000 o tu propio valor. El método decide cómo trata round() a k.",
      },
      {
        title: "Reglas de desempate",
        expression: "Mitad hacia arriba: 2,5 → 3, −2,5 → −3\nMitad al par: 2,5 → 2, 3,5 → 4\nMitad hacia abajo: 2,5 → 2, −2,5 → −2",
        explanation: "Solo se diferencian cuando el número está exactamente a medio camino entre dos candidatos. En los demás casos, las tres redondean al más cercano.",
      },
      {
        title: "Redondeo dirigido",
        expression: "Techo: 2,1 → 3, −2,9 → −2\nSuelo: 2,9 → 2, −2,1 → −3\nTruncar: 2,9 → 2, −2,9 → −2",
        explanation: "El techo siempre va hacia +∞, el suelo hacia −∞, y el truncamiento simplemente descarta las cifras sobrantes (hacia cero).",
      },
      {
        title: "Aritmética decimal exacta",
        expression: "1,005 = 1005 × 10⁻³ exactamente",
        explanation:
          "El número y el incremento se escalan a enteros con la misma potencia de 10 y se dividen de forma exacta, así que ningún error de redondeo binario puede alterar un empate.",
      },
    ],
    examples: [
      {
        title: "Redondear 1,005 a 2 decimales con mitad hacia arriba",
        steps: ["Los candidatos son 1,00 y 1,01", "La parte descartada, 0,005, es exactamente la mitad de 0,01", "Mitad hacia arriba aleja el empate de cero: 1,01"],
      },
      {
        title: "Redondear 7,325 a 2 decimales con redondeo bancario",
        steps: ["Los candidatos son 7,32 y 7,33", "7,325 está exactamente a medio camino", "Mitad al par elige el candidato cuya última cifra es par: 7,32"],
      },
      {
        title: "Redondear 3,38 horas al cuarto de hora más cercano",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 se redondea a 14", "14 × 0,25 = 3,50 horas"],
      },
    ],
    assumptions: [
      "El número se redondea exactamente como se escribe, con hasta 40 cifras significativas. No se convierte nada a coma flotante binaria.",
      "Mitad hacia arriba y mitad hacia abajo son simétricos respecto al cero: −2,5 con mitad hacia arriba da −3. El techo y el suelo no son simétricos.",
      "Cuando el valor redondeado es cero, se muestra como 0 sin signo.",
      "Los resultados se muestran con tantos decimales como el paso de redondeo, así que al redondear 2,5 a 2 decimales se muestra 2,50.",
    ],
    faqs: [
      {
        question: "¿Qué es el redondeo bancario?",
        answer:
          "Es el método de mitad al par: un empate exacto va al vecino par, así que 2,5 pasa a 2 y 3,5 pasa a 4. Con muchos valores, los empates se redondean hacia arriba y hacia abajo con la misma frecuencia, lo que evita un pequeño sesgo al alza en los totales.",
      },
      {
        question: "¿Por qué mi hoja de cálculo redondea 1,005 a 1,00?",
        answer:
          "La mayoría de los programas guardan los números en binario, donde 1,005 es en realidad 1,00499999999999989…, justo por debajo del empate. Esta calculadora trabaja con las propias cifras decimales, así que 1,005 está exactamente a medio camino y mitad hacia arriba da 1,01.",
      },
      {
        question: "¿Cómo redondeo un precio a los 5 céntimos más cercanos?",
        answer: "Elige «Incremento propio más cercano» e introduce 0,05. Por ejemplo, con mitad hacia arriba 19,97 pasa a 19,95 y 19,98 pasa a 20,00.",
      },
    ],
    sourcesUsedFor: [
      "Definiciones de los modos de redondeo (mitad hacia arriba, mitad al par, mitad hacia abajo, techo, suelo y hacia cero) usadas para comprobar los resultados.",
      "La regla de redondeo de la mitad al par para empates exactos, usada en la práctica de medición.",
    ],
  },
  text: {
    number: "Número",
    numberHelp:
      "Escribe el número exactamente; se conservan todas las cifras, así que 1,005 sigue siendo 1,005. Usa la coma como separador decimal. Se admite notación e, como 2,5e-3.",
    invalid: "Introduce un número como 1234,5678, -0,125 o 2,5e-3.",
    tooLong: "Introduce como máximo 40 cifras significativas, con un exponente entre -40 y 40.",
    target: "Redondear a",
    targets: {
      places: "Decimales",
      whole: "Entero más cercano",
      tens: "Decena más cercana (10)",
      hundreds: "Centena más cercana (100)",
      thousands: "Millar más cercano (1000)",
      increment: "Incremento propio más cercano",
    },
    places: "Decimales",
    increment: "Incremento",
    incrementHelp: "Redondea a un múltiplo de este valor, por ejemplo 0,05 para precios en pasos de 5 céntimos o 0,25 para cuartos de hora.",
    incrementInvalid: "Introduce un incremento positivo, como 0,05, 0,25 o 5.",
    method: "Método de redondeo",
    methods: {
      halfUp: "Mitad hacia arriba (empates lejos de cero)",
      halfEven: "Mitad al par (redondeo bancario)",
      halfDown: "Mitad hacia abajo (empates hacia cero)",
      ceiling: "Siempre hacia arriba (techo)",
      floor: "Siempre hacia abajo (suelo)",
      truncate: "Truncar (hacia cero)",
    },
    rounded: "Número redondeado",
    caption: "{original} redondeado con {method}.",
    methodShort: {
      halfUp: "mitad hacia arriba",
      halfEven: "mitad al par",
      halfDown: "mitad hacia abajo",
      ceiling: "siempre hacia arriba (techo)",
      floor: "siempre hacia abajo (suelo)",
      truncate: "truncamiento",
    },
    difference: "Diferencia (redondeado − original)",
    lower: "Candidato inferior (suelo)",
    upper: "Candidato superior (techo)",
    exact: "El número ya encaja exactamente con este redondeo, así que su valor no cambia.",
    tie: "El número está exactamente a medio camino entre los dos candidatos, así que decide la regla de desempate del método.",
    negativeNote:
      "Con números negativos, «siempre hacia arriba» va hacia +∞ (−2,5 pasa a −2) y «siempre hacia abajo» hacia −∞ (−2,5 pasa a −3).",
  },
};

export default es;
