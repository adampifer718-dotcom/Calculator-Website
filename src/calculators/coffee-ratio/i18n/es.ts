import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const es: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Calculadora de proporción café-agua",
    shortTitle: "Proporción de café",
    summary:
      "Calcula cuánto café molido usar para una cantidad de agua, o cuánta agua para tu café, en cafetera de goteo, prensa francesa, espresso y cold brew.",
    metaTitle: "Calculadora de proporción café-agua – Gramos por taza",
    metaDescription:
      "Calcula los gramos de café para tu agua, o el agua para tu café, con proporciones editables para goteo, prensa francesa, espresso y cold brew.",
    keywords: [
      "proporción café agua",
      "cuánto café por taza",
      "ratio café",
      "proporción prensa francesa",
      "proporción cold brew",
      "ratio espresso",
      "gramos de café",
    ],
    intro: [
      "La proporción entre café y agua es la forma más sencilla de que el café sepa igual cada vez. Se escribe como 1 : n, es decir, n gramos de agua por cada gramo de café molido: a 1:16, a 20 g de café le corresponden 320 g de agua. Cuanto menor es n, más fuerte sale el café.",
      "Elige un método de preparación para partir de una proporción típica, ajústala a tu gusto y la calculadora obtiene el café para tu agua o el agua para tu café, en gramos, mililitros, onzas líquidas o tazas.",
    ],
    howToUse: [
      "Elige el método de preparación. Se rellena su proporción típica; cámbiala si te gusta el café más fuerte o más suave.",
      "Elige si quieres calcular el café a partir del agua o el agua a partir del café.",
      "Introduce la cantidad y elige su unidad. El resultado aparece en la unidad elegida para el otro ingrediente.",
      "Pesa el café en una báscula de cocina para obtener los resultados más constantes.",
    ],
    formulas: [
      { title: "Café a partir del agua", expression: "café (g) = agua (g) ÷ n", explanation: "Para una proporción de 1 : n. Se toma el agua como 1 g por mL." },
      {
        title: "Agua a partir del café",
        expression: "agua (g) = café (g) × n",
        explanation: "1 taza estadounidense = 8 fl oz estadounidenses = 236,5882365 mL, y 1 oz = 28,349523125 g.",
      },
      {
        title: "Intensidad en gramos por litro",
        expression: "g/L = café (g) ÷ agua (mL) × 1.000",
        explanation: "Una proporción de 1:18 equivale a unos 55,6 g de café por litro de agua.",
      },
    ],
    examples: [
      { title: "Café de filtro con 500 mL de agua a 1:16", steps: ["500 mL de agua pesan 500 g", "Café = 500 ÷ 16 = 31,25 g"] },
      {
        title: "Prensa francesa con 30 g de café a 1:12, agua en tazas",
        steps: ["Agua = 30 × 12 = 360 g = 360 mL", "En tazas estadounidenses: 360 ÷ 236,588 ≈ 1,52 tazas"],
      },
      {
        title: "Concentrado de cold brew con 4 tazas de agua a 1:8",
        steps: ["4 tazas estadounidenses = 4 × 236,588 ≈ 946,35 mL de agua", "Café = 946,35 ÷ 8 ≈ 118,29 g, unas 4,17 oz"],
      },
    ],
    assumptions: [
      "Las proporciones propuestas para cada método son puntos de partida habituales, no reglas. El gusto, el grado de tueste, la molienda y el tiempo de extracción cambian la proporción ideal.",
      "Se toma el agua como 1 g por mL. El café molido retiene parte del agua, así que obtienes un poco menos de café preparado que el agua utilizada.",
      "En el espresso, la proporción se toma como café seco frente al peso de la bebida en la taza, como suelen expresarlo los baristas.",
      "Las cantidades de café son en peso. Los cacitos y las cucharas contienen cantidades distintas según la molienda y el tueste, así que no se convierten.",
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor proporción entre café y agua?",
        answer:
          "No hay una única proporción ideal. Para el café de goteo y de filtro, mucha gente empieza entre 1:15 y 1:17 y luego ajusta; la conocida pauta Golden Cup de la Specialty Coffee Association equivale a aproximadamente 1:18. Si el café sabe flojo, baja n; si sabe demasiado fuerte, súbela.",
      },
      {
        question: "¿Cuánto café necesito para una taza?",
        answer:
          "Para una taza estadounidense (unos 237 mL) a 1:16, usa unos 14,8 g de café. Muchas tazas grandes contienen más de una taza estadounidense, así que mide el volumen de la tuya para obtener una respuesta más precisa.",
      },
      {
        question: "¿Por qué pesar el café en lugar de usar cacitos?",
        answer:
          "Un cacito de café puede pesar cantidades bastante distintas según el grano, el tueste y lo fino que esté molido. Pesar tanto el café como el agua hace mucho más fácil repetir una taza que te ha gustado.",
      },
    ],
    sourcesUsedFor: [
      "La conocida pauta Golden Cup de unos 55 g de café por litro de agua (aproximadamente 1:18), indicada solo a modo de comparación.",
    ],
  },
  text: {
    method: "Método de preparación",
    methods: {
      drip: "Goteo o filtro manual",
      frenchPress: "Prensa francesa",
      espresso: "Espresso",
      coldBrew: "Concentrado de cold brew",
      custom: "Proporción personalizada",
    },
    ratio: "Proporción 1 : n (agua por gramo de café)",
    ratioHelp: {
      drip: "Las proporciones habituales para goteo y filtro manual van de alrededor de 1:15 (más fuerte) a 1:17 (más suave). Cámbiala a tu gusto.",
      frenchPress: "Una proporción habitual para prensa francesa es de alrededor de 1:12. Cámbiala a tu gusto.",
      espresso: "En el espresso, la proporción suele ser café frente al peso de la bebida en la taza; alrededor de 1:2 es un punto de partida habitual.",
      coldBrew: "Alrededor de 1:8 da un concentrado que normalmente se diluye antes de beberlo.",
      custom: "Gramos de agua por cada gramo de café molido.",
    },
    solve: "Calcular",
    solveOptions: { coffee: "Café a partir del agua", water: "Agua a partir del café" },
    water: "Cantidad de agua",
    waterUnit: "Unidad del agua",
    waterUnits: { mL: "Mililitros (mL)", g: "Gramos (g)", floz: "Onzas líquidas estadounidenses (fl oz)", cup: "Tazas estadounidenses" },
    coffee: "Cantidad de café molido",
    coffeeUnit: "Unidad del café",
    coffeeUnits: { g: "Gramos (g)", oz: "Onzas (oz)" },
    coffeeNeeded: "Café molido necesario",
    waterNeeded: "Agua necesaria",
    caption: "Con una proporción de {ratio}: {coffee} de café por {water} de agua.",
    ratioText: "1:{n}",
    ratioOut: "Proporción café-agua",
    coffeeG: "Café en gramos",
    coffeeOz: "Café en onzas",
    waterMl: "Agua en mL (= gramos)",
    waterFloz: "Agua en onzas líquidas estadounidenses",
    waterCups: "Agua en tazas estadounidenses",
    strength: "Café por litro de agua",
    cupsUnit: "tazas",
    notes: {
      golden:
        "A modo de comparación, la conocida pauta Golden Cup de la Specialty Coffee Association es de unos 55 g de café por litro de agua, aproximadamente 1:18. Toma cualquier proporción como punto de partida y ajústala a tu gusto.",
      espresso:
        "En el espresso, la proporción suele comparar el café seco con el peso de la bebida terminada, no con el agua que pasa a través de él, así que la cantidad indicada es el peso objetivo de la bebida.",
      coldBrew: "El concentrado de cold brew es fuerte; normalmente se diluye con agua o leche al gusto antes de beberlo.",
      water: "Se toma el agua como 1 g por mL. Parte del agua se queda en los posos, así que el café preparado es un poco menos que el agua utilizada.",
    },
  },
};

export default es;
