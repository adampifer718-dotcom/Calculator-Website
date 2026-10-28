import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const es: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Calculadora de duración de batería",
    shortTitle: "Duración de batería",
    summary: "Estima cuánto tiempo hará funcionar una batería a un dispositivo a partir de su capacidad en mAh, Ah o Wh y el consumo en mA, A o W.",
    metaTitle: "Calculadora de duración de batería – Autonomía en horas",
    metaDescription:
      "Estima la autonomía de una batería según su capacidad (mAh, Ah o Wh) y el consumo (mA, A o W), con la profundidad de descarga útil, en horas, días y energía.",
    keywords: [
      "duración de batería",
      "autonomía de batería",
      "mAh a horas",
      "capacidad de batería",
      "vatios hora",
      "amperios hora",
      "profundidad de descarga",
      "cuánto dura una batería",
    ],
    intro: [
      "La capacidad de una batería indica cuánta carga (en miliamperios hora o amperios hora) o energía (en vatios hora) almacena. Dividir la parte de esa capacidad que realmente puedes usar entre lo que consume el dispositivo da una primera estimación de cuánto tiempo funcionará.",
      "Esta calculadora acepta la capacidad en mAh, Ah o Wh y el consumo en mA, A o W. Cuando uno es una carga y el otro una potencia, usa la tensión de la batería para convertir entre ellos. Úsala para dimensionar una batería para un sensor, una luz de acampada, una batería externa o un sistema de alimentación de respaldo.",
    ],
    howToUse: [
      "Introduce la capacidad de la batería y elige mAh, Ah o Wh.",
      "Introduce la tensión nominal de la batería. Hace falta cuando un valor está en mAh o Ah y el otro en W o Wh, y permite a la calculadora mostrar la energía.",
      "Introduce el consumo medio del dispositivo en mA, A o W.",
      "Ajusta la capacidad útil (80 % por defecto) y consulta la autonomía en horas y minutos, en horas decimales y en días.",
    ],
    formulas: [
      {
        title: "Autonomía a partir de la carga",
        expression: "t (h) = capacidad (mAh) ÷ consumo (mA) × fracción útil",
        explanation: "Con amperios hora y amperios funciona igual. La fracción útil es la profundidad de descarga, por ejemplo 0,8.",
      },
      {
        title: "Autonomía a partir de la energía",
        expression: "t (h) = energía (Wh) ÷ consumo (W) × fracción útil",
        explanation: "Úsala cuando la capacidad está en vatios hora y el consumo en vatios.",
      },
      {
        title: "De carga a energía",
        expression: "Wh = mAh × V ÷ 1000",
        explanation: "V es la tensión nominal de la batería. Del mismo modo, un consumo en vatios equivale a W ÷ V amperios.",
      },
    ],
    examples: [
      {
        title: "Celda de 3.000 mAh que alimenta un dispositivo de 150 mA",
        steps: ["Autonomía ideal = 3.000 ÷ 150 = 20 h", "Autonomía útil = 20 × 0,80 = 16 h", "Energía = 3.000 × 3,7 ÷ 1000 = 11,1 Wh"],
      },
      {
        title: "Batería de plomo-ácido de 100 Ah y 12 V con una carga de 45 W hasta el 50 %",
        steps: ["Energía = 100 Ah × 12 V = 1.200 Wh", "Energía útil = 1.200 × 0,50 = 600 Wh", "Autonomía = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"],
      },
      {
        title: "Batería de portátil de 74 Wh con un consumo medio de 18 W",
        steps: ["Energía útil = 74 × 0,90 = 66,6 Wh", "Autonomía = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, así que unas 3 h 42 min"],
      },
    ],
    assumptions: [
      "El consumo es constante. Para un dispositivo que alterna entre reposo y actividad, introduce su corriente o potencia media.",
      "La capacidad real disminuye con el frío, a medida que la batería envejece y con corrientes de descarga altas (el efecto Peukert, más acusado en las baterías de plomo-ácido). Estos efectos no se modelan, así que con cargas elevadas la autonomía será menor que la indicada.",
      "Las conversiones de tensión usan la tensión nominal, aunque la tensión baja durante la descarga, y no se incluyen las pérdidas del convertidor o del inversor salvo que reduzcas la capacidad útil para tenerlas en cuenta.",
    ],
    faqs: [
      {
        question: "¿Qué capacidad útil debo introducir?",
        answer:
          "Las baterías de iones de litio suelen poder usar el 80–90 % de su capacidad nominal, mientras que las de plomo-ácido duran más si normalmente solo se descargan hasta alrededor del 50 %. Si no lo sabes, el 80 % es un punto de partida prudente para la electrónica pequeña.",
      },
      {
        question: "¿Por qué necesito la tensión?",
        answer:
          "Los miliamperios hora miden carga, mientras que los vatios y los vatios hora miden potencia y energía. Para convertir entre ellos hace falta la tensión: los vatios hora son los amperios hora por los voltios. Si la capacidad está en mAh y el consumo en mA, la tensión no es necesaria para la autonomía.",
      },
      {
        question: "¿Por qué mi batería externa da menos de lo que sugieren sus mAh?",
        answer:
          "Las baterías externas se especifican a la tensión interna de sus celdas, de unos 3,7 V, pero la salida USB es de 5 V o más, y el convertidor de tensión pierde parte de la energía en forma de calor. Compara en vatios hora y reduce la capacidad útil para tener en cuenta esas pérdidas.",
      },
    ],
    sourcesUsedFor: [
      "La energía de una batería en vatios hora como voltios × amperios hora.",
      "La conversión de una capacidad en miliamperios hora a amperios hora dividiendo entre 1.000 antes de multiplicar por la tensión.",
      "Que la capacidad útil disminuye con corrientes de descarga más altas (el efecto Peukert), algo que esta calculadora no modela.",
    ],
  },
  text: {
    capacity: "Capacidad de la batería",
    capacityUnit: "Unidad de capacidad",
    capacityUnits: { mAh: "Miliamperios hora (mAh)", Ah: "Amperios hora (Ah)", Wh: "Vatios hora (Wh)" },
    voltage: "Tensión de la batería",
    voltageHelp:
      "La tensión nominal, como 3,7 V para una celda de iones de litio o 12 V para una batería de plomo-ácido. Hace falta cuando la capacidad y el consumo usan unidades distintas (carga y potencia), y para mostrar la energía.",
    load: "Consumo del dispositivo",
    loadUnit: "Unidad de consumo",
    loadUnits: { mA: "Miliamperios (mA)", A: "Amperios (A)", W: "Vatios (W)" },
    depth: "Capacidad útil (profundidad de descarga)",
    depthHelp:
      "La parte de la capacidad nominal que realmente puedes usar. El 80 % es un margen habitual para las pérdidas y para proteger la batería; usa el 100 % para obtener la cifra ideal.",
    errors: {
      voltageNeeded: "Introduce la tensión de la batería para convertir entre carga (mAh o Ah) y potencia o energía (W o Wh).",
    },
    runtime: "Autonomía estimada (h:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Batería de {capacity} que alimenta un consumo de {load}, usando el {depth} de su capacidad.",
    hours: "Autonomía en horas",
    days: "Autonomía en días",
    energy: "Energía nominal",
    usableEnergy: "Energía útil",
    current: "Corriente de consumo",
    power: "Potencia de consumo",
    notes: {
      constant: "Se supone un consumo constante. Un dispositivo que entra en reposo y se activa consume una corriente media; usa esa media.",
      peukert:
        "La capacidad real disminuye con el frío, a medida que la batería envejece y con corrientes de descarga altas (el efecto Peukert, que no se modela aquí), así que espera menos autonomía con cargas elevadas.",
      conversion: "Se ha usado la tensión para convertir entre carga y energía (Wh = Ah × V); no se tiene en cuenta que la tensión baja a medida que la batería se descarga.",
    },
  },
};

export default es;
