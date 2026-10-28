import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const es: CalculatorTranslation<StairsText> = {
  content: {
    title: "Calculadora de escaleras",
    shortTitle: "Escaleras",
    summary:
      "Calcula el número de peldaños, la altura de la contrahuella, el avance total, el ángulo y la longitud de la zanca a partir de la altura entre plantas, con la comprobación de comodidad 2C + H.",
    metaTitle: "Calculadora de escaleras – Contrahuella, huella y zanca",
    metaDescription:
      "Calcula cuántos peldaños necesita una escalera según la altura total, con la contrahuella, el avance, el ángulo, la zanca y la regla 2C + H, en pulgadas o cm.",
    keywords: [
      "calculadora de escaleras",
      "calcular peldaños",
      "contrahuella y huella",
      "longitud de la zanca",
      "ángulo de escalera",
      "medidas de escalera",
      "fórmula de Blondel",
    ],
    intro: [
      "Una escalera divide la altura entre dos plantas en peldaños iguales. Cada peldaño tiene una contrahuella (su altura) y una huella (su profundidad). El número de contrahuellas depende de la altura total y de la contrahuella máxima que aceptes; siempre hay una huella menos que contrahuellas, porque el último escalón es la propia planta superior.",
      "Introduce la altura entre plantas, la contrahuella máxima y la profundidad de la huella para obtener el número de peldaños, la altura exacta de la contrahuella, el avance total, el ángulo de la escalera y la longitud de la diagonal de la zanca, con la comprobación tradicional de comodidad 2C + H. Los valores por defecto son los límites del International Residential Code (código residencial de EE. UU.), pero la normativa de tu zona puede ser distinta.",
    ],
    howToUse: [
      "Elige pulgadas o centímetros.",
      "Mide la altura total desde el suelo terminado de abajo hasta el suelo terminado de arriba.",
      "Revisa la altura máxima de la contrahuella y la profundidad de la huella. Por defecto se usan la contrahuella máxima de 7¾ in y la huella mínima de 10 in del International Residential Code.",
      "Si quieres, introduce una altura de contrahuella objetivo y el espacio horizontal disponible para ver si la escalera cabe.",
      "Consulta el número de contrahuellas y la distribución, y luego comprueba todo con la normativa de edificación de tu zona.",
    ],
    formulas: [
      {
        title: "Número de contrahuellas",
        expression: "n = ⌈altura total ÷ contrahuella máxima⌉",
        explanation: "Con una contrahuella objetivo, n es el número entero más próximo a altura total ÷ objetivo.",
      },
      {
        title: "Altura de la contrahuella y huellas",
        expression: "contrahuella = altura total ÷ n; huellas = n − 1",
        explanation: "Todas las contrahuellas tienen la misma altura.",
      },
      {
        title: "Avance total y ángulo",
        expression: "avance = huellas × profundidad de huella; ángulo = arctan(contrahuella ÷ huella)",
        explanation: "El avance se mide de borde a borde de los peldaños, sin ningún rellano.",
      },
      {
        title: "Diagonal de la zanca",
        expression: "zanca = √(altura total² + avance total²)",
        explanation: "La línea recta desde la parte inferior hasta la superior del tramo.",
      },
      {
        title: "Regla práctica de comodidad",
        expression: "24 in ≤ 2 × contrahuella + huella ≤ 25 in",
        explanation: "Unos 61–63,5 cm. Una pauta tradicional para una zancada cómoda, no una exigencia normativa.",
      },
    ],
    examples: [
      {
        title: "108 in entre plantas con los valores por defecto del IRC",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 contrahuellas",
          "Contrahuella = 108 ÷ 14 ≈ 7,714 in; 13 huellas de 10 in dan un avance de 130 in",
          "Ángulo = arctan(7,714 ÷ 10) ≈ 37,6°; zanca = √(108² + 130²) ≈ 169,01 in",
          "2C + H ≈ 25,43 in, un poco por encima del rango de comodidad de 24–25 in",
        ],
      },
      {
        title: "Altura de 252 cm con huellas de 24 cm",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 contrahuellas",
          "Contrahuella = 252 ÷ 13 ≈ 19,385 cm; 12 huellas dan un avance de 288 cm",
          "2C + H ≈ 62,77 cm ≈ 24,71 in, dentro del rango de comodidad",
        ],
      },
      {
        title: "Altura de 100 in con contrahuellas de 7 in como objetivo en un hueco de 130 in",
        steps: [
          "n = redondeo(100 ÷ 7) = redondeo(14,29) = 14 contrahuellas de ≈ 7,143 in",
          "13 huellas × 10,5 in = 136,5 in de avance, 6,5 in más que el espacio disponible",
          "2C + H ≈ 24,79 in, dentro del rango de comodidad",
        ],
      },
    ],
    assumptions: [
      "Es una estimación geométrica para un único tramo recto con peldaños iguales. No se incluyen rellanos, peldaños compensados, escaleras de caracol ni el grosor de las tablas de las huellas.",
      "La normativa de edificación varía según el lugar y cambia con el tiempo, y abarca mucho más que las medidas de los peldaños: altura libre de paso, ancho, pasamanos, barandillas, vuelos de la huella y la variación permitida entre peldaños. Los valores por defecto se toman del International Residential Code solo como punto de partida; comprueba la normativa que se aplica donde vayas a construir.",
      "El resultado no ha sido revisado por profesionales y no es asesoramiento de seguridad ni de ingeniería. Las escaleras son una causa frecuente de caídas, así que haz que el servicio municipal de edificación o un profesional cualificado revise el diseño antes de construir.",
      "La altura total debe medirse entre las superficies de los suelos terminados. Si después cambias el acabado del suelo, cambian las alturas del primer y del último peldaño.",
    ],
    faqs: [
      {
        question: "¿Cuántos peldaños necesito para una altura de 9 ft (108 in)?",
        answer:
          "Con una contrahuella máxima de 7¾ in necesitas ⌈108 ÷ 7,75⌉ = 14 contrahuellas de unas 7,71 in cada una, y 13 huellas. Una contrahuella máxima menor da más peldaños, más bajos, y una escalera más larga.",
      },
      {
        question: "¿Por qué hay menos huellas que contrahuellas?",
        answer:
          "La última contrahuella te sube a la planta superior, que hace de último escalón. Por eso un tramo con 14 contrahuellas tiene 13 huellas, y el avance total es de 13 profundidades de huella.",
      },
      {
        question: "¿Qué es la regla 2C + H?",
        answer:
          "Es una pauta tradicional de comodidad: dos alturas de contrahuella más una profundidad de huella deberían sumar unas 24–25 in (61–63,5 cm), aproximadamente la longitud de una zancada cómoda. No es una exigencia normativa, pero las escaleras muy fuera de ese rango suelen resultar incómodas.",
      },
    ],
    sourcesUsedFor: [
      "Los límites del International Residential Code (R311.7.5) usados por defecto: una altura máxima de contrahuella de 7¾ in (196 mm) y una profundidad mínima de huella de 10 in (254 mm).",
      "La regla práctica de comodidad 2 × contrahuella + huella = 24–25 in, atribuida a Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Unidades",
    units: { in: "Pulgadas (in)", cm: "Centímetros (cm)" },
    rise: "Altura total (entre plantas)",
    riseHelp: "La distancia vertical desde la parte superior del suelo terminado inferior hasta la parte superior del suelo terminado superior.",
    maxRiser: "Altura máxima de la contrahuella",
    maxRiserHelp:
      "El peldaño más alto que aceptas. Por defecto se usa el máximo de 7¾ in (196 mm) del International Residential Code; la normativa de tu zona puede ser distinta.",
    targetRiser: "Altura de contrahuella objetivo (opcional)",
    targetRiserHelp:
      "Si introduces una altura de peldaño preferida, el número de contrahuellas se elige para acercarse lo más posible a ella, aunque supere el máximo indicado arriba.",
    tread: "Profundidad de la huella",
    treadHelp: "La profundidad horizontal de cada peldaño, de borde a borde. Por defecto se usa el mínimo de 10 in (254 mm) del International Residential Code.",
    runLimit: "Avance total disponible (opcional)",
    runLimitHelp: "El espacio horizontal del que dispones para la escalera, para comprobar el resultado.",
    steps: "Número de contrahuellas (peldaños)",
    caption: "{risers} de {riser} cada una, con {treads} de {tread}.",
    risersCount: {
      zero: "{n} contrahuellas",
      one: "{n} contrahuella",
      two: "{n} contrahuellas",
      few: "{n} contrahuellas",
      many: "{n} contrahuellas",
      other: "{n} contrahuellas",
    },
    treadsCount: { zero: "{n} huellas", one: "{n} huella", two: "{n} huellas", few: "{n} huellas", many: "{n} huellas", other: "{n} huellas" },
    riserHeight: "Altura de la contrahuella",
    treads: "Número de huellas",
    totalRun: "Avance total",
    angle: "Ángulo de la escalera",
    stringer: "Longitud de la zanca (diagonal de altura y avance)",
    comfort: "Comprobación de comodidad 2C + H",
    comfortStatus: "Comparada con la regla práctica de 24–25 in (61–63,5 cm)",
    comfortOptions: {
      low: "Por debajo del rango: escalera tendida y larga",
      ok: "Dentro del rango",
      high: "Por encima del rango: escalera empinada o de huella profunda",
    },
    notes: {
      overMax: "La altura de contrahuella de {riser} supera el máximo que has introducido ({max}).",
      overRun: "El avance total de {run} supera en {over} el espacio que has introducido ({limit}).",
      comfort:
        "La regla 2C + H (dos contrahuellas más una huella de unas 24–25 in) es una pauta tradicional de comodidad, no una exigencia normativa.",
      code: "La normativa de edificación varía según el lugar y regula más que las medidas de los peldaños: altura libre de paso, ancho, pasamanos, barandillas, vuelos de la huella, rellanos y la variación permitida entre peldaños. Consulta la normativa de edificación local y haz que un profesional cualificado revise el diseño.",
      stringer:
        "La longitud de la zanca es la diagonal recta de la altura y el avance totales. Una zanca recortada es más larga una vez que se añade la madera necesaria para las uniones superior e inferior.",
    },
  },
};

export default es;
