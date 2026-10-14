import { defineEngine } from "@/calculators/framework/types";
import { formatKitchenQuantity, parseRecipeLine } from "@/lib/math/fractions";

export type RecipeValues = { original: number; desired: number; ingredients: string };

const positive = { min: 0, minExclusive: true, max: 10000 } as const;

export const recipeScalerEngine = defineEngine<RecipeValues>({
  fields: [
    { id: "original", type: "number", label: "Recipe serves", defaultValue: 4, ...positive },
    { id: "desired", type: "number", label: "I want to serve", defaultValue: 6, ...positive },
    {
      id: "ingredients",
      type: "text",
      multiline: true,
      optional: true,
      label: "Ingredients (one per line)",
      help: "Start each line with the amount, e.g. “1 1/2 cups flour”. Lines without an amount are kept as they are.",
      defaultValue: "2 cups flour\n1 1/2 tsp baking powder\n3/4 cup sugar\n2 eggs\n1 cup milk\nSalt to taste",
    },
  ],
  compute: ({ original, desired, ingredients }) => {
    const factor = desired / original;
    const lines = ingredients
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(0, 100);
    return {
      primary: { label: "Scale factor", value: { kind: "number", value: factor, decimals: 4 }, caption: `Multiply every amount by ${Number(factor.toFixed(4))}.` },
      tables:
        lines.length > 0
          ? [
              {
                caption: "Scaled ingredients",
                columns: ["Original", "Scaled"],
                rows: lines.map((line) => {
                  const { quantity, rest } = parseRecipeLine(line);
                  return {
                    label: line,
                    cells: [{ kind: "text" as const, text: quantity === null ? line : `${formatKitchenQuantity(quantity * factor)} ${rest}`.trim() }],
                  };
                }),
              },
            ]
          : undefined,
      notes: ["Whole items such as eggs may need rounding. Baking times and pan sizes do not scale in proportion."],
    };
  },
});
