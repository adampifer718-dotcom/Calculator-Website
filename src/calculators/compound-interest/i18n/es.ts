import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const es: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Calculadora de interés compuesto",
    shortTitle: "Interés compuesto",
    summary: "Descubre cómo crece un depósito con interés compuesto, con una tabla del saldo año a año.",
    metaTitle: "Calculadora de interés compuesto – Valor futuro",
    metaDescription:
      "Calcula el interés compuesto y el valor futuro de un depósito con capitalización anual, trimestral, mensual o diaria, además de una tabla del saldo año a año.",
    keywords: ["interés compuesto", "calcular interés compuesto", "valor futuro", "ahorro", "TAE", "rentabilidad inversión"],
    intro: [
      "Con el interés compuesto se generan intereses sobre los intereses anteriores, además de sobre el depósito inicial, así que el crecimiento se acelera con el tiempo.",
      "Introduce un depósito, un tipo de interés, un plazo y una frecuencia de capitalización para ver el valor futuro, los intereses obtenidos y el saldo de cada año.",
    ],
    howToUse: [
      "Introduce el depósito inicial.",
      "Introduce el tipo de interés anual y el número de años.",
      "Elige con qué frecuencia se capitalizan los intereses.",
      "Consulta el valor futuro, los intereses obtenidos y la tasa anual efectiva.",
    ],
    formulas: [
      {
        title: "Valor futuro",
        expression: "A = P × (1 + r ÷ n)^(n × t)",
        explanation: "P es el depósito, r el tipo anual en decimal, n los periodos de capitalización por año y t los años.",
      },
      { title: "Tasa anual efectiva", expression: "TAE = (1 + r ÷ n)ⁿ − 1", explanation: "El tipo equivalente con una sola capitalización al año, conocido como TAE." },
    ],
    examples: [
      { title: "10.000 US$ al 5 % con capitalización mensual durante 10 años", steps: ["A = 10.000 × (1 + 0,05 ÷ 12)^120", "≈ 16.470,09 US$"] },
      { title: "1000 US$ al 10 % con capitalización anual durante 2 años", steps: ["A = 1000 × 1,1²", "= 1210 US$"] },
    ],
    assumptions: [
      "El tipo se mantiene fijo y no hay más depósitos, retiradas, impuestos ni comisiones.",
      "Los tipos pasados o anunciados no garantizan rentabilidades futuras. Esto no es asesoramiento financiero.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre el interés simple y el compuesto?",
        answer: "El interés simple se paga solo sobre el depósito inicial. El interés compuesto se paga también sobre los intereses ya obtenidos.",
      },
      {
        question: "¿Ayuda capitalizar con más frecuencia?",
        answer: "Sí, un poco. Con el mismo tipo nominal, la capitalización mensual da una tasa efectiva mayor que la anual.",
      },
      {
        question: "¿Qué es la regla del 72?",
        answer: "Divide 72 entre el tipo anual para estimar los años que tarda en duplicarse el dinero. Al 6 %, el dinero se duplica en unos 12 años.",
      },
    ],
    sourcesUsedFor: ["Fórmulas del interés compuesto y del valor futuro."],
  },
  text: {
    principal: "Depósito inicial",
    rate: "Tipo de interés anual",
    years: "Plazo",
    frequency: "Capitalización",
    frequencies: { "1": "Anual", "2": "Semestral", "4": "Trimestral", "12": "Mensual", "365": "Diaria" },
    future: "Valor futuro",
    interest: "Intereses obtenidos",
    effective: "Tasa anual efectiva",
    tableCaption: "Saldo al final de cada año",
    tableColumns: { year: "Año", balance: "Saldo", interest: "Intereses acumulados" },
    note: "Supone un tipo fijo, sin más depósitos ni retiradas y sin impuestos ni comisiones.",
  },
};

export default es;
