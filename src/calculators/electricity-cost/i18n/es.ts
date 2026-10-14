import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const es: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Calculadora de coste de electricidad",
    shortTitle: "Coste de electricidad",
    summary: "Calcula cuánto cuesta usar un electrodoméstico a partir de su potencia, las horas de uso y el precio de tu electricidad.",
    metaTitle: "Calculadora de coste de electricidad – Consumo de aparatos",
    metaDescription:
      "Calcula la energía consumida en kWh y el coste de funcionamiento de cualquier aparato al día, en un periodo y al año a partir de su potencia y tu tarifa.",
    keywords: ["coste de la luz", "consumo eléctrico", "calcular consumo kWh", "consumo electrodomésticos", "precio kWh", "factura de la luz", "vatios"],
    intro: [
      "La electricidad se factura por kilovatio hora (kWh): el consumo de 1000 vatios durante una hora. Multiplica la energía consumida por el precio del kWh para obtener el coste.",
      "Encontrarás la potencia en la etiqueta del aparato y el precio en tu factura de la luz.",
    ],
    howToUse: [
      "Introduce la potencia nominal en vatios.",
      "Introduce cuántas horas al día funciona y durante cuántos días.",
      "Introduce el precio por kWh.",
      "Consulta el coste y la energía consumida.",
    ],
    formulas: [
      { title: "Energía", expression: "kWh = vatios × horas al día × días ÷ 1000", explanation: "Convierte vatios hora en kilovatios hora." },
      { title: "Coste", expression: "coste = kWh × precio por kWh", explanation: "Usa el precio de la energía de tu tarifa." },
    ],
    examples: [
      {
        title: "Un aparato de 100 W, 5 horas al día durante 30 días a 0,15 US$/kWh",
        steps: ["100 × 5 × 30 ÷ 1000 = 15 kWh", "15 × 0,15 US$ = 2,25 US$"],
      },
      {
        title: "Un calefactor de 1500 W, 1 hora al día durante 30 días a 0,20 US$/kWh",
        steps: ["1500 × 1 × 30 ÷ 1000 = 45 kWh", "45 × 0,20 US$ = 9,00 US$"],
      },
    ],
    assumptions: [
      "Supone que el aparato consume toda su potencia nominal mientras está encendido. Los termostatos, los ciclos de funcionamiento y las cargas variables suelen consumir menos.",
      "No se incluyen términos fijos, impuestos, tarifas por franjas horarias ni el consumo en espera.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      { question: "¿Qué es un kilovatio hora?", answer: "La energía que consume un aparato de 1000 vatios funcionando durante una hora." },
      {
        question: "¿Dónde encuentro la potencia de un aparato?",
        answer: "En su placa de características o en el manual. Si solo aparecen los amperios, multiplícalos por la tensión para obtener una potencia aproximada.",
      },
      {
        question: "¿Cómo puedo reducir el coste de funcionamiento?",
        answer: "Usa aparatos eficientes, reduce las horas de uso y comprueba si tu tarifa tiene precios más baratos en horas valle.",
      },
    ],
    sourcesUsedFor: ["Definición de vatio y kilovatio hora, y cómo se factura el consumo eléctrico."],
  },
  text: {
    power: "Potencia nominal",
    powerHelp: "Figura en la etiqueta, p. ej., 100 W. 1 kW equivale a 1000 W.",
    hours: "Uso diario",
    days: "Número de días",
    rate: "Precio de la electricidad por kWh",
    cost: "Coste durante {days} días",
    energy: "Energía consumida",
    perDay: "Coste por día",
    perYear: "Coste anual (365 días)",
    note: "Supone que el aparato consume su potencia nominal siempre que está encendido. El uso real suele variar y no se incluye el consumo en espera.",
  },
};

export default es;
