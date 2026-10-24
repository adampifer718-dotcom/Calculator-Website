import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const es: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Calculadora de porcentaje panadero",
    shortTitle: "Porcentaje panadero",
    summary:
      "Convierte porcentajes panaderos en pesos de ingredientes a partir del peso de la harina, o calcula la harina necesaria para un peso de masa objetivo, con la hidratación.",
    metaTitle: "Calculadora de porcentaje panadero – Pesos e hidratación",
    metaDescription:
      "Convierte porcentajes panaderos en gramos u onzas de harina, agua, sal, levadura y extras, calcula la harina para un peso de masa objetivo y consulta la hidratación.",
    keywords: [
      "porcentaje panadero",
      "porcentajes de panadería",
      "hidratación del pan",
      "calculadora de masa",
      "fórmula de pan",
      "masa de pizza pesos",
      "hidratación de la masa",
    ],
    intro: [
      "Los panaderos escriben las fórmulas de pan como porcentajes de la harina. La harina siempre es el 100 %, y todos los demás ingredientes se expresan en relación con ella: una masa con un 70 % de agua lleva 700 g de agua por cada 1.000 g de harina. Como los porcentajes se refieren a la harina, suman más del 100 %.",
      "Así es fácil escalar y comparar recetas. Introduce un peso de harina para obtener el peso de cada ingrediente, o introduce la masa total que quieres, por ejemplo cuatro bolas de pizza de 250 g, para saber con cuánta harina empezar.",
    ],
    howToUse: [
      "Elige si partes del peso de la harina o del peso total de masa que quieres.",
      "Elige gramos u onzas e introduce el peso.",
      "Introduce los porcentajes de agua, sal y levadura, y hasta tres ingredientes adicionales como aceite, azúcar o mantequilla, cada uno con un nombre opcional.",
      "Consulta en la tabla el peso de cada ingrediente, el peso total de la masa y la hidratación.",
    ],
    formulas: [
      {
        title: "Peso de un ingrediente",
        expression: "peso = peso de la harina × porcentaje ÷ 100",
        explanation: "El porcentaje de cada ingrediente se refiere al peso total de la harina, que es el 100 %.",
      },
      { title: "Peso total de la masa", expression: "masa = harina × Σ% ÷ 100", explanation: "Σ% es la suma de todos los porcentajes, incluido el 100 % de la harina." },
      {
        title: "Harina para un peso de masa objetivo",
        expression: "harina = masa objetivo ÷ (Σ% ÷ 100)",
        explanation: "Para 1.500 g de masa con Σ% = 171,5 %, la harina es 1.500 ÷ 1,715 ≈ 874,6 g.",
      },
      { title: "Hidratación", expression: "hidratación = agua ÷ harina × 100 %", explanation: "En porcentaje panadero es simplemente el porcentaje de agua." },
    ],
    examples: [
      {
        title: "Pan básico con 1.000 g de harina al 70 % de hidratación",
        steps: ["Agua = 1.000 × 0,70 = 700 g", "Sal = 20 g y levadura = 10 g", "Total = 1.000 × 173 % = 1.730 g de masa"],
      },
      {
        title: "1.500 g de masa de pizza con un 3 % de aceite de oliva",
        steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5 %", "Harina = 1.500 ÷ 1,715 ≈ 874,6 g", "Agua = 874,6 × 0,65 ≈ 568,5 g"],
      },
      {
        title: "Pan de molde con 16 oz de harina y un 5 % de azúcar",
        steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5 %", "Agua = 16 × 0,68 = 10,88 oz; azúcar = 0,8 oz", "Total = 16 × 1,755 = 28,08 oz de masa"],
      },
    ],
    assumptions: [
      "Todos los porcentajes son en peso y se refieren al peso total de todas las harinas de la receta.",
      "La hidratación solo cuenta la línea del agua. La leche, los huevos, la mantequilla o la masa madre también contienen agua (y la masa madre contiene harina), así que añádelos como líneas adicionales y ajusta el agua si quieres una hidratación total exacta.",
      "El peso de la masa es la suma de los ingredientes antes de hornear. Siempre se queda algo de masa pegada a los recipientes y utensilios, y el pan pierde peso en el horno, así que cuenta con un poco de margen cuando necesites pesos de pieza exactos.",
    ],
    faqs: [
      {
        question: "¿Por qué los porcentajes panaderos suman más del 100 %?",
        answer:
          "Porque cada ingrediente se compara con la harina, no con la masa entera. La harina sola es el 100 %, así que en cuanto se añaden el agua, la sal y la levadura el total siempre supera el 100 %, a menudo en torno al 160–180 % en el pan.",
      },
      {
        question: "¿Qué significa un 70 % de hidratación?",
        answer:
          "Significa que la masa tiene 70 g de agua por cada 100 g de harina. Una hidratación mayor da una masa más húmeda y pegajosa y, por lo general, una miga más abierta; una menor da una masa más firme y fácil de formar.",
      },
      {
        question: "¿Cómo escalo una receta con porcentajes panaderos?",
        answer:
          "Mantén los mismos porcentajes y cambia solo el peso de la harina, o introduce la masa total que necesitas y deja que la calculadora obtenga la harina. Todos los demás ingredientes se escalan automáticamente con ella.",
      },
    ],
    sourcesUsedFor: [
      "La definición de porcentaje panadero: cada ingrediente como porcentaje del peso total de la harina, que siempre es el 100 %.",
    ],
  },
  text: {
    mode: "Partir de",
    modes: { fromFlour: "Peso de la harina", fromDough: "Peso de masa objetivo" },
    unit: "Unidad de peso",
    units: { g: "Gramos (g)", oz: "Onzas (oz)" },
    flour: "Peso total de la harina",
    flourHelp: "Toda la harina de la receta en conjunto. Cuenta como el 100 %.",
    dough: "Peso de masa objetivo",
    doughHelp: "El peso total de masa que quieres, por ejemplo el número de panes o pizzas multiplicado por el peso de cada uno.",
    water: "Agua",
    salt: "Sal",
    yeast: "Levadura",
    pctHelp: "Como porcentaje del peso de la harina.",
    extraName: "Ingrediente adicional {n} (opcional)",
    extraNamePlaceholder: "p. ej., aceite de oliva",
    extraPct: "Ingrediente adicional {n}, % de la harina",
    extraDefault: "Ingrediente adicional {n}",
    doughWeight: "Peso total de la masa",
    flourNeeded: "Harina necesaria",
    captionFlour: "{flour} de harina con un total de {total}.",
    captionDough: "{dough} de masa ÷ ({total} ÷ 100).",
    flourOut: "Harina",
    totalPct: "Suma de todos los porcentajes",
    hydration: "Hidratación (agua ÷ harina)",
    waterOut: "Peso del agua",
    tableCaption: "Pesos de los ingredientes",
    colIngredient: "Ingrediente",
    colPercent: "Porcentaje panadero",
    colWeight: "Peso",
    flourRow: "Harina",
    totalRow: "Masa total",
    notes: {
      hydration:
        "La hidratación solo cuenta la línea del agua. La leche, los huevos, la masa madre u otros ingredientes húmedos también aportan agua, así que la hidratación real de la masa es mayor si los usas.",
      rounding: "Las cantidades pequeñas, como la levadura y la sal, se pesan con más precisión en una báscula que marque 0,1 g.",
    },
  },
};

export default es;
