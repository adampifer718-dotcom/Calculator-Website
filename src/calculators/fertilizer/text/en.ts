const text = {
  gradeN: "Grade: nitrogen (N)",
  gradeNHelp: "The first number on the bag, in percent by weight. In 10-20-10 it is 10.",
  gradeP: "Grade: phosphate (P₂O₅)",
  gradePHelp: "The second number on the bag. Labels state phosphorus as phosphate (P₂O₅), not as elemental P.",
  gradeK: "Grade: potash (K₂O)",
  gradeKHelp: "The third number on the bag. Labels state potassium as potash (K₂O), not as elemental K.",
  nutrient: "Nutrient the rate is for",
  nutrients: { N: "Nitrogen (N)", P2O5: "Phosphate (P₂O₅)", K2O: "Potash (K₂O)" },
  rate: "Desired nutrient rate",
  rateHelp: "The amount of the chosen nutrient to apply per unit area, usually from a soil test report or a local recommendation.",
  rateUnit: "Rate unit",
  rateUnits: { lb1000ft2: "lb per 1,000 ft²", lbAcre: "lb per acre", kgHa: "kg per hectare", gM2: "g per m²" },
  area: "Area to fertilize",
  areaUnit: "Area unit",
  areaUnits: { ft2: "Square feet (ft²)", m2: "Square meters (m²)", acre: "Acres", ha: "Hectares (ha)" },
  areaSymbols: { ft2: "ft²", m2: "m²", acre: "acres", ha: "ha" },
  errors: {
    zeroGrade: "This product contains none of the chosen nutrient. Choose another nutrient or a product with a non-zero number for it.",
    gradeSum: "The three grade numbers add up to more than 100%. Check the label.",
  },
  product: "Fertilizer product needed",
  caption: "{rate} of {nutrient} ÷ {grade} in a {label} product, over {area}.",
  productOther: "Product needed in other units",
  productRate: "Product rate",
  applied: {
    N: "Nitrogen (N) applied",
    P2O5: "Phosphate (P₂O₅) applied",
    K2O: "Potash (K₂O) applied",
    P: "Elemental phosphorus (P) applied",
    K: "Elemental potassium (K) applied",
  },
  notes: {
    others: "The same amount of product also supplies the other nutrients in its grade, shown below. If the rates they reach are not what you need, use separate products for each nutrient.",
    elemental: "Elemental amounts use P = P₂O₅ × {p} and K = K₂O × {k}, from standard atomic weights.",
  },
};
export type FertilizerText = typeof text;
export default text;
