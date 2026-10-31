import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const es: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Calculadora del índice de conversión alimenticia",
    shortTitle: "Índice de conversión",
    summary:
      "Calcula el índice de conversión alimenticia (IC) de ganado, aves o peces a partir del pienso consumido y el peso ganado, con un IC ajustado por mortalidad y el coste del pienso por unidad de ganancia.",
    metaTitle: "Calculadora del índice de conversión alimenticia (IC)",
    metaDescription:
      "Calcula el IC como pienso consumido ÷ ganancia de peso vivo, con un índice ajustado por mortalidad, la eficiencia alimenticia, la ganancia por cabeza y el coste por kg o lb.",
    keywords: [
      "índice de conversión alimenticia",
      "conversión alimenticia",
      "FCR",
      "eficiencia alimenticia",
      "ganadería",
      "avicultura",
      "acuicultura",
      "coste del pienso",
    ],
    intro: [
      "El índice de conversión alimenticia (IC) indica cuánto pienso necesitan los animales para ganar una unidad de peso vivo. Un IC de 2 significa 2 kg de pienso por cada kilogramo ganado, o 2 lb por libra: la unidad se anula siempre que el pienso y el peso estén en la misma. Cuanto más bajo es el IC, más eficientemente se transforma el pienso en crecimiento.",
      "Introduce el pienso consumido durante un periodo y el peso vivo total del grupo al principio y al final. Si algunos animales murieron o se retiraron, añade su peso para obtener el IC ajustado por mortalidad, que no cuenta su pienso como desperdiciado. Con un precio del pienso y un número de animales obtienes también el coste del pienso por unidad de ganancia y la ganancia por animal.",
    ],
    howToUse: [
      "Elige kilogramos o libras y usa esa unidad para el pienso y para todos los pesos.",
      "Introduce el pienso total consumido durante el periodo y el peso vivo conjunto del grupo al principio y al final.",
      "Si murieron o se retiraron animales durante el periodo, introduce su peso conjunto para obtener el IC ajustado por mortalidad.",
      "Si quieres, introduce el precio del pienso por kg o lb y el número de animales.",
    ],
    formulas: [
      {
        title: "Ganancia de peso vivo",
        expression: "ganancia = peso final − peso inicial + peso de los animales retirados",
        explanation: "Deja vacío el peso retirado para obtener la ganancia simple de los animales que siguen presentes.",
      },
      {
        title: "Índice de conversión alimenticia",
        expression: "IC = pienso consumido ÷ ganancia de peso vivo",
        explanation: "El pienso y los pesos están en la misma unidad, así que el índice no tiene unidad.",
      },
      {
        title: "Eficiencia alimenticia",
        expression: "eficiencia alimenticia = ganancia ÷ pienso × 100 %",
        explanation: "El inverso del IC, expresado como porcentaje.",
      },
      {
        title: "Coste del pienso por unidad de ganancia",
        expression: "coste por kg (o lb) de ganancia = pienso × precio ÷ ganancia = IC × precio",
        explanation: "El coste en pienso de cada unidad de peso vivo producida.",
      },
    ],
    examples: [
      {
        title: "Un lote de cerdos durante un periodo de crecimiento",
        steps: ["Ganancia: 2.850 − 900 = 1.950 kg.", "IC: 4.200 ÷ 1.950 ≈ 2,15.", "Eficiencia alimenticia: 1.950 ÷ 4.200 ≈ 46,4 %."],
      },
      {
        title: "Una nave de pollos de engorde con bajas y precio del pienso",
        steps: [
          "Ganancia incluidas las aves retiradas: 4.510 − 1.080 + 160 = 3.590 kg.",
          "IC ajustado por mortalidad: 5.300 ÷ 3.590 ≈ 1,48 (sin las aves retiradas: 5.300 ÷ 3.430 ≈ 1,55).",
          "Coste del pienso por kg de ganancia: 5.300 × 0,21 US$ ÷ 3.590 ≈ 0,31 US$.",
        ],
      },
      {
        title: "Corderos pesados en libras",
        steps: ["Ganancia: 612 − 410 = 202 lb.", "IC: 380 ÷ 202 ≈ 1,88 lb de pienso por lb de ganancia."],
      },
    ],
    assumptions: [
      "El pienso y todos los pesos están en la misma unidad, y la cifra de pienso es lo que los animales comieron realmente (o el pienso suministrado menos el sobrante o desperdiciado, si así es como lo registras).",
      "Los pesos son pesos vivos totales del grupo. Los pesos en canal dan un índice distinto.",
      "El IC ajustado por mortalidad suma a la ganancia el peso de los animales que murieron o se retiraron. Algunos productores lo registran de otra forma, por ejemplo con el peso al inicio o excluyendo los animales eliminados, así que comprueba el método antes de comparar cifras.",
      "No se dan valores de referencia, porque los IC habituales varían mucho según la especie, la edad, la raza, la dieta y el método de registro.",
    ],
    faqs: [
      {
        question: "¿Es mejor un IC más bajo o más alto?",
        answer:
          "Más bajo. Un IC de 1,5 significa 1,5 unidades de pienso por unidad de ganancia, mientras que 2,0 significa 2 unidades. La eficiencia alimenticia, que es el inverso, funciona al revés: cuanto más alta, mejor.",
      },
      {
        question: "¿Por qué se suma el peso de los animales que murieron?",
        answer:
          "Esos animales comieron pienso y crecieron antes de morir o de ser retirados. Si se deja fuera su peso, el pienso parece menos eficiente de lo que fue, lo que mezcla las pérdidas por mortalidad con el IC. Mostrar ambas cifras mantiene separados los dos efectos.",
      },
      {
        question: "¿Importa la unidad?",
        answer:
          "No, siempre que el pienso y los pesos estén en la misma. El IC es un cociente, así que 2,15 kg/kg es lo mismo que 2,15 lb/lb. Solo el coste del pienso por unidad de ganancia depende de la unidad, porque el precio es por kg o por lb.",
      },
    ],
    sourcesUsedFor: [
      "IC = pienso total suministrado ÷ peso ganado, en la misma unidad, donde los valores más bajos indican un crecimiento más eficiente.",
      "La conversión alimenticia como el peso de pienso necesario para una unidad de ganancia, y el coste del pienso por unidad de ganancia.",
    ],
  },
  text: {
    unit: "Unidad de masa",
    units: { kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    feed: "Pienso consumido",
    feedHelp: "Pienso total consumido por el grupo durante el periodo, en la unidad elegida.",
    initial: "Peso vivo total inicial",
    initialHelp: "Peso conjunto de los animales al principio del periodo.",
    final: "Peso vivo total final",
    finalHelp: "Peso conjunto de los animales que siguen presentes al final del periodo.",
    removed: "Peso de los animales que murieron o se retiraron",
    removedHelp: "Opcional. Su peso cuando murieron o salieron del grupo. Al sumarlo se obtiene el IC ajustado por mortalidad.",
    price: "Precio del pienso por unidad de masa",
    priceHelp:
      "Opcional. El precio de 1 kg o 1 lb de pienso, en la unidad de masa elegida arriba. Se usa para el coste del pienso por unidad de ganancia.",
    head: "Número de animales",
    headHelp: "Opcional. Se usa para la ganancia por cabeza.",
    errors: {
      noGain: "La ganancia de peso vivo es cero o negativa, así que no se puede calcular el índice de conversión alimenticia. Comprueba los pesos.",
    },
    result: "Índice de conversión alimenticia (IC)",
    resultAdjusted: "Índice de conversión alimenticia (IC), ajustado por mortalidad",
    caption: "Pienso consumido ÷ ganancia de peso vivo",
    unadjusted: "IC sin los animales retirados",
    unadjustedNone: "Sin sentido (no hay ganancia en los animales restantes)",
    efficiency: "Eficiencia alimenticia (ganancia ÷ pienso)",
    gain: "Ganancia total de peso vivo",
    gainUnadjusted: "Ganancia de los animales restantes solamente",
    gainPerHead: "Ganancia por cabeza",
    feedCost: "Coste total del pienso",
    costPerGain: "Coste del pienso por {unit} de ganancia",
    notes: {
      meaning: "Un IC de {fcr} significa {fcr} {unit} de pienso por {unit} de ganancia de peso vivo. Cuanto más bajo, más eficiente.",
      adjusted:
        "El peso de los animales retirados se suma a la ganancia, de modo que su pienso no se cuenta como desperdiciado. La cifra sin ajustar se muestra a modo de comparación.",
      general:
        "Los valores habituales varían mucho según la especie, la edad, la raza, la dieta y la forma de medir el pienso y los pesos, así que compara los IC solo cuando se hayan medido de la misma manera.",
    },
  },
};

export default es;
