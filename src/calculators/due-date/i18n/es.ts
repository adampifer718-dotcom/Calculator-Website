import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} días", one: "{n} día", two: "{n} días", few: "{n} días", many: "{n} días", other: "{n} días" };

const es: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Calculadora de fecha probable de parto",
    shortTitle: "Fecha de parto",
    summary:
      "Estima la fecha probable de parto a partir de la última regla, la fecha de concepción o una transferencia de FIV, con la edad gestacional actual y las fechas de cada trimestre.",
    metaTitle: "Fecha probable de parto – Última regla, concepción o FIV",
    metaDescription:
      "Estima tu fecha probable de parto a partir del primer día de la última regla, la concepción o una transferencia embrionaria de FIV, con edad gestacional y trimestres.",
    keywords: [
      "fecha probable de parto",
      "calculadora de embarazo",
      "FPP",
      "regla de Naegele",
      "edad gestacional",
      "fecha de parto FIV",
      "de cuántas semanas estoy",
    ],
    intro: [
      "La mayoría de los embarazos se fechan a partir del primer día de la última regla, aunque la concepción suele producirse unas dos semanas después. Un embarazo típico dura unas 40 semanas, o 280 días, desde esa fecha.",
      "Esta calculadora estima la fecha probable de parto a partir de la última regla (ajustada a la duración de tu ciclo), de una fecha de concepción conocida o de una transferencia embrionaria de FIV. También muestra de cuántas semanas estás en la fecha que elijas, el trimestre y las fechas en que termina cada trimestre.",
    ],
    howToUse: [
      "Elige a partir de qué quieres calcular: la última regla, la concepción o una transferencia de FIV.",
      "Introduce la fecha. Para la última regla, introduce también la duración habitual de tu ciclo; para la FIV, elige la edad del embrión en la transferencia.",
      "Deja la fecha de hoy o elige otra para ver la edad gestacional ese día.",
      "Consulta la fecha probable de parto, la edad gestacional, el trimestre y las fechas de los trimestres.",
    ],
    formulas: [
      {
        title: "A partir de la última regla (regla de Naegele, ajustada al ciclo)",
        expression: "Fecha de parto = primer día de la última regla + 280 días + (duración del ciclo − 28)",
        explanation: "Con un ciclo de 28 días son exactamente 40 semanas. Los ciclos más largos retrasan la ovulación y, por tanto, la fecha de parto.",
      },
      {
        title: "A partir de la concepción",
        expression: "Fecha de parto = fecha de concepción + 266 días",
        explanation: "266 días son 38 semanas, el tiempo habitual entre la fecundación y el nacimiento.",
      },
      {
        title: "A partir de una transferencia de FIV",
        expression: "Fecha de parto = fecha de transferencia + 266 días − edad del embrión (3 o 5 días)",
        explanation: "El embrión ya tenía 3 o 5 días desde la fecundación cuando se transfirió.",
      },
      {
        title: "Edad gestacional",
        expression: "Edad gestacional = fecha − (fecha de parto − 280 días), en semanas y días",
        explanation: "Se cuenta desde la fecha que habría sido el primer día de la última regla, la convención clínica habitual.",
      },
    ],
    examples: [
      {
        title: "Última regla el 1 de junio de 2026, ciclo de 28 días",
        steps: [
          "1 de junio de 2026 + 280 días = 8 de marzo de 2027",
          "El 24 de octubre de 2026: 145 días = 20 semanas y 5 días",
          "Corresponde al segundo trimestre (de 14 semanas y 0 días a 27 semanas y 6 días)",
        ],
      },
      {
        title: "Última regla el 10 de marzo de 2026, ciclo de 32 días",
        steps: [
          "10 de marzo de 2026 + 280 + (32 − 28) = 284 días = 19 de diciembre de 2026",
          "El cómputo empieza entonces el 14 de marzo de 2026 (fecha de parto − 280 días)",
          "El 24 de octubre de 2026: 224 días = 32 semanas y 0 días, tercer trimestre",
        ],
      },
      {
        title: "Embrión de día 5 transferido el 20 de junio de 2026",
        steps: [
          "266 − 5 = 261 días",
          "20 de junio de 2026 + 261 días = 8 de marzo de 2027",
          "Es la misma fecha que con una última regla iniciada el 1 de junio de 2026",
        ],
      },
    ],
    assumptions: [
      "La fecha de parto es una estimación, no un consejo médico, y esta calculadora todavía no ha sido revisada por profesionales. Solo una pequeña parte de los bebés nace el mismo día de la fecha probable; la mayoría llega en las dos semanas anteriores o posteriores.",
      "Una ecografía de datación al principio del embarazo es más precisa que una estimación basada en fechas y puede cambiar la fecha de parto. Tu matrona o tu médico fijan la fecha de parto que se usa en tu seguimiento.",
      "El ajuste por ciclo supone que la ovulación se produce unos 14 días antes de la siguiente regla. No tiene en cuenta ciclos irregulares, el uso reciente de anticonceptivos hormonales ni fechas inciertas.",
      "Se consideran los trimestres hasta las 13 semanas y 6 días, de las 14 semanas y 0 días a las 27 semanas y 6 días, y a partir de las 28 semanas y 0 días. Algunas fuentes ponen los límites una semana antes o después.",
    ],
    faqs: [
      {
        question: "¿Por qué el embarazo se cuenta desde la última regla y no desde la concepción?",
        answer: "El primer día de la última regla suele conocerse, mientras que el día de la concepción no. Contar desde él es una convención antigua, por lo que en el momento de la concepción el embarazo ya va por unas 2 semanas.",
      },
      {
        question: "¿Cómo influye la duración del ciclo en la fecha de parto?",
        answer: "En un ciclo de 28 días la ovulación se produce hacia el día 14. En un ciclo más largo se produce más tarde, así que la fecha de parto se retrasa el mismo número de días; un ciclo más corto la adelanta.",
      },
      {
        question: "¿Puede cambiar la fecha de parto?",
        answer: "Sí. Una ecografía temprana puede dar otra fecha, y tu profesional sanitario puede actualizarla según esa ecografía, normalmente una sola vez.",
      },
    ],
    sourcesUsedFor: [
      "Que la ecografía del primer trimestre es la forma más precisa de confirmar la fecha de parto y que los embarazos por FIV se fechan a partir de la transferencia.",
      "El cómputo de 280 días (40 semanas) desde el primer día de la última regla, el ajuste para ciclos de más o menos de 28 días y que una ecografía de datación da una fecha más precisa.",
    ],
  },
  text: {
    method: "Calcular a partir de",
    methods: { lmp: "Primer día de la última regla", conception: "Fecha de concepción", ivf: "Fecha de transferencia embrionaria (FIV)" },
    lmp: "Primer día de tu última regla",
    cycle: "Duración media del ciclo",
    cycleHelp: "Días desde el primer día de una regla hasta el primer día de la siguiente. Usa 28 si no estás segura.",
    daysSuffix: "días",
    conception: "Fecha de concepción",
    conceptionHelp: "Normalmente solo se conoce de forma aproximada, por ejemplo con el seguimiento de la ovulación.",
    transfer: "Fecha de transferencia embrionaria",
    embryoAge: "Edad del embrión en la transferencia",
    embryoAges: { "3": "Embrión de día 3", "5": "Embrión de día 5 (blastocisto)" },
    asOf: "Edad gestacional el",
    asOfHelp: "Hoy por defecto. Cámbiala para ver de cuánto tiempo es el embarazo en otra fecha.",
    units: { weeks, days },
    weeksDays: "{weeks} y {days}",
    dueDate: "Fecha probable de parto",
    caption: "{days} días después {from}.",
    captionFrom: {
      lmp: "del primer día de la última regla, con el ajuste por la duración del ciclo",
      conception: "de la fecha de concepción",
      ivf: "de la fecha de transferencia",
    },
    gestationalAge: "Edad gestacional",
    trimester: "Trimestre",
    trimesters: { first: "Primer trimestre", second: "Segundo trimestre", third: "Tercer trimestre" },
    notStarted: "Todavía no ha empezado en esta fecha",
    firstEnds: "Fin del primer trimestre (13 semanas y 6 días)",
    secondEnds: "Fin del segundo trimestre (27 semanas y 6 días)",
    thirdStarts: "Inicio del tercer trimestre (28 semanas y 0 días)",
    daysToDue: "Días hasta la fecha de parto",
    startDate: "Inicio del cómputo del embarazo (0 semanas y 0 días)",
    notes: {
      estimate:
        "Es solo una estimación: solo una pequeña parte de los bebés nace en su fecha probable de parto, y la mayoría llega en las dos semanas anteriores o posteriores. Una ecografía de datación puede cambiarla.",
      beforeStart: "La fecha elegida es anterior al inicio del cómputo del embarazo, así que todavía no hay edad gestacional.",
      pastDue: "La fecha elegida coincide con la fecha probable de parto o es posterior.",
      veryLate: "La fecha elegida supera las 42 semanas de embarazo. Comprueba que las fechas son correctas.",
      clinician:
        "La edad gestacional se cuenta desde el primer día de la última regla, aunque la fecha proceda de la concepción o de la transferencia. Tu matrona o tu médico fijan la fecha de parto oficial.",
    },
    errors: { range: "Esta fecha da una fecha de parto fuera del intervalo admitido." },
  },
};

export default es;
