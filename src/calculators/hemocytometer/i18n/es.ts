import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const es: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Calculadora de recuento celular (hemocitómetro)",
    shortTitle: "Recuento celular",
    summary:
      "Convierte los recuentos del hemocitómetro en células por mL, con la viabilidad, el total de células vivas de la muestra y el volumen necesario para sembrar un número objetivo de células.",
    metaTitle: "Calculadora de recuento celular – Células por mL",
    metaDescription:
      "Calcula las células vivas y totales por mL a partir de recuentos en cámara de Neubauer mejorada, con el factor de dilución, la viabilidad con azul tripán y el volumen de siembra.",
    keywords: [
      "hemocitómetro",
      "cámara de Neubauer",
      "recuento celular",
      "células por ml",
      "azul tripán",
      "viabilidad celular",
      "siembra de células",
      "densidad celular",
    ],
    intro: [
      "Un hemocitómetro es un portaobjetos grueso con una cuadrícula de recuento grabada en una cámara de profundidad conocida. En una cámara de Neubauer mejorada, cada uno de los nueve cuadrados grandes mide 1 mm × 1 mm y la cámara tiene 0,1 mm de profundidad, así que el líquido sobre un cuadrado grande es 0,1 µL, o una diezmilésima de mililitro.",
      "Por eso, el número medio de células por cuadrado grande, multiplicado por 10⁴ y por la dilución que hayas aplicado, da el número de células por mL. Esta calculadora lo hace para las células vivas, suma las muertas (teñidas) para obtener el recuento total y la viabilidad, y calcula cuántas células contiene una muestra y qué volumen tomar para sembrar un número determinado de células.",
    ],
    howToUse: [
      "Cuenta las células vivas en varios cuadrados grandes, por ejemplo los cuatro de las esquinas, e introduce el total y el número de cuadrados.",
      "Si has teñido las células, por ejemplo con azul tripán, introduce también las células muertas (teñidas) contadas en los mismos cuadrados.",
      "Introduce el factor de dilución: 2 si mezclaste volúmenes iguales de células y colorante, 1 si las células no se diluyeron.",
      "Si quieres, introduce el volumen de la suspensión y el número de células que quieres sembrar.",
    ],
    formulas: [
      {
        title: "Concentración celular",
        expression: "células/mL = (células contadas ÷ cuadrados grandes contados) × factor de dilución × 10⁴",
        explanation:
          "Un cuadrado grande contiene 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL, así que el recuento por cuadrado multiplicado por 10⁴ da las células por mL.",
      },
      {
        title: "Viabilidad",
        expression: "viabilidad % = vivas ÷ (vivas + muertas) × 100",
        explanation: "La proporción de células contadas que excluyen el colorante.",
      },
      {
        title: "Células totales y volumen de siembra",
        expression: "células vivas totales = células vivas/mL × volumen; volumen de siembra = células objetivo ÷ células vivas/mL",
        explanation: "La concentración se extrapola a toda la suspensión, o se reduce al volumen que contiene las células que necesitas.",
      },
    ],
    examples: [
      {
        title: "Recuento con azul tripán de los cuatro cuadrados de las esquinas",
        steps: [
          "Media por cuadrado: 182 ÷ 4 = 45,5 células vivas.",
          "Células vivas/mL: 45,5 × 2 × 10⁴ = 910.000 = 9,1 × 10⁵.",
          "Viabilidad: 182 ÷ (182 + 14) = 92,9 %.",
          "Volumen para 1.000.000 de células: 1.000.000 ÷ 910.000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Un cultivo denso diluido 1 en 10",
        steps: ["Media por cuadrado: 95 ÷ 5 = 19 células.", "Células vivas/mL: 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Una muestra escasa y sin diluir",
        steps: [
          "Media por cuadrado: 37 ÷ 4 = 9,25 células.",
          "Células vivas/mL: 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Con solo 37 células contadas, el error de recuento por sí solo es de aproximadamente ±16 % (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "La cámara es de tipo Neubauer mejorada, con cuadrados grandes de 1 mm² y 0,1 mm de profundidad. Otras cámaras, como la de Fuchs-Rosenthal, o los recuentos en los cuadrados pequeños necesitan otro factor.",
      "Las células están bien mezcladas y la cámara se ha llenado correctamente, sin rebosar ni burbujas.",
      "Las células se distribuyen al azar, así que el recuento sigue una estadística de Poisson: el error relativo es de aproximadamente 1 ÷ √(células contadas). Los recuentos bajos son mucho menos precisos, y las diferencias entre operadores añaden más error.",
      "La viabilidad por exclusión de colorante es una estimación. Las células que excluyen el colorante no están necesariamente sanas, y el tiempo de tinción influye en el resultado.",
    ],
    faqs: [
      {
        question: "¿Por qué se multiplica por 10⁴?",
        answer:
          "Un cuadrado grande mide 1 mm de lado y la cámara tiene 0,1 mm de profundidad, así que contiene 0,1 mm³. Eso son 0,1 µL, o 10⁻⁴ mL. Dividir las células por cuadrado entre 10⁻⁴ mL equivale a multiplicarlas por 10⁴ por mL.",
      },
      {
        question: "¿Qué factor de dilución uso con azul tripán?",
        answer:
          "El volumen total dividido entre el volumen de suspensión celular. Volúmenes iguales de células y azul tripán (por ejemplo, 10 µL + 10 µL) dan un factor de dilución de 2. Si lo omites, el resultado se reduce a la mitad.",
      },
      {
        question: "¿Cuántas células debo contar?",
        answer:
          "Cuantas más células cuentes, menor es el error de recuento, que es aproximadamente 1 ÷ √(número contado). Contar unos cientos de células en varios cuadrados da un error de alrededor del 5–6 %; contar 30 da alrededor del 18 %.",
      },
    ],
    sourcesUsedFor: [
      "Células/mL = recuento medio por cuadrado grande × factor de dilución × 10⁴, y la recomendación de repetir el recuento con otra dilución fuera de unas 20–50 células por cuadrado.",
      "El error de recuento como aproximadamente la raíz cuadrada del número de células contadas, y la sugerencia de contar unos cientos de células en total.",
    ],
  },
  text: {
    live: "Células vivas (no teñidas) contadas",
    liveHelp: "El número total de células vivas en todos los cuadrados grandes que has contado.",
    dead: "Células muertas (teñidas) contadas",
    deadHelp:
      "Opcional. Células que han captado el colorante, como el azul tripán, en los mismos cuadrados. Se usa para el recuento total y la viabilidad.",
    squares: "Cuadrados grandes contados",
    squaresHelp:
      "Cada cuadrado grande de una cámara de Neubauer mejorada mide 1 mm × 1 mm × 0,1 mm de profundidad, o 0,1 µL. Normalmente se cuentan los 4 cuadrados de las esquinas.",
    dilution: "Factor de dilución",
    dilutionHelp:
      "Volumen total ÷ volumen de suspensión celular. Para volúmenes iguales de células y azul tripán (1:1), introduce 2. Introduce 1 si no se diluyó.",
    volume: "Volumen de la muestra",
    volumeHelp: "Opcional. El volumen de la suspensión celular, para obtener el número total de células vivas que contiene.",
    target: "Células necesarias para la siembra",
    targetHelp: "Opcional. El número de células vivas que quieres sembrar, para obtener el volumen de suspensión que debes tomar.",
    errors: {
      noLiveForTarget: "No se ha contado ninguna célula viva, así que no se puede calcular el volumen necesario para la siembra.",
    },
    cellsPerMl: "{value} células/mL",
    cellsPerMlUnit: "células/mL",
    cellsUnit: "células",
    result: "Células vivas por mL",
    caption: "Células vivas ÷ cuadrados contados × factor de dilución × 10⁴",
    totalPerMl: "Células totales por mL (vivas + muertas)",
    viability: "Viabilidad",
    averagePerSquare: "Media de células vivas por cuadrado grande",
    totalLive: "Células vivas en {volume} mL",
    volumeNeeded: "Volumen de suspensión para {target} células",
    volumeNeededUl: "Mismo volumen en µL",
    notes: {
      poisson:
        "Has contado {count} células en total. La estadística de recuento por sí sola da un error relativo de aproximadamente ±{cv} % (1 ÷ √recuento); contar más células lo reduce. Una recomendación habitual es contar unos cientos de células en total.",
      density:
        "La media de {average} células vivas por cuadrado está fuera del intervalo de unas 20–50 células por cuadrado que se suele recomendar para el recuento. Plantéate ajustar la dilución y volver a contar.",
      noCells: "No se ha contado ninguna célula viva, así que la concentración de células vivas es cero. Comprueba la muestra y la dilución.",
      exceedsSample: "El objetivo de siembra necesita más células vivas de las que contiene el volumen de la muestra.",
      general:
        "Se supone una cámara de Neubauer mejorada de 0,1 mm de profundidad con cuadrados grandes de 1 mm². Otras cámaras, o el recuento en cuadrados pequeños, necesitan otro factor.",
    },
  },
};

export default es;
