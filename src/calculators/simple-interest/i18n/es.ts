import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const es: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Calculadora de interés simple",
    shortTitle: "Interés simple",
    summary: "Calcula el interés simple y el importe total que se debe o se obtiene a partir del capital, el tipo anual y el plazo.",
    metaTitle: "Calculadora de interés simple – I = Prt",
    metaDescription:
      "Calcula el interés simple con I = Prt para un plazo en años, meses o días, y consulta el importe total, el interés por año y el interés por mes.",
    keywords: ["interés simple", "I = Prt", "fórmula del interés simple", "capital", "tipo de interés", "calcular intereses", "importe total"],
    intro: [
      "El interés simple se calcula solo sobre el importe original. Los intereses de cada año son los mismos, así que el total crece en línea recta en lugar de acelerarse como una bola de nieve.",
      "Se usa en muchos préstamos a corto plazo, en algunos préstamos para coches, en bonos que pagan un cupón fijo y en los problemas de finanzas de clase. Introduce el capital, el tipo anual y el tiempo durante el que se presta o se invierte el dinero.",
    ],
    howToUse: [
      "Elige la moneda en la que quieres ver los importes.",
      "Introduce el capital: el importe prestado o depositado.",
      "Introduce el tipo de interés anual como porcentaje.",
      "Introduce el plazo y elige años, meses o días.",
      "Consulta los intereses, el importe total y los intereses de cada año y de cada mes.",
    ],
    formulas: [
      {
        title: "Interés simple",
        expression: "I = P × r × t",
        explanation: "P es el capital, r el tipo anual en decimal (5 % = 0,05) y t el tiempo en años.",
      },
      { title: "Importe total", expression: "A = P + I = P × (1 + r × t)", explanation: "Lo que se devuelve o se tiene al final." },
      {
        title: "Conversión del tiempo",
        expression: "t = meses ÷ 12, o t = días ÷ 365",
        explanation: "Los meses y los días se pasan a años antes de aplicar la fórmula.",
      },
    ],
    examples: [
      { title: "2500 US$ al 4,2 % durante 3 años", steps: ["I = 2500 × 0,042 × 3", "= 315 US$", "A = 2500 + 315 = 2815 US$"] },
      { title: "8000 US$ al 6,5 % durante 18 meses", steps: ["t = 18 ÷ 12 = 1,5 años", "I = 8000 × 0,065 × 1,5", "= 780 US$"] },
      { title: "1200 US$ al 9 % durante 90 días", steps: ["t = 90 ÷ 365 ≈ 0,2466 años", "I = 1200 × 0,09 × 90 ÷ 365", "≈ 26,63 US$"] },
    ],
    assumptions: [
      "El interés es simple: nunca se suma al capital, así que no se generan intereses sobre los intereses.",
      "Los días se convierten con un año de 365 días. Algunos prestamistas y mercados monetarios usan un año de 360 días (a veces llamado interés comercial u ordinario), que da algo más de interés para el mismo número de días.",
      "El tipo es fijo durante todo el periodo. No se incluyen comisiones, impuestos ni amortizaciones anticipadas.",
      "Elegir una moneda solo cambia el formato. Esto no es asesoramiento financiero.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia el interés simple del compuesto?",
        answer:
          "El interés simple siempre se calcula sobre el capital inicial. El interés compuesto suma los intereses de cada periodo al saldo, así que los intereses posteriores también se generan sobre los anteriores y el total crece más deprisa.",
      },
      {
        question: "¿Cómo calculo el tipo si conozco los intereses?",
        answer:
          "Despeja la fórmula: r = I ÷ (P × t). Por ejemplo, 90 US$ de intereses sobre 1000 US$ en 2 años significa r = 90 ÷ 2000 = 0,045, es decir, un 4,5 % anual.",
      },
      {
        question: "¿Por qué la cifra de mi prestamista difiere un poco cuando el plazo es en días?",
        answer:
          "Los prestamistas pueden dividir entre 360 en lugar de 365, o contar los días reales de un año bisiesto. Dividir entre 360 aumenta los intereses en torno a un 1,4 %.",
      },
    ],
    sourcesUsedFor: ["La fórmula del interés simple I = Prt y el significado de cada variable."],
  },
  text: {
    principal: "Capital",
    principalHelp: "El importe prestado o depositado.",
    rate: "Tipo de interés anual",
    time: "Plazo",
    timeUnit: "Unidad de tiempo",
    timeUnits: { years: "Años", months: "Meses", days: "Días" },
    tooLong: "Usa un plazo de 100 años o menos.",
    interest: "Interés simple",
    caption: "Intereses sobre {principal} al {rate} anual, sin capitalización.",
    total: "Importe total (capital + intereses)",
    perYear: "Intereses por año",
    perMonth: "Intereses por mes",
    timeInYears: "Plazo en años",
    notes: {
      simple: "El interés simple se aplica solo al capital; los intereses no generan nuevos intereses.",
      days: "Los días se convierten con un año de 365 días. Algunos prestamistas usan un año de 360 días, que da algo más de interés.",
    },
  },
};

export default es;
