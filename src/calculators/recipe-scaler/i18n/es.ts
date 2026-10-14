import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const es: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Calculadora de raciones para recetas",
    shortTitle: "Raciones de recetas",
    summary: "Aumenta o reduce las cantidades de los ingredientes de una receta para cualquier número de raciones.",
    metaTitle: "Calculadora de raciones para recetas – Ajusta los ingredientes",
    metaDescription:
      "Adapta cualquier receta a un nuevo número de raciones. Pega tu lista de ingredientes y obtén las cantidades ajustadas, expresadas en fracciones fáciles de medir.",
    keywords: ["adaptar receta", "calcular raciones", "ajustar ingredientes", "receta para más personas", "doblar receta", "media receta"],
    intro: [
      "Escalar una receta consiste en multiplicar todas las cantidades por el mismo factor: las raciones deseadas divididas entre las raciones originales.",
      "Pega tu lista de ingredientes y cada cantidad se recalcula y se muestra, cuando es posible, como una fracción habitual en la cocina.",
    ],
    howToUse: [
      "Introduce cuántas raciones salen con la receta.",
      "Introduce cuántas raciones quieres.",
      "Pega los ingredientes, uno por línea, empezando por la cantidad.",
      "Consulta el factor de escala y la lista ajustada.",
    ],
    formulas: [
      { title: "Factor de escala", expression: "factor = raciones deseadas ÷ raciones originales", explanation: "Por ejemplo, 6 ÷ 4 = 1,5." },
      { title: "Nueva cantidad", expression: "nueva cantidad = cantidad original × factor", explanation: "Se aplica a todos los ingredientes que empiezan por una cantidad." },
    ],
    examples: [
      { title: "Una receta de 4 raciones para 6", steps: ["Factor = 6 ÷ 4 = 1,5", "2 tazas → 3 tazas; 3/4 de taza → 1 1/8 tazas"] },
      { title: "Una receta de 8 raciones para 2", steps: ["Factor = 2 ÷ 8 = 0,25", "4 huevos → 1 huevo"] },
    ],
    assumptions: [
      "La cantidad debe ir al principio de la línea, como número entero, decimal, fracción (1/2), número mixto (1 1/2) o símbolo como ½.",
      "Las unidades no se convierten; las cantidades escaladas conservan la unidad original.",
      "Los tiempos de cocción, el tamaño del molde, la levadura y los condimentos no siempre se escalan de forma lineal; ajústalos al gusto y comprueba el punto de cocción.",
    ],
    faqs: [
      { question: "¿Cómo hago media receta?", answer: "Usa un factor de 0,5 indicando como raciones deseadas la mitad de las originales." },
      { question: "¿Y los huevos?", answer: "Redondea al huevo entero más cercano, o bate un huevo y usa solo una parte, pesándola." },
      {
        question: "¿Cambian los tiempos de horneado?",
        answer: "A menudo, sí. Un molde más grande o más pequeño cambia el tiempo de cocción, así que compruébalo antes y ajústalo.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "La receta es para",
    desired: "Quiero servir",
    ingredients: "Ingredientes (uno por línea)",
    ingredientsHelp: "Empieza cada línea por la cantidad, p. ej. «1 1/2 tazas de harina». Las líneas sin cantidad se mantienen tal cual.",
    defaultIngredients: "2 tazas de harina\n1 1/2 cdta. de levadura química\n3/4 taza de azúcar\n2 huevos\n1 taza de leche\nSal al gusto",
    factor: "Factor de escala",
    caption: "Multiplica cada cantidad por {factor}.",
    tableCaption: "Ingredientes ajustados",
    original_: "Original",
    scaled: "Ajustado",
    note: "Los ingredientes que van por unidades, como los huevos, pueden necesitar redondeo. Los tiempos de horneado y el tamaño de los moldes no se escalan en proporción.",
  },
};

export default es;
