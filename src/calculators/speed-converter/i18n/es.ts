import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const es: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Calculadora de conversión de velocidad",
    shortTitle: "Velocidad",
    summary: "Convierte una velocidad entre metros por segundo, kilómetros por hora, millas por hora, pies por segundo, nudos y centímetros por segundo.",
    metaTitle: "Calculadora de conversión de velocidad – km/h, mph y nudos",
    metaDescription:
      "Convierte velocidades entre km/h, mph, m/s, ft/s, nudos y cm/s con factores exactos, y consulta tu valor en todas las unidades a la vez en una sola tabla.",
    keywords: ["conversor de velocidad", "km/h a mph", "mph a km/h", "m/s a km/h", "nudos a km/h", "pies por segundo", "unidades de velocidad"],
    intro: [
      "Las velocidades aparecen en muchas unidades: las señales de tráfico usan km/h o mph, los problemas de física usan m/s, pilotos y navegantes usan nudos y en el laboratorio pueden usarse cm/s. Este conversor pasa un valor de una de estas unidades a otra y lo muestra en las seis a la vez.",
      "Cada unidad equivale a un número fijo de metros por segundo, así que la conversión es una sola multiplicación y una división. Todos los factores son exactos; por ejemplo, una milla por hora son exactamente 0,44704 m/s porque una milla mide exactamente 1609,344 m.",
    ],
    howToUse: [
      "Escribe la velocidad que quieres convertir.",
      "Elige su unidad en De y la unidad que quieres en A.",
      "Consulta la velocidad convertida o busca las demás unidades en la tabla.",
    ],
    formulas: [
      { title: "Conversión a través de metros por segundo", expression: "resultado = valor × (m/s por unidad de origen) ÷ (m/s por unidad de destino)", explanation: "Cada unidad se pasa primero a metros por segundo y después a la unidad de destino." },
      {
        title: "Factores exactos",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1852/3600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Se derivan de 1 km = 1000 m, 1 mi = 1609,344 m, 1 ft = 0,3048 m, 1 milla náutica = 1852 m y 1 h = 3600 s.",
      },
    ],
    examples: [
      {
        title: "Velocidad en autopista de 100 km/h en mph",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"],
      },
      {
        title: "Un barco a 30 nudos en km/h",
        steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"],
      },
      {
        title: "25 mph en pies por segundo",
        steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"],
      },
    ],
    assumptions: [
      "Las millas y los pies son las unidades internacionales (1 ft = 0,3048 m). El nudo usa la milla náutica internacional de 1852 m.",
      "No se incluye el ritmo de carrera o de marcha, como los minutos por kilómetro, porque es la inversa de la velocidad y no un múltiplo de ella. Para el ritmo, usa la Calculadora de ritmo de carrera.",
      "Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      { question: "¿Cómo paso de km/h a m/s?", answer: "Divide entre 3,6. Por ejemplo, 90 km/h ÷ 3,6 = 25 m/s. Para pasar de m/s a km/h, multiplica por 3,6." },
      { question: "¿Es un nudo más rápido que una milla por hora?", answer: "Sí. Un nudo es una milla náutica por hora, y una milla náutica (1852 m) es más larga que una milla terrestre (1609,344 m), así que 1 nudo equivale a unas 1,151 mph." },
      { question: "¿Por qué el ritmo no está en la lista?", answer: "El ritmo es tiempo por distancia, así que si duplicas la velocidad, el ritmo se reduce a la mitad. Esa relación inversa no puede expresarse con un único factor de conversión, por lo que el ritmo se calcula en otra calculadora." },
    ],
    sourcesUsedFor: [
      "Factores de conversión de la milla por hora, el pie por segundo y el nudo en metros por segundo.",
      "La milla náutica internacional de 1852 m, que define el nudo como 1852 m por hora.",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
    unitNames: {
      ms: "Metros por segundo",
      kmh: "Kilómetros por hora",
      mph: "Millas por hora",
      fts: "Pies por segundo",
      kn: "Nudos",
      cms: "Centímetros por segundo",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de velocidad",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Los resultados se muestran con 10 cifras significativas.",
  },
};

export default es;
