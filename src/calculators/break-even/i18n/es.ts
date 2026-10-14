import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const es: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Calculadora del punto de equilibrio",
    shortTitle: "Punto de equilibrio",
    summary: "Averigua cuántas unidades necesitas vender para cubrir los costes fijos y cuáles son los ingresos de equilibrio.",
    metaTitle: "Calculadora del punto de equilibrio – Unidades e ingresos",
    metaDescription:
      "Calcula tu punto de equilibrio en unidades e ingresos a partir de los costes fijos, el precio por unidad y el coste variable unitario, con el margen de contribución.",
    keywords: ["punto de equilibrio", "umbral de rentabilidad", "margen de contribución", "costes fijos", "costes variables", "punto muerto"],
    intro: [
      "El punto de equilibrio es el nivel en el que los ingresos totales igualan a los costes totales, de modo que no hay ni beneficios ni pérdidas.",
      "Cada unidad vendida aporta su precio menos su coste variable a la cobertura de los costes fijos. Una vez cubiertos, el resto de las ventas es beneficio.",
    ],
    howToUse: [
      "Introduce los costes fijos del periodo.",
      "Introduce el precio de venta por unidad.",
      "Introduce el coste variable por unidad.",
      "Consulta las unidades y los ingresos necesarios para alcanzar el punto de equilibrio.",
    ],
    formulas: [
      { title: "Unidades de equilibrio", expression: "unidades = costes fijos ÷ (precio − coste variable)", explanation: "El denominador es el margen de contribución por unidad." },
      { title: "Ingresos de equilibrio", expression: "ingresos = unidades × precio", explanation: "Equivale a costes fijos ÷ ratio de margen de contribución." },
    ],
    examples: [
      {
        title: "10.000 US$ de costes fijos, precio de 50 US$, coste variable de 30 US$",
        steps: ["Contribución = 50 US$ − 30 US$ = 20 US$", "Unidades = 10.000 ÷ 20 = 500"],
      },
      {
        title: "2500 US$ de costes fijos, precio de 12 US$, coste variable de 4,50 US$",
        steps: ["Contribución = 7,50 US$", "Unidades = 2500 ÷ 7,5 ≈ 333,33, es decir, 334 unidades"],
      },
    ],
    assumptions: [
      "El precio y el coste variable por unidad se mantienen constantes con cualquier volumen.",
      "Los costes fijos corresponden al mismo periodo que las ventas que planificas.",
      "No se incluyen impuestos ni costes de financiación, salvo que los sumes a los costes fijos.",
    ],
    faqs: [
      {
        question: "¿Qué es el margen de contribución?",
        answer: "El precio menos el coste variable por unidad: lo que cada venta aporta a los costes fijos y al beneficio.",
      },
      { question: "¿Y si el coste variable es mayor que el precio?", answer: "Cada venta pierde dinero, así que con ese precio nunca alcanzarás el punto de equilibrio." },
      {
        question: "¿Cómo calculo las unidades para un beneficio objetivo?",
        answer: "Suma el beneficio objetivo a los costes fijos y divide entre el margen de contribución.",
      },
    ],
    sourcesUsedFor: ["Análisis coste-volumen-beneficio y fórmulas del punto de equilibrio."],
  },
  text: {
    fixed: "Costes fijos",
    fixedHelp: "Costes que no cambian con el volumen, como el alquiler y los salarios.",
    price: "Precio por unidad",
    variable: "Coste variable por unidad",
    variableHelp: "Materiales, embalaje y otros costes por unidad.",
    variableTooHigh: "El coste variable debe ser menor que el precio; si no, nunca alcanzarás el punto de equilibrio.",
    units: "Volumen de equilibrio",
    unitsSuffix: "unidades",
    caption: "Redondea hacia arriba a {count} unidades enteras.",
    revenue: "Ingresos de equilibrio",
    contribution: "Margen de contribución por unidad",
    ratio: "Ratio de margen de contribución",
  },
};

export default es;
