import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { formatKitchenQuantity, parseRecipeLine } from "@/lib/math/fractions";
import en, { type RecipeScalerText } from "./text/en";

export type RecipeValues = { original: number; desired: number; ingredients: string };

const positive = { min: 0, minExclusive: true, max: 10000 } as const;

/** Kitchen fractions such as "1 1/2" are kept in every language. */
export function makeRecipeScalerEngine(ctx: EngineContext<RecipeScalerText>) {
  const t = ctx.text;
  return defineEngine<RecipeValues>({
    locale: ctx.locale,
    fields: [
      { id: "original", type: "number", label: t.original, defaultValue: 4, ...positive },
      { id: "desired", type: "number", label: t.desired, defaultValue: 6, ...positive },
      { id: "ingredients", type: "text", multiline: true, optional: true, label: t.ingredients, help: t.ingredientsHelp, defaultValue: t.defaultIngredients },
    ],
    compute: ({ original, desired, ingredients }) => {
      const factor = desired / original;
      const lines = ingredients
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .slice(0, 100);
      return {
        primary: { label: t.factor, value: { kind: "number", value: factor, decimals: 4 }, caption: fill(t.caption, { factor: ctx.fmt.number(factor, 4) }) },
        tables:
          lines.length > 0
            ? [
                {
                  caption: t.tableCaption,
                  columns: [t.original_, t.scaled],
                  rows: lines.map((line) => {
                    const { quantity, rest } = parseRecipeLine(line);
                    return { label: line, cells: [{ kind: "text" as const, text: quantity === null ? line : `${formatKitchenQuantity(quantity * factor)} ${rest}`.trim() }] };
                  }),
                },
              ]
            : undefined,
        notes: [t.note],
      };
    },
  });
}

export const recipeScalerEngine = makeRecipeScalerEngine(englishContext(en));
