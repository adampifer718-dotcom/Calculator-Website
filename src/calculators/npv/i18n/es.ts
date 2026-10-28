import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<NpvText> = {
  content: {
    title: "Calculadora de VAN y TIR",
    shortTitle: "VAN y TIR",
    summary:
      "Descuenta una serie de flujos de caja anuales para obtener el valor actual neto, la tasa interna de retorno, el índice de rentabilidad y el plazo de recuperación descontado.",
    metaTitle: "Calculadora de VAN y TIR – Valor actual de flujos de caja",
    metaDescription:
      "Calcula el valor actual neto y la tasa interna de retorno de una inversión según sus flujos de caja anuales, con índice de rentabilidad y payback descontado.",
    keywords: [
      "calculadora VAN",
      "valor actual neto",
      "calculadora TIR",
      "tasa interna de retorno",
      "flujos de caja descontados",
      "índice de rentabilidad",
      "payback descontado",
      "evaluación de inversiones",
    ],
    intro: [
      "El dinero que recibes más adelante vale menos que la misma cantidad hoy, porque el dinero de hoy podría invertirse mientras tanto. El valor actual neto (VAN) expresa cada flujo de caja futuro de un proyecto en valores de hoy descontándolo a tu rentabilidad exigida, y luego resta lo que pagas al inicio.",
      "Un VAN positivo significa que se espera que el proyecto rinda más que esa tasa; un VAN negativo, que rinde menos. La tasa interna de retorno (TIR) es la tasa con la que el VAN es exactamente cero, así que muestra la rentabilidad anual propia del proyecto. Esta página cubre ambas, por lo que no hay una calculadora de TIR aparte.",
    ],
    howToUse: [
      "Elige la moneda e introduce la inversión inicial como una cantidad positiva.",
      "Indica el flujo de caja neto de cada año, empezando por el año 1. Usa el signo menos para un año con salida neta, como una reparación importante.",
      "Introduce la tasa de descuento: la rentabilidad anual que exiges o tu coste de capital.",
      "Consulta el VAN, la TIR, el índice de rentabilidad y el plazo de recuperación descontado, y revisa la tabla año por año.",
    ],
    formulas: [
      {
        title: "Valor actual neto",
        expression: "VAN = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ",
        explanation:
          "C₀ es la inversión inicial, CFₜ el flujo de caja al final del año t y r la tasa de descuento en forma decimal. La suma va del año 1 al último año.",
      },
      {
        title: "Tasa interna de retorno",
        expression: "−C₀ + Σ CFₜ ÷ (1 + TIR)ᵗ = 0",
        explanation:
          "Se obtiene por bisección entre −99,99 % y 1.000 % anual. Cuando los flujos de caja cambian de signo más de una vez puede haber varias soluciones, así que no se indica ninguna TIR.",
      },
      {
        title: "Índice de rentabilidad",
        expression: "IR = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀",
        explanation: "El valor actual recibido por cada unidad invertida. Un IR mayor que 1 corresponde a un VAN positivo.",
      },
      {
        title: "Plazo de recuperación descontado",
        expression: "k + (−acumuladoₖ) ÷ CF descontadoₖ₊₁",
        explanation:
          "k es el último año en el que el valor descontado acumulado sigue siendo negativo. La fracción supone que el flujo de caja del año siguiente llega de forma uniforme.",
      },
    ],
    examples: [
      {
        title: "Máquina de 50.000 US$ con cinco años de flujos de caja al 8 %",
        steps: [
          "Valores descontados: 12.000 ÷ 1,08 ≈ 11.111,11; 15.000 ÷ 1,08² ≈ 12.860,08; 18.000 ÷ 1,08³ ≈ 14.288,98; 20.000 ÷ 1,08⁴ ≈ 14.700,60; 9.000 ÷ 1,08⁵ ≈ 6.125,25",
          "Valor actual de los flujos de caja ≈ 59.086,02 US$",
          "VAN = 59.086,02 − 50.000 ≈ 9.086,02 US$, y la TIR es de aproximadamente el 14,60 %",
        ],
      },
      {
        title: "Proyecto de 250.000 € con una rentabilidad exigida del 12 %",
        steps: [
          "Valor actual de los cinco flujos de caja ≈ 246.211,12 €",
          "VAN = 246.211,12 − 250.000 ≈ −3.788,88 €",
          "La TIR es de aproximadamente el 11,38 %, justo por debajo del 12 % exigido, y por eso el VAN es negativo",
        ],
      },
      {
        title: "Flujos de caja que cambian de signo dos veces",
        steps: [
          "VAN = −1.000 + 3.000 ÷ 1,1 − 2.200 ÷ 1,1² = −1.000 + 2.727,27 − 1.818,18 ≈ −90,91 US$",
          "Tanto el 27,64 % como el 72,36 % hacen que el VAN sea cero, así que la TIR se indica como no única",
        ],
      },
    ],
    assumptions: [
      "Cada flujo de caja llega al final de su año, y la inversión inicial se paga al principio (año 0). Con flujos a mitad de año o mensuales se obtiene un VAN distinto.",
      "Se usa una única tasa de descuento constante para todos los años. Los impuestos, la inflación y los costes de financiación solo se incluyen si ya los has incorporado a los flujos de caja o a la tasa.",
      "La TIR supone que los flujos de caja cambian de signo una sola vez. Con varios cambios de signo, la TIR puede tener más de un valor o ninguno, y el VAN es la referencia más fiable.",
      "Es una estimación para comparar opciones, no asesoramiento de inversión ni financiero, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Qué tasa de descuento debo usar?",
        answer:
          "Usa la rentabilidad que podrías obtener en otra inversión de riesgo similar, o el coste de capital de tu organización. Una tasa más alta reduce el valor de los flujos de caja más lejanos, así que a los proyectos más arriesgados se les suele aplicar una tasa más alta.",
      },
      {
        question: "¿Por qué la TIR y el VAN pueden no coincidir al comparar proyectos?",
        answer:
          "La TIR es un porcentaje y no tiene en cuenta el tamaño del proyecto, mientras que el VAN es una cantidad. Un proyecto pequeño puede tener una TIR más alta pero aportar menos valor que uno más grande. Cuando ambos ordenan los proyectos de forma distinta, en general se prefiere el VAN calculado a tu rentabilidad exigida.",
      },
      {
        question: "¿Por qué la TIR aparece como no única?",
        answer:
          "Cuando los flujos de caja alternan entre salidas y entradas más de una vez, por ejemplo con un gran coste de limpieza al final, el VAN puede cruzar el cero con varias tasas. Entonces ninguna tasa única describe el proyecto, así que la calculadora solo indica el VAN.",
      },
    ],
    sourcesUsedFor: [
      "Las definiciones del valor actual neto y de la tasa interna de retorno, y los criterios de aceptación y rechazo de cada uno.",
      "La fórmula de descuento del VAN y la definición de la TIR como la tasa con la que el VAN es igual a cero.",
    ],
  },
  text: {
    initial: "Inversión inicial",
    initialHelp: "La cantidad que se paga al principio (año 0). Introdúcela como un número positivo; se trata como una salida.",
    cashFlows: "Flujos de caja anuales",
    cashFlowsHelp:
      "Flujo de caja neto al final del año 1, del año 2, etc., separados por comas, espacios o saltos de línea. Usa el signo menos para un año con salida neta.",
    rate: "Tasa de descuento",
    rateHelp: "Tu rentabilidad exigida o coste de capital anual.",
    errors: {
      empty: "Introduce al menos un flujo de caja.",
      tooMany: "Introduce como máximo {max} flujos de caja.",
      notNumber: "«{token}» no es un número. Separa los valores con comas, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    tooBig: "{value} es demasiado grande. Cada flujo de caja puede ser como máximo de {max}.",
    npv: "Valor actual neto (VAN)",
    caption: "{count} descontados al {rate} anual, tras una inversión inicial de {initial}.",
    yearCount: forms("{n} año de flujos de caja", "{n} años de flujos de caja"),
    irr: "Tasa interna de retorno (TIR)",
    irrNone: "No encontrada",
    irrNotUnique: "No única",
    irrOutOfRange: "No encontrada entre {low} y {high}",
    pvInflows: "Valor actual de los flujos de caja anuales",
    profitabilityIndex: "Índice de rentabilidad (VA de los flujos de caja ÷ inversión inicial)",
    totalUndiscounted: "Flujo de caja total sin descontar (incluida la inversión inicial)",
    payback: "Plazo de recuperación descontado",
    paybackYears: forms("{n} año", "{n} años"),
    paybackNever: "No se alcanza con estos flujos de caja",
    table: {
      caption: "Flujos de caja por año",
      year: "Año",
      cashFlow: "Flujo de caja",
      discounted: "Valor descontado",
      cumulative: "Valor descontado acumulado",
      yearLabel: "Año {n}",
    },
    notes: {
      positive: "Un VAN positivo significa que los flujos de caja rinden más que la tasa de descuento después de recuperar la inversión inicial.",
      negative: "Un VAN negativo significa que los flujos de caja rinden menos que la tasa de descuento.",
      zero: "Un VAN de cero significa que los flujos de caja rinden exactamente la tasa de descuento.",
      irrNone: "Los flujos de caja nunca cambian de signo (son todos salidas o todos entradas), así que ninguna tasa hace que el VAN sea cero.",
      irrNotUnique:
        "Los flujos de caja cambian de signo más de una vez, así que puede haber varias tasas que hagan que el VAN sea cero, o ninguna. No se indica la TIR; guíate por el VAN.",
      irrOutOfRange: "Ninguna tasa entre {low} y {high} anual hace que el VAN sea cero.",
      payback: "El plazo de recuperación descontado supone que el flujo de caja de cada año llega de forma uniforme a lo largo del año en que se cruza el cero.",
      timing: "Se supone que los flujos de caja llegan al final de cada año y se descuentan a una tasa constante.",
    },
  },
};

export default es;
