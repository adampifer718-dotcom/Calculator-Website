import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { CUP_SIZES, GRAMS_PER_OUNCE, INGREDIENTS, cupsToGrams, density, findIngredient, gramsToCups, type CupSize } from "@/lib/math/cooking";
import { formatKitchenQuantity } from "@/lib/math/fractions";
import { midSentence } from "@/lib/parse";
import en, { type CupsToGramsText } from "./text/en";

export type CupsToGramsValues = { direction: string; ingredient: string; cup: string; cups: number | null; grams: number | null };

/** Converts between cup volumes and grams with a density for each ingredient. */
export function makeCupsToGramsEngine(ctx: EngineContext<CupsToGramsText>) {
  const t = ctx.text;
  const cupOf = (value: string): CupSize => (value in CUP_SIZES ? (value as CupSize) : "us");
  const name = (id: string) => t.ingredients[id as keyof CupsToGramsText["ingredients"]] ?? id;
  return defineEngine<CupsToGramsValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "direction",
        type: "select",
        label: t.direction,
        options: (["toGrams", "toCups"] as const).map((v) => ({ value: v, label: t.directions[v] })),
        defaultValue: "toGrams",
        display: "segmented",
      },
      { id: "ingredient", type: "select", label: t.ingredient, options: INGREDIENTS.map((i) => ({ value: i.id, label: name(i.id) })), defaultValue: "flourAllPurpose" },
      { id: "cup", type: "select", label: t.cup, help: t.cupHelp, options: (Object.keys(CUP_SIZES) as CupSize[]).map((v) => ({ value: v, label: t.cups[v] })), defaultValue: "us" },
      { id: "cups", type: "number", label: t.amountCups, defaultValue: 2, min: 0, minExclusive: true, max: 1000, suffix: t.cupsUnit, visibleWhen: { field: "direction", oneOf: ["toGrams"] } },
      { id: "grams", type: "number", label: t.amountGrams, defaultValue: 500, min: 0, minExclusive: true, max: 1000000, suffix: "g", visibleWhen: { field: "direction", oneOf: ["toCups"] } },
    ],
    compute: ({ direction, ingredient, cup, cups, grams }) => {
      const item = findIngredient(ingredient);
      const size = cupOf(cup);
      const cupName = t.cups[size];
      const ingredientName = midSentence(name(item.id), ctx.locale);
      const table = {
        caption: fill(t.tableCaption, { cup: cupName }),
        columns: [t.tableIngredient, t.tableGrams],
        rows: INGREDIENTS.map((i) => ({ label: name(i.id), highlight: i.id === item.id, cells: [{ kind: "number" as const, value: cupsToGrams(1, i, size), decimals: 0, suffix: "g" }] })),
      };
      const notes = [t.notes.method, t.notes.sources];
      const densityItem = { label: t.density, value: { kind: "number" as const, value: density(item), decimals: 3, suffix: "g/mL" } };
      if (direction === "toCups" && grams !== null) {
        const result = gramsToCups(grams, item, size);
        return {
          primary: {
            label: t.cupsResult,
            value: { kind: "number", value: result, decimals: 2, suffix: t.cupsUnit },
            caption: fill(t.cupsCaption, { amount: ctx.fmt.number(grams, 2), ingredient: ingredientName, cup: cupName }),
          },
          secondary: [
            { label: t.kitchen, value: { kind: "text", text: `${formatKitchenQuantity(result, ctx.locale)} ${t.cupsUnit}` } },
            { label: t.milliliters, value: { kind: "number", value: result * CUP_SIZES[size], decimals: 0, suffix: "mL" } },
            densityItem,
          ],
          tables: [table],
          notes,
        };
      }
      const amount = cups ?? 0;
      const result = cupsToGrams(amount, item, size);
      return {
        primary: {
          label: t.grams,
          value: { kind: "number", value: result, decimals: 1, suffix: "g" },
          caption: fill(t.gramsCaption, { amount: ctx.fmt.number(amount, 3), ingredient: ingredientName, cup: cupName }),
        },
        secondary: [{ label: t.ounces, value: { kind: "number", value: result / GRAMS_PER_OUNCE, decimals: 2, suffix: "oz" } }, densityItem],
        tables: [table],
        notes,
      };
    },
  });
}

export const cupsToGramsEngine = makeCupsToGramsEngine(englishContext(en));
