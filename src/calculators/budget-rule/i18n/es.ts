import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const es: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "Calculadora de presupuesto 50/30/20",
    shortTitle: "Presupuesto 50/30/20",
    summary: "Reparte tus ingresos netos mensuales entre necesidades, deseos y ahorro con la regla 50/30/20 u otro reparto sencillo del presupuesto.",
    metaTitle: "Calculadora de presupuesto 50/30/20 – Reparte tus ingresos",
    metaDescription:
      "Reparte tus ingresos netos con la regla 50/30/20, 70/20/10 u 80/20, o con tu propio reparto, y consulta cada partida al mes y al año.",
    keywords: ["regla 50/30/20", "calculadora de presupuesto", "necesidades deseos ahorro", "presupuesto 70/20/10", "presupuesto 80/20", "presupuesto mensual", "sueldo neto"],
    intro: [
      "Una regla de porcentajes es una forma rápida de empezar un presupuesto sin controlar decenas de categorías. La más conocida es la 50/30/20: la mitad de tus ingresos netos para necesidades, el 30 % para deseos y el 20 % para ahorrar y reducir deudas.",
      "Introduce tus ingresos mensuales después de impuestos y elige una regla, o fija tus propios tres porcentajes. La calculadora muestra cuánto va a cada partida cada mes y a lo largo de un año.",
    ],
    howToUse: [
      "Elige la moneda de los importes.",
      "Introduce tus ingresos netos mensuales: lo que llega a tu cuenta bancaria después de impuestos.",
      "Elige una regla de presupuesto, o elige Reparto personalizado e introduce tres porcentajes que sumen el 100 %.",
      "Consulta el importe de cada partida al mes y al año.",
    ],
    formulas: [
      { title: "Importe por partida", expression: "partida = ingresos × porcentaje ÷ 100", explanation: "En la regla 50/30/20, los porcentajes son el 50 % para necesidades, el 30 % para deseos y el 20 % para ahorro." },
      { title: "Importe anual", expression: "anual = mensual × 12", explanation: "Cada importe mensual a lo largo de doce meses." },
      { title: "Reparto personalizado", expression: "necesidades % + deseos % + ahorro % = 100 %", explanation: "Tus propios porcentajes deben cubrir todos los ingresos, ni más ni menos." },
    ],
    examples: [
      {
        title: "3850 US$ al mes con la regla 50/30/20",
        steps: ["Necesidades = 3850 × 50 % = 1925 US$", "Deseos = 3850 × 30 % = 1155 US$", "Ahorro = 3850 × 20 % = 770 US$"],
      },
      {
        title: "5200 US$ al mes con la regla 70/20/10",
        steps: ["Gastos = 5200 × 70 % = 3640 US$", "Ahorro = 5200 × 20 % = 1040 US$", "Pago de deudas o donativos = 5200 × 10 % = 520 US$"],
      },
      {
        title: "2900 US$ al mes con un reparto personalizado 55/25/20",
        steps: ["55 + 25 + 20 = 100 %", "Necesidades = 2900 × 55 % = 1595 US$", "Deseos = 725 US$; ahorro = 580 US$"],
      },
    ],
    assumptions: [
      "Estos repartos son reglas prácticas, no asesoramiento financiero. No tienen en cuenta tus deudas, dónde vives ni tus objetivos.",
      "Los ingresos son el sueldo neto después de impuestos y retenciones de nómina. Si el ahorro para la jubilación ya se descuenta de tu nómina, puedes contarlo en la partida de ahorro.",
      "El reparto 50/30/20 se atribuye popularmente al libro All Your Worth, de 2005, de Elizabeth Warren y Amelia Warren Tyagi. Los repartos 70/20/10 y 80/20 son variantes informales sin una fuente única.",
      "Los pagos mínimos de deudas suelen contarse como necesidades; lo que pagues por encima del mínimo va en la partida de ahorro y pago de deudas.",
    ],
    faqs: [
      {
        question: "¿Qué cuenta como necesidad?",
        answer: "Las necesidades son los gastos que te costaría dejar de pagar: alquiler o hipoteca, suministros, la compra básica, seguros, el transporte al trabajo y los pagos mínimos de préstamos. Comer fuera, las plataformas de streaming, los viajes y las aficiones son deseos.",
      },
      {
        question: "¿Y si mis necesidades superan el 50 %?",
        answer: "Es habitual donde la vivienda es cara. Usa un reparto personalizado que refleje tus costes reales y busca formas de reducir las necesidades o aumentar los ingresos con el tiempo. La regla es un objetivo, no un examen que se aprueba o se suspende.",
      },
      {
        question: "¿Debo usar los ingresos brutos o netos?",
        answer: "Usa los ingresos netos, lo que cobras después de impuestos. La regla está pensada para el dinero que de verdad tienes para gastar y ahorrar cada mes.",
      },
    ],
    sourcesUsedFor: [
      "Qué es un presupuesto y por qué se planifican los ingresos frente al gasto y el ahorro.",
      "El origen de la regla 50/30/20 en el libro All Your Worth, de Elizabeth Warren y Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Ingresos netos mensuales",
    incomeHelp: "Tu sueldo después del impuesto sobre la renta y otras retenciones, en un mes.",
    rule: "Regla de presupuesto",
    rules: {
      "50-30-20": "50/30/20 (necesidades, deseos, ahorro)",
      "70-20-10": "70/20/10 (gastos, ahorro, deudas o donativos)",
      "80-20": "80/20 (gastos, ahorro)",
      custom: "Reparto personalizado",
    },
    needsPct: "Necesidades",
    wantsPct: "Deseos",
    savingsPct: "Ahorro y pago de deudas",
    customHelp: "Los tres porcentajes deben sumar el 100 %.",
    sumError: "Los tres porcentajes suman {sum}. Cámbialos para que sumen el 100 %.",
    buckets: {
      needs: "Necesidades",
      wants: "Deseos",
      savings: "Ahorro y pagos extra de deudas",
      spending: "Gastos del día a día (necesidades y deseos)",
      savingsOnly: "Ahorro",
      extra: "Pago de deudas o donativos",
    },
    primaryCaption: "El {percent} de {income} al mes para esta partida según la regla {rule}.",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "personalizada" },
    yearlyIncome: "Ingresos netos anuales",
    tableCaption: "Importes mensuales y anuales de cada partida",
    tableColumns: { bucket: "Partida", share: "Porcentaje", monthly: "Al mes", yearly: "Al año" },
    notes: {
      thumb: "Las reglas de presupuesto son puntos de partida aproximados, no asesoramiento. Ajusta el reparto a tus propios costes y objetivos.",
      needs: "Las necesidades son los gastos que tienes que pagar, como la vivienda, los suministros, la compra, los seguros y los pagos mínimos de deudas. Los deseos son todo aquello en lo que podrías recortar.",
    },
  },
};

export default es;
