import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const es: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Calculadora de tasa de capitalización",
    shortTitle: "Tasa de capitalización",
    summary:
      "Calcula la tasa de capitalización (cap rate) de un inmueble en alquiler a partir de sus ingresos, la desocupación y los gastos de explotación, o su valor a partir de una tasa objetivo.",
    metaTitle: "Calculadora de tasa de capitalización – NOI y valor",
    metaDescription:
      "Calcula la tasa de capitalización de un inmueble en alquiler a partir del alquiler, la desocupación y los gastos, o estima su valor con el NOI y una tasa objetivo.",
    keywords: [
      "tasa de capitalización",
      "cap rate",
      "ingreso operativo neto",
      "NOI",
      "inmueble en alquiler",
      "método de capitalización de rentas",
      "inversión inmobiliaria",
      "valor del inmueble",
    ],
    intro: [
      "La tasa de capitalización, o cap rate, compara los ingresos que genera un inmueble con lo que vale. Es el ingreso operativo neto de un año dividido entre el valor o el precio del inmueble, expresado como porcentaje.",
      "Los inversores la usan para comparar inmuebles rápidamente, sin importar cómo se financien. Introduce el alquiler, la desocupación y los gastos corrientes para obtener la tasa de capitalización, o cambia de modo para convertir un ingreso operativo neto y una tasa objetivo en un valor indicativo.",
    ],
    howToUse: [
      "Elige si quieres calcular la tasa de capitalización o el valor, y elige la moneda.",
      "Para la tasa de capitalización, introduce el valor o el precio de venta del inmueble, el alquiler bruto anual, la previsión de desocupación y los gastos de explotación anuales.",
      "Para el valor, introduce el ingreso operativo neto y la tasa de capitalización que buscas.",
      "Consulta la tasa de capitalización o el valor, junto con el ingreso bruto efectivo, el NOI y el ratio de gastos.",
    ],
    formulas: [
      {
        title: "Ingreso bruto efectivo",
        expression: "EGI = ingreso bruto × (1 − desocupación)",
        explanation: "La desocupación es la parte de los ingresos que se pierde por unidades vacías y alquileres impagados.",
      },
      {
        title: "Ingreso operativo neto",
        expression: "NOI = EGI − gastos de explotación",
        explanation: "Los gastos de explotación no incluyen las cuotas de la hipoteca, la amortización ni el impuesto sobre la renta.",
      },
      {
        title: "Tasa de capitalización",
        expression: "tasa de capitalización = NOI ÷ valor × 100 %",
        explanation: "La rentabilidad anual que daría el inmueble a un comprador que pagara al contado, antes de impuestos.",
      },
      {
        title: "Valor a partir de una tasa de capitalización",
        expression: "valor = NOI ÷ tasa de capitalización",
        explanation: "Divide entre la tasa en forma decimal, así que 6 % es 0,06.",
      },
    ],
    examples: [
      {
        title: "Dúplex valorado en 450.000 US$",
        steps: ["EGI = 48.000 × 0,95 = 45.600 US$", "NOI = 45.600 − 16.000 = 29.600 US$", "Tasa de capitalización = 29.600 ÷ 450.000 ≈ 6,58 %"],
      },
      {
        title: "Pequeño edificio de viviendas a la venta por 720.000 US$",
        steps: ["EGI = 62.400 × 0,92 = 57.408 US$", "NOI = 57.408 − 21.500 = 35.908 US$", "Tasa de capitalización = 35.908 ÷ 720.000 ≈ 4,99 %"],
      },
      {
        title: "Valor de un local con un NOI de 41.250 US$ a una tasa de capitalización del 5,75 %",
        steps: ["Valor = 41.250 ÷ 0,0575", "≈ 717.391,30 US$"],
      },
    ],
    assumptions: [
      "La tasa de capitalización no tiene en cuenta la financiación, el impuesto sobre la renta, las mejoras de capital ni los cambios futuros del alquiler o del valor. Es una instantánea de los ingresos de un año.",
      "El resultado depende por completo de las cifras de ingresos y gastos que introduzcas. Usa gastos de explotación realistas de un año completo, incluidas la gestión y el mantenimiento aunque los hagas tú.",
      "Se admite un ingreso operativo neto negativo, que da una tasa de capitalización negativa: el inmueble no cubre sus gastos corrientes.",
      "Es una estimación, no asesoramiento de inversión ni financiero, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Qué es una buena tasa de capitalización?",
        answer:
          "No hay una única cifra buena. Las tasas de capitalización dependen de la ubicación, el tipo de inmueble, su estado y los tipos de interés. Una tasa más alta supone más ingresos para el precio, pero normalmente también más riesgo o menos crecimiento esperado.",
      },
      {
        question: "¿Por qué no se incluyen las cuotas de la hipoteca en los gastos de explotación?",
        answer:
          "La tasa de capitalización describe el inmueble, no el préstamo del comprador. Dejar fuera la financiación permite comparar inmuebles de forma justa. Para incluir el préstamo, mira la rentabilidad sobre el efectivo invertido (cash-on-cash) o el ROI.",
      },
      {
        question: "¿Por qué una tasa de capitalización más baja aumenta el valor?",
        answer:
          "El valor es el NOI dividido entre la tasa de capitalización. Con el mismo NOI de 40.000 US$, una tasa del 5 % da 800.000 US$, mientras que una del 8 % da 500.000 US$, así que los compradores que aceptan tasas más bajas pagan más.",
      },
    ],
    sourcesUsedFor: [
      "La tasa de capitalización como cociente entre el ingreso operativo neto y el valor, y valor = ingreso ÷ tasa.",
      "La relación I = R × V entre el ingreso operativo neto, la tasa de capitalización global y el valor.",
    ],
  },
  text: {
    mode: "Calcular",
    modes: { rate: "Tasa de capitalización a partir de los ingresos", value: "Valor a partir de una tasa objetivo" },
    value: "Valor o precio del inmueble",
    gross: "Ingresos brutos anuales por alquiler",
    grossHelp:
      "Todo el alquiler que el inmueble generaría en un año si estuviera totalmente alquilado, más otros ingresos como aparcamiento o lavandería.",
    vacancy: "Desocupación e impagos",
    vacancyHelp: "La parte de los ingresos brutos que esperas perder por unidades vacías y alquileres impagados.",
    expenses: "Gastos de explotación anuales",
    expensesHelp:
      "Impuesto sobre bienes inmuebles, seguro, mantenimiento, gestión, suministros que pagues tú y gastos corrientes similares. No incluyas las cuotas de la hipoteca, la amortización ni el impuesto sobre la renta.",
    noi: "Ingreso operativo neto (NOI) anual",
    noiHelp: "Ingresos tras la desocupación y los gastos de explotación, antes de las cuotas de la hipoteca y el impuesto sobre la renta.",
    targetRate: "Tasa de capitalización objetivo",
    errors: {
      noiPositive: "El ingreso operativo neto debe ser mayor que 0 para calcular un valor.",
    },
    capRate: "Tasa de capitalización",
    capCaption: "Ingreso operativo neto de {noi} sobre un valor de {value}.",
    propertyValue: "Valor indicativo del inmueble",
    valueCaption: "{noi} de ingreso operativo neto capitalizados al {rate}.",
    egi: "Ingreso bruto efectivo",
    noiResult: "Ingreso operativo neto (NOI)",
    monthlyNoi: "NOI mensual",
    expenseRatio: "Ratio de gastos de explotación (sobre el ingreso bruto efectivo)",
    grm: "Multiplicador del alquiler bruto (valor ÷ ingreso bruto)",
    valuePerPoint: "Cambio de valor si la tasa de capitalización es 1 punto más baja",
    notes: {
      negative:
        "Los gastos de explotación superan los ingresos tras la desocupación, así que el NOI y la tasa de capitalización son negativos: el inmueble no cubre sus gastos corrientes.",
      financing: "La tasa de capitalización no tiene en cuenta la financiación, el impuesto sobre la renta ni los cambios futuros de valor.",
    },
  },
};

export default es;
