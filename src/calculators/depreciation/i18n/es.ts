import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const es: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Calculadora de amortización de activos",
    shortTitle: "Amortización",
    summary:
      "Elabora un cuadro de amortización anual con el método lineal, el de saldo decreciente o el de suma de los dígitos de los años.",
    metaTitle: "Calculadora de amortización de activos – Lineal, SD y SDA",
    metaDescription:
      "Calcula la amortización anual y el valor contable con el método lineal, el saldo doble o 150 % decreciente o la suma de dígitos, y consulta el cuadro completo.",
    keywords: [
      "amortización de activos",
      "amortización lineal",
      "saldo decreciente",
      "doble saldo decreciente",
      "suma de los dígitos de los años",
      "valor contable",
      "cuadro de amortización",
      "valor residual",
    ],
    intro: [
      "La amortización (o depreciación) reparte el coste de un activo de larga duración, como una máquina, un vehículo o un ordenador, entre los años en que se usa. Cada año una parte del coste pasa a ser gasto, y el valor contable del activo baja hasta llegar al valor residual previsto.",
      "Esta calculadora compara cuatro métodos contables habituales. El lineal imputa el mismo importe cada año. El de saldo decreciente y el de suma de los dígitos de los años imputan más en los primeros años y menos después, lo que encaja con activos que pierden valor deprisa.",
    ],
    howToUse: [
      "Elige la moneda e introduce el coste del activo.",
      "Introduce el valor residual que esperas al final de su vida útil, o 0.",
      "Introduce la vida útil en años enteros.",
      "Elige un método y consulta la amortización del primer año y el cuadro completo de amortización, amortización acumulada y valor contable.",
    ],
    formulas: [
      {
        title: "Lineal",
        expression: "D = (C − S) ÷ N",
        explanation: "C es el coste, S el valor residual y N la vida útil en años. La cuota es la misma cada año.",
      },
      {
        title: "Saldo decreciente",
        expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)",
        explanation:
          "Bₖ₋₁ es el valor contable al inicio del año k y f es 2 (doble saldo decreciente) o 1,5. En el último año la cuota es lo que quede por encima del valor residual.",
      },
      {
        title: "Suma de los dígitos de los años",
        expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)",
        explanation: "Para una vida útil de 5 años los dígitos suman 15, así que las fracciones anuales son 5/15, 4/15, 3/15, 2/15 y 1/15.",
      },
      {
        title: "Valor contable",
        expression: "Bₖ = C − (D₁ + … + Dₖ)",
        explanation: "El coste menos la amortización acumulada. Termina en el valor residual.",
      },
    ],
    examples: [
      {
        title: "Lineal: furgoneta de 30.000 US$, valor residual de 3000 US$, 5 años",
        steps: [
          "Importe amortizable = 30.000 − 3000 = 27.000 US$",
          "Amortización anual = 27.000 ÷ 5 = 5400 US$",
          "Valor contable tras el año 5 = 3000 US$",
        ],
      },
      {
        title: "Doble saldo decreciente: equipo de 12.000 US$, valor residual de 1500 US$, 5 años",
        steps: [
          "Tasa = 2 ÷ 5 = 40 % del valor contable cada año",
          "Año 1 = 12.000 × 0,40 = 4800 US$, quedan 7200 US$",
          "Años 2–4 = 2880 US$, 1728 US$ y 1036,80 US$, quedan 1555,20 US$",
          "El año 5 imputa los 55,20 US$ restantes, de modo que el valor contable termina en 1500 US$",
        ],
      },
      {
        title: "Suma de los dígitos de los años: máquina de 50.000 €, valor residual de 5000 €, 10 años",
        steps: ["Dígitos = 10 × 11 ÷ 2 = 55", "Año 1 = 45.000 × 10 ÷ 55 ≈ 8181,82 €", "Año 2 = 45.000 × 9 ÷ 55 ≈ 7363,64 €"],
      },
    ],
    assumptions: [
      "Son métodos contables con el criterio de año completo: en el primer año se imputa un año entero de amortización, sin criterios de medio año, mitad de trimestre ni mitad de mes.",
      "En EE. UU., la amortización fiscal de la mayoría de los bienes empresariales usa el sistema MACRS, descrito en la Publicación 946 del IRS, con sus propios periodos de recuperación, criterios y tablas de porcentajes. Esta herramienta no calcula MACRS, la Sección 179 ni la amortización adicional (bonus depreciation), y otros países tienen sus propias normas fiscales.",
      "Con el saldo decreciente, el valor contable nunca baja del valor residual y el importe restante se imputa en el último año. Algunas empresas pasan al método lineal a mitad de la vida útil; esta herramienta no lo hace.",
      "Es una estimación, no asesoramiento fiscal ni contable, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Qué método de amortización debo usar?",
        answer:
          "El lineal es el más sencillo y el más habitual en los estados financieros. Los métodos acelerados encajan con activos que pierden pronto la mayor parte de su valor o utilidad, como los vehículos y los ordenadores. Tu asesor contable y la normativa local deciden cuál puedes usar a efectos fiscales.",
      },
      {
        question: "¿Por qué el último año del saldo decreciente se ve distinto?",
        answer:
          "Un porcentaje fijo de un saldo que disminuye nunca llega exactamente al valor residual. La calculadora imputa en el último año lo que quede por encima del valor residual, que puede ser mayor o menor que la cuota del año anterior.",
      },
      {
        question: "¿Se resta el valor residual antes de aplicar la tasa de saldo decreciente?",
        answer:
          "No. La tasa de saldo decreciente se aplica al valor contable completo. El valor residual solo actúa como suelo: el valor contable no puede bajar de él.",
      },
    ],
    sourcesUsedFor: [
      "Que la amortización fiscal en EE. UU. de la mayoría de los bienes empresariales usa MACRS, distinto de los métodos contables calculados aquí, y los conceptos generales de amortización lineal y de saldo decreciente.",
    ],
  },
  text: {
    cost: "Coste del activo",
    costHelp: "El precio de compra más los costes para dejar el activo listo para su uso, como el transporte y la instalación.",
    salvage: "Valor residual",
    salvageHelp: "Lo que esperas que valga el activo al final de su vida útil. Usa 0 si no tendrá ningún valor.",
    life: "Vida útil",
    method: "Método",
    methods: {
      straightLine: "Lineal",
      declining200: "Doble saldo decreciente (200 %)",
      declining150: "Saldo decreciente al 150 %",
      sumOfYears: "Suma de los dígitos de los años",
    },
    errors: {
      salvage: "El valor residual debe ser menor que el coste del activo.",
    },
    firstYear: "Amortización del primer año",
    caption: "{method}: coste de {cost}, valor residual de {salvage}, {life}.",
    lifeYears: { zero: "{n} años", one: "{n} año", two: "{n} años", few: "{n} años", many: "{n} años", other: "{n} años" },
    base: "Importe amortizable (coste − valor residual)",
    rateStraight: "Tasa aplicada (parte del importe amortizable por año)",
    rateDeclining: "Tasa aplicada al valor contable cada año",
    rateSumOfYears: "Fracción del importe amortizable en el primer año",
    total: "Amortización total durante la vida útil",
    finalYear: "Amortización del último año",
    table: {
      caption: "Cuadro de amortización",
      year: "Año",
      depreciation: "Amortización",
      accumulated: "Amortización acumulada",
      bookValue: "Valor contable al final del año",
      yearLabel: "Año {n}",
    },
    notes: {
      fullYear: "En el primer año se imputa un año completo de amortización, sea cual sea la fecha de compra.",
      declining:
        "La cuota de cada año es la tasa por el valor contable al inicio del año, limitada para que el valor contable nunca baje del valor residual. Lo que quede se imputa en el último año.",
      macrs: "La amortización fiscal en EE. UU. usa MACRS (Publicación 946 del IRS), que esta herramienta no calcula.",
    },
  },
};

export default es;
