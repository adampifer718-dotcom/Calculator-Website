import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const es: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Calculadora de salario a precio por hora",
    shortTitle: "Salario a hora",
    summary: "Convierte un salario bruto anual, mensual, quincenal o de cualquier otro periodo en un precio por hora según tu propio horario.",
    metaTitle: "Calculadora de salario a precio por hora – Cualquier periodo",
    metaDescription:
      "Convierte tu salario en un precio por hora. Introduce el sueldo bruto anual, mensual, quincenal, semanal o diario y tus horas, días laborables y semanas al año.",
    keywords: ["salario por hora", "sueldo a precio hora", "calcular precio hora", "salario anual a hora", "sueldo mensual por hora", "salario bruto por hora"],
    intro: [
      "Esta calculadora convierte el salario bruto de cualquier periodo de pago habitual en su equivalente por hora. También muestra a cuánto equivale ese mismo salario por año, mes, quincena, dos semanas, semana y día laborable.",
      "El resultado depende del horario que introduzcas. Un salario de 60.000 US$ equivale a unos 28,85 US$ por hora con 40 horas semanales durante 52 semanas, pero a unos 30,77 US$ por hora con 37,5 horas semanales.",
    ],
    howToUse: [
      "Introduce tu salario bruto, antes de impuestos y retenciones.",
      "Elige con qué frecuencia cobras ese importe: anual, mensual, quincenal, cada dos semanas, semanal, diario o por hora.",
      "Indica tus horas pagadas por semana, días laborables por semana y semanas pagadas al año. Los valores predeterminados son 40 horas, 5 días y 52 semanas.",
      "Consulta el equivalente por hora y el desglose completo por periodo de pago. Los resultados se actualizan mientras escribes.",
    ],
    formulas: [
      {
        title: "Anualizar el importe",
        expression:
          "Salario anual = importe × periodos al año\nAnual = 1, Mensual = 12, Quincenal = 24, Cada dos semanas = 26\nSemanal = semanas al año\nDiario = días laborables por semana × semanas al año\nPor hora = horas por semana × semanas al año",
        explanation:
          "Los salarios anuales, mensuales, quincenales y cada dos semanas usan un número fijo de periodos del calendario. Los semanales, diarios y por hora se anualizan con el horario que introduzcas.",
      },
      {
        title: "Dividir entre las horas pagadas",
        expression: "Horas anuales = horas por semana × semanas al año\nEquivalente por hora = salario anual ÷ horas anuales",
        explanation: "El equivalente por hora reparte el salario bruto anualizado a partes iguales entre todas las horas pagadas del año.",
      },
      {
        title: "Otros periodos de pago",
        expression: "Salario por periodo = salario anual ÷ periodos al año",
        explanation: "La tabla de desglose divide el importe anualizado entre el número de periodos de cada tipo. Los valores solo se redondean al mostrarlos.",
      },
    ],
    examples: [
      {
        title: "Salario anual de 60.000 US$ a jornada completa",
        steps: ["Horas anuales = 40 × 52 = 2080", "Por hora = 60.000 US$ ÷ 2080 = 28,846… US$"],
      },
      {
        title: "4500 US$ al mes",
        steps: ["Salario anual = 4500 US$ × 12 = 54.000 US$", "Horas anuales = 40 × 52 = 2080", "Por hora = 54.000 US$ ÷ 2080 = 25,961… US$"],
      },
      {
        title: "2000 US$ cada dos semanas con 37,5 horas semanales",
        steps: ["Salario anual = 2000 US$ × 26 = 52.000 US$", "Horas anuales = 37,5 × 52 = 1950", "Por hora = 52.000 US$ ÷ 1950 = 26,666… US$"],
      },
      {
        title: "250 US$ al día, 4 días a la semana, 48 semanas pagadas",
        steps: ["Salario anual = 250 US$ × 4 × 48 = 48.000 US$", "Horas anuales = 32 × 48 = 1536", "Por hora = 48.000 US$ ÷ 1536 = 31,25 US$"],
      },
    ],
    assumptions: [
      "Todos los importes son brutos, antes del impuesto sobre la renta, las cotizaciones a la seguridad social, las aportaciones a planes de pensiones y otras retenciones. Esta calculadora no estima impuestos ni el salario neto.",
      "Los salarios mensuales, quincenales y cada dos semanas se anualizan con 12, 24 y 26 periodos al año, independientemente de las semanas al año que introduzcas.",
      "Los salarios semanales, diarios y por hora se anualizan con tus semanas al año, días laborables por semana y horas por semana.",
      "Las horas extra, las primas, las comisiones, los beneficios sociales y las pausas no remuneradas no se incluyen, salvo que los sumes al importe.",
      "Elegir una moneda solo cambia el símbolo y el formato. No se aplica ningún tipo de cambio.",
      "Los resultados se redondean al mostrarlos. Los cálculos usan la precisión completa.",
    ],
    faqs: [
      {
        question: "¿Cómo convierto mi salario anual en un precio por hora?",
        answer:
          "Divide el salario anual entre el número de horas pagadas en un año. Con 40 horas semanales durante 52 semanas son 2080 horas, así que un salario de 50.000 US$ equivale a 50.000 US$ ÷ 2080 ≈ 24,04 US$ por hora.",
      },
      {
        question: "¿Por qué el pago cada dos semanas se multiplica por 26 y no por 2 × semanas al año?",
        answer:
          "Cobrar cada dos semanas supone 26 pagos en un año normal. Los salarios mensuales, quincenales y cada dos semanas suelen ser fijos por nómina, así que se anualizan con un número de periodos del calendario y no con las semanas pagadas que introduzcas.",
      },
      {
        question: "¿Qué diferencia hay entre cobrar quincenalmente y cada dos semanas?",
        answer:
          "El pago quincenal llega dos veces al mes, con 24 nóminas al año. El pago cada dos semanas llega cada 14 días, con 26 nóminas al año. Con el mismo salario anual, cada nómina bisemanal es menor que una quincenal.",
      },
      {
        question: "¿El precio por hora es mi salario neto?",
        answer:
          "No. El resultado es el salario bruto antes de impuestos y retenciones. Tu salario neto depende de tu situación fiscal, tus beneficios sociales y las retenciones, que esta calculadora no estima.",
      },
      {
        question: "¿Debo usar 52 semanas al año?",
        answer:
          "Usa 52 si cobras todas las semanas del año, incluidas las vacaciones y los festivos pagados. Si algunas semanas no se pagan, introduce solo las semanas pagadas. Un año natural tiene unas 52,14 semanas, valor que también puedes introducir.",
      },
      {
        question: "¿Cambiar la moneda convierte el importe?",
        answer: "No. La moneda solo cambia el formato de los números. Introduce los importes en la moneda en la que cobras.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Salario bruto",
    amountHelp: "Salario antes de impuestos y retenciones.",
    period: "Periodo de pago",
    periodHelp: "Con qué frecuencia recibes el importe anterior.",
    primary: "Equivalente por hora",
    caption: "Salario bruto por hora, convertido desde la periodicidad: {period}.",
    annual: "Salario bruto anual",
    annualHours: "Horas pagadas al año",
  },
};

export default es;
