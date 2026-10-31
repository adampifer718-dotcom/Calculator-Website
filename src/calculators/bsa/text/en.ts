const text = {
  weight: "Weight",
  weightUnit: "Weight unit",
  weightUnits: { kg: "Kilograms (kg)", lb: "Pounds (lb)" },
  height: "Height",
  heightUnit: "Height unit",
  heightUnits: { cm: "Centimeters (cm)", in: "Inches (in)" },
  errors: {
    weightRange: "Enter a weight between {min} and {max}.",
    heightRange: "Enter a height between {min} and {max}.",
  },
  bsa: "Body surface area (Mosteller)",
  caption: "√({height} cm × {weight} kg ÷ 3600).",
  bsaFt: "Body surface area (Mosteller) in square feet",
  spread: "Spread between the four formulas",
  table: {
    caption: "Body surface area by formula",
    formula: "Formula",
    m2: "m²",
    ft2: "ft²",
  },
  formulas: { mosteller: "Mosteller (1987)", duBois: "Du Bois and Du Bois (1916)", haycock: "Haycock et al. (1978)", gehanGeorge: "Gehan and George (1970)" },
  notes: {
    estimate: "Every formula is an estimate fitted to a limited group of people; they can differ from each other and from a measured surface area by several percent, most at the extremes of size.",
    dosing: "Do not use this result to work out a medicine dose. Doses based on body surface area must be calculated and checked by a qualified clinician.",
  },
};
export type BsaText = typeof text;
export default text;
