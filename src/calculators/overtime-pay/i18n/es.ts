import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const es: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Calculadora de horas extra",
    shortTitle: "Horas extra",
    summary:
      "Calcula el sueldo bruto de una semana con horas extra, incluidas las pagadas a 1,5 veces, una parte opcional pagada al doble y la tarifa por hora efectiva.",
    metaTitle: "Calculadora de horas extra – Pago a 1,5× y al doble",
    metaDescription:
      "Calcula el sueldo bruto semanal con horas extra: pago normal hasta 40 horas o tu propio umbral, horas a 1,5×, horas opcionales al doble y la tarifa efectiva.",
    keywords: [
      "calculadora de horas extra",
      "pago de horas extra",
      "horas extra a 1,5",
      "horas extra al doble",
      "sueldo semanal",
      "horas extra FLSA",
      "40 horas semanales",
    ],
    intro: [
      "El pago de horas extra recompensa con una tarifa más alta las horas trabajadas por encima de una semana normal. Según la ley federal de Estados Unidos (Fair Labor Standards Act), los empleados cubiertos que no están exentos deben cobrar al menos 1,5 veces su tarifa por cada hora que pase de 40 en una semana laboral.",
      "Esta calculadora divide la semana en horas normales y horas extra, aplica tu multiplicador de horas extra y puede pagar parte de las horas extra al doble si tu empresa o tu contrato lo prevén. Cambia el umbral o los multiplicadores para ajustarlos a las normas que se te aplican.",
    ],
    howToUse: [
      "Elige la moneda e introduce tu tarifa por hora normal.",
      "Introduce todas las horas que trabajaste en la semana.",
      "Deja el umbral en 40 horas y el multiplicador en 1,5 para la norma federal de EE. UU., o cámbialos según tu contrato o la legislación local.",
      "Si algunas horas extra se pagan al doble, introduce cuántas. Se cuentan dentro de las horas extra.",
      "Consulta el sueldo bruto total, el reparto entre pago normal y pago de horas extra, y la tarifa por hora efectiva.",
    ],
    formulas: [
      {
        title: "Horas normales y horas extra",
        expression: "normales = min(H, T); extra = max(0, H − T)",
        explanation: "H son las horas trabajadas en la semana y T el umbral de horas normales.",
      },
      {
        title: "Sueldo bruto",
        expression: "pago = normales × r + (extra − D) × r × m + D × r × d",
        explanation: "r es la tarifa por hora, m el multiplicador de horas extra, D las horas al doble y d el multiplicador de esas horas.",
      },
      {
        title: "Tarifa por hora efectiva",
        expression: "efectiva = pago ÷ H",
        explanation: "Lo que se paga de media por cada hora trabajada una vez incluido el recargo de las horas extra.",
      },
    ],
    examples: [
      {
        title: "46 horas a 22 US$ la hora",
        steps: ["Pago normal = 40 × 22 US$ = 880 US$", "Horas extra = 6 h × 22 US$ × 1,5 = 198 US$", "Total = 880 US$ + 198 US$ = 1078 US$"],
      },
      {
        title: "52 horas a 18,50 US$ con 4 horas al doble",
        steps: [
          "Pago normal = 40 × 18,50 US$ = 740 US$",
          "Horas extra = 12, de las que 8 se pagan a 1,5 veces: 8 × 27,75 US$ = 222 US$",
          "Horas al doble = 4 × 37 US$ = 148 US$",
          "Total = 740 US$ + 222 US$ + 148 US$ = 1110 US$, unos 21,35 US$ por hora trabajada",
        ],
      },
      {
        title: "Contrato de 37,5 horas con horas extra a 1,25×",
        steps: ["Pago normal = 37,5 × 16 £ = 600 £", "Horas extra = 6,5 h × 16 £ × 1,25 = 130 £", "Total = 730 £"],
      },
    ],
    assumptions: [
      "Es una estimación del sueldo bruto, antes del impuesto sobre la renta, las cotizaciones sociales, las prestaciones y otras deducciones. No es asesoramiento jurídico ni fiscal y no ha sido revisada por profesionales.",
      "Las normas sobre horas extra varían según el país, el estado y el contrato. En algunos lugares hay horas extra a partir de cierto número de horas al día, o pago al doble tras turnos más largos; esta herramienta solo aplica un umbral semanal y las horas al doble que introduzcas.",
      "Según la norma federal de EE. UU., la tarifa normal puede incluir primas, comisiones y pluses de turno. Aquí la tarifa normal es la cifra por hora que introduces.",
      "Los empleados exentos, como muchos directivos y profesionales asalariados, pueden no tener derecho a horas extra.",
    ],
    faqs: [
      {
        question: "¿Qué significa cobrar las horas extra a 1,5 veces?",
        answer:
          "Cada hora extra se paga a 1,5 veces la tarifa normal. A 20 US$ la hora, una hora extra se paga a 30 US$, así que el recargo es de 10 US$ además del pago normal.",
      },
      {
        question: "¿Puede mi empresa promediar las horas en dos semanas?",
        answer:
          "Según la norma federal de EE. UU., no. Cada semana laboral es un periodo fijo de 168 horas que se considera por separado, así que 50 horas una semana y 30 la siguiente siguen suponiendo 10 horas extra en la primera semana.",
      },
      {
        question: "¿Las horas al doble se suman a las horas extra?",
        answer:
          "No. En esta calculadora, las horas al doble forman parte de las horas extra. Si hiciste 12 horas extra y 4 de ellas fueron al doble, las otras 8 se pagan con el multiplicador de horas extra.",
      },
    ],
    sourcesUsedFor: [
      "La norma federal de EE. UU.: los empleados cubiertos no exentos cobran al menos 1,5 veces la tarifa normal por las horas que superan 40 en una semana laboral.",
      "La semana laboral como periodo fijo de 168 horas, la prohibición de promediar horas entre semanas y cómo se determina la tarifa normal.",
    ],
  },
  text: {
    rate: "Tarifa por hora normal",
    rateHelp: "La tarifa por una hora de trabajo ordinario, sin ningún recargo por horas extra.",
    hours: "Total de horas trabajadas en la semana",
    threshold: "Umbral de horas normales",
    thresholdHelp: "Horas pagadas a la tarifa normal antes de que empiecen las horas extra. Según la norma federal de EE. UU., son 40 horas por semana laboral.",
    multiplier: "Multiplicador de horas extra",
    multiplierHelp: "1,5 significa pagar las horas extra a 1,5 veces la tarifa.",
    doubleHours: "Horas al doble (opcional)",
    doubleHoursHelp:
      "Horas pagadas a la tarifa doble, más alta. Forman parte de las horas extra, no se suman aparte. Déjalo vacío o en 0 si no hay ninguna.",
    doubleMultiplier: "Multiplicador de las horas al doble",
    errors: {
      doubleExceeds: "Las horas al doble no pueden superar las horas extra ({overtime} h).",
    },
    grossPay: "Sueldo bruto total",
    caption: "{hours} h a {rate} la hora, con horas extra a partir de {threshold} h a {multiplier}× la tarifa normal.",
    regularPay: "Pago normal",
    overtimePay: "Pago de horas extra",
    doublePay: "Pago de horas al doble",
    regularHours: "Horas normales",
    overtimeHours: "Horas extra (incluidas las horas al doble)",
    overtimeRate: "Tarifa por hora extra",
    doubleRate: "Tarifa por hora al doble",
    effectiveRate: "Tarifa por hora efectiva",
    notes: {
      noOvertime: "Las horas trabajadas no superan el umbral, así que no corresponden horas extra.",
      gross: "Los importes son sueldo bruto, antes de impuestos y deducciones.",
      rules: "Las normas sobre horas extra dependen del país, el estado y el contrato laboral; en algunos lugares también hay horas extra diarias.",
    },
  },
};

export default es;
