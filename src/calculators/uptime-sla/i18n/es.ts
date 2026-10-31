import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UptimeSlaText } from "../text/en";

const es: CalculatorTranslation<UptimeSlaText> = {
  content: {
    title: "Calculadora de disponibilidad y SLA",
    shortTitle: "Disponibilidad / SLA",
    summary:
      "Convierte un porcentaje de SLA en el tiempo de inactividad permitido por día, semana, mes y año, obtén la disponibilidad lograda a partir de la inactividad real o combina componentes en serie o en paralelo.",
    metaTitle: "Disponibilidad y SLA – Inactividad permitida y nueves",
    metaDescription:
      "Convierte un SLA como el 99,9 % en la inactividad permitida por día, semana, mes y año, mide la disponibilidad real y combina componentes en serie o paralelo.",
    keywords: [
      "calculadora de disponibilidad",
      "calculadora SLA",
      "tiempo de inactividad permitido",
      "disponibilidad 99,9",
      "nueves de disponibilidad",
      "uptime",
      "SLA compuesto",
      "inactividad al mes",
    ],
    intro: [
      "Un acuerdo de nivel de servicio (SLA) suele prometer una disponibilidad como el 99,9 %, «tres nueves». Parece casi perfecto, pero sigue permitiendo unos 43 minutos de inactividad al mes. Ver el margen como tiempo facilita comparar objetivos y planificar el mantenimiento.",
      "Esta calculadora convierte un objetivo de disponibilidad en la inactividad permitida en un día, una semana, un mes y un año; calcula la disponibilidad que has logrado realmente a partir de la inactividad medida; y combina las disponibilidades de varios componentes que dependen unos de otros (en serie) o que se respaldan entre sí (en paralelo).",
    ],
    howToUse: [
      "Elige lo que quieres calcular.",
      "Para la inactividad permitida, introduce el porcentaje del SLA. Primero se muestra el margen mensual y después una tabla con todos los periodos.",
      "Para la disponibilidad lograda, introduce la duración del periodo de medición y la inactividad total en él.",
      "Para varios componentes, enumera sus disponibilidades en porcentaje y elige si todos deben funcionar (en serie) o si basta con uno (en paralelo).",
    ],
    formulas: [
      {
        title: "Inactividad permitida",
        expression: "inactividad = (1 − A) × periodo",
        explanation: "A es la disponibilidad como fracción (99,9 % = 0,999). Un año son 365 días y un mes, 365 ÷ 12 = 30,42 días.",
      },
      {
        title: "Disponibilidad lograda",
        expression: "A = 1 − inactividad ÷ periodo",
        explanation: "Los dos tiempos deben estar en la misma unidad; la calculadora los convierte por ti.",
      },
      {
        title: "Número de nueves",
        expression: "nueves = −log₁₀(1 − A)",
        explanation: "El 99,9 % da 3 nueves y el 99,95 %, unos 3,3. No está definido para el 100 %.",
      },
      {
        title: "Componentes en serie",
        expression: "A = A₁ × A₂ × … × Aₙ",
        explanation: "Todos los componentes deben estar activos, así que la disponibilidad combinada es inferior a la del más débil.",
      },
      {
        title: "Componentes en paralelo",
        expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)",
        explanation: "El sistema solo está caído cuando todos los componentes redundantes están caídos a la vez.",
      },
    ],
    examples: [
      {
        title: "Inactividad mensual permitida por un SLA del 99,9 %",
        steps: ["Un mes son 365 × 86.400 ÷ 12 = 2.628.000 segundos", "Inactividad permitida = (1 − 0,999) × 2.628.000 = 2.628 s", "2.628 s = 43 min 48 s"],
      },
      {
        title: "25 minutos de inactividad en un mes de 30 días",
        steps: ["Periodo = 30 × 1.440 = 43.200 min", "Proporción de inactividad = 25 ÷ 43.200 ≈ 0,0579 %", "Disponibilidad = 100 % − 0,0579 % ≈ 99,94213 %"],
      },
      {
        title: "Dos servidores redundantes del 99,9 % cada uno",
        steps: [
          "Cada servidor está caído el 0,1 % del tiempo",
          "Los dos están caídos a la vez 0,001 × 0,001 = 0,000001 del tiempo",
          "Disponibilidad = 1 − 0,000001 = 99,9999 %, o 6 nueves",
        ],
      },
    ],
    assumptions: [
      "Se considera que un año tiene 365 días y un mes, una doceava parte del año (unos 30,42 días). Los contratos pueden usar meses naturales, meses de 30 días o años de 365,25 días, lo que cambia ligeramente el margen.",
      "Muchos SLA excluyen el mantenimiento planificado y solo cuentan algunos tipos de interrupción. Revisa las definiciones del contrato antes de comparar cifras.",
      "Las disponibilidades combinadas suponen que los componentes fallan de forma independiente. La alimentación eléctrica, las redes, las versiones de software o los proveedores compartidos hacen que los sistemas reales sean menos disponibles de lo que indican las fórmulas.",
    ],
    faqs: [
      {
        question: "¿Cuánta inactividad permite el 99,99 %?",
        answer:
          "Unos 52 minutos y 34 segundos por año de 365 días, o 4 minutos y 23 segundos por mes de 365 ÷ 12 días. Cada nueve adicional divide el margen entre 10.",
      },
      {
        question: "¿Por qué una cadena de servicios fiables es menos fiable que cada uno de ellos?",
        answer:
          "Cuando una petición necesita todos los servicios de la cadena, el fallo de cualquiera de ellos provoca una interrupción. Las disponibilidades se multiplican: tres servicios del 99,9 % dan en conjunto aproximadamente un 99,7 %, que supone unas tres veces más inactividad que uno solo.",
      },
      {
        question: "¿Añadir un segundo servidor duplica los nueves?",
        answer:
          "En el caso ideal, sí: dos servidores independientes del 99,9 % dan un 99,9999 %. En la práctica siguen existiendo el balanceador de carga, la base de datos y las causas de fallo compartidas, así que la mejora real es menor.",
      },
    ],
    sourcesUsedFor: [
      "La disponibilidad basada en el tiempo como tiempo activo ÷ (tiempo activo + inactividad), y la inactividad que permite un objetivo de disponibilidad en cada periodo.",
      "La combinación de disponibilidades: el producto para los componentes en serie y uno menos el producto de las indisponibilidades para los componentes redundantes.",
      "Cálculos resueltos de disponibilidad en serie y en paralelo, y el supuesto de que los fallos son independientes.",
    ],
  },
  text: {
    mode: "¿Qué quieres calcular?",
    modes: {
      allowed: "Inactividad permitida por un SLA",
      achieved: "Disponibilidad a partir de la inactividad",
      composite: "Disponibilidad de varios componentes",
    },
    sla: "Objetivo de disponibilidad (SLA)",
    slaHelp: "La disponibilidad prometida en porcentaje; por ejemplo, 99,9 para «tres nueves».",
    periodLength: "Periodo de medición",
    periodUnit: "Unidad del periodo",
    downtime: "Inactividad en el periodo",
    downtimeUnit: "Unidad de la inactividad",
    timeUnits: {
      s: "Segundos",
      min: "Minutos",
      h: "Horas",
      d: "Días",
      w: "Semanas",
      mo: "Meses (365 ÷ 12 días)",
      y: "Años (365 días)",
    },
    components: "Disponibilidades de los componentes (%)",
    componentsHelp: "Una disponibilidad por componente, separadas por punto y coma, espacios o saltos de línea; por ejemplo, 99,95; 99,9; 99,99.",
    topology: "¿Cómo están conectados los componentes?",
    topologies: {
      serial: "En serie (todos deben funcionar)",
      parallel: "En paralelo (basta con uno)",
    },
    errors: {
      empty: "Introduce al menos una disponibilidad.",
      tooMany: "Introduce como máximo {max} disponibilidades.",
      notNumber: "«{token}» no es un número. Usa la coma decimal y separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
      outOfRange: "{value} no es una disponibilidad válida. Cada valor debe estar entre 0 y 100 %.",
      downtimeTooLong: "La inactividad no puede ser más larga que el periodo de medición.",
    },
    allowedMonth: "Inactividad permitida al mes",
    achievedAvailability: "Disponibilidad lograda",
    compositeAvailability: "Disponibilidad combinada",
    captionAllowed: "Con una disponibilidad del {sla} y un mes de 365 ÷ 12 días.",
    captionAchieved: "{downtime} de inactividad en {period}.",
    captionComposite: "{count} {topology}.",
    componentCount: {
      zero: "{n} componentes",
      one: "{n} componente",
      two: "{n} componentes",
      few: "{n} componentes",
      many: "{n} componentes",
      other: "{n} componentes",
    },
    topologyCaption: { serial: "en serie", parallel: "en paralelo" },
    nines: "Número de nueves",
    downtimeYear: "Inactividad permitida al año",
    downtimeYearHours: "Inactividad permitida al año en horas",
    downtimeFraction: "Inactividad como proporción del periodo",
    uptime: "Tiempo activo en el periodo",
    equivalentMonth: "Misma tasa de inactividad al mes",
    equivalentYear: "Misma tasa de inactividad al año",
    serialValue: "Disponibilidad combinada en serie",
    parallelValue: "Disponibilidad combinada en paralelo",
    weakest: "Disponibilidad más baja de los componentes",
    table: {
      caption: "Inactividad permitida por periodo",
      period: "Periodo",
      downtime: "Inactividad permitida",
      uptime: "Tiempo activo exigido",
    },
    periods: { day: "Día", week: "Semana", month: "Mes (365 ÷ 12 días)", year: "Año (365 días)" },
    duration: {
      d: "{n} d",
      h: "{n} h",
      min: "{n} min",
      s: "{n} s",
      pair: "{a} {b}",
    },
    notes: {
      periods:
        "Se considera que un año tiene 365 días y un mes, una doceava parte (30,42 días). Los contratos pueden definir el periodo de otra forma, por ejemplo como mes natural, y a menudo excluyen el mantenimiento planificado.",
      hundred: "Una disponibilidad del 100 % no permite ninguna inactividad, así que el número de nueves no está definido.",
      zero: "Sin inactividad, la disponibilidad es del 100 % y el número de nueves no está definido.",
      independent:
        "Estas fórmulas suponen que los componentes fallan de forma independiente. Las dependencias compartidas, como una única fuente de alimentación o un único cambio de configuración, hacen que la disponibilidad real sea inferior a la calculada.",
      parallelHelp: "En paralelo, el sistema solo está caído cuando todos los componentes están caídos a la vez, así que la redundancia aumenta la disponibilidad.",
      serialHelp: "En serie, el sistema está caído cuando cualquier componente lo está, así que la disponibilidad combinada es inferior a la del componente más bajo.",
      allDown: "Al menos un componente tiene una disponibilidad del 0 %, así que un sistema en serie nunca está activo.",
    },
  },
};

export default es;
