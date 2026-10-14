/**
 * Volume-to-weight conversion for cooking. A cup of flour and a cup of honey
 * weigh very different amounts, so every ingredient has its own density.
 *
 * Grams per US cup (236.588 mL), measured by spooning into the cup and
 * levelling, are from the King Arthur Baking ingredient weight chart, except
 * milk and rice (USDA FoodData Central portion weights) and water (density
 * ≈ 1 g/mL). Real weights vary with brand, humidity and how the cup is filled
 * (scooped flour can weigh 20–30% more).
 */

export const US_CUP_ML = 236.5882365;

export const CUP_SIZES = {
  /** US customary cup: 8 US fluid ounces. */
  us: US_CUP_ML,
  /** Metric cup used in Australia, New Zealand, Canada and elsewhere. */
  metric: 250,
  /** US "legal" cup used on nutrition labels. */
  usLegal: 240,
  /** Imperial cup (10 imperial fluid ounces), found in older British recipes. */
  imperial: 284.130625,
} as const;

export type CupSize = keyof typeof CUP_SIZES;

export type IngredientSource = "kingArthur" | "usda" | "water";

export interface Ingredient {
  id: string;
  gramsPerUsCup: number;
  source: IngredientSource;
}

export const INGREDIENTS: readonly Ingredient[] = [
  { id: "flourAllPurpose", gramsPerUsCup: 120, source: "kingArthur" },
  { id: "flourBread", gramsPerUsCup: 120, source: "kingArthur" },
  { id: "flourWholeWheat", gramsPerUsCup: 113, source: "kingArthur" },
  { id: "flourAlmond", gramsPerUsCup: 96, source: "kingArthur" },
  { id: "sugarGranulated", gramsPerUsCup: 198, source: "kingArthur" },
  { id: "sugarBrown", gramsPerUsCup: 213, source: "kingArthur" },
  { id: "sugarPowdered", gramsPerUsCup: 113, source: "kingArthur" },
  { id: "butter", gramsPerUsCup: 227, source: "kingArthur" },
  { id: "oil", gramsPerUsCup: 198, source: "kingArthur" },
  { id: "honey", gramsPerUsCup: 340, source: "kingArthur" },
  { id: "mapleSyrup", gramsPerUsCup: 312, source: "kingArthur" },
  { id: "cocoa", gramsPerUsCup: 84, source: "kingArthur" },
  { id: "oats", gramsPerUsCup: 89, source: "kingArthur" },
  { id: "chocolateChips", gramsPerUsCup: 170, source: "kingArthur" },
  { id: "cornstarch", gramsPerUsCup: 112, source: "kingArthur" },
  { id: "rice", gramsPerUsCup: 185, source: "usda" },
  { id: "milk", gramsPerUsCup: 244, source: "usda" },
  { id: "water", gramsPerUsCup: 236.6, source: "water" },
];

export function findIngredient(id: string): Ingredient {
  return INGREDIENTS.find((i) => i.id === id) ?? INGREDIENTS[0];
}

/** Density in grams per millilitre. */
export function density(ingredient: Ingredient): number {
  return ingredient.gramsPerUsCup / US_CUP_ML;
}

export function cupsToGrams(cups: number, ingredient: Ingredient, cup: CupSize): number {
  return cups * CUP_SIZES[cup] * density(ingredient);
}

export function gramsToCups(grams: number, ingredient: Ingredient, cup: CupSize): number {
  return grams / (CUP_SIZES[cup] * density(ingredient));
}

export const GRAMS_PER_OUNCE = 28.349523125;
