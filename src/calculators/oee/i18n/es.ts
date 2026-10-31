import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const es: CalculatorTranslation<OeeText> = {
  content: {
    title: "Calculadora de OEE",
    shortTitle: "OEE",
    summary:
      "Calcula la eficiencia general de los equipos (OEE) a partir del tiempo planificado, las paradas, el tiempo de ciclo ideal y el recuento de piezas, con la disponibilidad, el rendimiento, la calidad y el tiempo perdido en cada una.",
    metaTitle: "Calculadora de OEE – Disponibilidad × rendimiento × calidad",
    metaDescription:
      "Calcula la eficiencia general de los equipos (OEE) con el tiempo planificado, las paradas, el ciclo o ritmo ideal y los rechazos, y el tiempo de cada pérdida.",
    keywords: [
      "calculadora OEE",
      "eficiencia general de los equipos",
      "fórmula OEE",
      "disponibilidad rendimiento calidad",
      "tiempo de ciclo ideal",
      "eficiencia de fabricación",
      "pérdidas de producción",
    ],
    intro: [
      "La eficiencia general de los equipos (OEE) mide qué parte del tiempo de producción planificado es realmente productiva: fabricar solo piezas buenas, lo más rápido posible y sin paradas. Una puntuación del 100 % significa una producción perfecta; las líneas reales pierden tiempo por averías, ciclos lentos y rechazos.",
      "La OEE divide esas pérdidas en tres factores. La disponibilidad recoge el tiempo en que el equipo estuvo parado, el rendimiento recoge el funcionamiento por debajo de la velocidad ideal y la calidad recoge las piezas que no salieron bien a la primera. Esta calculadora da los tres factores, la OEE y los minutos perdidos en cada uno.",
    ],
    howToUse: [
      "Introduce el tiempo de producción planificado en minutos, sin contar las pausas planificadas ni el tiempo sin producción programada.",
      "Introduce el tiempo total de paradas durante ese periodo, como averías y cambios de formato.",
      "Indica la velocidad ideal como tiempo de ciclo en segundos por pieza o como ritmo en piezas por minuto.",
      "Introduce el número total de piezas fabricadas y cuántas de ellas se rechazaron. La OEE y la tabla de pérdidas de tiempo se actualizan al momento.",
    ],
    formulas: [
      {
        title: "Disponibilidad",
        expression: "A = tiempo de funcionamiento ÷ tiempo de producción planificado, tiempo de funcionamiento = planificado − paradas",
        explanation: "La parte del tiempo planificado en que el equipo estuvo funcionando realmente.",
      },
      {
        title: "Rendimiento",
        expression: "P = (tiempo de ciclo ideal × recuento total) ÷ tiempo de funcionamiento",
        explanation: "Lo cerca que estuvo el equipo de su velocidad ideal. Con un ritmo ideal, el tiempo de ciclo ideal es 60 ÷ ritmo segundos.",
      },
      {
        title: "Calidad",
        expression: "Q = piezas buenas ÷ recuento total, buenas = total − rechazos",
        explanation: "La parte de las piezas que salieron bien a la primera.",
      },
      {
        title: "OEE",
        expression: "OEE = A × P × Q = (piezas buenas × tiempo de ciclo ideal) ÷ tiempo de producción planificado",
        explanation: "El tiempo plenamente productivo (piezas buenas fabricadas a la velocidad ideal) como parte del tiempo planificado.",
      },
    ],
    examples: [
      {
        title: "Un turno de 450 minutos con 54 minutos de paradas",
        steps: [
          "Tiempo de funcionamiento = 450 − 54 = 396 min, así que disponibilidad = 396 ÷ 450 = 88 %",
          "Rendimiento = 1,5 s × 13.200 ÷ (396 × 60 s) = 19.800 ÷ 23.760 = 83,33 %",
          "Calidad = (13.200 − 330) ÷ 13.200 = 97,5 %",
          "OEE = 0,88 × 0,8333 × 0,975 = 71,5 %",
        ],
      },
      {
        title: "Ritmo ideal de 25 piezas por minuto",
        steps: [
          "Tiempo de ciclo ideal = 60 ÷ 25 = 2,4 s",
          "Disponibilidad = 384 ÷ 420 = 91,43 %; rendimiento = 2,4 × 8.800 ÷ (384 × 60) = 91,67 %",
          "Calidad = 8.624 ÷ 8.800 = 98 %",
          "OEE = 0,9143 × 0,9167 × 0,98 ≈ 82,13 %",
        ],
      },
      {
        title: "Dos turnos de 8 horas en una máquina más lenta",
        steps: [
          "Disponibilidad = 840 ÷ 960 = 87,5 %",
          "Rendimiento = 12 × 3.900 ÷ (840 × 60) = 46.800 ÷ 50.400 = 92,86 %",
          "Calidad = 3.815 ÷ 3.900 = 97,82 %",
          "OEE = piezas buenas × tiempo de ciclo ideal ÷ tiempo planificado = 3.815 × 12 ÷ 57.600 ≈ 79,48 %",
        ],
      },
    ],
    assumptions: [
      "El tiempo de producción planificado excluye las pausas planificadas y los periodos sin producción programada; la forma de tratar los cambios de formato y el mantenimiento cambia el resultado, así que mantén las mismas definiciones al comparar.",
      "El tiempo de ciclo ideal es lo más rápido que el equipo puede fabricar una pieza en condiciones ideales. Si se fija demasiado lento, el rendimiento puede superar el 100 %, lo que indica un valor ideal incorrecto y no una línea excelente.",
      "Los rechazos incluyen todas las piezas que no salieron bien a la primera, incluidas las que se reprocesaron. La cifra del 85 % de «clase mundial» que se cita a menudo es solo una referencia aproximada.",
    ],
    faqs: [
      {
        question: "¿Qué es una buena OEE?",
        answer:
          "Una OEE del 85 % se cita a menudo como de clase mundial en la fabricación discreta, y muchas plantas funcionan bastante por debajo. Como la puntuación depende de cómo se definan las paradas y la velocidad ideal, la evolución en una misma línea es más útil que comparar plantas distintas.",
      },
      {
        question: "¿Por qué las pérdidas de tiempo suman el tiempo planificado?",
        answer:
          "El tiempo de producción planificado se reparte entre las paradas (pérdida de disponibilidad), el funcionamiento por debajo de la velocidad ideal (pérdida de rendimiento), la fabricación de rechazos (pérdida de calidad) y el tiempo plenamente productivo que queda. La OEE es el tiempo plenamente productivo dividido entre el tiempo planificado.",
      },
      {
        question: "¿Introduzco el tiempo de ciclo ideal o el ritmo ideal?",
        answer:
          "Cualquiera de los dos; son lo mismo escrito de dos formas. Un ritmo ideal de 40 piezas por minuto equivale a un tiempo de ciclo ideal de 60 ÷ 40 = 1,5 segundos por pieza.",
      },
    ],
    sourcesUsedFor: [
      "La fórmula de la OEE como disponibilidad × rendimiento × calidad, con disponibilidad = tiempo de funcionamiento ÷ tiempo de producción planificado, rendimiento = tiempo de ciclo ideal × recuento total ÷ tiempo de funcionamiento y calidad = piezas buenas ÷ recuento total, y la referencia del 85 % que se cita a menudo.",
      "Los tres factores de la OEE y las pérdidas que mide cada uno.",
    ],
  },
  text: {
    planned: "Tiempo de producción planificado",
    plannedHelp: "El tiempo en que estaba previsto que funcionara el equipo, descontadas las pausas planificadas y los periodos sin producción programada.",
    stopTime: "Tiempo de paradas (no planificadas y planificadas)",
    stopTimeHelp:
      "Tiempo dentro del tiempo de producción planificado en que el equipo no estuvo funcionando; por ejemplo, averías, cambios de formato y esperas de material.",
    speedMode: "Velocidad ideal indicada como",
    speedModes: { cycle: "Tiempo de ciclo ideal (segundos por pieza)", rate: "Ritmo ideal (piezas por minuto)" },
    idealCycle: "Tiempo de ciclo ideal",
    idealCycleHelp: "El tiempo más rápido en que el equipo puede fabricar una pieza en condiciones ideales.",
    idealRate: "Ritmo ideal de funcionamiento",
    idealRateHelp: "El máximo de piezas por minuto que el equipo puede fabricar en condiciones ideales.",
    perPiece: "s por pieza",
    perMinute: "piezas/min",
    totalCount: "Recuento total (todas las piezas fabricadas)",
    rejects: "Piezas rechazadas",
    rejectsHelp: "Piezas desechadas o que necesitan reprocesado. No salieron bien a la primera.",
    minutes: "min",
    pieces: "piezas",
    errors: {
      stopTooLong: "El tiempo de paradas debe ser menor que el tiempo de producción planificado.",
      rejectsTooMany: "Las piezas rechazadas no pueden ser más que el recuento total.",
    },
    oee: "Eficiencia general de los equipos (OEE)",
    caption: "Disponibilidad {a} × rendimiento {p} × calidad {q}.",
    availability: "Disponibilidad",
    performance: "Rendimiento",
    quality: "Calidad",
    goodCount: "Piezas buenas",
    runTime: "Tiempo de funcionamiento",
    productiveTime: "Tiempo plenamente productivo",
    idealCycleUsed: "Tiempo de ciclo ideal utilizado",
    table: {
      caption: "En qué se reparte el tiempo de producción planificado",
      item: "Tiempo",
      minutes: "Minutos",
      share: "Parte del tiempo planificado",
      planned: "Tiempo de producción planificado",
      availabilityLoss: "Pérdida de disponibilidad (paradas)",
      performanceLoss: "Pérdida de rendimiento (ciclos lentos y microparadas)",
      qualityLoss: "Pérdida de calidad (tiempo dedicado a fabricar rechazos)",
      productive: "Tiempo plenamente productivo",
    },
    notes: {
      overPerformance:
        "El rendimiento supera el 100 %, lo que no es físicamente posible. Probablemente el tiempo de ciclo ideal es demasiado lento (o el ritmo ideal demasiado bajo), o el recuento incluye piezas fabricadas fuera del tiempo de funcionamiento.",
      benchmark:
        "Una OEE del 85 % se cita a menudo como de «clase mundial» en la fabricación discreta. Tómala solo como referencia aproximada; un objetivo razonable depende del proceso y de cómo se definan las pérdidas.",
    },
  },
};

export default es;
