import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const es: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Calculadora de energía cinética",
    shortTitle: "Energía cinética",
    summary: "Calcula la energía cinética de un objeto en movimiento a partir de su masa y su velocidad.",
    metaTitle: "Calculadora de energía cinética – Ec = ½mv²",
    metaDescription:
      "Calcula la energía cinética a partir de la masa y la velocidad, en kg o lb y en m/s, km/h o mph. Resultados en julios, kilojulios y vatios hora.",
    keywords: ["energía cinética", "calcular energía cinética", "fórmula energía cinética", "julios", "masa y velocidad", "física", "1/2 mv2"],
    intro: [
      "La energía cinética es la energía que tiene un objeto por estar en movimiento. Crece con el cuadrado de la velocidad, así que duplicar la velocidad cuadruplica la energía.",
      "Introduce la masa y la velocidad en las unidades que tengas.",
    ],
    howToUse: [
      "Introduce la masa y elige kilogramos o libras.",
      "Introduce la velocidad y elige m/s, km/h o mph.",
      "Consulta la energía cinética en julios y otras unidades.",
    ],
    formulas: [
      { title: "Energía cinética", expression: "Ec = ½ × m × v²", explanation: "m en kilogramos, v en metros por segundo y Ec en julios." },
    ],
    examples: [
      {
        title: "1000 kg a 20 m/s",
        steps: ["Ec = 0,5 × 1000 × 20²", "= 200.000 J"],
      },
      {
        title: "Coche de 1500 kg a 100 km/h",
        steps: ["100 km/h ≈ 27,78 m/s", "Ec = 0,5 × 1500 × 27,78² ≈ 578.704 J"],
      },
    ],
    assumptions: [
      "Usa la mecánica clásica, precisa a velocidades muy inferiores a la de la luz.",
      "No se incluye la energía de rotación (por ejemplo, la de las ruedas).",
    ],
    faqs: [
      {
        question: "¿Por qué influye más la velocidad que la masa?",
        answer: "La energía cinética depende del cuadrado de la velocidad. Pasar de 50 a 100 km/h cuadruplica la energía.",
      },
      {
        question: "¿En qué unidad se mide la energía cinética?",
        answer: "En julios (J). Un julio equivale a un kilogramo por metro al cuadrado entre segundo al cuadrado (kg·m²/s²).",
      },
      {
        question: "¿Puede ser negativa la energía cinética?",
        answer: "No. La masa es positiva y la velocidad se eleva al cuadrado, así que la energía cinética es cero o positiva.",
      },
    ],
    sourcesUsedFor: ["Definición Ec = ½mv².", "Factores de conversión exactos para libras, km/h y mph."],
  },
  text: {
    mass: "Masa",
    massUnit: "Unidad de masa",
    massUnits: { kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    velocity: "Velocidad",
    velocityUnit: "Unidad de velocidad",
    velocityUnits: { "m/s": "Metros por segundo (m/s)", "km/h": "Kilómetros por hora (km/h)", mph: "Millas por hora (mph)" },
    energy: "Energía cinética",
    kj: "En kilojulios",
    wh: "En vatios hora",
    mps: "Velocidad en m/s",
    note: "Energía cinética clásica (no relativista), precisa para velocidades cotidianas.",
  },
};

export default es;
