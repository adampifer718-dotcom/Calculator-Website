const text = {
  original: "Recipe serves",
  desired: "I want to serve",
  ingredients: "Ingredients (one per line)",
  ingredientsHelp: "Start each line with the amount, e.g. “1 1/2 cups flour”. Lines without an amount are kept as they are.",
  defaultIngredients: "2 cups flour\n1 1/2 tsp baking powder\n3/4 cup sugar\n2 eggs\n1 cup milk\nSalt to taste",
  factor: "Scale factor",
  caption: "Multiply every amount by {factor}.",
  tableCaption: "Scaled ingredients",
  original_: "Original",
  scaled: "Scaled",
  note: "Whole items such as eggs may need rounding. Baking times and pan sizes do not scale in proportion.",
};
export type RecipeScalerText = typeof text;
export default text;
