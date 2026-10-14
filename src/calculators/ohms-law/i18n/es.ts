import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const es: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Calculadora de la ley de Ohm",
    shortTitle: "Ley de Ohm",
    summary: "Calcula la tensión, la corriente, la resistencia y la potencia a partir de dos valores cualesquiera de V, I y R.",
    metaTitle: "Calculadora de la ley de Ohm – Tensión, corriente y resistencia",
    metaDescription:
      "Usa la ley de Ohm para calcular la tensión, la corriente o la resistencia a partir de los otros dos valores, además de la potencia disipada, con fórmulas y ejemplos.",
    keywords: ["ley de ohm", "calcular resistencia", "voltaje", "intensidad de corriente", "potencia eléctrica", "voltios amperios ohmios"],
    intro: [
      "La ley de Ohm relaciona la tensión en bornes de una resistencia, la corriente que la atraviesa y su resistencia: V = I × R.",
      "Introduce dos valores cualesquiera para obtener el tercero, junto con la potencia que disipa el componente.",
    ],
    howToUse: [
      "Elige qué dos valores conoces.",
      "Introdúcelos en voltios, amperios u ohmios.",
      "Consulta el valor que falta y la potencia en vatios.",
    ],
    formulas: [
      { title: "Ley de Ohm", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V en voltios, I en amperios, R en ohmios." },
      { title: "Potencia", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Potencia en vatios." },
    ],
    examples: [
      { title: "12 V en una resistencia de 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A a través de 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "Se aplica a componentes óhmicos cuya resistencia no varía con la corriente.",
      "En circuitos de corriente alterna con reactancia (condensadores, bobinas), usa la impedancia.",
      "Trabajar con circuitos a tensión de red es peligroso; cumple la normativa eléctrica local y recurre a un electricista cualificado.",
    ],
    faqs: [
      { question: "¿Qué dice la ley de Ohm?", answer: "La corriente que atraviesa un conductor es proporcional a la tensión entre sus extremos: V = I × R." },
      { question: "¿Cómo calculo la potencia a partir de la corriente y la resistencia?", answer: "P = I² × R. Una corriente de 2 A a través de 10 Ω disipa 40 W." },
      {
        question: "¿Se aplica la ley de Ohm a los LED?",
        answer: "No directamente. Los LED no son lineales, así que usa su tensión directa y calcula una resistencia en serie.",
      },
    ],
    sourcesUsedFor: ["La ley de Ohm y sus límites.", "Fórmulas de la potencia P = IV = I²R = V²/R."],
  },
  text: {
    known: "Conozco",
    knownOptions: { VR: "Tensión y resistencia", VI: "Tensión y corriente", IR: "Corriente y resistencia" },
    voltage: "Tensión (V)",
    current: "Corriente (I)",
    resistance: "Resistencia (R)",
    currentOut: "Corriente (I = V ÷ R)",
    resistanceOut: "Resistencia (R = V ÷ I)",
    voltageOut: "Tensión (V = I × R)",
    power: "Potencia (P = V × I)",
    voltageShort: "Tensión",
    currentShort: "Corriente",
    resistanceShort: "Resistencia",
    note: "Se aplica a componentes óhmicos (lineales) y circuitos de corriente continua, o a valores eficaces en cargas de corriente alterna puramente resistivas.",
  },
};

export default es;
