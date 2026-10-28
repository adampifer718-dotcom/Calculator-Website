import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const es: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Calculadora de grasa corporal",
    shortTitle: "Grasa corporal",
    summary:
      "Estima tu porcentaje de grasa corporal a partir de la altura y los perímetros de cuello, cintura y cadera con el método de perímetros de la Marina de EE. UU.",
    metaTitle: "Calculadora de grasa corporal – Método de la Marina",
    metaDescription:
      "Estima tu porcentaje de grasa con una cinta métrica y las ecuaciones de perímetros de la Marina de EE. UU., en cm o pulgadas, con tu masa grasa y masa magra.",
    keywords: [
      "grasa corporal",
      "porcentaje de grasa corporal",
      "método de la Marina",
      "calcular grasa corporal",
      "perímetro de cintura",
      "masa magra",
      "masa grasa",
    ],
    intro: [
      "El porcentaje de grasa corporal es la parte de tu peso que corresponde a grasa. Los métodos de laboratorio la miden directamente, pero con una cinta métrica se obtiene una estimación rápida.",
      "Esta calculadora usa el método de perímetros de la Marina de EE. UU., desarrollado por Hodgdon y Beckett en 1984. Necesita tu altura y los perímetros de cuello y cintura, además de la cadera en la ecuación para mujeres. Añade tu peso para ver cuánto es masa grasa y cuánto masa magra.",
    ],
    howToUse: [
      "Elige centímetros o pulgadas y el sexo que se usa en la ecuación.",
      "Introduce tu altura y los perímetros de cuello y cintura (y el de cadera en la ecuación para mujeres).",
      "Si quieres, introduce tu peso para dividirlo en masa grasa y masa magra.",
      "Consulta el porcentaje de grasa corporal estimado.",
    ],
    formulas: [
      {
        title: "Hombres (longitudes en pulgadas)",
        expression: "%GC = 86,010 × log₁₀(cintura − cuello) − 70,041 × log₁₀(altura) + 36,76",
        explanation: "La cintura se mide alrededor del abdomen, a la altura del ombligo.",
      },
      {
        title: "Mujeres (longitudes en pulgadas)",
        expression: "%GC = 163,205 × log₁₀(cintura + cadera − cuello) − 97,684 × log₁₀(altura) − 78,387",
        explanation: "La cintura se mide en su punto más estrecho y la cadera en su parte más ancha.",
      },
      {
        title: "Centímetros",
        expression: "longitud (in) = longitud (cm) ÷ 2,54",
        explanation: "Las medidas en centímetros se convierten a pulgadas antes de aplicar las ecuaciones.",
      },
      {
        title: "Masa grasa y masa magra",
        expression: "masa grasa = peso × %GC ÷ 100\nmasa magra = peso − masa grasa",
        explanation: "Aquí, masa magra significa todo salvo la grasa: músculo, huesos, órganos y agua.",
      },
    ],
    examples: [
      {
        title: "Hombre, 178 cm de altura, cuello 38 cm, cintura 88 cm, peso 80 kg",
        steps: [
          "En pulgadas: altura 70,08, cuello 14,96, cintura 34,65",
          "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8 %",
          "Masa grasa ≈ 80 × 0,188 = 15,0 kg; masa magra ≈ 65,0 kg",
        ],
      },
      {
        title: "Mujer, 65 in de altura, cuello 13 in, cintura 29 in, cadera 39 in, peso 140 lb",
        steps: [
          "cintura + cadera − cuello = 29 + 39 − 13 = 55 in",
          "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6 %",
          "Masa grasa ≈ 140 × 0,2856 = 40,0 lb; masa magra ≈ 100,0 lb",
        ],
      },
    ],
    assumptions: [
      "El resultado es una estimación, no un consejo médico, y esta calculadora todavía no ha sido revisada por profesionales. Habla con un profesional sanitario sobre lo que significa tu grasa corporal en tu caso.",
      "Las ecuaciones se desarrollaron con personal adulto de la Marina de EE. UU. Suelen quedar a unos 3–4 puntos porcentuales de las mediciones de laboratorio y pueden ser menos precisas en personas muy musculosas, muy delgadas o mayores, y durante el embarazo.",
      "Pequeños errores de medición cambian el resultado de forma apreciable, sobre todo en la cintura. Mide con cuidado y siempre de la misma manera.",
      "No se muestran categorías de salud, porque no se ha verificado ninguna tabla de clasificación concreta para esta página.",
    ],
    faqs: [
      {
        question: "¿Qué precisión tiene el método de la Marina?",
        answer: "En la mayoría de los adultos queda a pocos puntos porcentuales de métodos como el pesaje hidrostático, pero el error individual puede ser mayor. Es más útil para seguir los cambios a lo largo del tiempo con la misma técnica de medición.",
      },
      {
        question: "¿Por qué la ecuación para mujeres usa la cadera?",
        answer: "Las mujeres suelen acumular más grasa en caderas y muslos, así que añadir el perímetro de cadera mejoró el ajuste de la ecuación para ellas.",
      },
      {
        question: "¿Por qué la altura reduce la estimación?",
        answer: "Una persona más alta con la misma cintura y el mismo cuello tiene relativamente menos perímetro para su complexión, por lo que la ecuación resta un término basado en la altura.",
      },
    ],
    sourcesUsedFor: [
      "El método de perímetros para hombres, a partir del perímetro de cuello y abdomen y la altura, y su precisión frente al pesaje hidrostático.",
      "Contexto sobre el método de la cinta métrica del ejército y los puntos donde se miden el cuello, la cintura y la cadera.",
    ],
  },
  text: {
    unit: "Unidad de medida",
    units: { cm: "Centímetros (cm)", in: "Pulgadas (in)" },
    sex: "Sexo usado en la ecuación",
    sexHelp: "El método tiene ecuaciones distintas para hombres y mujeres; la de mujeres usa también la medida de la cadera.",
    sexes: { male: "Hombre", female: "Mujer" },
    height: "Altura",
    heightHelp: "Altura de pie, sin zapatos.",
    neck: "Perímetro del cuello",
    neckHelp: "Justo debajo de la laringe (la nuez), con la cinta ligeramente inclinada hacia abajo por delante.",
    waist: "Perímetro de la cintura",
    waistHelp: "Hombres: alrededor del abdomen, a la altura del ombligo. Mujeres: en el punto más estrecho de la cintura.",
    hip: "Perímetro de la cadera",
    hipHelp: "Alrededor de la parte más ancha de las caderas y los glúteos.",
    weight: "Peso corporal",
    weightHelp: "Opcional. Sirve para dividir tu peso en masa grasa y masa magra.",
    weightUnit: "Unidad de peso",
    weightUnits: { kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    bodyFat: "Grasa corporal estimada",
    caption: "{method}; altura {height}, cuello {neck}, cintura {waist}.",
    captionHip: "{method}; altura {height}, cuello {neck}, cintura {waist}, cadera {hip}.",
    method: "Método",
    methodName: "Método de perímetros de la Marina de EE. UU. (Hodgdon y Beckett, 1984)",
    methodShort: "Método de la Marina de EE. UU.",
    fatMass: "Masa grasa",
    leanMass: "Masa magra (todo salvo la grasa)",
    errors: {
      range: "Introduce un valor entre {min} y {max} {unit}.",
      waistNeck: "En esta ecuación, la cintura debe ser mayor que el cuello.",
      logArgument: "Cintura + cadera − cuello debe ser mayor que 0.",
      outOfRange:
        "Estas medidas dan una estimación de {value}, fuera del intervalo que la ecuación puede describir. Comprueba las medidas y la unidad.",
    },
    notes: {
      estimate:
        "Una estimación a partir de medidas con cinta. Comparadas con los métodos de laboratorio, las ecuaciones de perímetros suelen diferir unos 3–4 puntos porcentuales, y más en personas muy delgadas o muy musculosas.",
      measure: "Mide sobre la piel, relajado y sin meter tripa, y toma la media de dos o tres lecturas.",
      noCategories: "Aquí no se dan categorías de salud; pregunta a un profesional sanitario cómo interpretar tu resultado.",
      extreme: "Este resultado está cerca del límite para el que se desarrolló la ecuación, así que es menos fiable.",
    },
  },
};

export default es;
