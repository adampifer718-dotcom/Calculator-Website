import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Calculadora de tiempo",
    shortTitle: "Tiempo",
    summary: "Suma o resta dos duraciones expresadas en días, horas, minutos y segundos, y consulta el resultado normalizado y los totales en horas, minutos y segundos.",
    metaTitle: "Calculadora de tiempo – Sumar o restar horas y minutos",
    metaDescription:
      "Suma o resta duraciones en días, horas, minutos y segundos. Obtén un resultado normalizado y el total en horas decimales, minutos y segundos.",
    keywords: ["calculadora de tiempo", "sumar horas y minutos", "restar tiempo", "calcular duración", "horas minutos segundos", "total de horas", "suma de horas"],
    intro: [
      "Sumar tiempos a mano es engorroso porque no funciona de diez en diez: 60 segundos forman un minuto, 60 minutos una hora y 24 horas un día. Esta calculadora se encarga de las llevadas por ti.",
      "Introduce dos duraciones, elige si quieres sumarlas o restarlas y consulta el resultado en días, horas, minutos y segundos, junto con la misma cantidad expresada como un único total en horas, minutos o segundos.",
    ],
    howToUse: [
      "Introduce la primera duración. Rellena solo las partes que necesites y deja las demás en 0.",
      "Elige Sumar o Restar.",
      "Introduce la segunda duración.",
      "Consulta el resultado normalizado. Los totales de debajo son útiles para hojas de horas y hojas de cálculo que necesitan horas decimales.",
    ],
    formulas: [
      { title: "Duración en segundos", expression: "T = días × 86.400 + horas × 3600 + minutos × 60 + segundos", explanation: "Cada duración se convierte primero a segundos." },
      { title: "Resultado", expression: "R = T₁ + T₂   o   R = T₁ − T₂", explanation: "Un R negativo significa que la segunda duración es más larga que la primera." },
      {
        title: "Normalización",
        expression: "días = ⌊|R| ÷ 86.400⌋, horas = ⌊resto ÷ 3600⌋, minutos = ⌊resto ÷ 60⌋, segundos = lo que queda",
        explanation: "El resto de cada paso pasa a la siguiente unidad más pequeña.",
      },
    ],
    examples: [
      {
        title: "Dos sesiones de trabajo en un mismo día",
        steps: ["7 h 45 min = 27.900 s y 2 h 30 min = 9000 s", "27.900 + 9000 = 36.900 s", "36.900 s = 10 horas y 900 s = 10 horas y 15 minutos (10,25 horas)"],
      },
      {
        title: "Tiempo restante de un trabajo de 3 días y 4 horas tras 1 día y 20,5 horas",
        steps: ["3 d 4 h = 273.600 s; 1 d 20 h 30 min = 160.200 s", "273.600 − 160.200 = 113.400 s", "113.400 s = 1 día (86.400 s) + 27.000 s = 1 día, 7 horas y 30 minutos"],
      },
      {
        title: "Sumar dos tiempos por vuelta",
        steps: ["48 min 37 s = 2917 s y 51 min 52 s = 3112 s", "2917 + 3112 = 6029 s", "6029 s = 1 hora (3600 s) + 2429 s = 1 hora, 40 minutos y 29 segundos"],
      },
    ],
    assumptions: [
      "Cada día tiene exactamente 24 horas, cada hora 60 minutos y cada minuto 60 segundos. Se ignoran los segundos intercalares y los cambios de horario de verano.",
      "Esta herramienta trabaja con duraciones, no con horas del reloj ni con fechas. Para contar los días entre dos fechas, usa la Calculadora de días entre fechas.",
      "Las fracciones de segundo se conservan al milisegundo más próximo.",
    ],
    faqs: [
      { question: "¿Cómo paso minutos a horas decimales?", answer: "Divide los minutos entre 60. Por ejemplo, 45 minutos son 45 ÷ 60 = 0,75 horas, así que 7 horas y 45 minutos son 7,75 horas. La calculadora te muestra este total." },
      { question: "¿Puedo introducir más de 60 minutos?", answer: "Sí. Si introduces, por ejemplo, 135 minutos, el resultado se convierte en 2 horas y 15 minutos." },
      { question: "¿Qué significa un resultado negativo?", answer: "Cuando restas una duración más larga de otra más corta, la diferencia es menor que cero. El resultado se muestra con un signo menos para que veas cuánto más larga es la segunda." },
    ],
    sourcesUsedFor: ["El minuto (60 s), la hora (3600 s) y el día (86.400 s) como unidades aceptadas para su uso con el SI."],
  },
  text: {
    fieldLabels: {
      first: { days: "Días (primera duración)", hours: "Horas (primera duración)", minutes: "Minutos (primera duración)", seconds: "Segundos (primera duración)" },
      second: { days: "Días (segunda duración)", hours: "Horas (segunda duración)", minutes: "Minutos (segunda duración)", seconds: "Segundos (segunda duración)" },
    },
    partsHelp: "Deja una parte en 0 si no la necesitas. Se admiten valores de más de 24 horas, 60 minutos o 60 segundos, que pasan a la unidad siguiente.",
    operation: "Operación",
    operations: { add: "Sumar (+)", subtract: "Restar (−)" },
    operationHelp: "Al restar, la segunda duración se quita de la primera. El resultado es negativo cuando la segunda es más larga.",
    result: "Resultado",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: forms("{n} día", "{n} días"),
      hours: forms("{n} hora", "{n} horas"),
      minutes: forms("{n} minuto", "{n} minutos"),
      seconds: forms("{n} segundo", "{n} segundos"),
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Total en días",
    totalHours: "Total en horas",
    totalMinutes: "Total en minutos",
    totalSeconds: "Total en segundos",
    notes: {
      negative: "La segunda duración es más larga que la primera, así que el resultado es negativo.",
      days: "Un día se cuenta como exactamente 24 horas. No se incluyen los cambios de horario de verano ni los segundos intercalares.",
      rounding: "El resultado se redondea a la milésima de segundo más próxima.",
    },
  },
};

export default es;
