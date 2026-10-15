import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const es: CalculatorTranslation<DensityText> = {
  content: {
    title: "Calculadora de densidad",
    shortTitle: "Densidad",
    summary: "Calcula la densidad a partir de la masa y el volumen, o despeja la masa o el volumen, en unidades métricas o estadounidenses.",
    metaTitle: "Calculadora de densidad – Despeja cualquier valor de ρ = m/V",
    metaDescription:
      "Resuelve ρ = m/V para la densidad, la masa o el volumen. Introduce gramos, kilogramos o libras y cm³, litros, m³ o ft³; obtén kg/m³, g/cm³ y lb/ft³.",
    keywords: ["densidad", "calcular densidad", "masa y volumen", "rho", "kg/m3", "g/cm3", "lb/ft3", "densidad relativa", "peso específico"],
    intro: [
      "La densidad indica cuánta masa cabe en un volumen determinado. Un litro de agua tiene una masa de aproximadamente un kilogramo, mientras que un litro de acero tiene casi ocho.",
      "Esta calculadora reordena ρ = m/V para que puedas hallar cualquiera de los tres valores que falte. Las unidades se convierten automáticamente y el resultado también se muestra en kg/m³, g/cm³ y lb/ft³ o en las demás unidades de masa o de volumen.",
    ],
    howToUse: [
      "Elige qué quieres calcular: densidad, masa o volumen.",
      "Introduce los dos valores conocidos y elige una unidad para cada uno.",
      "En la lista de unidades del valor que buscas, elige la unidad en la que quieres el resultado.",
      "Consulta el resultado, sus equivalencias en otras unidades y la comparación con el agua.",
    ],
    formulas: [
      { title: "Densidad", expression: "ρ = m ÷ V", explanation: "La masa dividida entre el volumen que ocupa." },
      { title: "Masa", expression: "m = ρ × V", explanation: "Multiplica la densidad por el volumen." },
      { title: "Volumen", expression: "V = m ÷ ρ", explanation: "Divide la masa entre la densidad." },
      {
        title: "Factores de conversión",
        expression: "1 g/cm³ = 1000 kg/m³ ≈ 62,428 lb/ft³",
        explanation: "Basados en las definiciones exactas 1 lb = 0,45359237 kg y 1 ft³ = 0,028316846592 m³.",
      },
    ],
    examples: [
      { title: "Un bloque metálico de 810 g y 300 cm³", steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, es decir, 2700 kg/m³"] },
      { title: "Masa de 2,5 L de aceite a 0,92 g/cm³", steps: ["0,92 g/cm³ = 920 kg/m³ y 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"] },
      { title: "Volumen de 39,25 kg de acero a 7850 kg/m³", steps: ["V = 39,25 ÷ 7850 = 0,005 m³", "0,005 m³ = 5 L"] },
    ],
    assumptions: [
      "Se considera que el material es homogéneo, de modo que una sola densidad describe toda la muestra.",
      "La comparación con el agua usa 1000 kg/m³. El agua real es algo menos densa a temperatura ambiente (unos 998 kg/m³ a 20 °C).",
      "La densidad de líquidos y gases depende de la temperatura y la presión. Usa una densidad medida en tus condiciones.",
    ],
    faqs: [
      {
        question: "¿Es lo mismo 1 g/cm³ que 1 g/mL?",
        answer: "Sí. Un centímetro cúbico y un mililitro son el mismo volumen, así que las dos unidades son idénticas.",
      },
      { question: "¿Cómo convierto g/cm³ a kg/m³?", answer: "Multiplica por 1000. Por ejemplo, 2,7 g/cm³ equivalen a 2700 kg/m³." },
      {
        question: "¿Qué es la densidad relativa?",
        answer: "Es la densidad de un material dividida entre la densidad del agua. Un valor mayor que 1 significa que el material se hunde en el agua; menor que 1, que flota.",
      },
    ],
    sourcesUsedFor: [
      "Definición ρ = m/V y unidad del SI kg/m³.",
      "Factores de conversión de la libra, el pie cúbico y lb/ft³.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { density: "Densidad (ρ)", mass: "Masa (m)", volume: "Volumen (V)" },
    mass: "Masa (m)",
    massUnit: "Unidad de masa",
    massUnits: { g: "Gramos (g)", kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    volume: "Volumen (V)",
    volumeUnit: "Unidad de volumen",
    volumeUnits: { cm3: "Centímetros cúbicos (cm³ = mL)", L: "Litros (L)", m3: "Metros cúbicos (m³)", ft3: "Pies cúbicos (ft³)" },
    density: "Densidad (ρ)",
    densityUnit: "Unidad de densidad",
    densityUnits: {
      gcm3: "Gramos por centímetro cúbico (g/cm³)",
      kgm3: "Kilogramos por metro cúbico (kg/m³)",
      lbft3: "Libras por pie cúbico (lb/ft³)",
    },
    unitHelp: "Para el valor que calculas, es la unidad del resultado.",
    results: { density: "Densidad", mass: "Masa", volume: "Volumen" },
    inUnit: "En {unit}",
    relative: "Respecto al agua (1000 kg/m³)",
    floats: "Menos denso que el agua, así que flotaría en agua pura.",
    sinks: "Más denso que el agua, así que se hundiría en agua pura.",
    note: "1 cm³ equivale a 1 mL. La densidad de líquidos y gases cambia con la temperatura, y la de los gases también con la presión.",
  },
};

export default es;
