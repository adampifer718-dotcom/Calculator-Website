const text = {
  priceA: "Item A price",
  quantityA: "Item A quantity",
  unitA: "Item A unit",
  priceB: "Item B price",
  quantityB: "Item B quantity",
  unitB: "Item B unit",
  quantityHelp: "The amount in the package, such as 500 for a 500 g bag.",
  units: {
    g: "Grams (g)",
    kg: "Kilograms (kg)",
    oz: "Ounces (oz)",
    lb: "Pounds (lb)",
    mL: "Milliliters (mL)",
    L: "Liters (L)",
    floz: "US fluid ounces (fl oz)",
    gal: "US gallons (gal)",
    item: "Items (count)",
  },
  /** The common unit each kind of quantity is priced in. */
  perUnit: { mass: "kg", volume: "L", count: "item" },
  kindMismatch: "Item B must be measured the same way as item A: both by weight, both by volume or both by count.",
  aCheaper: "Item A is cheaper per unit",
  bCheaper: "Item B is cheaper per unit",
  same: "Both cost the same per unit",
  result: "Better buy",
  caption: "{a} for item A and {b} for item B, per {unit}.",
  unitPriceA: "Item A price per {unit}",
  unitPriceB: "Item B price per {unit}",
  saving: "Saving per unit with the cheaper item",
  difference: "Price difference per {unit}",
  notes: {
    compare: "Prices are compared per {unit} after converting both quantities to the same unit.",
    waste: "A lower unit price is only a saving if you will use the larger amount before it spoils.",
  },
};
export type UnitPriceText = typeof text;
export default text;
