import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const es: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Calculadora del índice cintura-cadera",
    shortTitle: "Índice cintura-cadera",
    summary: "Divide el perímetro de tu cintura entre el de tu cadera para obtener el índice cintura-cadera y compáralo con el umbral de la OMS para mujeres u hombres.",
    metaTitle: "Calculadora del índice cintura-cadera – ICC según la OMS",
    metaDescription:
      "Calcula tu índice cintura-cadera a partir de las medidas de cintura y cadera en cm o pulgadas, y compáralo con el umbral de la OMS para mujeres y hombres.",
    keywords: ["índice cintura-cadera", "ICC", "relación cintura cadera", "perímetro de cintura", "grasa abdominal", "forma corporal", "índice cintura cadera OMS"],
    intro: [
      "El índice cintura-cadera (ICC) compara el tamaño de tu cintura con el de tus caderas. Un índice más alto significa que una mayor parte de la grasa corporal se acumula en el abdomen, algo que la investigación ha relacionado con un mayor riesgo de diabetes tipo 2 y de enfermedad cardiaca.",
      "Introduce ambas medidas en la misma unidad para obtener tu índice. Después, la calculadora lo compara con el umbral usado en una consulta de expertos de la Organización Mundial de la Salud: 0,90 para los hombres y 0,85 para las mujeres.",
    ],
    howToUse: [
      "Elige centímetros o pulgadas. Las dos medidas deben estar en la misma unidad.",
      "Mide la cintura a medio camino entre la costilla más baja y la parte superior del hueso de la cadera, al final de una espiración normal.",
      "Mide la cadera alrededor de la parte más ancha de los glúteos, con la cinta horizontal y ajustada pero sin apretar.",
      "Elige mujer u hombre para seleccionar el umbral y consulta tu índice.",
    ],
    formulas: [
      { title: "Índice cintura-cadera", expression: "ICC = perímetro de cintura ÷ perímetro de cadera", explanation: "Las unidades se anulan, así que el índice es el mismo en centímetros y en pulgadas." },
      {
        title: "Umbral de la OMS",
        expression: "ICC ≥ 0,90 (hombres)   ·   ICC ≥ 0,85 (mujeres)",
        explanation: "A partir de estos valores, la consulta de expertos de la OMS describe el riesgo de complicaciones metabólicas como sustancialmente aumentado.",
      },
    ],
    examples: [
      {
        title: "Mujer, cintura de 82 cm y cadera de 100 cm",
        steps: ["ICC = 82 ÷ 100 = 0,82", "El umbral de la OMS para las mujeres es 0,85", "0,82 está por debajo del umbral"],
      },
      {
        title: "Hombre, cintura de 97 cm y cadera de 101 cm",
        steps: ["ICC = 97 ÷ 101 ≈ 0,96", "El umbral de la OMS para los hombres es 0,90", "0,96 está en el umbral o por encima"],
      },
      {
        title: "Mujer que mide en pulgadas, cintura de 34 in y cadera de 40 in",
        steps: ["ICC = 34 ÷ 40 = 0,85", "El umbral para las mujeres es 0,85 o más", "El índice está justo en el umbral"],
      },
    ],
    assumptions: [
      "Este resultado es una estimación, no un consejo médico ni un diagnóstico, y esta calculadora no ha sido revisada por profesionales. Habla con un profesional sanitario sobre tus riesgos para la salud.",
      "Los puntos de medida siguen el protocolo de la OMS: la cintura a medio camino entre el borde inferior de la última costilla y la parte superior de la cresta ilíaca, y la cadera en la parte más ancha de los glúteos. Medir en otro sitio cambia el índice.",
      "Los umbrales de 0,90 y 0,85 son puntos de referencia generales de la consulta de expertos de la OMS. Los umbrales adecuados varían según la población y el origen étnico, y no están pensados para niños ni para el embarazo.",
      "El índice se redondea a dos decimales antes de compararlo con el umbral.",
    ],
    faqs: [
      {
        question: "¿Por qué importa el índice cintura-cadera?",
        answer: "Es un indicador sencillo de dónde se almacena la grasa corporal. La grasa abdominal está más relacionada con los problemas metabólicos que la grasa de caderas y muslos, y el índice recoge esa diferencia.",
      },
      {
        question: "¿Es mejor el índice cintura-cadera que el IMC?",
        answer: "Miden cosas distintas. El IMC relaciona el peso con la altura, pero no dice nada de dónde se acumula la grasa, mientras que el índice cintura-cadera no tiene en cuenta el peso total. Los profesionales sanitarios suelen valorar varias medidas a la vez.",
      },
      {
        question: "¿Importa si uso centímetros o pulgadas?",
        answer: "No. El índice no tiene unidad, así que obtienes el mismo resultado en ambos casos, siempre que las dos medidas estén en la misma unidad.",
      },
    ],
    sourcesUsedFor: [
      "Los umbrales del índice cintura-cadera de 0,90 para los hombres y 0,85 para las mujeres para un riesgo sustancialmente aumentado de complicaciones metabólicas, y los puntos de medida.",
    ],
  },
  text: {
    unit: "Unidad",
    units: { cm: "Centímetros (cm)", in: "Pulgadas (in)" },
    waist: "Perímetro de cintura",
    waistHelp: "Mide a medio camino entre la costilla más baja y la parte superior del hueso de la cadera (cresta ilíaca), al final de una espiración normal.",
    hip: "Perímetro de cadera",
    hipHelp: "Mide alrededor de la parte más ancha de los glúteos, con la cinta horizontal.",
    sex: "Sexo",
    sexHelp: "Solo se usa para elegir el umbral de la OMS, que es distinto para mujeres y hombres.",
    sexes: { female: "Mujer", male: "Hombre" },
    errors: {
      implausible: "Un índice cintura-cadera de {ratio} está fuera del rango observado en adultos. Comprueba que las dos medidas estén en la misma unidad.",
    },
    ratio: "Índice cintura-cadera",
    caption: "Cintura {waist} ÷ cadera {hip}.",
    comparison: "Comparación con el umbral de la OMS",
    atOrAbove: "En el umbral o por encima",
    below: "Por debajo del umbral",
    cutoff: "Umbral de la OMS para {sex}",
    waistAtCutoff: "Cintura con la que se alcanzaría el umbral",
    notes: {
      above: "Un índice de {cutoff} o más en {sex} es el nivel que la consulta de expertos de la OMS relacionó con un riesgo sustancialmente aumentado de complicaciones metabólicas. Es un indicador de cribado, no un diagnóstico.",
      below: "El índice está por debajo del umbral de la OMS de {cutoff} para {sex}. Otros factores, como el peso, la actividad física, la tensión arterial y los antecedentes familiares, también influyen en el riesgo para la salud.",
      rounding: "El índice se redondea a dos decimales antes de compararlo con el umbral.",
      advice: "Esto es una estimación, no un consejo médico. Habla con un profesional sanitario sobre tus resultados.",
    },
    sexNames: { female: "mujeres", male: "hombres" },
  },
};

export default es;
