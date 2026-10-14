import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const es: CalculatorTranslation<RoiText> = {
  content: {
    title: "Calculadora de ROI",
    shortTitle: "ROI",
    summary: "Mide el retorno de la inversión en porcentaje, con la ganancia o pérdida neta y una tasa anualizada opcional.",
    metaTitle: "Calculadora de ROI – Retorno de la inversión y ROI anualizado",
    metaDescription:
      "Calcula el retorno de la inversión a partir del importe invertido y el obtenido. Consulta la ganancia o pérdida neta, el ROI total y el ROI anualizado.",
    keywords: ["retorno de la inversión", "calcular roi", "rentabilidad de una inversión", "roi anualizado", "beneficio de la inversión", "tasa de crecimiento anual compuesta"],
    intro: [
      "El retorno de la inversión (ROI) compara lo que recuperas con lo que inviertes. Es una forma rápida de comparar inversiones, proyectos o compras de distinto tamaño.",
      "Añade cuánto tiempo mantuviste la inversión para ver el ROI anualizado, que permite comparar rentabilidades obtenidas en plazos distintos.",
    ],
    howToUse: [
      "Introduce el importe total invertido, incluidas las comisiones que pagaste al comprar.",
      "Introduce el importe obtenido: el valor final o el total recibido, incluido el importe original.",
      "Si quieres, introduce el número de años que mantuviste la inversión.",
      "Consulta el ROI total, la ganancia o pérdida neta y el ROI anualizado.",
    ],
    formulas: [
      {
        title: "Retorno de la inversión",
        expression: "ROI = (importe obtenido − importe invertido) ÷ importe invertido × 100",
        explanation: "Un ROI positivo es una ganancia y uno negativo, una pérdida.",
      },
      {
        title: "ROI anualizado",
        expression: "ROI anualizado = ((importe obtenido ÷ importe invertido)^(1 ÷ años) − 1) × 100",
        explanation: "Es la tasa anual constante con la que el importe invertido se convertiría en el importe obtenido durante el periodo; también se conoce como TCAC (CAGR).",
      },
    ],
    examples: [
      {
        title: "10.000 US$ pasan a 12.500 US$ en 3 años",
        steps: ["Ganancia neta = 12.500 US$ − 10.000 US$ = 2500 US$", "ROI = 2500 US$ ÷ 10.000 US$ × 100 = 25 %", "Anualizado = (1,25^(1/3) − 1) × 100 ≈ 7,72 %"],
      },
      {
        title: "5000 US$ bajan a 4200 US$",
        steps: ["Pérdida neta = 4200 US$ − 5000 US$ = −800 US$", "ROI = −800 US$ ÷ 5000 US$ × 100 = −16 %"],
      },
    ],
    assumptions: [
      "Los impuestos, comisiones, dividendos y otros flujos de caja solo se incluyen si los sumas a los importes introducidos.",
      "El ROI anualizado supone un crecimiento compuesto a una tasa constante durante el periodo. No tiene en cuenta el momento de las aportaciones ni de las retiradas.",
      "Elegir una moneda solo cambia el formato. No se aplica ningún tipo de cambio.",
      "Las rentabilidades pasadas no garantizan resultados futuros. Esta calculadora no ofrece asesoramiento financiero.",
    ],
    faqs: [
      {
        question: "¿Qué se considera un buen ROI?",
        answer:
          "Depende del riesgo, del plazo y de las alternativas disponibles. Cuando los periodos de inversión son distintos, compara el ROI anualizado en lugar del ROI total.",
      },
      {
        question: "¿Qué diferencia hay entre el ROI y el ROI anualizado?",
        answer:
          "El ROI es la rentabilidad total de todo el periodo. El ROI anualizado la convierte en una tasa anual equivalente. Una rentabilidad del 25 % en 3 años equivale a un 7,72 % anual aproximadamente.",
      },
      {
        question: "¿Debo incluir comisiones y dividendos?",
        answer: "Sí, para obtener una cifra precisa. Suma las comisiones de compra al importe invertido y los dividendos o intereses cobrados al importe obtenido.",
      },
      {
        question: "¿Puede ser negativo el ROI?",
        answer: "Sí. Si recuperas menos de lo que invertiste, el ROI es negativo. El ROI más bajo posible es −100 %, cuando no recuperas nada.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Importe invertido",
    investedHelp: "Coste total de la inversión.",
    finalValue: "Importe obtenido",
    finalValueHelp: "Valor final o total recibido, incluido el importe original.",
    years: "Duración de la inversión (opcional)",
    yearsHelp: "Añade los años de inversión para ver el ROI anualizado.",
    primary: "Retorno de la inversión",
    gainCaption: "Ganancia total respecto al importe invertido.",
    lossCaption: "Pérdida total respecto al importe invertido.",
    net: "Ganancia o pérdida neta",
    annualized: "ROI anualizado",
    addLength: "Añade la duración de la inversión",
    note: "Este ROI no tiene en cuenta impuestos, comisiones ni el momento de los flujos de caja intermedios, salvo que estén incluidos en los importes.",
  },
};

export default es;
