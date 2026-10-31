import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const es: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Calculadora de takt time",
    shortTitle: "Takt time",
    summary:
      "Calcula el takt time, el ritmo de producción necesario para atender la demanda del cliente, a partir de la duración del turno, las pausas, los turnos y la demanda, además del número mínimo de operarios.",
    metaTitle: "Calculadora de takt time – Ritmo de producción por unidad",
    metaDescription:
      "Calcula el takt time con la duración del turno, las pausas, los turnos y la demanda, con unidades por hora, operarios mínimos y tu tiempo de ciclo al lado.",
    keywords: [
      "calculadora takt time",
      "fórmula takt time",
      "tiempo takt",
      "lean manufacturing",
      "tiempo disponible de producción",
      "tiempo de ciclo vs takt time",
      "equilibrado de líneas",
      "operarios mínimos",
    ],
    intro: [
      "El takt time es el ritmo que debe mantener una línea de producción para fabricar exactamente lo que necesitan los clientes: si los clientes quieren 645 unidades en un día con 860 minutos de trabajo, debe salir una unidad de la línea cada 80 segundos. La palabra procede del alemán y designa el compás en la música.",
      "Esta calculadora obtiene el tiempo disponible neto a partir de la duración del turno, las pausas, el número de turnos y los días laborables, lo divide entre la demanda y muestra el takt time en segundos y minutos. Con el contenido de trabajo total por unidad estima el número mínimo de operarios y, con un tiempo de ciclo medido, indica si la línea puede mantener el ritmo.",
    ],
    howToUse: [
      "Introduce la duración de un turno en horas y minutos, y las pausas planificadas por turno en minutos.",
      "Introduce el número de turnos al día y el número de días laborables del periodo para el que tienes la demanda.",
      "Introduce la demanda del cliente para ese periodo.",
      "Si quieres, añade el contenido de trabajo total por unidad y el tiempo de ciclo real, ambos en segundos, para ver los operarios mínimos y si la línea mantiene el ritmo del takt.",
    ],
    formulas: [
      {
        title: "Tiempo disponible neto",
        expression: "disponible = (duración del turno − pausas) × turnos al día × días",
        explanation: "En minutos. Solo cuenta el tiempo en que la línea debe funcionar.",
      },
      {
        title: "Takt time",
        expression: "takt = tiempo disponible ÷ demanda del cliente",
        explanation: "Se muestra en segundos por unidad. Las unidades por hora son 3.600 ÷ takt.",
      },
      {
        title: "Operarios mínimos",
        expression: "operarios = ⌈contenido de trabajo ÷ takt⌉",
        explanation: "El trabajo manual total por unidad dividido entre el takt time, redondeado al alza a una persona o puesto entero.",
      },
    ],
    examples: [
      {
        title: "Dos turnos de 8 horas para 645 unidades al día",
        steps: [
          "Disponible = (480 − 50) × 2 × 1 = 860 min = 51.600 s",
          "Takt = 51.600 ÷ 645 = 80 s por unidad (1:20)",
          "Operarios = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4",
        ],
      },
      {
        title: "Una demanda semanal de 1.400 unidades con un solo turno",
        steps: [
          "Disponible = (450 − 30) × 1 × 5 = 2.100 min = 126.000 s",
          "Takt = 126.000 ÷ 1.400 = 90 s por unidad",
          "Un ciclo real de 95 s es 5 s más largo que el takt, así que se pueden fabricar unas 1.326 unidades en lugar de 1.400",
        ],
      },
      {
        title: "Un turno de 10 horas para 216 unidades",
        steps: ["Disponible = 600 − 60 = 540 min = 32.400 s", "Takt = 32.400 ÷ 216 = 150 s por unidad, o 2:30", "Unidades por hora = 3.600 ÷ 150 = 24"],
      },
    ],
    assumptions: [
      "El takt time lo marca la demanda, no el equipo. Se supone que la demanda se reparte de forma uniforme a lo largo del periodo.",
      "Solo se descuentan del turno las pausas. Incluye en las pausas el mantenimiento planificado, las reuniones o el tiempo de arranque si la línea no funciona durante ellos.",
      "El número mínimo de operarios es un límite inferior. El trabajo desequilibrado, los desplazamientos y la variación en los tiempos de las tareas suelen exigir más.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre el takt time y el tiempo de ciclo?",
        answer:
          "El takt time es el ritmo que exigen los clientes: el tiempo disponible dividido entre la demanda. El tiempo de ciclo es lo que tarda realmente el proceso por unidad. Si el tiempo de ciclo es más largo que el takt time, la línea no puede seguir el ritmo sin horas extra o cambios.",
      },
      {
        question: "¿El takt time debe incluir las averías?",
        answer:
          "No. El takt time usa el tiempo disponible planificado. Las paradas no planificadas hacen que la línea sea más lenta, así que el tiempo de ciclo debe ser más corto que el takt para dejarles margen. La eficiencia general de los equipos (OEE) mide esas pérdidas.",
      },
      {
        question: "¿Y si la demanda cambia durante el mes?",
        answer:
          "Vuelve a calcular el takt para cada periodo con su propia demanda. Muchas plantas revisan el takt time cada semana o cada mes y reequilibran el trabajo entre puestos cuando cambia mucho.",
      },
    ],
    sourcesUsedFor: [
      "La definición del takt time como el tiempo de producción disponible dividido entre la demanda del cliente.",
      "El tiempo disponible neto tras las pausas, y la comparación del tiempo de ciclo con el takt time.",
    ],
  },
  text: {
    shiftHours: "Duración del turno: horas",
    shiftMinutes: "Duración del turno: minutos",
    breaks: "Pausas por turno",
    breaksHelp: "Pausas planificadas, comidas y reuniones en las que la línea no funciona, en minutos por turno.",
    shifts: "Turnos al día",
    days: "Días laborables del periodo",
    daysHelp: "Usa 1 para una demanda diaria, 5 para una demanda semanal con una semana de cinco días, y así sucesivamente.",
    demand: "Demanda del cliente en el periodo",
    demandHelp: "El número de unidades que necesitan los clientes en ese mismo periodo.",
    workContent: "Contenido de trabajo total por unidad (opcional)",
    workContentHelp: "La suma de todos los tiempos de trabajo manual necesarios para fabricar una unidad, en segundos. Da el número mínimo de operarios o puestos.",
    actualCycle: "Tiempo de ciclo real (opcional)",
    actualCycleHelp: "El tiempo medido del puesto más lento, en segundos por unidad, para compararlo con el takt time.",
    minutes: "min",
    seconds: "s",
    units: "unidades",
    errors: {
      noShift: "Introduce una duración de turno superior a 0 minutos.",
      breaksTooLong: "Las pausas deben ser más cortas que el turno.",
      tooManyHours: "Los turnos suman más de 24 horas al día.",
    },
    takt: "Takt time",
    perUnit: "s por unidad",
    caption: "{available} de tiempo disponible ÷ {demand}.",
    demandUnits: {
      zero: "{n} unidades",
      one: "{n} unidad",
      two: "{n} unidades",
      few: "{n} unidades",
      many: "{n} unidades",
      other: "{n} unidades",
    },
    minutesText: "{n} min",
    taktClock: "Takt time (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Unidades por hora de tiempo disponible",
    available: "Tiempo disponible neto en el periodo",
    availablePerShift: "Tiempo disponible por turno",
    operators: "Operarios o puestos mínimos",
    capacity: "Unidades posibles con el tiempo de ciclo real",
    gap: "Tiempo de ciclo real menos takt time",
    meetsTakt: "¿Puede la línea mantener el ritmo del takt?",
    verdict: {
      yes: "Sí: el tiempo de ciclo está dentro del takt time",
      no: "No: el tiempo de ciclo es más largo que el takt time",
    },
    notes: {
      operators:
        "Operarios mínimos = contenido de trabajo ÷ takt time, redondeado al alza ({ratio} → {operators}). Las líneas reales suelen necesitar más porque el trabajo no se puede equilibrar a la perfección.",
      slower:
        "Con este tiempo de ciclo, la línea fabrica unas {capacity} en el periodo, por debajo de la demanda de {demand}. Entre las opciones están acortar el ciclo, añadir un puesto o ampliar el tiempo disponible.",
      faster: "El tiempo de ciclo deja un margen de {gap} por unidad, que absorbe pequeñas incidencias.",
      plannedStops:
        "Solo se descuentan del turno las pausas. Si también planificas mantenimiento o reuniones, inclúyelos en las pausas para obtener un takt time más realista.",
    },
  },
};

export default es;
