import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const es: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Calculadora del índice cintura-altura",
    shortTitle: "Índice cintura-altura",
    summary: "Divide el perímetro de tu cintura entre tu altura para obtener el índice cintura-altura y ver en qué franja de referencia del NICE para adultos se sitúa.",
    metaTitle: "Calculadora del índice cintura-altura – ICA y franjas NICE",
    metaDescription:
      "Calcula tu índice cintura-altura en cm o pulgadas, compáralo con las franjas del NICE para adultos y consulta la cintura que equivale a la mitad de tu altura.",
    keywords: [
      "índice cintura-altura",
      "ICA",
      "relación cintura altura",
      "WHtR",
      "adiposidad central",
      "cintura menor que la mitad de la altura",
      "grasa abdominal",
    ],
    intro: [
      "El índice cintura-altura (ICA) es el perímetro de la cintura dividido entre la altura. Es una forma sencilla de estimar cuánta grasa se acumula en la zona central del cuerpo, lo que se conoce como adiposidad central y se relaciona con la diabetes tipo 2, la hipertensión arterial y las enfermedades cardiacas.",
      "En el Reino Unido, el NICE propone que los adultos con un IMC inferior a 35 usen este índice junto con el IMC, con el mensaje sencillo de mantener la cintura por debajo de la mitad de la altura. Esta calculadora muestra tu índice, la franja de referencia del NICE en la que se sitúa y la cintura que corresponde a un índice de 0,5.",
    ],
    howToUse: [
      "Elige centímetros o pulgadas. Usa la misma unidad para las dos medidas.",
      "Mide la cintura a medio camino entre la costilla más baja y la parte superior del hueso de la cadera, tras una espiración normal, con la cinta horizontal y ajustada.",
      "Mide tu altura sin zapatos.",
      "Consulta tu índice, la franja de referencia y la cintura correspondiente a un índice de 0,5.",
    ],
    formulas: [
      {
        title: "Índice cintura-altura",
        expression: "ICA = perímetro de cintura ÷ altura",
        explanation: "Ambas en la misma unidad, así que las unidades se anulan y el índice es el mismo en cm y en pulgadas.",
      },
      {
        title: "Franjas de referencia del NICE para adultos",
        expression: "0,4 a 0,49: sin aumento del riesgo para la salud\n0,5 a 0,59: riesgo para la salud aumentado\n0,6 o más: riesgo alto para la salud",
        explanation: "Para adultos con un IMC inferior a 35. Son franjas de referencia, no un diagnóstico.",
      },
      {
        title: "Cintura a la mitad de tu altura",
        expression: "cintura para un índice de 0,5 = altura ÷ 2",
        explanation: "El umbral en el que se basa el consejo de mantener la cintura por debajo de la mitad de la altura.",
      },
    ],
    examples: [
      {
        title: "Cintura de 84 cm, altura de 172 cm",
        steps: ["ICA = 84 ÷ 172 ≈ 0,49", "0,49 está en la franja de 0,4 a 0,49", "La mitad de la altura es 172 ÷ 2 = 86 cm, así que la cintura está 2 cm por debajo"],
      },
      {
        title: "Cintura de 38 in, altura de 68 in",
        steps: ["ICA = 38 ÷ 68 ≈ 0,56", "0,56 está en la franja de 0,5 a 0,59", "La mitad de la altura es 34 in, así que la cintura está 4 in por encima"],
      },
      {
        title: "Cintura de 104 cm, altura de 168 cm",
        steps: ["ICA = 104 ÷ 168 ≈ 0,62", "0,62 está en la franja de 0,6 o más", "Un índice de 0,6 correspondería a una cintura de 168 × 0,6 = 100,8 cm"],
      },
    ],
    assumptions: [
      "El resultado es una estimación, no un consejo médico ni un diagnóstico, y esta calculadora todavía no ha sido revisada por profesionales. Habla con un médico o un enfermero sobre lo que significan tus medidas en tu caso.",
      "Las franjas proceden de la guía del NICE para adultos con un IMC inferior a 35, de cualquier sexo u origen étnico, y se muestran solo como referencia. El NICE no las usa para adultos con un IMC de 35 o más, porque su índice es casi siempre alto.",
      "La calculadora usa las franjas para adultos. No está pensada para niños y jóvenes ni para el embarazo sin consejo clínico.",
      "Pequeñas diferencias en el lugar donde se coloca la cinta y en lo ajustada que está cambian el índice, así que mide siempre de la misma forma si haces un seguimiento.",
    ],
    faqs: [
      {
        question: "¿Cuál es un índice cintura-altura saludable?",
        answer:
          "El NICE describe un índice de 0,4 a 0,49 como sin aumento del riesgo para la salud en adultos con un IMC inferior a 35. La regla sencilla es mantener la cintura por debajo de la mitad de la altura.",
      },
      {
        question: "¿En qué se diferencia del IMC?",
        answer:
          "El IMC compara el peso con la altura y no puede saber dónde se acumula la grasa. El índice cintura-altura se fija en la cintura, así que refleja la grasa de la zona central, que está más relacionada con algunos riesgos para la salud. El NICE propone usar ambos.",
      },
      {
        question: "¿Cómo se compara con el índice cintura-cadera?",
        answer:
          "Los dos se fijan en la grasa de la cintura. El índice cintura-cadera divide entre el perímetro de la cadera y tiene umbrales distintos para mujeres y hombres, mientras que el índice cintura-altura divide entre la altura y usa las mismas franjas para todos.",
      },
    ],
    sourcesUsedFor: [
      "Las franjas del índice cintura-altura para adultos (0,4 a 0,49, 0,5 a 0,59, 0,6 o más) y su uso en adultos con un IMC inferior a 35.",
      "El mensaje al público de mantener la cintura por debajo de la mitad de la altura (un índice inferior a 0,5).",
    ],
  },
  text: {
    unit: "Unidad",
    units: { cm: "Centímetros (cm)", in: "Pulgadas (in)" },
    waist: "Perímetro de cintura",
    waistHelp: "Mide a medio camino entre el borde inferior de la costilla más baja y la parte superior del hueso de la cadera, tras una espiración normal.",
    height: "Altura",
    heightHelp: "Tu altura de pie sin zapatos, en la misma unidad que la cintura.",
    errors: {
      implausible: "Un índice cintura-altura de {ratio} es muy improbable. Comprueba que las dos medidas estén en la misma unidad.",
    },
    ratio: "Índice cintura-altura",
    caption: "Cintura {waist} ÷ altura {height}.",
    band: "Franja de referencia del NICE para adultos (solo como referencia, no es un diagnóstico)",
    bands: {
      below: "Menos de 0,4: por debajo de la franja más baja de la guía",
      healthy: "0,4 a 0,49: sin aumento del riesgo para la salud",
      increased: "0,5 a 0,59: riesgo para la salud aumentado",
      high: "0,6 o más: riesgo alto (aún más aumentado) para la salud",
    },
    waistHalf: "Cintura con un índice de 0,5 (la mitad de tu altura)",
    waistHigh: "Cintura con un índice de 0,6",
    difference: "Tu cintura comparada con la mitad de tu altura",
    notes: {
      rounding: "La franja se elige a partir del índice redondeado a dos decimales, tal como se muestra.",
      below:
        "Las franjas del NICE empiezan en 0,4. Un índice inferior puede indicar un error de medida o de unidad, o una complexión muy delgada; no es una franja propia.",
      scope:
        "El NICE usa estas franjas para adultos con un IMC inferior a 35, de cualquier sexo u origen étnico. No están pensadas para adultos con un IMC de 35 o más, para el embarazo ni para niños y jóvenes, que deben ser evaluados por un profesional clínico.",
      reference: "Esto es una comparación de referencia, no un diagnóstico. Habla con un médico o un enfermero sobre lo que significa tu resultado en tu caso.",
    },
  },
};

export default es;
