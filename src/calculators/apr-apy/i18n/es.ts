import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const es: CalculatorTranslation<AprApyText> = {
  content: {
    title: "Calculadora de APR a APY",
    shortTitle: "APR a APY",
    summary: "Convierte un tipo nominal anual (APR) en el rendimiento efectivo anual (APY), o al revés, para cualquier frecuencia de capitalización.",
    metaTitle: "Calculadora de APR a APY – Tipo anual efectivo",
    metaDescription:
      "Convierte APR en APY o APY en APR con capitalización anual, trimestral, mensual, diaria o continua, con una tabla que compara todas las frecuencias.",
    keywords: [
      "apr a apy",
      "apy a apr",
      "rendimiento porcentual anual",
      "tasa porcentual anual",
      "tipo anual efectivo",
      "tipo nominal",
      "frecuencia de capitalización",
      "TIN y TAE",
    ],
    intro: [
      "Los bancos de EE. UU. indican dos tipos de tasa anual. La APR es el tipo nominal: el tipo de cada periodo multiplicado por el número de periodos. La APY es el tipo efectivo: lo que crece realmente un saldo en un año una vez que los intereses generan a su vez intereses.",
      "Cuanto más a menudo se capitalizan los intereses, más se aleja la APY de la APR. Usa esta herramienta para comparar en igualdad de condiciones una cuenta de ahorro expresada como APY con un préstamo expresado como APR.",
    ],
    howToUse: [
      "Elige si conviertes de APR a APY o de APY a APR.",
      "Introduce el tipo que conoces, como porcentaje.",
      "Elige con qué frecuencia se capitalizan los intereses.",
      "Consulta el tipo convertido, el tipo aplicado en cada periodo y la tabla con las demás frecuencias.",
    ],
    formulas: [
      {
        title: "De APR a APY",
        expression: "APY = (1 + APR ÷ n)ⁿ − 1",
        explanation: "n es el número de periodos de capitalización por año y ambos tipos se expresan en decimal.",
      },
      { title: "Capitalización continua", expression: "APY = e^APR − 1", explanation: "El límite cuando n crece sin fin; e ≈ 2,71828." },
      {
        title: "De APY a APR",
        expression: "APR = n × ((1 + APY)^(1/n) − 1)",
        explanation: "La operación inversa. Con capitalización continua, APR = ln(1 + APY).",
      },
      { title: "Tipo por periodo", expression: "i = APR ÷ n", explanation: "El interés que se aplica en cada paso de capitalización." },
    ],
    examples: [
      {
        title: "APR del 6 % con capitalización mensual",
        steps: ["Tipo mensual = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, es decir, aproximadamente un 6,1678 %"],
      },
      {
        title: "APY del 5 % convertida en APR mensual",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889 %"],
      },
      {
        title: "APR del 8 % con capitalización continua",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287 %"],
      },
    ],
    assumptions: [
      "El tipo es un tipo de interés nominal que se mantiene igual todo el año, sin depósitos, retiradas ni comisiones.",
      "En los préstamos de EE. UU., la APR que se informa según la Truth in Lending Act (Regulation Z) puede incluir ciertas comisiones, así que puede ser mayor que el tipo de interés por sí solo. Esta herramienta solo convierte tipos nominales.",
      "La capitalización diaria usa 365 periodos al año. Los bancos pueden usar 360 o 366 días en sus propios cálculos.",
      "Esto no es asesoramiento financiero.",
    ],
    faqs: [
      {
        question: "¿Por qué la APY es mayor que la APR?",
        answer:
          "Cada vez que se suman los intereses, los del periodo siguiente se calculan sobre un saldo mayor. La APY tiene en cuenta ese crecimiento adicional; la APR, no. Con capitalización anual, las dos coinciden.",
      },
      {
        question: "¿Qué tipo debo comparar entre cuentas?",
        answer:
          "En el ahorro, compara APY con APY, porque ya incluye la capitalización. En los préstamos, compara la APR informada, que además recoge muchas comisiones.",
      },
      {
        question: "¿Hay mucha diferencia entre la capitalización diaria y la mensual?",
        answer: "Muy poca con los tipos habituales. Con una APR del 5 %, la capitalización mensual da una APY de alrededor del 5,116 % y la diaria, de alrededor del 5,127 %.",
      },
    ],
    sourcesUsedFor: [
      "Cómo refleja la APY (rendimiento porcentual anual) la capitalización a lo largo de un año.",
      "La aclaración de que la APR informada en un préstamo mide el coste del crédito y puede diferir del tipo de interés nominal.",
    ],
  },
  text: {
    direction: "Convertir",
    directions: { aprToApy: "De APR a APY", apyToApr: "De APY a APR" },
    rate: "Tipo",
    rateHelp: "Introduce la APR (tipo nominal anual) para obtener la APY, o la APY (tipo efectivo anual) para obtener la APR.",
    compounding: "Capitalización",
    frequencies: {
      "1": "Anual",
      "2": "Semestral",
      "4": "Trimestral",
      "12": "Mensual",
      "52": "Semanal",
      "365": "Diaria",
      continuous: "Continua",
    },
    inSentence: {
      "1": "anualmente",
      "2": "semestralmente",
      "4": "trimestralmente",
      "12": "mensualmente",
      "52": "semanalmente",
      "365": "diariamente",
      continuous: "de forma continua",
    },
    apy: "Rendimiento porcentual anual (APY)",
    apr: "Tasa porcentual anual (APR)",
    captionToApy: "Una APR del {rate} capitalizada {frequency} da este tipo efectivo anual.",
    captionToApr: "El tipo nominal que, capitalizado {frequency}, rinde una APY del {rate}.",
    periodRate: "Tipo por periodo de capitalización",
    periodsPerYear: "Periodos de capitalización por año",
    difference: "Diferencia entre APY y APR",
    tableCaption: "El mismo tipo con otras frecuencias de capitalización",
    tableColumns: { frequency: "Capitalización", apy: "APY", apr: "APR" },
    notes: {
      continuous: "La capitalización continua es el límite de capitalizar cada vez con más frecuencia; no tiene periodos separados.",
      regZ: "En los préstamos de EE. UU., la APR informada según la Regulation Z puede incluir algunas comisiones además de los intereses. Esta herramienta solo convierte tipos de interés nominales, así que no reproduce una APR con comisiones incluidas como la de un prestamista.",
    },
  },
};

export default es;
