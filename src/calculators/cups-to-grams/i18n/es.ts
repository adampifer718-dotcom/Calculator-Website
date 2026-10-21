import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const es: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Calculadora de tazas a gramos",
    shortTitle: "Tazas a gramos",
    summary: "Convierte tazas a gramos y gramos a tazas para harina, azúcar, mantequilla y otros ingredientes de repostería, cada uno con su propia densidad.",
    metaTitle: "Calculadora de tazas a gramos – Harina, azúcar y más",
    metaDescription:
      "Convierte tazas a gramos y gramos a tazas para 18 ingredientes de repostería con la densidad de cada uno, con tazas de EE. UU., métricas e imperiales.",
    keywords: ["tazas a gramos", "gramos a tazas", "cuántos gramos tiene una taza", "taza de harina en gramos", "taza de azúcar en gramos", "equivalencias de repostería", "medidas de cocina"],
    intro: [
      "Una taza mide volumen, pero una taza de harina pesa mucho menos que una taza de miel. Por eso, para convertir entre tazas y gramos hace falta la densidad de cada ingrediente.",
      "Elige el ingrediente y la taza que usa tu receta. Las recetas estadounidenses usan una taza de 236,6 mL, mientras que muchas recetas australianas, neozelandesas y canadienses usan una taza métrica de 250 mL.",
    ],
    howToUse: [
      "Elige de tazas a gramos o de gramos a tazas.",
      "Elige el ingrediente.",
      "Elige el tamaño de taza que usa la receta.",
      "Introduce la cantidad y consulta el resultado y la tabla por taza.",
    ],
    formulas: [
      { title: "De tazas a gramos", expression: "gramos = tazas × volumen de la taza (mL) × densidad (g/mL)", explanation: "Densidad = gramos en una taza de EE. UU. ÷ 236,588 mL." },
      { title: "De gramos a tazas", expression: "tazas = gramos ÷ (volumen de la taza (mL) × densidad (g/mL))", explanation: "La misma relación, despejando el número de tazas." },
    ],
    examples: [
      {
        title: "2 tazas de EE. UU. de harina de trigo común",
        steps: ["Una taza de EE. UU. de harina de trigo común pesa 120 g", "2 × 120 g = 240 g (unas 8,47 oz)"],
      },
      {
        title: "500 g de azúcar blanco en tazas de EE. UU.",
        steps: ["Una taza de EE. UU. de azúcar blanco pesa 198 g", "500 ÷ 198 ≈ 2,53 tazas, algo más de 2 tazas y media"],
      },
    ],
    assumptions: [
      "Los ingredientes secos se echan en la taza con una cuchara y se enrasan, sin hundir la taza en el paquete ni tamizarlos.",
      "Los pesos son valores típicos; la marca de la harina, el tamaño del grano del azúcar, la humedad y la temperatura pueden cambiarlos en varios puntos porcentuales.",
      "La mantequilla se mide sólida y bien prensada; los líquidos, a temperatura ambiente.",
    ],
    faqs: [
      {
        question: "¿Por qué una taza de harina pesa menos que una de azúcar?",
        answer: "Las partículas de harina retienen más aire y son menos densas, así que el mismo volumen contiene menos masa. Por eso cada ingrediente necesita su propia conversión.",
      },
      {
        question: "¿Qué tamaño de taza debo elegir?",
        answer: "Usa la taza de EE. UU. para recetas estadounidenses y la taza métrica de 250 mL para la mayoría de las recetas australianas, neozelandesas y canadienses. Las recetas británicas antiguas pueden usar la taza imperial, que es más grande.",
      },
      { question: "¿Es mejor pesar que usar tazas?", answer: "Sí, en repostería. Una báscula de cocina evita las variaciones que dependen de cómo se llene la taza." },
    ],
    sourcesUsedFor: [
      "Gramos por taza de harinas, azúcares, mantequilla, aceite, miel, sirope de arce, cacao, copos de avena, pepitas de chocolate y maicena.",
      "Peso de una taza de leche entera y de arroz blanco de grano largo sin cocinar.",
      "El tamaño de la taza de EE. UU. (8 onzas líquidas estadounidenses) y de la onza líquida imperial.",
    ],
  },
  text: {
    direction: "Convertir",
    directions: { toGrams: "Tazas a gramos", toCups: "Gramos a tazas" },
    ingredient: "Ingrediente",
    ingredients: {
      flourAllPurpose: "Harina de trigo común",
      flourBread: "Harina de fuerza",
      flourWholeWheat: "Harina integral de trigo",
      flourAlmond: "Harina de almendra",
      sugarGranulated: "Azúcar blanco",
      sugarBrown: "Azúcar moreno (prensado)",
      sugarPowdered: "Azúcar glas",
      butter: "Mantequilla",
      oil: "Aceite vegetal",
      honey: "Miel",
      mapleSyrup: "Sirope de arce",
      cocoa: "Cacao en polvo (sin azúcar)",
      oats: "Copos de avena",
      chocolateChips: "Pepitas de chocolate",
      cornstarch: "Maicena (almidón de maíz)",
      rice: "Arroz blanco (sin cocinar)",
      milk: "Leche (entera)",
      water: "Agua",
    },
    cup: "Tamaño de la taza",
    cups: {
      us: "Taza de EE. UU. (236,6 mL)",
      metric: "Taza métrica (250 mL)",
      usLegal: "Taza del etiquetado nutricional de EE. UU. (240 mL)",
      imperial: "Taza imperial (284,1 mL)",
    },
    cupHelp: "Las recetas estadounidenses usan la taza de EE. UU.; las australianas, neozelandesas y canadienses suelen usar la taza métrica de 250 mL.",
    amountCups: "Cantidad en tazas",
    amountGrams: "Cantidad en gramos",
    cupsUnit: "tazas",
    grams: "Peso",
    gramsCaption: "{amount} × {cup} de {ingredient}.",
    cupsResult: "Volumen en tazas",
    cupsCaption: "{amount} g de {ingredient}. Medida: {cup}.",
    ounces: "En onzas",
    milliliters: "Volumen en mililitros",
    kitchen: "Medida de cocina más cercana",
    density: "Densidad",
    tableCaption: "Peso de una taza de cada ingrediente ({cup})",
    tableIngredient: "Ingrediente",
    tableGrams: "Gramos",
    notes: {
      method: "Los pesos suponen que los ingredientes se echan en la taza con una cuchara y se enrasan. Sacar la harina directamente del paquete con la taza la compacta y puede añadir un 20–30 %.",
      sources: "Las densidades son valores típicos de la tabla de pesos de ingredientes de King Arthur Baking y de USDA FoodData Central; varían según la marca y las condiciones.",
    },
  },
};

export default es;
