import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentYieldText } from "../text/en";

const es: CalculatorTranslation<PercentYieldText> = {
  content: {
    title: "Calculadora de rendimiento porcentual",
    shortTitle: "Rendimiento porcentual",
    summary:
      "Calcula el rendimiento porcentual de una reacción a partir del rendimiento real y el teórico, o el rendimiento teórico a partir de los moles y una ecuación ajustada.",
    metaTitle: "Calculadora de rendimiento porcentual – Real y teórico",
    metaDescription:
      "Calcula el rendimiento porcentual con el rendimiento real y el teórico, u obtén el teórico con los moles del reactivo limitante, los coeficientes y una fórmula.",
    keywords: [
      "rendimiento porcentual",
      "rendimiento teórico",
      "rendimiento real",
      "reactivo limitante",
      "estequiometría",
      "rendimiento de una reacción",
      "laboratorio de química",
    ],
    intro: [
      "El rendimiento teórico es la cantidad de producto que predice una ecuación ajustada cuando el reactivo limitante se consume por completo. El rendimiento real es lo que obtienes. El rendimiento porcentual compara ambos y muestra la eficiencia de la reacción y del aislamiento del producto.",
      "Si ya conoces el rendimiento teórico, introduce las dos masas. Si no, introduce los moles del reactivo limitante, los coeficientes de la ecuación ajustada y la fórmula o la masa molar del producto, y la calculadora obtendrá primero el rendimiento teórico.",
    ],
    howToUse: [
      "Elige si conoces el rendimiento teórico o quieres calcularlo a partir de los moles.",
      "Elige la unidad de masa e introduce el rendimiento real que has obtenido.",
      "Introduce el rendimiento teórico, o los moles del reactivo limitante, los dos coeficientes y la fórmula del producto (o su masa molar).",
      "Consulta el rendimiento porcentual, el rendimiento teórico y la masa perdida.",
    ],
    formulas: [
      {
        title: "Rendimiento porcentual",
        expression: "rendimiento porcentual = rendimiento real ÷ rendimiento teórico × 100 %",
        explanation: "Los dos rendimientos deben estar en la misma unidad, de modo que las unidades se anulan.",
      },
      {
        title: "Rendimiento teórico a partir de los moles",
        expression: "teórico (g) = n(limitante) × (coeficiente del producto ÷ coeficiente del reactivo) × M(producto)",
        explanation: "La relación de coeficientes convierte los moles del reactivo limitante en moles de producto; la masa molar convierte los moles en gramos.",
      },
      {
        title: "Masa perdida",
        expression: "pérdida = rendimiento teórico − rendimiento real",
        explanation: "También se muestra como fracción del rendimiento teórico, que equivale al 100 % menos el rendimiento porcentual.",
      },
    ],
    examples: [
      {
        title: "Cristales obtenidos en una síntesis de laboratorio",
        steps: ["Rendimiento porcentual = 4,25 g ÷ 5,6 g × 100 %", "≈ 75,89 %", "Masa perdida = 5,6 − 4,25 = 1,35 g"],
      },
      {
        title: "Aspirina a partir de 0,0200 mol de ácido salicílico",
        steps: [
          "Un ácido salicílico da una aspirina, así que la relación es 1 ÷ 1.",
          "M(C9H8O4) = 9 × 12,011 + 8 × 1,008 + 4 × 15,999 = 180,159 g/mol",
          "Rendimiento teórico = 0,0200 × 180,159 ≈ 3,6032 g",
          "Rendimiento porcentual = 2,95 ÷ 3,6032 × 100 % ≈ 81,87 %",
        ],
      },
      {
        title: "Amoniaco cuando el hidrógeno es el reactivo limitante",
        steps: [
          "N₂ + 3 H₂ → 2 NH₃, así que 0,90 mol H₂ × 2 ÷ 3 = 0,60 mol NH₃",
          "Rendimiento teórico = 0,60 × 17,031 = 10,2186 g",
          "Rendimiento porcentual = 8,1 ÷ 10,2186 × 100 % ≈ 79,27 %",
        ],
      },
    ],
    assumptions: [
      "Se conoce el reactivo limitante. Si no estás seguro, calcula el producto que podría formar cada reactivo; el que da menos producto es el limitante.",
      "La ecuación está ajustada y da un único producto principal. No se cuentan los subproductos.",
      "Las masas molares calculadas a partir de una fórmula usan los pesos atómicos estándar abreviados de la IUPAC. Los resultados solo son tan precisos como las masas que midas.",
      "El rendimiento real debe ser el del producto seco y purificado. El disolvente o las impurezas hacen que el rendimiento parezca mayor de lo que es.",
    ],
    faqs: [
      {
        question: "¿Puede el rendimiento porcentual superar el 100 %?",
        answer: "No para un producto puro y seco, porque la masa no se puede crear. Un resultado superior al 100 % suele indicar que el producto sigue húmedo, contiene impurezas o reactivo sin reaccionar, o que una masa se midió o anotó mal.",
      },
      {
        question: "¿Por qué mi rendimiento es menor de lo esperado?",
        answer: "Las reacciones secundarias consumen reactivos, muchas reacciones se detienen antes de completarse y siempre se pierde algo de producto al filtrar, trasvasar o recristalizar. Los rendimientos muy por debajo del 100 % son normales, sobre todo en síntesis de varias etapas.",
      },
      {
        question: "¿Uso moles o gramos?",
        answer: "El rendimiento porcentual en sí compara masas (o moles) del producto, y la unidad se anula. Para calcular el rendimiento teórico necesitas moles, porque los coeficientes de una ecuación ajustada relacionan cantidades en moles, no en gramos.",
      },
    ],
    sourcesUsedFor: ["Las definiciones de rendimiento teórico, real y porcentual, y del reactivo limitante."],
  },
  text: {
    mode: "Rendimiento teórico",
    modes: { direct: "Lo conozco", stoichiometry: "Calcularlo a partir de los moles" },
    unit: "Unidad de masa",
    actual: "Rendimiento real",
    actualHelp: "La masa de producto que has obtenido realmente (idealmente, seco y puro).",
    theoretical: "Rendimiento teórico",
    theoreticalHelp: "La masa de producto que predice la ecuación ajustada, en la misma unidad que el rendimiento real.",
    moles: "Moles del reactivo limitante",
    molesHelp: "El reactivo que se agota primero. Divide su masa entre su masa molar para obtener los moles.",
    reactantCoef: "Coeficiente del reactivo limitante",
    productCoef: "Coeficiente del producto",
    coefHelp: "De la ecuación ajustada. En N₂ + 3 H₂ → 2 NH₃, el H₂ tiene 3 y el NH₃ tiene 2.",
    massSource: "Masa molar del producto a partir de",
    massSources: { formula: "Fórmula química", molarMass: "Valor de masa molar" },
    formula: "Fórmula del producto",
    formulaHelp:
      "Los símbolos de los elementos distinguen mayúsculas y minúsculas, p. ej., C9H8O4 o Ca(OH)2. La masa molar se calcula con los pesos atómicos estándar.",
    molarMass: "Masa molar del producto",
    formulaErrors: {
      empty: "Introduce una fórmula química.",
      tooLong: "La fórmula es demasiado larga. Usa como máximo 200 caracteres.",
      invalidChar:
        "Carácter no válido «{token}» en la posición {position}. Usa solo símbolos de elementos, números, paréntesis y puntos de hidrato.",
      lowercase:
        "Minúscula inesperada «{token}» en la posición {position}. Los símbolos de los elementos empiezan por mayúscula, p. ej., Na o Cl.",
      unknownElement: "Símbolo de elemento desconocido «{token}» en la posición {position}.",
      noStandardWeight: "{token} (posición {position}) no tiene peso atómico estándar, así que no se puede calcular su masa molar.",
      unclosed: "Paréntesis desequilibrados: el «{token}» de la posición {position} nunca se cierra.",
      unexpectedClose: "Paréntesis desequilibrados: el «{token}» de la posición {position} no tiene paréntesis de apertura correspondiente.",
      mismatched: "Paréntesis que no coinciden: el «{token}» de la posición {position} no corresponde al paréntesis que cierra.",
      emptyGroup: "El grupo entre paréntesis que empieza en la posición {position} está vacío.",
      zeroCount: "El subíndice de la posición {position} es cero. Los subíndices deben ser números enteros iguales o mayores que 1.",
      misplacedNumber: "El número de la posición {position} no va unido a ningún elemento ni grupo.",
      misplacedDot: "El punto de hidrato de la posición {position} debe ir entre dos partes de la fórmula, p. ej., CuSO4·5H2O.",
      tooManyAtoms: "La fórmula tiene demasiados átomos. Usa como máximo 1.000.000 de átomos en total.",
    },
    result: "Rendimiento porcentual",
    caption: "Rendimiento real ÷ rendimiento teórico × 100",
    theoreticalResult: "Rendimiento teórico",
    productMoles: "Moles teóricos de producto",
    molarMassUsed: "Masa molar del producto usada",
    loss: "Masa perdida (teórico − real)",
    excess: "Masa por encima del rendimiento teórico",
    lossPercent: "Fracción perdida del rendimiento teórico",
    excessPercent: "Fracción por encima del rendimiento teórico",
    notes: {
      over100:
        "Un rendimiento superior al 100 % no es físicamente posible para un producto puro y seco. Suele indicar que el producto sigue húmedo o contiene impurezas o restos de reactivos, o que una masa o cantidad se midió mal.",
      zero: "No se obtuvo producto, así que el rendimiento es del 0 %.",
      general:
        "Las razones habituales de un rendimiento inferior al 100 % son las reacciones secundarias, las reacciones que no llegan a completarse y el producto perdido al trasvasar, filtrar o purificar.",
    },
  },
};

export default es;
