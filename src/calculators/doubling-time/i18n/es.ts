import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const es: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Calculadora de tiempo de duplicación",
    shortTitle: "Tiempo de duplicación",
    summary: "Calcula el tiempo de duplicación (tiempo de generación) y la tasa de crecimiento de una población con crecimiento exponencial.",
    metaTitle: "Calculadora de tiempo de duplicación – Generación y crecimiento",
    metaDescription:
      "Calcula el tiempo de duplicación, las generaciones y la tasa de crecimiento de una población, como un cultivo bacteriano, a partir de los recuentos inicial y final.",
    keywords: ["tiempo de duplicación", "tiempo de generación", "crecimiento bacteriano", "crecimiento exponencial", "tasa de crecimiento", "biología"],
    intro: [
      "Durante el crecimiento exponencial, una población se duplica a un ritmo constante. El tiempo de duplicación (o de generación) es lo que tarda cada duplicación.",
      "Introduce los recuentos inicial y final y el tiempo transcurrido entre ambos.",
    ],
    howToUse: [
      "Introduce el recuento inicial.",
      "Introduce el recuento final, que debe ser mayor.",
      "Introduce el tiempo transcurrido y elige la unidad.",
      "Consulta el tiempo de duplicación, las generaciones y la tasa de crecimiento.",
    ],
    formulas: [
      { title: "Generaciones", expression: "n = log₂(N ÷ N₀)", explanation: "El número de duplicaciones necesarias para pasar de N₀ a N." },
      { title: "Tiempo de duplicación", expression: "g = t ÷ n", explanation: "El tiempo transcurrido dividido entre el número de generaciones." },
      { title: "Constante de crecimiento", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Se usa en N = N₀ × e^(k·t)." },
    ],
    examples: [
      {
        title: "De 1000 a 64.000 células en 6 horas",
        steps: ["N ÷ N₀ = 64, así que n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 hora"],
      },
      {
        title: "De 500 a 2000 en 90 minutos",
        steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minutos"],
      },
    ],
    assumptions: [
      "Supone un crecimiento exponencial constante, como la fase logarítmica de un cultivo; no se modelan las fases de latencia, estacionaria ni de muerte.",
      "Los recuentos pueden ser células, unidades formadoras de colonias, medidas indirectas de densidad óptica o cualquier magnitud que crezca exponencialmente.",
    ],
    faqs: [
      {
        question: "¿Qué es el tiempo de generación?",
        answer: "El tiempo que tarda una población en duplicarse; en E. coli suele rondar los 20 minutos en condiciones ideales de laboratorio.",
      },
      {
        question: "¿Por qué se usan logaritmos?",
        answer: "El crecimiento exponencial multiplica la población por 2 en cada generación, así que log₂ cuenta las duplicaciones.",
      },
      {
        question: "¿Sirve para el dinero o para poblaciones humanas?",
        answer: "Las matemáticas son las mismas para cualquier crecimiento exponencial constante, pero las poblaciones reales rara vez crecen a un ritmo constante.",
      },
    ],
    sourcesUsedFor: ["Tiempo de generación y crecimiento exponencial de las poblaciones bacterianas."],
  },
  text: {
    initial: "Recuento inicial (N₀)",
    final: "Recuento final (N)",
    time: "Tiempo transcurrido",
    unit: "Unidad de tiempo",
    units: { minutes: "Minutos", hours: "Horas", days: "Días" },
    unitWords: { minutes: "minutos", hours: "horas", days: "días" },
    perUnit: { minutes: "por minuto", hours: "por hora", days: "por día" },
    notGrowth: "Para que haya crecimiento, el recuento final debe ser mayor que el inicial.",
    doubling: "Tiempo de duplicación",
    generations: "Número de duplicaciones (generaciones)",
    rate: "Constante de crecimiento (k)",
    fold: "Factor de aumento (N ÷ N₀)",
    note: "Supone un crecimiento exponencial constante durante todo el periodo, como en la fase logarítmica de un cultivo bacteriano.",
  },
};

export default es;
