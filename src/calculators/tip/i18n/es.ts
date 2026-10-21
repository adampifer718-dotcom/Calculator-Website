import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const es: CalculatorTranslation<TipText> = {
  content: {
    title: "Calculadora de propinas",
    shortTitle: "Propinas",
    summary: "Calcula la propina, el total de la cuenta y lo que paga cada persona al dividirla.",
    metaTitle: "Calculadora de propinas – Propina y reparto de la cuenta",
    metaDescription:
      "Calcula la propina de cualquier cuenta y porcentaje, el total con propina y cuánto paga cada persona si la cuenta se divide a partes iguales.",
    keywords: ["propina", "calcular propina", "dividir la cuenta", "restaurante", "cuenta a partes iguales", "cargo por servicio"],
    intro: [
      "Introduce la cuenta y un porcentaje de propina para ver la propina y el total. Añade el número de personas para dividirla a partes iguales.",
      "Las costumbres varían según el país y el servicio, así que elige el porcentaje que corresponda.",
    ],
    howToUse: [
      "Introduce el importe de la cuenta.",
      "Introduce el porcentaje de propina.",
      "Introduce cuántas personas dividen la cuenta.",
      "Consulta la propina, el total y el importe por persona.",
    ],
    formulas: [
      { title: "Propina", expression: "Propina = cuenta × % de propina ÷ 100", explanation: "Hay quien deja la propina sobre el importe antes de impuestos; introduce el que prefieras." },
      { title: "División", expression: "Por persona = (cuenta + propina) ÷ personas", explanation: "Un reparto a partes iguales." },
    ],
    examples: [
      { title: "Cuenta de 80 US$, propina del 18 %, 4 personas", steps: ["Propina = 80 US$ × 0,18 = 14,40 US$", "Total = 94,40 US$; cada persona paga 23,60 US$"] },
      { title: "Cuenta de 45 US$, propina del 20 %, 1 persona", steps: ["Propina = 45 US$ × 0,20 = 9 US$", "Total = 54 US$"] },
    ],
    assumptions: [
      "La cuenta se divide a partes iguales; los importes se redondean al céntimo solo al mostrarlos.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Cuánta propina debo dejar?",
        answer: "Depende de la costumbre local y del servicio. En EE. UU. es habitual dejar entre el 15 y el 20 % en restaurantes; en otros países la propina puede ser menor o estar incluida.",
      },
      { question: "¿Se calcula la propina antes o después de impuestos?", answer: "Ambas opciones son habituales. Introduce como cuenta el importe antes o después de impuestos, el que prefieras." },
      { question: "¿Cómo divido una cuenta de forma desigual?", answer: "Calcula por separado la parte de la cuenta de cada persona y aplica el porcentaje de propina a cada una." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Importe de la cuenta",
    percent: "Porcentaje de propina",
    people: "Dividir entre",
    tip: "Propina",
    total: "Total con propina",
    each: "Cada persona paga",
    tipEach: "Propina por persona",
  },
};

export default es;
